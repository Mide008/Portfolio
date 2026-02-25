// ============================================================
// PROJECT DATA
// video: path to MP4 demo — renders as player in modal centre
//        slot. Place files in ./videos/ and update paths.
// ============================================================

const projects = {

  // ─── 1. RENVIA IT ───────────────────────────────────────────
  1: {
    label: "Full-Stack Web Application · Environmental Technology",
    title: "RENVIA IT",
    subtitle: "Sustainable IT Recycling Platform · United Kingdom",
    role: "Full-Stack Developer & Product Designer\nResearch · Brand · UX/UI · Frontend Architecture · System Implementation",
    timeline: "Q1 2025 – Q3 2025",
    platform: "Multi-page Web App · Responsive · PWA-ready · SEO-optimised",
    team: "Design & Engineering Lead · Business Stakeholders",

    brief: `Renvia IT operates in the UK's regulated IT asset disposal market. They needed a platform that could handle B2B and B2C recycling workflows, automate bookings, surface measurable environmental impact, and position the business competitively built from scratch, without an existing codebase.

The engagement covered brand identity, full UX architecture, frontend build, and production deployment.`,

    challenge: `The platform had to serve two structurally different audiences on one system. Corporate IT managers need SLA documentation, data destruction certificates, and bulk collection scheduling. Individual consumers need a frictionless drop-off booking experience. Building for both without fragmenting the UX required architecture decisions made before a single screen was designed.

Layered on top: GDPR compliance, secure data destruction documentation, environmental reporting that competitors lacked, and a requirement to scale toward an asset recovery marketplace without a rebuild.`,

    solution: `**Architecture**

Multi-page SPA with route-based user segmentation. B2B and B2C flows share a design system but diverge at booking logic. Client-side state management structured for backend API attachment without refactoring.

**Core Systems**

*Booking Engine* — Multi-step form with equipment categorisation, collection scheduling, and data security preference selection. Client-side validation with controlled error states throughout.

*Environmental Impact Calculator* — Rule-based engine computing CO₂ savings, landfill diversion weight, and contextual equivalents from equipment type and quantity. ESG-reportable output per session.

*User Dashboard* — Session-persistent booking history, status tracking, and impact records structured for backend API attachment.

*Donation Portal* — CSR-specific flow with corporate and individual paths, receipt generation, and ESG-reportable data output.

*Authentication Layer* — Registration, login, and session persistence architected for Supabase or Firebase integration without structural changes.

**Technical Baseline**

Lighthouse 95+ across performance, accessibility, and SEO. PWA manifest and service worker scaffolding in place. SEO-optimised heading architecture, metadata, and schema markup from initial build.`,

    keyDecisions: [
      {
        title: "Route-Based Audience Segmentation",
        description: "B2B and B2C flows share one design system but diverge at data architecture level preventing UX fragmentation while keeping the codebase unified."
      },
      {
        title: "Calculator as Trust Mechanism",
        description: "Environmental metrics computed client-side from real input data making impact tangible and verifiable for corporate ESG reporting, not a static marketing claim."
      },
      {
        title: "Backend-Ready State Architecture",
        description: "All state management structured for API attachment. Introducing a backend requires integration work, not architectural changes."
      },
      {
        title: "PWA Foundation from Build",
        description: "Service worker, manifest, and offline scaffolding built in from the start positioned for app-store-free distribution from day one."
      }
    ],

    outcomes: `- Lighthouse 95+ across performance, accessibility, and SEO
- Booking completion time reduced via multi-step progressive disclosure
- Environmental calculator producing ESG-reportable output per session
- Platform absorbs backend integration without architectural changes
- PWA manifest and service worker in place for future distribution`,

    images: [
      "./images/case-study/Renvia/Renvia Hero Section.png",
      "./images/case-study/Renvia/Renvia Impact Section.png",
      "./images/case-study/Renvia/Renvia Oppor Section.png"
    ]
  },

  // ─── 2. ERCO GREY ───────────────────────────────────────────
  2: {
    label: "Brand Strategy · Identity System",
    title: "ERCO GREY",
    subtitle: "Brand Identity System · Calgary, Canada",
    role: "Brand Identity Lead & Design Engineer\nStrategy · Identity System · Implementation Standards · Documentation",
    timeline: "4 Weeks",
    platform: "Print · Digital · Environmental · Corporate Communication",
    team: "Design Lead · Founder",

    brief: `Erco Grey operates across art and renovations under one business name. The commercial risk was real a brand that reads as a studio in one context and a construction firm in another loses credibility in both markets.

The engagement was scoped as a system build: establish the logic that allows one identity to operate across incompatible contexts without fracturing.`,

    challenge: `Two brand extensions with different audiences, visual vocabularies, and physical environments studio collateral, renovation site signage, corporate letterheads, project environments. The system had to hold across all of them without creating two separate identities or producing a diluted middle ground.

The additional brief: communicate sustainability authentically in the Canadian construction and design market, which is saturated with green-leaf visual conventions that carry no credibility.`,

    solution: `**Identity Architecture**

A single symbolic mark engineered for environmental flexibility validated at signage scale, business card scale, embossed on materials, and reversed on dark substrates before any design was finalised.

**Colour Strategy**

A neutral-led palette centred on grey functions as a material foundation, not a brand colour. It allows the physical environment stone, timber, canvas to carry visual weight while the brand maintains structural consistency. Accent colours carry strict application rules to prevent drift across extensions.

**Typographic System**

Two-tier hierarchy: primary face for brand presence, secondary face for operational documents. Scale, weight, and spacing rules defined across print and digital contexts.

**Extension Logic**

Art Studio and Renovations operate under defined sub-identity rules shared mark, adapted colour application, distinct photography direction without fracturing the parent brand.

**Deliverable**

Fully documented brand system: logo files, colour specifications, typographic rules, application examples, misuse guidelines, and photography direction. A framework with defined logic, not a collection of assets.`,

    keyDecisions: [
      {
        title: "One Mark, Explicit Rules",
        description: "A single symbolic mark with documented adaptation rules per extension not two marks, not a loose system open to reinterpretation."
      },
      {
        title: "Neutral as Structural Strategy",
        description: "Grey as foundation lets physical materials and environments carry visual interest keeping the brand consistent across contexts that would otherwise require separate identities."
      },
      {
        title: "Production-First Validation",
        description: "Every element tested against real print, signage, and material conditions before finalisation substrate limitations exposed decisions that screen-only review would have missed."
      },
      {
        title: "Framework as Deliverable",
        description: "The system includes documented logic for every decision enabling the client to execute independently across future contexts without design dependency."
      }
    ],

    outcomes: `- One identity operating across art studio, renovation, print, signage, and digital without fragmentation
- Sub-identity system supporting future extensions without rebuilding
- Neutral colour strategy allowing environment and materials to lead visually
- Documented misuse guidelines protecting brand integrity during growth
- Client executing independently across all touchpoints from handoff`,

    images: [
      "./images/case-study/Erco Grey/1770206341666.jpg",
      "./images/case-study/Erco Grey/1770206303152.jpg",
      "./images/case-study/Erco Grey/1770206318767.jpg"
    ]
  },

  // ─── 3. CLEANSYNC ───────────────────────────────────────────
  3: {
    label: "Brand Strategy · Product Design · Digital Platform",
    title: "CLEANSYNC SOLUTIONS",
    subtitle: "Brand Ecosystem & Tech-Enabled Cleaning Platform · United Kingdom",
    role: "Product Designer · UX Strategist · Brand & Design Systems Lead · Design Engineer\nBrand Identity · UX · Platform Build · Marketing System",
    timeline: "Discovery → Strategy → Design → Platform Launch · Ongoing",
    platform: "Wix Premium · Web · Mobile-first · Social · Print · Paid Advertising",
    team: "Design & Product Lead · Founder",

    brief: `Cleansync Solutions needed to move from an unbranded local cleaning service to a credible, bookable digital business without a development team or prior brand infrastructure.

The scope was total: brand identity, website architecture, booking system, marketing collateral, and social media presence. Every customer touchpoint built in one engagement.`,

    challenge: `The UK cleaning sector competes almost entirely on price and proximity. Creating differentiation required a brand that communicated reliability and professionalism before the first enquiry across a Google ad, a website, and a physical flyer left through a door.

The platform also had to be owner-manageable after handoff, which ruled out custom code and required a Wix Premium architecture capable of handling bookings, scheduling, and future subscription logic without ongoing developer involvement.`,

    solution: `**Brand System**

Complete visual identity: wordmark, colour system, typographic hierarchy, and brand rules. Designed for consistent application across digital, print, and physical touchpoints without design dependency for execution.

**Platform Architecture**

Conversion-structured website with service-first information hierarchy. Booking and scheduling integrated with payment processing. Mobile-first layout. Local SEO architecture heading structure, metadata, and schema markup built into the platform from the start.

**Marketing System**

Google Display and Meta ad templates. Social media post and banner templates designed for owner-produced content. Printed flyers and local door-drop materials. Every asset built on the same brand system no one-off executions.

**Scalability**

Platform structure accounts for subscription-based recurring bookings, B2B contract onboarding, and marketplace expansion without requiring a rebuild.`,

    keyDecisions: [
      {
        title: "Owner-Manageable Architecture",
        description: "Every platform decision evaluated against post-handoff operability bookings, content updates, and ad campaigns manageable without a developer."
      },
      {
        title: "Brand as the Primary Conversion Lever",
        description: "In a price-driven market, visual credibility is a commercial differentiator. The brand system was engineered to communicate trust before the user reads a word."
      },
      {
        title: "SEO Architecture from Build",
        description: "Local search structure built into the platform from day one heading hierarchy, metadata, and schema markup not added after launch."
      },
      {
        title: "System-Led Marketing Assets",
        description: "All marketing materials built on the brand system enabling the client to produce consistent content without design involvement."
      }
    ],

    outcomes: `- Complete brand identity system deployed across digital, print, and social
- Responsive platform live with booking and payment processing
- Local SEO structure established from initial build
- Full marketing asset suite ready for paid campaign deployment
- Platform structured for subscription and B2B expansion without rebuild`,

    images: [
      "./images/case-study/Cleasync/IMG-20250811-WA0010.jpg",
      "./images/case-study/Cleasync/IMG-20250823-WA0041.jpg",
      "./images/case-study/Cleasync/IMG-20250823-WA0040.jpg"
    ]
  },

  // ─── 4. ENOCESSITY ──────────────────────────────────────────
  4: {
    label: "Brand Strategy · Product Packaging",
    title: "ENOCESSITY",
    subtitle: "Brand Identity & Packaging System · United States",
    role: "Brand Strategist & Lead Designer\nMarket Research · Brand Identity · Packaging System · Print & Digital Applications",
    timeline: "3 Weeks",
    platform: "Product Packaging · Retail · Print · Digital Storefronts",
    team: "Design Lead · Brand Founder",

    brief: `Enocessity is a U.S. skincare brand preparing to launch into a market where shelf presence, ingredient transparency, and visual credibility determine purchase decisions within seconds.

The brief was a packaging-first brand system one capable of operating across product packaging, FDA-compliant labelling, retail environments, and digital storefronts from day one of launch.`,

    challenge: `Skincare packaging operates under compounding constraints: FDA regulatory labelling requirements, minimum type size thresholds, physical container dimensions, print production tolerances, and the visual competition of a retail shelf where every brand competes for under two seconds of attention.

The system had to communicate premium quality and clinical efficacy the two consumer signals that drive conversion in this category without disappearing into the minimalist aesthetic that now dominates premium skincare globally.`,

    solution: `**Wordmark Architecture**

Clean typographic construction designed for maximum legibility at minimum label scale tested against FDA label size requirements. Validated for embossing, foiling, and standard offset production without integrity loss.

**Colour System**

High-contrast, strategically restrained palette. Colours selected and validated against real packaging substrates: frosted glass, cream polymer, kraft card. Contrast ratios tested across matte and gloss finishes.

**Packaging Hierarchy**

Typographic and spatial rules defining the priority order of regulatory information, product name, key ingredient callouts, and usage instructions maintaining legibility within the physical constraints of small-format containers.

**Brand Rules**

Logo clear space, minimum size, colour usage, and typographic scale standards documented against real production examples enabling any supplier or printer to execute correctly without design oversight.`,

    keyDecisions: [
      {
        title: "Packaging Before Digital",
        description: "All decisions validated against physical production constraints first. Digital mockups followed, not led ensuring the system worked where it mattered commercially."
      },
      {
        title: "Regulatory-Aware Label Hierarchy",
        description: "FDA mandatory elements integrated into the label layout system from the start compliance and brand identity coexist structurally, not as competing considerations."
      },
      {
        title: "Substrate-Tested Colour",
        description: "Palette validated against real packaging materials across matte and gloss finishes colour relationships that work on screen frequently fail on physical substrates."
      },
      {
        title: "Restraint as Market Position",
        description: "Minimalism deployed as a clinical confidence signal differentiating by absence of noise in a category where visual excess has become the default."
      }
    ],

    outcomes: `- Brand system validated against FDA labelling requirements and physical production constraints
- Wordmark legible at minimum label scale across all specified substrates
- Packaging hierarchy enabling consistent label execution without design oversight
- Identity scales across current and future product SKUs without modification
- Brand rules documented for supplier and printer independent execution`,

    images: [
      "./images/case-study/Eno/3-Free_Bottle_and_Tube_Mockup.jpg",
      "./images/case-study/Eno/Asset-16@4x-100.jpg",
      "./images/case-study/Eno/6-JARS-06.jpg"
    ]
  },

  // ─── 5. WEATHER INTELLIGENCE ────────────────────────────────
  5: {
    label: "Full-Stack Web Application · Data Interface System",
    title: "WEATHER INTELLIGENCE PRO",
    subtitle: "Meteorological Data Platform · Responsive Web Application",
    role: "Product Architect & Design Engineer\nMulti-API Integration · Data Normalisation Layer · Interface System · Production Deployment",
    timeline: "4 Weeks · Concept to Live Deployment",
    platform: "Vanilla JS SPA · 5-API Integration · PWA-ready · Zero-framework Core",
    team: "Product Design & Engineering",

    brief: `A meteorological intelligence platform that integrates five external data providers, normalises their outputs into a unified state model, and translates environmental conditions into decision-relevant outputs activity scores, health indicators, safety alerts.

Built in pure HTML, CSS, and JavaScript. No framework. No runtime dependency. 95+ Lighthouse across all categories on production build.`,

    challenge: `Five external APIs with incompatible response schemas, different rate limits, and independent reliability profiles. Real-time data requiring efficient state management and conditional rendering without a reactive framework. The core product problem: raw meteorological data is not useful to most people interpretation is.

The technical challenge was unified normalisation across providers. The product challenge was deciding what to compute and surface, and what to absorb silently in the data layer.`,

    solution: `**Multi-API Integration Layer**

WeatherAPI.com — core weather, 7-day forecast, astronomy. Open-Meteo — air quality and fire weather, no API key required. MapTiler — interactive weather map overlays. Pixabay — weather-contextual location imagery. Windy.com — optional radar layer.

All provider responses normalised to a unified state schema before any rendering logic executes. Provider failures handled via graceful degradation degraded display, never a broken interface. Promise.allSettled pattern throughout.

**Caching Architecture**

5-minute TTL for current conditions. 1-hour TTL for forecast data. LocalStorage-backed for offline return visits. Reduces API calls by approximately 80% on repeat sessions.

**Intelligence Layer**

Activity Score Algorithm: weighted composite across temperature, precipitation probability, wind speed, UV index, air quality index, and fire danger level producing a 0–100 score per activity type. Adaptive UI Theming: CSS custom property overrides triggered by weather condition codes, updating visual state in real time without full re-renders.

**Accessibility**

WCAG 2.1 AA. Keyboard navigation with ⌘K search shortcut. Reduced-motion respected. Semantic HTML with full ARIA labelling.`,

    keyDecisions: [
      {
        title: "Unified State Model Across Providers",
        description: "All five API responses normalised to a single schema before any rendering logic provider-specific inconsistencies are absorbed in the data layer and never reach the interface."
      },
      {
        title: "Weighted Activity Score Algorithm",
        description: "Six environmental variables composited per activity type transforms raw meteorological data into a single actionable number without requiring the user to interpret anything."
      },
      {
        title: "Graceful Provider Degradation",
        description: "Any provider failure produces a degraded display state, never a broken interface. Partial data is always preferable to an error screen."
      },
      {
        title: "Zero Framework Constraint",
        description: "Pure HTML/CSS/JS, no build step, no dependency tree. Every DOM update is intentional. Deploys as static files to any CDN."
      }
    ],

    // update path when video is ready
    video: "./videos/Weathe.mp4",

    outcomes: `- Lighthouse 95+ across performance, accessibility, best practices, and SEO
- ~80% API call reduction via tiered caching strategy
- 5 external data providers normalised into one unified state model
- Activity scoring across 5 activity types with real-time environmental weighting
- WCAG 2.1 AA compliant — keyboard navigable, screen reader compatible`,

    images: [
      "./images/case-study/Weather/Syndey 2.png",
      "./images/case-study/Weather/Bayern 3.png",
      "./images/case-study/Weather/Syndey 3.png"
    ]
  },

  // ─── 6. UX DEBT DETECTOR ────────────────────────────────────
  6: {
    label: "SaaS Product · UX Analysis Engine",
    title: "UX DEBT DETECTOR",
    subtitle: "Automated UX Analysis Platform · Live Product",
    role: "Product Design & Engineering\nConcept · Scoring Engine · System Architecture · Interface Design · Production Deployment",
    timeline: "4 Weeks · Idea to Live Product",
    platform: "Responsive Web App · Client-side Analysis Engine · PDF Export · SaaS-ready Architecture",
    team: "Product Design & Engineering",

    brief: `A live web application that audits digital products against established usability heuristics, generates severity-weighted issue scores, and produces stakeholder ready PDF reports in under 10 seconds.

Built as a monetisation-ready SaaS foundation from the outset with a clear path to rate limiting, usage tracking, and premium report tiers without touching the core analysis engine.`,

    challenge: `UX audits are slow, expensive, and subjective. The output typically a slide deck of opinions is difficult to act on and harder to justify to stakeholders without quantified severity or prioritisation logic.

The product problem: how do you encode usability expertise into a repeatable, objective scoring system that a product manager can run independently and present to leadership without a designer in the room?`,

    solution: `**Scoring Engine**

Heuristic evaluation framework mapped to Jakob Nielsen's 10 usability principles with severity multipliers (0–4 scale) per issue category. Each detected pattern produces a weighted score contribution. Aggregate scores output an overall UX debt rating with full category breakdowns.

**Analysis Pipeline**

Input normalisation → heuristic pattern matching → severity classification → score computation → prioritised issue list → report generation. The complete pipeline runs client-side in under 10 seconds.

**Report System**

Structured PDF output: executive summary, category scores, prioritised issue list with severity ratings, and recommended fix logic formatted for stakeholder presentation without designer interpretation.

**Architecture**

Stateless frontend — no backend, no database, no authentication required for core functionality. Structured to accept a SaaS monetisation layer (rate limiting, usage tracking, premium report tiers) without changes to the analysis engine.`,

    keyDecisions: [
      {
        title: "Severity-Weighted Scoring",
        description: "Issues are not equal. A 0–4 severity multiplier per category ensures high-impact problems surface first, regardless of total issue count."
      },
      {
        title: "Stakeholder-Format Output",
        description: "Reports structured for a leadership audience scores, priorities, and business impact language built in, not requiring a designer to translate the findings."
      },
      {
        title: "Stateless SaaS Foundation",
        description: "Core product runs without backend infrastructure. Auth, usage limits, and premium tiers can be introduced without touching the analysis engine."
      },
      {
        title: "Sub-10-Second Pipeline",
        description: "Full analysis completes client-side in under 10 seconds immediate value from first interaction, no loading state required."
      }
    ],

    // update path when video is ready
    // video: "./videos/ux-debt-detector-demo.mp4",

    outcomes: `- Full heuristic analysis pipeline running client-side in under 10 seconds
- Severity-weighted scoring across 10 usability principle categories
- Stakeholder-ready PDF report generation without designer involvement
- Architecture structured for SaaS monetisation without core system changes
- Live product with a documented commercial path to premium tiers`,

    images: [
      "./images/case-study/UX Debt Detector/UX Debt Detector Hero Section.png",
      "./images/case-study/UX Debt Detector/UX Debt Detector Features Section.png",
      "./images/case-study/UX Debt Detector/UX Debt Detector Product Upload Section.png"
    ]
  },

  // ─── 7. COLOUR CRAFTER PRO ──────────────────────────────────
  7: {
    label: "Design Utility · Accessibility Engine · Production Tool",
    title: "COLOUR CRAFTER PRO",
    subtitle: "Browser-Native Colour Intelligence System",
    role: "Product Architect & Design Engineer\nColour Mathematics Engine · Accessibility System · Image Extraction · Export Architecture",
    timeline: "6 Weeks · Concept to Live Deployment",
    platform: "Vanilla JS · Zero Dependencies · Local Processing · Single-File Deployment",
    team: "Product Design & Engineering",

    brief: `A production-grade colour intelligence system that consolidates palette generation, WCAG accessibility validation, colour blindness simulation, image-based colour extraction, and multi-format export into a single self-contained browser application.

All colour mathematics implemented from scratch in vanilla JavaScript. No framework. No external API dependency for core functionality. One HTML file. Works offline.`,

    challenge: `Most colour tools are mathematically shallow they generate palettes but do not validate them, simulate colour blindness but do not correct for it, and export screenshots rather than production-ready design tokens. Designers context-switch between four or five tools to complete a single colour workflow.

The additional constraint: build it as a genuinely portable, dependency-free application no npm, no build step, no CDN dependency for core features. A file that works offline, loads in under 200ms, and can be shared as a URL or saved locally.`,

    solution: `**Colour Mathematics Engine**

Custom \`C\` object implementing: Hex ↔ RGB ↔ HSL ↔ LCH conversions · WCAG luminance and contrast ratio calculation · 4-type colour blindness simulation via fixed transformation matrices (protanopia, deuteranopia, tritanopia, achromatopsia) · Auto-contrast correction generating up to 3 WCAG AA-compliant alternatives per failing pair · LCH-interpolated gradient generation for perceptual uniformity · Deterministic colour naming via HSL range mapping. Computation cache prevents redundant recalculation across the session.

**Generation Modes**

Mood/scene text → keyword-to-hue mapping → circular mean blending for multi-keyword inputs. Brand persona mapping → 5-colour scheme. Harmony modes: analogous, complementary, triadic, split-complementary, tetradic. Design intent profiles applying saturation/lightness multipliers per context: UI, branding, editorial, fintech, wellness.

**Accessibility System**

Role-based contrast checking identifies the background-role colour and calculates ratios for all other roles against it. AA (4.5:1) and AAA (7.0:1) compliance per role. Auto-fix panel generating compliant alternatives with one-click application.

**Image Extraction**

k-means clustering on canvas-sampled pixel data. Configurable quality tiers (Fast/Balanced/Accurate). Runs via \`requestIdleCallback\` computation deferred to idle time, never blocking the main thread.

**Export System**

CSS variables · SCSS maps · Tailwind config · JSON · W3C Design Tokens · Figma-compatible JSON · PNG strip download · URL-encoded palette sharing.`,

    keyDecisions: [
      {
        title: "Colour Mathematics from Scratch",
        description: "No colour library dependencies all conversion, contrast, luminance, and harmony algorithms implemented directly, with a computation cache preventing redundant recalculation."
      },
      {
        title: "Accessibility as Generation Constraint",
        description: "WCAG validation runs at generation time, not post-generation failures surfaced immediately, guiding toward compliance before export rather than flagging it after."
      },
      {
        title: "requestIdleCallback for k-Means",
        description: "Image extraction deferred to idle time k-means clustering never competes with the main thread during interaction."
      },
      {
        title: "Single-File Portability",
        description: "Zero build step, zero CDN dependency for core features. Loads in under 200ms, works offline, shareable as a URL or a saved file."
      }
    ],

    // update path when video is ready
    video: "./videos/Colour.mp4",

    outcomes: `- Complete colour mathematics engine in vanilla JavaScript no library dependencies
- WCAG AA/AAA validation at generation level across all palette roles
- 4-type colour blindness simulation via transformation matrix implementation
- k-means image extraction running non-blocking via requestIdleCallback
- 6 production export formats including W3C Design Tokens and Figma JSON
- Sub-100ms palette generation · Zero external API dependency · Full offline support`,

    images: [
      "./images/case-study/COLOR CODE GENERATOR/Color Crafter Home Her.png",
      "./images/case-study/COLOR CODE GENERATOR/Color Crafter use upload Image.png",
      "./images/case-study/COLOR CODE GENERATOR/Color Crafter Export.png"
    ]
  },

  // ─── 8. RECIPE FINDER ───────────────────────────────────────
  8: {
    label: "Progressive Web Application · Offline-First Architecture",
    title: "RECIPE FINDER",
    subtitle: "Offline-First Meal Planning PWA",
    role: "Product Architect & Design Engineer\nService Worker Strategy · State Architecture · Dual-Source Data Layer · UI System",
    timeline: "6 Weeks · Concept to Live Deployment",
    platform: "Vanilla JS · PWA · Offline-First · LocalStorage · TheMealDB API",
    team: "Product Design & Engineering",

    brief: `A fully installable Progressive Web Application for recipe discovery, meal planning, and grocery management built without a framework, without a backend, and without an account requirement.

Runs fully offline after first load. Installs to the home screen. Persists shopping lists, meal plans, and saved recipes across sessions and device reboots. 90+ Lighthouse PWA scores in production.`,

    challenge: `The product requirement was an application that works in a kitchen with spotty WiFi, on a commute with no signal, and on a device unopened for two weeks not one that degrades gracefully when offline, but one that is fully functional.

The technical challenges were threefold: a service worker architecture making correct caching decisions across asset types; a state management system persisting four independent data stores without a database; and a dual data source model combining curated local recipes with live API results without duplication or inconsistency.`,

    solution: `**Service Worker Architecture**

Pre-cache: application shell, critical CSS, essential JS. Runtime: network-first with cache fallback for API responses (1-hour TTL). Static assets: cache-first. Offline: placeholder images served from cache. Versioned cache management with activation-time cleanup. Background sync and push notification support scaffolded.

**State Management**

Centralised \`AppState\` class managing four independent localStorage-backed stores: Saved Recipes · Shopping List · Weekly Meal Plan · UI Preferences. All stores serialised and deserialised on every write. Session continuity guaranteed across browser restarts.

**Dual Data Source Model**

Local curated recipe database (structured JSON) + TheMealDB API integration. Both normalised to a unified schema before any rendering logic. Full-text search across name, ingredients, cuisine, and tags. Result deduplication by normalised title hash.

**Ingredient Scaling Engine**

Quantity parser preserving units through fractional and decimal representations. Multiplier system (0.5x–5x) adjusting ingredient amounts, estimated nutrition, and cooking duration in real time cooking time adjusted via thermal mass logic from serving count.

**Design System**

80+ CSS custom properties · 8-point spacing grid · fluid typography via \`clamp()\` · shadow elevation scale · 44px minimum touch targets throughout.`,

    keyDecisions: [
      {
        title: "Network-First with Cache Fallback",
        description: "API responses served fresh when available, from cache when not full functionality in both states without separate mode logic or degraded feature sets."
      },
      {
        title: "Unified Schema Before Rendering",
        description: "Local and API data normalised to identical structure before any UI logic adding or swapping providers requires no interface changes."
      },
      {
        title: "Four-Store Persistence Architecture",
        description: "Independent serialised stores per data domain corruption in one store does not affect others, and each can evolve independently."
      },
      {
        title: "Scaling Engine as Core Product Logic",
        description: "Serving size adjustment recomputes ingredients, nutrition, and cooking time through real parsing and multiplication not display-only number formatting."
      }
    ],

    // update path when video is ready
    video: "./videos/Reipes.mp4",

    outcomes: `- Lighthouse 90+ across performance, accessibility, and PWA criteria
- Full offline functionality after first load, service worker validated in production
- Four independent persistent data stores across browser sessions and reboots
- Dual-source data normalisation with deduplication, zero rendering layer changes per source
- Ingredient scaling engine with real unit parsing and nutrition recalculation
- Passes all Chrome PWA install criteria, home screen installable`,

    images: [
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=1200&h=800&fit=crop",
      "./images/case-study/FOOD RECIPE/Recipe Hero Side.png",
      "./images/case-study/FOOD RECIPE/Recipe mODAL Side.png"
    ]
  },

  // ─── 9. CLEAEN ──────────────────────────────────────────────
  9: {
    label: "Product Design · Energy Tech · AI Integration",
    title: "CLEAEN",
    subtitle: "Smart Energy Management Platform",
    role: "Product Designer & Full-Stack Developer\nStack: Next.js · Node.js · PostgreSQL · Chart.js · OpenAI API",
    timeline: "Research → Architecture → Design → Build · Phased Delivery",
    platform: "Next.js · Node.js · PostgreSQL · OpenAI API · Chart.js · Responsive",
    team: "Product Design & Engineering",

    brief: `Cleaen transforms raw energy consumption data into actionable intelligence. Where most energy platforms stop at charting usage, Cleaen adds an AI interpretation layer that converts device-level patterns into specific, tariff-aware recommendations peak reduction strategies, behavioural adjustments, real cost savings.

Built on Next.js with a PostgreSQL data layer and OpenAI API integration. Designed as a production product with a documented monetisation path, not a dashboard concept.`,

    challenge: `Energy data is abundant. Useful guidance is not. Most platforms present kWh figures that users cannot contextualise they do not know whether their usage is high, what is driving it, or what a meaningful change looks like.

The design challenge was surfacing the single most important action a user should take right now, without requiring data interpretation on their part. The technical challenge was building a data pipeline rich enough to support specific, contextualised AI recommendations rather than generic advice.`,

    solution: `**AI Interpretation Layer (OpenAI API)**

Consumption data device breakdown, time-of-use patterns, tariff structure, historical baselines packaged as structured context for GPT analysis. Prompt architecture engineered for specificity: device-level, time-specific, cost-quantified recommendations. Every recommendation classified by impact (high/medium/low) and effort (easy/moderate/complex).

**Data Architecture (PostgreSQL + Node.js)**

Device-level consumption records with timestamp granularity. Aggregation queries for daily, weekly, and monthly views. Baseline comparison logic computing deviation from historical averages. Rate and tariff schema supporting time-of-use pricing for accurate cost calculations per device.

**Gamification System**

Cleaen Score: composite metric (0–100) updated daily against personalised targets. Challenge system: specific, time-bounded efficiency goals with measurable success criteria. Leaderboard: opt-in household comparison with anonymised peer benchmarking.

**Visualisation Layer (Chart.js)**

Real-time consumption tracking · Predictive usage forecasting · Appliance breakdown · Cost projection curves · Historical trend overlays. All charts responsive and touch-interactive.`,

    keyDecisions: [
      {
        title: "Structured AI Context Packaging",
        description: "OpenAI API calls built with device-level consumption data, tariff structure, and historical baselines the specificity of the recommendation is a direct product of the quality of the context."
      },
      {
        title: "Cleaen Score as Behavioural Anchor",
        description: "A single composite metric reduces the cognitive overhead of interpreting multiple data streams the user knows at a glance whether the direction is right."
      },
      {
        title: "Device-Level Data Granularity",
        description: "PostgreSQL schema designed for appliance-level recording from the start the AI layer can recommend specific device behaviour changes, not household-level averages."
      },
      {
        title: "Effort/Impact Classification",
        description: "Every recommendation classified on two axes — users can prioritise by highest potential saving or lowest required behaviour change depending on their context."
      }
    ],

    // update path when video is ready
    video: "./videos/Cleaenn.mp4",

    outcomes: `- AI recommendation engine producing device-specific, tariff-aware guidance
- PostgreSQL schema supporting appliance-level granularity and historical baseline comparison
- Gamification system with time-bounded, measurable challenge structure tied to real energy savings
- Chart.js visualisation layer with real-time tracking and predictive forecasting
- Monetisation path documented: premium AI tier, advanced analytics, subscription insights`,

    images: [
      "./images/case-study/Cleaen/Cleaen Hero Section.png",
      "./images/case-study/Cleaen/Dashboard 1.png",
      "./images/case-study/Cleaen/Dashboard 2.png"
    ]
  },

  // ─── 10. OMNICRAFT STUDIO PRO ───────────────────────────────
  10: {
    label: "AI Systems Engineering · Distributed Intelligence",
    title: "OMNICRAFT STUDIO PRO",
    subtitle: "Multi-Model AI Design Audit Engine",
    role: "AI Systems Architect & Full-Stack Engineer\nOrchestration Pipeline · Serverless Backend · Synthesis Protocol · Frontend Architecture",
    timeline: "8 Weeks · Concept to Live Deployment",
    platform: "Netlify Serverless · Node.js · TailwindCSS · 5 AI APIs · Client-side PDF Generation",
    team: "AI Systems Architecture & Engineering",

    brief: `A production-grade AI design critique platform that processes uploaded design images through four vision LLMs in parallel, aggregates results via fault-tolerant orchestration, and synthesises findings through Gemini 2.0 Flash into structured, implementation-ready audits with PDF export.

Five AI services. One unified analysis. The platform is explicit about what is computed, what is synthesised, and what is estimated with no inflated capability claims.`,

    challenge: `The AI design audit market is saturated with single-model wrappers marketed as comprehensive analysis. The challenge was building something technically honest: a multi-model system that genuinely aggregates different vision model strengths, communicates clearly about its limitations, and produces implementation-level output rather than qualitative commentary.

The engineering challenge: orchestrating four concurrent API calls to different providers, handling partial failures gracefully, and synthesising heterogeneous responses into coherent structured output within a serverless execution environment with cold start constraints.`,

    solution: `**Backend Orchestration (Netlify Serverless / Node.js)**

\`analyze.js\` executes four concurrent vision model calls via \`Promise.allSettled\`:
Gemini Pro Vision — general design analysis. Groq Llama Vision — speed-optimised rapid critique. Mistral Pixtral — UX and layout evaluation. Hugging Face Llama Vision — accessibility-focused assessment.

\`Promise.allSettled\` ensures any partial failure (3/4 or 2/4 providers responding) still produces valid output. No single provider brings down the pipeline.

**Synthesis Layer (Gemini 2.0 Flash)**

A fifth model call receives all available responses plus a structured output schema. Prompted for strict JSON with enforced fields: ExecutiveSummary · CategoryScores · CriticalActions · ImplementationSpecs · WCAGFindings. Fallback parsing logic handles malformed synthesis output.

**WCAG Analysis**

Contrast ratio calculation from image colour sampling. AA (4.5:1) and AAA (7.0:1) compliance evaluation. Critical failure identification with specific correction output replacement colour values, not qualitative recommendations.

**Category-Aware Benchmarking**

Analysis context and scoring weights shift by declared product category: E-Commerce · SaaS Dashboard · Landing Page · Mobile App · Data Visualisation.`,

    keyDecisions: [
      {
        title: "Promise.allSettled Orchestration",
        description: "Fault-tolerant parallel execution any subset of the four providers can fail and the analysis completes with what is available. Pipeline reliability is independent of any single provider."
      },
      {
        title: "Structured JSON Synthesis Protocol",
        description: "Gemini 2.0 Flash prompted with strict schema enforcement and fallback parsing structured output is guaranteed even when individual model responses are malformed."
      },
      {
        title: "Transparency as Architecture Principle",
        description: "The system distinguishes computed analysis, AI synthesis, and estimated values explicitly. Users know exactly what produced each output — no hidden processing."
      },
      {
        title: "Category-Aware Context Injection",
        description: "Analysis context and scoring weights are adjusted per declared product category conversion hierarchy for a landing page is a different evaluation problem than data density for a dashboard."
      }
    ],

    // update path when video is ready
    // video: "./videos/omnicraft-demo.mp4",

    outcomes: `- 5 AI services integrated in a single fault-tolerant orchestration pipeline
- Promise.allSettled architecture maintaining analysis continuity under partial provider failure
- Structured JSON synthesis with schema enforcement and fallback parsing
- WCAG contrast evaluation producing specific correction values, not qualitative recommendations
- Category-aware benchmarking across 5 product types
- Client-side PDF audit export — multi-page structured output without server-side rendering`,

    images: [
      "./images/case-study/OmniCraft Roast Engine/Home Hero.png",
      "./images/case-study/OmniCraft Roast Engine/Home Hero.png",
      "./images/case-study/OmniCraft Roast Engine/Home Hero.png"
    ]
  },

  // ─── 11. RESOURCE BANK ──────────────────────────────────────
  11: {
    label: "Local-First Application · Research Library System",
    title: "RESOURCE BANK",
    subtitle: "Privacy-First Personal Research Library",
    role: "Product Architect & Design Engineer\nApplication Architecture · State Management · Search Indexing · Export System",
    timeline: "5 Weeks · Concept to Live Deployment",
    platform: "Vanilla JS SPA · LocalStorage · Zero Dependencies · PWA-Ready",
    team: "Product Design & Engineering",

    brief: `A structured personal research library that runs entirely in the browser. No accounts. No cloud. No tracking. No subscription.

Rich metadata management, instant full-text search, tag-based organisation, and complete data portability through JSON import/export delivering professional knowledge management functionality without cloud infrastructure or vendor dependency.`,

    challenge: `Browser bookmarks have no metadata, no search, and no meaningful organisation. Cloud alternatives — Raindrop, Notion, Pocket — require accounts, subscriptions, and cede data ownership to external infrastructure.

The challenge was building professional knowledge management tool functionality for the core use cases that matter, saving, tagging, searching, retrieving without any server dependency. Every operation had to feel instant because there is no network latency to attribute delay to.`,

    solution: `**Data Architecture**

Structured localStorage schema: each entry stores title, description, URL, tags (array), category, date added, and last-accessed timestamp. Entries indexed on write for sub-50ms search response across thousands of records.

**Search System**

Client-side full-text search across all stored fields. In-memory index rebuilt on data changes. Debounced input handler (150ms) preventing excessive index operations on keypress. Results ranked by match density across field priority weights: title > tags > description > URL.

**State Management**

Centralised state object with localStorage sync on every mutation. Undo/redo stack (50-operation depth) for all destructive actions. Autosave on every change no manual save, no data loss on unexpected session close.

**Export Architecture**

Full library export as structured JSON all metadata preserved, tag relationships intact, valid for re-import. Selective export by tag or category. Import with conflict resolution: skip, overwrite, or merge.`,

    keyDecisions: [
      {
        title: "In-Memory Search Index",
        description: "Search index maintained in memory and rebuilt on data changes sub-50ms results across thousands of entries with no database, no backend, no latency."
      },
      {
        title: "Undo Stack as Safety Layer",
        description: "50-operation undo/redo for all destructive actions users can reorganise freely without risk of irreversible changes to their research library."
      },
      {
        title: "Structured JSON Export",
        description: "Export maintains full metadata relationships and is valid for re-import data is always fully portable and never locked to the application."
      },
      {
        title: "Privacy as Product Differentiator",
        description: "No telemetry, no analytics, no background data transmission. The application behaves like installed software because for the user, it functionally is."
      }
    ],

    outcomes: `- Sub-50ms search response across thousands of entries via in-memory indexing
- 50-operation undo/redo stack with localStorage persistence
- Complete JSON import/export with full metadata preservation and conflict resolution
- Zero external dependencies — single-file deployment, sub-200ms load on any device
- Full data portability — users retain unconditional ownership of their research library`,

    images: [
      "./images/case-study/Research Bank/Research Cover Page Section.png",
      "./images/case-study/Research Bank/Research Dark Page Section.png",
      "./images/case-study/Research Bank/Research Modal Page Section.png"
    ]
  },

  // ─── 12. LYRĪON ─────────────────────────────────────────────
  12: {
    label: "E-Commerce Architecture · Brand Engineering · Fulfillment Automation",
    title: "LYRĪON CELESTIAL COUTURE",
    subtitle: "Automated Luxury DTC Ecosystem · UK Market",
    role: "Full-Stack Product Architect & Brand Strategist\nBrand · UX · Frontend · Cloudflare Workers Backend · API Orchestration · Fulfillment Automation",
    timeline: "Q4 2024 – Present",
    platform: "Static Frontend (Netlify) · Cloudflare Workers · Stripe API · 4 POD Providers · CSV→JSON Catalog",
    team: "Product Architecture, Brand Strategy & Engineering",

    brief: `A luxury zodiac-inspired apparel and homeware brand engineered as a fully automated DTC e-commerce system integrating four print-on-demand providers through an automated routing layer, processing orders via Cloudflare Workers serverless functions, and driving organic acquisition through an editorial content engine.

Enterprise-level performance on startup-level infrastructure costs. Designed, built, and deployed as one continuous engagement.`,

    challenge: `The UK luxury spiritual/lifestyle market requires genuine brand differentiation to justify premium pricing in a category sceptical of performative aesthetics. Print-on-demand economics demand multi-provider orchestration to remain competitive on margin and delivery time. Building organic authority without paid advertising budget requires content with standalone utility, not supplementary blog posts.

The engineering challenges: multi-provider inventory synchronisation, routing logic optimising simultaneously by geography and product type, fallback systems preventing order failures on provider errors, and maintaining brand quality consistency across four production partners with different output standards.`,

    solution: `**Fulfillment Orchestration**

Four POD providers integrated: Printful · Gelato · Printify · Inkthreadable. Automated routing logic selects provider by customer shipping zone, product type capability, and cost differential. Fallback chain: primary provider error triggers automatic reroute to next-best provider. Result: 99.5% fulfillment rate, 85% reduction in manual intervention.

**Backend Architecture (Cloudflare Workers)**

Stateless serverless functions handling Stripe webhook events, routing logic, POD provider API calls, and order confirmation dispatch. Sub-100ms execution for routing decisions. Zero dedicated server cost.

**Catalog System**

CSV → JSON automation pipeline. New SKUs added via spreadsheet update, no code changes required. Non-technical catalog management across 100+ SKUs.

**Content Acquisition Engine**

"The Oracle" — interactive astrology readings generating personalised session content. "The Codex" — editorial celestial insights and style guides indexed for organic search. Customers engaging with The Oracle convert at 3× the rate of direct product visitors content is the primary acquisition channel, not a supporting one.`,

    keyDecisions: [
      {
        title: "Geography + Cost Routing Algorithm",
        description: "Automated provider selection by shipping zone and product type margin and delivery time optimised simultaneously without manual intervention per order."
      },
      {
        title: "Fallback Chain Architecture",
        description: "Every order has a defined fallback sequence fulfillment reliability is decoupled from any individual provider's uptime, designed before the first failure, not after."
      },
      {
        title: "Content as Primary Acquisition",
        description: "The Oracle and The Codex built as standalone utility experiences organic authority through genuine content, measured in conversion rate, not page views."
      },
      {
        title: "Serverless + Static Separation",
        description: "Frontend fully static on CDN. Business logic in stateless Cloudflare Workers. Zero infrastructure cost at rest. Scales without architectural changes."
      }
    ],

    outcomes: `- 85% reduction in manual fulfillment tasks via automated routing logic
- 99.5% order fulfillment rate across 4 providers
- 40% organic traffic growth driven by content acquisition engine
- 3.2× session duration increase from content-to-commerce journey
- Lighthouse 95+ on production build
- 100+ SKUs managed via CSV → JSON pipeline — no developer involvement required`,

    images: [
      "./images/case-study/Lyrion/Lyrion Hero Section.png",
      "./images/case-study/Lyrion/Lyrion Product Section.png",
      "./images/case-study/Lyrion/Lyrion Oracle Section.png"
    ]
  },

};

