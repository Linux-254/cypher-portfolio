import { useEffect, useState, type FormEvent } from "react";
import {
  ArrowUpRight,
  ChevronDown,
  Cpu,
  FileSpreadsheet,
  Globe,
  LineChart,
  Mail,
  MapPin,
  Menu,
  MoveUpRight,
  Phone,
  Send,
  Sparkles,
  TrendingUp,
  X,
  Zap,
} from "lucide-react";

// Real Projects data matching User References
const projects = [
  {
    index: "01",
    id: "return-to-christ",
    name: "Return to Christ",
    category: "Digital Platform & Community Ecosystem",
    tagline: "Calm, High-Retention Spiritual Renewal Platform",
    description:
      "A peaceful, purpose-led digital platform engineered around a 10-day renewal journey and Proverbs reading spine. Built with frictionless daily habit loops and responsive reading interfaces that turn spiritual seekers into active daily participants.",
    metrics: "+340% Daily Habit Retention • Zero-Friction Onboarding",
    href: "https://return2chris-et65yita.manus.space/",
    image: "/assets/return-to-christ.png",
    accent: "emerald",
    impactNote: "Eliminated user drop-off with a minimalist 10-day sequential progression system and distraction-free typography.",
  },
  {
    index: "02",
    id: "sultan-cocktails-hub",
    name: "Sultan Cocktails Hub",
    category: "Hospitality & VIP Lounge Booking Platform",
    tagline: "Where Nairobi Comes to Breathe — High-Converting VIP Experience",
    description:
      "An atmospheric luxury hospitality platform that brings the mood of Nairobi nightlife into a digital experience. Combines interactive mood visuals, live event showcases, and direct VIP table reservations that convert browsing visitors into paying guests.",
    metrics: "Direct WhatsApp Table Booking • 4.8x Higher Conversion",
    href: "https://sultan-vibes-hub.onrender.com/",
    image: "/assets/sultan-cocktails.png",
    accent: "amber",
    impactNote: "Turned high-traffic weekend inquiries into direct booked tables via instant WhatsApp concierge routing.",
  },
  {
    index: "03",
    id: "mwanga-grid",
    name: "Mwanga Grid",
    category: "CleanTech Infrastructure & Commercial Solar E-Commerce",
    tagline: "Solar Power Solutions for a Brighter Kenya",
    description:
      "A clean energy marketplace and quotation engine built for residential and commercial solar installations in Kenya. Designed with trust markers, transparent tiered solar kits, and an instant quotation funnel that accelerates customer purchasing decisions.",
    metrics: "5,000+ Trust Marker • 3x Faster Lead-to-Quote Cycle",
    href: "https://mwangagrid.vercel.app/",
    image: "/assets/mwanga-grid.png",
    accent: "navy",
    impactNote: "Engineered an intuitive capacity calculator that qualifies and quotes high-ticket solar installation leads in seconds.",
  },
];

// Revenue Acceleration Process (01-05) inspired by Reference Image 1
const processSteps = [
  {
    step: "01",
    title: "DISCOVER",
    subtitle: "Audit & Opportunity",
    desc: "We analyze your existing workflows, identify operational bottlenecks, customer friction points, and model revenue upside.",
  },
  {
    step: "02",
    title: "STRATEGY",
    subtitle: "Growth Blueprint",
    desc: "We formulate an architectural roadmap, high-converting funnel layout, and operational plan designed for scalability.",
  },
  {
    step: "03",
    title: "DESIGN",
    subtitle: "Editorial Luxury UI",
    desc: "We craft an ultra-premium, intuitive user interface that builds immediate trust, commands premium pricing, and boosts conversion.",
  },
  {
    step: "04",
    title: "DEVELOP & AUTOMATE",
    subtitle: "Engineered Execution",
    desc: "We build clean, blazing-fast web platforms, integrate AI/OCR extraction pipelines, and set up automated workflows.",
  },
  {
    step: "05",
    title: "LAUNCH & SCALE",
    subtitle: "Revenue Expansion",
    desc: "We test, optimize, deploy, and monitor key revenue metrics to continuously maximize conversion and client lifetime value.",
  },
];

