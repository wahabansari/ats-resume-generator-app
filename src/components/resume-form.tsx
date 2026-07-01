"use client";

import { ResumeData, Experience, Project, Education, Certification } from "@/lib/types";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { TailorModal } from "@/components/tailor-modal";
import { Plus, Trash2 } from "lucide-react";

interface ResumeFormProps {
  data: ResumeData;
  onChange: (data: ResumeData) => void;
}

function generateId() {
  return Math.random().toString(36).substring(2, 9);
}

export function ResumeForm({ data, onChange }: ResumeFormProps) {
  const update = (patch: Partial<ResumeData>) => {
    onChange({ ...data, ...patch });
  };

  const updatePersonal = (field: keyof ResumeData["personalDetails"], value: string) => {
    update({ personalDetails: { ...data.personalDetails, [field]: value } });
  };

  const updateSkillCategory = (category: keyof ResumeData["skills"], value: string) => {
    const skills = value
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);
    update({ skills: { ...data.skills, [category]: skills } });
  };

  const addExperience = () => {
    update({
      experience: [
        ...data.experience,
        { id: generateId(), company: "", role: "", punchline: "", description: [""] },
      ],
    });
  };
  const removeExperience = (id: string) => {
    update({ experience: data.experience.filter((e) => e.id !== id) });
  };
  const updateExperience = (id: string, patch: Partial<Experience>) => {
    update({
      experience: data.experience.map((e) =>
        e.id === id ? { ...e, ...patch } : e
      ),
    });
  };

  const addProject = () => {
    update({
      projects: [
        ...data.projects,
        { id: generateId(), name: "", techStack: "", liveUrl: "", description: [""] },
      ],
    });
  };
  const removeProject = (id: string) => {
    update({ projects: data.projects.filter((p) => p.id !== id) });
  };
  const updateProject = (id: string, patch: Partial<Project>) => {
    update({
      projects: data.projects.map((p) =>
        p.id === id ? { ...p, ...patch } : p
      ),
    });
  };

  const addEducation = () => {
    update({
      education: [
        ...data.education,
        { id: generateId(), degree: "", institution: "", dateRange: "" },
      ],
    });
  };
  const removeEducation = (id: string) => {
    update({ education: data.education.filter((e) => e.id !== id) });
  };
  const updateEducation = (id: string, patch: Partial<Education>) => {
    update({
      education: data.education.map((e) =>
        e.id === id ? { ...e, ...patch } : e
      ),
    });
  };

  const addCertification = () => {
    update({
      certifications: [
        ...data.certifications,
        { id: generateId(), name: "", organization: "", date: "" },
      ],
    });
  };
  const removeCertification = (id: string) => {
    update({ certifications: data.certifications.filter((c) => c.id !== id) });
  };
  const updateCertification = (id: string, patch: Partial<Certification>) => {
    update({
      certifications: data.certifications.map((c) =>
        c.id === id ? { ...c, ...patch } : c
      ),
    });
  };

  return (
    <div className="space-y-6 pb-32">
      <Section title="Personal Details">
        <div className="grid gap-4">
          <Field label="Full Name">
            <Input
              value={data.personalDetails.fullName}
              onChange={(e) => updatePersonal("fullName", e.target.value)}
              placeholder="Muhammad Wahab Ansari"
            />
          </Field>
          <Field label="Job Title / Headline">
            <Input
              value={data.personalDetails.jobTitle}
              onChange={(e) => updatePersonal("jobTitle", e.target.value)}
              placeholder="Frontend Engineer specializing in React.js & Next.js"
            />
          </Field>
          <div className="grid grid-cols-2 gap-4">
            <Field label="Email">
              <Input
                value={data.personalDetails.email}
                onChange={(e) => updatePersonal("email", e.target.value)}
                placeholder="wahab@example.com"
                type="email"
              />
            </Field>
            <Field label="Location">
              <Input
                value={data.personalDetails.location}
                onChange={(e) => updatePersonal("location", e.target.value)}
                placeholder="Pakistan"
              />
            </Field>
          </div>
          <Field label="LinkedIn URL">
            <Input
              value={data.personalDetails.linkedin}
              onChange={(e) => updatePersonal("linkedin", e.target.value)}
              placeholder="https://linkedin.com/in/username"
            />
          </Field>
        </div>
      </Section>

      <Separator />

      <Section
        title="Professional Summary"
        trailing={
          <TailorModal
            currentText={data.summary}
            onOptimized={(text) => update({ summary: text })}
          />
        }
      >
        <Textarea
          value={data.summary}
          onChange={(e) => update({ summary: e.target.value })}
          placeholder="Write a compelling professional summary..."
          rows={5}
        />
      </Section>

      <Separator />

      <Section title="Experience" onAdd={addExperience}>
        {data.experience.map((exp, idx) => (
          <ExperienceItem
            key={exp.id}
            exp={exp}
            index={idx}
            onUpdate={(patch) => updateExperience(exp.id, patch)}
            onRemove={() => removeExperience(exp.id)}
            onTailor={(text) => updateExperience(exp.id, { description: text.split("\n").filter(Boolean) })}
          />
        ))}
        {data.experience.length === 0 && (
          <p className="text-sm text-muted-foreground italic">No experience added yet.</p>
        )}
      </Section>

      <Separator />

      <Section title="Skills">
        <div className="grid gap-4">
          {(Object.keys(data.skills) as (keyof ResumeData["skills"])[]).map((category) => (
            <Field key={category} label={skillCategoryLabels[category]}>
              <Input
                value={data.skills[category].join(", ")}
                onChange={(e) => updateSkillCategory(category, e.target.value)}
                placeholder="Separate skills with commas"
              />
            </Field>
          ))}
        </div>
      </Section>

      <Separator />

      <Section title="Projects" onAdd={addProject}>
        {data.projects.map((proj, idx) => (
          <ProjectItem
            key={proj.id}
            proj={proj}
            index={idx}
            onUpdate={(patch) => updateProject(proj.id, patch)}
            onRemove={() => removeProject(proj.id)}
            onTailor={(text) => updateProject(proj.id, { description: text.split("\n").filter(Boolean) })}
          />
        ))}
        {data.projects.length === 0 && (
          <p className="text-sm text-muted-foreground italic">No projects added yet.</p>
        )}
      </Section>

      <Separator />

      <Section title="Education" onAdd={addEducation}>
        {data.education.map((edu, idx) => (
          <Card key={edu.id}>
            <CardHeader label={`Education ${idx + 1}`} onRemove={() => removeEducation(edu.id)} />
            <div className="grid gap-3">
              <Field label="Degree">
                <Input
                  value={edu.degree}
                  onChange={(e) => updateEducation(edu.id, { degree: e.target.value })}
                  placeholder="Bachelor of Science in Computer Science"
                />
              </Field>
              <div className="grid grid-cols-2 gap-3">
                <Field label="Institution">
                  <Input
                    value={edu.institution}
                    onChange={(e) => updateEducation(edu.id, { institution: e.target.value })}
                    placeholder="University of Technology"
                  />
                </Field>
                <Field label="Date Range">
                  <Input
                    value={edu.dateRange}
                    onChange={(e) => updateEducation(edu.id, { dateRange: e.target.value })}
                    placeholder="2018 - 2022"
                  />
                </Field>
              </div>
            </div>
          </Card>
        ))}
        {data.education.length === 0 && (
          <p className="text-sm text-muted-foreground italic">No education added yet.</p>
        )}
      </Section>

      <Separator />

      <Section title="Certifications" onAdd={addCertification}>
        {data.certifications.map((cert, idx) => (
          <Card key={cert.id}>
            <CardHeader label={`Certification ${idx + 1}`} onRemove={() => removeCertification(cert.id)} />
            <div className="grid gap-3">
              <Field label="Certification Name">
                <Input
                  value={cert.name}
                  onChange={(e) => updateCertification(cert.id, { name: e.target.value })}
                  placeholder="AWS Certified Cloud Practitioner"
                />
              </Field>
              <div className="grid grid-cols-2 gap-3">
                <Field label="Issuing Organization">
                  <Input
                    value={cert.organization}
                    onChange={(e) => updateCertification(cert.id, { organization: e.target.value })}
                    placeholder="Amazon Web Services"
                  />
                </Field>
                <Field label="Date">
                  <Input
                    value={cert.date}
                    onChange={(e) => updateCertification(cert.id, { date: e.target.value })}
                    placeholder="2024"
                  />
                </Field>
              </div>
            </div>
          </Card>
        ))}
        {data.certifications.length === 0 && (
          <p className="text-sm text-muted-foreground italic">No certifications added yet.</p>
        )}
      </Section>

      <Separator />

      <Section title="References">
        <Textarea
          value={data.references}
          onChange={(e) => update({ references: e.target.value })}
          placeholder="Available upon request..."
          rows={3}
        />
      </Section>
    </div>
  );
}

