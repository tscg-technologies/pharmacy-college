# IMAGE GENERATION GUIDE – PHARMACY COLLEGE WEBSITE
## Complete Image Inventory and Google Flow Production Prompts

> **STATUS: ALL 47 IMAGES GENERATED & INTEGRATED SUCCESSFULLY (100% COMPLETE)**
> 
> All 47 images generated via Google Flow have been integrated into the website. The image files are deployed across both `images/` and `assets/images/` with standardized naming and `.jpeg` / `.webp` format compatibility. Fallback placeholders automatically step aside, and the live photographs render seamlessly across all pages and the full-screen interactive Lightbox.

---

### Art Direction & Visual Consistency Guidelines
All images must follow a uniform, premium photographic style:
* **Setting:** Contemporary Indian pharmacy educational institution, authentic pharmaceutical laboratories, academic lecture theatres, and campus grounds.
* **Atmosphere:** Rigorous, clean, scientific, modern, and inspiring.
* **Lighting:** Natural daylight combined with clean, diffused laboratory fluorescent or recessed LED lighting. No cinematic sci-fi neon colors.
* **Color Palette Alignment:** Deep navy tones, medical greens, teal accents, clean white lab coats, stainless steel laboratory counters, and amber laboratory glassware.
* **Camera Style:** Professional commercial photography shot on high-end 35mm / 50mm / 85mm prime lenses with f/2.8 to f/4.0 aperture for natural depth of field and soft background separation.
* **Strict Exclusions:** NO college names, NO fictional or real brand logos, NO watermarks, NO text overlays, NO identifiable celebrity or real public personalities, NO graphic surgical or medical trauma imagery.

---

## 1. IMAGE INVENTORY SUMMARY TABLE

