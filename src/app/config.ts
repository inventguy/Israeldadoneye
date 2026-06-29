// ──────────────────────────────────────────────────────────────
// EDIT THIS FILE to make the site yours. Everything reads from here.
//
// This page is written to be HONEST for someone early in their
// career: the projects below are your own interactive demos (not
// client work), and there are no invented metrics or testimonials.
// As you ship real client work, add it to `projects`.
// ──────────────────────────────────────────────────────────────

export const siteConfig = {
  name: "Israel Dadoneye",
  initials: "ID",
  role: "Front-End Developer",

  // Your portrait — save the photo as: public/profile.jpg
  photo: "/profile.jpg",

  // Hero
  available: true,
  location: "Remote · Available worldwide",
  intro:
    "I build fast, modern websites in React and Next.js. I'm early in my career — so you get sharper work, quicker replies, and fairer pricing than someone coasting on a big name.",

  email: "israeldadoneye11@gmail.com",

  // WhatsApp click-to-chat.
  // Use international format, DIGITS ONLY — country code + number,
  // with NO "+", spaces, dashes, or leading zero.
  // Example (Nigeria): 2348012345678  (i.e. 0801 234 5678 → 234 801 234 5678)
  whatsapp: "2348105954185",
  whatsappMessage:
    "Hi Israel, I saw your portfolio and I'd like to talk about a project.",

  socials: {
    upwork: "#",
    github: "#",
    twitter: "#",
    linkedin: "#",
  },

  // Honest signals — no invented numbers.
  stats: [
    { value: "Now", label: "Taking on new work" },
    { value: "24h", label: "Typical reply time" },
    { value: "Fair", label: "Pricing, no games" },
  ],

  // Your own interactive demos — each links to a live build under /demos.
  // Replace or add to these as you complete real projects.
  projects: [
    {
      index: "01",
      name: "Pricing & billing UI",
      category: "Live demo",
      year: "2026",
      summary:
        "A pricing page built to convert — an animated monthly/yearly toggle and a layout that quietly steers people toward the right plan. Proof I can make interface and motion do real work.",
      tech: ["Next.js", "Framer Motion", "Tailwind"],
      href: "/demos/pricing",
      mockup: "pricing" as const,
    },
    {
      index: "02",
      name: "Analytics dashboard",
      category: "Live demo",
      year: "2026",
      summary:
        "Dense data made effortless to read: stat cards, an animated chart, and an activity feed that stays crisp from widescreen all the way down to a phone.",
      tech: ["React", "TypeScript", "Tailwind"],
      href: "/demos/dashboard",
      mockup: "dashboard" as const,
    },
    {
      index: "03",
      name: "Mobile store menu",
      category: "Live demo",
      year: "2026",
      summary:
        "A storefront menu engineered for thumbs — a fast, staggered slide-in built for one-handed shopping that never gets in the way.",
      tech: ["Next.js", "Framer Motion"],
      href: "/demos/menu",
      mockup: "menu" as const,
    },
  ],

  services: [
    {
      title: "Built from scratch",
      desc: "Landing pages, dashboards, and full product UIs — designed and coded in Next.js, fast and ready to ship.",
    },
    {
      title: "Rescued & refined",
      desc: "Inherited a broken, sluggish front-end? I untangle the mess, fix what's slow, and hand back code that's a pleasure to maintain.",
    },
    {
      title: "Figma, made real",
      desc: "Send the design. You get it back as pixel-perfect, animated components — not a rough approximation.",
    },
  ],

  approach: [
    {
      step: "01",
      title: "Understand",
      desc: "We pin down the goal and the user before a single line of code. You'll know exactly what 'done' looks like.",
    },
    {
      step: "02",
      title: "Build in the open",
      desc: "A live link early and updates often. No black box, no month of silence, no nasty surprise at the end.",
    },
    {
      step: "03",
      title: "Ship & sharpen",
      desc: "Tested on real devices, tuned for speed, and handed over with clean code and notes — so you're never left stuck.",
    },
  ],

  faqs: [
    {
      q: "You're just starting out — why hire you?",
      a: "Because you get everything I've got: full focus, fast replies, and fair pricing while I earn my reputation. I'd rather over-deliver on your project than coast on a name — every line of code is something I put my name to.",
    },
    {
      q: "How do you charge?",
      a: "A fixed price for clear scope, or a day rate for ongoing work. You get the number before we start — no open meter, no surprise invoice.",
    },
    {
      q: "How fast can you start?",
      a: "Usually within days. Small fixes, often the same week.",
    },
    {
      q: "What if I only have a rough idea?",
      a: "Perfect — turning a vague idea into a clear plan and a working interface is half the job.",
    },
    {
      q: "Do you work from a design or from scratch?",
      a: "Either. I'll build faithfully from your Figma, or design straight in the browser if you don't have one.",
    },
  ],
};

export type SiteConfig = typeof siteConfig;
