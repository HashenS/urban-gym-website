const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// connect MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.log("❌ MongoDB error:", err));

// Contact Schema (blueprint)
const ContactSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true },
  phone: { type: String, default: "", trim: true },
  subject: { type: String, default: "", trim: true },
  message: { type: String, required: true, trim: true },
  createdAt: { type: Date, default: Date.now },
});

const Contact = mongoose.model("Contact", ContactSchema);

// test route
app.get("/", (req, res) => {
  res.send("UrbanFit API is running 🚀");
});

// save contact message
app.post("/contact", async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    // simple validation
    if (!name || !email || !message) {
      return res.status(400).json({ ok: false, msg: "Name, Email, Message are required" });
    }

    await Contact.create({ name, email, phone, subject, message });
    return res.json({ ok: true, msg: "✅ Message Sent!" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ ok: false, msg: "❌ Server error" });
  }
});
// get all contact messages (newest first)
app.get("/contacts", async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    res.json({ ok: true, messages });
  } catch (err) {
    console.log(err);
    res.status(500).json({ ok: false, msg: "Server error" });
  }
});
// delete a contact message by id
app.delete("/contacts/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await Contact.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ ok: false, msg: "Message not found" });
    }

    res.json({ ok: true, msg: "✅ Message deleted" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ ok: false, msg: "Server error" });
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
