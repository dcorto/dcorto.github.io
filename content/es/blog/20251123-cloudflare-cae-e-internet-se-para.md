---
title: 'Cloudflare cae e Internet se para'
slug: 'cloudflare-cae-e-internet-se-para'
date: 2025-11-23T08:00:00+02:00
draft: false
type: 'blog'
tags: 
    - sre
    - tecnología
    - cloudflare
---

![](/images/blog/20251123-cloudflare-cae-e-internet-se-para.jpeg "Cloudflare cae e Internet se para")

El pasado martes 18 de noviembre, Cloudflare sufrió su mayor caída desde 2018. Dane Knecht, CEO de Cloudlfare dió 
la cara y pidió disculpas por el incidente (https://x.com/dok2001/status/1990791419653484646) y ya anunció, como es 
habitual en Cloudflare, total transparencia con lo ocurrido y las medidas que se tomarán para evitar que se repita un incidente así.

El problema que tuvo Cloudflare fue un fallo de lo más “tonto”, duplicarón registros en una base de datos del sistema 
para la mitigación de bots, lo que provoco que los sistemas que usaban los registros de la base de datos se quedarán 
sin memoria y empezarón a fallar en cascada, el equipo de respuesta asumió un ataque de Denegación de 
Servicio Distribuido (DDoS) debido al patrón de tráfico anómalo. La realidad fue un **auto-sabotaje** operativo. 

Cuando se dierón cuenta del error, la configuración maliciosa ya se había aplicado en la mayoría de sus sistemas, 
por lo que al empezar a mitigar el problema, les demoro unas horas en tener todos los sistemas restablecidos con la 
configuración correcta.

Una vez más, queda patente lo frágil que es nuestro sistema tecnológico e hiperconectado. La dependencia de pocos 
*actores* globales hace que un simple *bug* tenga una **repercusión** a nivel mundial.

Si quieres conocer más detalles del incidente, aquí está el blogpost oficial: https://blog.cloudflare.com/18-november-2025-outage/
