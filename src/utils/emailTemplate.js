/**
 * Formats a clean, high-conversion HTML email template for portfolio contact inquiries
 */
export function generateEmailHtml({ name, email, phone, message }) {
  const sanitizedMessage = String(message || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');

  const formattedTime = new Date().toLocaleString('en-IN', {
    dateStyle: 'full',
    timeStyle: 'medium',
    timeZone: 'Asia/Kolkata',
  });

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Portfolio Message</title>
  <style>
    body {
      margin: 0;
      padding: 24px;
      background-color: #0b1120;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      color: #f1f5f9;
    }
    .wrapper {
      max-width: 600px;
      margin: 0 auto;
      background: #111a2e;
      border: 1px solid #1e2e4a;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
    }
    .header {
      background: linear-gradient(135deg, #1d4ed8 0%, #2563eb 50%, #3b82f6 100%);
      padding: 32px 28px;
      text-align: center;
    }
    .header h1 {
      margin: 0;
      color: #ffffff;
      font-size: 22px;
      font-weight: 700;
      letter-spacing: -0.02em;
    }
    .header p {
      margin: 8px 0 0;
      color: #dbeafe;
      font-size: 14px;
    }
    .badge-tag {
      display: inline-block;
      margin-top: 12px;
      background: rgba(255, 255, 255, 0.18);
      border: 1px solid rgba(255, 255, 255, 0.3);
      padding: 4px 12px;
      border-radius: 9999px;
      font-size: 12px;
      font-weight: 600;
      color: #ffffff;
    }
    .body-content {
      padding: 32px 28px;
    }
    .data-card {
      background: #0d1527;
      border: 1px solid #1a2742;
      border-radius: 12px;
      margin-bottom: 24px;
      overflow: hidden;
    }
    .data-row {
      display: flex;
      padding: 14px 18px;
      border-bottom: 1px solid #162035;
      font-size: 14px;
    }
    .data-row:last-child {
      border-bottom: none;
    }
    .data-label {
      width: 120px;
      color: #94a3b8;
      font-weight: 600;
    }
    .data-val {
      color: #f8fafc;
      font-weight: 500;
      word-break: break-word;
    }
    .data-val a {
      color: #60a5fa;
      text-decoration: none;
    }
    .section-title {
      font-size: 12px;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: #94a3b8;
      margin-bottom: 10px;
    }
    .message-box {
      background: #080d18;
      border: 1px solid #1a2742;
      border-radius: 12px;
      padding: 20px;
      color: #f1f5f9;
      font-size: 15px;
      line-height: 1.65;
      white-space: pre-wrap;
    }
    .action-bar {
      margin-top: 28px;
      text-align: center;
    }
    .reply-btn {
      display: inline-block;
      background: #2563eb;
      color: #ffffff !important;
      text-decoration: none;
      padding: 12px 28px;
      border-radius: 8px;
      font-weight: 600;
      font-size: 14px;
    }
    .footer {
      background: #090e1c;
      border-top: 1px solid #162035;
      padding: 18px 24px;
      text-align: center;
      font-size: 12px;
      color: #64748b;
    }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="header">
      <h1>New Portfolio Inquiry</h1>
      <p>Shafeek Rahman &bull; Senior Frontend Developer Portfolio</p>
      <span class="badge-tag">&#9889; Immediate Joiner Available</span>
    </div>

    <div class="body-content">
      <div class="section-title">Sender Details</div>
      <div class="data-card">
        <div class="data-row">
          <span class="data-label">Name:</span>
          <span class="data-val"><strong>${name}</strong></span>
        </div>
        <div class="data-row">
          <span class="data-label">Email:</span>
          <span class="data-val"><a href="mailto:${email}">${email}</a></span>
        </div>
        <div class="data-row">
          <span class="data-label">Phone:</span>
          <span class="data-val">${phone ? `<a href="tel:${phone}">${phone}</a>` : '<em>Not provided</em>'}</span>
        </div>
        <div class="data-row">
          <span class="data-label">Timestamp:</span>
          <span class="data-val">${formattedTime}</span>
        </div>
      </div>

      <div class="section-title">Message</div>
      <div class="message-box">${sanitizedMessage}</div>

      <div class="action-bar">
        <a href="mailto:${email}?subject=Re:%20Portfolio%20Inquiry%20-%20Shafeek%20Rahman" class="reply-btn">
          Reply Directly to ${name}
        </a>
      </div>
    </div>

    <div class="footer">
      Sent via Resend from Shafeek Rahman's Portfolio Website &bull; Bengaluru, India
    </div>
  </div>
</body>
</html>
  `.trim();
}
