// pages/api/contact.js
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    const { data, error } = await resend.emails.send({
      from: `"Contact Form" <onboarding@resend.dev>`,
      to: process.env.MAIL_TO,
      subject: `New Contact Message from ${name}`,
   html: `
  <div style="font-family: 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background-color: #f9fafb; border-radius: 12px; border: 1px solid #e5e7eb;">
    <h2 style="color: #111827; font-size: 20px; border-bottom: 1px solid #e5e7eb; padding-bottom: 12px;">📬 New Contact Message</h2>

    <table style="width: 100%; margin-top: 16px;">
      <tr>
        <td style="font-weight: 600; color: #374151; padding: 8px 0;">Name:</td>
        <td style="color: #1f2937; padding: 8px 0;">${name}</td>
      </tr>
      <tr>
        <td style="font-weight: 600; color: #374151; padding: 8px 0;">Email:</td>
        <td style="color: #1f2937; padding: 8px 0;"><a href="mailto:${email}" style="color: #3b82f6; text-decoration: none;">${email}</a></td>
      </tr>
      <tr>
        <td style="font-weight: 600; color: #374151; padding: 8px 0; vertical-align: top;">Message:</td>
        <td style="color: #1f2937; padding: 8px 0; white-space: pre-wrap;">${message}</td>
      </tr>
    </table>

    <p style="font-size: 14px; color: #6b7280; margin-top: 24px; text-align: center;">
      This message was sent via your portfolio contact form.
    </p>
  </div>
`,
    });

    if (error) throw error;
    return res.status(200).json({ message: "Email sent", id: data.id });
  } catch (err) {
    console.error("Resend Error:", err);
    return res.status(500).json({ error: "Failed to send email" });
  }
}
