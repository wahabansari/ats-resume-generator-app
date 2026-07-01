"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Sparkles, Loader2, Wand2 } from "lucide-react";
import { tailorText } from "@/app/actions/tailor";

interface TailorModalProps {
  currentText: string;
  onOptimized: (newText: string) => void;
  triggerLabel?: string;
}

const QUICK_INSTRUCTIONS = [
  "Make it more results-oriented with metrics",
  "Use stronger action verbs",
  "Emphasize leadership and impact",
  "Tailor for a senior role",
  "Keep it concise and punchy",
  "Highlight cross-team collaboration",
];

export function TailorModal({
  currentText,
  onOptimized,
  triggerLabel = "Tailor with AI",
}: TailorModalProps) {
  const [open, setOpen] = useState(false);
  const [jobDescription, setJobDescription] = useState("");
  const [instructions, setInstructions] = useState("");
  const [loading, setLoading] = useState(false);

  const handleOptimize = async () => {
    if (!jobDescription.trim()) return;
    setLoading(true);
    try {
      const optimized = await tailorText(currentText, jobDescription, instructions);
      onOptimized(optimized);
      setOpen(false);
      setJobDescription("");
      setInstructions("");
    } catch {
      console.error("Optimization failed");
    } finally {
      setLoading(false);
    }
  };

  const handleOpenChange = (nextOpen: boolean) => {
    setOpen(nextOpen);
    if (!nextOpen) {
      setJobDescription("");
      setInstructions("");
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="gap-1.5 text-primary border-primary/30 hover:bg-primary/5">
          <Sparkles className="h-3.5 w-3.5" />
          {triggerLabel}
        </Button>
      </DialogTrigger>
      <DialogContent forceMount className="sm:max-w-[560px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" />
            Tailor with AI
          </DialogTitle>
          <DialogDescription>
            Paste the job description and add instructions to customize how AI rewrites your content.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          {/* Job Description */}
          <div className="space-y-2">
            <Label htmlFor="jd-input">
              Job Description <span className="text-destructive">*</span>
            </Label>
            <Textarea
              id="jd-input"
              placeholder="Paste the full job description here..."
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              rows={7}
              disabled={loading}
            />
          </div>

          {/* Instructions */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Label htmlFor="instructions-input" className="flex items-center gap-1.5">
                <Wand2 className="h-3.5 w-3.5 text-primary" />
                Custom Instructions
              </Label>
              <span className="text-[11px] text-muted-foreground">(optional)</span>
            </div>
            <Input
              id="instructions-input"
              placeholder="e.g. Focus on React experience, use British English..."
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
              disabled={loading}
            />
            {/* Quick instruction chips */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {QUICK_INSTRUCTIONS.map((inst) => (
                <button
                  key={inst}
                  type="button"
                  onClick={() =>
                    setInstructions((prev) =>
                      prev ? `${prev}, ${inst}` : inst
                    )
                  }
                  className="inline-flex items-center rounded-full border border-border bg-background px-2.5 py-0.5 text-[11px] text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
                  disabled={loading}
                >
                  {inst}
                </button>
              ))}
            </div>
          </div>
        </div>

        <DialogFooter className="pt-2">
          <Button variant="outline" onClick={() => handleOpenChange(false)} disabled={loading}>
            Cancel
          </Button>
          <Button onClick={handleOptimize} disabled={!jobDescription.trim() || loading}>
            {loading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Optimizing...
              </>
            ) : (
              <>
                <Sparkles className="h-4 w-4" />
                Optimize
              </>
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
