import { NextResponse } from 'next/server';
const sgMail = require('@sendgrid/mail');

const apiKey = process.env.SMTP_PASS;
if (apiKey) {
  sgMail.setApiKey(apiKey);
} else {
  console.error("SMTP_PASS environment variable not set. Email sending will fail.");
}

export async function POST(request) {
  if (!apiKey) {
    console.error("API key is not configured.");
    return NextResponse.json({ error: "Server configuration error: Missing API Key." }, { status: 500 });
  }

  const toEmail = process.env.EMAIL_TO;
  if (!toEmail) {
    console.error("EMAIL_TO environment variable not set.");
    return NextResponse.json({ error: "Server configuration error: Missing recipient email." }, { status: 500 });
  }

  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Bad Request: Missing form fields." }, { status: 400 });
    }

    const fromEmail = process.env.EMAIL_FROM_ADDRESS || "no-reply@citrinitas.therapies";

    const msg = {
      to: toEmail,
      from: {
        name: "Citrinitas Therapies Form",
        email: fromEmail,
      },
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
          <p>You have received a new message from your website contact form.</p>
          <h3>Contact Details</h3>
          <ul>
              <li><strong>Name:</strong> ${name}</li>
              <li><strong>Email:</strong> ${email}</li>
          </ul>
          <h3>Message</h3>
          <p>${message}</p>
      `,
    };

    await sgMail.send(msg);
    return NextResponse.json({ message: "Success" }, { status: 200 });
  } catch (error) {
    console.error("Error processing request:", error);
    if (error.response) {
      console.error(error.response.body)
    }
    return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
  }
}
