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
  /** short one-line lead shown under the "Our six pillars" eyebrow */
  pillarsLead?: string;
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
      "From product launches and conferences to holiday parties and private client dinners, we plan corporate events that feel as polished as the brand behind them. Every detail is handled behind the scenes, so your brand is the only thing on display.",
    servicesHeading: "The solution to your organization's Los Angeles-based event.",
    pillarsLead: "Six pillars. One standard. Every event.",
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
    pillarsLead: "Six pillars. One standard. Every celebration.",
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
      "We plan the day with the calm attention it deserves. We handle the design, the logistics, and every vendor, so the two of you can stay in the moment. Everything we do serves one goal: to create a day that feels seamless, joyful, and unforgettable, for you and your loved ones.",
    servicesHeading: "Everything the day needs, beautifully handled.",
    pillarsLead: "Six pillars, one beautifully run day.",
    heroImage: "/heroes/weddings-beach-gazebo-runner.webp",
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
        "From the first kickoff call to the final load-out, we run the program so your team can stay present in the room. We carry the timeline, the budget, and every vendor conversation, and we keep a clear line of accountability for each moving part. You receive one point of contact and a plan detailed enough that nothing is left to chance.",
      personal:
        "We hold the whole plan for your celebration: the schedule, the vendors, the day-of details. Long before your first guest arrives, the day is mapped to the minute and every what-if is already accounted for. We can even place a dedicated coordinator on site to run it in real time, so you feel none of that work and simply enjoy the people you invited.",
      weddings:
        "From the engagement to the last dance, we carry the full arc of your wedding, shaping a timeline that holds vendors, family, and the small rituals that matter to you. A lead coordinator runs the day quietly in the background, anticipating each transition before it arrives. The two of you are free to be fully present, which is the only thing the day really asks of you.",
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
        "We build branded environments that read as an extension of your identity, so every surface a guest touches feels intentional and on brand. Signage, printed pieces, staging, and styled spaces are produced to the same standard your marketing team would demand. The result looks considered from the entrance to the smallest detail, because it is.",
      personal:
        "Decorations and fully realized themes designed around your occasion, from an intimate palette to a top-to-bottom themed set-up, with florals and canopies to shape the space. We obsess over the details most people never name: the weight of a linen, the height of a centerpiece, the way the light falls at golden hour. Together, they turn a venue into your celebration.",
      weddings:
        "We build one cohesive visual language across florals, tabletop, stationery, and the rooms themselves, so every element feels drawn from the same story rather than assembled. The palette, textures, and proportions are chosen to reflect who you are as a couple, never a trend borrowed from elsewhere. The result is romantic, refined, and unmistakably yours, from the first invitation to the final tablescape.",
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
        "We capture photo, video, and content shaped around how your brand actually shows up in the world. A team works the room with purpose, gathering the moments that matter to leadership, to your audience, and to the story you want to tell next. You leave with assets ready to publish, repurpose, and share for months afterward.",
      personal:
        "Photo and film coverage that holds onto the day as you actually lived it, the quiet glances and the loud ones alike. You stay present in the room while we capture it, so nothing real has to pause for the lens. Weeks later, it lands back with you, ready to relive and to pass along to everyone who was there.",
      weddings:
        "We pair you with photographers and filmmakers whose instinct is to observe rather than direct, capturing the day as it genuinely unfolds. The glances, the quiet asides, the laughter between the vows are what they are watching for. Years from now, these are the images and films that let you feel the day again, exactly as it was.",
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
        "We design activations and guest experiences that invite genuine participation rather than polite attendance. Each touchpoint is built around your audience and your message, so people remember how the event felt long after they leave the floor. The best of them spark conversation that carries into the days and weeks that follow.",
      personal:
        "The moments that make people linger and laugh, woven through your day so there is always something to discover. Each one is chosen for your crowd, whether you are delighting small children or charming a room of old friends. They give guests something to do with their hands and a story to carry home, long after the last toast.",
      weddings:
        "We design the moments your guests carry home, woven naturally through the celebration rather than staged on the side. Each touch is chosen to suit your particular gathering and the people in it, so nothing feels generic or imported from someone else's wedding. The intent is simple: to leave everyone, including the two of you, with something to remember.",
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
        "We open our trusted network of caterers, venues, and specialists, each one vetted against the standard your event deserves. We negotiate, book, and manage every relationship, then consolidate rentals into a single coordinated order so nothing arrives late or unaccounted for. You work with us, and we hold everyone else to account.",
      personal:
        "The right people and pieces, gathered so you never chase a single phone call. We pair you with makers we have worked beside for years and draw on our own inventory, which means fewer strangers on site and one team answering to you. Everything arrives, fits, and works, because we have already vetted it long before your date.",
      weddings:
        "We assemble a trusted circle of artisans and suppliers whose work meets our standard and whose temperament suits yours, then manage every contract, deposit, and detail on your behalf. These are relationships built over years, not names pulled from a directory. By the wedding morning, every promise has been confirmed and nothing is left to chance.",
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
        "We own the physical reality of the event, from load-in through breakdown, so the schedule holds even when something unexpected surfaces. A dedicated team stays on site to solve problems before they reach you, with concierge support and pick-ups handled quietly in the background. Whatever the room needs, we make it appear.",
      personal:
        "The quiet machinery of the day, run so completely that you never see it move. We carry the heavy lifting and the small surprises alike, smoothing the gap between what you pictured and what unfolds in the room. If something is forgotten or runs short, we have already solved it before you would ever think to ask.",
      weddings:
        "Behind the beauty sits a precise operation: deliveries timed, spaces transformed, and everything restored once the last guest has gone. We hold every moving piece so the seams never show and the work never reaches you. A concierge stays on call throughout, ready to resolve the unexpected before it ever becomes yours to notice.",
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
    design: "/pillars/personal/design-reveal-table.webp",
    media: "/pillars/personal/media.webp",
    experiences: "/pillars/personal/experiences.webp",
    vendors: "/pillars/personal/vendors-daniel.webp",
    logistics: "/pillars/personal/logistics-truck.webp",
  },
  weddings: {
    planning: "/pillars/weddings/planning.webp",
    design: "/pillars/weddings/design.webp",
    media: "/pillars/weddings/media.webp",
    experiences: "/pillars/weddings/experiences.webp",
    vendors: "/pillars/weddings/vendors-chairs.webp",
    logistics: "/pillars/weddings/logistics-list.webp",
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
      image: "/rentals/tables-umbrellas.webp",
    },
    {
      name: "Chairs",
      description: "Seating for ceremonies, dinners, and lounges, across a range of styles.",
      image: "/rentals/chairs.webp",
    },
    {
      name: "Linen",
      description: "Tablecloths, napkins, and runners to set the tone of the room.",
      image: "/rentals/linen.webp",
    },
    {
      name: "Tents & Canopies",
      description: "Coverage and structure that shape a space and weather the day.",
      image: "/rentals/tents-canopies.webp",
    },
  ],
} as const;
