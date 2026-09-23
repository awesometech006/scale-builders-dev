import {
  Braces,
  Code2,
  Layers3,
  Leaf,
  LockKeyhole,
  MessagesSquare,
  MonitorSmartphone,
  Package,
  ShoppingBag,
  Smartphone,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  icon: LucideIcon;
  title: string;
  short: string;
  intro: string;
  includes: string[];
  process: string[];
  tech: string[];
  related: string[];
};

export const services: Service[] = [
  {
    slug: "shopify-ecommerce",
    icon: ShoppingBag,
    title: "Shopify & E-commerce",
    short:
      "High-converting storefronts, custom themes, integrations, and scalable commerce experiences.",
    intro:
      "We build commerce experiences that hold up under real traffic and real catalogues — from bespoke Shopify themes to multi-market storefronts with custom checkout and fulfilment integrations.",
    includes: [
      "Custom Shopify theme design and development",
      "Headless commerce front-ends where flexibility matters",
      "Payment, shipping, ERP, and CRM integrations",
      "Multi-currency and multi-language market setup",
      "Performance, SEO, and conversion optimisation",
    ],
    process: [
      "Discovery: catalogue, markets, and commercial goals",
      "Information architecture and interface design",
      "Theme or headless build with integration work",
      "QA across devices, markets, and payment flows",
      "Launch, monitoring, and iterative improvement",
    ],
    tech: ["Shopify", "Liquid", "React.js", "Next.js", "Node.js"],
    related: ["modern-retail", "bag-commerce", "eco-essentials"],
  },
  {
    slug: "mobile-app-development",
    icon: Smartphone,
    title: "Mobile App Development",
    short:
      "Cross-platform React Native applications engineered for speed, usability, and growth.",
    intro:
      "One codebase, two platforms, no compromise on feel. We deliver React Native applications with native-grade navigation, offline resilience, and a release process your team can rely on.",
    includes: [
      "iOS and Android delivery from a single React Native codebase",
      "Authentication, notifications, and in-app messaging",
      "API and backend integration",
      "App Store and Play Store submission support",
      "Analytics and crash reporting instrumentation",
    ],
    process: [
      "Product definition and feature prioritisation",
      "Interface design and interaction prototyping",
      "Iterative development with test builds",
      "Device QA and store preparation",
      "Release and post-launch support",
    ],
    tech: ["React Native", "Node.js", "PostgreSQL", "MongoDB"],
    related: ["fameo", "ai-notes"],
  },
  {
    slug: "web-development",
    icon: MonitorSmartphone,
    title: "Web Development",
    short: "Responsive products built with React.js, Next.js, and Angular for modern business needs.",
    intro:
      "Marketing sites, portals, and product interfaces built to be fast, accessible, and easy to maintain — with layouts that behave correctly in both LTR and RTL markets.",
    includes: [
      "Responsive interface development",
      "Server-rendered and statically generated pages",
      "Accessibility and performance budgets",
      "CMS and third-party service integration",
      "Analytics and SEO foundations",
    ],
    process: [
      "Requirements and content structure",
      "Design system definition",
      "Component-driven build",
      "Cross-browser QA",
      "Deployment and handover",
    ],
    tech: ["React.js", "Next.js", "Angular", "Node.js"],
    related: ["commerce-operations", "global-catalogue"],
  },
  {
    slug: "full-stack-development",
    icon: Layers3,
    title: "Full-Stack Development",
    short:
      "End-to-end MEAN and MERN applications with cohesive architecture from interface to database.",
    intro:
      "When the interface and the data model need to be designed together, we take both. MEAN and MERN applications built as one coherent system rather than stitched-together parts.",
    includes: [
      "API design and implementation",
      "Database modelling and migrations",
      "Role-based access and admin tooling",
      "Background jobs and integrations",
      "Deployment pipelines and environments",
    ],
    process: [
      "Architecture and data modelling",
      "API-first backend delivery",
      "Interface build against live endpoints",
      "Load and security review",
      "Release and ongoing iteration",
    ],
    tech: ["React.js", "Angular", "Node.js", "MongoDB", "PostgreSQL"],
    related: ["event-platform", "fameo", "ai-notes"],
  },
  {
    slug: "dotnet-development",
    icon: Code2,
    title: ".NET Development",
    short: "Robust business applications and backend systems built for performance and maintainability.",
    intro:
      "For organisations standardised on the Microsoft stack, we deliver .NET services and business applications designed for long service lives and predictable maintenance.",
    includes: [
      "ASP.NET Core web APIs and services",
      "Business application development",
      "Legacy system modernisation",
      "SQL data layer design",
      "Integration with existing enterprise systems",
    ],
    process: [
      "System and integration audit",
      "Service architecture definition",
      "Incremental delivery with test coverage",
      "Performance profiling",
      "Deployment and documentation",
    ],
    tech: [".NET", "C#", "PostgreSQL", "Angular"],
    related: [],
  },
  {
    slug: "crm-applications",
    icon: MessagesSquare,
    title: "CRM Applications",
    short:
      "Purpose-built platforms that organize customer operations, workflows, and business insight.",
    intro:
      "Off-the-shelf CRM rarely matches how a business actually works. We build customer platforms around your pipeline, your terminology, and your reporting needs.",
    includes: [
      "Pipeline, contact, and activity modelling",
      "Custom dashboards and reporting",
      "Role-based permissions",
      "Email and telephony integrations",
      "Data import and migration",
    ],
    process: [
      "Workflow mapping with your operations team",
      "Data model and permission design",
      "Phased module delivery",
      "User testing and training material",
      "Rollout and refinement",
    ],
    tech: ["React.js", "Node.js", ".NET", "PostgreSQL"],
    related: ["event-platform"],
  },
  {
    slug: "authentication-systems",
    icon: LockKeyhole,
    title: "Authentication Systems",
    short:
      "Secure authorization, account management, and role-based access for sensitive applications.",
    intro:
      "Access control done carefully: sessions, roles, and account recovery designed so that sensitive business logic stays protected as the product grows.",
    includes: [
      "Email, social, and single sign-on flows",
      "Multi-factor authentication",
      "Role and permission architecture",
      "Session and token handling",
      "Audit logging",
    ],
    process: [
      "Threat and access review",
      "Role matrix definition",
      "Implementation with server-side enforcement",
      "Security testing",
      "Documentation and handover",
    ],
    tech: ["Node.js", ".NET", "PostgreSQL", "React.js"],
    related: ["fameo", "event-platform"],
  },
  {
    slug: "custom-web-applications",
    icon: Braces,
    title: "Custom Web Applications",
    short: "Tailored digital tools that turn complex processes into clear, dependable experiences.",
    intro:
      "Internal tools, portals, and operational platforms built exactly around the process they serve — replacing spreadsheets and manual handoffs with something dependable.",
    includes: [
      "Process discovery and requirement shaping",
      "Bespoke interface and workflow design",
      "Reporting and export tooling",
      "Third-party API integration",
      "Ongoing maintenance and enhancement",
    ],
    process: [
      "Process mapping and scoping",
      "Prototype and validation",
      "Iterative build with stakeholder reviews",
      "QA and user acceptance testing",
      "Launch and support",
    ],
    tech: ["React.js", "Next.js", "Node.js", "MongoDB"],
    related: ["event-platform", "ai-notes"],
  },
];

