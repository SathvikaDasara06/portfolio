import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Server-side validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid name (at least 2 characters)." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!subject || typeof subject !== "string" || subject.trim().length < 3) {
      return NextResponse.json(
        { success: false, error: "Please provide a subject line (at least 3 characters)." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 10) {
      return NextResponse.json(
        { success: false, error: "Please enter a message of at least 10 characters." },
        { status: 400 }
      );
    }

    // Configurable email service check (e.g. Resend)
    const resendApiKey = process.env.RESEND_API_KEY;

    if (!resendApiKey) {
      // Per prompt instructions:
      // "If email delivery is not configured, do not falsely display a successful message submission."
      return NextResponse.json(
        {
          success: false,
          notConfigured: true,
          message:
            "Automated SMTP/Resend delivery is not currently configured with an active API key in this environment. Please reach out directly via LinkedIn or email.",
          directEmail: "sathvikadasara06@gmail.com",
        },
        { status: 503 }
      );
    }

    // If RESEND_API_KEY is configured, dispatch the email
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: process.env.CONTACT_RECEIVER_EMAIL || "sathvikadasara06@gmail.com",
        subject: `[Portfolio Contact] ${subject} - from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      }),
    });

    if (!resendResponse.ok) {
      const errorData = await resendResponse.json();
      return NextResponse.json(
        { success: false, error: errorData.message || "Email provider dispatch failed." },
        { status: 502 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Thank you! Your message has been transmitted successfully." },
      { status: 200 }
    );
  } catch (err: any) {
    return NextResponse.json(
      { success: false, error: "Internal server error occurred while processing message." },
      { status: 500 }
    );
  }
}
