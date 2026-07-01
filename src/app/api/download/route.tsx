import { NextRequest, NextResponse } from "next/server";
import { ResumeData } from "@/lib/types";
import { renderResumeHTML } from "@/lib/resume-template";

export const runtime = "nodejs";
export const maxDuration = 30;

export async function POST(request: NextRequest) {
  let browser: Awaited<ReturnType<typeof import("puppeteer-core").default.launch>> | null = null;
  try {
    const resumeData: ResumeData = await request.json();
    const html = renderResumeHTML(resumeData);

    const isVercel = !!process.env.VERCEL;
    let executablePath: string;
    let args: string[];

    if (isVercel) {
      const chromium = (await import("@sparticuz/chromium")).default;
      executablePath = await chromium.executablePath();
      args = chromium.args;
    } else {
      executablePath =
        process.env.CHROME_PATH ||
        "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
      args = ["--no-sandbox", "--disable-setuid-sandbox", "--disable-gpu"];
    }

    const puppeteer = (await import("puppeteer-core")).default;

    browser = await puppeteer.launch({
      headless: true,
      executablePath,
      args,
    });

    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: "load", timeout: 15000 });

    const pdfBuffer = await page.pdf({
      format: "Letter",
      printBackground: true,
      margin: { top: "0", right: "0", bottom: "0", left: "0" },
    });

    await page.close();

    return new NextResponse(Buffer.from(pdfBuffer), {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="resume.pdf"',
      },
    });
  } catch (error: unknown) {
    console.error("PDF generation error:", error);
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { error: "Failed to generate PDF", details: message },
      { status: 500 }
    );
  } finally {
    if (browser) await browser.close().catch(() => {});
  }
}
