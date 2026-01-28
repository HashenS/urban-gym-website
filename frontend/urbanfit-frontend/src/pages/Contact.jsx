import { useState } from "react";
import ScrollReveal from "../components/ScrollReveal";
import ExplodingButton from "../components/ExplodingButton";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const API = import.meta.env.VITE_API_URL;
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  function onChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function onSubmit(e) {
    if (e) e.preventDefault();
    setLoading(true);
    setMsg("");

    try {
      const res = await fetch(`${API}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      setMsg(data.msg || "Message sent successfully!");

      if (data.ok) {
        setForm({ name: "", email: "", phone: "", subject: "", message: "" });
      }
    } catch (err) {
      setMsg("Backend services currently unavailable. ❌");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="section" style={{ minHeight: "80vh", display: "flex", alignItems: "center" }}>
      <div className="container small">
        <ScrollReveal>
          <div className="glass contactCard" style={{ padding: "40px 30px" }}>
            <div style={{ textAlign: "center", marginBottom: 30 }}>
              <h1 className="h1" style={{ fontSize: "2.5rem" }}>Connect With Us</h1>
              <p className="p" style={{ fontSize: "1.1rem" }}>Ready to transform? Send us a message and we'll get you started.</p>
            </div>

            <form onSubmit={onSubmit} className="grid cols2">
              <div className="formGroup">
                <input className="input glassInput" name="name" placeholder="Full Name" value={form.name} onChange={onChange} required />
              </div>
              <div className="formGroup">
                <input className="input glassInput" name="email" placeholder="Email Address" type="email" value={form.email} onChange={onChange} required />
              </div>
              <div className="formGroup">
                <input className="input glassInput" name="phone" placeholder="Phone Number" value={form.phone} onChange={onChange} />
              </div>
              <div className="formGroup">
                <input className="input glassInput" name="subject" placeholder="Subject" value={form.subject} onChange={onChange} />
              </div>
              <textarea
                className="input glassInput"
                name="message"
                placeholder="How can we help you reach your goals?"
                value={form.message}
                onChange={onChange}
                required
                style={{ gridColumn: "1 / -1", minHeight: 150 }}
              />

              <div style={{ gridColumn: "1 / -1", textAlign: "center", marginTop: 10 }}>
                <ExplodingButton
                  to="/contact"
                  className="w-full"
                  onClick={(e) => {
                    e.preventDefault();
                    onSubmit();
                  }}
                >
                  {loading ? "Processing..." : "Send"}
                </ExplodingButton>
              </div>
            </form>

            {msg && (
              <div style={{
                marginTop: 20,
                textAlign: "center",
                padding: 12,
                borderRadius: 8,
                background: msg.includes("❌") ? "rgba(239, 68, 68, 0.1)" : "rgba(34, 197, 94, 0.1)",
                color: msg.includes("❌") ? "#ef4444" : "#22c55e",
                border: msg.includes("❌") ? "1px solid rgba(239, 68, 68, 0.2)" : "1px solid rgba(34, 197, 94, 0.2)"
              }}>
                {msg}
              </div>
            )}
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
