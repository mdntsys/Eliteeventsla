import { Fragment } from "react";

/**
 * Full-bleed auto-scrolling banner of event types.
 * Two identical tracks scroll continuously for a seamless loop; hovering the
 * band pauses the motion. Pure CSS; see the `marquee` keyframes in globals.css.
 */
export function Marquee({
  items,
  durationSeconds = 60,
  className = "",
}: {
  items: readonly string[];
  durationSeconds?: number;
  className?: string;
}) {
  const Track = ({ hidden = false }: { hidden?: boolean }) => (
    <div className="flex shrink-0 items-center" aria-hidden={hidden}>
      {items.map((item) => (
        <Fragment key={item}>
          <span className="whitespace-nowrap font-display text-2xl text-navy sm:text-3xl">
            {item}
          </span>
          <span
            className="mx-7 h-1.5 w-1.5 shrink-0 rotate-45 bg-navy/25 sm:mx-9"
            aria-hidden="true"
          />
        </Fragment>
      ))}
    </div>
  );

  return (
    <div className={`group relative overflow-hidden border-y border-line py-6 ${className}`}>
      <div
        className="marquee-track flex w-max"
        style={{ "--marquee-dur": `${durationSeconds}s` } as React.CSSProperties}
      >
        <Track />
        <Track hidden />
      </div>

      {/* soft fade at the edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-cream to-transparent sm:w-28" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-cream to-transparent sm:w-28" />
    </div>
  );
}
