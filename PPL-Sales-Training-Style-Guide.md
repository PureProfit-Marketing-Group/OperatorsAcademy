# PPL Sales Training — Complete CSS, Styling & UI/UX Reference Guide
# ============================================================================
# Source: https://dantonino-lab.github.io/ppl-sales-training/
# Generated: 2026-03-10T00:55:50.383Z
# Purpose: Exact replication guide for alignment, style, theme, and components
# ============================================================================


================================================================================
1. GLOBAL RESET & BASE STYLES
================================================================================

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    background: #0a0a0a;
    color: #ffffff;
    overflow-x: hidden;
}


================================================================================
2. COLOR PALETTE
================================================================================

--- PRIMARY COLORS ---
Background (Base Dark):      #0a0a0a  |  rgb(10, 10, 10)
Text (Primary White):        #ffffff  |  rgb(255, 255, 255)
Accent Blue:                 #60a5fa  |  rgb(96, 165, 250)
Accent Green:                #34d399  |  rgb(52, 211, 153)
Accent Amber:                #fbbf24  |  rgb(251, 191, 36)
Accent Red:                  #f87171  |  rgb(248, 113, 113)

--- TEXT OPACITY LEVELS ---
Text Primary:                rgba(255, 255, 255, 1.0)     — headings, card titles
Text Body:                   rgba(255, 255, 255, 0.8)     — body paragraphs
Text Secondary:              rgba(255, 255, 255, 0.7)     — script text, ref-content
Text Muted:                  rgba(255, 255, 255, 0.65)    — pain list items
Text Subtle:                 rgba(255, 255, 255, 0.6)     — subtitle, card descriptions, niche-why
Text Tag:                    rgba(255, 255, 255, 0.5)     — tag buttons
Text Faint:                  rgba(255, 255, 255, 0.4)     — card labels
Text Ghost:                  rgba(255, 255, 255, 0.35)    — ref titles
Text Whisper:                rgba(255, 255, 255, 0.3)     — slide numbers, step time
Text Section Label:          rgba(255, 255, 255, 0.25)    — section labels
Nav Dot Inactive:            rgba(255, 255, 255, 0.2)     — nav dots

--- SURFACE/BACKGROUND OPACITIES ---
Card/Surface BG:             rgba(255, 255, 255, 0.05)    — cards, niche-cards, tag buttons
Pain Card BG:                rgba(255, 255, 255, 0.04)    — pain cards, script bg, tech items
Card/Surface Border:         rgba(255, 255, 255, 0.1)     — card borders, niche card borders
Pain Card Border:            rgba(255, 255, 255, 0.08)    — pain card borders, script borders
Step Divider:                rgba(255, 255, 255, 0.05)    — step bottom borders

--- ACCENT TINTED BACKGROUNDS ---
Blue Tip BG:                 rgba(96, 165, 250, 0.1)
Blue Tip Border:             rgba(96, 165, 250, 0.2)
Blue Callout BG:             rgba(96, 165, 250, 0.08)
Blue Step Num BG:            rgba(96, 165, 250, 0.15)

Green Tip BG:                rgba(52, 211, 153, 0.1)
Green Tip Border:            rgba(52, 211, 153, 0.2)
Green Callout BG:            rgba(52, 211, 153, 0.08)
Green Step Num BG:           rgba(52, 211, 153, 0.15)
Green Objection Border:      rgba(52, 211, 153, 0.3)

Amber Tip BG:                rgba(251, 191, 36, 0.1)
Amber Tip Border:            rgba(251, 191, 36, 0.2)
Amber Callout BG:            rgba(251, 191, 36, 0.08)
Amber Step Num BG:           rgba(251, 191, 36, 0.15)

Red Step Num BG:             rgba(248, 113, 113, 0.15)


================================================================================
3. SLIDE BACKGROUND GRADIENTS
================================================================================

All gradients use: linear-gradient(135deg, ...)

.slide-dark:
    #0a0a0a (solid)

.slide-gradient:
    #0a0a0a 0% → #1a1a2e 50% → #0a0a0a 100%
    (Dark with subtle dark-indigo center)

.slide-blue:
    #0f2744 0% → #1a3a5c 50% → #0f2744 100%
    (Deep blue gradient)

.slide-navy:
    #0d1b2a 0% → #1b2838 50% → #0d1b2a 100%
    (Dark navy gradient)

.slide-dark-blue:
    #0a1628 0% → #162d50 50% → #0a1628 100%
    (Very dark blue gradient)

