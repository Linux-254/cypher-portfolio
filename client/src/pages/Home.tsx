/*
 * Signal / Systems design reminder: asymmetric editorial composition, graphite outer stage,
 * Signal Lime action color, instrumented metadata, and motion that explains hierarchy.
 */
import { useEffect, useState, type FormEvent } from "react";
import { ArrowUpRight, Check, ChevronDown, Github, Linkedin, Menu, MoveUpRight, X } from "lucide-react";

const projects = [
  {
    index: "01",
    name: "Mwangagrid",
    type: "Digital product / systems",
    description: "A focused digital experience for making infrastructure and connectivity feel more visible, understandable, and useful. Built as a practical product surface rather than a static concept.",
    href: "https://mwangagrid.vercel.app/",
    image: "/manus-storage/mwangagrid-reference_266b9708.png",
    accent: "lime",
    tag: "GRID / SIGNAL",
  },
  {
    index: "02",
    name: "Sultan Cocktails Hub",
    type: "Brand experience / hospitality",
    description: "A visual web experience that gives a hospitality concept its own atmosphere, browsing rhythm, and digital point of view. Designed to turn a product idea into a memorable brand surface.",
    href: "https://sultan-vibes-hub.onrender.com/",
    image: "/manus-storage/sultan-cocktails-hub-reference_bf7f47da.png",
    accent: "ember",
    tag: "BRAND / EXPERIENCE",
  },
  {
    index: "03",
    name: "Return to Christ",
    type: "Digital platform / community",
    description: "A calm, purposeful digital home for faith-led content and connection. The interface gives the message room to breathe while keeping the journey clear and approachable.",
    href: "https://return2chris-et65yita.manus.space/",
    image: "/manus-storage/culture-reference_627ce187.jpg",
    accent: "cobalt",
    tag: "PURPOSE / PLATFORM",
  },
];

const capabilities = [
  { number: "01", title: "AI & intelligent workflows", body: "Prompt engineering, document intelligence, OCR, extraction, and practical AI systems that reduce repetitive work." },
  { number: "02", title: "Web & product engineering", body: "Responsive interfaces, product surfaces, frontend architecture, UI systems, and interaction design built for real users." },
  { number: "03", title: "Automation & operations", body: "Workflow design, data entry systems, business process improvement, and integrations that make teams faster." },
  { number: "04", title: "Trading technology", body: "TradingView and MetaTrader 5 integrations, strategy tooling, data flows, and automation for market-focused products." },
  { number: "05", title: "Systems & security thinking", body: "Clear technical structure, risk-aware decisions, maintainable builds, and a bias toward reliable outcomes." },
  { number: "06", title: "Enterprise AI training", body: "Practical AI training for teams: prompt systems, workflow design, responsible adoption, and high-impact use cases." },
  { number: "07", title: "Creative technology", body: "Branding, motion-minded UI, visual storytelling, and digital experiences that make technical ideas easier to trust." },
];

function ScrollReveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => entry.isIntersecting && setVisible(true), { threshold: 0.12 });
    const node = document.getElementById(`reveal-${Math.random()}`);
    return () => observer.disconnect();
  }, []);
  return <div className={`reveal ${visible ? "is-visible" : ""} ${className}`}>{children}</div>;
}

