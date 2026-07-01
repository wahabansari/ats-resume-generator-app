import React from "react";
import {
  Document,
  Page,
  View,
  Text,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";
import { ResumeData } from "@/lib/types";

Font.register({
  family: "Roboto",
  fonts: [
    {
      src: "https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu4mxP.ttf",
      fontWeight: 400,
    },
    {
      src: "https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmEU9fBBc9.ttf",
      fontWeight: 700,
    },
  ],
});

const C = {
  name: "#111111",
  heading: "#1a1a1a",
  body: "#333333",
  secondary: "#555555",
  muted: "#888888",
  link: "#2563eb",
  divider: "#d1d5db",
  border: "#e5e7eb",
};

const s = StyleSheet.create({
  page: {
    fontFamily: "Roboto",
    fontSize: 9.5,
    color: C.body,
    lineHeight: 1.45,
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
  },

  /* Outer wrapper — acts as the visible border */
  outer: {
    position: "absolute",
    top: 16,
    left: 16,
    right: 16,
    bottom: 16,
    border: 0.8,
    borderColor: C.border,
    borderRadius: 4,
  },

  /* Inner content container */
  content: {
    paddingHorizontal: 40,
    paddingTop: 30,
    paddingBottom: 24,
  },

  /* ─── Header ─── */
  header: {
    marginBottom: 14,
    paddingBottom: 12,
    borderBottomWidth: 0.6,
    borderBottomColor: C.divider,
    borderBottomStyle: "solid",
  },
  name: {
    fontFamily: "Roboto",
    fontSize: 21,
    fontWeight: 700,
    color: C.name,
    letterSpacing: 0.5,
    marginBottom: 3,
    textAlign: "center",
  },
  jobTitle: {
    fontFamily: "Roboto",
    fontSize: 10.5,
    fontWeight: 400,
    color: C.secondary,
    marginBottom: 6,
    textAlign: "center",
  },
  contactRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    fontSize: 8.5,
    color: C.muted,
  },
  contactDot: {
    marginHorizontal: 5,
    color: C.divider,
  },

  /* ─── Section ─── */
  section: {
    marginBottom: 11,
  },
  sectionTitle: {
    fontFamily: "Roboto",
    fontSize: 9.5,
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: 0.8,
    color: C.heading,
    borderBottomWidth: 0.7,
    borderBottomColor: C.divider,
    borderBottomStyle: "solid",
    paddingBottom: 3,
    marginBottom: 6,
  },

  /* ─── Summary ─── */
  summaryText: {
    fontFamily: "Roboto",
    fontSize: 9.5,
    fontWeight: 400,
    color: C.body,
    lineHeight: 1.55,
  },

  /* ─── Experience ─── */
  expItem: {
    marginBottom: 9,
  },
  expTopRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
    marginBottom: 2,
  },
  expLeft: {
    flexDirection: "row",
    flex: 1,
  },
  expRole: {
    fontFamily: "Roboto",
    fontSize: 10,
    fontWeight: 700,
    color: C.heading,
  },
  expDash: {
    fontFamily: "Roboto",
    fontSize: 10,
    fontWeight: 400,
    color: C.muted,
    marginHorizontal: 4,
  },
  expCompany: {
    fontFamily: "Roboto",
    fontSize: 9.5,
    fontWeight: 400,
    color: C.secondary,
  },
  expPunchline: {
    fontFamily: "Roboto",
    fontSize: 9,
    fontWeight: 700,
    color: C.link,
    marginTop: 2,
    marginBottom: 1,
  },

  /* ─── Bullets ─── */
  bulletList: {
    marginTop: 2,
    paddingLeft: 14,
  },
  bullet: {
    fontFamily: "Roboto",
    fontSize: 9,
    fontWeight: 400,
    color: C.body,
    lineHeight: 1.5,
    marginBottom: 1.5,
  },

  /* ─── Skills ─── */
  skillRow: {
    flexDirection: "row",
    marginBottom: 2,
    alignItems: "flex-start",
  },
  skillLabel: {
    fontFamily: "Roboto",
    fontSize: 9,
    fontWeight: 700,
    color: C.heading,
    width: 110,
  },
  skillValue: {
    fontFamily: "Roboto",
    fontSize: 9,
    fontWeight: 400,
    color: C.body,
    flex: 1,
  },

  /* ─── Projects ─── */
  projItem: {
    marginBottom: 7,
  },
  projTopRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
    marginBottom: 1,
  },
  projName: {
    fontFamily: "Roboto",
    fontSize: 10,
    fontWeight: 700,
    color: C.heading,
  },
  projUrl: {
    fontFamily: "Roboto",
    fontSize: 8,
    fontWeight: 400,
    color: C.link,
  },
  projTech: {
    fontFamily: "Roboto",
    fontSize: 8.5,
    fontWeight: 400,
    color: C.muted,
    marginBottom: 2,
  },

  /* ─── Education ─── */
  eduItem: {
    marginBottom: 5,
  },
  eduTopRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
  },
  eduDegree: {
    fontFamily: "Roboto",
    fontSize: 9.5,
    fontWeight: 700,
    color: C.heading,
  },
  eduDate: {
    fontFamily: "Roboto",
    fontSize: 8.5,
    fontWeight: 400,
    color: C.muted,
  },
  eduInstitution: {
    fontFamily: "Roboto",
    fontSize: 9,
    fontWeight: 400,
    color: C.secondary,
  },

  /* ─── Certs ─── */
  certItem: {
    marginBottom: 4,
  },
  certTopRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
  },
  certName: {
    fontFamily: "Roboto",
    fontSize: 9.5,
    fontWeight: 700,
    color: C.heading,
  },
  certDate: {
    fontFamily: "Roboto",
    fontSize: 8.5,
    fontWeight: 400,
    color: C.muted,
  },
  certOrg: {
    fontFamily: "Roboto",
    fontSize: 9,
    fontWeight: 400,
    color: C.secondary,
  },

  /* ─── References ─── */
  refText: {
    fontFamily: "Roboto",
    fontSize: 9,
    fontWeight: 400,
    color: C.body,
  },
});

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

