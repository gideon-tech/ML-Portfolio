# Design Guidelines: Maku Gideon Portfolio

## Design Approach
**Reference-Based + Modern SaaS Aesthetic**: Drawing inspiration from nils.buysellflows.com with a bold red and black color scheme. Focus on clean minimalism with strategic animations, glassmorphism effects, and bold typography hierarchy. The red serves as the primary accent color against deep black backgrounds for a striking, professional look.

## Typography System

**Font Families** (via Google Fonts CDN):
- Primary: Inter (weights: 400, 500, 600, 700, 800)
- Accent/Display: Space Grotesk or Sora (weights: 600, 700)

**Type Scale**:
- Hero Headline: 4xl/5xl/6xl (mobile/tablet/desktop) - font-bold
- Section Headers: 3xl/4xl - font-bold, tracking-tight
- Subsection Titles: xl/2xl - font-semibold
- Card Titles: lg/xl - font-semibold
- Body Text: base/lg - font-normal, leading-relaxed
- Captions/Labels: sm - font-medium, tracking-wide, uppercase

**Gradient Text Treatment**: Apply gradient effects to "AI/ML Engineer", "Techpreneur", and key section headers using background-clip technique.

## Layout & Spacing System

**Tailwind Spacing Primitives**: Use 4, 6, 8, 12, 16, 24, 32 units consistently throughout (p-4, gap-6, my-8, etc.)

**Container Widths**:
- Full sections: w-full with inner max-w-7xl mx-auto px-6/8
- Content sections: max-w-6xl mx-auto
- Text-heavy content: max-w-4xl mx-auto

**Vertical Rhythm**:
- Section padding: py-16 (mobile), py-24 (tablet), py-32 (desktop)
- Component spacing: space-y-6 to space-y-12
- Grid gaps: gap-6 to gap-8

**Grid Systems**:
- Capabilities: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Testimonials: Horizontal scroll carousel (overflow-x-auto with snap-scroll)
- Stats: grid-cols-2 md:grid-cols-4

## Component Library

### Navigation
- Fixed/sticky header with backdrop-blur effect (glassmorphism)
- Logo left, nav links center/right
- Smooth scroll behavior to sections
- Mobile: Hamburger menu with full-screen overlay
- Height: h-16 to h-20

### Hero Section (Height: 90vh to 100vh)
**Layout**: Centered content with two-column split on desktop
- Left: Text content (name, animated role titles, brief intro, CTA buttons)
- Right: Professional portrait with gradient border treatment
- Animated typing/gradient effect for role transitions ("AI/ML Engineer" → "Techpreneur" → "ML Innovator")
- Two CTAs: Primary "View Projects" + Secondary "Get in Touch" with backdrop-blur effect on buttons
- Include scroll indicator at bottom

### Capabilities/Services Grid
**Card Design** (6 cards total):
- Icon at top (use Heroicons - 2xl size)
- Title (font-semibold, xl)
- Short description (2-3 lines, text-sm/base)
- Optional: Subtle hover lift effect (translate-y-[-4px])
- Border with subtle glow/gradient effect
- Padding: p-6 to p-8
- Rounded corners: rounded-xl to rounded-2xl

Services: AI Automation, Machine Learning Models, Computer Vision, NLP, AI Agents, Predictive Analytics

### Stats Counter Section
- 4-column grid on desktop, 2 on mobile
- Large numbers (text-4xl/5xl, font-bold) with animated count-up
- Labels below (text-sm, uppercase, tracking-wide)
- Stats: "9+ Projects Completed", "8+ Happy Clients", "100+ Models Trained", "3+ Years Experience"

### Testimonials Carousel
**Infinite Horizontal Scroll**:
- Card width: w-[350px] to w-[400px], flex-shrink-0
- Auto-scroll animation (continuous loop)
- Each card includes:
  - Client avatar/initial (rounded-full, w-12 h-12)
  - Quote text (italic, leading-relaxed)
  - Name + Role/Company (font-medium + text-sm)
  - Technology tags at bottom (flex-wrap gap-2, text-xs badges)
- Padding: p-6, rounded-xl
- Include 5-6 testimonials (use provided content + create 2-3 more)

### Skills Section
**Tag Cloud Layout**:
- Flex wrap with gap-3
- Technology badges: px-4 py-2, rounded-full, text-sm font-medium
- Group by category with subtle dividers
- Technologies: Python, TensorFlow, PyTorch, Scikit-learn, Keras, Pandas, NumPy, OpenCV, NLTK, Hugging Face, FastAPI, Docker, AWS, Git

### Contact Section
**Two-Column Layout**:
- Left (40%): Contact info cards
  - Email, Phone, Location with icons
  - Social/Professional links (LinkedIn, GitHub, Blog)
  - Each in individual card/row format
- Right (60%): Contact form
  - Fields: Name, Email, Subject, Message (textarea)
  - Full-width submit button
  - Input styling: border with focus ring, rounded-lg, p-3

### Footer
- Three-column layout (desktop), stacked (mobile)
- Left: Brief tagline + logo
- Center: Quick navigation links
- Right: Social links with icons (Heroicons or Font Awesome)
- Bottom: Copyright notice, centered, text-sm
- Padding: pt-16 pb-8

## Images

**Hero Portrait**: Professional headshot of Maku Gideon
- Placement: Right side of hero section (desktop), above text (mobile)
- Treatment: Rounded shape (rounded-2xl or rounded-full) with gradient border (3-4px thick)
- Size: w-80 to w-96 (desktop), w-64 (mobile)
- Alternative: Subtle glassmorphic frame effect

**Client Avatars**: Testimonial section
- Use initials in circular badges (w-12 h-12) with gradient backgrounds
- Or small professional photos if available

**No other large images required** - focus on clean, text-forward design with strategic use of icons and subtle visual effects.

## Animation Guidelines

**Use Sparingly - Strategic Impact Only**:
- Hero text: Fade-in sequence (stagger by 100-200ms)
- Gradient text: Subtle animated gradient shift (slow, 3-5s duration)
- Scroll reveals: Fade-up on scroll for section headers only
- Testimonials: Smooth auto-scroll (30-40s for full loop)
- Stats: Count-up animation on viewport entry (once)
- Card hovers: Subtle lift (4px translate) - NO color transitions
- **Explicitly avoid**: Page transitions, complex scroll-triggered animations, parallax effects

## Icon Library
**Heroicons** (via CDN): Use outline style primarily, solid for emphasis
- Navigation: Menu, X (close)
- Capabilities: Cog, Chip, Camera, ChatBubble, Chart, LightBulb
- Contact: Envelope, Phone, MapPin
- Social: GitHub, LinkedIn, Twitter/X icons

## Accessibility
- Maintain WCAG AA contrast ratios
- Focus states: ring-2 ring-offset-2 on all interactive elements
- Semantic HTML: nav, main, section, article, footer
- ARIA labels for icon-only buttons
- Form labels: visible or sr-only with proper association

## Production-Ready Specifications
- Mobile-first responsive design
- Smooth scroll behavior (scroll-smooth)
- Backdrop blur support with fallbacks
- Optimized font loading (font-display: swap)
- Lazy loading for below-fold content
- Minimum touch target size: 44x44px for mobile buttons/links