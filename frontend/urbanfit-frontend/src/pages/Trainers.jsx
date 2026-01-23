import { Link } from "react-router-dom";
import Section from "../components/Section";
import Card from "../components/Card";
import ScrollReveal from "../components/ScrollReveal";

// ✅ Import trainer images (make sure these paths match your file names)
import nimalImg from "../assets/trainers/nimal.jpg";
import shehaniImg from "../assets/trainers/shehani.jpg";
import kasunImg from "../assets/trainers/kasun.jpg";

const trainers = [
  {
    name: "Coach Nimal",
    role: "Strength & Conditioning",
    exp: "5+ years experience",
    specialties: ["Strength", "Hypertrophy", "Athletic performance"],
    bio: "Focused on building strength safely with correct technique and smart progression.",
    img: nimalImg,
  },
  {
    name: "Coach Shehani",
    role: "Fat Loss & Mobility",
    exp: "4+ years experience",
    specialties: ["Fat loss", "Mobility", "Lifestyle coaching"],
    bio: "Helps members stay consistent with sustainable routines and recovery-focused training.",
    img: shehaniImg,
  },
  {
    name: "Coach Kasun",
    role: "Functional Training",
    exp: "6+ years experience",
    specialties: ["HIIT", "Functional fitness", "Endurance"],
    bio: "High energy sessions designed to improve fitness, stamina, and overall performance.",
    img: kasunImg,
  },
];

export default function Trainers() {
  const delayClass = (i) => `revealDelay${Math.min(i + 1, 6)}`;

  return (
    <>
      {/* Header */}
      <div className="section" style={{ paddingTop: 90, paddingBottom: 30 }}>
        <div className="container">
          <ScrollReveal>
            <div className="glass" style={{ padding: 24 }}>
              <span className="badge">👟 Trainers</span>

              <h1 className="h1" style={{ marginTop: 12 }}>
                Train with{" "}
                <span style={{ color: "rgba(34,197,94,0.95)" }}>experts</span> who care.
              </h1>

              <p className="p" style={{ maxWidth: 820, marginTop: 10 }}>
                Our coaches guide you with correct technique, structured plans,
                and consistent support — so you don’t feel lost and you actually progress.
              </p>

              <div style={{ display: "flex", gap: 12, marginTop: 16, flexWrap: "wrap" }}>
                <Link className="btn primary" to="/contact">Book a Session</Link>
                <Link className="btn ghost" to="/services">View Services</Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Trainers grid */}
      <ScrollReveal>
        <Section
          title="Meet the team"
          subtitle="Certified coaches for every goal — strength, fat loss, mobility, and performance."
        >
          <div className="grid cols3">
            {trainers.map((t, i) => (
              <ScrollReveal key={t.name} className={delayClass(i)}>
                <Card className="hoverGlow" style={{ padding: 20 }}>
                  {/* ✅ Real image */}
                  <img
                    src={t.img}
                    alt={t.name}
                    style={{
                      width: "100%",
                      height: 180,
                      objectFit: "cover",
                      borderRadius: 16,
                      marginBottom: 14,
                      border: "1px solid rgba(34,197,94,0.25)",
                    }}
                  />

                  <div style={{ fontWeight: 900, fontSize: 18 }}>{t.name}</div>
                  <div className="p" style={{ marginTop: 4 }}>
                    {t.role} • {t.exp}
                  </div>

                  <p className="p" style={{ marginTop: 10 }}>
                    {t.bio}
                  </p>

                  <div style={{ marginTop: 10, display: "flex", gap: 8, flexWrap: "wrap" }}>
                    {t.specialties.map((s) => (
                      <span
                        key={s}
                        style={{
                          padding: "6px 10px",
                          borderRadius: 999,
                          fontSize: 12,
                          fontWeight: 800,
                          color: "rgba(230,255,245,0.95)",
                          background: "rgba(34,197,94,0.10)",
                          border: "1px solid rgba(34,197,94,0.22)",
                        }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  <div style={{ marginTop: 14, display: "flex", gap: 10, flexWrap: "wrap" }}>
                    <Link className="btn ghost" to="/pricing">See Plans</Link>
                    <Link className="btn primary" to="/contact">Book</Link>
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </Section>
      </ScrollReveal>

      {/* Why coaching matters */}
      <ScrollReveal>
        <Section
          title="Why coaching matters"
          subtitle="A good plan + guidance = faster, safer results."
        >
          <div className="grid cols3">
            {[
              { t: "Correct technique", d: "Reduce injury risk and lift more effectively." },
              { t: "Structured progress", d: "Train with a plan, not random workouts." },
              { t: "Accountability", d: "Weekly check-ins keep you consistent." },
            ].map((x, i) => (
              <ScrollReveal key={x.t} className={delayClass(i)}>
                <Card className="hoverGlow" style={{ padding: 18 }}>
                  <div style={{ fontWeight: 900 }}>{x.t}</div>
                  <div className="p">{x.d}</div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </Section>
      </ScrollReveal>

      {/* CTA */}
      <ScrollReveal>
        <Section
          title="Want a trainer matched to your goal?"
          subtitle="Send your goal and we’ll connect you with the right coach."
        >
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
              <div style={{ fontWeight: 900, fontSize: 18 }}>Get started today</div>
              <div className="p">Quick reply from UrbanFit Lanka.</div>
            </div>
            <Link className="btn primary" to="/contact">Contact UrbanFit</Link>
          </div>
        </Section>
      </ScrollReveal>
    </>
  );
}