/* ─── Shared sub-components ─── */

function Section({
  title,
  children,
  trailing,
  onAdd,
}: {
  title: string;
  children: React.ReactNode;
  trailing?: React.ReactNode;
  onAdd?: () => void;
}) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-[15px] font-semibold text-foreground">{title}</h3>
        <div className="flex items-center gap-2">
          {trailing}
          {onAdd && (
            <Button variant="outline" size="sm" onClick={onAdd} className="gap-1.5">
              <Plus className="h-3.5 w-3.5" />
              Add
            </Button>
          )}
        </div>
      </div>
      {children}
    </div>
  );
}

function Field({
  label,
  children,
}: {
  label: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <Label className="text-xs text-muted-foreground">{label}</Label>
      {children}
    </div>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-border bg-background p-4 space-y-3">
      {children}
    </div>
  );
}

function CardHeader({
  label,
  onRemove,
}: {
  label: string;
  onRemove: () => void;
}) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-xs font-medium text-muted-foreground">{label}</span>
      <Button
        variant="ghost"
        size="icon"
        className="h-7 w-7 text-muted-foreground/50 hover:text-destructive"
        onClick={onRemove}
      >
        <Trash2 className="h-3.5 w-3.5" />
      </Button>
    </div>
  );
}

function ExperienceItem({
  exp,
  index,
  onUpdate,
  onRemove,
  onTailor,
}: {
  exp: Experience;
  index: number;
  onUpdate: (patch: Partial<Experience>) => void;
  onRemove: () => void;
  onTailor: (text: string) => void;
}) {
  const updateBullet = (idx: number, value: string) => {
    const bullets = [...exp.description];
    bullets[idx] = value;
    onUpdate({ description: bullets });
  };
  const addBullet = () => {
    onUpdate({ description: [...exp.description, ""] });
  };
  const removeBullet = (idx: number) => {
    onUpdate({ description: exp.description.filter((_, i) => i !== idx) });
  };

  return (
    <div className="rounded-xl border border-border bg-background p-4 space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium text-muted-foreground">
          Experience {index + 1}
        </span>
        <div className="flex items-center gap-1">
          <TailorModal
            currentText={exp.description.join("\n")}
            onOptimized={onTailor}
            triggerLabel="Tailor"
          />
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7 text-muted-foreground/50 hover:text-destructive"
            onClick={onRemove}
          >
            <Trash2 className="h-3.5 w-3.5" />
          </Button>
        </div>
      </div>
      <div className="grid gap-3">
        <div className="grid grid-cols-2 gap-3">
          <Field label="Company">
            <Input
              value={exp.company}
              onChange={(e) => onUpdate({ company: e.target.value })}
              placeholder="TechCorp Solutions"
            />
          </Field>
          <Field label="Role">
            <Input
              value={exp.role}
              onChange={(e) => onUpdate({ role: e.target.value })}
              placeholder="Senior Frontend Engineer"
            />
          </Field>
        </div>
        <Field label={<>Punchline <span className="text-muted-foreground font-normal">(optional)</span></>}>
          <Input
            value={exp.punchline}
            onChange={(e) => onUpdate({ punchline: e.target.value })}
            placeholder="e.g. Led the architecture overhaul that scaled the platform to 50K+ users"
            className="border-primary/30"
          />
        </Field>
        <div className="space-y-2">
          <Label className="text-xs text-muted-foreground">Description Bullets</Label>
          {exp.description.map((bullet, bIdx) => (
            <div key={bIdx} className="flex gap-2">
              <Input
                value={bullet}
                onChange={(e) => updateBullet(bIdx, e.target.value)}
                placeholder={`Bullet point ${bIdx + 1}`}
                className="flex-1"
              />
              {exp.description.length > 1 && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9 shrink-0 text-muted-foreground/50 hover:text-destructive"
                  onClick={() => removeBullet(bIdx)}
                >
                  <Trash2 className="h-3.5 w-3.5" />
                </Button>
              )}
            </div>
          ))}
          <Button variant="ghost" size="sm" onClick={addBullet} className="gap-1 text-muted-foreground">
            <Plus className="h-3.5 w-3.5" />
            Add bullet
          </Button>
        </div>
      </div>
    </div>
  );
}