// ============================================================
// DOM ELEMENTS
// ============================================================
const pageTransition = document.querySelector('.page-transition');
const nav            = document.querySelector('.nav');
const navToggle      = document.getElementById('navToggle');
const navLinks       = document.getElementById('navLinks');
const modalOverlay   = document.getElementById('modalOverlay');
const modalClose     = document.getElementById('modalClose');
const modalContent   = document.getElementById('modalContent');

// ── Navigation scroll behaviour ─────────────────────────────
let lastScrollTop = 0;
let scrollTimeout;

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const dir = scrollTop > lastScrollTop ? 'down' : 'up';
  lastScrollTop = scrollTop;
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(() => {
    nav.style.transform = (dir === 'down' && scrollTop > 100) ? 'translateY(-100%)' : 'translateY(0)';
    nav.classList.toggle('scrolled', scrollTop > 50);
  }, 10);
});

// ── Mobile menu ──────────────────────────────────────────────
function setHamburgerIcon(open) {
  if (!navToggle) return;
  navToggle.innerHTML = open
    ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>'
    : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg>';
}

function closeMobileMenu() {
  if (!navLinks) return;
  navLinks.classList.remove('active');
  setHamburgerIcon(false);
  document.body.style.overflow = '';
}

if (navToggle) {
  navToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    const open = navLinks.classList.toggle('active');
    setHamburgerIcon(open);
    document.body.style.overflow = open ? 'hidden' : '';
  });
}

