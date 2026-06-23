require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Set up Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail', // You can change this or use host/port
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

app.post('/api/apply', async (req, res) => {
  try {
    const { full_name, email, phone, institution, field, cover_letter } = req.body;

    // Basic validation
    if (!full_name || !email || !institution || !field || !cover_letter) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: 'bpattnaik.bitu9@gmail.com',
      subject: `New Internship Application: ${full_name}`,
      text: `
Name: ${full_name}
Email: ${email}
Phone: ${phone || 'Not provided'}
Institution: ${institution}
Field of Study: ${field}

Cover Letter:
${cover_letter}
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);
    
    res.status(200).json({ message: 'Application submitted successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to submit application. Please try again later.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
