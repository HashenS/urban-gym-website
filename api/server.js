const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

// middleware
app.use(cors());
app.use(express.json());

const nodemailer = require("nodemailer");

// email transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// test route
app.get("/", (req, res) => {
  res.send("UrbanFit API is running (Email mode) 🚀");
});

// send contact email
app.post("/contact", async (req, res) => {
  try {
    const { name, email, phone, subject, message, sendCopy } = req.body;

    // simple validation
    if (!name || !email || !message) {
      return res.status(400).json({ ok: false, msg: "Name, Email, Message are required" });
    }

    // --- Build Professional Email Template ---
    const emailHeader = `
      <div style="background: #05070b; color: #e9f0ff; padding: 40px 20px; font-family: sans-serif; border-radius: 12px 12px 0 0; text-align: center; border-bottom: 2px solid #22c55e;">
        <h1 style="margin: 0; font-size: 28px; letter-spacing: -1px;">UrbanFit <span style="color: #22c55e;">Lanka</span></h1>
        <p style="margin: 10px 0 0; color: #a7b2c7; font-size: 14px; text-transform: uppercase; letter-spacing: 2px;">Train Smart. Stay Strong. Level Up.</p>
      </div>
    `;

    const emailBody = `
      <div style="padding: 30px; background: #070b12; color: #e9f0ff; font-family: sans-serif; line-height: 1.6;">
        <h2 style="color: #22c55e; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 10px;">New Message from ${name}</h2>
        <p><strong>Subject:</strong> ${subject || "General Inquiry"}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Email:</strong> ${email}</p>
        <div style="margin-top: 20px; padding: 15px; background: rgba(255,255,255,0.05); border-left: 4px solid #22c55e; border-radius: 4px;">
          <p style="margin: 0; color: #a7b2c7; font-style: italic;">Message:</p>
          <p style="margin-top: 5px;">${message}</p>
        </div>
      </div>
    `;

    const emailFooter = `
      <div style="background: #05070b; color: #a7b2c7; padding: 20px; text-align: center; font-family: sans-serif; font-size: 12px; border-radius: 0 0 12px 12px;">
        © ${new Date().getFullYear()} UrbanFit Lanka. All rights reserved. <br/>
        This is an automated notification from your website.
      </div>
    `;

    // 1. Send to Site Owner
    await transporter.sendMail({
      from: `"UrbanFit Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `🏋️‍♂️ New Message: ${subject || "Contact Form"}`,
      html: `
        <div style="max-width: 600px; margin: 0 auto; border: 1px solid #22c55e; border-radius: 14px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
          ${emailHeader}
          ${emailBody}
          ${emailFooter}
        </div>
      `,
    });

    // 2. Optional: Send copy to User
    if (sendCopy) {
      await transporter.sendMail({
        from: `"UrbanFit Lanka" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: `Your Message to UrbanFit Lanka`,
        html: `
          <div style="max-width: 600px; margin: 0 auto; border: 1px solid #22c55e; border-radius: 14px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
            <div style="background: #05070b; color: #e9f0ff; padding: 40px 20px; font-family: sans-serif; border-radius: 12px 12px 0 0; text-align: center; border-bottom: 2px solid #22c55e;">
              <h1 style="margin: 0; font-size: 28px; letter-spacing: -1px;">UrbanFit <span style="color: #22c55e;">Lanka</span></h1>
              <p style="margin: 10px 0 0; color: #22c55e; font-weight: bold;">Message Received!</p>
            </div>
            <div style="padding: 30px; background: #070b12; color: #e9f0ff; font-family: sans-serif; line-height: 1.6;">
              <p>Hi ${name},</p>
              <p>Thanks for reaching out! We've received your message and our team will get back to you within 24 hours.</p>
              <p style="color: #a7b2c7;">Here is a copy of your inquiry:</p>
              <div style="margin-top: 10px; padding: 15px; background: rgba(255,255,255,0.05); border-left: 4px solid #22c55e; border-radius: 4px;">
                <p style="margin: 0;"><strong>Subject:</strong> ${subject || "General Inquiry"}</p>
                <p style="margin-top: 5px;">${message}</p>
              </div>
            </div>
            ${emailFooter}
          </div>
        `,
      });
    }

    return res.json({ ok: true, msg: "✅ Message Sent & Email Delivered!" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ ok: false, msg: "❌ Server error or Email failed" });
  }
});

// start server (only if NOT on Vercel)
if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
  });
}

// Export for Vercel
module.exports = app;
