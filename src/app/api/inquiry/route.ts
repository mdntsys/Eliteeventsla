import { NextResponse } from "next/server";
import { Resend } from "resend";
import { site } from "@/lib/content";

/** Escape user input before placing it in the HTML email. */
function esc(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  let data: Record<string, unknown>;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = String(data.name ?? "").trim();
  const email = String(data.email ?? "").trim();
  const phone = String(data.phone ?? "").trim();
  const eventType = String(data.eventType ?? "").trim();
  const message = String(data.message ?? "").trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 422 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[inquiry] RESEND_API_KEY is not set");
    return NextResponse.json(
      { error: "Email service is not configured." },
      { status: 500 },
    );
  }

  const firstName = name.split(" ")[0];
  const rows: [string, string][] = [
    ["Name", name],
    ["Email", email],
    ...(phone ? [["Phone", phone] as [string, string]] : []),
    ...(eventType ? [["Event type", eventType] as [string, string]] : []),
  ];

  const detailRows = rows
    .map(
      ([label, value]) =>
        `<tr><td style="padding:4px 16px 4px 0;color:#6f6a60;font-size:13px;white-space:nowrap;vertical-align:top;">${esc(
          label,
        )}</td><td style="padding:4px 0;color:#22211d;font-size:15px;">${esc(value)}</td></tr>`,
    )
    .join("");

  const html = `
  <div style="font-family:Georgia,'Times New Roman',serif;color:#22211d;max-width:560px;margin:0 auto;padding:8px 4px;">
    <p style="font-size:19px;color:#16263a;margin:0 0 16px;">Hi ${esc(firstName)},</p>
    <p style="font-size:15px;line-height:1.6;margin:0 0 16px;">Thank you for reaching out to Elite Events LA. We have received your inquiry and someone from our team will follow up with you personally, soon.</p>
    <p style="font-size:15px;line-height:1.6;margin:0 0 8px;color:#6f6a60;">Here is what you sent us:</p>
    <table style="border-collapse:collapse;margin:0 0 16px;">${detailRows}</table>
    <div style="border-left:2px solid #ddd7ca;padding:2px 0 2px 14px;margin:0 0 20px;color:#22211d;font-size:15px;line-height:1.6;white-space:pre-wrap;">${esc(message)}</div>
    <p style="font-size:15px;line-height:1.6;margin:0 0 4px;">Warmly,</p>
    <p style="font-size:15px;line-height:1.6;margin:0 0 20px;color:#16263a;">Elite Events LA</p>
    <p style="font-size:12px;color:#6f6a60;border-top:1px solid #ddd7ca;padding-top:12px;margin:0;">${esc(site.email)} &middot; ${esc(site.phone)} &middot; ${esc(site.serviceArea)}</p>
  </div>`;

  const text = `Hi ${firstName},

Thank you for reaching out to Elite Events LA. We have received your inquiry and someone from our team will follow up with you personally, soon.

Here is what you sent us:
${rows.map(([l, v]) => `${l}: ${v}`).join("\n")}

Message:
${message}

Warmly,
Elite Events LA
${site.email} · ${site.phone} · ${site.serviceArea}`;

  const resend = new Resend(apiKey);
  try {
    const { error } = await resend.emails.send({
      from: `Elite Events LA <${site.email}>`,
      to: [email],
      bcc: [site.email],
      replyTo: site.email,
      subject: `Thanks for reaching out, ${firstName}`,
      html,
      text,
    });
    if (error) {
      console.error("[inquiry] resend error", error);
      return NextResponse.json({ error: "Could not send your message." }, { status: 502 });
    }
  } catch (err) {
    console.error("[inquiry] send failed", err);
    return NextResponse.json({ error: "Could not send your message." }, { status: 502 });
  }

  console.log("[inquiry] sent", { name, email, eventType });
  return NextResponse.json({ ok: true });
}
