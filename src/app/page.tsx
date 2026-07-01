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
  PenTool,
  Layout,
  Check,
} from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      {/* ─── Header ─── */}
      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/60 backdrop-blur-xl transition-colors duration-300">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-lg shadow-primary/25">
              <FileText className="h-4 w-4" />
            </div>
            <span className="text-lg font-bold tracking-tight text-foreground">
              Resume<span className="text-primary">Craft</span>
            </span>
          </Link>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Link href="/builder">
              <button className="inline-flex h-10 items-center gap-2 rounded-lg bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-300 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5">
                Start Building
                <ArrowRight className="h-4 w-4" />
              </button>
            </Link>
          </div>
        </div>
      </header>

      {/* ─── Hero ─── */}
      <section className="relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-grid-docker" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.02] via-transparent to-background" />
        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[800px] rounded-full bg-primary/[0.03] blur-[100px]" />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 py-24 sm:py-32 lg:py-40">
          <div className="mx-auto max-w-4xl text-center">
            {/* Badge */}
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary backdrop-blur-sm">
              <Sparkles className="h-4 w-4" />
              AI-Powered Resume Tailoring — Free Forever
            </div>

            {/* Headline */}
            <h1 className="text-5xl font-extrabold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              Build a Resume
              <br />
              <span className="bg-gradient-to-r from-primary via-blue-500 to-primary bg-clip-text text-transparent">
                That Gets Interviews
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-8 text-xl leading-relaxed text-muted-foreground sm:text-2xl max-w-2xl mx-auto">
              Create professional, ATS-optimized resumes in minutes. Tailor each
              one to specific job descriptions using AI — no sign-up required.
            </p>

            {/* CTA */}
            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/builder">
                <button className="group inline-flex h-14 items-center gap-3 rounded-2xl bg-primary px-8 text-lg font-bold text-primary-foreground shadow-2xl shadow-primary/30 transition-all duration-300 hover:bg-primary/90 hover:shadow-3xl hover:shadow-primary/40 hover:-translate-y-1">
                  Start Building Your Resume
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </Link>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              Free forever &bull; No account needed &bull; 100% private
            </p>
          </div>

          {/* Mockup */}
          <div className="mx-auto mt-20 max-w-4xl">
            <div className="relative rounded-2xl border border-border/50 bg-card/50 p-2 shadow-2xl shadow-black/10 backdrop-blur-sm transition-colors duration-300 dark:shadow-black/50 sm:p-3">
              <div className="rounded-xl border border-border/30 bg-background p-6 sm:p-10">
                {/* Mock header */}
                <div className="text-center mb-6">
                  <div className="mx-auto h-6 w-48 rounded-md bg-foreground/10" />
                  <div className="mx-auto mt-2 h-3.5 w-64 rounded bg-foreground/5" />
                  <div className="mx-auto mt-2 h-3 w-52 rounded bg-foreground/5" />
                </div>
                <div className="h-px bg-border mb-6" />
                {/* Mock sections */}
                <div className="space-y-5">
                  <div>
                    <div className="h-3.5 w-28 rounded bg-primary/20 mb-3" />
                    <div className="space-y-2">
                      <div className="h-2.5 w-full rounded bg-foreground/5" />
                      <div className="h-2.5 w-full rounded bg-foreground/5" />
                      <div className="h-2.5 w-4/5 rounded bg-foreground/5" />
                    </div>
                  </div>
                  <div>
                    <div className="h-3.5 w-24 rounded bg-primary/20 mb-3" />
                    <div className="space-y-2">
                      <div className="h-2.5 w-full rounded bg-foreground/5" />
                      <div className="h-2.5 w-5/6 rounded bg-foreground/5" />
                      <div className="h-2.5 w-full rounded bg-foreground/5" />
                      <div className="h-2.5 w-3/4 rounded bg-foreground/5" />
                    </div>
                  </div>
                  <div>
                    <div className="h-3.5 w-32 rounded bg-primary/20 mb-3" />
                    <div className="grid grid-cols-3 gap-3">
                      <div className="h-2.5 rounded bg-foreground/5" />
                      <div className="h-2.5 rounded bg-foreground/5" />
                      <div className="h-2.5 rounded bg-foreground/5" />
                    </div>
                  </div>
                </div>
              </div>
              {/* Glow effect */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-b from-primary/10 to-transparent opacity-50 blur-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── Features ─── */}
      <section className="border-t border-border/50 bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary uppercase tracking-wider">
              Features
            </div>
            <h2 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
              Everything You Need
            </h2>
            <p className="mt-5 text-xl text-muted-foreground max-w-2xl mx-auto">
              Powerful tools to create, tailor, and download professional
              resumes that stand out
            </p>
          </div>

          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="group relative rounded-2xl border border-border/50 bg-card/50 p-7 transition-all duration-300 hover:border-primary/30 hover:bg-card hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-lg group-hover:shadow-primary/25">
                  <f.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-foreground">
                  {f.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── How It Works ─── */}
      <section className="border-t border-border/50 bg-secondary/20 py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary uppercase tracking-wider">
              Process
            </div>
            <h2 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
              How It Works
            </h2>
            <p className="mt-5 text-xl text-muted-foreground">
              Three simple steps to your next job
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-3">
            {steps.map((s, i) => (
              <div key={s.title} className="relative text-center">
                {i < steps.length - 1 && (
                  <div className="absolute left-1/2 top-8 hidden h-px w-full bg-gradient-to-r from-transparent via-border to-transparent sm:block" />
                )}
                <div className="relative mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-2xl font-bold text-primary-foreground shadow-xl shadow-primary/25">
                  {i + 1}
                </div>
                <h3 className="text-lg font-bold text-foreground">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground max-w-xs mx-auto">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Why ResumeCraft ─── */}
      <section className="border-t border-border/50 bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary uppercase tracking-wider">
              Why Us
            </div>
            <h2 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
              Why ResumeCraft?
            </h2>
            <p className="mt-5 text-xl text-muted-foreground max-w-2xl mx-auto">
              Built for job seekers who want results, not subscriptions
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-border/50 bg-card/50 p-6 text-center transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="text-4xl font-extrabold text-primary">
                  {s.value}
                </div>
                <div className="mt-2 text-sm font-medium text-muted-foreground">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="relative overflow-hidden border-t border-border/50 py-24 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.02] to-transparent" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[600px] rounded-full bg-primary/[0.04] blur-[80px]" />

        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Ready to Land Your
            <br />
            <span className="text-primary">Dream Job?</span>
          </h2>
          <p className="mt-6 text-xl text-muted-foreground">
            Join thousands of job seekers who use ResumeCraft to build
            professional resumes that pass ATS screening.
          </p>
          <div className="mt-12">
            <Link href="/builder">
              <button className="group inline-flex h-14 items-center gap-3 rounded-2xl bg-primary px-8 text-lg font-bold text-primary-foreground shadow-2xl shadow-primary/30 transition-all duration-300 hover:bg-primary/90 hover:shadow-3xl hover:shadow-primary/40 hover:-translate-y-1">
                Build Your Resume Now
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="border-t border-border/50 bg-background py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 sm:px-6 sm:flex-row">
          <div className="flex items-center gap-2.5">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <FileText className="h-3.5 w-3.5" />
            </div>
            <span className="text-base font-bold text-foreground">
              Resume<span className="text-primary">Craft</span>
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/wahabansari/ats-resume-generator-app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors duration-200 hover:text-foreground"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <span className="text-sm text-muted-foreground">
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
      "See your resume update instantly as you type. No guessing, no back-and-forth — just real-time results.",
  },
  {
    icon: Sparkles,
    title: "AI-Powered Tailoring",
    description:
      "Paste a job description and watch AI rewrite your resume to match — boosting your ATS pass rate.",
  },
  {
    icon: PenTool,
    title: "Custom Instructions",
    description:
      "Guide the AI with specific prompts. Emphasize skills, adjust tone, or focus on particular experiences.",
  },
  {
    icon: Layout,
    title: "Clean PDF Export",
    description:
      "Download a professional, ATS-friendly PDF with proper formatting, Roboto font, and polished layout.",
  },
  {
    icon: Moon,
    title: "Dark & Light Mode",
    description:
      "Work in your preferred theme with smooth transitions. Easy on the eyes, day or night.",
  },
  {
    icon: Shield,
    title: "100% Private",
    description:
      "No database, no sign-up, no tracking. All your data stays in your browser — nothing leaves your device.",
  },
];

const steps = [
  {
    title: "Fill In Your Details",
    description:
      "Enter your personal info, experience, skills, education, and certifications in the intuitive form.",
  },
  {
    title: "Tailor with AI",
    description:
      "Paste a job description and let the AI optimize each section to match the role perfectly.",
  },
  {
    title: "Download & Apply",
    description:
      "Download your polished resume as a PDF and submit it with confidence. Land that interview.",
  },
];

const stats = [
  { value: "$0", label: "Completely Free" },
  { value: "0", label: "Sign-ups Required" },
  { value: "100%", label: "Client-Side Data" },
  { value: "<5 min", label: "Time to First Resume" },
];