document.addEventListener('click', (e) => {
  if (nav && !nav.contains(e.target) && navLinks && navLinks.classList.contains('active')) {
    closeMobileMenu();
  }
});

if (navLinks) {
  navLinks.addEventListener('click', (e) => {
    if (e.target.classList.contains('nav-link')) closeMobileMenu();
  });
}

// ── Active nav link ──────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === currentPage);
  });
  initializeAnimations();
  initializeLazyLoading();
  updateWorkGrid();
});

// ── Work grid ────────────────────────────────────────────────
function updateWorkGrid() {
  const workGrid = document.querySelector('.work-grid');
  if (!workGrid) return;
  workGrid.innerHTML = '';

  Object.keys(projects).forEach(id => {
    const p    = projects[id];
    const item = document.createElement('div');
    item.className = 'work-item';
    item.setAttribute('data-project', id);
    item.innerHTML = `
      <div class="work-image">
        <img src="${p.images[0]}" alt="${p.title}" loading="lazy">
        <div class="work-overlay"><span class="view-case">View Case Study</span></div>
      </div>
      <div class="work-info">
        <h3 class="work-title">${p.title}</h3>
        <p class="work-category">${p.label.split('·')[0].trim()}</p>
      </div>`;
    workGrid.appendChild(item);
  });

  attachWorkItemEvents();
}

