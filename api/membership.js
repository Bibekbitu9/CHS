export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // We dynamic import nodemailer because Vercel sometimes prefers this pattern for optional deps,
  // but a normal import also works. Using dynamic import ensures clean builds.
  const nodemailer = await import('nodemailer');

  const { full_name, email, phone, profession, membership_type, statement } = req.body;

  if (!full_name || !email || !profession || !membership_type || !statement) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const mailOptions = {
    from: process.env.SMTP_USER,
    to: 'bpattnaik.bitu9@gmail.com, jenabibek@gmail.com',
    subject: `New Membership Application: ${full_name}`,
    text: `
New Membership Application Received

Name: ${full_name}
Email: ${email}
Phone: ${phone || 'Not provided'}
Profession / Institution: ${profession}
Membership Type: ${membership_type}

Statement of Interest:
${statement}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Application submitted successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to submit application. Please try again later.' });
  }
}
