import { NextResponse } from "next/server";

/**
 * Inquiry endpoint (stub).
 *
 * TODO: wire to a real destination. For example, send to sales@eliteeventsla.com via
 * Resend/SendGrid, push to a CRM, or store in Supabase. For now it validates the
 * payload and returns success so the form works end-to-end in development.
 */
export async function POST(request: Request) {
  let data: Record<string, unknown>;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = String(data.name ?? "").trim();
  const email = String(data.email ?? "").trim();
  const message = String(data.message ?? "").trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 422 },
    );
  }

  // Until a delivery integration is added, log the inquiry server-side.
  console.log("[inquiry] new submission", { name, email, eventType: data.eventType });

  return NextResponse.json({ ok: true });
}