function attachWorkItemEvents() {
  document.querySelectorAll('.work-item').forEach(item => {
    item.addEventListener('click', () => {
      const p = projects[item.getAttribute('data-project')];
      if (p) openModal(p);
    });
  });
}

// ── Page transitions ─────────────────────────────────────────
document.querySelectorAll('a[href]').forEach(link => {
  if (link.hostname === window.location.hostname && !link.classList.contains('nav-toggle')) {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href.startsWith('#') || href.startsWith('http') || href.startsWith('mailto:')) return;
      e.preventDefault();
      closeMobileMenu();
      pageTransition.classList.add('active');
      setTimeout(() => { window.location.href = href; }, 600);
    });
  }
});

// ── Entrance animations ──────────────────────────────────────
function initializeAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll(
    '.philosophy-card,.value-item,.expertise-list li,.contact-method,.contact-form'
  ).forEach(el => observer.observe(el));

  document.querySelectorAll('.work-item').forEach((item, i) => {
    item.style.cssText = `opacity:0;transform:translateY(30px);
      transition:opacity .6s ease ${i * .1}s,transform .6s ease ${i * .1}s`;
    setTimeout(() => {
      item.style.opacity    = '1';
      item.style.transform  = 'translateY(0)';
    }, 100 + i * 100);
  });
}

