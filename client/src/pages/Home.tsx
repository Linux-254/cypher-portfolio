/*
 * Quiet Editorial Studio: the opening portrait leads the page, while offset image
 * frames and restrained cobalt accents keep the portfolio feeling like a considered
 * creative publication. Placeholder image URLs are intentionally isolated in data.
 */

import { useEffect, useState } from "react";

type ImageCard = {
  title: string;
  eyebrow: string;
  description: string;
  image: string | null;
  imageAlt: string;
  replacementNote: string;
  tone: "paper" | "ink" | "cobalt";
  link?: string;
};

const portraitCards: ImageCard[] = [
  {
    title: "Portrait 02",
    eyebrow: "Professional image / coming next",
    description: "A second portrait for a different setting, mood, or working context.",
    image: null,
    imageAlt: "Placeholder for Cypher's second professional portrait",
    replacementNote: "Replace image URL in portraitCards",
    tone: "paper",
  },
  {
    title: "Portrait 03",
    eyebrow: "Professional image / coming next",
    description: "A close, human frame that adds another angle to the story behind the work.",
    image: null,
    imageAlt: "Placeholder for Cypher's third professional portrait",
    replacementNote: "Replace image URL in portraitCards",
    tone: "cobalt",
  },
  {
    title: "Portrait 04",
    eyebrow: "Professional image / coming next",
    description: "A final image slot reserved for a studio, speaking, or in-progress moment.",
    image: null,
    imageAlt: "Placeholder for Cypher's fourth professional portrait",
    replacementNote: "Replace image URL in portraitCards",
    tone: "ink",
  },
];

const projectCards: ImageCard[] = [
  {
    title: "Sultan Cocktails Hub",
    eyebrow: "Featured project / hospitality experience",
    description: "A visual web experience that gives a hospitality concept its own atmosphere, browsing rhythm, and digital point of view.",
    image: "/manus-storage/cypher-sultan-cocktails-hub_b30909c2.png",
    imageAlt: "Sultan Cocktails Hub homepage with a cocktail, shisha, and Nairobi nightlife atmosphere",
    replacementNote: "Replace image URL in projectCards",
    tone: "cobalt",
    link: "https://sultan-vibes-hub.onrender.com/",
  },
  {
    title: "Return to Christ",
    eyebrow: "Featured project / image placeholder",
    description: "A future case study frame for a faith-led digital experience with a clear human center.",
    image: "/manus-storage/cypher-return-placeholder_4f2476fe.png",
    imageAlt: "Editorial placeholder artwork for Return to Christ",
    replacementNote: "Replace image URL in projectCards",
    tone: "paper",
  },
];

function ArrowMark() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="arrow-mark">
      <path d="M5 12h13M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
    </svg>
  );
}

function PlaceholderFrame({ card }: { card: ImageCard }) {
  return (
    <div className={`placeholder-frame placeholder-frame--${card.tone}`}>
      {card.image ? (
        <img src={card.image} alt={card.imageAlt} loading="lazy" />
      ) : (
        <div className="placeholder-art" aria-label={card.imageAlt} role="img">
          <span className="placeholder-art__index">IMG / 0{card.title.slice(-2, -1) || "2"}</span>
          <span className="placeholder-art__cross" aria-hidden="true" />
          <span className="placeholder-art__line" aria-hidden="true" />
          <span className="placeholder-art__note">Future image</span>
        </div>
      )}
      <span className="placeholder-badge">Replace image</span>
    </div>
  );
}

function ImageCardView({ card, index }: { card: ImageCard; index: number }) {
  return (
    <article className={`image-card image-card--${card.tone}`} style={{ "--stagger": `${index * 70}ms` } as React.CSSProperties}>
      {card.link ? (
        <a className="project-image-link" href={card.link} target="_blank" rel="noreferrer" aria-label={`Open ${card.title} project`}>
          <PlaceholderFrame card={card} />
        </a>
      ) : (
        <PlaceholderFrame card={card} />
      )}
      <div className="image-card__meta">
        <p className="micro-label">{card.eyebrow}</p>
        <h3>{card.title}</h3>
        <p>{card.description}</p>
        <code>{card.replacementNote}</code>
        {card.link && (
          <a className="text-link project-link" href={card.link} target="_blank" rel="noreferrer">
            Open project <ArrowMark />
          </a>
        )}
      </div>
    </article>
  );
}

