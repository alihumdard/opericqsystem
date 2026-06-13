import {
  BrainCircuit,
  CloudCheck,
  GitFork,
  Network,
  ShieldCheck,
  Target,
  TrendingUp
} from "lucide-react";

const brandLogo = {
  mark: "O",
  name: "OPERIQ",
  suffix: "SYSTEMS"
} as const;

export const landingPage = {
  
  logo: brandLogo,
  navigation: [
    { label: "Platform", href: "#platform" },
    { label: "Products", href: "#products", hasMenu: true },
    { label: "Solutions", href: "#solutions", hasMenu: true },
    { label: "Resources", href: "#resources", hasMenu: true },
    { label: "Company", href: "#company", hasMenu: true }
  ],
  headerCta: {
    label: "Request a Demo",
    href: "#demo"
  },
  hero: {
    eyebrow: "COMMAND-CENTER WORKFLOW INFRASTRUCTURE",
    title: "Connected Workflows.",
    highlightedTitle: "Stronger Operations",
    description:
      "Operiq Systems delivers robust workflow infrastructure that helps operations-heavy organizations from enterprise sectors to logistics and construction work smarter, move faster, and achieve critical outcomes.",
    primaryAction: {
      label: "Explore Our Platform",
      href: "#platform"
    },
    secondaryAction: {
      label: "View Products",
      href: "#products"
    },
    features: [
      { label: "Secure by Design", icon: ShieldCheck },
      { label: "Data-Driven Insights", icon: BrainCircuit },
      { label: "Connected Ecosystem", icon: GitFork },
      { label: "Operations Focused", icon: Target }
    ]
  },
  trustBar: {
    title: "DESIGNED FOR LEADING INFRASTRUCTURE & OPERATIONAL TEAMS",
    logos: [
      { label: "BECHTEL", variant: "wordmark" },
      { label: "KIEWIT", variant: "wordmark" },
      { label: "CBRE", variant: "badge" },
      { label: "FLUOR", variant: "emblem" },
      { label: "WSP", variant: "orbit" }
    ],
    moreLabel: "...and more"
  },
  productSuite: {
    eyebrow: "THE OPERIQ SYSTEMS PRODUCT SUITE",
    title: "One Platform. Every Operation.",
    products: [
      {
        name: "OPERIQ BID",
        description: "Bid Discovery & Pursuit Intelligence",
        color: "#0070f3"
      },
      {
        name: "OPERIQ CAPTURE",
        description: "Capture & Proposal Management",
        color: "#a855f7"
      },
      {
        name: "OPERIQ VAULT",
        description: "Compliance & Document Readiness",
        color: "#06b6d4"
      },
      {
        name: "OPERIQ CONNECT",
        description: "Partner & Contractor Network",
        color: "#f97316"
      },
      {
        name: "OPERIQ INTEL",
        description: "Market & Procurement Intelligence",
        color: "#2563eb"
      }
    ],
    action: {
      label: "View All Products",
      href: "#products"
    }
  },
  valuePillars: {
    eyebrow: "BUILT FOR DEMANDING OPERATIONS",
    title: "Data-Driven. Secure. Built to Perform.",
    pillars: [
      {
        title: "Enterprise-Grade Security",
        description:
          "FedRAMP-ready architecture with end-to-end encryption, granular access controls, and continuous monitoring.",
        icon: CloudCheck
      },
      {
        title: "Intelligence That Works for You",
        description:
          "Purpose-built analytics that turn complex data into clear insights and faster decisions.",
        icon: BrainCircuit
      },
      {
        title: "Unified Workflows",
        description:
          "Integrated tools that connect people, processes, and data across the entire operational lifecycle.",
        icon: Network
      },
      {
        title: "Outcomes That Matter",
        description:
          "Drive efficiency, increase win rates, and deliver measurable operational impact.",
        icon: TrendingUp
      }
    ]
  },
  finalCta: {
    title: "Ready to Transform the Way You Work?",
    description: "See how Operiq Systems can help you accelerate workflows and achieve operational excellence.",
    action: {
      label: "Request a Demo",
      href: "#demo"
    }
  },
  footer: {
    brand: {
      logo: brandLogo,
      description:
        "Intelligent workflow infrastructure for operations-heavy teams that build, protect, and serve communities."
    },
    columns: [
      {
        title: "PLATFORM",
        links: ["Overview", "Security", "Integrations", "Analytics & Data"]
      },
      {
        title: "PRODUCTS",
        links: ["Operiq BID", "Operiq CAPTURE", "Operiq VAULT", "Operiq CONNECT", "Operiq INTEL"]
      },
      {
        title: "COMPANY",
        links: ["About Us", "Careers", "Partners", "Contact"]
      },
      {
        title: "RESOURCES",
        links: ["Blog", "Case Studies", "Webinars", "Help Center"]
      }
    ],
    connected: {
      title: "STAY CONNECTED",
      description: "Insights, updates, and best practices for enterprise innovators.",
      placeholder: "Enter your email",
      socials: [
        { label: "LinkedIn", mark: "in" },
        { label: "YouTube", mark: "▶" },
        { label: "X", mark: "X" }
      ]
    },
    legal: {
      copyright: "© 2026 Operiq Systems, Inc. All rights reserved.",
      links: ["Privacy Policy", "Terms of Use", "Trust Center"]
    }
  }
} as const;

