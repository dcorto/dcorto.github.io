---
title: 'Writing slower Go Programs'
slug: 'writing-slower-go-programs'
date: 2025-01-19T11:00:00+02:00
draft: false
type: 'blog'
tags: 
    - Go    
---

![](/images/blog/20250119-writing-slower-go-programs.jpeg "Writing slower Go Programs")

🤔 ¿Optimizar al máximo cada nanosegundo en Go? ¡No siempre es necesario! 👀

Go es rápido por naturaleza y tratar de escribir el código más rápido posible es una “pérdida de tiempo” por las siguientes razones (hay excepciones):

1️⃣ La performance en realidad no importa tanto. ⚡

2️⃣ Go es rápido, mucho. 🚀

3️⃣ La legibilidad del código es mejor a que sea rápido. 🤓

1️⃣ La performance en realidad no importa tanto ⚡

No es Go quién es lento, por lo general los cuellos de botella vienen por esperas a recursos externos del propio programa: esperas de peticiones HTTP, consultas a base de datos, etc.

Si necesitáramos realizar optimizaciones no lo haríamos a nivel de Go. Las CPU son ridículamente rápidas en comparación con los accesos a memoria, que son mucho más rápidos que los accesos a disco, que son mucho más rápidos que los accesos a red. Por lo tanto, la velocidad de ejecución de nuestro código es probablemente literalmente lo último de lo que debemos preocuparnos.

Los juegos desarrollados en Go, servidores web y APIs tienen secciones críticas para el rendimiento, por lo que son una clara excepción, donde la latencia de cada subsistema es importante.

2️⃣ Go es rápido por naturaleza 🚀

Las decisiones que tomamos como programadores tienen un impacto en la velocidad de ejecución, esto incluye los accesos a memoria o disco. Go al ser compilado, es más rápido por naturaleza que lenguajes interpretados (PHP, Python…) En Go partimos de una base muy rápida, por lo tanto en general, no necesitamos preocuparnos tanto por el rendimiento de nuestro código en Go.

3️⃣ La legibilidad del código es mejor a que sea “rápido” 🤓

Cada optimización tiene un “trade-off”:

👍 Brevedad: hay más código, por lo tanto, hay que leer más.

🌟 Claridad: Ya no es tan obvio como funciona el código.

💭 Simplicidad: Más funciones, más abstraciones, más indirecciones, mas estructuras de datos a leer y entender.

Los programas en general tienen que ser mantenidos y cambian durante el tiempo, por lo tanto leídos y entendidos. El tiempo del programador es mucho más caro que el tiempo de CPU.

Debemos hacer todo lo posible para que nuestro código sea lo más simple, directo y obvio posible.

💯 En resumen, no estoy defendiendo el hacer programas innecesariamente lentos, lo que digo es que, en primer lugar no necesitas preocuparte por el rendimiento tanto como probablemente crees, cuando lo hagas, por lo general hay formas más fáciles de mejorarlo que escribiendo código oscuro e ingenioso.

En segundo lugar, deberías preocuparte mucho más por la simplicidad y la legibilidad de lo que probablemente lo haces ahora. Cuando piensas en optimización, eso es lo que debes optimizar.

En tercer lugar, estar dispuesto a invertir en legibilidad. Si puedes refactorizar tu programa para hacerlo significativamente más claro, a costa de hacerlo un poquito más lento, entonces hazlo. Cuando el rendimiento sí importa, recuerda que no es gratis.

Este artículo se publicó primero en [LinkedIn](https://www.linkedin.com/posts/davidcortocamacho_golang-programaciaejn-rendimiento-activity-7286827259057860609-vngX)

