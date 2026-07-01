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
  const instructionBlock = customInstructions
    ? `\n\nAdditional instructions from the user:\n${customInstructions}`
    : "";

  try {
    const completion = await groqClient.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "system",
          content: `You are an expert resume writer and career coach. Your task is to rewrite the provided resume text to perfectly align with the target job description.

Rules:
1. Rewrite the text to highlight the most relevant technical proficiencies and experiences mentioned in the job description.
2. Maintain factual integrity — do NOT fabricate experiences, skills, or metrics that aren't implied by the original text.
3. Use strong action verbs and quantifiable achievements where possible.
4. Match the tone and keywords from the job description naturally.
5. Return ONLY the optimized plain text — no explanations, no formatting, no markdown, no quotes around the response.
6. Follow any additional instructions provided by the user.`,
        },
        {
          role: "user",
          content: `Original resume text:\n${currentText}\n\nTarget job description:\n${jobDescription}${instructionBlock}\n\nRewrite the resume text to align with this job description, following the rules above.`,
        },
      ],
      temperature: 0.7,
      max_tokens: 1024,
    });

    return completion.choices[0]?.message?.content?.trim() || currentText;
  } catch (error) {
    console.error("Groq API error:", error);
    return currentText;
  }
}
