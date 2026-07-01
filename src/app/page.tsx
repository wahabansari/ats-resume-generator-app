import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  FileText,
  Download,
  Sparkles,
  Eye,
  Moon,
  Zap,
  Shield,
  ArrowRight,
} from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      {/* ─── Header ─── */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md transition-colors duration-300">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <FileText className="h-3.5 w-3.5" />
            </div>
            <span className="text-[15px] font-semibold tracking-tight text-foreground">
              Resume<span className="text-primary">Craft</span>
            </span>
          </Link>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Link href="/builder">
              <button className="inline-flex h-9 items-center gap-2 rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground shadow-sm transition-all duration-200 hover:bg-primary/90 hover:shadow-md">
                Open Builder
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </Link>
          </div>
        </div>
      </header>

      {/* ─── Hero ─── */}
      <section className="relative overflow-hidden border-b border-border bg-grid-docker">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.03] to-transparent" />
        <div className="relative mx-auto max-w-6xl px-4 py-20 text-center sm:py-28 lg:py-36">
          <div className="mx-auto max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary transition-colors duration-200 hover:bg-primary/10">
              <Sparkles className="h-3.5 w-3.5" />
              AI-Powered Resume Tailoring
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Build a Resume That{" "}
              <span className="text-primary">Gets Interviews</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Create professional, ATS-optimized resumes in minutes. Tailor each
              one to specific job descriptions using AI — completely free, no
              sign-up required.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/builder">
                <button className="inline-flex h-12 items-center gap-2.5 rounded-xl bg-primary px-7 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-200 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5">
                  Start Building Your Resume
                  <ArrowRight className="h-4 w-4" />
                </button>
              </Link>
              <span className="text-sm text-muted-foreground">
                Free forever. No account needed.
              </span>
            </div>
          </div>

          {/* Preview mockup */}
          <div className="mx-auto mt-16 max-w-2xl lg:mt-20">
            <div className="relative rounded-xl border border-border bg-card p-1 shadow-2xl shadow-black/10 transition-colors duration-300 dark:shadow-black/40">
              <div className="rounded-lg border border-border/50 bg-background p-6 sm:p-8">
                <div className="space-y-3">
                  <div className="mx-auto h-5 w-40 rounded bg-foreground/10" />
                  <div className="mx-auto h-3 w-56 rounded bg-foreground/5" />
                  <div className="mx-auto h-2.5 w-48 rounded bg-foreground/5" />
                  <div className="my-4 h-px bg-border" />
                  <div className="h-3 w-24 rounded bg-primary/20" />
                  <div className="space-y-1.5">
                    <div className="h-2.5 w-full rounded bg-foreground/5" />
                    <div className="h-2.5 w-full rounded bg-foreground/5" />
                    <div className="h-2.5 w-3/4 rounded bg-foreground/5" />
                  </div>
                  <div className="h-3 mt-4 w-28 rounded bg-primary/20" />
                  <div className="space-y-1.5">
                    <div className="h-2.5 w-full rounded bg-foreground/5" />
                    <div className="h-2.5 w-5/6 rounded bg-foreground/5" />
                    <div className="h-2.5 w-full rounded bg-foreground/5" />
                    <div className="h-2.5 w-2/3 rounded bg-foreground/5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Features ─── */}
      <section className="border-b border-border bg-background py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Everything You Need
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Powerful features to create, tailor, and download professional
              resumes
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="group rounded-xl border border-border bg-card p-6 transition-all duration-200 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors duration-200 group-hover:bg-primary group-hover:text-primary-foreground">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-semibold text-foreground">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── How It Works ─── */}
      <section className="border-b border-border bg-secondary/30 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              How It Works
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Three simple steps to your next job
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-3">
            {steps.map((s, i) => (
              <div key={s.title} className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                  {i + 1}
                </div>
                <h3 className="text-base font-semibold text-foreground">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Social Proof ─── */}
      <section className="border-b border-border bg-background py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Why ResumeCraft?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Built for job seekers who want results, not subscriptions
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl font-bold text-primary">{s.value}</div>
                <div className="mt-1 text-sm text-muted-foreground">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="bg-grid-docker py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Ready to Land Your Dream Job?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Join thousands of job seekers who use ResumeCraft to build
            professional resumes that pass ATS screening.
          </p>
          <div className="mt-10">
            <Link href="/builder">
              <button className="inline-flex h-12 items-center gap-2.5 rounded-xl bg-primary px-7 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-200 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5">
                Build Your Resume Now
                <ArrowRight className="h-4 w-4" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="border-t border-border bg-background py-8">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <FileText className="h-3 w-3" />
            </div>
            <span className="text-sm font-medium text-foreground">
              Resume<span className="text-primary">Craft</span>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/wahabansari/ats-resume-generator-app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors duration-200 hover:text-foreground"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <span className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} ResumeCraft
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

const features = [
  {
    icon: Eye,
    title: "Live Preview",
    description:
      "See your resume update in real-time as you fill in each section. No guessing, no back-and-forth.",
  },
  {
    icon: Sparkles,
    title: "AI-Powered Tailoring",
    description:
      "Paste a job description and let AI rewrite your resume to match — boosting your chances of passing ATS.",
  },
  {
    icon: Zap,
    title: "Custom Instructions",
    description:
      "Guide the AI with specific prompts. Emphasize certain skills, adjust tone, or focus on particular experiences.",
  },
  {
    icon: Download,
    title: "Clean PDF Export",
    description:
      "Download a professional, ATS-friendly PDF with proper formatting, Roboto font, and single-page layout.",
  },
  {
    icon: Moon,
    title: "Dark & Light Mode",
    description:
      "Work in whatever theme suits you. Smooth transitions between light and dark modes.",
  },
  {
    icon: Shield,
    title: "100% Private",
    description:
      "No database, no sign-up, no tracking. All your data stays in your browser. Nothing leaves your device.",
  },
];

const steps = [
  {
    title: "Fill In Your Details",
    description:
      "Enter your personal info, experience, skills, education, and certifications in the interactive form.",
  },
  {
    title: "Tailor with AI",
    description:
      "Paste a job description and let the AI optimize each section to match the role you're applying for.",
  },
  {
    title: "Download & Apply",
    description:
      "Download your polished resume as a PDF and submit it with confidence. It's that simple.",
  },
];

const stats = [
  { value: "$0", label: "Completely Free" },
  { value: "0", label: "Sign-ups Required" },
  { value: "100%", label: "Client-Side Data" },
  { value: "< 5min", label: "Time to First Resume" },
];