// ============================================================
// MODAL
// ============================================================

// Middle slot: video player if project.video is set, else image[1]
function renderMediaBlock(project) {
  if (project.video) {
    return `
      <div class="modal-video-wrap">
        <video
          class="modal-video"
          src="${project.video}"
          controls
          playsinline
          preload="metadata"
          aria-label="${project.title} — product demo"
        >Your browser does not support HTML5 video.</video>
      </div>`;
  }
  return `<img src="${project.images[1]}" alt="${project.title}" class="modal-image" loading="lazy">`;
}

function openModal(project) {
  if (!project) return;

  const outcomeItems = project.outcomes.split(/\n+/).map(s => s.trim()).filter(Boolean);

  modalContent.innerHTML = `

    <div class="modal-header">
      <span class="modal-label">${project.label}</span>
      <h2 class="modal-title">${project.title}</h2>
      <p class="modal-subtitle">${project.subtitle}</p>
      <div class="modal-meta">
        <div class="meta-item"><h4>Role</h4><p>${formatRoleText(project.role)}</p></div>
        <div class="meta-item"><h4>Timeline</h4><p>${project.timeline}</p></div>
        <div class="meta-item"><h4>Platform</h4><p>${formatPlatformText(project.platform)}</p></div>
        <div class="meta-item"><h4>Team</h4><div class="team-members">${formatTeamText(project.team)}</div></div>
      </div>
    </div>

    <div class="modal-section">
      <h3>Brief</h3>
      ${formatContent(project.brief)}
    </div>

    <img src="${project.images[0]}" alt="${project.title}" class="modal-image" loading="lazy">

    <div class="modal-section">
      <h3>The Challenge</h3>
      ${formatContent(project.challenge)}
    </div>

    ${renderMediaBlock(project)}

    <div class="modal-section">
      <h3>The Solution</h3>
      ${formatContent(project.solution)}
    </div>

    <div class="modal-section">
      <h3>Key Decisions</h3>
      <div class="key-decisions-grid">
        ${project.keyDecisions.map(d => `
          <div class="decision-card">
            <div class="decision-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
            </div>
            <h4 class="decision-title">${d.title}</h4>
            <p class="decision-desc">${d.description}</p>
          </div>`).join('')}
      </div>
    </div>

    <img src="${project.images[2]}" alt="${project.title}" class="modal-image" loading="lazy">

    <div class="modal-section">
      <h3>Outcomes</h3>
      <ul class="learnings-list">
        ${outcomeItems.map(item => `<li>${cleanInline(item)}</li>`).join('')}
      </ul>
    </div>

  `;

  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
  closeMobileMenu();

  setTimeout(() => {
    document.querySelectorAll('.modal-section, .modal-image, .modal-video-wrap').forEach((el, i) => {
      setTimeout(() => {
        el.classList.add('visible');
        if (el.classList.contains('modal-image')) el.classList.add('loaded');
      }, i * 180);
    });
  }, 100);
}

