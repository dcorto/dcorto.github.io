---
title: '7 puntos clave antes de un refactor de código'
slug: '7-puntos-clave-antes-de-un-refactor-de-codigo'
date: 2025-11-09T08:00:00+02:00
draft: false
type: 'blog'
tags: 
    - deuda técnica
    - software
    - programación
---

![](/images/blog/20251109-7-puntos-clave-antes-de-un-refactor-de-codigo.jpeg "7 puntos clave antes de un refactor de código")

Aquí os dejo 7 puntos clave a tener en cuenta antes de lanzarse a reescribir código, con el fin de asegurar que un 
proyecto de refactorización sea un éxito y no una pérdida de tiempo:

1️⃣ **Entender con qué se está trabajando:** Antes de cambiar cualquier cosa, es crucial estudiar a fondo el código 
base actual y las pruebas existentes. Comprender la "historia" del código, sus fortalezas, los requisitos y los casos 
extremos cubiertos por las pruebas ayuda a evitar desechar conocimientos valiosos.

2️⃣ **Resistir la tentación de reescribirlo todo:** Aunque el código sea "feo," funciona e incluye soluciones a errores y 
casos extremos ya resueltos. Desecharlo todo y empezar de cero conlleva el riesgo de reintroducir bugs ya corregidos. 
La motivación debe ser un beneficio tangible, no solo el deseo de escribir mejor código.

3️⃣ **Hacer cambios incrementalmente:** Las modificaciones pequeñas y graduales son mucho más fáciles de gestionar, 
con menor riesgo y además permiten una retroalimentación rápida a través de las pruebas. Esto evita la frustración de 
tener cientos de pruebas fallidas a la vez y entregar mejora continua.

4️⃣ **Preservar y construir sobre las pruebas existentes:** Los tests son cruciales y una documentación viva del 
comportamiento del código. No deben eliminarse a la ligera. Al refactorizar, asegúrate de que las pruebas existentes 
sigan pasando para garantizar que no se ha roto la lógica de negocio.

5️⃣ **Revisar las motivaciones:** La refactorización debe estar impulsada por mejoras objetivas (el código es difícil 
de entender/modificar, tiene errores difíciles de solucionar o es lento), no por motivos de ego o la preferencia por un 
estilo personal.

6️⃣ **Evaluar los cambios de tecnología cuidadosamente:** Evita refactorizar solo para usar la tecnología "más nueva". 
Cualquier cambio de tecnología o *framework* debe justificarse con razones de negocio sólidas (como falta de soporte o 
vulnerabilidades de seguridad), y no solo por la sensación de estar más actualizado.

7️⃣ **Aceptar que la refactorización puede fallar:** Hay que ser realista sobre los riesgos. A veces, a pesar de la 
mejor planificación, el resultado es peor que el código original. Es importante estar preparado para abandonar el 
proyecto si no está funcionando y seguir con el código existente.

¿Tienes algún punto clave más a tener en cuenta a la hora de hacer un refactor? ¡Te leo en los comentarios 👇!
