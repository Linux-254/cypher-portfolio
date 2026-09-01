# Cypher Portfolio — Design Direction

## Three Stylistic Approaches

### Theme Name: Quiet Editorial Studio
**Very Brief Intro:** A warm, image-led portfolio that feels like a printed creative journal: strong typography, generous whitespace, and asymmetrical compositions give the work room to breathe.
**Probability:** 0.07

### Theme Name: Signal / Systems
**Very Brief Intro:** A structured technology portfolio built around diagrams, labels, and sharp cobalt signals, presenting Cypher as a systems-minded builder with a precise visual language.
**Probability:** 0.03

### Theme Name: Kinfolk Field Notes
**Very Brief Intro:** A softer, human-centered direction using earthy color, documentary imagery, and tactile paper cues to emphasize thoughtful collaboration and grounded impact.
**Probability:** 0.05

## Chosen Approach: Quiet Editorial Studio

### Design Movement
Contemporary editorial design with references to independent magazines, creative studios, and Swiss-influenced information hierarchy.

### Core Principles
1. Lead with the person and the work: the supplied portrait is the portfolio's opening visual anchor.
2. Use asymmetric layouts and offset blocks instead of centered, symmetrical landing-page formulas.
3. Keep interface chrome restrained so the content reads as considered and professional.
4. Treat placeholders as intentional editorial frames, clearly labeled for future replacement rather than pretending unfinished work is final.

### Color Philosophy
The foundation is warm paper and ink-black, creating the calm of a printed portfolio. Electric cobalt is the owned signal color: it brings the technical edge of AI, automation, and software work without defaulting to a neon or gradient-heavy aesthetic. Small clay and stone notes keep the system human and tactile.

### Layout Paradigm
A narrow reading column sits beside a wider visual rail. The hero begins with the portrait on the left and a high-contrast identity statement on the right, while portfolio cards move into an offset editorial grid. Section labels align to a vertical rhythm, giving the page a publication-like structure.

### Signature Elements
- Thin cobalt rules and compact section labels that feel like editorial annotations.
- Image cards with offset captions and a visible "replace image" cue for future editing.
- A small monogram-like CX mark used as a recurring visual stamp.

### Interaction Philosophy
Interactions should feel deliberate and tactile: cards lift slightly, captions shift a few pixels, and links underline with a cobalt sweep. Placeholder cards remain honest and useful, showing where future assets belong without creating dead-end fake buttons.

### Animation
Use short, responsive transitions under 260ms with a crisp ease-out. Reveal hero copy with a subtle upward movement, stagger portfolio cards by 50ms, and use hover transforms limited to translate and opacity. Respect reduced-motion preferences by disabling entrance movement while retaining focus and color states.

### Typography System
Use **DM Serif Display** for high-impact headlines and **Manrope** for navigation, labels, body copy, and metadata. Headlines should use tight tracking and sentence-case phrasing; labels should be uppercase with generous letter spacing; body copy should stay between 1.55 and 1.75 line-height for calm reading.

### Brand Essence
Cypher is a Nairobi-based builder and creative technologist translating ambitious ideas into practical AI, fintech, automation, and digital experiences for real-world teams.

Personality adjectives: **resourceful, exacting, human**.

### Brand Voice
Headlines should be direct, observant, and quietly confident. CTAs should describe an action, not make a generic promise. Microcopy should explain what is provisional and what is ready.

Example lines:
- "Building useful systems for the way work actually moves."
- "See the thinking behind the interface."

### Wordmark & Logo
Use a compact CX monogram built from two intersecting cobalt strokes, paired with a lowercase `cypher` wordmark in Manrope with one custom-spaced letter pair. The symbol should work on its own as a navigation stamp and favicon.

### Signature Brand Color
**Signal Cobalt — `#2457E6`**. It is energetic enough to signal technology, restrained enough for editorial use, and distinctive against warm paper and ink.

## Content Model

The opening portrait is the first visual item in the page. Three additional professional image cards remain intentionally replaceable and are labeled `Portrait 02`, `Portrait 03`, and `Portrait 04`. The featured project rail includes replaceable image cards for **Sultan Vibes Hub** and **Return to Christ**. Each placeholder uses a stable `image` field so future replacement means changing one URL in the page data rather than restructuring the layout.
