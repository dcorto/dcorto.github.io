---
title: 'Volúmenes docker con imágenes distroless'
slug: 'volumenes-docker-con-imagenes-distroless'
date: 2025-09-19T10:00:00+02:00
draft: false
type: 'blog'
tags: 
    - docker
    - devops
    - desarrollo
---

![](/images/blog/20250919-volumenes-docker-con-imagenes-distroless.jpeg "Volúmenes docker con imágenes distroless")

El uso de imágenes distroless (https://github.com/GoogleContainerTools/distroless) para correr nuestras aplicaciones en golang es una buena práctica por las siguientes razones:

- reducir el tamaño de la imagen
- reducir la superficie de ataque (sólo hay 1 binario)
- se ejecutan con un usuario sin privilegios

El ejemplo más sencillo puede ser este:

```docker

FROM golang:1.25.1 AS build

WORKDIR /usr/src/app
COPY go.mod go.sum ./
RUN go mod download
COPY ./ .
RUN CGO_ENABLED=0 go build -o /go/bin/app

FROM gcr.io/distroless/base

USER nonroot:nonroot
COPY --from=build  /go/bin/app /
CMD ["/app"]
```

Usamos la imagen golang:1.25.1 para compilar nuestra aplicación y el binario lo copiamos desde una imagen distroless, qué sólo contendrá el binario.

El problema viene cuando queremos que la aplicación comparta un volumen, por ejemplo, para escribir y leer una base de datos en SQLite, por ejemplo en la ruta siguiente:

`/data/database.sql`

Para ello usamos un volumen, por ejemplo así, con docker compose:

```yaml
services:
  app:
    image: app-image:latest
    volumes:
      - data:/data

volumes:
  data:    
```

Nos encontramos que la aplicación no tendrá permisos para poder escribir en el punto de montaje /data y por lo tanto no podrá crear el database.sql y mucho menos insertar datos.

Los volumenes en docker se montan como “root” por eso no puede un proceso arrancado con otro usuario escribir en él, si no lo preparamos antes.

### Init Container al rescate

La solución, pasa por usar un proceso previo (el init container) que ajuste los permisos y luego arranque tu servicio, con docker compose es así:

```yaml
services:
app:
  image: app-image:latest
  volumes:
    - data:/data
  depends_on:
    change-vol-ownership:
	    # esperamos que termine el servicio antes de iniciar la app
      condition: service_completed_successfully

# este servicio se ejecutará y cambiará los 
# permisos del contenido del path "/data" del volumen
change-vol-ownership:
    image: busybox
    volumes:
      - data:/data
    command: [sh, -c, "touch /data/database.db && chown -R 65532:65532 /data"]

volumes:
  data:
 
```

Añadimos el servicio `change-vol-ownership` que su misión es montar el volumen `data` y crear la database.db en el path que espera la aplicación y hacer un `chown` para el UID y GID 65532 (qué corresponde al usuario y grupo nonroot) que es como se ejecutan las imágenes distroless. Si usas otro tipo de imágen, esos ids pueden cambiar.

Con la configuración del `depends_on` la app no arrancará hasta qué termine el servicio `change-vol-ownership` y así nos aseguramos que queden los datos correctos.

De esta forma tendremos nuestra aplicación corriendo en un entorno distroless y escribiendo en un volumen sin más problemas.

### Alternativa: Usar el mismo Dockerfile

Podemos copiar un directorio vacío hacía dentro de la imagen y asignarle los permisos adecuados, así:

```docker

FROM golang:1.25.1 AS build

WORKDIR /usr/src/app
COPY go.mod go.sum ./
RUN go mod download
COPY ./ .
RUN CGO_ENABLED=0 go build -o /go/bin/app

FROM gcr.io/distroless/base

# Copiamos un directorio vacío asignando 'nonroot' como propietario.
# Esto crea el directorio /data con los permisos correctos.
COPY --chown=nonroot:nonroot ./data/ /data

USER nonroot:nonroot
COPY --from=build  /go/bin/app /
CMD ["/app"]
```

Espero que os resulte útil.