export default function ResumePDF({ data }: { data: ResumeData }) {
  const { personalDetails, summary, experience, skills, projects, education, certifications, references } = data;

  return (
    <Document>
      <Page size="A4" style={s.page}>
        {/* Border frame */}
        <View style={s.outer} />

        {/* Content inside border */}
        <View style={s.content}>
          {/* ─── Header ─── */}
          <View style={s.header}>
            <Text style={s.name}>{personalDetails.fullName || "Your Name"}</Text>
            {personalDetails.jobTitle && (
              <Text style={s.jobTitle}>{personalDetails.jobTitle}</Text>
            )}
            <View style={s.contactRow}>
              {personalDetails.email && <Text>{personalDetails.email}</Text>}
              {personalDetails.email && personalDetails.location && (
                <Text style={s.contactDot}>|</Text>
              )}
              {personalDetails.location && <Text>{personalDetails.location}</Text>}
              {personalDetails.linkedin && (
                <>
                  <Text style={s.contactDot}>|</Text>
                  <Text style={{ color: C.link }}>{personalDetails.linkedin}</Text>
                </>
              )}
            </View>
          </View>

          {/* ─── Summary ─── */}
          {summary && (
            <View style={s.section}>
              <Text style={s.sectionTitle}>Professional Summary</Text>
              <Text style={s.summaryText}>{summary}</Text>
            </View>
          )}

          {/* ─── Experience ─── */}
          {experience.length > 0 && experience.some((e) => e.company || e.role) && (
            <View style={s.section}>
              <Text style={s.sectionTitle}>Experience</Text>
              {experience.map((exp) =>
                exp.company || exp.role ? (
                  <View key={exp.id} style={s.expItem}>
                    <View style={s.expTopRow}>
                      <View style={s.expLeft}>
                        <Text style={s.expRole}>{exp.role}</Text>
                        {exp.company && (
                          <>
                            <Text style={s.expDash}>—</Text>
                            <Text style={s.expCompany}>{exp.company}</Text>
                          </>
                        )}
                      </View>
                    </View>
                    {exp.punchline ? (
                      <Text style={s.expPunchline}>{exp.punchline}</Text>
                    ) : null}
                    {exp.description.length > 0 && exp.description[0] && (
                      <View style={s.bulletList}>
                        {exp.description.map((bullet, i) =>
                          bullet ? (
                            <Text key={i} style={s.bullet}>
                              {"•  " + bullet}
                            </Text>
                          ) : null
                        )}
                      </View>
                    )}
                  </View>
                ) : null
              )}
            </View>
          )}

          {/* ─── Skills ─── */}
          {Object.values(skills).some((arr) => arr.length > 0) && (
            <View style={s.section}>
              <Text style={s.sectionTitle}>Technical Skills</Text>
              {Object.entries(skills).map(([category, items]) =>
                items.length > 0 ? (
                  <View key={category} style={s.skillRow}>
                    <Text style={s.skillLabel}>
                      {(skillLabels[category] || category) + ":"}
                    </Text>
                    <Text style={s.skillValue}>{items.join(", ")}</Text>
                  </View>
                ) : null
              )}
            </View>
          )}

          {/* ─── Projects ─── */}
          {projects.length > 0 && projects.some((p) => p.name) && (
            <View style={s.section}>
              <Text style={s.sectionTitle}>Projects</Text>
              {projects.map((proj) =>
                proj.name ? (
                  <View key={proj.id} style={s.projItem}>
                    <View style={s.projTopRow}>
                      <Text style={s.projName}>{proj.name}</Text>
                      {proj.liveUrl && <Text style={s.projUrl}>{proj.liveUrl}</Text>}
                    </View>
                    {proj.techStack && (
                      <Text style={s.projTech}>{proj.techStack}</Text>
                    )}
                    {proj.description.length > 0 && proj.description[0] && (
                      <View style={s.bulletList}>
                        {proj.description.map((bullet, i) =>
                          bullet ? (
                            <Text key={i} style={s.bullet}>
                              {"•  " + bullet}
                            </Text>
                          ) : null
                        )}
                      </View>
                    )}
                  </View>
                ) : null
              )}
            </View>
          )}

          {/* ─── Education ─── */}
          {education.length > 0 && education.some((e) => e.degree || e.institution) && (
            <View style={s.section}>
              <Text style={s.sectionTitle}>Education</Text>
              {education.map((edu) =>
                edu.degree || edu.institution ? (
                  <View key={edu.id} style={s.eduItem}>
                    <View style={s.eduTopRow}>
                      <Text style={s.eduDegree}>{edu.degree}</Text>
                      {edu.dateRange && <Text style={s.eduDate}>{edu.dateRange}</Text>}
                    </View>
                    {edu.institution && <Text style={s.eduInstitution}>{edu.institution}</Text>}
                  </View>
                ) : null
              )}
            </View>
          )}

          {/* ─── Certifications ─── */}
          {certifications.length > 0 && certifications.some((c) => c.name) && (
            <View style={s.section}>
              <Text style={s.sectionTitle}>Certifications</Text>
              {certifications.map((cert) =>
                cert.name ? (
                  <View key={cert.id} style={s.certItem}>
                    <View style={s.certTopRow}>
                      <Text style={s.certName}>{cert.name}</Text>
                      {cert.date && <Text style={s.certDate}>{cert.date}</Text>}
                    </View>
                    {cert.organization && <Text style={s.certOrg}>{cert.organization}</Text>}
                  </View>
                ) : null
              )}
            </View>
          )}

          {/* ─── References ─── */}
          {references && (
            <View style={s.section}>
              <Text style={s.sectionTitle}>References</Text>
              <Text style={s.refText}>{references}</Text>
            </View>
          )}
        </View>
      </Page>
    </Document>
  );
}
