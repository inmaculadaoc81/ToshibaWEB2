TOSHIBATECH / DYNABOOK ONE PAGE

REVISIÓN ADICIONAL (checklist unificado de la familia, a petición del cliente — repo 11/48):
- BUG REAL — enlace de Cal.com desactualizado. Actualizado a
  https://cal.com/kelatos/30min?embed=true&theme=light&attendeePhoneNumber=%2B34&overlayCalendar=true.
- Verificado: el correo soporte@kelatos.com no aparece visible.
- BUG REAL — el mensaje prellenado de WhatsApp decía "¡Hola Kelatos!".
  Corregido a "¡Hola ToshibaTech!" en el CTA del hero y en el botón
  flotante.
- BUG REAL — el menú móvil (#mobileMenu) no tenía ningún listener que
  lo cerrara al pulsar un enlace. Añadido el script estándar.
- Verificado: sin iconos ni imágenes con proporciones fijas
  incorrectas.
- Verificado: el H1 en móvil ya está en 48px.
- BUG REAL — botones del hero (.cta) con border-radius de 16px y sin
  estado hover. Aumentado a border-radius:999px; añadido
  filter:brightness(.88) en wa/pickup y fondo negro sólido con texto
  blanco en el botón de teléfono al pasar el ratón.

REVISIÓN ADICIONAL (a petición del cliente, con captura de pantalla):
- BUG REAL — en la tarjeta roja de YouTube (sección "Confianza"), la
  etiqueta "YOUTUBE" era del mismo color rojo que el fondo de la
  tarjeta (.kicker{color:var(--red)} es una regla global reutilizada
  en toda la web, pero dentro de .trust.youtube el fondo es también
  rojo, #c9161d), quedando prácticamente invisible. Corregido con
  ".trust .kicker{color:#fff;opacity:.75}", que además mejora el
  contraste en la tarjeta de Google Business (fondo gris oscuro, donde
  el rojo también se leía peor que un blanco atenuado).

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

REVISIÓN ADICIONAL (checklist unificado de la familia, a petición del cliente):
- H1 repetía la plantilla "no funciona" usada en varios repos ("Tu
  Dynabook no funciona. Aquí te damos la solución."). Reescrito con
  estructura distinta a la del repo hermano ToshibaTech (imperativa en
  vez de dos cláusulas): "Repara tu Dynabook con diagnóstico gratis y
  garantía." (8 palabras).
- BUG REAL — texto decorativo gigante ".hardware-art:before"
  ("DYNABOOK", 76px) sin reducción de tamaño en tablet/móvil, dentro de
  una caja con overflow:hidden que lo recortaba en pantallas
  estrechas. Añadida reducción en tablet (56px) y móvil (38px). El
  ticker ".hero:after" ya se ocultaba correctamente en móvil, no se ha
  tocado.
- BUG REAL — ninguno de los dos botones CTA del hero (WhatsApp ni
  teléfono) tenía icono. Añadidos ambos (verificado con cuidado el
  cierre de las etiquetas </a>: 25 aperturas / 25 cierres).
- BUG REAL — el formulario no tenía ninguna casilla de consentimiento
  de política de privacidad. Añadida desde cero, con el texto y enlace
  estándar de la familia ("Acepto la política de privacidad" →
  https://kelatos.com/privacy-policy/), resaltado en azul (#0758a8).
- Añadida franja de aviso de servicio técnico independiente debajo del
  menú (no existía). Verificado antes que .header no usa display:flex
  directamente, solo su .nav interno, para que la franja se apile
  correctamente debajo.
- Añadido "Sábados, domingos y días festivos estamos cerrados" debajo
  del horario.
- Verificado: no existe ninguna etiqueta/pestaña rotada tipo
  .hero-chip/.hero-tag/.hero-pill/.hero-label en este repo; schema.org
  ya usaba correctamente el teléfono de la caja de información
  (+34 910 05 37 53); formulario correctamente conectado a
  /api/contacto.

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