function ProjectItem({
  proj,
  index,
  onUpdate,
  onRemove,
  onTailor,
}: {
  proj: Project;
  index: number;
  onUpdate: (patch: Partial<Project>) => void;
  onRemove: () => void;
  onTailor: (text: string) => void;
}) {
  const updateBullet = (idx: number, value: string) => {
    const bullets = [...proj.description];
    bullets[idx] = value;
    onUpdate({ description: bullets });
  };
  const addBullet = () => {
    onUpdate({ description: [...proj.description, ""] });
  };
  const removeBullet = (idx: number) => {
    onUpdate({ description: proj.description.filter((_, i) => i !== idx) });
  };

  return (
    <div className="rounded-xl border border-border bg-background p-4 space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium text-muted-foreground">
          Project {index + 1}
        </span>
        <div className="flex items-center gap-1">
          <TailorModal
            currentText={proj.description.join("\n")}
            onOptimized={onTailor}
            triggerLabel="Tailor"
          />
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7 text-muted-foreground/50 hover:text-destructive"
            onClick={onRemove}
          >
            <Trash2 className="h-3.5 w-3.5" />
          </Button>
        </div>
      </div>
      <div className="grid gap-3">
        <div className="grid grid-cols-2 gap-3">
          <Field label="Project Name">
            <Input
              value={proj.name}
              onChange={(e) => onUpdate({ name: e.target.value })}
              placeholder="E-Commerce Platform"
            />
          </Field>
          <Field label="Tech Stack">
            <Input
              value={proj.techStack}
              onChange={(e) => onUpdate({ techStack: e.target.value })}
              placeholder="Next.js, Stripe, Prisma"
            />
          </Field>
        </div>
        <Field label="Live URL">
          <Input
            value={proj.liveUrl}
            onChange={(e) => onUpdate({ liveUrl: e.target.value })}
            placeholder="https://example.com"
          />
        </Field>
        <div className="space-y-2">
          <Label className="text-xs text-muted-foreground">Description Bullets</Label>
          {proj.description.map((bullet, bIdx) => (
            <div key={bIdx} className="flex gap-2">
              <Input
                value={bullet}
                onChange={(e) => updateBullet(bIdx, e.target.value)}
                placeholder={`Bullet point ${bIdx + 1}`}
                className="flex-1"
              />
              {proj.description.length > 1 && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9 shrink-0 text-muted-foreground/50 hover:text-destructive"
                  onClick={() => removeBullet(bIdx)}
                >
                  <Trash2 className="h-3.5 w-3.5" />
                </Button>
              )}
            </div>
          ))}
          <Button variant="ghost" size="sm" onClick={addBullet} className="gap-1 text-muted-foreground">
            <Plus className="h-3.5 w-3.5" />
            Add bullet
          </Button>
        </div>
      </div>
    </div>
  );
}

const skillCategoryLabels: Record<keyof ResumeData["skills"], string> = {
  frontend: "Frontend Development",
  mobile: "Mobile & Cross-Platform",
  uiFrameworks: "UI Frameworks & Styling",
  stateManagement: "State Management",
  backend: "Backend & APIs",
  databases: "Databases & ORM",
  authentication: "Authentication",
  devops: "DevOps & Deployment",
  performance: "Performance & SEO",
  aiAutomation: "AI & Automation",
  cms: "CMS & Others",
};
