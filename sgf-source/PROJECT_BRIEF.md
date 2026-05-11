# SGF Sourcing — Fresh Coconut Landing Page

**Project brief & single source of truth**
Last updated: 2026-04-26

---

## 1. Project snapshot

| Item | Value |
|---|---|
| **Site purpose** | Static, single-product B2B landing page for *Fresh Young Coconut* |
| **Client** | SGF Sourcing (Vietnam agricultural exporter) |
| **Primary CTA** | Request a quote (email → `cris@sgfsourcing.com`) |
| **Deadline** | **Monday, 27 April 2026** |
| **Languages** | English (primary) + Vietnamese (toggle) |
| **Hosting** | Existing cPanel / Azdigi hosting on `sgfsourcing.com` |
| **Future phase (Option B)** | Full HubSpot CMS platform with CRM, Alibaba/Amazon integration, AI chatbot — separate project, agency-led |

### Staging strategy
Launch this static landing page now. When the full HubSpot B2B platform is built later, it will absorb this page. To make that migration painless we will:
- Use portable, clean HTML/CSS/JS (no framework lock-in)
- Structure form fields to match HubSpot standard contact properties (firstname, lastname, company, country, email, phone, product interest, volume, message)
- Install Google Analytics 4 from day one so traffic data is already accumulating when HubSpot launches
- Use proper SEO meta tags + structured data (Product, Organization schema) so ranking transfers
- Keep URLs simple and semantic so 301 redirects are trivial later

### Domain decision (pending)
Two options — confirm before launch:
- **(A)** Put landing page on root `sgfsourcing.com` — maximum SEO benefit now, migrate to subpage when HubSpot launches
- **(B)** Put landing page on subdomain like `coconut.sgfsourcing.com` — root stays free for HubSpot platform
- **Recommended: Option A.** SEO compounds over time; don't waste months of indexing.

---

## 2. Brand & visual direction

### Logo
- Final wordmark: **SGFSOURCING** with globe + dual-arrow ring mark, agricultural rows under the equator, and tagline *"VIETNAM AGRI · CONNECTING MARKETS"*
- Logo palette: warm browns gradient (Domino → Judge Gray → Graphite) on white — same six-colour family as the site
- File: `assets/img/sgf-logo.png` (1.5 MB, ~1024×1024) — referenced by every page nav and footer

### Palette — Variant C: Editorial Heritage (7 tones, magazine-style)
**Brown family, treated like a magazine spread.** Reads NYT food-section rather than B2B catalogue. The earlier monochromatic Silk-on-Silk experiment compressed the brand into a single tonal field; this variant lifts the page surface to a softer Linen with Porcelain alternating sections, drops card containers entirely (content blocks separate via 1px Silk dividers, not bordered boxes), uses italic Roman-numeral markers on grids (`i.` `ii.` `iii.`), and reserves Graphite for the strongest interventions — body text, primary buttons, dark anchor bands.

#### The seven tones
| Token | Hex | Name | Usage |
|---|---|---|---|
| `--color-graphite` | `#2D1E17` | Graphite | Body text, **primary CTA fill**, dark anchor bands (stats / process / footer / CTA strip) |
| `--color-judge` | `#523F31` | Judge Gray | Hero italic emphasis ("of the"), CTA hover, secondary text |
| `--color-coffee` | `#796254` | Roman Coffee | Italic numeral markers (i. ii. iii.), eyebrow labels on light surfaces |
| `--color-squirrel` | `#9D8A7C` | Squirrel | Tertiary text, disabled nav state (Tracking placeholder) |
| `--color-silk` | `#C4B6AB` | Silk | **Divider rules and borders only** — never a surface. The 1px line between content cells. |
| `--color-porcelain` | `#FAF7F2` | Porcelain | **Primary section surface** (`.specs`, `.featured`, `.difference`, `.packing`, `.about`, `.contact`) |
| `--color-linen` | `#F5F1E8` | Linen | **Page background** (`<body>`) + alt-section bands. Slightly darker than Porcelain; the eye reads it as a base layer with Porcelain "inset" sections sitting on top. |

