import Link from "next/link";
import type { ReactNode } from "react";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1400px] px-6 sm:px-10 lg:px-16 ${className}`}>
      {children}
    </div>
  );
}

export function Eyebrow({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <p className={`eyebrow ${className}`}>{children}</p>;
}

/** Small wide-tracked link with the reference's circular arrow button. */
export function ArrowLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-4 ${className}`}
    >
      <span className="eyebrow !text-navy">{children}</span>
      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-navy text-cream transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105">
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          aria-hidden="true"
          className="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0.5"
        >
          <path
            d="M3 7h8M7.5 3.5 11 7l-3.5 3.5"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </Link>
  );
}

/**
 * Placeholder for media we'll generate with AI later.
 * Reads as an intentional, framed editorial block rather than a broken image.
 */
export function MediaPlaceholder({
  label = "Imagery to come",
  aspect = "aspect-[4/5]",
  ratio,
  className = "",
}: {
  label?: string;
  aspect?: string;
  /** small ratio note shown in the slot, e.g. "16:9" */
  ratio?: string;
  className?: string;
}) {
  return (
    <div
      className={`group relative overflow-hidden bg-cream-deep ${aspect} ${className}`}
      role="img"
      aria-label={`${label}, image placeholder`}
    >
      {/* soft tonal wash */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(circle at 28% 22%, rgba(22,38,58,0.08), transparent 55%), radial-gradient(circle at 78% 82%, rgba(22,38,58,0.06), transparent 50%)",
        }}
      />

      {/* inset frame + corner ticks */}
      <div className="absolute inset-5 border border-navy/15" />
      <div className="absolute left-5 top-5 h-3 w-3 border-l border-t border-navy/40" />
      <div className="absolute right-5 top-5 h-3 w-3 border-r border-t border-navy/40" />
      <div className="absolute bottom-5 left-5 h-3 w-3 border-b border-l border-navy/40" />
      <div className="absolute bottom-5 right-5 h-3 w-3 border-b border-r border-navy/40" />

      {/* centered image glyph + label */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-6 text-center">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          aria-hidden="true"
          className="text-navy/35"
        >
          <rect x="4" y="7" width="32" height="26" rx="1.5" stroke="currentColor" strokeWidth="1.1" />
          <circle cx="14" cy="16" r="3" stroke="currentColor" strokeWidth="1.1" />
          <path d="M5 28l9-8 7 6 5-4 8 7" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="eyebrow">{label}</span>
        {ratio ? (
          <span className="font-display text-xs italic text-muted">{ratio}</span>
        ) : null}
      </div>
    </div>
  );
}

/** Hairline rule used as an editorial divider. */
export function Rule({ className = "" }: { className?: string }) {
  return <hr className={`border-0 border-t border-line ${className}`} />;
}