| No. | Filename | Primary Page &amp; Section | Aspect Ratio | Resolution | Orientation |
|:---:|:---|:---|:---:|:---:|:---:|
| 01 | `hero-campus.webp` | `index.html` – Homepage Hero | 16:9 | 1920 × 1080 | Landscape |
| 02 | `about-college.webp` | `index.html` – About Summary | 16:9 | 1920 × 1080 | Landscape |
| 03 | `lab-pharmaceutics.webp` | `index.html` / `laboratories.html` – Pharmaceutics Lab | 4:3 | 800 × 600 | Landscape |
| 04 | `lab-chemistry.webp` | `index.html` / `laboratories.html` – Chemistry Lab | 4:3 | 800 × 600 | Landscape |
| 05 | `lab-pharmacology.webp` | `index.html` / `laboratories.html` – Pharmacology Lab | 4:3 | 800 × 600 | Landscape |
| 06 | `lab-pharmacognosy.webp` | `index.html` / `laboratories.html` – Pharmacognosy Lab | 4:3 | 800 × 600 | Landscape |
| 07 | `lab-analysis.webp` | `index.html` / `laboratories.html` – Analysis Lab | 4:3 | 800 × 600 | Landscape |
| 08 | `lab-research.webp` | `index.html` / `laboratories.html` – Research Lab | 4:3 | 800 × 600 | Landscape |
| 09 | `practical-training.webp` | `index.html` – Practical Training | 16:9 | 1920 × 1080 | Landscape |
| 10 | `research-innovation.webp` | `index.html` / `research.html` – Research Section | 16:9 | 1920 × 1080 | Landscape |
| 11 | `faculty-01.webp` | `index.html` – Faculty Member 01 | 3:4 | 600 × 800 | Portrait |
| 12 | `faculty-02.webp` | `index.html` – Faculty Member 02 | 3:4 | 600 × 800 | Portrait |
| 13 | `faculty-03.webp` | `index.html` – Faculty Member 03 | 3:4 | 600 × 800 | Portrait |
| 14 | `faculty-04.webp` | `index.html` – Faculty Member 04 | 3:4 | 600 × 800 | Portrait |
| 15 | `facility-classrooms.webp` | `index.html` / `campus-life.html` – Classrooms | 4:3 | 800 × 600 | Landscape |
| 16 | `facility-library.webp` | `index.html` / `campus-life.html` – Central Library | 4:3 | 800 × 600 | Landscape |
| 17 | `facility-seminar.webp` | `index.html` / `campus-life.html` – Seminar Hall | 4:3 | 800 × 600 | Landscape |
| 18 | `facility-computer.webp` | `index.html` / `campus-life.html` – Computer Lab | 4:3 | 800 × 600 | Landscape |
| 19 | `facility-sports.webp` | `index.html` / `campus-life.html` – Sports &amp; Recreation | 4:3 | 800 × 600 | Landscape |
| 20 | `gallery-activity-1.webp` | `index.html` / `campus-life.html` – Student Activities | 4:3 | 800 × 600 | Landscape |
| 21 | `gallery-workshop-2.webp` | `index.html` / `campus-life.html` – Scientific Workshop | 4:3 | 800 × 600 | Landscape |
| 22 | `gallery-seminar-3.webp` | `index.html` / `campus-life.html` – Seminars | 4:3 | 800 × 600 | Landscape |
| 23 | `gallery-research-4.webp` | `index.html` / `campus-life.html` – Research Demo | 4:3 | 800 × 600 | Landscape |
| 24 | `gallery-cultural-5.webp` | `index.html` / `campus-life.html` – Cultural Events | 4:3 | 800 × 600 | Landscape |
| 25 | `gallery-collab-6.webp` | `index.html` / `campus-life.html` – Collaboration | 4:3 | 800 × 600 | Landscape |
| 26 | `gallery-health-7.webp` | `index.html` / `campus-life.html` – Health Drive | 4:3 | 800 × 600 | Landscape |
| 27 | `gallery-campus-8.webp` | `index.html` / `campus-life.html` – Celebrations | 4:3 | 800 × 600 | Landscape |
| 28 | `event-workshop.webp` | `index.html` / `campus-life.html` – Workshop Event | 16:9 | 1280 × 720 | Landscape |
| 29 | `event-symposium.webp` | `index.html` / `campus-life.html` – Symposium Event | 16:9 | 1280 × 720 | Landscape |
| 30 | `event-seminar.webp` | `index.html` / `campus-life.html` – Seminar Event | 16:9 | 1280 × 720 | Landscape |
| 31 | `event-awareness.webp` | `index.html` / `campus-life.html` – Awareness Event | 16:9 | 1280 × 720 | Landscape |
| 32 | `about-campus-building.webp` | `about.html` – Campus Building &amp; Facade | 16:9 | 1920 × 1080 | Landscape |
| 33 | `program-dpharm.webp` | `programs.html` – D.Pharm Feature | 16:9 | 1280 × 720 | Landscape |
| 34 | `program-bpharm.webp` | `programs.html` – B.Pharm Feature | 16:9 | 1280 × 720 | Landscape |
| 35 | `program-mpharm.webp` | `programs.html` – M.Pharm Feature | 16:9 | 1280 × 720 | Landscape |
| 36 | `program-pharmd.webp` | `programs.html` – Pharm.D Feature | 16:9 | 1280 × 720 | Landscape |
| 37 | `dept-pharmaceutics.webp` | `departments.html` – Pharmaceutics Dept | 4:3 | 800 × 600 | Landscape |
| 38 | `dept-chem.webp` | `departments.html` – Chemistry Dept | 4:3 | 800 × 600 | Landscape |
| 39 | `dept-pharmacology.webp` | `departments.html` – Pharmacology Dept | 4:3 | 800 × 600 | Landscape |
| 40 | `dept-pharmacognosy.webp` | `departments.html` – Pharmacognosy Dept | 4:3 | 800 × 600 | Landscape |
| 41 | `dept-analysis.webp` | `departments.html` – Analysis Dept | 4:3 | 800 × 600 | Landscape |
| 42 | `dept-practice.webp` | `departments.html` – Pharmacy Practice Dept | 4:3 | 800 × 600 | Landscape |
| 43 | `dept-biotech.webp` | `departments.html` – Biotechnology Dept | 4:3 | 800 × 600 | Landscape |
| 44 | `dept-qa.webp` | `departments.html` – Quality Assurance Dept | 4:3 | 800 × 600 | Landscape |
| 45 | `admissions-counseling.webp` | `admissions.html` – Admissions Desk | 16:9 | 1920 × 1080 | Landscape |
| 46 | `placements-career.webp` | `placements.html` – Career Guidance | 16:9 | 1920 × 1080 | Landscape |
| 47 | `research-lab-tech.webp` | `research.html` – Advanced Tech Apparatus | 16:9 | 1920 × 1080 | Landscape |

---

## 2. DETAILED INDIVIDUAL GOOGLE FLOW PROMPTS

### Image 01: `hero-campus.webp`
* **Page:** `index.html` (Homepage Hero Section)
* **Container:** Hero visual container
* **Aspect Ratio:** 16:9 Landscape
* **Resolution:** 1920 × 1080 px
* **Subject:** Modern Indian pharmacy college laboratory environment with students actively conducting experiments.
* **Google Flow Prompt:**
```text
Professional academic photography of an Indian pharmacy college laboratory. Two undergraduate Indian pharmacy students (one male, one female, early 20s) wearing pristine white laboratory coats and protective safety glasses, working together at an immaculate granite workbench. The male student is carefully examining a graduated test tube containing a clear amber chemical solution, while the female student takes notes on a clipboard. Modern analytical instruments, rotary evaporators, burettes, and glass beakers softly blurred in the background. Bright diffused daylight streaming through large institutional windows, clean pharmaceutical aesthetics, deep navy and teal accents. Realistic photographic texture, 50mm lens, f/3.2, no brand names, no college logos, photorealistic 8k resolution.
```

