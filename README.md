# Sathvika Dasara — Personal Portfolio Website

> **Data Analytics | AI & Software Engineering | Research**  
> *"Turning complex data into intelligent solutions."*

A world-class, production-ready personal digital identity and portfolio engineered for **Sathvika Dasara** (Dasara Thanmai Sri Sathvika). Built with Next.js 16 (App Router), React 19, TypeScript (strict mode), Tailwind CSS v4, Framer Motion, and Lucide React.

---

## 🌟 Visual & Architectural Highlights

- **Aesthetic Direction:** Premium, futuristic, minimalist Silicon Valley standard (inspired by Linear, Vercel, Stripe, Raycast).
- **Glassmorphism Design System:** Layered surfaces, 12–24px backdrop blur, subtle inner highlights, ambient lighting (`#070B14`, `#101827`, `#172337`, `#38BDF8`, `#8B5CF6`, `#2DD4BF`).
- **Interactive Command Palette:** Accessible system-wide via `Ctrl+K` or `Cmd+K`.
- **Dynamic Project Case Studies:** Complete architectural breakdowns, ELT pipelines, challenges, and roadmaps for 9 projects under `/projects/[slug]`.
- **Research Impact Bento:** Interactive single-trigger animated counters showcasing resume-reported metrics (81,000+ publications, 10,000+ records, 60% manual effort reduction, SIH 2025 National Finalist).
- **GitHub Integration:** Dynamic fetching of public repositories with caching and graceful offline fallback.
- **Verification Integrity:** No fabricated statistics, testimonials, or claims; training vs. employment clearly distinguished; experimental projects and concept architectures transparently labeled.

---

## 🛠️ Technology Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router, Server & Client Components)
- **Library:** React 19
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS v4 with custom glassmorphism design tokens
- **Typography:**
  - *Space Grotesk* — Editorial headings
  - *Inter* — Body typography & UI elements
  - *JetBrains Mono* — Technical telemetry, code tags & statistics
- **Icons:** Lucide React
- **Themes:** `next-themes` (Dark mode default with high-contrast accessible Light mode)
- **Visualizations:** Recharts & Canvas particle node networks
- **Deployment:** Optimized for Vercel

---

## 📁 Repository Structure

```
├── app/
│   ├── api/
│   │   └── contact/route.ts      # Contact form API endpoint with server-side validation
│   ├── projects/
│   │   └── [slug]/page.tsx       # Dynamic project case study routes
│   ├── resume/
│   │   └── page.tsx              # Print-quality curriculum vitae view
│   ├── globals.css               # Design tokens, glassmorphism utilities & animations
│   ├── layout.tsx                # Root layout with fonts, JSON-LD, ThemeProvider & navbar
│   ├── page.tsx                  # Complete landing experience
│   ├── opengraph-image.tsx       # Dynamic edge OpenGraph social sharing preview
│   ├── robots.ts                 # Search engine crawling rules
│   └── sitemap.ts                # Dynamic XML sitemap generator
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx            # Floating glassmorphic navbar with active indicator
│   │   ├── Footer.tsx            # Minimalist brand footer with quick links
│   │   └── CommandPalette.tsx    # Ctrl+K / Cmd+K global spotlight search
│   ├── projects/
│   │   ├── ProjectsBento.tsx     # Filterable asymmetric bento grid
│   │   ├── ProjectArchitectureDiagram.tsx # Multi-stage pipeline visualization
│   │   ├── RetailPulsePreview.tsx# Flagship conceptual BI dashboard preview
│   │   └── EdnaBiodiversityPreview.tsx # eDNA taxonomic distribution chart
│   ├── sections/
│   │   ├── HeroSection.tsx       # Cinematic hero with dual CTAs & telemetry card
│   │   ├── HeroCanvas.tsx        # High-performance interactive particle node canvas
│   │   ├── StatsBento.tsx        # Animated impact counters
│   │   ├── AboutSection.tsx      # Editorial narrative & 4-pillar intersection
│   │   ├── EducationSection.tsx  # Dual degree academic timeline (NIT Dgp & IIT M)
│   │   ├── ExperienceSection.tsx # Interactive experience timeline (IITB, Infosys, BioTecNika)
│   │   ├── SkillsSection.tsx     # Prioritized skills matrix (Data & DB first)
│   │   ├── ResearchSection.tsx   # Dedicated Research & Scientific Computing
│   │   ├── AchievementsSection.tsx # Beyond the Code honors & leadership
│   │   ├── GitHubSection.tsx     # Verified public GitHub repositories
│   │   └── ContactSection.tsx    # Direct channels & contact form
│   ├── ui/
│   │   ├── Monogram.tsx          # SD brand monogram with gradient border
│   │   └── ThemeToggle.tsx       # Sun/Moon theme switcher
│   └── providers/
│       └── ThemeProvider.tsx     # Next-themes client provider wrapper
├── data/
│   ├── profile.ts                # Central configuration file for all personal metadata
│   ├── projects.ts               # Complete dataset for 9 featured projects
│   ├── experience.ts             # Work, research fellowships & training details
│   ├── education.ts              # Degree timelines, relevant areas & CGPA flags
│   ├── skills.ts                 # Prioritized skills categories & tooling
│   ├── stats.ts                  # Quantifiable impact metrics
│   ├── research.ts               # Computational biology & literature research
│   └── achievements.ts           # Hackathons, fellowships & leadership honors
├── lib/
│   ├── github.ts                 # GitHub API client with ISR caching & fallback
│   └── utils.ts                  # Tailwind class merge helper
└── public/
    ├── favicon.svg               # Custom SD SVG favicon
    └── resume/
        └── Sathvika_Dasara_Resume.pdf # Printable PDF stub
```