.slide-green:
    #0a1a0a 0% → #1a2e1a 50% → #0a1a0a 100%
    (Dark green tint gradient — defined but unused)

.slide-amber:
    #1a1400 0% → #2e2200 50% → #1a1400 100%
    (Dark amber tint gradient — defined but unused)

Pattern Used Across 16 Slides:
    Slide 1:  slide-gradient
    Slide 2:  slide-dark
    Slide 3:  slide-blue
    Slide 4:  slide-navy
    Slide 5:  slide-dark-blue
    Slide 6:  slide-dark
    Slide 7:  slide-navy
    Slide 8:  slide-dark
    Slide 9:  slide-gradient
    Slide 10: slide-dark
    Slide 11: slide-navy
    Slide 12: slide-gradient
    Slide 13: slide-dark
    Slide 14: slide-blue
    Slide 15: slide-dark
    Slide 16: slide-gradient


================================================================================
4. LAYOUT SYSTEM
================================================================================

--- SLIDE CONTAINER ---
.slide {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;         /* Vertically centered content */
    padding: 60px 80px;              /* Desktop */
    position: relative;
}

@media (max-width: 768px) {
    .slide { padding: 40px 24px; }   /* Mobile */
}

--- CARD GRIDS ---
.card-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 24px;
    margin-top: 32px;
}

.card-grid-2 {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 24px;
    margin-top: 32px;
}

@media (max-width: 768px) {
    .card-grid { grid-template-columns: 1fr; }
    .card-grid-2 { grid-template-columns: 1fr; }
}

--- STEPS LAYOUT ---
.steps {
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    gap: 0;
}

.step {
    display: flex;
    align-items: flex-start;
    gap: 20px;
    padding: 24px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}


================================================================================
5. TYPOGRAPHY
================================================================================

--- FONT FAMILY ---
System font stack: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif

--- HEADING 1 (h1) ---
font-size: clamp(36px, 5vw, 64px);     /* Responsive: 36px → 64px */
font-weight: 800;                        /* Extra Bold */
line-height: 1.1;
letter-spacing: -1px;
margin-bottom: 16px;
color: #ffffff;

--- HEADING 2 (h2) ---
font-size: clamp(28px, 4vw, 48px);     /* Responsive: 28px → 48px */
font-weight: 700;                        /* Bold */
line-height: 1.2;
letter-spacing: -0.5px;
margin-bottom: 24px;
color: #ffffff;

--- HEADING 3 (h3) ---
font-size: clamp(18px, 2.5vw, 24px);   /* Responsive: 18px → 24px */
font-weight: 600;                        /* Semi Bold */
margin-bottom: 16px;
color: #60a5fa;                          /* Blue accent by default */

--- SUBTITLE ---
font-size: clamp(16px, 2vw, 22px);     /* Responsive: 16px → 22px */
color: rgba(255, 255, 255, 0.6);
margin-bottom: 40px;
line-height: 1.5;

--- BODY TEXT (p) ---
font-size: 17px;
line-height: 1.7;
color: rgba(255, 255, 255, 0.8);

--- BRAND LABEL (title slide top text) ---
font-size: 17px (inherited);
font-weight: 400;
color: #60a5fa;
letter-spacing: 4px;
text-transform: uppercase;
margin-bottom: 24px;

--- SECTION LABEL ---
position: absolute;
top: 30px;
left: 80px;
font-size: 11px;
text-transform: uppercase;
letter-spacing: 3px;
color: rgba(255, 255, 255, 0.25);

@media (max-width: 768px) {
    left: 24px;
}

--- SLIDE NUMBER ---
position: absolute;
top: 30px;
right: 40px;
font-size: 14px;
color: rgba(255, 255, 255, 0.3);
letter-spacing: 2px;

--- HIGHLIGHT TEXT ---
.highlight:          color: #60a5fa;   (blue)
.highlight-green:    color: #34d399;   (green)
.highlight-amber:    color: #fbbf24;   (amber)
.highlight-red:      color: #f87171;   (red)
(Applied as <span> inside headings for colored accent words)


================================================================================
6. COMPONENT STYLES
================================================================================

--- CARDS ---
.card {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    padding: 32px;
    transition: transform 0.2s;
}
.card:hover {
    transform: translateY(-2px);
}

.card-label {
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: rgba(255, 255, 255, 0.4);
    margin-bottom: 12px;
}

.card-title {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 12px;
}

.card-desc {
    font-size: 15px;
    color: rgba(255, 255, 255, 0.6);
    line-height: 1.6;
}

