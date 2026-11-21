# Pharmacy College Website – Premium Demo Website

A complete, modern, multi-page demonstration website for a **Pharmacy College in India**, engineered to showcase website development capabilities to Indian educational institutions, pharmacy colleges, and academic trusts.

---

## 1. Project Overview & Architectural Highlights
* **Purpose:** High-conversion, premium demonstration website tailored for potential Indian pharmacy colleges.
* **Academic Scope:** Comprehensive coverage of **D.Pharm**, **B.Pharm**, **M.Pharm**, and **Pharm.D** pathways, 8 pharmaceutical departments, hands-on laboratories, research methodologies, admission procedures, career opportunities, campus facilities, and student life.
* **Strict Anonymity & Compliance:** Contains **NO real or fictional college names, university names, brand identities, faculty names, or student identities**. Uses strictly generic terminology throughout (`PHARMACY COLLEGE`, `PHARMACY COLLEGE WEBSITE`, `OUR COLLEGE`, etc.).
* **Regulatory Integrity:** Program descriptions, durations, and criteria reflect general Indian educational guidelines without making fabricated claims of institutional approvals, rankings, or guaranteed placement packages.

---

## 2. Technology Stack (Strict 100% Browser Native)
* **HTML5:** Semantic architecture, accessible forms, structured micro-data, and Open Graph meta tags.
* **CSS3:** Custom responsive layout system using CSS Grid, Flexbox, custom design tokens, backdrop filters, and smooth CSS transitions. Zero external CSS frameworks (No Bootstrap, Tailwind, or Bulma).
* **Vanilla JavaScript:** 100% pure client-side JavaScript. No libraries or runtimes (No React, Next.js, jQuery, Vue, PHP, or Node.js).
* **Hostinger Compatibility:** Ultra-lightweight, 100% static file structure ready for direct upload to Hostinger Web Hosting, cPanel public_html, or static CDNs.

---

## 3. Visual Identity & Design System
* **Primary Deep Navy:** `#142B45`
* **Medical Green:** `#16866A`
* **Teal Accent:** `#159A91`
* **Soft Mint Background:** `#E6F5EF`
* **Accent Gold:** `#D6AD63`
* **Neutrals:** White `#FFFFFF`, Light Grey `#F4F7F8`, Body Text `#4A5B6E`
* **Typography:** `Plus Jakarta Sans` & `Outfit` with web-safe system fallbacks.

---

## 4. Multi-Page Site Map

1. **`index.html` (Homepage):**
   * Sticky navigation with clean 4-item dropdown architecture (Home, Academics ▾, Campus Life ▾, Admissions ▾), generic pharmacy symbol logo, and streamlined Apply Now CTA.
   * Cinematic hero section with floating cards and primary/secondary CTAs.
   * Animated JavaScript statistics counters (4 sample metrics with disclaimers).
   * Two-column About College preview, mission, vision, and core values.
   * 4 academic program cards (D.Pharm, B.Pharm, M.Pharm, Pharm.D).
   * 8 pharmaceutical departments preview grid.
   * "Why Choose Our College" 6-card feature grid.
   * 6 pharmaceutical laboratories showcase.
   * Practical training & clinical pharmacy education.
   * Scientific research & innovation overview.
   * 5-step admission process timeline.
   * Sample faculty profile cards (4 fictional demonstrators).
   * Career pathways & placement snapshot (with 6 industry sectors).
   * Campus facilities showcase.
   * Campus life gallery with full Lightbox modal preview.
   * Student testimonials & upcoming academic event cards.
   * Interactive 10-item FAQ accordion.
   * Client-side validated Admission Enquiry Form.
   * Contact details and CSS-based location card.
   * Multi-column footer with copyright 2026 and disclaimer notice.

2. **`about.html` (About Our College):**
   * Comprehensive institutional overview, academic mission, vision, and 6 core pillars.
   * Educational philosophy and laboratory teaching methodology.
   * Regulatory disclaimers.

3. **`programs.html` (Academic Programs):**
   * Detailed program profiles for D.Pharm (2 yrs), B.Pharm (4 yrs), M.Pharm (2 yrs, 6 specializations), and Pharm.D (6 yrs).
   * Full subject listings, duration parameters, and qualification prerequisites.

4. **`departments.html` (Pharmacy Departments):**
   * Dedicated sections for all 8 departments: Pharmaceutics, Pharmaceutical Chemistry, Pharmacology, Pharmacognosy, Pharmaceutical Analysis, Pharmacy Practice, Biotechnology, Quality Assurance.
   * Associated laboratory linkages, key subject domains, and equipment overviews.

5. **`laboratories.html` (Pharmaceutical Laboratories):**
   * In-depth profiles for 6 laboratories.
   * Detailed instrumentation listings (USP dissolution units, rotary tablet presses, HPLC, UV-Vis spectrophotometers, organ baths, fume hoods).
   * Laboratory safety standards and waste management protocols.