// ── Text helpers ─────────────────────────────────────────────
function formatRoleText(text) {
  return text.split('\n').map((line, i) => i === 0
    ? line
    : `<div class="role-detail" style="margin-top:.5rem;font-size:.9rem;color:var(--gray)">${line.trim()}</div>`
  ).join('');
}

function formatPlatformText(text) { return text.replace(/•/g, '·'); }

function formatTeamText(text) {
  const sep = text.includes('\n') ? '\n' : ', ';
  return text.split(sep).map(s => `<span class="team-tag">${s.trim()}</span>`).join('');
}

function cleanInline(text) {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g,    '<em>$1</em>')
    .replace(/^[-–]\s*/,      '');
}

function formatContent(text) {
  if (!text) return '';
  const html       = [];
  let   listBuffer = [];

  const flushList = () => {
    if (!listBuffer.length) return;
    html.push(`<ul class="modal-bullet-list">${listBuffer.map(li => `<li>${cleanInline(li)}</li>`).join('')}</ul>`);
    listBuffer = [];
  };

  text.split(/\n{2,}/).forEach(block => {
    block.trim().split('\n').forEach(line => {
      const t = line.trim();
      if (!t) { flushList(); return; }

      if (t.startsWith('- ')) {
        listBuffer.push(t.slice(2));
      } else if (/^\*\*(.+)\*\*$/.test(t)) {
        flushList();
        html.push(`<h4 class="modal-section-headline">${t.slice(2, -2)}</h4>`);
      } else if (/^\*(?!\*)(.+)\*$/.test(t)) {
        flushList();
        html.push(`<h5 class="modal-feature-title">${t.slice(1, -1)}</h5>`);
      } else {
        flushList();
        html.push(`<p>${cleanInline(t)}</p>`);
      }
    });
    flushList();
  });

  flushList();
  return html.join('');
}