--- CARD TIPS (inside cards) ---
.card-tip {
    margin-top: 16px;
    padding: 12px 16px;
    background: rgba(96, 165, 250, 0.1);
    border: 1px solid rgba(96, 165, 250, 0.2);
    border-radius: 8px;
    font-size: 14px;
    color: #60a5fa;
}

.card-tip-green {
    /* Same structure, green variant: */
    background: rgba(52, 211, 153, 0.1);
    border: 1px solid rgba(52, 211, 153, 0.2);
    color: #34d399;
}

.card-tip-amber {
    /* Same structure, amber variant: */
    background: rgba(251, 191, 36, 0.1);
    border: 1px solid rgba(251, 191, 36, 0.2);
    color: #fbbf24;
}

--- CALLOUTS (left-border accent blocks) ---
.callout {
    margin-top: 32px;
    padding: 24px 28px;
    background: rgba(96, 165, 250, 0.08);
    border-left: 4px solid #60a5fa;
    border-radius: 0 12px 12px 0;
    font-size: 16px;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.8);
}

.callout-green {
    background: rgba(52, 211, 153, 0.08);
    border-left: 4px solid #34d399;
}

.callout-amber {
    background: rgba(251, 191, 36, 0.08);
    border-left: 4px solid #fbbf24;
}

--- SCRIPT BLOCKS (italic quote-style blocks) ---
.script {
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 12px;
    padding: 24px 28px;
    margin-top: 16px;
    font-size: 15px;
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.75);
    font-style: italic;
}

.script strong {
    color: #60a5fa;
    font-style: normal;
}

--- OBJECTIONS (Q&A pairs) ---
.objection {
    margin-bottom: 28px;
}

.objection-q {
    font-size: 18px;
    font-weight: 700;
    color: #f87171;                    /* Red for the question/objection */
    margin-bottom: 8px;
}

.objection-a {
    font-size: 15px;
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.6;
    padding-left: 20px;
    border-left: 3px solid rgba(52, 211, 153, 0.3);   /* Green accent border */
}

--- STEP NUMBERS (numbered circles) ---
.step-num {
    width: 56px;
    height: 56px;
    min-width: 56px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 22px;
    font-weight: 700;
}

Color Variants:
.step-num-blue {
    background: rgba(96, 165, 250, 0.15);
    border: 2px solid #60a5fa;
    color: #60a5fa;
}
.step-num-green {
    background: rgba(52, 211, 153, 0.15);
    border: 2px solid #34d399;
    color: #34d399;
}
.step-num-amber {
    background: rgba(251, 191, 36, 0.15);
    border: 2px solid #fbbf24;
    color: #fbbf24;
}
.step-num-red {
    background: rgba(248, 113, 113, 0.15);
    border: 2px solid #f87171;
    color: #f87171;
}

--- STEP CONTENT ---
.step-content h3 {
    margin-bottom: 6px;
}
.step-content p {
    font-size: 15px;
    color: rgba(255, 255, 255, 0.6);
    line-height: 1.5;
}
.step-time {
    font-size: 13px;
    color: rgba(255, 255, 255, 0.3);
    margin-top: 4px;
}

--- TAG BUTTONS (title slide section links) ---
background: rgba(255, 255, 255, 0.05);
border: 1px solid rgba(255, 255, 255, 0.1);
border-radius: 8px;
padding: 12px 20px;
font-size: 17px (inherited);
color: rgba(255, 255, 255, 0.5);
display: inline-block (flex-wrapped);

--- TECH ITEMS ---
.tech-item {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 16px 20px;
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 12px;
    font-size: 15px;
    color: rgba(255, 255, 255, 0.8);
}

.tech-icon {
    font-size: 20px;
    width: 24px;
    text-align: center;
}

--- NICHE CARDS ---
.niche-card {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    padding: 28px;
}

.niche-emoji {
    font-size: 32px;
    margin-bottom: 12px;
}

.niche-name {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 8px;
}

.niche-why {
    font-size: 14px;
    color: rgba(255, 255, 255, 0.6);
    line-height: 1.5;
}

--- PAIN CARDS ---
.pain-card {
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 16px;
    padding: 28px;
}

.pain-list {
    list-style: none;
    padding: 0;
    margin-bottom: 16px;
}

.pain-list li {
    font-size: 15px;
    color: rgba(255, 255, 255, 0.65);
    padding: 6px 0;
    padding-left: 20px;
    position: relative;
    line-height: 1.5;
}

.pain-list li::before {
    content: '"';
    position: absolute;
    left: 0;
    color: #f87171;
    font-weight: 700;
    font-size: 18px;
}

