import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Section from "../components/Section";
import Card from "../components/Card";
import ScrollReveal from "../components/ScrollReveal";

// Store prices as NUMBERS (LKR per month)
const plans = [
  {
    name: "Starter",
    monthly: 4990,
    tag: "Best for beginners",
    features: [
      "Gym access",
      "Basic workout plan",
      "1 check-in per month",
      "Beginner guidance",
    ],
  },
  {
    name: "Pro",
    monthly: 8990,
    tag: "Most Popular",
    popular: true,
    features: [
      "Gym access + group classes",
      "Personalized training plan",
      "Weekly progress check-ins",
      "Nutrition guidance",
      "Form & technique support",
    ],
  },
  {
    name: "Elite (1:1)",
    monthly: 14990,
    tag: "Fastest results",
    features: [
      "1:1 personal training sessions",
      "Fully customized program",
      "Weekly plan updates",
      "Priority support",
      "Recovery & mobility guidance",
    ],
  },
];

// Sri Lanka LKR formatting
function formatLKR(amount) {
  // Example output: LKR 14,990
  return new Intl.NumberFormat("en-LK", {
    style: "currency",
    currency: "LKR",
    maximumFractionDigits: 0,
  }).format(amount);
}

export default function Pricing() {
  // "monthly" | "weekly"
  const [billing, setBilling] = useState("monthly");

  const delayClass = (i) => `revealDelay${Math.min(i + 1, 6)}`;

  const computedPlans = useMemo(() => {
    // Weekly = monthly / 4 (simple estimate for UI)
    const factor = billing === "weekly" ? 1 / 4 : 1;
    return plans.map((p) => ({
      ...p,
      price: Math.round(p.monthly * factor),
      period: billing === "weekly" ? "/week" : "/month",
    }));
  }, [billing]);

  return (
    <>
      {/* Header */}
      <div className="section" style={{ paddingTop: 90, paddingBottom: 30 }}>
        <div className="container">
          <ScrollReveal>
            <div className="glass" style={{ padding: 24 }}>
              <span className="badge">💳 Pricing</span>

              <h1 className="h1" style={{ marginTop: 12 }}>
                Choose your{" "}
                <span style={{ color: "rgba(34,197,94,0.95)" }}>plan</span>.
              </h1>

              <p className="p" style={{ maxWidth: 820, marginTop: 10 }}>
                Simple pricing. Pick a plan and start your fitness journey. If you’re not sure,
                message us and we’ll recommend the best option.
              </p>

              {/* Billing toggle */}
              <div
                className="glass"
                style={{
                  marginTop: 16,
                  padding: 10,
                  display: "inline-flex",
                  gap: 8,
                  alignItems: "center",
                }}
              >
                <button
                  className={billing === "weekly" ? "btn primary" : "btn ghost"}
                  type="button"
                  onClick={() => setBilling("weekly")}
                  style={{ padding: "10px 14px" }}
                >
                  Weekly
                </button>
                <button
                  className={billing === "monthly" ? "btn primary" : "btn ghost"}
                  type="button"
                  onClick={() => setBilling("monthly")}
                  style={{ padding: "10px 14px" }}
                >
                  Monthly
                </button>

                <span className="p" style={{ marginLeft: 6, fontSize: 13 }}>
                  {billing === "weekly"
                    ? "Weekly price is an estimate (monthly ÷ 4)."
                    : "Most members choose monthly."}
                </span>
              </div>

              <div style={{ display: "flex", gap: 12, marginTop: 16, flexWrap: "wrap" }}>
                <Link className="btn primary" to="/contact">Get a Recommendation</Link>
                <Link className="btn ghost" to="/services">View Services</Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Plans */}
      <ScrollReveal>
        <Section
          title="Membership plans"
          subtitle="Upgrade anytime. We’ll guide you to the right plan for your goal."
        >
          <div className="grid cols3">
            {computedPlans.map((p, i) => (
              <ScrollReveal key={p.name} className={delayClass(i)}>
                <div
                  className="glass card hoverGlow"
                  style={{
                    position: "relative",
                    padding: 20,
                    border: p.popular ? "1px solid rgba(34,197,94,0.35)" : undefined,
                    boxShadow: p.popular
                      ? "0 0 0 1px rgba(34,197,94,0.25), 0 0 40px rgba(34,197,94,0.12)"
                      : undefined,
                  }}
                >
                  {p.popular && (
                    <div
                      style={{
                        position: "absolute",
                        top: 14,
                        right: 14,
                        padding: "6px 10px",
                        borderRadius: 999,
                        background: "rgba(34,197,94,0.12)",
                        border: "1px solid rgba(34,197,94,0.25)",
                        fontSize: 12,
                        fontWeight: 800,
                      }}
                    >
                      ⭐ Most Popular
                    </div>
                  )}

                  <div style={{ fontWeight: 900, fontSize: 18 }}>{p.name}</div>
                  <div className="p" style={{ marginTop: 4 }}>{p.tag}</div>

                  <div style={{ marginTop: 14, display: "flex", alignItems: "baseline", gap: 8 }}>
                    <div style={{ fontSize: 28, fontWeight: 900 }}>
                      {formatLKR(p.price)}
                    </div>
                    <div className="p">{p.period}</div>
                  </div>

                  <ul style={{ marginTop: 12, paddingLeft: 18, color: "var(--muted)", lineHeight: 1.8 }}>
                    {p.features.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>

                  <div style={{ marginTop: 14, display: "flex", gap: 10, flexWrap: "wrap" }}>
                    <Link className={p.popular ? "btn primary" : "btn ghost"} to="/contact">
                      Choose {p.name}
                    </Link>
                    <Link className="btn ghost" to="/contact">
                      Ask Questions
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Section>
      </ScrollReveal>

      {/* Compare table */}
      <ScrollReveal>
        <Section title="Compare plans" subtitle="Quick overview of what you get in each plan.">
          <Card style={{ padding: 0, overflow: "hidden" }}>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 720 }}>
                <thead>
                  <tr style={{ background: "rgba(255,255,255,0.03)" }}>
                    <th style={thStyle}>Feature</th>
                    <th style={thStyle}>Starter</th>
                    <th style={thStyle}>Pro</th>
                    <th style={thStyle}>Elite (1:1)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Gym access", "✅", "✅", "✅"],
                    ["Group classes", "—", "✅", "✅"],
                    ["Personalized plan", "—", "✅", "✅"],
                    ["Weekly check-ins", "—", "✅", "✅"],
                    ["Nutrition guidance", "—", "✅", "✅"],
                    ["1:1 training sessions", "—", "—", "✅"],
                    ["Priority support", "—", "—", "✅"],
                    ["Mobility & recovery guidance", "—", "—", "✅"],
                  ].map((row) => (
                    <tr key={row[0]}>
                      <td style={tdStyleLeft}>{row[0]}</td>
                      <td style={tdStyle}>{row[1]}</td>
                      <td style={tdStyle}>{row[2]}</td>
                      <td style={tdStyle}>{row[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </Section>
      </ScrollReveal>

      {/* FAQ */}
      <ScrollReveal>
        <Section title="FAQ" subtitle="Quick answers to common questions.">
          <div className="grid cols2">
            {[
              { q: "Can I change my plan later?", a: "Yes. You can upgrade or switch plans anytime." },
              { q: "Do you offer beginner-friendly programs?", a: "Yes. We guide beginners step-by-step." },
              { q: "Is nutrition included?", a: "Nutrition guidance is included in Pro and Elite." },
              { q: "How do I start?", a: "Go to Contact and send your goal. We’ll reply quickly." },
            ].map((x, i) => (
              <ScrollReveal key={x.q} className={delayClass(i)}>
                <Card className="hoverGlow" style={{ padding: 20 }}>
                  <div style={{ fontWeight: 900 }}>{x.q}</div>
                  <div className="p">{x.a}</div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </Section>
      </ScrollReveal>

      {/* CTA */}
      <ScrollReveal>
        <Section title="Ready to start?" subtitle="Send your goal and we’ll help you choose the right plan.">
          <div
            className="glass"
            style={{
              padding: 22,
              display: "flex",
              justifyContent: "space-between",
              gap: 16,
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            <div>
              <div style={{ fontWeight: 900, fontSize: 18 }}>Get a free recommendation</div>
              <div className="p">Quick reply from UrbanFit Lanka.</div>
            </div>
            <Link className="btn primary" to="/contact">Contact UrbanFit</Link>
          </div>
        </Section>
      </ScrollReveal>
    </>
  );
}

// table styles
const thStyle = {
  textAlign: "left",
  padding: "14px 14px",
  borderBottom: "1px solid rgba(255,255,255,0.08)",
  fontSize: 13,
  opacity: 0.9,
};

const tdStyleLeft = {
  padding: "14px 14px",
  borderBottom: "1px solid rgba(255,255,255,0.08)",
  color: "var(--text)",
  opacity: 0.95,
};

const tdStyle = {
  padding: "14px 14px",
  borderBottom: "1px solid rgba(255,255,255,0.08)",
  color: "var(--muted)",
  fontWeight: 700,
};