function ProjectCard({ project }: { project: typeof projects[number] }) {
  return (
    <a className={`project-card project-${project.accent}`} href={project.href} target="_blank" rel="noreferrer">
      <div className="project-visual">
        <img src={project.image} alt={`${project.name} project preview`} />
        <div className="visual-shade" />
        <div className="visual-topline"><span>{project.tag}</span><span>↗ LIVE PROJECT</span></div>
        <div className="visual-index">{project.index}</div>
        <div className="visual-bottomline"><span>CASE SURFACE</span><span className="pulse-dot" /></div>
        <div className="project-arrow"><ArrowUpRight size={22} strokeWidth={1.5} /></div>
      </div>
      <div className="project-copy">
        <div className="eyebrow">{project.type}</div>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <span className="text-link">Open project <MoveUpRight size={14} /></span>
      </div>
    </a>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState("");
  const handleInquiry = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const company = String(form.get("company") || "").trim();
    const service = String(form.get("service") || "").trim();
    const brief = String(form.get("brief") || "").trim();
    if (!name || !email || !brief) {
      setFormStatus("Please add your name, email, and a short project brief.");
      return;
    }
    const message = `Hello Brian, my name is ${name}. I’m reaching out to Cy Tech Solutions${company ? ` from ${company}` : ""}. I’m interested in ${service || "a technology solution"}. My project brief: ${brief}. You can reply to ${email}.`;
    window.open(`https://wa.me/254722970466?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
    setFormStatus("WhatsApp is opening with your message ready to send.");
    event.currentTarget.reset();
  };
  const [activeSection, setActiveSection] = useState("home");
  useEffect(() => {
    const update = () => {
      const sections = ["home", "work", "capabilities", "identity", "contact"];
      const current = sections.find((id) => {
        const el = document.getElementById(id);
        return el && window.scrollY >= el.offsetTop - 180;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  const goTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <main className="site-shell">
      <header className="site-header">
        <button className="brand" onClick={() => goTo("home")} aria-label="Go to homepage">
          <img src="/manus-storage/cypher-mark_33033b0e.png" alt="" />
          <span>CYPHER<span className="brand-dot">.</span></span>
        </button>
        <nav className={menuOpen ? "nav-open" : ""} aria-label="Main navigation">
          {["home", "work", "capabilities", "identity", "contact"].map((item) => <button key={item} className={activeSection === item ? "active" : ""} onClick={() => goTo(item)}>{item === "home" ? "Index" : item}</button>)}
          <a href="https://www.linkedin.com/in/brian-ngatia-cypher" target="_blank" rel="noreferrer" className="nav-connect">Connect <ArrowUpRight size={15} /></a>
        </nav>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X size={22} /> : <Menu size={22} />}</button>
      </header>

      <aside className="system-rail" aria-hidden="true"><span>NAIROBI / EAT</span><span className="rail-line" /><span>TECHNOLOGY + SYSTEMS</span></aside>

      <section id="home" className="hero-section">
        <div className="hero-copy">
          <div className="eyebrow hero-eyebrow"><span className="status-dot" /> Available for meaningful builds</div>
          <h1>I build the<br /><em>systems</em> behind<br />better ideas.</h1>
          <p className="hero-lede">I’m Brian Ngatia — a technology builder working across AI, automation, software, trading systems, and expressive digital experiences.</p>
          <div className="hero-actions"><button className="primary-button" onClick={() => goTo("work")}>See selected work <ArrowUpRight size={17} /></button><button className="text-button" onClick={() => goTo("contact")}>Start a conversation <span>↓</span></button></div>
        </div>
        <div className="hero-art hero-portrait"><img src="/manus-storage/cypher-professional-photo_2f7ea25f.png" alt="Brian Ngatia, technology builder and founder of Cy Tech Solutions" /><div className="hero-portrait-shade" /><div className="hero-art-caption"><span>01 / BUILDER PROFILE</span><span>Signal over noise</span></div><div className="hero-orbit" /><div className="hero-portrait-stamp">C/ CYPHER<br />CY TECH SOLUTIONS</div></div>
        <div className="hero-footer"><span>Scroll to inspect the work</span><ChevronDown size={17} /><span className="hero-count">01—04</span></div>
      </section>

      <section id="work" className="work-section content-section">
        <div className="section-intro"><div className="section-number">01 <span>/</span></div><div><div className="eyebrow">Selected work</div><h2>Proof, not<br /><span>promises.</span></h2></div><p>Three different problems, three different surfaces. The through-line is simple: understand the need, design the system, make the result useful.</p></div>
        <div className="project-grid">{projects.map((project) => <ProjectCard key={project.name} project={project} />)}</div>
      </section>

      <section id="capabilities" className="capabilities-section content-section">
        <div className="section-intro"><div className="section-number">02 <span>/</span></div><div><div className="eyebrow">What I can do</div><h2>Useful at the<br /><span>intersection.</span></h2></div><p>Technical depth is only valuable when it creates clarity. I connect product thinking, engineering, automation, and visual communication to move real work forward.</p></div>
        <div className="capability-list">{capabilities.map((cap) => <div className="capability-row" key={cap.number}><span className="cap-number">{cap.number}</span><h3>{cap.title}</h3><p>{cap.body}</p><ArrowUpRight className="cap-arrow" size={21} /></div>)}</div>
        <div className="fit-band"><div><span className="eyebrow">Best fit</span><h3>Startups, businesses,<br />teams & independent builders.</h3></div><p>Especially when the brief is still taking shape — and the right next move needs both technical judgment and creative execution.</p><button className="round-button" onClick={() => goTo("contact")} aria-label="Go to contact"><ArrowUpRight size={20} /></button></div>
      </section>

      <section id="identity" className="identity-section content-section"><div className="identity-image"><img src="/manus-storage/cypher-professional-photo_2f7ea25f.png" alt="Brian Ngatia, technology builder and founder of Cy Tech Solutions" /><div className="identity-image-grid" /><span className="identity-stamp">C/ 04 — BUILDER PROFILE</span><span className="identity-location">NAIROBI / KENYA</span></div><div className="identity-copy"><div className="section-number">03 <span>/</span></div><div className="eyebrow">The person behind the systems</div><h2>Technical range.<br /><span>Practical intent.</span></h2><p>I’m <strong>Brian Ngatia</strong> — building through <strong>Cy Tech Solutions</strong>. I work across AI, automation, software, trading technology, motion-led interfaces, short-form content systems, and Kenya-first digital business launches.</p><p className="identity-note">I care about the space between a good idea and a usable result: clearer workflows, stronger digital presence, better systems, and technology teams can actually adopt.</p><div className="identity-tags"><span>AI / ENTERPRISE</span><span>PRODUCT / WEB</span><span>AUTOMATION / FLOW</span><span>CREATIVE / MOTION</span></div><a className="text-link" href="https://www.linkedin.com/in/brian-ngatia-cypher" target="_blank" rel="noreferrer">View professional profile <ArrowUpRight size={14} /></a></div></section>

      <section id="contact" className="contact-section content-section"><div className="contact-index">03 <span>/ CONTACT</span></div><div className="contact-content"><div className="eyebrow">Open channel / Cy Tech Solutions</div><h2>Have a problem<br /><em>worth solving?</em></h2><p>Send the context. I’ll help turn it into a clearer, more workable next step.</p><a className="contact-email" href="mailto:brianngatia845@gmail.com">brianngatia845@gmail.com <ArrowUpRight size={19} /></a><div className="social-links"><a href="https://github.com/Linux-254" target="_blank" rel="noreferrer"><Github size={18} /> Linux-254 <ArrowUpRight size={14} /></a><a href="https://github.com/BrianCyrus-Cypher" target="_blank" rel="noreferrer"><Github size={18} /> BrianCyrus-Cypher <ArrowUpRight size={14} /></a><a href="https://www.linkedin.com/in/brian-ngatia-cypher" target="_blank" rel="noreferrer"><Linkedin size={18} /> LinkedIn <ArrowUpRight size={14} /></a></div></div><form className="inquiry-form" onSubmit={handleInquiry}><div className="form-heading"><span className="eyebrow">Quick brief / WhatsApp handoff</span><span className="form-availability"><span className="status-dot" /> Replies via WhatsApp</span></div><div className="form-grid"><label><span>Name *</span><input name="name" placeholder="Your name" required /></label><label><span>Email *</span><input name="email" type="email" placeholder="you@company.com" required /></label><label><span>Company</span><input name="company" placeholder="Company or team" /></label><label><span>What do you need?</span><select name="service" defaultValue=""><option value="" disabled>Select a focus</option><option>AI training for enterprise teams</option><option>Website or digital product</option><option>Automation and workflow systems</option><option>Short-form content system</option><option>Trading technology</option><option>Not sure yet</option></select></label><label className="form-full"><span>Project brief *</span><textarea name="brief" placeholder="What are you trying to improve or build?" rows={4} required /></label></div><button className="primary-button form-submit" type="submit">Send via WhatsApp <ArrowUpRight size={17} /></button>{formStatus && <p className="form-status" role="status">{formStatus}</p>}<p className="form-note">By continuing, WhatsApp will open with a prefilled message to Brian Ngatia at Cy Tech Solutions.</p></form><div className="contact-signal"><div className="signal-ring ring-one" /><div className="signal-ring ring-two" /><div className="signal-ring ring-three" /><span>READY<br />WHEN<br />YOU ARE</span></div></section>

      <footer className="site-footer"><div className="footer-brand"><img src="/manus-storage/cypher-mark_33033b0e.png" alt="" /><span>CY<span>PHER</span></span></div><span>Built with intent / Nairobi, Kenya</span><span>© {new Date().getFullYear()} Cypher</span></footer>
    </main>
  );
}