#### Semantic surfaces
| Token | Resolves to | Where |
|---|---|---|
| `--surface-page` | `--color-linen` | `<body>` background |
| `--surface-section` | `--color-porcelain` | `.specs`, `.difference`, `.packing`, `.featured`, `.about`, `.contact`, `.page-hero` |
| `--surface-alt` | `--color-linen` | reserved for alt bands if needed |
| `--surface-dark` | `--color-graphite` | `.stats`, `.process`, `.cta-strip`, `.footer`, hero vignette |

#### What changed from the previous (5-tone) variant
- **Reintroduced Porcelain + Linen** as soft off-white surfaces. The "Silk-only" experiment made every section the same flat tan — Variant C restores the layered editorial feel.
- **Cards stripped of backgrounds.** `.pillar`, `.packing-card`, `.why-card`, `.feature-card` no longer have filled containers or coloured borders. Items in a grid sit directly on the section surface and are separated by 1px Silk vertical dividers (and horizontal dividers on the grid edges).
- **Grids enforce 3-up rhythm.** `.packing-grid` and `.why-grid` now lock to `repeat(3, 1fr)` (was auto-fit) so the divider rules align cleanly into a magazine grid.
- **Buttons get the editorial treatment.** Square corners (`border-radius: 0`), uppercase 12px / `letter-spacing: 0.14em`, Graphite fill on Linen text. Secondary buttons collapse to a tracked underline rather than an outlined box — the "view specifications →" treatment.
- **Italic numeral markers.** `.packing-num` (`i.`, `ii.`, …) now reads as Fraunces italic in Roman Coffee, matching the editorial book convention.
- **Highlighted spec rows** swap from the soft tinted card look to a typeset block: Linen tint with 1px Graphite top + bottom rules — feels like a pull-quote in a feature article.

#### Legacy aliases
The pre-Variant-C green/silk tokens (`--green-leaf`, `--green-forest`, `--accent-gold`, `--brown-silk` etc.) are kept in `style.css` as `var()` aliases that now resolve to the Variant C tokens — `--green-leaf` and `--green-forest` both → Graphite, `--accent-gold` → Porcelain (light tone for dark anchor sections), `--neutral-porcelain` → Porcelain, `--neutral-linen` → Linen, `--brown-silk` → Silk. Existing CSS continues to work without a site-wide find-and-replace.

**Contrast check (key combos):**
- `Graphite #2D1E17` on `Linen #F5F1E8` → ~13.3:1 ✓ (WCAG AAA) *— body text, primary CTA fill*
- `Graphite` on `Porcelain #FAF7F2` → ~13.5:1 ✓ (WCAG AAA) *— headlines, CTA on light section*
- `Linen` on `Graphite` → ~13.3:1 ✓ (WCAG AAA) *— hero text, footer, CTA text*
- `Judge Gray #523F31` on `Linen` → ~8.0:1 ✓ (WCAG AAA) *— secondary text, hero italic*
- `Roman Coffee #796254` on `Linen` → ~4.6:1 ✓ (WCAG AA) *— italic numerals, eyebrows*
- `Squirrel #9D8A7C` on `Linen` → ~3.0:1 ✓ (WCAG AA Large) *— disabled Tracking nav item*

### Typography — Fraunces + Inter (client-chosen)
- **Headlines:** `Fraunces` (Google Fonts, variable). Modern editorial serif with warm soft curves and a beautiful italic. Variable-axis support means we can use one font with multiple personalities — softer optical sizes for the hero headline, crisper settings for section titles, italic for the Vietnamese subhead *Pha Lê Của Vùng Đất Phù Sa*.
- **Body:** `Inter` (Google Fonts). The cleanest, most legible humanist sans available — purpose-built for screens and dense data, which makes it ideal for B2B spec tables (Brix, MOQ, packaging counts, etc.).
- **Vietnamese diacritics:** Both fonts ship with full Vietnamese character coverage, properly designed (not bolted on). Verified.
- **Type scale:**
  - Hero H1: Fraunces 64px / line-height 1.0 / weight 400
  - Section H2: Fraunces 36–40px / line-height 1.1 / weight 400
  - Subsection H3: Fraunces 22–24px / weight 400
  - Eyebrow labels: Inter 11px / letter-spacing 2px / uppercase / Roman Coffee or Domino
  - Body: Inter 15px / line-height 1.7 / weight 400
  - Small/captions: Inter 12–13px / line-height 1.6