---

### Image 02: `about-college.webp`
* **Page:** `index.html` (About Our College summary) & `about.html`
* **Container:** About section two-column left visual
* **Aspect Ratio:** 16:9 Landscape
* **Resolution:** 1920 × 1080 px
* **Subject:** Academic mentorship and practical pharmaceutical discussion.
* **Google Flow Prompt:**
```text
High-end documentary photography inside a bright, modern Indian educational institution. An experienced Indian pharmacy professor in professional formal attire wearing an unbuttoned white lab coat explaining molecular structures to a diverse group of three Indian pharmacy students. They are clustered around a bench in a pharmaceutical research lab with an open pharmacopoeia reference book and clean laboratory glassware. Soft morning sunlight, warm, inspiring educational ambiance. Crisp focus on the students' attentive expressions, gentle bokeh on the background reagent shelves. Commercial educational catalog style, 85mm lens, f/2.8, completely devoid of logos, text, or watermarks.
```

---

### Image 03: `lab-pharmaceutics.webp`
* **Page:** `index.html` & `laboratories.html` (Pharmaceutics Laboratory)
* **Container:** Lab card container
* **Aspect Ratio:** 4:3 Landscape
* **Resolution:** 800 × 600 px
* **Subject:** Pharmaceutics formulation lab with rotary tablet compression machine and dissolution apparatus.
* **Google Flow Prompt:**
```text
Clean commercial laboratory photography of a modern Indian college pharmaceutics laboratory. A stainless steel rotary tablet press machine in the foreground with polished metal surfaces, and a multi-vessel USP dissolution test apparatus in the middle ground with transparent glass vessels containing clear circulating liquid. Clean epoxy flooring, organized laboratory benches, spotless hygienic pharmaceutical manufacturing educational setup. Neutral daytime indoor lighting, professional architectural interior photography, 35mm lens, f/4, crisp details, no logos, no brand emblems.
```

---

### Image 04: `lab-chemistry.webp`
* **Page:** `index.html` & `laboratories.html` (Pharmaceutical Chemistry Laboratory)
* **Container:** Lab card container
* **Aspect Ratio:** 4:3 Landscape
* **Resolution:** 800 × 600 px
* **Subject:** Organic synthesis and medicinal chemistry apparatus in a college lab.
* **Google Flow Prompt:**
```text
Detailed close-up architectural photograph of a university pharmaceutical chemistry laboratory in India. Chemical fume hood in the background with amber glass reagent bottles neatly arranged on stainless steel shelves. In the foreground, a round-bottom reflux flask on a heating mantle with a glass Liebig condenser attached, clamped securely to a retort stand. Clear scientific glassware, reflections of diffused overhead LED panels, meticulous scientific cleanliness, clinical teal and white color grading, 50mm macro lens, f/3.5, hyper-realistic, zero branding.
```

---

### Image 05: `lab-pharmacology.webp`
* **Page:** `index.html` & `laboratories.html` (Pharmacology Laboratory)
* **Container:** Lab card container
* **Aspect Ratio:** 4:3 Landscape
* **Resolution:** 800 × 600 px
* **Subject:** Pharmacology simulation laboratory with student organ bath and digital monitors.
* **Google Flow Prompt:**
```text
Interior photograph of a pharmacology academic laboratory in a modern Indian college. Multiple student workstations equipped with transparent glass organ-bath bioassay assemblies, aerators, and desktop computer screens displaying physiological simulation curves. Polished bench tops, tidy wire routing, clean educational atmosphere honoring ethical simulation guidelines. Balanced natural light and fluorescent ceiling lighting, 35mm lens, f/4, professional institutional look, no text or identifiable brands.
```

---

### Image 06: `lab-pharmacognosy.webp`
* **Page:** `index.html` & `laboratories.html` (Pharmacognosy Laboratory)
* **Container:** Lab card container
* **Aspect Ratio:** 4:3 Landscape
* **Resolution:** 800 × 600 px
* **Subject:** Pharmacognosy lab with binocular microscopes and botanical medicinal plant specimens.
* **Google Flow Prompt:**
```text
Professional interior still life of a college pharmacognosy laboratory. High-grade binocular optical microscopes positioned along a wooden laboratory table. Beside a microscope rests a petri dish with dried medicinal herb leaves, a mortar and pestle made of white porcelain, and glass specimen jars with botanical extracts. Botanical illustration chart softly blurred in the background. Natural soft daylight from side windows, scientific discovery atmosphere, 50mm prime, f/2.8, crisp detail, no logos.
```

---

