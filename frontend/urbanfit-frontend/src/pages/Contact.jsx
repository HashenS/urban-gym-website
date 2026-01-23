import { useState } from "react";

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
    e.preventDefault();
    setLoading(true);
    setMsg("");

    try {
    const res = await fetch(`${API}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
    });

      const data = await res.json();
      setMsg(data.msg || "Done");

      if (data.ok) {
        setForm({ name: "", email: "", phone: "", subject: "", message: "" });
      }
    } catch (err) {
      setMsg("Backend not running ❌");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="section">
      <div className="container">
        <div className="glass" style={{ padding: 22 }}>
          <h1 className="h1">Contact Us</h1>
          <p className="p">Send an inquiry. We’ll reply soon.</p>

          <form onSubmit={onSubmit} className="grid cols2" style={{ marginTop: 14 }}>
            <input className="input" name="name" placeholder="Name" value={form.name} onChange={onChange} required />
            <input className="input" name="email" placeholder="Email" value={form.email} onChange={onChange} required />
            <input className="input" name="phone" placeholder="Phone" value={form.phone} onChange={onChange} />
            <input className="input" name="subject" placeholder="Subject" value={form.subject} onChange={onChange} />
            <textarea
              className="input"
              name="message"
              placeholder="Message"
              value={form.message}
              onChange={onChange}
              required
              style={{ gridColumn: "1 / -1", minHeight: 120 }}
            />

            <button className="btn primary" disabled={loading} style={{ gridColumn: "1 / -1" }}>
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>

          {msg && <p className="p" style={{ marginTop: 12 }}>{msg}</p>}
        </div>
      </div>
    </div>
  );
}