- **Loading:** `<link rel="preconnect">` to `fonts.gstatic.com`; load only the weights actually used (Fraunces 400 + 400 italic; Inter 400 + 500); `font-display: swap`.
- **Fallback stack:** `'Fraunces', 'Cormorant Garamond', Georgia, serif` / `'Inter', -apple-system, 'Segoe UI', sans-serif`

### Mood & motion
- **Modern editorial heritage** — fresh and alive, but composed and trustworthy
- Generous whitespace — let the content breathe
- Subtle scroll-triggered fade-ins (not parallax circus acts)
- Hero is full-bleed flycam footage (Pexels coconut plantation drone clip in v1, Ben Tre footage swap-in after 4/28) sitting under a Graphite vignette so headlines stay readable
- Real photography color-grading: warm mid-tones, golden hour, soft shadow — leans further into the all-brown palette; cool tones and saturated greens are explicitly out
- No stock-photo clichés, no aggressive B2B corporate vibes

---

## 3. Company facts (verified from client docs)

| Field | Value |
|---|---|
| Legal name | SGF Sourcing |
| Industry | Sourcing, Import & Export |
| Company size | 10–20 staff |
| HQ address | Block 8, 28 Mai Chi Tho Street, Binh Trung Ward, Ho Chi Minh City, Vietnam |
| Years of experience | 10+ |
| LinkedIn | https://www.linkedin.com/company/sgf-sourcing/ |
| Current website | https://sgfsourcing.com/ |
| Hosting provider | Azdigi (Azdigi AZ PRO 3 plan, renewed through 12/08/2027) |
| Domain renewal | 12/08/2026 |

### Team contacts (for contact section & namecards)
| Name | Role | Email |
|---|---|---|
| Cris Do | Sale Division Manager | `cris@sgfsourcing.com` |
| Phoebe Nguyen | Sale Manager | TBD (likely `phoebe@sgfsourcing.com`) |
| Roger Tran | Sale Manager | TBD (likely `roger@sgfsourcing.com`) |
| *(general)* | Coconut inquiries | `coconutinfo@sgfsourcing.com` |
| *(general)* | Coconut sales | `coconutsale@sgfsourcing.com` |

**Phone / WhatsApp:** `+84 917 329 878` (Cris)

### Export markets
Europe, North America, Middle East, Asia, Korea, Japan, Taiwan.

### Mission
> "To maximize value for our global clients through quality control, agile logistics solutions, and a profound understanding of stringent international market standards."

### Vision
> "To become the premier strategic trade gateway, positioning Vietnamese Limes and Coconuts as the preferred choice in the global agricultural landscape."

### Core values
- **Client Commitment** — Doing right by you, right time and right place
- **Valued Partnerships** — Respect and mutual success
- **Unwavering Quality** — What we promise is what we deliver
- **Satisfaction Driven** — Continuous improvement

---

## 4. Product: Fresh Young Coconut (Siamese / Xiêm)

### Story hook
**"The Crystal of the Mekong Delta"** — *Pha Lê Của Vùng Đất Phù Sa*
Four chapters structuring the narrative:

1. **The Origin** — Ben Tre & Long An, the "Capital of Coconuts." Alluvial soil of the Tien River + brackish water = naturally sweet (Brix 7–9°). Not grown on chemical fertilizer but on the essence of silt.
2. **The Human Touch** — Veteran farmers hand-harvesting to avoid bruising. SGF trains them to GlobalGAP standards. *"We don't just export coconuts — we export the pride of Vietnamese farmers to the world."*
3. **Diamond Cut Technology** — Each nut carved like a diamond, shrink-wrapped and labeled to HACCP standards. *"SGF Sourcing — international standards in every cut."*
4. **Farm to Global** — Containers leaving Cat Lai port, arriving anywhere in 30–45 days with taste intact.