### Image 07: `lab-analysis.webp`
* **Page:** `index.html` & `laboratories.html` (Pharmaceutical Analysis Laboratory)
* **Container:** Lab card container
* **Aspect Ratio:** 4:3 Landscape
* **Resolution:** 800 × 600 px
* **Subject:** High-precision pharmaceutical analysis laboratory with UV-Vis spectrophotometers and digital analytical balances.
* **Google Flow Prompt:**
```text
Commercial scientific photograph of an advanced pharmaceutical analysis testing laboratory. A modern dual-beam UV-Visible spectrophotometer sits beside a glass-enclosed analytical balance on a vibration-free granite table. Quartz cuvettes in a holder and volumetric flasks with colored analytical reagents. Spotless laboratory environment, crisp modern lighting with gentle teal reflections on stainless steel surfaces, 45mm lens, f/3.5, photorealistic 8k, devoid of brands or watermarks.
```

---

### Image 08: `lab-research.webp`
* **Page:** `index.html`, `laboratories.html`, & `campus-life.html`
* **Container:** Lab card container & facility card
* **Aspect Ratio:** 4:3 Landscape
* **Resolution:** 800 × 600 px
* **Subject:** Advanced pharmaceutical postgraduate research laboratory.
* **Google Flow Prompt:**
```text
High-tech pharmaceutical postgraduate research laboratory in India. Sophisticated HPLC (High-Performance Liquid Chromatography) modular unit with autosampler and solvent reservoir bottles on top. Clean lines, sleek cabinetry, sterile white environment accented with deep navy paneling. Subtle warm accent lighting, depth of field highlighting the precision instrumentation. Architectural editorial style, 35mm lens, f/4.0, zero text, zero logos.
```

---

### Image 09: `practical-training.webp`
* **Page:** `index.html` (Practical Training Section)
* **Container:** Practical training two-column visual
* **Aspect Ratio:** 16:9 Landscape
* **Resolution:** 1920 × 1080 px
* **Subject:** Pharmacy students engaged in hands-on formulation compounding and quality testing.
* **Google Flow Prompt:**
```text
Documentary style photography of three Indian pharmacy students working cooperatively in a compounding and dispensing training lab. An Indian female student in a white coat is carefully measuring a pharmaceutical powder on a precision balance while two classmates observe attentively. Glass beakers, spatulas, and glass stirring rods neatly arranged. Bright ambient classroom lighting, encouraging academic atmosphere, sharp focal plane on the measuring task, 50mm lens, f/2.8, natural skin tones, no logos or branded packaging.
```

---

### Image 10: `research-innovation.webp`
* **Page:** `index.html` & `research.html` (Research and Innovation Section)
* **Container:** Research section showcase container
* **Aspect Ratio:** 16:9 Landscape
* **Resolution:** 1920 × 1080 px
* **Subject:** Pharmaceutical researcher examining drug delivery nanoparticle formulation under light.
* **Google Flow Prompt:**
```text
Cinematic scientific photograph of a focused Indian pharmaceutical research scholar wearing a sterile white lab coat, blue nitrile gloves, and protective eyewear. The researcher holds up a clear glass vial containing a pale luminescent nanoparticle drug delivery suspension, inspecting its colloidal clarity against clean daylight. High-end research laboratory background with sophisticated bio-reactors and glassware gently out of focus. Editorial scientific lighting, rich depth of field, 85mm lens, f/2.4, 8k quality, completely generic laboratory setting.
```

---

### Image 11: `faculty-01.webp`
* **Page:** `index.html` (Faculty Member 01 – Pharmaceutics)
* **Container:** Faculty card 01 portrait
* **Aspect Ratio:** 3:4 Portrait
* **Resolution:** 600 × 800 px
* **Subject:** Fictional demonstration faculty portrait: Indian male professor in pharmaceutics.
* **Google Flow Prompt:**
```text
Professional academic studio portrait of a distinguished Indian male professor, mid-40s, with a warm, confident, and scholarly expression. Wearing a well-pressed light blue formal shirt with a white academic lab coat over it and neat spectacles. Clean, softly blurred pharmaceutical library background with books and reference journals. Warm, flattering studio three-point lighting, genuine friendly smile, sharp focus on eyes, 85mm portrait lens, f/2.8, no name badges, no logos.
```

---

### Image 12: `faculty-02.webp`
* **Page:** `index.html` (Faculty Member 02 – Pharmacology)
* **Container:** Faculty card 02 portrait
* **Aspect Ratio:** 3:4 Portrait
* **Resolution:** 600 × 800 px
* **Subject:** Fictional demonstration faculty portrait: Indian female professor in pharmacology.
* **Google Flow Prompt:**
```text
Professional academic portrait of an accomplished Indian female professor, late 30s to early 40s. Wearing an elegant formal kurta with a crisp white laboratory coat. She has her arms gently folded in an approachable posture, smiling warmly at the camera. Softly blurred laboratory interior background with glassware and scientific apparatus. Balanced softbox portrait lighting, natural professional styling, 85mm portrait lens, f/2.8, high-resolution clarity, no logos or identity tags.
```

---