--- QUICK REFERENCE SECTION ---
.ref-section {
    margin-bottom: 24px;
}

.ref-title {
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: rgba(255, 255, 255, 0.35);
    margin-bottom: 8px;
}

.ref-content {
    font-size: 15px;
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.6;
}

.ref-row {
    display: flex;
    gap: 8px;
    padding: 4px 0;
    font-size: 14px;
}

.ref-obj {
    color: #f87171;
    min-width: 220px;
    font-weight: 600;
}

.ref-resp {
    color: #34d399;
}


================================================================================
7. NAVIGATION DOTS (Fixed Right-Side Scroll Indicator)
================================================================================

.nav-dots {
    position: fixed;
    right: 24px;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    gap: 12px;
    z-index: 100;
}

.nav-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.2);
    cursor: pointer;
    transition: all 0.3s;
}

.nav-dot.active {
    background: #60a5fa;
    transform: scale(1.3);
}

Behavior:
  - IntersectionObserver watches each .slide section
  - When a slide enters the viewport (threshold ~0.3), its corresponding dot gets .active class
  - Clicking a dot scrolls to that slide (smooth scroll)
  - Hidden on mobile (max-width: 768px)


================================================================================
8. RESPONSIVE BREAKPOINTS
================================================================================

Single breakpoint: max-width: 768px

Mobile adjustments:
  .slide:             padding: 40px 24px (from 60px 80px)
  .section-label:     left: 24px (from 80px)
  .card-grid:         grid-template-columns: 1fr
  .card-grid-2:       grid-template-columns: 1fr
  .tech-grid:         grid-template-columns: 1fr
  .ref-row:           flex-direction: column; gap: 2px
  .ref-obj:           min-width: auto
  .nav-dots:          display: none


================================================================================
9. PRINT STYLES
================================================================================

@media print {
    .slide {
        min-height: auto;
        page-break-after: always;
        padding: 40px;
    }
    .nav-dots { display: none; }
    body { background: #1a1a1a; }
}


================================================================================
10. ANIMATIONS & TRANSITIONS
================================================================================

--- Card Hover ---
.card { transition: transform 0.2s; }
.card:hover { transform: translateY(-2px); }

--- Nav Dot Active ---
.nav-dot { transition: all 0.3s; }
.nav-dot.active { transform: scale(1.3); }

--- Claude Pulse Keyframe (defined, possibly for a button/badge) ---
@keyframes claude-pulse {
    0%   { box-shadow: rgba(217,119,87,0.5) 0 0 10px inset, rgba(217,119,87,0.3) 0 0 20px inset, rgba(217,119,87,0.1) 0 0 30px inset; }
    50%  { box-shadow: rgba(217,119,87,0.7) 0 0 15px inset, rgba(217,119,87,0.5) 0 0 25px inset, rgba(217,119,87,0.2) 0 0 35px inset; }
    100% { box-shadow: rgba(217,119,87,0.5) 0 0 10px inset, rgba(217,119,87,0.3) 0 0 20px inset, rgba(217,119,87,0.1) 0 0 30px inset; }
}


================================================================================
11. UI/UX DESIGN PATTERNS
================================================================================

--- PAGE STRUCTURE ---
  • Full-viewport slide-based layout (each section = 100vh)
  • Vertically centered content within each slide
  • Fixed navigation dots on right side for orientation
  • Section label + slide number as persistent positioning anchors

--- VISUAL HIERARCHY ---
  1. H1 with highlighted word (color accent on last word): primary attention
  2. Subtitle paragraph: context/description
  3. Card grids or step flows: detailed content
  4. Callouts/script blocks: key takeaways and scripts
  5. Section label + slide number: orientation metadata

--- COLOR CODING SYSTEM ---
  Blue (#60a5fa):    Default accent, h3 headings, tips, highlights, active nav
  Green (#34d399):   Success/positive, objection answers, confirmation highlights
  Amber (#fbbf24):   Warning/caution, special emphasis
  Red (#f87171):     Objection questions, pain points, urgency

--- HEADING ACCENT PATTERN ---
  H1/H2 headings use a <span class="highlight"> (or variant) on the LAST word
  to create a two-tone heading effect:
    "Sales Training" (white) + "Guide" (blue)
    "What We" (white) + "Sell" (green)
    "Why We're" (white) + "Next Level" (blue)

--- CARD DESIGN LANGUAGE ---
  • Frosted glass aesthetic: white at 5% opacity background
  • Subtle 1px borders at 10% white
  • Generous padding (32px)
  • 16px border-radius for main cards, 8px for inner tips
  • Hover lift effect (-2px translateY)

--- CALLOUT DESIGN LANGUAGE ---
  • Left-border accent (4px solid color)
  • Slightly tinted matching background (8% opacity)
  • Right-side rounded corners (0 12px 12px 0)
  • Used for key scripts, takeaways, important notes

--- DEPTH/LAYERING SYSTEM ---
  Level 1 (deepest):     Slide background (gradient)
  Level 2 (surface):     Cards (5% white bg, 10% white border)
  Level 3 (sub-surface): Pain cards, scripts (4% white bg, 8% white border)
  Level 4 (accent):      Tips inside cards (colored 10% bg, 20% border)
  Level 5 (callout):     Callouts (colored 8% bg, 4px left border)

--- SPACING SYSTEM ---
  Slide padding:        60px 80px (desktop), 40px 24px (mobile)
  Grid gap:             24px
  Card padding:         32px (main cards), 28px (niche/pain cards)
  Card tip padding:     12px 16px
  Callout padding:      24px 28px
  Script padding:       24px 28px
  Heading margins:      h1: 16px bottom, h2: 24px bottom, h3: 16px bottom
  Subtitle margin:      40px bottom
  Section gap (steps):  24px padding top/bottom per step

--- BORDER RADIUS SYSTEM ---
  Large cards:          16px
  Script blocks:        12px
  Callout (right side): 12px
  Card tips:            8px
  Tag buttons:          8px
  Step numbers:         50% (circle)
  Nav dots:             50% (circle)


================================================================================
12. JAVASCRIPT BEHAVIOR (Navigation)
================================================================================

Functionality:
  - 16 nav dots created dynamically (one per .slide)
  - IntersectionObserver tracks which slide is in view
  - Active dot highlighted with blue color and 1.3x scale
  - Clicking a dot smooth-scrolls to that slide
  - smooth scroll behavior used throughout

Implementation Pattern:
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.nav-dot');

  // Observer to track active slide
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              // Remove active from all dots
              dots.forEach(d => d.classList.remove('active'));
              // Add active to corresponding dot
              const index = [...slides].indexOf(entry.target);
              dots[index].classList.add('active');
          }
      });
  }, { threshold: 0.3 });

  slides.forEach(slide => observer.observe(slide));

  // Click handler on dots
  dots.forEach((dot, i) => {
      dot.addEventListener('click', () => {
          slides[i].scrollIntoView({ behavior: 'smooth' });
      });
  });