### Technical specifications (for product table)

| Attribute | Specification |
|---|---|
| Variety | Siamese Coconut / Young Green Coconut (Xiêm) |
| Maturity | 9–10 months |
| Cultivation | Conventional |
| Husk type | Semi-husked |
| Part | Whole (with shell) |
| Category | Tropical & Subtropical Fruit |
| Grade | Top Quality / Premium Grade |
| Storage | Cool and dry place (reefer storage) |
| Shelf life | 60 days under optimal cold-chain conditions |
| Color | Natural white (peeled) |
| Size | 12–15 cm (4.72–5.91 in) |
| Weight | 0.5–0.8 kg per nut |
| Brix (sweetness) | 7°–9° |
| Origin | Ben Tre, Vietnam |
| Features | Sweet water, no cracking, thick meat |
| Model number | VIA000001 |
| Certifications | GlobalGAP, HACCP; treated with food-grade anti-mold; non-GMO |

### Packaging & logistics

| Attribute | Spec |
|---|---|
| Standard pack A | 9 pcs / carton (~8–9 kg net) |
| Standard pack B | 12 pcs / carton (~11–12 kg net) |
| Finish | PE heat-shrink film with brand label; optional eco-friendly straw |
| MOQ | 24 tons |
| Lead time | 15–30 days |
| Incoterms | FOB, CFR, CIF |
| Shipping port | Cat Lai (HCMC), Hai Phong |
| Transit time | 30–45 days to major markets |

### Seven packing specifications (product variants to show as a grid)

1. **Diamond Cut** — National-standard export form. Green husk fully removed, diamond-shaped carve, PE shrink-film, branded label. 9 or 12 pcs/carton.
2. **Polished / Bald** — Deeper peel than Diamond Cut, compact, max container efficiency. Shrink film or vacuum-sealed.
3. **Easy-Open** — Diamond Cut or Polished with laser-engraved pull-ring (like a soda can). Includes straw + wooden spoon. 12 pcs/carton.
4. **Fresh Green** — Minimal processing. Surface cleaned, stem trimmed. Most natural flavor. PP mesh bags (10–12/bag) or loose in reefer.
5. **Semi-Husked** — Outer green skin removed, protective fiber retained. High impact resistance, no film needed. Mesh bags or ventilated cartons.
6. **Tray Pack** — Retail/supermarket. 1–2 peeled coconuts on tray, cling-wrapped. Protects diamond tips during handling.
7. **Bulk Industrial** — Raw-material processing. Pallet cages / wooden bins, no cartons.

### Why SGF (trust signals for a "Why Us" section)
- **Premium Quality Control** — Multi-stage inspection, hand-picked, sorted to buyer grade
- **Global Standards Compliance** — GlobalGAP orchards; MRL compliance for EU / USA / Japan
- **Strategic Sourcing** — Direct-from-farm, no intermediaries
- **Advanced Post-Harvest Tech** — Ozone washing, cold-chain, 8-week sea transit freshness
- **Professional Logistics** — COO, real-time tracking
- **Customer-Centric** — Flexible packaging (custom branding), adjustable MOQs
- **Inspection certificates** — SGS, Phytosanitary, Health, Fumigation

---

## 5. Page architecture

Single-page scroll, anchor nav. Sections in order:

