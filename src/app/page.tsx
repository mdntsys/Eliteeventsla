import Image from "next/image";
import Link from "next/link";
import { divisions, pageDivisions, signatureDivisions, site } from "@/lib/content";
import { ArrowLink, Container, Eyebrow, MediaPlaceholder } from "@/components/primitives";
import { JsonLd } from "@/components/json-ld";

export default function HomePage() {
  const orgLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.name,
    description:
      "Full-service event planning, styling, and production for corporate events, personal celebrations, and weddings across Los Angeles and surrounding areas.",
    url: site.url,
    email: site.email,
    telephone: site.phone,
    areaServed: "Los Angeles, California, US",
    address: {
      "@type": "PostalAddress",
      addressRegion: "CA",
      addressCountry: "US",
    },
    serviceType: divisions.map((d) => d.title),
  };

  return (
    <>
      <JsonLd data={orgLd} />

      {/* ───────────────────────── Hero ───────────────────────── */}
      <section className="pt-8 lg:pt-14">
        <Container>
          <Eyebrow>Event planning &amp; production · {site.serviceArea}</Eyebrow>
          <h1 className="font-display mt-8 max-w-5xl text-balance text-[clamp(2.75rem,7vw,6.5rem)] font-light leading-[1.02] tracking-[-0.01em] text-navy">
            Setting the standard for unforgettable events in Los Angeles.
          </h1>

          <div className="relative mt-10 aspect-[16/9] overflow-hidden lg:mt-12">
            <Image
              src="/hero-rooftop.webp"
              alt="Rooftop event at night overlooking the downtown Los Angeles skyline, with string lights, lounge seating, a bar, and catering tables set for a celebration"
              fill
              priority
              sizes="(max-width: 1400px) 100vw, 1400px"
              className="object-cover"
            />
          </div>

          <div className="mt-12 flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
            <ArrowLink href="#worlds">Explore services</ArrowLink>
            <p className="max-w-xl text-lg leading-relaxed text-ink/80">
              Elite Events LA plans, styles, and runs events across Los Angeles and
              surrounding areas: corporate gatherings, personal celebrations, and weddings. From the
              first idea to the last chair folded, we carry the details that don&apos;t
              belong on your plate, so the day feels like yours.
            </p>
          </div>
        </Container>
      </section>

      {/* ───────────────────── Philosophy statement ───────────────────── */}
      <section className="py-28 lg:py-40">
        <Container>
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-3">
              <Eyebrow>Our approach</Eyebrow>
            </div>
            <div className="md:col-span-9">
              <p className="font-display text-[clamp(1.75rem,3.4vw,3rem)] font-light leading-[1.22] text-navy text-pretty">
                We believe the people throwing the party should get to enjoy it too.
                So we take on everything around the moment: the planning, the
                vendors, the timeline, the quiet problem-solving. Then we hand you
                back the part that matters, <em className="italic">being there.</em>
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ───────────────────────── Worlds ───────────────────────── */}
      <section id="worlds" className="scroll-mt-28 py-8">
        <Container>
          <div className="mb-14 flex items-end justify-between gap-6">
            <div>
              <Eyebrow>What we do</Eyebrow>
              <h2 className="font-display mt-4 text-4xl font-light leading-tight text-navy sm:text-5xl">
                Three worlds, one standard of care.
              </h2>
            </div>
          </div>

          <div className="grid gap-x-10 gap-y-16 md:grid-cols-3">
            {pageDivisions.map((d) => (
              <Link key={d.slug} href={`/${d.slug}`} className="group block">
                <MediaPlaceholder
                  label={d.title}
                  ratio="4:5"
                  aspect="aspect-[4/5]"
                  className="transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[0.99]"
                />
                <Eyebrow className="mt-7">{d.eyebrow}</Eyebrow>
                <h3 className="font-display mt-3 text-2xl text-navy">
                  <span className="link-underline">{d.title}</span>
                </h3>
                <p className="mt-3 max-w-sm leading-relaxed text-ink/75">{d.summary}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* ───────────────── Signature / on-demand services ───────────────── */}
      <section className="py-28 lg:py-40">
        <Container>
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <Eyebrow>Add to any event</Eyebrow>
              <h2 className="font-display mt-4 text-4xl font-light leading-tight text-navy sm:text-5xl">
                Support that shows up where you need it.
              </h2>
              <p className="mt-6 max-w-sm leading-relaxed text-ink/75">
                Already have a plan? These services slot into any event, yours or
                someone else&apos;s, to keep the day calm and running.
              </p>
            </div>

            <div className="md:col-span-7 md:col-start-6">
              <ul>
                {signatureDivisions.map((d, i) => (
                  <li
                    key={d.slug}
                    className={`grid gap-2 py-8 sm:grid-cols-[1.4rem_1fr] sm:gap-6 ${
                      i === 0 ? "border-t" : ""
                    } border-b border-line`}
                  >
                    <span className="font-display text-sm text-muted">0{i + 1}</span>
                    <div>
                      <h3 className="font-display text-2xl text-navy">{d.title}</h3>
                      <p className="mt-2 max-w-md leading-relaxed text-ink/75">
                        {d.summary}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* ───────────────────────── Closing CTA ───────────────────────── */}
      <section className="pt-12">
        <Container>
          <div className="border-t border-line pt-20 lg:pt-28">
            <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
              <h2 className="font-display max-w-3xl text-balance text-[clamp(2.25rem,5vw,4.5rem)] font-light leading-[1.05] text-navy">
                Tell us about the day you have in mind.
              </h2>
              <ArrowLink href="/contact">Tell us about your event</ArrowLink>
            </div>
            <p className="mt-10 text-muted">
              Prefer to talk?{" "}
              <a href={site.phoneHref} className="link-underline text-ink hover:text-navy">
                {site.phone}
              </a>{" "}
              ·{" "}
              <a href={`mailto:${site.email}`} className="link-underline text-ink hover:text-navy">
                {site.email}
              </a>
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