### Image 13: `faculty-03.webp`
* **Page:** `index.html` (Faculty Member 03 – Pharmaceutical Chemistry)
* **Container:** Faculty card 03 portrait
* **Aspect Ratio:** 3:4 Portrait
* **Resolution:** 600 × 800 px
* **Subject:** Fictional demonstration faculty portrait: Senior Indian male professor in pharmaceutical chemistry.
* **Google Flow Prompt:**
```text
Distinguished portrait of a senior Indian male pharmaceutical chemistry academic, early 50s, with silver-streaked hair, wearing a white laboratory coat over a formal collared shirt. Confident, wise, and encouraging demeanor. Defocused background of a chemistry department research room with glassware and whiteboards containing chemical structures. High-end editorial corporate photography, 85mm prime lens, f/2.5, clean color grading, no emblems or text.
```

---

### Image 14: `faculty-04.webp`
* **Page:** `index.html` (Faculty Member 04 – Pharmacy Practice)
* **Container:** Faculty card 04 portrait
* **Aspect Ratio:** 3:4 Portrait
* **Resolution:** 600 × 800 px
* **Subject:** Fictional demonstration faculty portrait: Indian female faculty member in pharmacy practice.
* **Google Flow Prompt:**
```text
Warm corporate academic portrait of a professional Indian female pharmacy practice mentor, mid-30s. Wearing a tailored formal blazer with a clean white doctor's coat, holding a leather-bound notebook. Friendly and articulate expression. Softly blurred academic conference room background. Natural directional window light combined with a subtle rim light, 85mm prime lens, f/2.8, authentic Indian educator aesthetics, zero branding.
```

---

### Image 15: `facility-classrooms.webp`
* **Page:** `index.html` & `campus-life.html` (Modern Classrooms)
* **Container:** Facility card container
* **Aspect Ratio:** 4:3 Landscape
* **Resolution:** 800 × 600 px
* **Subject:** Contemporary smart tiered pharmacy college lecture hall.
* **Google Flow Prompt:**
```text
Wide architectural interior photograph of a modern, empty college lecture hall in an Indian higher education institution. Tiered ergonomic wooden seating with blue upholstered accents, integrated charging ports on desks, and a wide interactive smart display whiteboard at the front podium. Polished tiled floor, acoustic wooden wall baffles, recessed warm LED ceiling lights. Symmetrical wide-angle composition, 24mm tilt-shift lens, f/5.6, architectural quality, no university crests or names.
```

---

### Image 16: `facility-library.webp`
* **Page:** `index.html` & `campus-life.html` (Central Library)
* **Container:** Facility card container
* **Aspect Ratio:** 4:3 Landscape
* **Resolution:** 800 × 600 px
* **Subject:** College central pharmacy library with study carrels and book stacks.
* **Google Flow Prompt:**
```text
Serene architectural photograph of a large pharmacy college library. High wooden bookshelves filled with hardcover medical reference books and international scientific periodicals. Long polished reading tables in the foreground equipped with desk lamps and ergonomic chairs. Two Indian students studying quietly in the distant background. Large floor-to-ceiling windows letting in soft natural light, peaceful scholarly mood, 35mm lens, f/4, clean lines, no logos.
```

---

### Image 17: `facility-seminar.webp`
* **Page:** `index.html` & `campus-life.html` (Seminar Hall)
* **Container:** Facility card container
* **Aspect Ratio:** 4:3 Landscape
* **Resolution:** 800 × 600 px
* **Subject:** Modern college seminar hall and presentation auditorium.
* **Google Flow Prompt:**
```text
Interior photograph of an elegant college auditorium and seminar hall. Rows of plush navy-blue cushioned seats facing a raised wooden presentation stage with a podium and presentation screen. Clean acoustic ceiling design with warm ambient spotlights. Pristine, modern institutional environment ready for a scientific symposium. 28mm wide lens, f/4.5, balanced shadows and highlights, architectural showcase quality.
```

---

### Image 18: `facility-computer.webp`
* **Page:** `index.html` & `campus-life.html` (Computer Learning Facilities)
* **Container:** Facility card container
* **Aspect Ratio:** 4:3 Landscape
* **Resolution:** 800 × 600 px
* **Subject:** Digital bioinformatics and computer learning laboratory.
* **Google Flow Prompt:**
```text
Modern digital workstation lab in an Indian educational institution. Symmetrical rows of sleek desktop monitors on modular desks with ergonomic black chairs. Screens displaying molecular docking 3D wireframe visuals. Clean cable management, soft blue and cool white ambient lighting, modern academic IT infrastructure. 24mm architectural lens, f/4, crisp clean aesthetic, zero branding.
```

---

