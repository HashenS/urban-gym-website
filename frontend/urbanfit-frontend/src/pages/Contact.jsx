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
    <div className="section" style={{ paddingTop: 60, paddingBottom: 60 }}>
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

        {/* What happens next */}
        <div style={{ marginTop: 40 }}>
          <ScrollReveal delay={200}>
            <div style={{ textAlign: "center", marginBottom: 24 }}>
              <div style={{ fontWeight: 800, fontSize: "0.9rem", color: "var(--accent)", letterSpacing: 2, textTransform: "uppercase" }}>
                The Process
              </div>
              <h2 style={{ fontSize: "1.8rem", fontWeight: 900, marginTop: 8 }}>What happens next?</h2>
            </div>

            <div className="grid cols3">
              <div className="glass" style={{ padding: 20, textAlign: "center" }}>
                <div style={{ fontSize: "1.5rem", marginBottom: 12 }}>⚡</div>
                <div style={{ fontWeight: 800, marginBottom: 6 }}>Fast Reply</div>
                <div className="p" style={{ fontSize: "0.9rem" }}>We'll get back to you within 12-24 hours.</div>
              </div>

              <div className="glass" style={{ padding: 20, textAlign: "center" }}>
                <div style={{ fontSize: "1.5rem", marginBottom: 12 }}>📋</div>
                <div style={{ fontWeight: 800, marginBottom: 6 }}>Expert Review</div>
                <div className="p" style={{ fontSize: "0.9rem" }}>A head coach will personally review your goals.</div>
              </div>

              <div className="glass" style={{ padding: 20, textAlign: "center" }}>
                <div style={{ fontSize: "1.5rem", marginBottom: 12 }}>🌱</div>
                <div style={{ fontWeight: 800, marginBottom: 6 }}>No Pressure</div>
                <div className="p" style={{ fontSize: "0.9rem" }}>We provide recommendations, the choice is yours.</div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Quick Help Note */}
        <ScrollReveal delay={400}>
          <div className="glass" style={{ marginTop: 30, padding: 16, textAlign: "center", borderStyle: "dashed", borderColor: "rgba(255,255,255,0.15)" }}>
            <div className="p" style={{ fontSize: "0.85rem", fontStyle: "italic" }}>
              <strong>Pro Tip:</strong> Include your current fitness level and your primary goal (e.g. weight loss, strength) for a much faster and more accurate recommendation! 🏋️‍♂️
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
