"use server";

import Groq from "groq-sdk";

const groqClient = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function tailorText(
  currentText: string,
  jobDescription: string,
  customInstructions?: string
): Promise<string> {
  const instructionSection = customInstructions
    ? `\n\n[HARD REQUIREMENT - USER CUSTOM INSTRUCTIONS]\nThe user has explicitly requested the following. You MUST follow these instructions above all else:\n${customInstructions}\n`
    : "";

  try {
    const completion = await groqClient.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "system",
          content: `You are a senior technical recruiter and ATS optimization expert. You rewrite resume content to precisely match job descriptions while preserving factual accuracy.

ANALYSIS STEPS (do these mentally before writing):
1. Extract every required skill, technology, and qualification from the job description
2. Identify the seniority level, team size, and scope from the role
3. Map the job requirements to the original resume text
4. Note which requirements are already covered and which need emphasis

REWRITING RULES:
- Mirror the EXACT keywords and phrases from the job description (e.g., if JD says "cross-functional leadership", use that exact phrase)
- Quantify achievements with numbers, percentages, and metrics wherever possible
- Lead each bullet with a strong action verb (Led, Architected, Optimized, Delivered, Reduced, Increased)
- Match the seniority level: a "Staff Engineer" role needs different language than a "Junior Developer" role
- Preserve all factual information from the original text — never fabricate metrics, companies, or roles
- Keep the same length or slightly shorter — do not pad with filler
- Return ONLY the rewritten text. No preamble, no explanations, no quotes, no markdown formatting

CRITICAL: Custom instructions from the user override everything above. If the user says "emphasize Python", you MUST emphasize Python even if the JD focuses on Java. The user's instructions are non-negotiable.`,
        },
        {
          role: "user",
          content: `=== JOB DESCRIPTION ===
${jobDescription}

=== CURRENT RESUME TEXT ===
${currentText}
${instructionSection}
=== YOUR TASK ===
Rewrite the resume text to align with this specific job description. Extract the key requirements from the JD above and rewrite each line to directly address those requirements using the exact language from the JD where possible. Return ONLY the rewritten resume text.`,
        },
      ],
      temperature: 0.4,
      max_tokens: 1500,
    });

    return completion.choices[0]?.message?.content?.trim() || currentText;
  } catch (error) {
    console.error("Groq API error:", error);
    return currentText;
  }
}