### Image 19: `facility-sports.webp`
* **Page:** `index.html` & `campus-life.html` (Sports & Recreation)
* **Container:** Facility card container
* **Aspect Ratio:** 4:3 Landscape
* **Resolution:** 800 × 600 px
* **Subject:** Green outdoor campus sports area and student pavilion.
* **Google Flow Prompt:**
```text
Wide exterior photograph of a lush green college campus sports field and student activity area in India. Manicured grass lawn with a synthetic badminton and basketball court in the background. Modern academic campus buildings with glass and sandstone facades surrounded by tropical palm trees under a bright blue morning sky. Fresh, energetic campus atmosphere, 35mm lens, f/5.6, architectural landscape photography, no institution signage.
```

---

### Images 20 to 27: Campus Life Gallery Images (4:3 Landscape, 800 × 600 px)

#### Image 20: `gallery-activity-1.webp`
* **Subject:** Pharmacy Student Activities in Academic Campus
* **Prompt:**
```text
Candid documentary photography of a group of four Indian pharmacy students walking through a sunlit campus courtyard between college buildings, holding folders and notebooks, laughing and discussing coursework. Dressed in modest casual academic clothing with lab coats draped over their arms. Bright tropical foliage and contemporary campus architecture in the background. Natural joyful expressions, 50mm lens, f/2.8, no logos.
```

#### Image 21: `gallery-workshop-2.webp`
* **Subject:** Scientific Workshops on Pharmaceutical Sciences
* **Prompt:**
```text
Interactive workshop session inside a pharmacy college lab. An Indian faculty mentor demonstrates a tablet disintegration testing apparatus to a small group of engaged Indian students in white coats. Close-up over-the-shoulder composition, focused facial expressions, clean scientific environment, 50mm prime, f/2.5.
```

#### Image 22: `gallery-seminar-3.webp`
* **Subject:** Pharmaceutical Seminars and Guest Lectures
* **Prompt:**
```text
An academic seminar in progress inside a packed college hall. A guest speaker on the stage pointing to a slide displaying chemical formulation curves, with attentive Indian students taking notes in the foreground. Atmospheric ambient lighting, deep depth of field, 70mm lens, f/3.2.
```

#### Image 23: `gallery-research-4.webp`
* **Subject:** Research Demonstrations in Pharmaceutical Labs
* **Prompt:**
```text
Close-up laboratory action shot. Two pharmacy postgraduate students pipetting precise micro-liter volumes from an Eppendorf pipette into an analytical 96-well plate. Clean laminar flow bench environment, blue nitrile gloves, sterile precision, 85mm macro lens, f/3.5, crystal clear focus.
```

#### Image 24: `gallery-cultural-5.webp`
* **Subject:** Cultural Events and Campus Festivals
* **Prompt:**
```text
Vibrant Indian college cultural day festival. Indian college students in elegant traditional ethnic attire (kurtas and sarees) participating in a stage celebration with decorated floral backdrop and stage lighting. Joyful, festive, culturally respectful collegiate celebration, 50mm lens, f/2.8.
```

#### Image 25: `gallery-collab-6.webp`
* **Subject:** Student Group Collaboration in Library
* **Prompt:**
```text
Three Indian pharmacy students seated around a wooden library table collaborating on a pharmacology project. A laptop is open showing molecular structures alongside open textbooks and colored highlighters. Warm natural window light, focused teamwork atmosphere, 35mm lens, f/2.8.
```

#### Image 26: `gallery-health-7.webp`
* **Subject:** Healthcare Awareness Activities in Community
* **Prompt:**
```text
Pharmacy students in white coats organizing an educational public health awareness camp in an Indian community hall. A student is gently demonstrating proper inhaler technique or blood pressure measurement to an elderly citizen. Empathetic, community service spirit, 50mm lens, f/2.8, no patient records.
```

#### Image 27: `gallery-campus-8.webp`
* **Subject:** Campus Celebrations and Annual Day
* **Prompt:**
```text
College annual day celebrations. Happy Indian graduates and final-year students in graduation robes celebrating in front of the modern academic building facade, holding scrolls with congratulatory smiles. Golden hour afternoon sunlight, uplifting educational triumph, 50mm lens, f/2.8.
```

---

### Images 28 to 31: Academic Events Thumbnails (16:9 Landscape, 1280 × 720 px)

#### Image 28: `event-workshop.webp`
* **Subject:** Pharmacy Education Workshop
* **Prompt:**
```text
Educational workshop setting in a bright pharmacy college training room. Demonstration of dosage compounding equipment on a presentation desk with students gathered closely. Clear ambient light, professional educational capture, 35mm lens, f/3.5, 16:9 ratio.
```

#### Image 29: `event-symposium.webp`
* **Subject:** Pharmaceutical Science Symposium
* **Prompt:**
```text
Academic symposium banner backdrop with faculty and student participants engaged in a lively scientific question-and-answer session in a seminar auditorium. Professional academic gathering, warm lighting, 50mm lens, f/3.2, 16:9 ratio.
```

