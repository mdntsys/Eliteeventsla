/**
 * Central content for Elite Events LA.
 * Copy lives here so pages stay structural and the voice stays consistent.
 */

export const site = {
  name: "Elite Events LA",
  shortName: "Elite Events",
  email: "sales@eliteeventsla.com",
  phone: "661-462-3500",
  phoneHref: "tel:+16614623500",
  serviceArea: "Serving Los Angeles and surrounding areas",
  url: "https://www.eliteeventsla.com",
  tagline: "Full-service event planning, styling, and production.",
} as const;

export const nav = [
  { label: "Personal", href: "/personal" },
  { label: "Corporate", href: "/corporate" },
  { label: "Weddings", href: "/weddings" },
  { label: "Rental Catalog", href: "/rentals" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

/** The three audiences we build for. Same craft, different occasion. */
export type AudienceSlug = "corporate" | "personal" | "weddings";

export type ServiceDivision = {
  slug: string;
  /** short nav/card title */
  title: string;
  /** kicker shown above the title */
  eyebrow: string;
  /** one-line summary for cards */
  summary: string;
  /** longer editorial intro for the page hero */
  intro?: string;
  /** heading above the pillars on the audience page */
  servicesHeading?: string;
  /** optional callout shown after the pillars (e.g. weddings: baby & dog) */
  note?: { heading: string; body: string };
  /** event types shown in the scrolling banner above the pillars */
  eventTypes?: readonly string[];
  /** optional wide hero image (falls back to a placeholder if absent) */
  heroImage?: string;
  hasPage: boolean;
};

export const divisions: ServiceDivision[] = [
  {
    slug: "corporate",
    title: "Corporate",
    eyebrow: "For teams & brands",
    summary:
      "Considered, on-brand experiences your guests remember and your team never has to chase.",
    intro:
      "From product launches and conferences to holiday parties and private client dinners, we plan corporate events that feel as polished as the brand behind them. You stay focused on the room; we hold everything around it.",
    servicesHeading: "The solution to your organization's Los Angeles-based event.",
    heroImage: "/heroes/corporate-banquet.webp",
    eventTypes: [
      "Product Launches",
      "Conferences",
      "Summits",
      "Galas",
      "Award Shows",
      "Holiday Parties",
      "Company Retreats",
      "Team Offsites",
      "Client Dinners",
      "Networking Mixers",
      "Grand Openings",
      "Press Events",
      "Brand Activations",
      "Pop-Ups",
      "Trade Shows",
      "Investor Events",
      "Board Dinners",
      "Panels & Talks",
      "Fundraisers",
      "Company Anniversaries",
      "Employee Appreciation",
      "Sales Kickoffs",
      "Workshops",
      "VIP Experiences",
    ],
    hasPage: true,
  },
  {
    slug: "personal",
    title: "Personal",
    eyebrow: "For your people",
    summary:
      "Birthdays, showers, milestones, and gatherings, all designed around the moment and the people in it.",
    intro:
      "The best celebrations feel effortless because someone took care of everything you didn't see. We design and run personal events of every shape, from an intimate dinner to a fully themed party, so you get to be a guest at your own celebration.",
    servicesHeading: "Everything your *personal* celebration needs, in one place.",
    heroImage: "/heroes/personal-celebrate.webp",
    eventTypes: [
      "Birthday Parties",
      "Baby Showers",
      "Graduation Parties",
      "Engagement Parties",
      "Anniversary Parties",
      "Gender Reveals",
      "Bar & Bat Mitzvahs",
      "Quinceañeras",
      "Christenings & Baptisms",
      "Retirement Parties",
      "Holiday Gatherings",
      "Dinner Parties",
      "Cocktail Parties",
      "Family Reunions",
      "Housewarmings",
      "Promotion Celebrations",
      "New Year's Eve Parties",
      "Garden Parties",
      "Pool Parties",
      "Backyard Celebrations",
      "Themed Parties",
      "Sweet Sixteens",
      "First Communions",
      "Welcome Home Parties",
      "Going-Away Parties",
      "Dog Birthdays",
    ],
    hasPage: true,
  },
  {
    slug: "weddings",
    title: "Weddings",
    eyebrow: "And life's milestones",
    summary:
      "Weddings, plus baby and dog celebrations. The days that mark a new chapter, held with care.",
    intro:
      "We plan the day with the calm attention it deserves. Design, logistics, and every vendor are handled so the two of you can stay in the moment. The same care extends to life's other milestones, including baby celebrations and dog parties.",
    servicesHeading: "Everything the day needs, beautifully handled.",
    heroImage: "/heroes/weddings-beach.webp",
    eventTypes: [
      "Weddings",
      "Micro Weddings",
      "Destination Weddings",
      "Elopements",
      "Vow Renewals",
      "Proposals",
      "Engagement Parties",
      "Rehearsal Dinners",
      "Welcome Parties",
      "Bridal Showers",
      "Bachelorette Parties",
      "Bachelor Parties",
      "Ceremonies",
      "Receptions",
      "Day-After Brunches",
      "Anniversary Celebrations",
    ],
    note: {
      heading: "Beyond the wedding",
      body: "We bring the same heart to life's other milestones, like baby showers, gender reveals, and first-birthday moments. And yes, we plan milestone celebrations for the family member with four legs.",
    },
    hasPage: true,
  },
  {
    slug: "coordinator",
    title: "On-Site Coordinator & Staff",
    eyebrow: "Add to any event",
    summary:
      "Deploy a full personal coordinator or trained staff member to run your event on the ground.",
    hasPage: false,
  },
  {
    slug: "concierge",
    title: "Event Concierge & Pick-Ups",
    eyebrow: "Add to any event",
    summary:
      "On-demand messenger service and party concierge, with pick-ups and errands handled mid-event.",
    hasPage: false,
  },
  {
    slug: "logistics",
    title: "Event Logistics",
    eyebrow: "Add to any event",
    summary:
      "Pre-event, on-site, and post-event logistics that form the operational backbone behind a calm day.",
    hasPage: false,
  },
];

export const pageDivisions = divisions.filter((d) => d.hasPage);
export const signatureDivisions = divisions.filter((d) => !d.hasPage);

export function getDivision(slug: string) {
  return divisions.find((d) => d.slug === slug);
}

/**
 * Shared service pillars: the "what we do." The same six capabilities apply to
 * every audience; only the framing changes. Each audience page renders these
 * pillars with its own copy, so there's a single source of truth and no
 * contradictory per-division lists.
 */
export type Pillar = {
  id: string;
  title: string;
  /** audience-specific description */
  detail: Record<AudienceSlug, string>;
  /** audience-specific example tags */
  examples: Record<AudienceSlug, string[]>;
};

export const pillars: Pillar[] = [
  {
    id: "planning",
    title: "Planning & Coordination",
    detail: {
      corporate:
        "From kickoff to load-out, we run the plan for launches, conferences, galas, and client dinners, managing the timeline, the budget, and every vendor so your team can stay focused on the room.",
      personal:
        "We hold the whole plan for your celebration: the schedule, the vendors, the day-of details. We can also place a dedicated coordinator on site so you get to be a guest at your own party.",
      weddings:
        "Full wedding planning and day-of coordination, from the engagement to the send-off, with a lead coordinator running the day so the two of you stay in the moment.",
    },
    examples: {
      corporate: ["Full-service planning", "Day-of coordination", "On-site staff"],
      personal: ["Full-service planning", "Day-of coordination", "Dedicated coordinator"],
      weddings: ["Full planning", "Month-of coordination", "Day-of management"],
    },
  },
  {
    id: "design",
    title: "Design & Styling",
    detail: {
      corporate:
        "Branded environments that match your identity exactly, from signage and printed pieces to staging and styled spaces that look as considered as the brand behind them.",
      personal:
        "Decorations and fully realized themes designed around your occasion, from an intimate palette to a top-to-bottom themed set-up, plus florals and canopies to shape the space.",
      weddings:
        "A cohesive design across florals, tabletop, stationery, and the whole environment, all romantic, refined, and unmistakably yours.",
    },
    examples: {
      corporate: ["Custom branding", "Signage", "Staging & styling"],
      personal: ["Decorations", "Themed set-ups", "Florals & flower bar", "Canopies"],
      weddings: ["Floral design", "Tablescapes", "Ceremony & reception styling"],
    },
  },
  {
    id: "media",
    title: "Media & Content",
    detail: {
      corporate:
        "Photo, video, and content capture built for the brand, including recap films, social content, and assets your team can use long after the lights come up.",
      personal:
        "Photo and video coverage to keep the day exactly as it felt, plus shareable content for everyone who was there.",
      weddings:
        "Timeless photography and film of the day, the moments you'll return to for years.",
    },
    examples: {
      corporate: ["Event photography", "Recap video", "Branded content"],
      personal: ["Photography", "Video", "Shareable content"],
      weddings: ["Photography", "Wedding film"],
    },
  },
  {
    id: "experiences",
    title: "Experiences & Entertainment",
    detail: {
      corporate:
        "Brand activations and guest experiences that get people engaged, from interactive stations and photo moments to entertainment tuned to your audience.",
      personal:
        "The fun stuff: photo booths, permanent jewelry, live cartoon artists, a flower bar, soft play for the little ones, and custom baked goods and treats.",
      weddings:
        "Memorable guest experiences and favors, from photo moments and permanent jewelry to a flower bar, sweets, and entertainment that fits the celebration.",
    },
    examples: {
      corporate: ["Brand activations", "Photo experiences", "Entertainment"],
      personal: [
        "Photo booth",
        "Permanent jewelry",
        "Cartoon artist",
        "Flower bar",
        "Soft play",
        "Baked goods",
      ],
      weddings: ["Photo booth", "Permanent jewelry", "Flower bar", "Desserts"],
    },
  },
  {
    id: "vendors",
    title: "Vendors & Rentals",
    detail: {
      corporate:
        "Access to our trusted network of caterers, venues, and specialists, all vetted, booked, and managed, plus rentals sourced and delivered as a single, seamless order.",
      personal:
        "The right people and pieces for your party, including vendors we trust and a deep in-house rental inventory of tables, chairs, linen, and more, all handled for you.",
      weddings:
        "Curated vendors and rentals for the whole day, sourced, coordinated, and managed so nothing is left to chance.",
    },
    examples: {
      corporate: ["Vendor access", "Rental management"],
      personal: ["Trusted vendors", "In-house rentals"],
      weddings: ["Vendor curation", "Rentals"],
    },
  },
  {
    id: "logistics",
    title: "Logistics & Concierge",
    detail: {
      corporate:
        "Pre-event load-in, on-site management, and post-event breakdown, plus on-demand concierge and pick-ups so a missing piece never becomes your problem.",
      personal:
        "We handle the logistics before, during, and after, including deliveries, set-up, day-of run of show, and an on-demand concierge for last-minute errands and pick-ups.",
      weddings:
        "Pre-, on-site, and post-wedding logistics, with a concierge on call for the day so every detail lands and nothing falls to you.",
    },
    examples: {
      corporate: ["Pre / on-site / post", "Concierge & pick-ups"],
      personal: ["Pre / on-site / post", "Concierge & pick-ups"],
      weddings: ["Load-in & breakdown", "Day-of concierge"],
    },
  },
];

/**
 * Per-audience pillar imagery. Keyed by audience, then pillar id. Only the
 * audiences/pillars with generated images appear here; everything else falls
 * back to a placeholder.
 */
export const pillarImages: Partial<Record<AudienceSlug, Record<string, string>>> = {
  corporate: {
    planning: "/pillars/corporate/planning.webp",
    design: "/heroes/corporate-keynote.webp",
    media: "/pillars/corporate/media-team.webp",
    experiences: "/pillars/corporate/experiences-handoff-branded.webp",
    vendors: "/pillars/corporate/vendors-buffet.webp",
    logistics: "/pillars/corporate/logistics-radio.webp",
  },
  personal: {
    planning: "/pillars/personal/planning.webp",
    design: "/pillars/personal/design-teams.webp",
    media: "/pillars/personal/media.webp",
    experiences: "/pillars/personal/experiences.webp",
    vendors: "/pillars/personal/vendors-daniel.webp",
    logistics: "/pillars/personal/logistics.webp",
  },
  weddings: {
    planning: "/pillars/weddings/planning.webp",
    design: "/pillars/weddings/design.webp",
    media: "/pillars/weddings/media.webp",
    experiences: "/pillars/weddings/experiences.webp",
    vendors: "/pillars/weddings/vendors-chairs.webp",
    logistics: "/pillars/weddings/logistics.webp",
  },
};

/**
 * Rental Catalog: our in-house inventory, available for any event.
 * Categories only, no item lists: the page exists to signal depth of inventory
 * and drive an inquiry for the full catalog. (Full-service rental *management*
 * lives under the Corporate division so the two don't compete.)
 */
export const rentals = {
  slug: "rentals",
  eyebrow: "Rentals · In-house inventory",
  title: "Our in-house rental collection.",
  intro:
    "We keep a deep in-house inventory so the building blocks of a beautiful event are always within reach, both for our own clients and for planners who need a dependable source. Browse the categories below, then reach out and we'll walk you through everything available for your date.",
  categories: [
    {
      name: "Tables & Umbrellas",
      description: "Dining, cocktail, and accent tables, with shade for any outdoor setting.",
    },
    {
      name: "Chairs",
      description: "Seating for ceremonies, dinners, and lounges, across a range of styles.",
    },
    {
      name: "Linen",
      description: "Tablecloths, napkins, and runners to set the tone of the room.",
    },
    {
      name: "Tents & Canopies",
      description: "Coverage and structure that shape a space and weather the day.",
    },
  ],
} as const;
