import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { pageDivisions, rentals, site } from "@/lib/content";
import { ArrowLink, Container, Eyebrow, Rule } from "@/components/primitives";
import { JsonLd } from "@/components/json-ld";

export const metadata: Metadata = {
  title: "Rental Catalog",
  description:
    "Elite Events LA keeps a deep in-house rental inventory of tables & umbrellas, chairs, linen, and tents & canopies for events across Los Angeles and surrounding areas. Reach out for the full catalog.",
  alternates: { canonical: "/rentals" },
  openGraph: {
    title: "Rental Catalog | Elite Events LA",
    description:
      "A deep in-house rental inventory for events across Los Angeles and surrounding areas. Reach out for the full catalog.",
    url: `${site.url}/rentals`,
  },
};

export default function RentalsPage() {
  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Event Rental Catalog",
    description: rentals.intro,
    provider: { "@type": "ProfessionalService", name: site.name, url: site.url },
    areaServed: "Los Angeles, California, US",
    url: `${site.url}/rentals`,
  };

  return (
    <>
      <JsonLd data={serviceLd} />

      {/* Hero */}
      <section className="pt-6 lg:pt-10">
        <Container>
          <Eyebrow>{rentals.eyebrow}</Eyebrow>
          <h1 className="font-display mt-5 text-[clamp(2.75rem,6.5vw,6rem)] font-light leading-[1.03] tracking-[-0.01em] text-navy">
            {rentals.title}
          </h1>
          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-ink/80">
            {rentals.intro}
          </p>
        </Container>
      </section>

      {/* Categories grid */}
      <section className="py-24 lg:py-32">
        <Container>
          <Eyebrow>Categories</Eyebrow>
          <div className="mt-12 grid gap-x-10 gap-y-16 sm:grid-cols-2">
            {rentals.categories.map((c) => (
              <div key={c.name}>
                <div className="relative aspect-[4/5] overflow-hidden border border-line bg-white">
                  <Image
                    src={c.image}
                    alt={`${c.name} for event rentals by Elite Events LA`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <h2 className="font-display mt-7 text-2xl text-navy sm:text-3xl">{c.name}</h2>
                <p className="mt-3 max-w-sm leading-relaxed text-ink/75">{c.description}</p>
              </div>
            ))}
          </div>
          <p className="mt-14 max-w-2xl text-muted">
            This is a snapshot of our categories, not the full list. Tell us your
            date and we&apos;ll share everything available.
          </p>
        </Container>
      </section>

      {/* Full-service note: keeps this distinct from the Corporate rentals service */}
      <section className="pb-24 lg:pb-32">
        <Container>
          <Rule />
          <div className="grid gap-6 pt-10 md:grid-cols-12">
            <p className="eyebrow md:col-span-4">Need it handled end to end?</p>
            <p className="md:col-span-8 max-w-xl leading-relaxed text-ink/75">
              Beyond the inventory itself, our team offers full-service rental
              management, including sourcing, delivery, styling, and breakdown, as
              part of planning your event. Explore{" "}
              <Link href="/corporate" className="link-underline text-navy">
                Corporate
              </Link>{" "}
              or{" "}
              <Link href="/contact" className="link-underline text-navy">
                tell us about your event
              </Link>
              .
            </p>
          </div>
        </Container>
      </section>

      {/* CTA + cross links */}
      <section>
        <Container>
          <div className="border-t border-line pt-20 lg:pt-28">
            <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
              <h2 className="font-display max-w-2xl text-balance text-[clamp(2rem,4.5vw,4rem)] font-light leading-[1.05] text-navy">
                Tell us your date and we&apos;ll share the full catalog.
              </h2>
              <ArrowLink href="/contact">Request the catalog</ArrowLink>
            </div>

            <p className="mt-10 text-muted">
              {site.serviceArea} ·{" "}
              <a href={site.phoneHref} className="link-underline text-ink hover:text-navy">
                {site.phone}
              </a>{" "}
              ·{" "}
              <a href={`mailto:${site.email}`} className="link-underline text-ink hover:text-navy">
                {site.email}
              </a>
            </p>

            <div className="mt-16 flex flex-wrap gap-x-10 gap-y-3">
              <span className="eyebrow self-center">Also explore</span>
              {pageDivisions.map((d) => (
                <Link
                  key={d.slug}
                  href={`/${d.slug}`}
                  className="link-underline font-display text-xl text-navy"
                >
                  {d.title}
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
