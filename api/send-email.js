import { Resend } from 'resend';
import { generateEmailHtml } from '../src/utils/emailTemplate.js';

export default async function handler(req, res) {
  // Only accept POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed. Use POST.' });
  }

  try {
    const { name, email, phone, message } = req.body || {};

    if (!name || !email || !message) {
      return res.status(400).json({
        error: 'Missing required fields: name, email, and message are required.'
      });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey || apiKey === 're_your_api_key_here') {
      return res.status(500).json({
        error: 'Resend API key is not configured. Please set RESEND_API_KEY in your hosting environment variables.',
        missingKey: true
      });
    }

    const resend = new Resend(apiKey);
    const toEmail = process.env.RESEND_TO_EMAIL || 'shafeekrahman04@gmail.com';
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'Portfolio Contact <onboarding@resend.dev>';

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: `New Portfolio Message from ${name}`,
      html: generateEmailHtml({ name, email, phone, message }),
    });

    if (error) {
      console.error('Resend API Error:', error);
      return res.status(400).json({ error: error.message || 'Failed to send email via Resend' });
    }

    return res.status(200).json({
      success: true,
      message: 'Email delivered successfully',
      id: data?.id
    });
  } catch (err) {
    console.error('Server error handling /api/send-email:', err);
    return res.status(500).json({ error: err.message || 'Internal Server Error' });
  }
}
