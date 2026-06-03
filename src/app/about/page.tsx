import type { Metadata } from "next";
import Image from "next/image";
import { site } from "@/lib/content";
import { ArrowLink, Container, Eyebrow } from "@/components/primitives";

export const metadata: Metadata = {
  title: "About",
  description:
    "Elite Events LA is a full-service event studio serving Los Angeles and surrounding areas. We plan, style, and run corporate events, personal celebrations, and weddings with warmth and quiet precision.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    title: "Listen",
    body: "We start by understanding the occasion, the people, and the outcome you want. Everything we plan flows from there.",
  },
  {
    title: "Plan",
    body: "We build the timeline, line up the vendors, and pressure-test every contingency before the day arrives.",
  },
  {
    title: "Execute",
    body: "On the day, we run it end to end so it unfolds exactly as planned and you never have to step in.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-6 lg:pt-10">
        <Container>
          <Eyebrow>About</Eyebrow>
          <h1 className="font-display mt-8 max-w-4xl text-balance text-[clamp(2.5rem,6vw,5.5rem)] font-light leading-[1.05] tracking-[-0.01em] text-navy">
            We&apos;re the team behind the day you&apos;ll remember.
          </h1>
          <p className="mt-12 max-w-2xl text-xl leading-relaxed text-ink/80">
            Elite Events is a full-service event company serving Los Angeles
            and surrounding areas. We plan, design, and run events of every kind,
            from corporate gatherings to personal celebrations and weddings, for
            people whose calendars are full and whose moments deserve real care. We
            started with a simple conviction: the people throwing the party should
            get to enjoy it too.
          </p>
          <div className="relative mt-12 aspect-[16/9] overflow-hidden lg:mt-16">
            <Image
              src="/about/hero-gpt.webp"
              alt="Elite Events LA branded box truck loading event gear at the studio facility"
              fill
              priority
              sizes="(max-width: 1400px) 100vw, 1400px"
              className="object-cover"
            />
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="py-28 lg:py-40">
        <Container>
          <Eyebrow>How we work</Eyebrow>
          <div className="mt-12 grid gap-x-10 gap-y-14 md:grid-cols-3">
            {values.map((v, i) => (
              <div key={v.title} className="border-t border-line pt-7">
                <span className="font-display text-sm text-muted">0{i + 1}</span>
                <h2 className="font-display mt-4 text-2xl text-navy">{v.title}</h2>
                <p className="mt-3 leading-relaxed text-ink/75">{v.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Statement */}
      <section className="pb-28 lg:pb-40">
        <Container>
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-3">
              <Eyebrow>Our promise</Eyebrow>
            </div>
            <p className="md:col-span-9 font-display text-[clamp(1.75rem,3.4vw,3rem)] font-light leading-[1.22] text-navy text-pretty">
              We carry the complexity behind every event, delivering seamless
              execution so you can experience the moment without{" "}
              <em className="italic">distraction.</em>
            </p>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section>
        <Container>
          <div className="flex flex-col items-start justify-between gap-10 border-t border-line pt-20 md:flex-row md:items-end lg:pt-28">
            <h2 className="font-display max-w-2xl text-balance text-[clamp(2rem,4.5vw,4rem)] font-light leading-[1.05] text-navy">
              Let&apos;s talk about what you&apos;re planning.
            </h2>
            <ArrowLink href="/contact">Tell us about your event</ArrowLink>
          </div>
          <p className="mt-10 text-muted">
            {site.serviceArea} ·{" "}
            <a href={site.phoneHref} className="link-underline text-ink hover:text-navy">
              {site.phone}
            </a>
          </p>
        </Container>
      </section>
    </>
  );
}
