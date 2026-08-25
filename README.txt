TOSHIBATECH / DYNABOOK ONE PAGE
Dominio: https://informaticoschamberi.com.es/
Teléfono SOLO en caja de información: +34 910 05 37 53
Teléfono en botones: +34 910 05 24 89
Diagnóstico gratuito.
Diseño rojo y negro.
Incluye logotipo e isotipo originales, WhatsApp, recogida, Google Business, YouTube, Cal.com, formulario SMTP, chatbot n8n, mapa y SEO.
Variables Vercel: SMTP_HOST, SMTP_PORT=465, SMTP_SECURE=true, SMTP_USER, SMTP_PASS, CONTACT_EMAIL.
El correo no aparece visible en la web.
No se proporcionó Google Analytics, por lo que no se añadió un ID inventado.

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
