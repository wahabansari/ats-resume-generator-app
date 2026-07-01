import { ResumeData } from "./types";

export function renderResumeHTML(data: ResumeData): string {
  const { personalDetails: p, summary, experience, skills, projects, education, certifications, references } = data;

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

  const escapeHtml = (s: string) =>
    s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  const skillRows = Object.entries(skills)
    .filter(([, items]) => items.length > 0)
    .map(
      ([cat, items]) =>
        `<div class="skill-row">
          <span class="skill-label">${escapeHtml(skillLabels[cat] || cat)}:</span>
          <span class="skill-value">${escapeHtml(items.join(", "))}</span>
        </div>`
    )
    .join("\n");

  const experienceHtml = experience
    .filter((e) => e.company || e.role)
    .map(
      (exp) => `
      <div class="exp-item">
        <div class="exp-top">
          <div class="exp-left">
            <span class="exp-role">${escapeHtml(exp.role)}</span>
            ${exp.company ? `<span class="exp-dash">&mdash;</span><span class="exp-company">${escapeHtml(exp.company)}</span>` : ""}
          </div>
        </div>
        ${exp.punchline ? `<div class="exp-punchline">${escapeHtml(exp.punchline)}</div>` : ""}
        ${exp.description.filter((d) => d).length > 0 ? `
          <ul class="bullets">
            ${exp.description.filter((d) => d).map((b) => `<li>${escapeHtml(b)}</li>`).join("\n")}
          </ul>
        ` : ""}
      </div>`
    )
    .join("\n");

  const projectsHtml = projects
    .filter((p) => p.name)
    .map(
      (proj) => `
      <div class="proj-item">
        <div class="proj-top">
          <span class="proj-name">${escapeHtml(proj.name)}</span>
          ${proj.liveUrl ? `<span class="proj-url">${escapeHtml(proj.liveUrl)}</span>` : ""}
        </div>
        ${proj.techStack ? `<div class="proj-tech">${escapeHtml(proj.techStack)}</div>` : ""}
        ${proj.description.filter((d) => d).length > 0 ? `
          <ul class="bullets">
            ${proj.description.filter((d) => d).map((b) => `<li>${escapeHtml(b)}</li>`).join("\n")}
          </ul>
        ` : ""}
      </div>`
    )
    .join("\n");

  const educationHtml = education
    .filter((e) => e.degree || e.institution)
    .map(
      (edu) => `
      <div class="edu-item">
        <div class="edu-top">
          <span class="edu-degree">${escapeHtml(edu.degree)}</span>
          ${edu.dateRange ? `<span class="edu-date">${escapeHtml(edu.dateRange)}</span>` : ""}
        </div>
        ${edu.institution ? `<div class="edu-inst">${escapeHtml(edu.institution)}</div>` : ""}
      </div>`
    )
    .join("\n");

  const certsHtml = certifications
    .filter((c) => c.name)
    .map(
      (cert) => `
      <div class="cert-item">
        <div class="cert-top">
          <span class="cert-name">${escapeHtml(cert.name)}</span>
          ${cert.date ? `<span class="cert-date">${escapeHtml(cert.date)}</span>` : ""}
        </div>
        ${cert.organization ? `<div class="cert-org">${escapeHtml(cert.organization)}</div>` : ""}
      </div>`
    )
    .join("\n");

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet" />
<style>
  @page {
    size: letter;
    margin: 0;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    font-family: 'Roboto', sans-serif;
    font-size: 9.5pt;
    line-height: 1.45;
    color: #333;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }

  .page {
    width: 8.5in;
    min-height: 11in;
    padding: 0.4in 0.5in;
    position: relative;
  }

  /* No border frame */

  /* ─── Header ─── */
  .header {
    text-align: center;
    margin-bottom: 10pt;
    padding-bottom: 8pt;
    border-bottom: 0.6px solid #d1d5db;
  }

  .name {
    font-size: 20pt;
    font-weight: 700;
    color: #111;
    letter-spacing: 0.3px;
    margin-bottom: 4pt;
    line-height: 1.2;
  }

  .job-title {
    font-size: 10pt;
    font-weight: 400;
    color: #555;
    margin-bottom: 5pt;
    line-height: 1.2;
  }

  .contact-row {
    font-size: 8.5pt;
    color: #888;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 4px 0;
  }

  .contact-row .dot {
    margin: 0 5px;
    color: #d1d5db;
  }

  .contact-row a {
    color: #2563eb;
    text-decoration: none;
  }

  /* ─── Section ─── */
  .section {
    margin-bottom: 9pt;
    page-break-inside: avoid;
  }

  .section-title {
    font-size: 9.5pt;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.6px;
    color: #1a1a1a;
    border-bottom: 0.6px solid #d1d5db;
    padding-bottom: 2.5pt;
    margin-bottom: 5pt;
  }

  /* ─── Summary ─── */
  .summary-text {
    font-size: 9.5pt;
    line-height: 1.55;
    color: #333;
  }

  /* ─── Experience ─── */
  .exp-item {
    margin-bottom: 7pt;
    page-break-inside: avoid;
  }

  .exp-top {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 1pt;
  }

  .exp-left {
    display: flex;
    align-items: baseline;
    gap: 5px;
  }

  .exp-role {
    font-size: 10pt;
    font-weight: 700;
    color: #1a1a1a;
  }

  .exp-dash {
    color: #888;
    font-size: 10pt;
  }

  .exp-company {
    font-size: 9.5pt;
    color: #555;
  }

  .exp-punchline {
    font-size: 9pt;
    font-weight: 700;
    color: #2563eb;
    margin-top: 1pt;
    margin-bottom: 2pt;
    line-height: 1.4;
  }

  .bullets {
    margin-top: 2pt;
    padding-left: 16px;
    list-style-type: disc;
  }

  .bullets li {
    font-size: 9pt;
    line-height: 1.5;
    margin-bottom: 1pt;
    color: #333;
  }

  /* ─── Skills ─── */
  .skill-row {
    display: flex;
    margin-bottom: 1.5pt;
    align-items: baseline;
  }

  .skill-label {
    font-size: 9pt;
    font-weight: 700;
    color: #1a1a1a;
    width: 105px;
    flex-shrink: 0;
  }

  .skill-value {
    font-size: 9pt;
    color: #333;
    flex: 1;
  }

  /* ─── Projects ─── */
  .proj-item {
    margin-bottom: 6pt;
    page-break-inside: avoid;
  }

  .proj-top {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 1pt;
  }

  .proj-name {
    font-size: 10pt;
    font-weight: 700;
    color: #1a1a1a;
  }

  .proj-url {
    font-size: 8pt;
    color: #2563eb;
  }

  .proj-tech {
    font-size: 8.5pt;
    color: #888;
    margin-bottom: 2pt;
  }

  /* ─── Education ─── */
  .edu-item {
    margin-bottom: 4pt;
  }

  .edu-top {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }

  .edu-degree {
    font-size: 9.5pt;
    font-weight: 700;
    color: #1a1a1a;
  }

  .edu-date {
    font-size: 8.5pt;
    color: #888;
  }

  .edu-inst {
    font-size: 9pt;
    color: #555;
  }

  /* ─── Certs ─── */
  .cert-item {
    margin-bottom: 3pt;
  }

  .cert-top {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }

  .cert-name {
    font-size: 9.5pt;
    font-weight: 700;
    color: #1a1a1a;
  }

  .cert-date {
    font-size: 8.5pt;
    color: #888;
  }

  .cert-org {
    font-size: 9pt;
    color: #555;
  }

  /* ─── References ─── */
  .ref-text {
    font-size: 9pt;
    color: #333;
  }
</style>
</head>
<body>
<div class="page">

  <!-- Header -->
  <div class="header">
    <div class="name">${escapeHtml(p.fullName || "Your Name")}</div>
    ${p.jobTitle ? `<div class="job-title">${escapeHtml(p.jobTitle)}</div>` : ""}
    <div class="contact-row">
      ${p.email ? `<span>${escapeHtml(p.email)}</span>` : ""}
      ${p.email && p.location ? `<span class="dot">|</span>` : ""}
      ${p.location ? `<span>${escapeHtml(p.location)}</span>` : ""}
      ${p.linkedin ? `<span class="dot">|</span><a href="${escapeHtml(p.linkedin)}">${escapeHtml(p.linkedin)}</a>` : ""}
    </div>
  </div>

  <!-- Summary -->
  ${summary ? `
  <div class="section">
    <div class="section-title">Professional Summary</div>
    <div class="summary-text">${escapeHtml(summary)}</div>
  </div>` : ""}

  <!-- Experience -->
  ${experienceHtml ? `
  <div class="section">
    <div class="section-title">Experience</div>
    ${experienceHtml}
  </div>` : ""}

  <!-- Skills -->
  ${skillRows ? `
  <div class="section">
    <div class="section-title">Technical Skills</div>
    ${skillRows}
  </div>` : ""}

  <!-- Projects -->
  ${projectsHtml ? `
  <div class="section">
    <div class="section-title">Projects</div>
    ${projectsHtml}
  </div>` : ""}

  <!-- Education -->
  ${educationHtml ? `
  <div class="section">
    <div class="section-title">Education</div>
    ${educationHtml}
  </div>` : ""}

  <!-- Certifications -->
  ${certsHtml ? `
  <div class="section">
    <div class="section-title">Certifications</div>
    ${certsHtml}
  </div>` : ""}

  <!-- References -->
  ${references ? `
  <div class="section">
    <div class="section-title">References</div>
    <div class="ref-text">${escapeHtml(references)}</div>
  </div>` : ""}

</div>
</body>
</html>`;
}
