"use client";

import { useState } from "react";
import { pageDivisions } from "@/lib/content";

type Status = "idle" | "submitting" | "success" | "error";

const eventTypes = [...pageDivisions.map((d) => d.title), "Rentals", "Other"];

const fieldClass =
  "w-full border-0 border-b border-line bg-transparent pb-3 pt-2 text-lg text-ink placeholder:text-muted/70 focus:border-navy focus:outline-none transition-colors";
const labelClass = "eyebrow mb-3 block";

export function InquiryForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="border-t border-line pt-12">
        <p className="eyebrow">Thank you</p>
        <p className="font-display mt-5 text-3xl leading-snug text-navy sm:text-4xl">
          Your note is on its way. We&apos;ll be in touch shortly to start planning.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="link-underline mt-8 eyebrow !text-navy"
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-10 sm:grid-cols-2">
      <div className="sm:col-span-1">
        <label htmlFor="name" className={labelClass}>
          Your name
        </label>
        <input id="name" name="name" required autoComplete="name" className={fieldClass} placeholder="First and last" />
      </div>

      <div className="sm:col-span-1">
        <label htmlFor="email" className={labelClass}>
          Email
        </label>
        <input id="email" name="email" type="email" required autoComplete="email" className={fieldClass} placeholder="you@email.com" />
      </div>

      <div className="sm:col-span-1">
        <label htmlFor="phone" className={labelClass}>
          Phone <span className="lowercase tracking-normal text-muted/70">(optional)</span>
        </label>
        <input id="phone" name="phone" type="tel" autoComplete="tel" className={fieldClass} placeholder="(000) 000-0000" />
      </div>

      <div className="sm:col-span-1">
        <label htmlFor="eventType" className={labelClass}>
          Event type
        </label>
        <select id="eventType" name="eventType" defaultValue="" required className={`${fieldClass} appearance-none`}>
          <option value="" disabled>
            Select one
          </option>
          {eventTypes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="message" className={labelClass}>
          Tell us about it
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className={`${fieldClass} resize-none`}
          placeholder="The occasion, your date or rough timing, the vibe you're after, anything on your mind…"
        />
      </div>

      <div className="sm:col-span-2 flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="group inline-flex items-center gap-4 disabled:opacity-60"
        >
          <span className="eyebrow !text-navy">
            {status === "submitting" ? "Sending…" : "Send inquiry"}
          </span>
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-navy text-cream transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M3 7h8M7.5 3.5 11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </button>
        {status === "error" && (
          <p className="text-sm text-navy">
            Something went wrong. Please email us directly and we&apos;ll jump on it.
          </p>
        )}
      </div>
    </form>
  );
}
