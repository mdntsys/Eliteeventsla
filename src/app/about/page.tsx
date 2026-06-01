import type { Metadata } from "next";
import { site } from "@/lib/content";
import { ArrowLink, Container, Eyebrow, MediaPlaceholder } from "@/components/primitives";

export const metadata: Metadata = {
  title: "About",
  description:
    "Elite Events LA is a full-service event studio serving Los Angeles and surrounding areas. We plan, style, and run corporate events, personal celebrations, and weddings with warmth and quiet precision.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    title: "Warmth first",
    body: "Every event belongs to someone. We plan around the people in the room and the feeling you want them to leave with.",
  },
  {
    title: "Quiet precision",
    body: "The best logistics are invisible. We sweat the timeline, the vendors, and the contingencies so the day feels easy.",
  },
  {
    title: "One point of calm",
    body: "You get one team that carries it all, from first idea to final breakdown, so nothing falls between the cracks.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-16 lg:pt-28">
        <Container>
          <Eyebrow>About</Eyebrow>
          <h1 className="font-display mt-8 max-w-4xl text-balance text-[clamp(2.5rem,6vw,5.5rem)] font-light leading-[1.05] tracking-[-0.01em] text-navy">
            We&apos;re the team behind the day you&apos;ll remember.
          </h1>
          <div className="mt-12 grid gap-10 md:grid-cols-12">
            <div className="md:col-span-3" />
            <p className="md:col-span-9 max-w-2xl text-xl leading-relaxed text-ink/80">
              Elite Events LA is a full-service event studio serving Los Angeles
              and surrounding areas. We plan, design, and run events of every kind,
              from corporate gatherings to personal celebrations and weddings, for
              people whose calendars are full and whose moments deserve real care. We
              started with a simple conviction: the people throwing the party should
              get to enjoy it too.
            </p>
          </div>
          <MediaPlaceholder
            label="Studio portrait"
            ratio="16:9"
            aspect="aspect-[4/5] sm:aspect-[16/9]"
            className="mt-12 lg:mt-16"
          />
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
              Whatever the occasion, we hold the details that don&apos;t belong on your
              plate, so when the day arrives, you can stop managing and start{" "}
              <em className="italic">celebrating.</em>
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