#### Image 30: `event-seminar.webp`
* **Subject:** Drug Discovery Seminar
* **Prompt:**
```text
A keynote presentation on computational drug design. Speaker presenting 3D molecular docking visuals on a large auditorium screen, with focused student audience silhouettes in the foreground. Cinematic educational lighting, 50mm lens, f/2.8.
```

#### Image 31: `event-awareness.webp`
* **Subject:** Healthcare Awareness Program
* **Prompt:**
```text
Student pharmacy society banner table with informational pamphlets on safe medicine usage, antimicrobial stewardship, and dosage adherence. Bright daytime outdoor pavilion setup, enthusiastic students, 35mm lens, f/4.
```

---

### Image 32: `about-campus-building.webp`
* **Page:** `about.html` (Main Campus Profile)
* **Container:** About page top landscape container
* **Aspect Ratio:** 16:9 Landscape
* **Resolution:** 1920 × 1080 px
* **Subject:** Modern Indian pharmacy college campus building exterior and medicinal herbal garden.
* **Google Flow Prompt:**
```text
Architectural exterior wide-angle photograph of a contemporary Indian educational institution campus. Four-story modern building with large glass curtain walls, clean white concrete, and brick accents. In the foreground, an impeccably landscaped medicinal botanical garden with labeled herbal plant beds, paved stone pathways, and tropical palm trees under a bright blue morning sky. Professional architectural photography, 24mm tilt-shift lens, f/8, crisp detail, welcoming institutional atmosphere, no institution names or crests.
```

---

### Images 33 to 36: Academic Program Detail Visuals (16:9 Landscape, 1280 × 720 px)

#### Image 33: `program-dpharm.webp`
* **Page:** `programs.html` (D.Pharm Program Detail)
* **Prompt:**
```text
Foundational pharmacy laboratory education. An Indian student learning manual compounding, mixing powders in a porcelain mortar with a pestle, with small dispensing glass bottles and balance nearby. Clean, instructional setting, warm natural lighting, 50mm lens, f/2.8.
```

#### Image 34: `program-bpharm.webp`
* **Page:** `programs.html` (B.Pharm Program Detail)
* **Prompt:**
```text
Undergraduate pharmaceutical science laboratory session. Two Indian students in lab coats and safety glasses evaluating tablet hardness and friability on automated testing equipment. Modern laboratory benches, vibrant scientific education, 50mm lens, f/3.2.
```

#### Image 35: `program-mpharm.webp`
* **Page:** `programs.html` (M.Pharm Program Detail)
* **Prompt:**
```text
Postgraduate research in progress. An M.Pharm student checking sample peaks on a computer monitor connected to a high-performance liquid chromatography (HPLC) system. Advanced scientific research ambiance, deep blue and cool white tones, 50mm lens, f/2.8.
```

#### Image 36: `program-pharmd.webp`
* **Page:** `programs.html` (Pharm.D Program Detail)
* **Prompt:**
```text
Pharm.D doctoral students in clinical hospital attire with white coats and stethoscopes reviewing patient medication therapy management charts around a clinical discussion table. Professional healthcare collaboration, clean hospital training room, 50mm lens, f/2.8, no real patient details.
```

---

### Images 37 to 44: Department Showcase Visuals (4:3 Landscape, 800 × 600 px)

#### Image 37: `dept-pharmaceutics.webp`
* **Subject:** Department of Pharmaceutics (Formulation Science)
* **Prompt:**
```text
Industrial pharmacy formulation section. Polished stainless steel multi-station tablet press and mechanical granulator in a pharmaceutical technology pilot plant. Clean room conditions, bright fluorescent lighting, 35mm lens, f/4.
```

#### Image 38: `dept-chem.webp`
* **Subject:** Department of Pharmaceutical Chemistry (Synthesis)
* **Prompt:**
```text
Medicinal chemistry organic synthesis setup. Magnetic stirrer hotplate with a beaker of illuminated chemical reaction solution, glass condensers, and molecular model kits on bench. 50mm lens, f/2.8.
```

#### Image 39: `dept-pharmacology.webp`
* **Subject:** Department of Pharmacology (Bioassays)
* **Prompt:**
```text
Pharmacology department simulation workstations. Multiple student computers showing virtual physiological organ bath experiments and dose-response curve plots. Clean educational lab, 35mm lens, f/4.
```

#### Image 40: `dept-pharmacognosy.webp`
* **Subject:** Department of Pharmacognosy (Natural Products)
* **Prompt:**
```text
Pharmacognosy natural products extraction setup. Soxhlet glass extractor operating on a heating mantle with clear amber solvent percolating through botanical raw materials. Natural herbal science theme, 50mm lens, f/2.8.
```

#### Image 41: `dept-analysis.webp`
* **Subject:** Department of Pharmaceutical Analysis (Quality Testing)
* **Prompt:**
```text
Modern analytical instrument room. Double-beam UV-Vis spectrophotometer with digital LCD readout, cuvettes, and standard calibrated solutions. Analytical chemistry precision, 45mm lens, f/3.5.
```