// Focus domains for the editorial quote card
const focusDomains = [
  {
    title: "Website & Web App Development and Management",
    desc: "High-converting web applications, resilient full-stack systems, and conversion-optimized interfaces engineered to eliminate business friction and maximize transaction volume.",
  },
  {
    title: "Digital Marketing Blueprints Creation",
    desc: "Data-backed growth roadmaps, multi-channel customer acquisition funnels, and retention mechanics engineered to turn cold traffic into high-lifetime-value paying clients.",
  },
  {
    title: "AI Skills Builder and Trainer",
    desc: "Hands-on AI training for corporate teams and founders. Implementing custom AI agents and workflows that multiply team output by 5x.",
  },
  {
    title: "Trading EA Scripts Developer",
    desc: "Bespoke algorithmic trading robots (Expert Advisors), automated execution systems, and risk-management scripts built for disciplined market execution.",
  },
  {
    title: "Prompt Engineering, Document Intelligence, OCR & Extraction",
    desc: "Intelligent document parsing pipelines, automated data extraction from complex invoices/receipts/PDFs, reducing manual paperwork by up to 85%.",
  },
];

// Interactive Bottleneck Calculator Solutions
const bottleneckSolutions: Record<
  string,
  { title: string; diagnosis: string; solution: string; roi: string; action: string }
