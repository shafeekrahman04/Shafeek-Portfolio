import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { generateEmailHtml } from './src/utils/emailTemplate.js';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [
      react(),
      {
        name: 'resend-dev-api',
        configureServer(server) {
          server.middlewares.use('/api/send-email', (req, res) => {
            if (req.method !== 'POST') {
              res.statusCode = 405;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ error: 'Method Not Allowed' }));
              return;
            }

            let body = '';
            req.on('data', (chunk) => {
              body += chunk;
            });

            req.on('end', async () => {
              try {
                const { name, email, phone, message } = JSON.parse(body || '{}');

                if (!name || !email || !message) {
                  res.statusCode = 400;
                  res.setHeader('Content-Type', 'application/json');
                  res.end(JSON.stringify({ error: 'Name, email, and message are required.' }));
                  return;
                }

                const apiKey = process.env.RESEND_API_KEY || env.RESEND_API_KEY;
                if (!apiKey || apiKey === 're_your_api_key_here') {
                  res.statusCode = 400;
                  res.setHeader('Content-Type', 'application/json');
                  res.end(
                    JSON.stringify({
                      error:
                        'Resend API key is not configured. Please add your actual RESEND_API_KEY to the .env file in the project root.',
                      missingKey: true,
                    })
                  );
                  return;
                }

                const { Resend } = await import('resend');
                const resend = new Resend(apiKey);
                const toEmail = process.env.RESEND_TO_EMAIL || env.RESEND_TO_EMAIL || 'shafeekrahman04@gmail.com';
                const fromEmail =
                  process.env.RESEND_FROM_EMAIL || env.RESEND_FROM_EMAIL || 'Portfolio Contact <onboarding@resend.dev>';

                const result = await resend.emails.send({
                  from: fromEmail,
                  to: toEmail,
                  replyTo: email,
                  subject: `New Portfolio Message from ${name}`,
                  html: generateEmailHtml({ name, email, phone, message }),
                });

                if (result.error) {
                  res.statusCode = 400;
                  res.setHeader('Content-Type', 'application/json');
                  res.end(JSON.stringify({ error: result.error.message || 'Resend error' }));
                  return;
                }

                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ success: true, id: result.data?.id }));
              } catch (err) {
                res.statusCode = 500;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ error: err.message || 'Internal server error' }));
              }
            });
          });
        },
      },
    ],
  };
});
