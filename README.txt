TOSHIBATECH / DYNABOOK ONE PAGE
Dominio: https://hpexpert.es/
(CONFIRMADO por el cliente. Corregido en canonical, og:url, JSON-LD,
robots.txt y sitemap.xml — antes apuntaban a informaticoschamberi.com.es,
un dominio que no correspondía a ningún repositorio de la familia
según lo aclarado por el cliente.)

Teléfono SOLO en caja de información: +34 910 05 37 53
Teléfono en botones: +34 914 46 85 03 (CORREGIDO en esta nota: el
README anterior indicaba +34 910 05 24 89, pero ya no coincide con el
número real usado en el HTML desde el commit "actualiza el teléfono de
los botones"; se documenta aquí el número correcto y actual).
Diagnóstico gratuito.
Diseño rojo y negro.
Incluye logotipo e isotipo originales, WhatsApp, recogida, Google Business, YouTube, Cal.com, formulario SMTP, chatbot n8n, mapa y SEO.
Variables Vercel: SMTP_HOST, SMTP_PORT=465, SMTP_SECURE=true, SMTP_USER, SMTP_PASS, CONTACT_EMAIL.
El correo no aparece visible en la web.

Google Analytics:
G-Z4R7BELC35

HISTORIAL: el repositorio era multipágina (4 páginas /modelos/ de
gamas Dynabook y 6 páginas /servicios/) y se convirtió a one-page;
esas páginas fueron eliminadas en commits anteriores. Como ya no
existen en el sitemap actual, se ha añadido middleware.mjs para
redirigir (301) cualquier URL antigua a la home, evitando 404 en
enlaces indexados o backlinks antiguos. Excluye /api/* y cualquier
ruta con extensión de archivo. Se añadió "@vercel/functions": "^2.0.3"
a package.json como dependencia de esta función.

REVISIÓN ADICIONAL (esta pasada):
- BUG CORREGIDO — schema.org usaba el número de los botones
  (+34914468503) en el campo "telephone", en vez del de la caja de
  información. Corregido a +34 910 05 37 53, siguiendo la norma
  confirmada: el schema.org debe reflejar siempre el teléfono de la
  caja de información, no el de los botones.
- Google Analytics: no existía. Añadido G-Z4R7BELC35.
- .navcall: el texto largo ("Atención Telefónica 24 horas 365 días")
  deformaba la píldora del menú (aunque ya tenía white-space:nowrap en
  CSS, el texto seguía siendo demasiado largo). Acortado a solo el
  número (mismo número de los botones, +34 914 46 85 03).
- H1 de portada reescrito, corto, directo y totalmente afirmativo (sin
  interrogación ni condicionales), incluye la marca: "Tu Dynabook no
  funciona. Aquí te damos la solución." Tamaño del H1 aumentado:
  clamp(38-57px) → clamp(46-74px) en escritorio, 40px → 48px en móvil.
- Ya estaba bien (sin tocar): banner de cookies, sección SEO "Guía
  Dynabook", menú móvil, borde blanco del chat, colisión del selector
  del chat ya corregida, api/contacto.js con SMTP + nodemailer.

REVISIÓN (fixes estándar aplicados):
- Menú móvil: no existía botón de menú en móvil (el <nav class="links">
  simplemente se ocultaba con display:none a partir de 920px, sin ninguna
  forma de acceder a él). Añadido botón .menu-btn + menú desplegable
  #mobileMenu con los mismos enlaces, estilizado en negro/blanco a juego
  con la cabecera.
- Chatbot: el selector [class*="chat-window"] coincidía también con
  chat-window-toggle (por contener esa subcadena), pisando su posición.
  Corregido añadiendo :not([class*="toggle"]) al selector de la ventana.
- Añadido borde blanco (border:1px solid #fff!important) al botón del chat.
- Añadida sección de contenido SEO (#guia "Guía Dynabook", enlazada en el
  menú y en el menú móvil) con texto propio sobre el servicio en Madrid.
- Añadidos datos schema.org LocalBusiness (no existían) con la dirección,
  teléfono de los botones (+34 910 05 24 89) y enlaces de Maps/YouTube.
- Añadidas etiquetas og:title/og:description/og:type/og:url y robots.
