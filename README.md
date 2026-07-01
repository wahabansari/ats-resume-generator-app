<div align="center">

# ResumeCraft

### Free AI Resume Builder & Tailor | Live Preview | PDF Download | No Login Required

**Build a professional, ATS-friendly resume in minutes. Tailor it to any job description using AI. Download as PDF — completely free, no sign-up needed.**

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-06B6D4?logo=tailwindcss)](https://tailwindcss.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

</div>

---

## What is ResumeCraft?

ResumeCraft is a **free, open-source resume builder** that helps job seekers create professional, ATS-optimized resumes with real-time preview and AI-powered tailoring. Paste a job description, and the AI rewrites your resume to match — boosting your chances of passing applicant tracking systems.

**No database. No authentication. No cost.** All data stays in your browser.

### Target Audience

- **Job seekers** looking for a free, professional resume builder
- **Developers & tech professionals** applying to multiple roles
- **Career changers** who need to tailor resumes to different job descriptions
- **Students & fresh graduates** creating their first resume
- **Anyone** who wants an ATS-friendly resume without paying for premium tools

---

## Key Features

| Feature | Description |
|---------|-------------|
| **Live Preview** | See your resume update in real-time as you type |
| **AI Tailor** | Paste a job description and let AI rewrite your resume to match |
| **Custom Instructions** | Guide the AI with specific instructions (e.g., "emphasize React experience") |
| **Quick-Click Chips** | One-click prompts like "Add quantifiable metrics" or "Use stronger action verbs" |
| **PDF Download** | Server-side PDF generation with Roboto font and clean layout |
| **Dark/Light Mode** | Toggle between themes with smooth transitions |
| **Zero-Cost Hosting** | Deploy free on Vercel — no database, no auth, no backend costs |
| **Privacy-First** | All data stays client-side. Nothing is stored or tracked |
| **ATS-Friendly** | Clean, single-page PDF optimized for applicant tracking systems |
| **Responsive** | Works on desktop, tablet, and mobile |

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router) |
| UI | React 19, Tailwind CSS 4, shadcn/ui components |
| PDF Generation | Puppeteer + `@sparticuz/chromium` (Vercel) / local Chrome (dev) |
| AI / LLM | Groq SDK + Llama 3.3 70B Versatile |
| Theming | `next-themes` (light/dark mode) |
| Deployment | Vercel (zero-config) |
| Cost | $0 (free Groq API tier + free Vercel hobby plan) |

---

## Getting Started

### Prerequisites

- **Node.js 18+** (recommended: 20 LTS)
- **Groq API Key** — get one free at [console.groq.com](https://console.groq.com)

### 1. Clone & Install

```bash
git clone https://github.com/yourusername/resume-craft.git
cd resume-craft
npm install
```

### 2. Set Up Environment Variables

Create a `.env.local` file in the project root:

```env
GROQ_API_KEY=gsk_your_groq_api_key_here
```

> **Note:** The AI tailoring feature requires a Groq API key. Without it, you can still build and preview resumes — only the "Tailor with AI" feature will be unavailable.

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production

```bash
npm run build
npm run start
```

---

## Deploy to Vercel

### Option A: One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/resume-craft&env=GROQ_API_KEY)

### Option B: Manual Deploy

1. Push your code to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your GitHub repository
4. Add environment variable: `GROQ_API_KEY` = your Groq API key
5. Click **Deploy**

Vercel auto-detects Next.js and configures everything. No build settings needed.

---

## Project Structure

```
resume-craft/
├── src/
│   ├── app/
│   │   ├── page.tsx                 # Main workspace (form + preview)
│   │   ├── layout.tsx               # Root layout with ThemeProvider
│   │   ├── globals.css              # Theme variables, grid background, transitions
│   │   ├── actions/
│   │   │   └── tailor.ts           # Groq AI server action
│   │   └── api/
│   │       └── download/
│   │           └── route.tsx       # Server-side PDF generation
│   ├── components/
│   │   ├── resume-form.tsx          # Interactive form (all sections)
│   │   ├── resume-preview.tsx       # Live HTML preview
│   │   ├── resume-pdf.tsx           # @react-pdf/renderer PDF component
│   │   ├── tailor-modal.tsx         # AI tailoring modal with chips
│   │   ├── theme-provider.tsx       # next-themes provider
│   │   ├── theme-toggle.tsx         # Light/dark mode toggle
│   │   └── ui/                      # shadcn-style UI primitives
│   │       ├── button.tsx
│   │       ├── dialog.tsx
│   │       ├── input.tsx
│   │       ├── label.tsx
│   │       ├── separator.tsx
│   │       └── textarea.tsx
│   └── lib/
│       ├── types.ts                 # TypeScript interfaces
│       ├── default-resume.ts        # Sample resume data
│       └── utils.ts                 # cn() utility
├── .env.local                       # Environment variables (git-ignored)
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
```

---

## How It Works

### 1. Build Your Resume
Fill in the interactive form on the left — personal details, summary, experience, skills, projects, education, and certifications. The preview updates in real-time on the right.

### 2. Tailor with AI
Click **"Tailor with AI"** on any section. Paste a job description and optionally add custom instructions. The AI rewrites that section to align with the target role while preserving factual accuracy.

### 3. Download PDF
Click **"Download PDF"** in the header. The server generates a clean, ATS-friendly PDF with Roboto font, proper margins, and a single-page layout.

---

## SEO Keywords

> Free AI resume builder, resume builder online free, ATS resume builder, tailor resume to job description, AI resume writer, free resume maker, PDF resume generator, resume builder no login, job-specific resume, resume optimization tool, career tool, job application tool, resume template free, professional resume builder, Next.js resume app

---

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `GROQ_API_KEY` | Yes* | Groq API key for AI tailoring (free at [console.groq.com](https://console.groq.com)) |

> *Without `GROQ_API_KEY`, the app still works for building and previewing resumes. Only the AI tailoring feature is disabled.

---

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## License

MIT License — see [LICENSE](LICENSE) for details.

---

## Author

**Muhammad Wahab Ansari** — [GitHub](https://github.com/muhammadwahab) | [LinkedIn](https://linkedin.com/in/muhammadwahab)