---

## 🔒 Verification & Authenticity Checklist

To maintain technical credibility and avoid misleading claims:

| Item | Status | Handling in Code |
| :--- | :---: | :--- |
| **Availability Status** | Configurable | `profileConfig.availability.enabled` set to `false` by default until explicitly authorized. |
| **CGPA Values** | Hidden | `isVerified: false` in `data/education.ts`; dynamically hidden from UI until confirmed. |
| **RetailPulse** | In Development | Distinctly marked as an **Upcoming Flagship Concept & Architecture**; previews explicitly labeled as conceptual. |
| **IIT Bombay Data Pipeline** | Protected | Internal proprietary source code & unpublished institutional datasets omitted; only computational methodology described. |
| **Alzheimer's Detection** | Experimental | Clearly designated as an exploratory computational research study and **not a clinically validated diagnostic tool**. |
| **BioTecNika Internship** | Academic Training | Explicitly labeled as **Training & Internship** to distinguish from commercial software employment. |
| **Contact Form** | Transparent | If `RESEND_API_KEY` is not present, the form transparently informs the user rather than faking success. |

---

## 🚀 Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/SathvikaDasara06/portfolio.git
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables (Optional):**
   Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```
   Add your Resend API key if you wish to receive form emails directly:
   ```env
   RESEND_API_KEY=re_your_api_key_here
   CONTACT_RECEIVER_EMAIL=sathvikadasara06@gmail.com
   ```

4. **Run the local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

5. **Run production build:**
   ```bash
   npm run build
   npm run start
   ```

---

## 🌐 Deployment to Vercel

1. Push your code to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "feat: world-class personal portfolio for Sathvika Dasara"
   git branch -M main
   git remote add origin https://github.com/SathvikaDasara06/portfolio.git
   git push -u origin main
   ```

2. Import the repository in [Vercel](https://vercel.com/new).
3. Framework preset: **Next.js**.
4. (Optional) Set Environment Variables:
   - `RESEND_API_KEY`
   - `CONTACT_RECEIVER_EMAIL`
   - `NEXT_PUBLIC_SITE_URL`
5. Click **Deploy**.

---

## 👤 Author & Contact

**Dasara Thanmai Sri Sathvika (Sathvika Dasara)**
- **GitHub:** [@SathvikaDasara06](https://github.com/SathvikaDasara06)
- **LinkedIn:** [linkedin.com/in/sathvika-dasara](https://www.linkedin.com/in/sathvika-dasara/)
- **Academic Institutions:** NIT Durgapur (B.Tech) & IIT Madras (BS)