6. **`admissions.html` (Admissions & Eligibility):**
   * 5-Step timeline (Explore, Review Eligibility, Submit, Document Verification, Confirmation).
   * Science stream qualification matrix (10+2 PCM/PCB, B.Pharm criteria).
   * Standard document verification checklist.
   * Complete interactive admission enquiry form with client-side regex validation.

7. **`placements.html` (Placements & Careers):**
   * Placement cell ecosystem, interview preparation workshops, and career mentoring.
   * 4 sample metrics with explicit demonstration disclaimers.
   * 6 industry employment sectors and 12 career pathways (community pharmacy to pharmacovigilance and QA).

8. **`research.html` (Research & Innovation):**
   * Focus areas: drug formulation, novel delivery systems, analytical validation, and biotechnology.
   * Ethical research practices, CPCSEA compliance standards, and thesis methodologies.

9. **`campus-life.html` (Campus Life & Facilities):**
   * 8 campus infrastructure profiles (smart classrooms, central library, auditorium, bioinformatics lab, recreation).
   * Interactive 8-image campus gallery with full keyboard-navigable Lightbox modal.
   * Sample student testimonials and academic calendar events.

10. **`contact.html` (Contact Us):**
    * Standard dummy contact details (Phone: `0000000000`, Email: `demo@example.com`, Address: `Plot No. 000, Demo Road, Sample Area, Hyderabad, Telangana – 000000`).
    * Working hours: Monday – Saturday, 9:00 AM – 5:00 PM.
    * CSS-illustrated map marker card.
    * Client-side validated contact inquiry form.

---

## 5. File & Folder Structure
```text
pharmacy-college-website/
├── index.html
├── about.html
├── programs.html
├── departments.html
├── laboratories.html
├── admissions.html
├── placements.html
├── research.html
├── campus-life.html
├── contact.html
│
├── assets/
│   ├── css/
│   │   ├── style.css
│   │   └── responsive.css
│   │
│   ├── js/
│   │   └── script.js
│   │
│   └── images/
│       └── (Generated AI images stored here)
│
├── IMAGE-GENERATION-GUIDE.md
├── robots.txt
├── sitemap.xml
└── README.md
```

---

## 6. Image Architecture & Real AI Visuals Integration (100% Complete)
* All 47 images generated with **Google Flow** have been reviewed, normalized, and deployed across both `images/` and `assets/images/`.
* Double-extension files were cleaned up (e.g. `dept-analysis.webp.jpg` -> `dept-analysis.jpeg`), and cross-format compatibility (`.jpeg` and `.webp`) is fully established.
* Every image container strictly preserves its intended responsive aspect ratio (`16:9`, `4:3`, `3:4`), preventing layout shifts (`CLS = 0`).
* The JavaScript image-load observer automatically detects loaded images and smoothly hides fallback placeholder backgrounds, delivering a seamless production visual experience.
* The interactive campus gallery Lightbox directly loads and displays high-resolution photographs with smooth keyboard and mouse navigation.

---

## 7. Interactive JavaScript Features
1. **Sticky Header:** Automatically applies blurred backdrop and shadow upon scrolling.
2. **Mobile Hamburger Drawer:** Smooth sliding overlay with outside-click and link-click auto-close.
3. **Active Link Highlighting:** Automatically detects current URL path and highlights the active navbar item.
4. **Animated Number Counters:** Uses `IntersectionObserver` to count up statistics when scrolled into view.
5. **Scroll Reveal Animations:** Elegant fade-in and upward slide for cards and containers.
6. **Accessible FAQ Accordion:** Smooth height animations, chevron rotation, and automatic collapse of sibling items.
7. **Form Validation Engine:** Real-time checking of required fields, 10-digit Indian phone numbers (`/^[6-9]\d{9}$/`), and email formatting. Includes demo submission banner and form reset.
8. **Campus Gallery Lightbox:** Fullscreen image modal supporting Next, Previous, Close buttons, outside-click closing, and keyboard navigation (`Esc`, `ArrowLeft`, `ArrowRight`).
9. **Back to Top:** Smooth floating button appearing after 350px of vertical scroll.

---

## 8. Hostinger Static Deployment Instructions
1. Log in to your **Hostinger hPanel**.
2. Navigate to **File Manager** (or connect via FTP / SFTP).
3. Open the `public_html` directory of your domain.
4. Upload all files and the `assets/` directory maintaining the directory structure.
5. Verify that `index.html` resides directly in `public_html`.
6. Ensure file permissions are set to `644` for files and `755` for directories.
7. The website will immediately be live with zero server-side setup or database configuration needed.

---
*© 2026 Pharmacy College Website. Demonstration Website – All Rights Reserved.*
