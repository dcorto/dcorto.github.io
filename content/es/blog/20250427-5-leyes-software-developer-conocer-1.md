---
title: 'Las 5 Leyes que todo Software Developer debería conocer (1/2)'
slug: '5-leyes-software-developer-conocer-1'
date: 2025-04-27T11:00:00+02:00
draft: false
type: 'blog'
tags: 
    - tecnología
    - software
---

![](/images/blog/20250427-5-leyes-software-developer-conocer-1.jpeg "Las 5 Leyes que todo Software Developer debería conocer (1/2)")

¿Alguna vez te has preguntado por qué algunos proyectos de software se retrasan inexplicablemente o por qué las métricas a veces nos engañan? Estas 5 leyes, que todo software developer debería conocer, ofrecen algunas respuestas:

1️⃣ La ley de Brooks

“Añadir más «recursos humanos» a un proyecto de software retrasado, sólo lo hará ir más retrasado”

El coste de coordinar y alinear a un grupo de personas para llevar a cabo un proyecto nunca debe subestimarse y menos todavía si se añaden personas a medio proyecto.

2️⃣ La ley de Goodhart

“Cuando una métrica se convierte en un objetivo, deja de ser una buena métrica.

El ejemplo muy tonto, contar las líneas de código para medir la productividad: ERROR. Las métricas son buenas, pero no pueden pervertirse para obtener resultados artificiales.

3️⃣ La ley de Hyrum

“Con el suficiente numero de usuarios de una API, no importa lo que prometas en el contrato, alguien dependerá de todos los comportamientos observables del sistema”

A medida que una API va ganando usuarios, los consumidores se acoplan a comportamientos que los propios creadores de la API no habían previsto o documentado. Con el tiempo, incluso pequeños detalles del sistema se convertirán en “features” para ciertos usuarios haciendo que cambios o mejoras en la API sea más complejo llevar a cabo sin “romper” algo para alguien. Esta ley pone nombre al coste y los retos de mantener software en producción y gestionar las expectativas a medida que un sistema crece y evoluciona.

Esto subraya la importancia de una documentación clara y una gestión cuidadosa de las expectativas de los usuarios.

4️⃣ La ley de Conway

“Cualquier organización que diseña un sistema, producirá un diseño donde la estructura es una copia de la estructura de comunicación de la organización”

El software que se produce refleja en mayor o menor medida como está organizada la empresa que lo produce. La ley de Conway sugiere que si queremos que nuestra arquitectura de software tenga una forma o estructura específica, primero debemos organizar nuestros equipos y patrones de comunicación para reflejar la arquitectura deseada.

Un ejemplo: un solo equipo de desarrollo tiende a crear monolitos, en cambio, la existencia de varios equipos suele impulsar la creación de servicios.

5️⃣ La ley de Linus

“Con suficientes ojos, todos los errores son superficiales”

La idea principal es que a más personas trabajando en el proyecto, más fácil es encontrar errores y, por lo tanto, mejorar la calidad del proyecto. Es en esencia la idea del “opensource”, los proyectos donde colaboran muchas personas y de forma transparente ayuda a identificar errores, más que en proyectos privativos.

Este artículo se publicó primero en [LinkedIn](https://www.linkedin.com/feed/update/urn:li:activity:7322182740366245888/)

