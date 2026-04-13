import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const nombre = String(formData.get("nombre") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const telefono = String(formData.get("telefono") || "").trim();
    const mensaje = String(formData.get("mensaje") || "").trim();

    if (!nombre || !email || !mensaje) {
      return new Response("Faltan campos obligatorios.", { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response("El email no es válido.", { status: 400 });
    }

    const to = process.env.CONTACT_TO_EMAIL;
    const from = process.env.CONTACT_FROM_EMAIL;

    if (!to || !from || !process.env.RESEND_API_KEY) {
      return new Response("Falta configuración del servidor.", { status: 500 });
    }

    const { error } = await resend.emails.send({
      from,
      to,
      subject: `Nueva consulta web - ${nombre}`,
      replyTo: email,
      html: `
        <h2>Nueva consulta desde garciastefano.com.ar</h2>
        <p><strong>Nombre:</strong> ${escapeHtml(nombre)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Teléfono:</strong> ${escapeHtml(telefono || "-")}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${escapeHtml(mensaje).replace(/\n/g, "<br />")}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return new Response("No se pudo enviar el mensaje.", { status: 500 });
    }

    return Response.json({ ok: true });
  } catch {
    return new Response("Error inesperado en el servidor.", { status: 500 });
  }
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
