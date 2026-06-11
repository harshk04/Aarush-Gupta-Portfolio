import nodemailer from 'nodemailer';

const DEFAULT_RECIPIENT = 'kumawatharsh2004@gmail.com';

const env = (name, fallback = '') => process.env[name] ?? fallback;

const toBoolean = (value, fallback = false) => {
  if (value === undefined || value === null || value === '') {
    return fallback;
  }

  return String(value).toLowerCase() === 'true';
};

const escapeHtml = (value = '') =>
  String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');

const readBody = async (req) => {
  if (req.body && typeof req.body === 'object') {
    return req.body;
  }

  const chunks = [];
  for await (const chunk of req) {
    chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
  }

  const raw = Buffer.concat(chunks).toString('utf8').trim();
  if (!raw) {
    return {};
  }

  try {
    return JSON.parse(raw);
  } catch {
    const error = new Error('Request body must be valid JSON.');
    error.statusCode = 400;
    throw error;
  }
};

const createTransporter = () =>
  nodemailer.createTransport({
    host: env('SMTP_HOST'),
    port: Number(env('SMTP_PORT', '587')),
    secure: toBoolean(env('SMTP_USE_SSL', 'false')),
    requireTLS: toBoolean(env('SMTP_USE_STARTTLS', 'true')),
    auth: {
      user: env('SMTP_USERNAME'),
      pass: env('SMTP_PASSWORD'),
    },
    connectionTimeout: Number(env('SMTP_TIMEOUT_SECONDS', '15')) * 1000,
  });

export const buildContactEmail = (data = {}) => {
  const name = String(data.name ?? '').trim();
  const email = String(data.email ?? '').trim();
  const company = String(data.company ?? '').trim();
  const message = String(data.message ?? '').trim();

  if (!name || !email || !message) {
    const error = new Error('Name, email, and message are required.');
    error.statusCode = 400;
    throw error;
  }

  const subject = `New portfolio contact form submission from ${name}`;
  const sections = [
    `You received a new message from the Aarush Gupta portfolio contact form.`,
    '',
    `Name: ${name}`,
    `Email: ${email}`,
    `Organisation / context: ${company || 'Not provided'}`,
    '',
    'Message:',
    message,
    '',
    'RavvioLabs Technologies',
  ];

  return {
    subject,
    text: sections.join('\n'),
    html: `
      <div style="font-family:Arial,Helvetica,sans-serif;line-height:1.6;color:#111827">
        <p>You received a new message from the Aarush Gupta portfolio contact form.</p>
        <table cellpadding="0" cellspacing="0" style="border-collapse:collapse;margin:16px 0;">
          <tr>
            <td style="padding:6px 12px 6px 0;font-weight:700;">Name</td>
            <td style="padding:6px 0;">${escapeHtml(name)}</td>
          </tr>
          <tr>
            <td style="padding:6px 12px 6px 0;font-weight:700;">Email</td>
            <td style="padding:6px 0;">${escapeHtml(email)}</td>
          </tr>
          <tr>
            <td style="padding:6px 12px 6px 0;font-weight:700;">Organisation / context</td>
            <td style="padding:6px 0;">${escapeHtml(company || 'Not provided')}</td>
          </tr>
        </table>
        <div style="margin-top:20px;">
          <div style="font-weight:700;margin-bottom:8px;">Message</div>
          <div style="white-space:pre-wrap;background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;padding:16px;">
            ${escapeHtml(message)}
          </div>
        </div>
        <p style="margin-top:24px;">RavvioLabs Technologies</p>
      </div>
    `,
  };
};

export const handleContactRequest = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.statusCode = 204;
    res.end();
    return;
  }

  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Allow', 'POST, OPTIONS');
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ ok: false, message: 'Method not allowed.' }));
    return;
  }

  try {
    const body = await readBody(req);
    const { subject, text, html } = buildContactEmail(body);
    const transporter = createTransporter();

    const info = await transporter.sendMail({
      from: `"${env('SMTP_FROM_NAME', 'Aarush Gupta Portfolio')}" <${env('SMTP_FROM_EMAIL', env('SMTP_USERNAME'))}>`,
      to: DEFAULT_RECIPIENT,
      replyTo: String(body.email ?? '').trim(),
      subject,
      text,
      html,
    });

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(
      JSON.stringify({
        ok: true,
        message: 'Your message was sent successfully.',
        messageId: info.messageId,
      }),
    );
  } catch (error) {
    res.statusCode = error.statusCode || 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(
      JSON.stringify({
        ok: false,
        message: error.message || 'Unable to send your message right now.',
      }),
    );
  }
};
