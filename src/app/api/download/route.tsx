import { NextRequest, NextResponse } from "next/server";
import { renderToBuffer } from "@react-pdf/renderer";
import ResumePDF from "@/components/resume-pdf";
import { ResumeData } from "@/lib/types";

export async function POST(request: NextRequest) {
  try {
    const resumeData: ResumeData = await request.json();

    const element = <ResumePDF data={resumeData} />;
    const pdfBuffer = await renderToBuffer(element);

    return new NextResponse(new Uint8Array(pdfBuffer), {
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
  }
}
