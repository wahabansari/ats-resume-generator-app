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
  Check,
} from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      {/* ─── Header ─── */}
      <header className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl transition-colors duration-300">
        <div className="mx-auto flex h-14 max-w-[1440px] items-center justify-between px-6 lg:px-8">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-sm">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
              </div>
              <span className="text-base font-bold tracking-tight text-foreground">
                Resume<span className="text-primary">Craft</span>
              </span>
            </Link>
            <nav className="hidden lg:flex items-center gap-6">
              <Link href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Features</Link>
              <Link href="#how-it-works" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">How it works</Link>
            </nav>
          </div>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Link href="/builder">
              <button className="inline-flex h-9 items-center gap-2 rounded-lg bg-primary px-4 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90">
                Start Free
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </Link>
          </div>
        </div>
      </header>

      {/* ═══════ HERO ═══════ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-docker opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.02] via-transparent to-transparent" />
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/[0.04] rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-500/[0.04] rounded-full blur-[100px]" />

        <div className="relative mx-auto max-w-[1440px] px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-16 lg:py-20">
            {/* ─── Left — Hero text ─── */}
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary backdrop-blur-sm">
                <Sparkles className="h-3 w-3" />
                Now with AI-powered resume tailoring
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1]">
                Build resumes
                <br />
                <span className="bg-gradient-to-r from-primary via-blue-500 to-primary bg-clip-text text-transparent">
                  that actually work.
                </span>
              </h1>
              <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-lg leading-relaxed">
                Create professional, ATS-optimized resumes in minutes. Tailor them to any job description with AI — completely free, no sign-up required.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:items-center">
                <Link href="/builder">
                  <button className="group inline-flex h-11 items-center gap-2 rounded-xl bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5">
                    Start building free
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </Link>
                <span className="text-sm text-muted-foreground">
                  No account required &bull; Free forever
                </span>
              </div>
            </div>

            {/* ─── Right — Terminal / Code window ─── */}
            <div className="hidden lg:block relative">
              <div className="absolute -inset-4 bg-gradient-to-b from-primary/10 via-blue-500/5 to-transparent rounded-3xl blur-2xl" />
              <div className="relative rounded-2xl border border-border/60 bg-[#0d1117] shadow-2xl shadow-black/30 dark:shadow-black/60 overflow-hidden">
                {/* Title bar */}
                <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3 bg-white/[0.02]">
                  <div className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                  <div className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                  <div className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                  <div className="ml-3 flex items-center gap-3">
                    <span className="text-[11px] text-white/40 font-medium px-2.5 py-0.5 rounded bg-white/5">Tailor</span>
                    <span className="text-[11px] text-white/40 px-2.5 py-0.5 rounded bg-white/5">Preview</span>
                    <span className="text-[11px] text-white/60 px-2.5 py-0.5 rounded bg-primary/20 text-primary font-medium">Export</span>
                  </div>
                </div>

                {/* Terminal content */}
                <div className="p-5 font-mono text-[13px] leading-relaxed">
                  <div className="flex items-start">
                    <span className="text-white/20 w-4 flex-shrink-0 select-none">1</span>
                    <span className="text-green-400">$</span>
                    <span className="text-white ml-2">resume-craft tailor --job</span>
                    <span className="text-yellow-300 ml-2">&quot;Senior Frontend Engineer&quot;</span>
                  </div>
                  <div className="flex items-start mt-1">
                    <span className="text-white/20 w-4 flex-shrink-0 select-none">2</span>
                    <span className="text-white/40 ml-2">Analyzing job description...</span>
                  </div>
                  <div className="flex items-start mt-1">
                    <span className="text-white/20 w-4 flex-shrink-0 select-none">3</span>
                    <span className="text-white/40 ml-2">Matching keywords:</span>
                    <span className="text-blue-400 ml-1.5">React.js</span>
                    <span className="text-white/30 mx-0.5">,</span>
                    <span className="text-blue-400">Next.js</span>
                    <span className="text-white/30 mx-0.5">,</span>
                    <span className="text-blue-400">TypeScript</span>
                  </div>
                  <div className="flex items-start mt-1">
                    <span className="text-white/20 w-4 flex-shrink-0 select-none">4</span>
                    <span className="text-white/40 ml-2">Optimizing experience section...</span>
                  </div>
                  <div className="flex items-start mt-1">
                    <span className="text-white/20 w-4 flex-shrink-0 select-none">5</span>
                  </div>
                  <div className="flex items-start mt-1">
                    <span className="text-white/20 w-4 flex-shrink-0 select-none">6</span>
                    <span className="text-green-400 ml-2">✓ Summary rewritten for ATS</span>
                  </div>
                  <div className="flex items-start mt-1">
                    <span className="text-white/20 w-4 flex-shrink-0 select-none">7</span>
                    <span className="text-green-400 ml-2">✓ Experience aligned with role</span>
                  </div>
                  <div className="flex items-start mt-1">
                    <span className="text-white/20 w-4 flex-shrink-0 select-none">8</span>
                    <span className="text-green-400 ml-2">✓ PDF generated successfully</span>
                  </div>
                  <div className="flex items-start mt-1">
                    <span className="text-white/20 w-4 flex-shrink-0 select-none">9</span>
                  </div>
                  <div className="flex items-start mt-1">
                    <span className="text-white/20 w-4 flex-shrink-0 select-none">10</span>
                    <span className="ml-2 inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-[11px]">
                      <span className="text-white/50">ATS Score:</span>
                      <span className="text-green-400 font-bold">94/100</span>
                      <span className="text-white/20">|</span>
                      <span className="text-white/50">Keywords matched:</span>
                      <span className="text-green-400 font-bold">18/20</span>
                      <span className="text-white/20">|</span>
                      <span className="text-white/50">Optimization:</span>
                      <span className="text-green-400 font-bold">92%</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ FEATURES — Grid ═══════ */}
      <section id="features" className="py-16 lg:py-20">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary uppercase tracking-wider">
              Features
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
              Everything you need to land the job
            </h2>
            <p className="mt-3 text-base text-muted-foreground">
              Powerful tools to create, tailor, and download professional resumes that pass ATS screening
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((f) => (
              <div
                key={f.title}
                className="group relative rounded-xl border border-border/50 bg-card/50 p-5 transition-all duration-300 hover:border-primary/30 hover:bg-card hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  <f.icon className="h-4.5 w-4.5" />
                </div>
                <h3 className="text-base font-bold text-foreground">{f.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ AI TAILORING ═══════ */}
      <section className="border-y border-border/40 bg-secondary/20 py-16 lg:py-20">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Text */}
            <div>
              <div className="mb-3 text-xs font-semibold text-primary uppercase tracking-widest">
                AI-Powered Tailoring
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
                Tailor your resume to any job in seconds
              </h2>
              <p className="mt-3 text-base text-muted-foreground leading-relaxed">
                Paste a job description and our AI rewrites your resume to match. We analyze the role, identify key skills, and optimize your content for ATS systems — while keeping every fact accurate.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "ATS keyword optimization with smart matching",
                  "Role-specific skill identification and ranking",
                  "Quantified achievement formatting",
                  "Custom instruction support for fine-tuning",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary mt-0.5 flex-shrink-0">
                      <Check className="h-3 w-3" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Terminal */}
            <div className="relative">
              <div className="absolute -inset-3 bg-gradient-to-l from-primary/10 via-blue-500/5 to-transparent rounded-3xl blur-2xl" />
              <div className="relative rounded-2xl border border-border/60 bg-[#0d1117] shadow-2xl shadow-black/30 dark:shadow-black/60 overflow-hidden">
                <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3 bg-white/[0.02]">
                  <div className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                  <div className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                  <div className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                  <span className="ml-3 text-[11px] text-white/40 font-mono">tailor.ts — AI Optimization Engine</span>
                </div>
                <div className="p-5 font-mono text-[13px] leading-relaxed">
                  <div><span className="text-purple-400">const</span> <span className="text-blue-400">optimizeResume</span> = <span className="text-purple-400">async</span> (</div>
                  <div className="pl-5"><span className="text-white/60">resumeText</span>: <span className="text-blue-400">string</span>,</div>
                  <div className="pl-5"><span className="text-white/60">jobDescription</span>: <span className="text-blue-400">string</span>,</div>
                  <div className="pl-5"><span className="text-white/60">options</span>?: <span className="text-blue-400">TailorOptions</span></div>
                  <div>) =&gt; {'{'}</div>
                  <div className="mt-1 pl-5"><span className="text-purple-400">const</span> keywords = <span className="text-blue-400">extractKeywords</span>(jobDescription)</div>
                  <div className="pl-5"><span className="text-purple-400">const</span> score = <span className="text-blue-400">calculateATSScore</span>(resumeText, keywords)</div>
                  <div className="pl-5"><span className="text-purple-400">const</span> optimized = <span className="text-blue-400">rewriteSection</span>(resumeText, {'{'}</div>
                  <div className="pl-10"><span className="text-white/60">keywords</span>,</div>
                  <div className="pl-10"><span className="text-white/60">targetRole</span>: <span className="text-yellow-300">options?.role</span>,</div>
                  <div className="pl-10"><span className="text-white/60">instructions</span>: <span className="text-yellow-300">options?.custom</span></div>
                  <div className="pl-5">{'})'}</div>
                  <div className="pl-5"><span className="text-purple-400">return</span> {'{'} optimized, score, keywords {'}'}</div>
                  <div>{'}'}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ LIVE PREVIEW ═══════ */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Terminal */}
            <div className="relative order-2 lg:order-1">
              <div className="absolute -inset-3 bg-gradient-to-r from-primary/10 via-blue-500/5 to-transparent rounded-3xl blur-2xl" />
              <div className="relative rounded-2xl border border-border/60 bg-[#0d1117] shadow-2xl shadow-black/30 dark:shadow-black/60 overflow-hidden">
                <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3 bg-white/[0.02]">
                  <div className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                  <div className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                  <div className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                  <span className="ml-3 text-[11px] text-white/40 font-mono">resume-preview.tsx — Live Render</span>
                </div>
                <div className="p-5">
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                    {/* Header */}
                    <div className="text-center border-b border-white/10 pb-3 mb-3">
                      <div className="text-white text-base font-bold">John Smith</div>
                      <div className="text-white/40 text-[11px] mt-0.5">Senior Software Engineer</div>
                      <div className="text-white/30 text-[10px] mt-0.5">john.smith@email.com • San Francisco, CA</div>
                    </div>
                    {/* Section */}
                    <div className="mb-2.5">
                      <div className="text-primary text-[10px] font-bold uppercase tracking-wider mb-1">Professional Summary</div>
                      <div className="text-white/50 text-[10px] leading-relaxed">
                        Results-driven Software Engineer with 6+ years building scalable web applications...
                      </div>
                    </div>
                    {/* Section */}
                    <div>
                      <div className="text-primary text-[10px] font-bold uppercase tracking-wider mb-1">Experience</div>
                      <div className="text-white text-[10px] font-semibold">Acme Technologies</div>
                      <div className="text-white/30 text-[9px]">Senior Software Engineer — 2021-Present</div>
                      <div className="text-primary text-[10px] font-semibold mt-1">
                        Led platform modernization reducing costs by 40%
                      </div>
                      <ul className="mt-1 text-white/40 text-[9px] space-y-0.5 list-disc list-inside">
                        <li>Architected microservices platform serving 100K+ users</li>
                        <li>Reduced API response times by 60% through optimization</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Text */}
            <div className="order-1 lg:order-2">
              <div className="mb-3 text-xs font-semibold text-primary uppercase tracking-widest">
                Live Preview
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
                See updates instantly as you type
              </h2>
              <p className="mt-3 text-base text-muted-foreground leading-relaxed">
                No more switching tabs or refreshing pages. Your resume preview updates in real-time alongside your edits, so you always know exactly what your final PDF will look like.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Real-time preview synchronization",
                  "Professional PDF layout with proper margins",
                  "ATS-friendly formatting and structure",
                  "Clean Roboto font rendering",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary mt-0.5 flex-shrink-0">
                      <Check className="h-3 w-3" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ HOW IT WORKS ═══════ */}
      <section id="how-it-works" className="border-y border-border/40 bg-secondary/20 py-16 lg:py-20">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary uppercase tracking-wider">
              Process
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
              Three steps to your next job
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-8">
            {steps.map((s, i) => (
              <div key={s.title} className="relative text-center">
                {i < steps.length - 1 && (
                  <div className="absolute left-[60%] top-7 hidden sm:block w-[80%] h-px bg-gradient-to-r from-border/60 to-transparent" />
                )}
                <div className="relative mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-blue-500 text-lg font-bold text-white shadow-lg shadow-primary/25">
                  {i + 1}
                </div>
                <h3 className="text-base font-bold text-foreground">{s.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground max-w-xs mx-auto leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ CTA ═══════ */}
      <section className="relative overflow-hidden bg-grid-docker py-16 lg:py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.03] to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/[0.05] rounded-full blur-[100px]" />

        <div className="relative mx-auto max-w-2xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            Ready to build a resume that works?
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Start building now — it&apos;s free, no sign-up needed.
          </p>
          <div className="mt-6">
            <Link href="/builder">
              <button className="group inline-flex h-11 items-center gap-2 rounded-xl bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5">
                Start building free
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════ FOOTER ═══════ */}
      <footer className="border-t border-border/40 bg-background py-10">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <FileText className="h-3 w-3" />
                </div>
                <span className="text-sm font-bold text-foreground">Resume<span className="text-primary">Craft</span></span>
              </div>
              <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
                Free AI-powered resume builder. Create professional, ATS-optimized resumes in minutes.
              </p>
            </div>

            {/* Product */}
            <div>
              <h4 className="text-sm font-bold text-foreground mb-3">Product</h4>
              <ul className="space-y-2">
                <li><Link href="/builder" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Resume Builder</Link></li>
                <li><Link href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Features</Link></li>
                <li><Link href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">How It Works</Link></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-sm font-bold text-foreground mb-3">Resources</h4>
              <ul className="space-y-2">
                <li><span className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer">Resume Tips</span></li>
                <li><span className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer">ATS Guide</span></li>
                <li><span className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer">Career Advice</span></li>
                <li><span className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer">FAQ</span></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-sm font-bold text-foreground mb-3">Company</h4>
              <ul className="space-y-2">
                <li><a href="https://github.com/wahabansari/ats-resume-generator-app" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">GitHub</a></li>
                <li><span className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer">Privacy Policy</span></li>
                <li><span className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer">Terms of Service</span></li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="text-xs text-muted-foreground">&copy; {new Date().getFullYear()} ResumeCraft. All rights reserved.</span>
            <div className="flex items-center gap-3">
              <a href="https://github.com/wahabansari/ats-resume-generator-app" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
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
    description: "See your resume update instantly as you type. Real-time synchronization means no guessing — what you see is what you get.",
  },
  {
    icon: Zap,
    title: "AI-Powered Tailoring",
    description: "Paste any job description and our AI rewrites your resume to match. Smart keyword optimization boosts your ATS pass rate.",
  },
  {
    icon: PenTool,
    title: "Custom Instructions",
    description: "Guide the AI with specific prompts. Emphasize certain skills, adjust tone, or focus on particular experiences.",
  },
  {
    icon: Download,
    title: "Clean PDF Export",
    description: "Download a professional, ATS-friendly PDF with Roboto font, proper margins, and polished formatting — ready to submit.",
  },
  {
    icon: Moon,
    title: "Dark & Light Mode",
    description: "Work in your preferred theme with smooth transitions. Easy on the eyes, whether you're building day or night.",
  },
  {
    icon: Shield,
    title: "100% Private",
    description: "No database, no sign-up, no tracking. All your data stays in your browser — nothing ever leaves your device.",
  },
];

const steps = [
  {
    title: "Fill in your details",
    description: "Enter your personal info, experience, skills, education, and certifications in the intuitive form. Everything updates live.",
  },
  {
    title: "Tailor with AI",
    description: "Paste a job description and let the AI optimize each section to match the role. Add custom instructions for fine-tuning.",
  },
  {
    title: "Download & apply",
    description: "Download your polished resume as a professional PDF and submit with confidence. Land that interview.",
  },
];
