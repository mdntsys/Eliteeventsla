import type { Metadata } from "next";
import { site } from "@/lib/content";
import { Container, Eyebrow } from "@/components/primitives";
import { InquiryForm } from "@/components/inquiry-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell us about your event and Elite Events LA will be in touch to begin planning. Corporate events, celebrations, and weddings across Los Angeles and surrounding areas.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-16 lg:pt-28">
        <Container>
          <Eyebrow>Contact</Eyebrow>
          <h1 className="font-display mt-8 max-w-4xl text-balance text-[clamp(2.5rem,6vw,5.5rem)] font-light leading-[1.05] tracking-[-0.01em] text-navy">
            Let&apos;s plan together.
          </h1>
          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-ink/80">
            Tell us a little about what you&apos;re planning: the occasion, the timing,
            the feeling you&apos;re after. We&apos;ll follow up personally to talk through
            how we can help.
          </p>
        </Container>
      </section>

      {/* Form, with contact details underneath */}
      <section className="py-20 lg:py-28">
        <Container>
          <div className="max-w-3xl">
            <InquiryForm />

            <div className="mt-16 grid gap-8 border-t border-line pt-10 sm:grid-cols-3">
              <div>
                <Eyebrow className="mb-3">Email</Eyebrow>
                <a
                  href={`mailto:${site.email}`}
                  className="link-underline font-display text-lg text-navy"
                >
                  {site.email}
                </a>
              </div>
              <div>
                <Eyebrow className="mb-3">Phone</Eyebrow>
                <a
                  href={site.phoneHref}
                  className="link-underline font-display text-lg text-navy"
                >
                  {site.phone}
                </a>
              </div>
              <div>
                <Eyebrow className="mb-3">Service area</Eyebrow>
                <p className="font-display text-lg text-navy">{site.serviceArea}</p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