// ── Close modal ──────────────────────────────────────────────
function closeModal() {
  const video = modalContent && modalContent.querySelector('video');
  if (video) { video.pause(); video.currentTime = 0; }

  modalOverlay.classList.remove('active');
  document.body.style.overflow = '';

  document.querySelectorAll('.modal-section, .modal-image, .modal-video-wrap').forEach(el => {
    el.classList.remove('visible', 'loaded');
  });
}

if (modalClose)   modalClose.addEventListener('click', closeModal);
if (modalOverlay) modalOverlay.addEventListener('click', e => { if (e.target === modalOverlay) closeModal(); });
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('active')) closeModal();
});

// ── Smooth scroll anchors ────────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) { target.scrollIntoView({ behavior: 'smooth', block: 'start' }); closeMobileMenu(); }
  });
});

// ── Lazy loading ─────────────────────────────────────────────
function initializeLazyLoading() {
  const imgs = document.querySelectorAll('img[loading="lazy"]');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach(en => {
        if (en.isIntersecting) {
          const img = en.target;
          img.src = img.dataset.src || img.src;
          img.classList.add('loaded');
          obs.unobserve(img);
        }
      });
    });
    imgs.forEach(img => io.observe(img));
  } else {
    imgs.forEach(img => { img.src = img.dataset.src || img.src; });
  }
}

