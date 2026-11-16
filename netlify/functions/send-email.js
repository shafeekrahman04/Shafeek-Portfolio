import { Resend } from 'resend';
import { generateEmailHtml } from '../../src/utils/emailTemplate.js';

export const handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: 'Method Not Allowed' })
    };
  }

  try {
    const { name, email, phone, message } = JSON.parse(event.body || '{}');

    if (!name || !email || !message) {
      return {
        statusCode: 400,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ error: 'Name, email, and message are required.' })
      };
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey || apiKey === 're_your_api_key_here') {
      return {
        statusCode: 500,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          error: 'Resend API key is not configured in Netlify environment variables.',
          missingKey: true
        })
      };
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
      return {
        statusCode: 400,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ error: error.message || 'Resend API failed' })
      };
    }

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ success: true, id: data?.id })
    };
  } catch (err) {
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: err.message || 'Internal Server Error' })
    };
  }
};