| # | Section | Purpose | Key content |
|---|---|---|---|
| 1 | **Nav bar** | Sticky top nav with language toggle (EN / VI) and "Get a Quote" CTA button | Logo left; anchor links (Story / Product / Specs / Why Us / Contact); CTA right |
| 2 | **Hero** | First impression | Big headline *"Premium Vietnamese Fresh Coconut — From Our Farm to Your Port."* + subhead + primary CTA (Request Quote) + secondary CTA (Download Catalogue — placeholder link) + hero image/video placeholder |
| 3 | **The Crystal of the Mekong Delta** | Emotional brand story | 4-part narrative (Origin → Human Touch → Diamond Cut → Farm to Global). Image next to each section (placeholder). Scroll-triggered fade-ins. |
| 4 | **The Difference** | Why us vs. Thai/Philippine competitors | Three pillars: Brix 7–9° sweetness, GlobalGAP certification, Diamond Cut process. |
| 5 | **Product specifications** | B2B data — what buyers search for | Table of all technical specs. Brix badge prominent. |
| 6 | **Seven packing formats** | Show product range | 7-card grid, each with name / description / packaging / use-case |
| 7 | **Certifications & trust** | Social proof | HACCP, GlobalGAP, SGS logos (placeholder badges until real files provided). Mention: Phytosanitary, Health, Fumigation certificates. |
| 8 | **Farm-to-Port process** | Traceability | Visual timeline: Harvest → Wash/Ozone → Diamond Cut → HACCP Pack → Cat Lai → Your Port. |
| 9 | **Why partner with us** | Trust signals | 6-point grid: Quality Control / Compliance / Sourcing / Post-Harvest / Logistics / Customer-Centric |
| 10 | **About SGF Sourcing** | Company context | Brief company overview, mission, vision, markets served map/list. |
| 11 | **Request a Quote (contact form)** | Primary conversion | Formspree-backed form with B2B-relevant fields. See form spec below. |
| 12 | **Contact details** | Alternate paths | Email, phone/WhatsApp, address, LinkedIn, sales team names |
| 13 | **Footer** | Housekeeping | Copyright, quick links, socials, language toggle |

### Quote-request form fields
*(Field names chosen to map to HubSpot standard contact properties later)*

| Field | HubSpot equivalent | Required |
|---|---|---|
| First name | `firstname` | ✓ |
| Last name | `lastname` | ✓ |
| Company | `company` | ✓ |
| Work email | `email` | ✓ |
| Country | `country` | ✓ |
| Phone (with country code) | `phone` | ✗ |
| Product of interest | `product_interest` (custom) — default: "Fresh Young Coconut" | ✓ |
| Packing format | custom — dropdown of 7 packing types | ✗ |
| Target monthly volume (tons) | `monthly_volume_tons` (custom) | ✗ |
| Preferred Incoterm | custom dropdown FOB/CFR/CIF | ✗ |
| Destination port | custom | ✗ |
| Message | `message` | ✗ |

Form submits via Formspree endpoint (to be created by client — free tier OK for now). Success state shown inline; no redirect.

---

## 6. Content — ready-to-use copy (English)

### Hero
- **H1:** *The Crystal of the Mekong Delta*
- **Subhead:** *Premium Vietnamese Fresh Young Coconut — from Ben Tre's alluvial orchards to ports worldwide. GlobalGAP certified. HACCP packed. 60-day shelf life.*
- **Primary CTA:** Request a Quote
- **Secondary CTA:** View Specifications

### Story — four parts (poetic register)

**I. Where the river writes the soil**
*Before there is a coconut, there is the river.*
The Mekong carries silt from a thousand miles of mountain and jungle, laying it down on the low fields of Ben Tre and Long An year after patient year. The water turns brackish as it meets the sea. The soil turns rich beyond belief. No fertilizer has to teach these groves how to grow sweetness — the land does it for us, at Brix 7 to 9, in a register no other coconut-growing country can quite reach.

**II. The hands that know the tree**
*A coconut is not a product yet when it leaves the grove.*
Our farmers climb by hand, because a bruised nut is a broken promise. They have done this for thirty, forty years — long enough that they read each tree the way a conductor reads a score. SGF Sourcing works shoulder-to-shoulder with them, guiding the orchards to GlobalGAP standards without taking the soul out of the craft. We do not only export coconuts. We export the dignity of the Vietnamese farmer.

