---
title: '¿Cómo funciona Docker por dentro?'
slug: 'como-funciona-docker-por-dentro'
date: 2026-07-19T08:00:00+02:00
draft: false
type: 'blog'
tags:
  - docker
  - devops
---

![](/images/blog/20260719-como-funciona-docker-por-dentro.jpeg "¿Cómo funciona Docker por dentro?'")

Levantamos un contenedor con un solo comando, pero ¿qué ocurre realmente en tu sistema para que ese comando termine siendo un proceso de Linux?

##### 1️⃣ El inicio: CLI y daemon

El Docker CLI recibe tu comando y lo envía como una llamada de API al Docker Daemon (dockerd), que se ejecuta en el host.

Dockerd comprueba si la imagen ya está en disco. Si no lo está, la descarga desde un registro (como Docker Hub o ECR) y prepara la configuración.

##### 2️⃣ containerd

Dockerd NO arranca el contenedor directamente.

En su lugar, delega la petición en containerd, que gestiona el ciclo de vida del contenedor. Este prepara los artefactos de ejecución y ensambla un paquete con la configuración OCI y el sistema de archivos raíz.

##### 3️⃣ El ejecutor: runc

Aquí entra runc. Containerd lo invoca para que lea el paquete anterior, cree los namespaces de Linux y los montajes definidos en la configuración, y arranque el proceso dentro de ellos.

Una vez el proceso está en marcha, runc se retira y termina.

##### 4️⃣ ¿Qué es realmente un contenedor?
Un contenedor en ejecución es un proceso normal de Linux con su propio PID, red y namespaces de montaje. Su sistema de archivos es una pila de capas de imágenes de solo lectura, con una capa de escritura en la parte superior.

##### 5️⃣ Aislamiento del kernel

Aquí no hay un sistema operativo invitado ni un hipervisor: el aislamiento es nativo gracias al kernel de Linux.

- Namespaces: separan los procesos.
- Cgroups: limitan el uso de CPU y memoria.
- Network namespaces: proporcionan interfaces de red propias.


##### 6️⃣ ¡Y listo! Eso es lo que ocurre por detrás de un simple comando.

Ahora os toca a vosotros: ¿dónde os encontráis la mayoría de problemas con contenedores? ¿En la imagen, en la red o en los límites de recursos (cgroups)? ¡Os leo! 👇