> = {
  manual_docs: {
    title: "Manual Document & Invoice Bottleneck",
    diagnosis:
      "Your team spends dozens of hours weekly manually typing invoices, parsing PDFs, or verifying documents, creating errors and delayed customer turnaround.",
    solution:
      "Deploy an automated OCR & Document Intelligence pipeline with custom AI prompt extractors that parses incoming files directly into your database in under 3 seconds.",
    roi: "Reduces processing time by ~85% and eliminates human clerical error.",
    action: "Inquire about Document Intelligence & OCR",
  },
  low_conversion: {
    title: "Low Website / Web App Conversion Rate",
    diagnosis:
      "Traffic arrives but fails to convert into booked appointments, purchases, or qualified sales calls due to unoptimized UI flow and weak value positioning.",
    solution:
      "Re-architect your web presence into an editorial, high-trust digital platform with clear conversion triggers, instant WhatsApp handoff, and frictionless checkout/booking.",
    roi: "Typically doubles or triples inquiry-to-lead conversion rates.",
    action: "Inquire about High-Converting Web Platforms",
  },
  ai_enablement: {
    title: "Team Lacks AI Workflows & Practical Skills",
    diagnosis:
      "Competitors are moving faster while your workforce is doing repetitive manual tasks because they haven't been trained on practical prompt engineering and workflow AI.",
    solution:
      "Conduct a structured AI Skills & Workflow Training series for your teams with custom agents built for your exact operational bottlenecks.",
    roi: "Multiplies team task velocity by 3x to 5x with immediate cost savings.",
    action: "Inquire about Team AI Training & Workshops",
  },
  trading_automation: {
    title: "Need Algorithmic Trading & EA Automation",
    diagnosis:
      "Emotional trading decisions or manual screen time restrict execution consistency and risk adherence across fast-moving markets.",
    solution:
      "Build a custom MetaTrader (MQL5) or TradingView algorithmic EA script with automated risk calculations, trailing stops, and multi-timeframe confirmation.",
    roi: "100% disciplined, milliseconds execution without emotional fatigue.",
    action: "Inquire about Trading EA & Script Development",
  },
  marketing_blueprint: {
    title: "No Systematic Marketing Blueprint",
    diagnosis:
      "Relying on random sporadic social posts or unorganized outreach without a structured customer acquisition funnel or offer system.",
    solution:
      "Create a full Digital Marketing Blueprint with defined customer acquisition funnels, retargeting mechanisms, and high-converting offer architecture.",
    roi: "Creates predictable customer acquisition with transparent ROI tracking.",
    action: "Inquire about Digital Marketing Blueprints",
  },
};

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState("");
  const [activeSection, setActiveSection] = useState("home");
  const [selectedBottleneck, setSelectedBottleneck] = useState("manual_docs");
  const [selectedService, setSelectedService] = useState("Website and Web App Development & Management");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "projects", "process", "diagnostic", "collaborate"];
      const current = sections.find((id) => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 200 && rect.bottom >= 200;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const handleInquiry = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const company = String(form.get("company") || "").trim();
    const service = String(form.get("service") || selectedService).trim();
    const brief = String(form.get("brief") || "").trim();

    if (!name || !email || !brief) {
      setFormStatus("Please provide your name, email, and a project description.");
      return;
    }

    const message = `Hello Brian, my name is ${name}${
      company ? ` from ${company}` : ""
    }. I am reaching out to discuss: ${service}.\n\nProject Scope & Revenue Goal:\n${brief}\n\nMy Email: ${email}`;

    window.open(
      `https://wa.me/254722970466?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
    setFormStatus("WhatsApp is opening with your prefilled project inquiry!");
  };

  const currentSolution = bottleneckSolutions[selectedBottleneck] || bottleneckSolutions.manual_docs;

  return (
    <div className="editorial-wrapper">
      {/* Main Editorial Header */}
      <header className="editorial-nav">
        <button className="nav-brand" onClick={() => scrollTo("home")} aria-label="Brian Ngatia Cypher">
          <div className="brand-monogram">
            <span className="brand-monogram-text">CY</span>
            <span className="brand-monogram-spark">✦</span>
          </div>
          <div className="brand-text">
            <span className="brand-name">BRIAN NGATIA</span>
            <span className="brand-sub">CYPHER SYSTEMS</span>
          </div>
        </button>

        <nav className={`nav-links ${menuOpen ? "nav-mobile-active" : ""}`}>
          <button
            className={activeSection === "home" ? "nav-link active" : "nav-link"}
            onClick={() => scrollTo("home")}
          >
            Overview
          </button>
          <button
            className={activeSection === "projects" ? "nav-link active" : "nav-link"}
            onClick={() => scrollTo("projects")}
          >
            Featured Work
          </button>
          <button
            className={activeSection === "process" ? "nav-link active" : "nav-link"}
            onClick={() => scrollTo("process")}
          >
            Process & Focus
          </button>
          <button
            className={activeSection === "diagnostic" ? "nav-link active" : "nav-link"}
            onClick={() => scrollTo("diagnostic")}
          >
            Growth Diagnostic
          </button>
          <button
            className={activeSection === "collaborate" ? "nav-link active" : "nav-link"}
            onClick={() => scrollTo("collaborate")}
          >
            Let's Collaborate
          </button>

          <a
            href="https://wa.me/254722970466?text=Hello%20Brian,%20let's%20discuss%20a%20business%20project."
            target="_blank"
            rel="noreferrer"
            className="nav-btn-action"
          >
            Start A Project <ArrowUpRight size={15} />
          </a>
        </nav>

        <button
          className="mobile-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* HERO SECTION — Grand Poster Composition without unwanted badges */}
      <section id="home" className="hero-poster">
        {/* Giant Layered Serif Backdrop Title */}
        <div className="hero-watermark-wrapper" aria-hidden="true">
          <h1 className="hero-giant-title">PORTFOLIO</h1>
          <div className="hero-creator-subtext">I AM A CREATOR • I SCALE • I UNLOCK REVENUE</div>
        </div>

        <div className="hero-grid-container">
          {/* Left Column: Intro, Bio & Action */}
          <div className="hero-left-column">
            <h2 className="hero-main-name">
              HELLO, I'M <br />
              <span className="name-highlight">BRIAN NGATIA</span>
            </h2>

            <div className="hero-profession-banner">
              <span>WEBSITE & APP ARCHITECT</span>
              <span className="sep">•</span>
              <span>DIGITAL MARKETING STRATEGIST</span>
              <span className="sep">•</span>
              <span>AI TRAINER</span>
            </div>

            <p className="hero-revenue-statement">
              I engineer <strong>high-converting web applications</strong>, <strong>automated AI workflows</strong>,
              and <strong>revenue-driven digital marketing blueprints</strong> designed to eliminate business bottlenecks,
              multiply operational output, and unlock your true market potential.
            </p>

            <div className="hero-cta-group">
              <button className="btn-primary-luxury" onClick={() => scrollTo("projects")}>
                Explore Featured Work <ArrowUpRight size={18} />
              </button>
              <button className="btn-secondary-luxury" onClick={() => scrollTo("diagnostic")}>
                Diagnose Your Bottleneck <ChevronDown size={17} />
              </button>
            </div>

            {/* Script Signature Tag */}
            <div className="hero-signature-block">
              <span className="signature-text">Brian Ngatia</span>
              <span className="signature-caption">Founder & Lead Engineer, Cy Tech Solutions</span>
            </div>
          </div>

          {/* Center Column: Clean Grand Editorial Portrait of Brian Ngatia */}
          <div className="hero-portrait-stage">
            <div className="portrait-luxury-frame">
              <img
                src="/assets/brian-ngatia-portrait.jpg"
                alt="Brian Ngatia — Digital Architect, Technology Builder & Founder of Cy Tech Solutions"
                className="portrait-main-img"
              />
              <div className="portrait-overlay-gradient" />
            </div>
          </div>

          {/* Right Column: Three Value Pillars */}
          <div className="hero-right-column">
            <div className="pillar-card">
              <div className="pillar-header">
                <span className="pillar-dot dot-terracotta" />
                <h4>ARCHITECTING</h4>
              </div>
              <p>High-converting, resilient web platforms and product surfaces that turn cold visitors into high-LTV clients.</p>
            </div>

            <div className="pillar-card">
              <div className="pillar-header">
                <span className="pillar-dot dot-amber" />
                <h4>AUTOMATING</h4>
              </div>
              <p>Time-intensive document processing, OCR extraction pipelines, and intelligent AI workflows saving 80%+ hours.</p>
            </div>

            <div className="pillar-card">
              <div className="pillar-header">
                <span className="pillar-dot dot-emerald" />
                <h4>UNLOCKING</h4>
              </div>
              <p>Quantitative edge, systematic marketing blueprints, and algorithmic trading scripts for sustainable growth.</p>
            </div>

            {/* Quick Metrics Bar */}
            <div className="hero-metrics-pill">
              <div className="metric-item">
                <span className="metric-val">100%</span>
                <span className="metric-lbl">Execution Rate</span>
              </div>
              <div className="metric-div" />
              <div className="metric-item">
                <span className="metric-val">5x+</span>
                <span className="metric-lbl">Team Efficiency</span>
              </div>
              <div className="metric-div" />
              <div className="metric-item">
                <span className="metric-val">24/7</span>
                <span className="metric-lbl">Automated Flow</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS SECTION — Dark Onyx Canvas */}
      <section id="projects" className="section-dark-showcase">
        <div className="section-container">
          <div className="section-title-row">
            <div className="title-left">
              <span className="section-number-tag">01 / PORTFOLIO CASE STUDIES</span>
              <h2 className="section-heading-serif">
                FEATURED <span className="text-amber-italic">PROJECTS</span>
              </h2>
            </div>
            <div className="title-right">
              <p className="section-lede-text">
                Proven digital architectures built to solve real operational bottlenecks, capture customer trust, and generate measurable revenue.
              </p>
              <button className="btn-view-all" onClick={() => scrollTo("collaborate")}>
                Start Your Build <MoveUpRight size={16} />
              </button>
            </div>
          </div>

          {/* Project Grid */}
          <div className="featured-projects-grid">
            {projects.map((project) => (
              <article key={project.id} className={`luxury-project-card card-accent-${project.accent}`}>
                <div className="project-card-image-box">
                  <img
                    src={project.image}
                    alt={`${project.name} live application preview`}
                    className="project-screenshot"
                    loading="lazy"
                  />
                  <div className="image-hover-shade" />

                  {/* External Project Link Button */}
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="project-launch-btn"
                    aria-label={`Open ${project.name} in new tab`}
                  >
                    <ArrowUpRight size={22} strokeWidth={2} />
                  </a>
                </div>

                {/* Project Card Content */}
                <div className="project-card-body">
                  <div className="project-index-row">
                    <span className="project-index-num">{project.index}</span>
                    <span className="project-category-text">{project.category}</span>
                  </div>

                  <h3 className="project-title-link">
                    <a href={project.href} target="_blank" rel="noreferrer">
                      {project.name}
                    </a>
                  </h3>

                  <div className="project-tagline">{project.tagline}</div>

                  <p className="project-description-text">{project.description}</p>

                  {/* Revenue / Problem Solved Callout */}
                  <div className="project-impact-box">
                    <div className="impact-header">
                      <Zap size={14} className="impact-icon" />
                      <span>REVENUE & RETENTION IMPACT</span>
                    </div>
                    <div className="impact-metrics">{project.metrics}</div>
                    <p className="impact-note">{project.impactNote}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* REVENUE ACCELERATION PROCESS & CORE FOCUS — Warm Sand Background */}
      <section id="process" className="section-warm-editorial">
        <div className="section-container">
          <div className="split-process-grid">
            {/* Left: My Process 01-05 */}
            <div className="process-column">
              <div className="column-heading-box">
                <span className="column-eyebrow">SYSTEMATIC METHODOLOGY</span>
                <h2 className="column-title-serif">
                  MY REVENUE <span className="text-terracotta-italic">PROCESS</span>
                </h2>
                <p className="column-subtext">
                  A disciplined 5-stage framework that transforms abstract business goals into profitable, automated systems.
                </p>
              </div>

              <div className="process-timeline-cards">
                {processSteps.map((step) => (
                  <div key={step.step} className="process-step-row">
                    <div className="step-number-box">
                      <span className="step-num">{step.step}</span>
                    </div>
                    <div className="step-content-box">
                      <div className="step-title-row">
                        <h4 className="step-name">{step.title}</h4>
                        <span className="step-sub">{step.subtitle}</span>
                      </div>
                      <p className="step-desc">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="process-conclusion-bar">
                <p>A clear process. Thoughtful architecture. Powerful revenue results.</p>
                <button className="btn-inline-arrow" onClick={() => scrollTo("collaborate")}>
                  Start Stage 01 <ArrowUpRight size={16} />
                </button>
              </div>
            </div>

            {/* Right: Revenue Focus & Editorial Quote Box */}
            <div className="tools-column">
              <div className="column-heading-box">
                <span className="column-eyebrow">STRATEGIC FOCUS</span>
                <h2 className="column-title-serif">
                  CORE <span className="text-terracotta-italic">DOMAINS</span>
                </h2>
                <p className="column-subtext">
                  Focused directly on eliminating operational friction and building revenue leverage.
                </p>
              </div>

              {/* Focus Domains List */}
              <div className="focus-domains-list">
                {focusDomains.map((domain, index) => (
                  <div key={index} className="focus-domain-item">
                    <h4 className="focus-domain-title">{domain.title}</h4>
                    <p className="focus-domain-desc">{domain.desc}</p>
                  </div>
                ))}
              </div>

              {/* Philosophical Quote Card matching Reference Image 1 */}
              <div className="quote-editorial-box">
                <div className="quote-marks">“</div>
                <blockquote className="quote-text">
                  Design and technology are not just what they look like. They are how your business solves bottlenecks, commands authority, and unlocks revenue.
                </blockquote>
                <div className="quote-author">— Brian Ngatia, Cypher</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE BUSINESS BOTTLENECK & ROI ESTIMATOR */}
      <section id="diagnostic" className="section-diagnostic-tool">
        <div className="section-container">
          <div className="diagnostic-card-wrapper">
            <div className="diagnostic-header">
              <span className="diagnostic-tag">
                <Sparkles size={14} /> INTERACTIVE GROWTH DIAGNOSTIC
              </span>
              <h2 className="diagnostic-title">
                What is currently limiting your business from its <span className="text-amber-italic">true potential?</span>
              </h2>
              <p className="diagnostic-subtitle">
                Select your primary operational headache below to get an instant architectural diagnosis and strategic solution.
              </p>
            </div>

            {/* Diagnostic Selector Buttons */}
            <div className="diagnostic-selector-grid">
              <button
                className={`diag-tab-btn ${selectedBottleneck === "manual_docs" ? "active" : ""}`}
                onClick={() => setSelectedBottleneck("manual_docs")}
              >
                <FileSpreadsheet size={18} />
                <span>Manual Document & OCR Inefficiency</span>
              </button>

              <button
                className={`diag-tab-btn ${selectedBottleneck === "low_conversion" ? "active" : ""}`}
                onClick={() => setSelectedBottleneck("low_conversion")}
              >
                <Globe size={18} />
                <span>Low Website Conversion & Traffic Drop-off</span>
              </button>

              <button
                className={`diag-tab-btn ${selectedBottleneck === "ai_enablement" ? "active" : ""}`}
                onClick={() => setSelectedBottleneck("ai_enablement")}
              >
                <Cpu size={18} />
                <span>Team Lacks AI Workflow Training</span>
              </button>

              <button
                className={`diag-tab-btn ${selectedBottleneck === "trading_automation" ? "active" : ""}`}
                onClick={() => setSelectedBottleneck("trading_automation")}
              >
                <LineChart size={18} />
                <span>Need Algorithmic Trading EA Scripts</span>
              </button>

              <button
                className={`diag-tab-btn ${selectedBottleneck === "marketing_blueprint" ? "active" : ""}`}
                onClick={() => setSelectedBottleneck("marketing_blueprint")}
              >
                <TrendingUp size={18} />
                <span>Unsystematized Marketing & Acquisition</span>
              </button>
            </div>

            {/* Diagnostic Result Box */}
            <div className="diagnostic-result-panel">
              <div className="diag-result-grid">
                <div className="result-left">
                  <span className="result-label">DIAGNOSIS & ROOT CAUSE</span>
                  <h3 className="result-heading">{currentSolution.title}</h3>
                  <p className="result-diagnosis">{currentSolution.diagnosis}</p>
                </div>

                <div className="result-right">
                  <div className="solution-box">
                    <span className="solution-label">ARCHITECTURAL SOLUTION</span>
                    <p className="solution-text">{currentSolution.solution}</p>
                  </div>

                  <div className="roi-box">
                    <span className="roi-label">EXPECTED REVENUE & EFFICIENCY IMPACT</span>
                    <div className="roi-text">{currentSolution.roi}</div>
                  </div>

                  <button
                    className="btn-apply-solution"
                    onClick={() => {
                      setSelectedService(currentSolution.title);
                      scrollTo("collaborate");
                    }}
                  >
                    Deploy This System With Brian <ArrowUpRight size={17} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LET'S COLLABORATE SECTION — Clean Editorial Split */}
      <section id="collaborate" className="section-collaborate-luxury">
        <div className="section-container">
          <div className="collaborate-editorial-grid">
            {/* Left Big Serif Quote */}
            <div className="collab-left-quote">
              <div className="quote-big-serif">“</div>
              <h2 className="quote-collab-heading">
                LET'S CREATE SOMETHING <br />
                <span className="heading-terracotta">EXTRAORDINARY &</span> <br />
                <span className="heading-white">PROFITABLE TOGETHER.</span>
              </h2>

              <p className="collab-vision-text">
                Whether you need to overhaul your digital presence, automate paper-heavy operations with OCR, train your team on generative AI, or engineer high-converting web applications — let’s turn the bottleneck into a revenue catalyst.
              </p>

              <div className="collab-contact-directs">
                <a href="mailto:brianngatia845@gmail.com" className="direct-item">
                  <Mail size={18} className="direct-icon" />
                  <div>
                    <span className="direct-lbl">EMAIL CHANNEL</span>
                    <span className="direct-val">brianngatia845@gmail.com</span>
                  </div>
                </a>

                <a href="tel:+254722970466" className="direct-item">
                  <Phone size={18} className="direct-icon" />
                  <div>
                    <span className="direct-lbl">PHONE / DIRECT CALL</span>
                    <span className="direct-val">+254 722 970 466</span>
                  </div>
                </a>

                <div className="direct-item">
                  <MapPin size={18} className="direct-icon" />
                  <div>
                    <span className="direct-lbl">HEADQUARTERS</span>
                    <span className="direct-val">Nairobi, Kenya • Worldwide Engagements</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Center: Clean Arched Portrait of Brian */}
            <div className="collab-center-arch">
              <div className="arch-portrait-frame">
                <img
                  src="/assets/brian-ngatia-portrait.jpg"
                  alt="Brian Ngatia — Ready for strategic collaborations"
                  className="arch-img"
                />
                <div className="arch-ambient-glow" />
              </div>
            </div>

            {/* Right: Quick WhatsApp Handoff Form */}
            <div className="collab-right-form">
              <div className="inquiry-luxury-card">
                <div className="inquiry-card-header">
                  <div>
                    <span className="inquiry-eyebrow">FAST TRACK BRIEF</span>
                    <h3 className="inquiry-title">LET'S TALK</h3>
                  </div>
                </div>

                <p className="inquiry-card-desc">
                  I am currently available for freelance builds, advisory, and high-impact revenue contracts.
                </p>

                <form className="luxury-form" onSubmit={handleInquiry}>
                  <div className="form-group-row">
                    <label className="input-label">
                      <span>YOUR NAME *</span>
                      <input name="name" type="text" placeholder="e.g. Alex Kamau" required />
                    </label>

                    <label className="input-label">
                      <span>YOUR EMAIL *</span>
                      <input name="email" type="email" placeholder="alex@company.com" required />
                    </label>
                  </div>

                  <div className="form-group-row">
                    <label className="input-label">
                      <span>COMPANY / PROJECT</span>
                      <input name="company" type="text" placeholder="e.g. Nexus Global" />
                    </label>

                    <label className="input-label">
                      <span>DESIRED SOLUTION</span>
                      <select
                        name="service"
                        value={selectedService}
                        onChange={(e) => setSelectedService(e.target.value)}
                      >
                        <option value="Website and Web App Development & Management">
                          Website & Web App Development
                        </option>
                        <option value="Digital Marketing Blueprints Creation">
                          Digital Marketing Blueprints
                        </option>
                        <option value="AI Skills Builder and Trainer">
                          AI Skills Training for Teams
                        </option>
                        <option value="Trading EA Scripts Developer">
                          Trading EA Scripts (MT5 / Pine Script)
                        </option>
                        <option value="Prompt Engineering, Document Intelligence, OCR & Extraction">
                          Document Intelligence & OCR Extraction
                        </option>
                        <option value="Comprehensive Revenue Systems Overhaul">
                          Full Revenue Systems Overhaul
                        </option>
                      </select>
                    </label>
                  </div>

                  <label className="input-label full-width">
                    <span>PROJECT SCOPE & REVENUE GOAL *</span>
                    <textarea
                      name="brief"
                      rows={4}
                      placeholder="Briefly describe what bottlenecks you want to fix or what system you want to build..."
                      required
                    />
                  </label>

                  <button type="submit" className="btn-submit-whatsapp">
                    <span>Send Inquiry via WhatsApp</span>
                    <Send size={16} />
                  </button>

                  {formStatus && <p className="form-success-alert">{formStatus}</p>}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="editorial-footer">
        <div className="footer-content-row">
          <div className="footer-left">
            <div className="footer-brand-title">
              <span className="cy-mark">CY</span> CYPHER
            </div>
            <p className="footer-tagline">
              Digital Architecture • AI Systems • High-Converting Web Platforms • Nairobi, Kenya
            </p>
          </div>

          <div className="footer-center">
            <div className="footer-social-links">
              <a href="https://github.com/Linux-254" target="_blank" rel="noreferrer">
                GitHub (@Linux-254)
              </a>
              <span className="dot">•</span>
              <a href="https://github.com/BrianCyrus-Cypher" target="_blank" rel="noreferrer">
                GitHub (@BrianCyrus-Cypher)
              </a>
              <span className="dot">•</span>
              <a href="https://www.linkedin.com/in/brian-ngatia-cypher" target="_blank" rel="noreferrer">
                LinkedIn Profile
              </a>
            </div>
          </div>

          <div className="footer-right">
            <span>© {new Date().getFullYear()} BRIAN NGATIA. ALL RIGHTS RESERVED.</span>
            <span className="footer-crafted">DESIGNED WITH LUXURY & REVENUE INTENT</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
