import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getDivision,
  pageDivisions,
  pillars,
  site,
  type AudienceSlug,
} from "@/lib/content";
import { ArrowLink, Container, Eyebrow, MediaPlaceholder, Rule } from "@/components/primitives";
import { JsonLd } from "@/components/json-ld";
import { Marquee } from "@/components/marquee";

export const dynamicParams = false;

/** Renders a string with *asterisk-wrapped* spans italicized. */
function withEmphasis(text: string) {
  return text.split("*").map((part, i) =>
    i % 2 === 1 ? (
      <em key={i} className="italic">
        {part}
      </em>
    ) : (
      part
    ),
  );
}

export function generateStaticParams() {
  return pageDivisions.map((d) => ({ division: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ division: string }>;
}): Promise<Metadata> {
  const { division } = await params;
  const d = getDivision(division);
  if (!d) return {};
  const title = `${d.title} Events`;
  return {
    title,
    description: d.intro,
    alternates: { canonical: `/${d.slug}` },
    openGraph: {
      title: `${title} | ${site.name}`,
      description: d.intro,
      url: `${site.url}/${d.slug}`,
    },
  };
}

export default async function DivisionPage({
  params,
}: {
  params: Promise<{ division: string }>;
}) {
  const { division: slug } = await params;
  const division = getDivision(slug);
  if (!division || !division.hasPage) notFound();

  const audience = division.slug as AudienceSlug;
  const others = pageDivisions.filter((d) => d.slug !== division.slug);
  const servicesHeading =
    division.servicesHeading ??
    `Everything ${division.title.toLowerCase()} needs, in one place.`;

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${division.title} Event Planning`,
    description: division.intro,
    provider: { "@type": "ProfessionalService", name: site.name, url: site.url },
    areaServed: "Los Angeles, California, US",
    url: `${site.url}/${division.slug}`,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${division.title} services`,
      itemListElement: pillars.map((p) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: p.title },
      })),
    },
  };

  return (
    <>
      <JsonLd data={serviceLd} />

      {/* Hero */}
      <section className="pt-16 lg:pt-24">
        <Container>
          <Eyebrow>{division.eyebrow}</Eyebrow>
          <h1 className="font-display mt-5 text-[clamp(2.75rem,6.5vw,6rem)] font-light leading-[1.03] tracking-[-0.01em] text-navy">
            {division.title}
          </h1>
          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-ink/80">
            {division.intro}
          </p>
          <MediaPlaceholder
            label={`${division.title} hero image`}
            ratio="16:9"
            aspect="aspect-[4/5] sm:aspect-[16/9]"
            className="mt-12 lg:mt-16"
          />
        </Container>
      </section>

      {/* Event types: scrolling banner of what we plan for this audience */}
      {division.eventTypes && (
        <section className="pt-10 lg:pt-14">
          <Container>
            <Eyebrow>Events we plan</Eyebrow>
          </Container>
          <Marquee items={division.eventTypes} className="mt-6" />
        </section>
      )}

      {/* Pillars: same six capabilities, framed for this audience */}
      <section className="pb-24 pt-12 lg:pb-32 lg:pt-16">
        <Container>
          <div className="max-w-3xl">
            <Eyebrow>Our six pillars</Eyebrow>
            <h2 className="font-display mt-4 text-3xl font-light leading-tight text-navy sm:text-4xl">
              {withEmphasis(servicesHeading)}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink/70">
              Every event we take on is built on the same six pillars. It&apos;s a
              deliberate framework. We bring the same rigor and standard of care
              whether we&apos;re producing a corporate launch, a backyard
              celebration, or a wedding, so nothing is left to chance, and nothing
              falls to you.
            </p>
          </div>

          <div className="mt-16 space-y-20 lg:mt-24 lg:space-y-28">
            {pillars.map((p, i) => {
              const imageRight = i % 2 === 0;
              const examples = p.examples[audience];
              return (
                <div
                  key={p.id}
                  className="grid items-center gap-10 md:grid-cols-2 lg:gap-16"
                >
                  <div className={imageRight ? "md:order-2" : "md:order-1"}>
                    <MediaPlaceholder
                      label={p.title}
                      ratio="4:5"
                      aspect="aspect-[4/5]"
                    />
                  </div>
                  <div className={imageRight ? "md:order-1" : "md:order-2"}>
                    <span className="font-display text-sm text-muted">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-display mt-3 text-3xl text-navy sm:text-4xl">
                      {p.title}
                    </h3>
                    <p className="mt-5 max-w-md text-lg leading-relaxed text-ink/75">
                      {p.detail[audience]}
                    </p>
                    {examples.length > 0 && (
                      <p className="eyebrow mt-6 !text-ink/45">
                        {examples.join("  ·  ")}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Optional audience note (e.g. weddings: baby & dog celebrations) */}
      {division.note && (
        <section className="pb-24 lg:pb-32">
          <Container>
            <Rule />
            <div className="grid gap-6 pt-10 md:grid-cols-12">
              <p className="eyebrow md:col-span-4">{division.note.heading}</p>
              <p className="md:col-span-8 max-w-xl leading-relaxed text-ink/75">
                {division.note.body}
              </p>
            </div>
          </Container>
        </section>
      )}

      {/* CTA + cross links */}
      <section className={division.note ? "" : "pt-12"}>
        <Container>
          <div className="border-t border-line pt-20 lg:pt-28">
            <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
              <h2 className="font-display max-w-2xl text-balance text-[clamp(2rem,4.5vw,4rem)] font-light leading-[1.05] text-navy">
                Let&apos;s plan something {division.title.toLowerCase()}.
              </h2>
              <ArrowLink href="/contact">Tell us about your event</ArrowLink>
            </div>

            <div className="mt-16 flex flex-wrap gap-x-10 gap-y-3">
              <span className="eyebrow self-center">Also explore</span>
              {others.map((d) => (
                <Link
                  key={d.slug}
                  href={`/${d.slug}`}
                  className="link-underline font-display text-xl text-navy"
                >
                  {d.title}
                </Link>
              ))}
              <Link
                href="/rentals"
                className="link-underline font-display text-xl text-navy"
              >
                Rental Catalog
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