**III. Cut like a diamond**
*This is where the name comes from.*
At the packing house, each husk is carved away by hand — faceted into the clean pointed form the trade calls "Diamond Cut." Every nut is shrink-wrapped, labeled, and logged to HACCP standards. The speed matters: from tree to cold chain in hours, not days. The result is a coconut that arrives in your warehouse looking like it was cut this morning.

**IV. Farm to global**
*Thirty to forty-five days.*
That is how long it takes for an SGF container to leave Cat Lai port and arrive in Rotterdam, Los Angeles, Tokyo, or Dubai — with the water still sweet, the meat still tender, the brand of your choosing on every nut. We are not your supplier. We are your strategic partner in bringing the Mekong to your market.

### The Difference — 3 pillars
- **Brix 7–9°** — Higher natural sweetness than typical Thai or Philippine fresh coconut. No added sugar, no flavoring — the soil does the work.
- **GlobalGAP Certified** — Our farms are audited annually. MRL-compliant for EU, US, and Japanese markets.
- **Diamond Cut Standard** — Each nut individually finished, shrink-wrapped, and labeled. Retail-shelf ready on arrival.

### Farm-to-Port process captions
1. *Hand-harvest* — No mechanical bruising
2. *Ozone wash* — Chemical-free sanitation
3. *Diamond Cut* — Precision peel, by hand
4. *HACCP pack* — Shrink-film, label, carton
5. *Reefer load-out* — Temperature-controlled from the first hour
6. *Cat Lai → your port* — 30–45 days, door-to-door visibility

### Why Partner With Us (6 cards)
1. **Premium Quality Control** — Multi-stage inspection from orchard to carton. Every nut hand-sorted to your grade.
2. **Global Standards Compliance** — GlobalGAP sourcing; MRL-compliant for EU, USA, Japan.
3. **Direct-from-Farm Sourcing** — We work without middlemen. You pay for coconut, not for the chain.
4. **Advanced Post-Harvest Tech** — Ozone wash, cold-chain, up to 8 weeks sea-transit freshness.
5. **Professional Logistics** — Certificate of Origin, real-time shipment visibility, 24-hour quote turnaround.
6. **Custom Packaging & MOQ** — Private-label ready. Adjustable MOQ for growing and established buyers.

### About SGF Sourcing — short block
SGF Sourcing is a Vietnamese agricultural exporter with 10+ years of experience linking the Mekong Delta's finest harvests to importers worldwide. Headquartered in Ho Chi Minh City with direct access to Ben Tre and Long An — Vietnam's coconut heartland — we combine deep local sourcing expertise with international standards compliance. Our clients span Europe, North America, the Middle East, Japan, Korea, and Taiwan.

### Contact CTA copy
- **Headline:** Start Your Order
- **Sub:** 24-hour quote turnaround. No obligation. Speak directly to our sales team.

### Footer
*SGF Sourcing — Vietnam Agri · Connecting Markets*

---

## 7. Content — Vietnamese (TBD)

Vietnamese copy to be translated from the English above. Translation approach:
- Poetic sections (Story): Use Cris's original Vietnamese framing where we have it (Phần 1–4 in the brief), polish for flow
- Technical sections: Professional B2B register, not flowery
- All specs tables: Use Vietnamese labels but keep numbers/units universal

**Action item:** Draft Vietnamese translation in a follow-up pass. For the Monday launch, English can go live first with VI toggle showing a "Coming Soon" note, OR we draft both and launch together. Client to confirm.

---

## 8. Technical build

### Stack
- **HTML5 + CSS3 + vanilla JS** — no framework, no build step
- **Single HTML file** per language (`index.html` = English, `vi.html` = Vietnamese), OR one HTML file with JS-driven language toggle. **Decision: one file, JS toggle** — simpler, one URL to share, better SEO with `hreflang`.
- **Google Fonts** — `Fraunces` (headlines) + `Inter` (body)
- **No external JS frameworks.** Any interactivity is vanilla.
- **CSS custom properties** for the palette (see §2)