export default function Home() {
  const [activeSection, setActiveSection] = useState("top");

  useEffect(() => {
    const sections = ["top", "portraits", "work", "about"]
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActiveSection(visible.target.id);
      },
      { rootMargin: "-20% 0px -65%", threshold: [0.1, 0.35, 0.7] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="site-shell">
      <div className="paper-wash" aria-hidden="true" />
      <header className="site-header" aria-label="Primary navigation">
        <a className="brand-lockup" href="#top" aria-label="Cypher home">
          <img src="/manus-storage/cypher-cx-mark_a5a8eb1c.png" alt="" className="brand-mark" />
          <span>cypher<span className="brand-dot">.</span></span>
        </a>
        <nav className="site-nav">
          {["top", "portraits", "work", "about"].map((id) => (
            <a key={id} className={activeSection === id ? "is-active" : ""} href={`#${id}`}>
              {id === "top" ? "Index" : id === "portraits" ? "Portraits" : id === "work" ? "Selected work" : "About"}
            </a>
          ))}
        </nav>
        <a className="header-contact" href="mailto:hello@cypher.build">
          Let&apos;s talk <ArrowMark />
        </a>
      </header>

      <section className="hero-section" id="top">
        <div className="hero-aside">
          <span className="vertical-label">Portfolio / 2026</span>
          <span className="vertical-rule" />
          <span className="vertical-label vertical-label--muted">Nairobi, KE</span>
        </div>
        <div className="hero-portrait-wrap">
          <div className="hero-portrait-frame">
            <img
              src="/manus-storage/cypher-portrait-01_9ad4b526.png"
              alt="Cypher standing on a rooftop with Nairobi's skyline behind him"
              className="hero-portrait"
            />
            <span className="frame-index">01 / 05</span>
          </div>
          <p className="image-caption">Cypher — builder, designer, practical idealist</p>
        </div>
        <div className="hero-copy">
          <p className="kicker">AI / software / systems</p>
          <h1>Useful ideas, <em>made real.</em></h1>
          <p className="hero-summary">I&apos;m Cypher, a Nairobi-based creative technologist building practical tools for the way people actually work, learn, and grow.</p>
          <div className="hero-actions">
            <a className="button button--solid" href="#work">Explore selected work <ArrowMark /></a>
            <a className="text-link" href="#about">A little more about me <ArrowMark /></a>
          </div>
          <div className="hero-note">
            <span className="note-mark">✳</span>
            <p>Portfolio in progress.<br />The image system is ready for your next three portraits.</p>
          </div>
        </div>
      </section>

      <section className="intro-strip" aria-label="Portfolio introduction">
        <p className="section-number">01</p>
        <p className="intro-strip__text">Technology should feel <strong>clear</strong>, useful, and close to the people it serves. I work across product thinking, interfaces, automation, and the quiet systems underneath.</p>
        <span className="intro-strip__rule" />
        <p className="intro-strip__tag">Open to thoughtful<br />collaborations</p>
      </section>

      <section className="portrait-section" id="portraits">
        <div className="section-heading section-heading--split">
          <div>
            <p className="kicker">The portrait set / 05 frames</p>
            <h2>More of the person<br /><em>behind the build.</em></h2>
          </div>
          <p className="section-heading__aside">Three intentional spaces are waiting for the next professional images you choose. Swap the URL in one place and the layout stays intact.</p>
        </div>
        <div className="portrait-grid">
          {portraitCards.map((card, index) => <ImageCardView card={card} index={index} key={card.title} />)}
        </div>
      </section>

      <section className="work-section" id="work">
        <div className="work-heading">
          <p className="section-number">02</p>
          <div>
            <p className="kicker">Selected work / image placeholders</p>
            <h2>Ideas with a place<br /><em>to go.</em></h2>
          </div>
          <p>Two project frames are reserved below. Their copy can evolve with the work; their images are intentionally easy to replace.</p>
        </div>
        <div className="project-grid">
          {projectCards.map((card, index) => <ImageCardView card={card} index={index} key={card.title} />)}
        </div>
        <div className="work-footer">
          <span>More work is taking shape</span>
          <a className="text-link" href="mailto:hello@cypher.build">Ask for the longer list <ArrowMark /></a>
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="about-stamp">CX<br /><span>—</span><br />26</div>
        <div className="about-copy">
          <p className="kicker">03 / About Cypher</p>
          <h2>Part engineer,<br /><em>part interpreter.</em></h2>
          <p>I move between an idea and the system that can carry it: shaping product direction, designing interfaces, connecting APIs, and making the details understandable to the people who rely on them.</p>
          <a className="button button--outline" href="mailto:hello@cypher.build">Start a conversation <ArrowMark /></a>
        </div>
        <div className="about-facts">
          <div><span>Based in</span><strong>Nairobi, Kenya</strong></div>
          <div><span>Works across</span><strong>AI · fintech · automation</strong></div>
          <div><span>Current energy</span><strong>Useful, not noisy</strong></div>
        </div>
      </section>

      <footer className="site-footer">
        <span>© 2026 Cypher</span>
        <span>Built for real-world momentum</span>
        <a href="#top">Back to top <ArrowMark /></a>
      </footer>
    </main>
  );
}
