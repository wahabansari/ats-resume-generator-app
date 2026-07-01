"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { ResumeForm } from "@/components/resume-form";
import { ResumePreview } from "@/components/resume-preview";
import { ResumeData } from "@/lib/types";
import { defaultResume } from "@/lib/default-resume";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Download, Loader2, FileText } from "lucide-react";

export default function ResumeBuilder() {
  const [data, setData] = useState<ResumeData>(defaultResume);
  const [downloading, setDownloading] = useState(false);

  const handleDownload = useCallback(async () => {
    setDownloading(true);
    try {
      const response = await fetch("/api/download", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Download failed");

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.error("PDF download error:", err);
    } finally {
      setDownloading(false);
    }
  }, [data]);

  return (
    <div className="min-h-screen bg-grid-docker transition-colors duration-300">
      {/* ─── Header ─── */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md transition-colors duration-300">
        <div className="mx-auto flex h-14 max-w-[1400px] items-center justify-between px-4">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <FileText className="h-3.5 w-3.5" />
              </div>
              <span className="text-[15px] font-semibold tracking-tight text-foreground">
                Resume<span className="text-primary">Craft</span>
              </span>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200">Home</Link>
              <span className="text-sm font-medium text-primary cursor-default">Builder</span>
            </nav>
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button onClick={handleDownload} disabled={downloading} size="sm" className="gap-2">
              {downloading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Download className="h-4 w-4" />
              )}
              Download PDF
            </Button>
          </div>
        </div>
      </header>

      {/* ─── Main container with left/right borders ─── */}
      <div className="mx-auto max-w-[1400px] border-x border-border transition-colors duration-300">
        <main className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left — Form */}
          <div className="border-r border-border/60 bg-background/70 backdrop-blur-sm px-4 py-6 lg:px-6 transition-colors duration-300">
            <div className="mx-auto max-w-2xl">
              <ResumeForm data={data} onChange={setData} />
            </div>
          </div>

          {/* Right — Preview */}
          <div className="px-4 py-6 lg:px-6">
            <div className="sticky top-[73px] mx-auto max-w-[210mm]">
              <div className="relative overflow-hidden rounded-xl border border-border bg-card resume-shadow transition-colors duration-300">
                <div className="p-8 md:p-10">
                  <ResumePreview data={data} />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