### Performance targets
- < 1 MB total page weight at launch (before real photography arrives)
- Lighthouse Performance ≥ 90 on mobile
- First Contentful Paint < 1.5s
- All images lazy-loaded, sized correctly, WebP where possible

### SEO
- `<title>`: *Fresh Coconut Supplier Vietnam — SGF Sourcing | GlobalGAP Certified*
- Meta description: *Premium Vietnamese fresh young coconut. GlobalGAP certified, HACCP packed, 60-day shelf life. MOQ 24 tons. FOB/CFR/CIF from Cat Lai. 24-hour quote.*
- Target keywords: `fresh coconut wholesale`, `Vietnam young green coconut`, `global coconut supplier`, `fresh coconut supplier Vietnam`, `GlobalGAP coconut`, `Ben Tre coconut exporter`
- Structured data: `Organization` schema + `Product` schema with offer / brand / origin
- `hreflang` tags for EN/VI
- Semantic HTML: one `<h1>`, logical heading hierarchy, `<article>` / `<section>` tags
- Alt text on every image (e.g., `fresh-coconut-sgf-sourcing-diamond-cut.jpg` — filename-as-SEO, per brief)
- XML sitemap + robots.txt

### Analytics
- Google Analytics 4 (GA4) — tag from day one
- Form submission event tracked
- Optional: Hotjar or Microsoft Clarity for heatmaps (free tier) — nice-to-have

### Form handling
- Formspree free tier — client creates account at formspree.io and provides endpoint URL
- Field names mapped to HubSpot properties (see §5) for clean migration later
- Client-side validation before submit
- Honeypot field for spam prevention
- Thank-you state shown inline (no page redirect)

### Hosting & deployment
- Deploy via FTP / cPanel File Manager on Azdigi
- File structure:
  ```
  public_html/
    index.html
    assets/
      css/style.css
      js/main.js
      img/ (placeholders, then real photos post-4/28)
      fonts/ (if self-hosting)
    favicon.ico
    robots.txt
    sitemap.xml
  ```
