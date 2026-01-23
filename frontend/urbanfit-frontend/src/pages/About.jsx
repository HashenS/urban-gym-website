import { Link } from "react-router-dom";
import Section from "../components/Section";
import Card from "../components/Card";
import ScrollReveal from "../components/ScrollReveal";

export default function About() {
  const delayClass = (i) => `revealDelay${Math.min(i + 1, 6)}`;

  const values = [
    { t: "Discipline", d: "Small habits every day create big results." },
    { t: "Technique", d: "Train smart and safe — form always matters." },
    { t: "Consistency", d: "Progress is built by showing up again and again." },
  ];

  return (
    <>
      {/* Header */}
      <div className="section" style={{ paddingTop: 90, paddingBottom: 30 }}>
        <div className="container">
          <ScrollReveal>
            <div className="glass" style={{ padding: 24 }}>
              <span className="badge">🏋️ About UrbanFit</span>

              <h1 className="h1" style={{ marginTop: 12 }}>
                Built for{" "}
                <span style={{ color: "rgba(34,197,94,0.95)" }}>real people</span>{" "}
                who want real results.
              </h1>

              <p className="p" style={{ maxWidth: 860, marginTop: 10 }}>
                UrbanFit Lanka is a fitness community focused on strength, fat loss,
                and performance — with coaching that’s simple, structured, and sustainable.
              </p>

              <div style={{ display: "flex", gap: 12, marginTop: 16, flexWrap: "wrap" }}>
                <Link className="btn primary" to="/contact">Talk to a Coach</Link>
                <Link className="btn ghost" to="/services">View Services</Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Story */}
      <ScrollReveal>
        <Section
          title="Our story"
          subtitle="A modern gym-style training experience — without the confusion."
        >
          <div className="grid cols2">
            <Card className="hoverGlow" style={{ padding: 18 }}>
              <div style={{ fontWeight: 900, fontSize: 16 }}>Why we started</div>
              <p className="p" style={{ marginTop: 8 }}>
                Many people quit because training feels complicated. We built UrbanFit to make
                fitness clear: a plan, a coach, and consistent progress.
              </p>
            </Card>

            <Card className="hoverGlow" style={{ padding: 18 }}>
              <div style={{ fontWeight: 900, fontSize: 16 }}>What we believe</div>
              <p className="p" style={{ marginTop: 8 }}>
                You don’t need perfection. You need direction, accountability, and smart training.
                Results come from consistent effort over time.
              </p>
            </Card>
          </div>
        </Section>
      </ScrollReveal>

      {/* Values */}
      <ScrollReveal>
        <Section
          title="Our values"
          subtitle="These are the principles we coach with."
        >
          <div className="grid cols3">
            {values.map((v, i) => (
              <ScrollReveal key={v.t} className={delayClass(i)}>
                <Card className="hoverGlow" style={{ padding: 18 }}>
                  <div style={{ fontWeight: 900 }}>{v.t}</div>
                  <div className="p">{v.d}</div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </Section>
      </ScrollReveal>

      {/* CTA */}
      <ScrollReveal>
        <Section
          title="Ready to transform?"
          subtitle="Tell us your goal — we’ll suggest the best plan."
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
              <div style={{ fontWeight: 900, fontSize: 18 }}>Start today</div>
              <div className="p">Fast reply • Friendly coaching • Clear plan</div>
            </div>
            <Link className="btn primary" to="/contact">Contact UrbanFit</Link>
          </div>
        </Section>
      </ScrollReveal>
    </>
  );
}
