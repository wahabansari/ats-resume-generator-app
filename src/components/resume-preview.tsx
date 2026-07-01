"use client";

import { ResumeData } from "@/lib/types";

interface ResumePreviewProps {
  data: ResumeData;
}

export function ResumePreview({ data }: ResumePreviewProps) {
  const { personalDetails, summary, experience, skills, projects, education, certifications, references } = data;

  return (
    <div className="text-[11px] leading-[1.6] text-foreground">
      {/* Header */}
      <div className="mb-5 text-center">
        <h1 className="text-[22px] font-bold tracking-tight text-foreground leading-tight">
          {personalDetails.fullName || "Your Name"}
        </h1>
        {personalDetails.jobTitle && (
          <p className="text-[11.5px] font-medium text-muted-foreground mt-0.5">
            {personalDetails.jobTitle}
          </p>
        )}
        <div className="flex flex-wrap justify-center gap-x-2.5 gap-y-0.5 mt-2 text-[9.5px] text-muted-foreground">
          {personalDetails.email && <span>{personalDetails.email}</span>}
          {personalDetails.email && personalDetails.location && (
            <span className="text-border">|</span>
          )}
          {personalDetails.location && <span>{personalDetails.location}</span>}
          {personalDetails.linkedin && (
            <>
              <span className="text-border">|</span>
              <span className="text-primary">{personalDetails.linkedin}</span>
            </>
          )}
        </div>
      </div>

      {/* Summary */}
      {summary && (
        <Section title="Professional Summary">
          <p className="text-foreground/80">{summary}</p>
        </Section>
      )}

      {/* Experience */}
      {experience.length > 0 && experience.some((e) => e.company || e.role) && (
        <Section title="Experience">
          {experience.map((exp) =>
            exp.company || exp.role ? (
              <div key={exp.id} className="mb-3 last:mb-0">
                <div className="flex items-baseline justify-between gap-2">
                  <div>
                    <span className="font-semibold text-foreground">{exp.role}</span>
                    {exp.company && (
                      <>
                        <span className="text-muted-foreground mx-1.5">&mdash;</span>
                        <span className="text-muted-foreground">{exp.company}</span>
                      </>
                    )}
                  </div>
                </div>
                {exp.punchline && (
                  <p className="mt-1 text-[9.5px] font-medium text-primary italic">
                    {exp.punchline}
                  </p>
                )}
                {exp.description.length > 0 && exp.description[0] && (
                  <ul className="mt-1 ml-4 space-y-0.5 list-disc">
                    {exp.description.map((bullet, i) =>
                      bullet ? (
                        <li key={i} className="text-foreground/80">{bullet}</li>
                      ) : null
                    )}
                  </ul>
                )}
              </div>
            ) : null
          )}
        </Section>
      )}

      {/* Skills */}
      {Object.values(skills).some((arr) => arr.length > 0) && (
        <Section title="Technical Skills">
          <div className="space-y-1">
            {(Object.entries(skills) as [string, string[]][]).map(([category, items]) =>
              items.length > 0 ? (
                <div key={category}>
                  <span className="font-semibold text-foreground">
                    {skillLabels[category] || category}:
                  </span>{" "}
                  <span className="text-foreground/80">{items.join(", ")}</span>
                </div>
              ) : null
            )}
          </div>
        </Section>
      )}

      {/* Projects */}
      {projects.length > 0 && projects.some((p) => p.name) && (
        <Section title="Projects">
          {projects.map((proj) =>
            proj.name ? (
              <div key={proj.id} className="mb-3 last:mb-0">
                <div className="flex items-baseline justify-between gap-2">
                  <span className="font-semibold text-foreground">{proj.name}</span>
                  {proj.liveUrl && (
                    <span className="text-primary text-[9.5px] shrink-0">{proj.liveUrl}</span>
                  )}
                </div>
                {proj.techStack && (
                  <p className="text-[9.5px] text-muted-foreground italic">{proj.techStack}</p>
                )}
                {proj.description.length > 0 && proj.description[0] && (
                  <ul className="mt-1 ml-4 space-y-0.5 list-disc">
                    {proj.description.map((bullet, i) =>
                      bullet ? (
                        <li key={i} className="text-foreground/80">{bullet}</li>
                      ) : null
                    )}
                  </ul>
                )}
              </div>
            ) : null
          )}
        </Section>
      )}

      {/* Education */}
      {education.length > 0 && education.some((e) => e.degree || e.institution) && (
        <Section title="Education">
          {education.map((edu) =>
            edu.degree || edu.institution ? (
              <div key={edu.id} className="mb-2 last:mb-0">
                <div className="flex items-baseline justify-between gap-2">
                  <span className="font-semibold text-foreground">{edu.degree}</span>
                  {edu.dateRange && (
                    <span className="text-muted-foreground text-[9.5px] shrink-0">{edu.dateRange}</span>
                  )}
                </div>
                {edu.institution && <p className="text-muted-foreground">{edu.institution}</p>}
              </div>
            ) : null
          )}
        </Section>
      )}

      {/* Certifications */}
      {certifications.length > 0 && certifications.some((c) => c.name) && (
        <Section title="Certifications">
          {certifications.map((cert) =>
            cert.name ? (
              <div key={cert.id} className="mb-1.5 last:mb-0">
                <div className="flex items-baseline justify-between gap-2">
                  <span className="font-semibold text-foreground">{cert.name}</span>
                  {cert.date && (
                    <span className="text-muted-foreground text-[9.5px] shrink-0">{cert.date}</span>
                  )}
                </div>
                {cert.organization && <p className="text-muted-foreground">{cert.organization}</p>}
              </div>
            ) : null
          )}
        </Section>
      )}

      {/* References */}
      {references && (
        <Section title="References">
          <p className="text-foreground/80">{references}</p>
        </Section>
      )}
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-4">
      <h2 className="text-[11.5px] font-bold uppercase tracking-wider text-foreground border-b border-border pb-1 mb-2.5">
        {title}
      </h2>
      {children}
    </div>
  );
}

const skillLabels: Record<string, string> = {
  frontend: "Frontend",
  mobile: "Mobile",
  uiFrameworks: "UI Frameworks",
  stateManagement: "State Mgmt",
  backend: "Backend",
  databases: "Databases",
  authentication: "Auth",
  devops: "DevOps",
  performance: "Perf / SEO",
  aiAutomation: "AI / Automation",
  cms: "CMS",
};
