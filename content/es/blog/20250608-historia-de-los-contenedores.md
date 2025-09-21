---
title: 'Historia de los contenedores'
slug: 'historia-de-los-contenedores'
date: 2025-06-08T11:00:00+02:00
draft: false
type: 'blog'
tags: 
    - docker
    - devops
---

![](/images/blog/20250608-historia-de-los-contenedores.jpeg "Historia de los contenedores")

Los contenedores modernos son el resultado de décadas de investigación, innovación y sana competencia.

Lo que empezó como una simple llamada al sistema (syscall) en los años 70 ha evolucionado hasta convertirse en un ecosistema completo, vital para la infraestructura tecnológica actual. Pero, ¿conoces su origen?

En 1979, Unix V7 introdujo chroot, una syscall que permitía a un proceso y sus hijos tener un directorio raíz diferente. Fue el primer paso hacia el aislamiento, aunque limitado a solo el sistema de archivos.

El siguiente salto significativo llegó en el año 2000 con las jails de FreeBSD. Estas extendieron el concepto de chroot al aislar no solo el sistema de archivos, sino también el espacio de procesos, la pila de red y los recursos del sistema. Aunque se asemejaban más a la contenedorización actual, su adopción fue limitada.

A principios de los 2000, OpenVZ y Linux-VServer intentaron llevar los contenedores a Linux, pero requerían parches personalizados del kernel, lo que frenó su adopción. Sin embargo, demostraron la necesidad y sentaron las bases para lo que vendría después.

El verdadero avance llegó con la integración de namespaces (2002-2013) y cgroups (2007) en el kernel de Linux. Los namespaces proporcionaron aislamiento de procesos, mientras que los cgroups (integrados por Google) permitieron la limitación de recursos. LXC fue la primera tecnología en combinar ambas, creando contenedores en Linux sin necesidad de parches, incorporando así la verdadera contenedorización en el propio kernel.

Fue el momento perfecto para popularizar esta tecnología.

No es coincidencia que el crecimiento de Docker y los contenedores vayan de la mano. Docker hizo los contenedores accesibles al envolver LXC con una API simple, un sistema de capas de imágenes y herramientas amigables para los desarrolladores. Aunque Docker ha evolucionado, su enfoque en la experiencia del desarrollador fue clave para la adopción masiva de los contenedores.

Si quieres ver el inicio de esta revolución, recuperé este vídeo histórico de Solomon Hykes presentando Docker por primera vez: https://www.youtube.com/watch?v=wW9CAH9nSLs (¡ya han pasado 12 años!).

A medida que la adopción de Docker se disparó, gestionar cientos de contenedores en múltiples hosts se convirtió en un nuevo desafío. Aunque existían soluciones como Docker Swarm, Kubernetes (de código abierto por Google) se convirtió en la solución dominante.

Hoy en día, los contenedores son una pieza fundamental. Todos los principales proveedores de la nube ofrecen servicios de contenedores gestionados, y plataformas serverless que se ejecutan internamente sobre contenedores.

Además, el uso de contenedores ha puesto fin a la típica excusa de "en mi local funciona", al permitir entornos idénticos en todas las fases de desarrollo, pruebas y producción de aplicaciones y servicios.

¿Conocías los orígenes y evolución de los contenedores? ¡Te leo en los comentarios!

Este artículo se publicó primero en [LinkedIn](https://www.linkedin.com/posts/davidcortocamacho_contenedores-docker-kubernetes-activity-7337403016716677120-tiKL/)