- HTTPS enforced (Azdigi should provide Let's Encrypt)

### Browser support
Modern evergreen (Chrome, Safari, Firefox, Edge latest 2 versions). IE11 explicitly not supported — not relevant for B2B international buyers in 2026.

### Accessibility
- WCAG 2.1 AA as a target
- Color contrast checked for all text/background combos
- Keyboard-navigable
- Proper ARIA labels on interactive elements
- Form has proper labels (not just placeholders)

---

## 9. Imagery plan

### Phase 1 — Launch (by Monday 27 April)
Real photography from the 22–28 April farm trip arrives after launch. For Monday, use **tasteful placeholder imagery**:
- High-quality free-stock coconut / Mekong imagery (Unsplash, Pexels — royalty-free, check license)
- OR illustration / CSS art for the hero if stock feels generic
- Clearly flag in HTML comments which images are placeholders with a `TODO: REPLACE` note

### Phase 2 — Post-shoot (after 28 April)
Real images from the trip will replace placeholders. Photography brief for the camera team on-site:
- Flycam / drone of the Tien River + coconut orchards
- Farmer interviews (2+ short clips, with English subtitles — for later video embed)
- Macro footage of Diamond Cut peeling
- Packaging line (HACCP-standard facility)
- Containers leaving Cat Lai port
- Social proof: photos of shipments bound for US / EU destinations

File naming convention (SEO-smart, per brief):
`fresh-coconut-sgf-sourcing-[context].jpg`
Example: `fresh-coconut-sgf-sourcing-diamond-cut.jpg`, `fresh-coconut-sgf-sourcing-ben-tre-orchard.jpg`

All photos get proper alt text at integration time.

---

## 10. Deliverables checklist

### By Monday 27 April (launch)
- [ ] `index.html` — full page, English + VI toggle
- [ ] `assets/css/style.css` — stylesheet with design tokens
- [ ] `assets/js/main.js` — language toggle, smooth scroll, form handler, scroll-fade animations
- [ ] `assets/img/` — placeholder hero image + section images
- [ ] `favicon.ico` — derived from logo
- [ ] `robots.txt` + `sitemap.xml`
- [ ] GA4 tracking tag (client provides Measurement ID)
- [ ] Formspree endpoint (client provides URL)
- [ ] README for client — how to edit text, swap images, update contact info

### Before launch — client actions needed
- [ ] Confirm domain strategy (root vs subdomain) — §1
- [ ] Confirm language approach (both live Monday, or EN-only first)
- [ ] Create Formspree account, provide endpoint URL
- [ ] Create GA4 property, provide Measurement ID
- [ ] Confirm phone numbers for Phoebe and Roger (currently only Cris's is confirmed)
- [ ] Confirm email addresses for Phoebe and Roger
- [ ] Review and approve English story copy in §6
- [ ] Provide Vietnamese copy OR approve our translation once drafted
- [ ] Confirm no trademark issues with "Vietnam Agriculture" brand name on specs (currently listed as `Model Number VIA000001`, `Brand Name Vietnam Agriculture` in the PDF — is this the client's own brand or a placeholder?)

### Post-launch (after 28 April)
- [ ] Replace placeholder imagery with real shoot photos
- [ ] Add testimonial section if client provides quotes from existing buyers
- [ ] Add 30–60s TVC video embed once edited
- [ ] Add downloadable PDF catalogue (linked from "Download Catalogue" secondary CTA)
- [ ] Add real certificate images (HACCP, GlobalGAP scans) to Certifications section
- [ ] Add client logos / "shipped to" markets section if available

### Future (Option B — agency-led HubSpot migration)
- [ ] Port content to HubSpot CMS Hub
- [ ] Migrate Formspree → HubSpot Forms (preserve field mapping from §5)
- [ ] Add: multilingual infrastructure (VI/EN/JP), currency switcher, AI chatbot, Alibaba/Amazon connectors, CRM integration, IP-based geo-routing, Japanese translation, SEO content expansion (GlobalGAP process deep-dive articles)
- [ ] Preserve URLs or set up 301 redirects to maintain SEO ranking
- [ ] Preserve GA4 measurement ID so traffic history is continuous

---

## 11. Open questions / risks

| # | Item | Status |
|---|---|---|
| 1 | Domain strategy (root vs subdomain) | Pending client confirmation |
| 2 | VI copy — translate ourselves, or client provides? | Pending |
| 3 | Phoebe & Roger contact details | Pending |
| 4 | "Vietnam Agriculture" brand name on spec sheet — is this SGF's private label or placeholder? | Pending |
| 5 | Formspree endpoint | Client action |
| 6 | GA4 Measurement ID | Client action |
| 7 | Real imagery arrival after 28/4 — version 2 deploy needed | Scheduled |
| 8 | Logo/mood color mismatch (brown logo vs. "fresh green" brief) | **Resolved 24/4:** Final palette is "Fresh Heritage" — balanced 40/60 fresh plant green + warm heritage brown, with gold accent (lifted from logo) bridging the two. Hero is green-dominant with full-bleed canopy banner; spec/content sections lean cream + brown for legibility. Fonts confirmed: Fraunces (headlines) + Inter (body). |
| 9 | FTP / cPanel credentials for Azdigi deploy | Needed before Monday |
| 10 | Current `sgfsourcing.com` content — replace entirely, or stage side-by-side first? | Pending |

---

## 12. Conventions for the build

- **Code comments:** every section of HTML gets a comment header — makes handoff to agency easier later
- **TODO markers:** anything client-dependent (phone numbers, Formspree URL, etc.) is marked `<!-- TODO: REPLACE -->`
- **Semantic class names:** BEM-ish (`.section__title`, `.card--featured`) — no utility-class soup
- **Progressive enhancement:** page must work with JS disabled (just lose the language toggle and scroll animations)
- **No console errors** in production build
- **Mobile-first CSS** — design for 375px width up