// ── Parallax orbs ────────────────────────────────────────────
window.addEventListener('mousemove', (e) => {
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;
  document.querySelectorAll('.floating-orb').forEach((orb, i) => {
    const s = (i + 1) * 15;
    orb.style.transform = `translate(${x * s}px,${y * s}px)`;
  });
});

// ── Image fade-in ────────────────────────────────────────────
document.querySelectorAll('img').forEach(img => {
  img.addEventListener('load', function () { this.style.opacity = '1'; });
  if (!img.complete) img.style.cssText += 'opacity:0;transition:opacity .3s ease';
});

// ── Contact form ─────────────────────────────────────────────
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn     = document.getElementById('submitButton');
    const btnTxt  = document.getElementById('buttonText');
    const spinner = document.getElementById('buttonSpinner');
    const success = document.getElementById('successMessage');
    const error   = document.getElementById('errorMessage');

    success.style.display = 'none';
    error.style.display   = 'none';
    btnTxt.textContent    = 'Sending…';
    spinner.style.display = 'inline-block';
    btn.disabled          = true;

    try {
      const fd  = new FormData(contactForm);
      const res = await fetch('/api/contact', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({
          name:      fd.get('name'),
          email:     fd.get('email'),
          subject:   fd.get('subject'),
          message:   fd.get('message'),
          timestamp: new Date().toISOString()
        })
      });
      if (!res.ok) throw new Error();
      success.style.display = 'block';
      contactForm.reset();
      success.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } catch {
      error.style.display = 'block';
      error.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } finally {
      btnTxt.textContent    = 'Send Message';
      spinner.style.display = 'none';
      btn.disabled          = false;
    }
  });
}

// ── Modal keyboard navigation ────────────────────────────────
document.addEventListener('keydown', (e) => {
  if (!modalOverlay || !modalOverlay.classList.contains('active')) return;
  const sections = [...document.querySelectorAll('.modal-section')];
  const current  = sections.find(s =>
    s.getBoundingClientRect().top >= 0 && s.getBoundingClientRect().top < window.innerHeight
  );
  if (!current) return;
  if (e.key === 'ArrowDown') { e.preventDefault(); current.nextElementSibling?.scrollIntoView({ behavior: 'smooth' }); }
  if (e.key === 'ArrowUp')   { e.preventDefault(); current.previousElementSibling?.scrollIntoView({ behavior: 'smooth' }); }
});

// ── Logo interaction ─────────────────────────────────────────
const logoContainer = document.getElementById('logoContainer');
if (logoContainer) {
  logoContainer.addEventListener('click', (e) => {
    e.preventDefault();
    const ripple = document.createElement('div');
    ripple.style.cssText = `position:absolute;border-radius:50%;background:rgba(255,255,255,.3);
      transform:scale(0);animation:ripple-anim .6s linear;pointer-events:none;
      width:100px;height:100px;top:50%;left:50%;margin:-50px 0 0 -50px;z-index:0;`;
    logoContainer.querySelector('.logo-orb').appendChild(ripple);
    setTimeout(() => { window.location.href = 'index.html'; }, 300);
  });

  logoContainer.addEventListener('mousemove', (e) => {
    const r = logoContainer.getBoundingClientRect();
    const x = (e.clientX - r.left  - r.width  / 2) * 0.5;
    const y = (e.clientY - r.top   - r.height / 2) * 0.5;
    logoContainer.querySelector('.logo-orb').style.transform = `translate(${x}px,${y}px) scale(1.05)`;
  });

  logoContainer.addEventListener('mouseleave', () => {
    logoContainer.querySelector('.logo-orb').style.transform = '';
  });
}

// ── Injected styles ──────────────────────────────────────────
(function () {
  const s = document.createElement('style');
  s.textContent = `
    @keyframes ripple-anim { to { transform:scale(4); opacity:0; } }

    .modal-video-wrap {
      width: 100%;
      border-radius: 12px;
      overflow: hidden;
      background: #000;
      margin: 2rem 0;
      aspect-ratio: 16 / 9;
    }
    .modal-video {
      width: 100%;
      height: 100%;
      display: block;
      object-fit: contain;
    }
  `;
  document.head.appendChild(s);
}());