const { google } = require("googleapis");

const clean = (value, max = 2000) =>
  String(value ?? "")
    .replace(/[<>]/g, "")
    .trim()
    .slice(0, max);

module.exports = async function handler(req, res) {
  const required = [
    "GOOGLE_CLIENT_ID",
    "GOOGLE_CLIENT_SECRET",
    "GOOGLE_REFRESH_TOKEN",
    "GOOGLE_EMAIL",
    "CONTACT_EMAIL"
  ];

  if (req.method === "GET") {
    return res.status(200).json({
      ok: true,
      service: "ToshibaTech contacto API",
      node: process.version,
      environment: Object.fromEntries(
        required.map((key) => [key, Boolean(process.env[key])])
      )
    });
  }

  if (req.method !== "POST") {
    return res.status(405).json({
      ok: false,
      code: "METHOD_NOT_ALLOWED"
    });
  }

  try {
    const missing = required.filter((key) => !process.env[key]);

    if (missing.length) {
      return res.status(500).json({
        ok: false,
        code: "MISSING_ENVIRONMENT_VARIABLES",
        missing
      });
    }

    let data = req.body || {};

    if (typeof data === "string") {
      try {
        data = JSON.parse(data);
      } catch {
        data = Object.fromEntries(new URLSearchParams(data));
      }
    }

    const name = clean(data.name, 80);
    const phone = clean(data.phone, 30);
    const email = clean(data.email, 120);
    const device = clean(data.device, 160);
    const message = clean(data.message, 2500);

    if (!name || !phone || !email || !message) {
      return res.status(400).json({
        ok: false,
        code: "INVALID_FORM_DATA"
      });
    }

    const oauth2Client = new google.auth.OAuth2(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET
    );

    oauth2Client.setCredentials({
      refresh_token: process.env.GOOGLE_REFRESH_TOKEN
    });

    await oauth2Client.getAccessToken();

    const gmail = google.gmail({
      version: "v1",
      auth: oauth2Client
    });

    const subject = "Nueva consulta ToshibaTech";

    const html = `
      <h2>Nueva consulta ToshibaTech</h2>
      <p><b>Nombre:</b> ${name}</p>
      <p><b>Teléfono:</b> ${phone}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Equipo / modelo:</b> ${device || "No indicado"}</p>
      <p><b>Consulta:</b><br>${message.replace(/\n/g, "<br>")}</p>
    `;

    const raw = [
      `From: ToshibaTech <${process.env.GOOGLE_EMAIL}>`,
      `To: ${process.env.CONTACT_EMAIL}`,
      `Reply-To: ${email}`,
      `Subject: =?UTF-8?B?${Buffer.from(subject).toString("base64")}?=`,
      "MIME-Version: 1.0",
      "Content-Type: text/html; charset=UTF-8",
      "",
      html
    ].join("\r\n");

    await gmail.users.messages.send({
      userId: "me",
      requestBody: {
        raw: Buffer.from(raw).toString("base64url")
      }
    });

    return res.status(200).json({
      ok: true
    });
  } catch (error) {
    console.error("ToshibaTech Gmail API error:", error);

    return res.status(500).json({
      ok: false,
      code: "EMAIL_SEND_FAILED"
    });
  }
};