#### Image 42: `dept-practice.webp`
* **Subject:** Department of Pharmacy Practice (Patient Care)
* **Prompt:**
```text
Model clinical pharmacy practice room. Shelves with dummy medicine packaging, a counselling desk with a computer, and student role-playing patient drug consultation. Clinical dispensing education, 35mm lens, f/3.5.
```

#### Image 43: `dept-biotech.webp`
* **Subject:** Department of Pharmaceutical Biotechnology
* **Prompt:**
```text
Pharmaceutical biotechnology culture room. Glass fermenter bio-reactor with digital parameter controllers, magnetic stirring, and nutrient culture media. Sterile bioprocess science, 40mm lens, f/3.2.
```

#### Image 44: `dept-qa.webp`
* **Subject:** Department of Pharmaceutical Quality Assurance (QA/QC)
* **Prompt:**
```text
Pharmaceutical quality assurance documentation and testing center. Clean desk with stability test logs, analytical batch release records, and electronic validation calibration tools. Professional compliance atmosphere, 35mm lens, f/4.
```

---

### Image 45: `admissions-counseling.webp`
* **Page:** `admissions.html` (Admissions Guidance Desk)
* **Container:** Admissions section two-column visual
* **Aspect Ratio:** 16:9 Landscape
* **Resolution:** 1920 × 1080 px
* **Subject:** Admissions counseling session for pharmacy aspirants.
* **Google Flow Prompt:**
```text
Professional educational counseling photograph in an Indian institution. A warm, welcoming academic advisor in business formal attire sitting across a modern consultation desk from a prospective student and their parent, explaining the pharmacy course brochure and curriculum timeline. Clean, air-conditioned administrative office with college certificates and architectural glass partitions in the background. Natural morning lighting, reassuring and professional ambiance, 50mm prime, f/2.8, no brand logos.
```

---

### Image 46: `placements-career.webp`
* **Page:** `placements.html` (Placement & Career Cell)
* **Container:** Placement section visual container
* **Aspect Ratio:** 16:9 Landscape
* **Resolution:** 1920 × 1080 px
* **Subject:** Campus placement training and mock interview workshop.
* **Google Flow Prompt:**
```text
Corporate placement training session in an Indian college. An industry HR trainer in formal attire conducting an interactive mock interview with an Indian pharmacy graduate wearing a smart business suit. A whiteboard in the background lists technical interview preparation milestones. Well-lit modern corporate seminar room, encouraging professional development atmosphere, 50mm lens, f/3.2, high photographic quality, no logos.
```

---

### Image 47: `research-lab-tech.webp`
* **Page:** `research.html` (Advanced Technology Apparatus)
* **Container:** Research page technical apparatus visual
* **Aspect Ratio:** 16:9 Landscape
* **Resolution:** 1920 × 1080 px
* **Subject:** Advanced formulation equipment and nano-drug characterization instruments.
* **Google Flow Prompt:**
```text
High-end laboratory equipment still life inside a premier pharmaceutical research facility. A probe sonicator, high-speed refrigerated centrifuge, and digital particle size analyzer neatly arranged on clean vibration-damped benches. Subtle reflections of teal and navy LED lighting on polished metal surfaces. High-technology pharmaceutical innovation theme, 45mm lens, f/4, crisp depth of field, 8k resolution, completely generic instrumentation.
```

---

## 3. SUMMARY METRICS & GENERATION ORDER

### Total Image Requirements
* **Total Images Required:** **47**
* **Landscape Images (16:9 and 4:3):** **43**
* **Portrait Images (3:4):** **4** (`faculty-01.webp` through `faculty-04.webp`)
* **Square Images (1:1):** **0**

### Recommended Google Flow Generation Order
1. **Tier 1 (Core Homepage Assets):** `hero-campus.webp`, `about-college.webp`, `lab-pharmaceutics.webp` through `lab-research.webp`.
2. **Tier 2 (Faculty Portraits):** `faculty-01.webp` to `faculty-04.webp`.
3. **Tier 3 (Academic Programs & Campus Buildings):** `about-campus-building.webp`, `program-dpharm.webp`, `program-bpharm.webp`, `program-mpharm.webp`, `program-pharmd.webp`.
4. **Tier 4 (Department Showcases):** `dept-pharmaceutics.webp` to `dept-qa.webp`.
5. **Tier 5 (Admissions, Placements & Research Features):** `admissions-counseling.webp`, `placements-career.webp`, `practical-training.webp`, `research-innovation.webp`, `research-lab-tech.webp`.
6. **Tier 6 (Campus Facilities & Life Gallery):** `facility-classrooms.webp` to `facility-sports.webp`, `gallery-activity-1.webp` to `gallery-campus-8.webp`, and `event-workshop.webp` to `event-awareness.webp`.

---
*End of IMAGE-GENERATION-GUIDE.md*