export type Project = {
  slug: string;
  index: string;
  title: string;
  type: string;
  summary: string;
  status?: string;
  industry: string;
  visual: "mobile" | "commerce" | "dashboard" | "web-mobile";
  icon?: LucideIcon;
  image?: string;
  highlights: string[];
  description: string[];
  tech: string[];
  draft?: boolean;
};

export const projects: Project[] = [
  {
    slug: "fameo",
    index: "01",
    title: "Fameoo",
    type: "React Native mobile platform",
    summary:
      "A production-oriented talent and casting platform built as a full-stack mobile application.",
    status: "Launching soon",
    industry: "Consumer mobile / talent marketplace",
    visual: "mobile",
    image: "/projects/Fameoo.png",
    highlights: [
      "Full-stack mobile platform",
      "React Native + Expo + Expo Router",
      "Node.js + Express · PostgreSQL via Supabase · Prisma",
      "Cloudinary media · Zustand state",
      "Key modules: onboarding, profiles, media, discovery, casting, payments, verification, AI features",
    ],
    description: [
      "Fameoo (built on the earlier Talento foundation) is a full-stack mobile application being developed with a modern, scalable architecture end to end — from the interface down to the data model.",
      "The frontend is built with React Native, Expo, and Expo Router, structured around separate public, authentication, onboarding, and authenticated app flows so navigation stays predictable as the product grows. The interface follows a consistent purple/violet design system built as a custom React Native UI rather than an off-the-shelf kit.",
      "The backend runs on Node.js and Express in a modular architecture, with Prisma handling database access against PostgreSQL through Supabase, and Supabase Auth issuing JWTs for backend authentication. Media is handled through Cloudinary, state is managed with Zustand, and the backend is planned for deployment on Render.",
      "Functionally, the platform covers user registration and role-based onboarding, profile creation and editing, media uploads and portfolio management, a content and discovery feed, project and casting management, applications and in-app communication, notifications, wallet and payments infrastructure, verification workflows, location-based discovery, and early AI-assisted features.",
      "The project has moved beyond prototype stage: authentication, backend, database schema, onboarding, profiles, discovery, and project-related functionality are implemented and connected. Current work is focused on turning these modules into a reliable end-to-end product — replacing mock data with live backend data, completing media uploads, refining navigation, and preparing for testing and deployment.",
    ],
    tech: [
      "React Native",
      "Expo",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Supabase",
      "Prisma",
      "Cloudinary",
      "Zustand",
    ],
  },
  {
    slug: "modern-retail",
    index: "02",
    title: "Quillo",
    type: "Shopify commerce experience",
    summary: "A live Shopify storefront for a quilted-bag fashion brand, built for browsing and conversion.",
    status: "Live",
    industry: "E-commerce / fashion accessories",
    visual: "commerce",
    icon: ShoppingBag,
    image: "/projects/quillio.png",
    highlights: [
      "Modern commerce experience",
      "Platform: Shopify",
      "Custom storefront design",
      "Integrated payments & shipping",
      "Product catalogue management",
    ],
    description: [
      "Quillo is a live Shopify storefront built for a brand selling lightweight, quilted cotton bags — totes, slings, duffles, backpacks, and organisers — across a wide catalogue of colourways and patterns.",
      "The build focuses on visual merchandising: pattern-led collection browsing, bestseller carousels, video and lifestyle imagery woven through the homepage, and variant-based product pages (size and style options) that keep the buying decision simple.",
      "Custom theme work covers collection structuring by pattern and product type, cart and checkout flow, and the storefront polish needed to represent a design-led product line — supporting nationwide shipping and cash-on-delivery for the Indian market.",
    ],
    tech: ["Shopify", "Liquid", "JavaScript"],
  },
  {
    slug: "bag-commerce",
    index: "03",
    title: "Aflu",
    type: "Shopify commerce experience",
    summary: "An animation-led Shopify storefront built for a bags brand, currently pre-launch.",
    status: "Pre-launch",
    industry: "E-commerce / fashion accessories",
    visual: "commerce",
    icon: Package,
    image: "/projects/aflu.jpeg",
    highlights: [
      "Shopify commerce experience (pre-launch)",
      "Focus: bags & accessories",
      "Custom Shopify theme",
      "Many intricate animations planned",
      "Product catalogue and cart structure",
    ],
    description: [
      "Aflu is a Shopify storefront built for a bags and accessories brand, with an emphasis on motion and micro-interactions rather than a static catalogue layout.",
      "The build layers custom scroll and hover animations, transitions, and interactive product presentation on top of the Shopify theme framework, aimed at giving the storefront a more crafted, high-end feel than a default theme.",
      "The site is fully built out on the commerce side — collections, product pages, and checkout — and is currently pre-launch ahead of the brand's public rollout.",
    ],
    tech: ["Shopify", "Liquid", "JavaScript"],
    draft: true,
  },
  {
    slug: "eco-essentials",
    index: "04",
    title: "EcoBite",
    type: "Shopify commerce experience",
    summary: "A pre-launch storefront for sustainable, everyday consumables.",
    status: "Pre-launch",
    industry: "E-commerce / sustainable goods",
    visual: "commerce",
    icon: Leaf,
    image: "/projects/ecobiteshop.jpeg",
    highlights: [
      "Shopify commerce experience (pre-launch)",
      "Focus: natural & sustainable products",
      "Product sourcing & catalogue",
      "Subscription model planned",
      "Inventory & fulfilment planning",
    ],
    description: [
      "EcoBite is a Shopify storefront built for a brand selling everyday sustainable consumables — including reusable and biodegradable straws and natural ghee — aimed at customers looking for eco-conscious alternatives to everyday products.",
      "The build covers catalogue structure across the brand's different product lines, product storytelling around sourcing and sustainability, and a straightforward browsing and checkout flow suited to a repeat-purchase, consumables business.",
      "The storefront is complete and is currently pre-launch ahead of its public release.",
    ],
    tech: ["Shopify", "Liquid", "JavaScript"],
    draft: true,
  },
  {
    slug: "event-platform",
    index: "05",
    title: "Event Operations Platform",
    type: "Full-stack web application",
    summary: "A confidential web platform built for a tech event management company.",
    industry: "Events technology",
    visual: "dashboard",
    highlights: [
      "Full-stack web application",
      "Backend: NestJS + PostgreSQL",
      "Real-time event management",
      "User role management & access control",
      "Admin dashboard & analytics",
    ],
    image: "/projects/events.png",
    description: [
      "A full-stack web application built for a company that organises technology events, supporting the operational workflow behind planning, running, and managing events end to end.",
      "The backend is built with NestJS on top of a PostgreSQL database, structured into modules that separate the platform's core operational concerns for maintainability as the product scales.",
      "The client relationship is confidential, so the company and product name are withheld here; the work covers backend architecture, data modelling, and the application logic underpinning the platform.",
    ],
    tech: ["NestJS", "PostgreSQL", "Node.js"],
  },
  {
    slug: "ai-notes",
    index: "06",
    title: "AI Notes Platform",
    type: "Web + mobile application with AI integration",
    summary: "An AI-assisted notes platform for a US client, spanning a web app and a companion mobile app.",
    industry: "Productivity / AI tools",
    visual: "web-mobile",
    image: "/projects/crush.png",
    highlights: [
      "Web + mobile application with AI integration",
      "Web frontend: Next.js",
      "Mobile frontend: React Native",
      "Backend: Node.js",
      "OpenAI integration for summarisation, tagging & search",
      "Cloud storage & sync",
    ],
    description: [
      "An AI-assisted notes application built for a United States–based client, delivered as two connected products: a web application and a companion mobile app.",
      "The web application is built with Next.js, while the mobile companion is built with React Native — giving users a consistent notes experience whether they're at a desk or on the move.",
      "Core note-taking and organisation features are layered with OpenAI integration, adding AI-assisted capabilities such as summarisation and content assistance directly into the notes workflow. The client relationship is confidential, so the product name is withheld here.",
    ],
    tech: ["Next.js", "React Native", "OpenAI API", "Node.js"],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
