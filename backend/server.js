// Express server for PESU Talkies contact form backend.
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Handles contact form submissions, sends email to club and auto-reply to user.
app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: "pesutalkies@pes.edu", // Your receiving email
    subject: `New message from ${name}`,
    text: `Email: ${email}\nMessage: ${message}`,
  };

  const autoReply = {
    from: process.env.EMAIL_USER,
    to: email, // auto-reply to the user
    subject: "Thanks for reaching out to PESU Talkies!",
    text: `Hey ${name},\n\nWe've received your message and will get back to you soon!\n\n🎬 PESU Talkies`,
  };

  try {
    await transporter.sendMail(mailOptions);
    await transporter.sendMail(autoReply);
    res.status(200).json({ success: true, message: "Emails sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, message: "Error sending emails" });
  }
});

// Starts the backend server.
app.listen(PORT, () => {
  console.log(`✅ Server started on port ${PORT}`);
});
