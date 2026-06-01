import Link from "next/link";
import { nav, site } from "@/lib/content";
import { Container } from "@/components/primitives";

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-line bg-cream-deep/40">
      <Container className="py-20 lg:py-28">
        <div className="grid gap-16 md:grid-cols-12">
          {/* Statement */}
          <div className="md:col-span-6 lg:col-span-7">
            <p className="font-display text-3xl leading-[1.15] text-navy sm:text-4xl">
              Let&apos;s make the day
              <br />
              feel effortless.
            </p>
            <Link
              href="/contact"
              className="link-underline mt-8 inline-block font-display text-xl italic text-navy"
            >
              Tell us about your event
            </Link>
          </div>

          {/* Links */}
          <div className="md:col-span-3 lg:col-span-2">
            <p className="eyebrow mb-5">Explore</p>
            <ul className="space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="link-underline text-sm text-ink/80 hover:text-navy"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <p className="eyebrow mb-5">Get in touch</p>
            <ul className="space-y-3 text-sm text-ink/80">
              <li>
                <a href={`mailto:${site.email}`} className="link-underline hover:text-navy">
                  {site.email}
                </a>
              </li>
              <li>
                <a href={site.phoneHref} className="link-underline hover:text-navy">
                  {site.phone}
                </a>
              </li>
              <li className="text-muted">{site.serviceArea}</li>
            </ul>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-2 border-t border-line pt-8 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>{site.tagline}</p>
        </div>
      </Container>
    </footer>
  );
}