================================================================================
13. HTML STRUCTURE PATTERNS
================================================================================

--- SLIDE TEMPLATE ---
<div class="slide slide-[variant]">
    <div class="section-label">Section Name</div>
    <div class="slide-number">## / 16</div>
    <h2>Title <span class="highlight">Accent Word</span></h2>
    <p class="subtitle">Description text...</p>
    <!-- Content: cards, steps, callouts, etc. -->
</div>

--- CARD GRID TEMPLATE ---
<div class="card-grid">
    <div class="card">
        <div class="card-label">LABEL</div>
        <div class="card-title">Title</div>
        <div class="card-desc">Description...</div>
        <div class="card-tip">Tip text...</div>
    </div>
</div>

--- CALLOUT TEMPLATE ---
<div class="callout">
    <strong>Label:</strong> Content text...
</div>

--- SCRIPT TEMPLATE ---
<div class="script">
    "Quoted script text with <strong>bold highlights</strong>..."
</div>

--- STEPS TEMPLATE ---
<div class="steps">
    <div class="step">
        <div class="step-num step-num-blue">1</div>
        <div class="step-content">
            <h3>Step Title</h3>
            <p>Step description...</p>
            <div class="step-time">~15 seconds</div>
        </div>
    </div>
</div>

--- OBJECTION TEMPLATE ---
<div class="objection">
    <div class="objection-q">"Objection text"</div>
    <div class="objection-a">Response text...</div>
</div>

--- PAIN CARD TEMPLATE ---
<div class="pain-card">
    <h3>Category Name</h3>
    <ul class="pain-list">
        <li>Pain point item</li>
    </ul>
    <p class="card-tip-green">Advice text...</p>
</div>

--- NAV DOTS TEMPLATE ---
<div class="nav-dots">
    <div class="nav-dot active"></div>
    <div class="nav-dot"></div>
    <!-- ... one per slide -->
</div>


================================================================================
END OF STYLE GUIDE
================================================================================
