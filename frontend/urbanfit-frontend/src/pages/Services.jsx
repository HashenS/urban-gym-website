import { Link } from "react-router-dom";
import Section from "../components/Section";
import Card from "../components/Card";
import ScrollReveal from "../components/ScrollReveal";

const services = [
  {
    title: "Strength Training",
    desc: "Progressive overload programs to build muscle, strength, and confidence.",
    points: ["Workout plan + progression", "Form guidance", "Tracking & weekly updates"],
  },
  {
    title: "Fat Loss Program",
    desc: "Sustainable fat loss with smart training + realistic nutrition guidance.",
    points: ["Calorie & habit guidance", "Cardio + strength mix", "Weekly check-ins"],
  },
  {
    title: "Group Classes",
    desc: "High-energy classes that make consistency easy and fun.",
    points: ["HIIT / functional", "Beginner-friendly options", "Community motivation"],
  },
  {
    title: "Personal Training (1:1)",
    desc: "1-on-1 coaching for faster results with full attention on you.",
    points: ["Custom plan", "Coach support", "Technique correction"],
  },
  {
    title: "Mobility & Recovery",
    desc: "Improve flexibility, reduce pain, and recover better.",
    points: ["Stretch routines", "Posture work", "Injury prevention basics"],
  },
  {
    title: "Nutrition Guidance",
    desc: "Simple meal planning and habits that support your goals.",
    points: ["Meal ideas", "Protein targets", "Sustainable routines"],
  },
];

export default function Services() {
  const delayClass = (i) => `revealDelay${Math.min(i + 1, 6)}`;

  return (
    <>
      {/* Page Header */}
      <div className="section" style={{ paddingTop: 90, paddingBottom: 30 }}>
        <div className="container">
          <ScrollReveal>
            <div className="glass" style={{ padding: 24 }}>
              <span className="badge">💪 Services</span>
              <h1 className="h1" style={{ marginTop: 12 }}>
                Training built for{" "}
                <span style={{ color: "rgba(34,197,94,0.95)" }}>real results</span>.
              </h1>
              <p className="p" style={{ maxWidth: 820, marginTop: 10 }}>
                Choose a plan that matches your goal — muscle, fat loss, performance, or overall fitness.
                Not sure? Send a message and we’ll recommend the best option.
              </p>

              <div style={{ display: "flex", gap: 12, marginTop: 16, flexWrap: "wrap" }}>
                <Link className="btn primary" to="/contact">Ask for a Recommendation</Link>
                <Link className="btn ghost" to="/pricing">See Pricing</Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Services Grid */}
      <ScrollReveal>
        <Section
          title="What we offer"
          subtitle="Pick what fits your lifestyle. We’ll guide you step-by-step."
        >
          <div className="grid cols3">
            {services.map((s, i) => (
         <ScrollReveal key={s.title} className={`revealDelay${i + 1}`}>
          <Card className="hoverGlow">
             <div style={{ fontWeight: 900 }}>{s.title}</div>
              <div className="p" style={{ marginTop: 6 }}>{s.desc}</div>

                  <ul style={{ marginTop: 10, paddingLeft: 18 }}>
                    {s.points.map((p => 
                      <li key={p}>{p}</li>   
                        ))}
                      </ul>

                  <div style={{ marginTop: 12 }}>
                    <Link className="btn ghost" to="/contact">Get Started</Link>
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </Section>
      </ScrollReveal>

      {/* How it works */}
      <ScrollReveal>
        <Section title="How it works" subtitle="Simple process. Clear results.">
          <div className="grid cols3">
            {[
              { t: "1) Tell us your goal", d: "Muscle, fat loss, performance, or general fitness." },
              { t: "2) Get your plan", d: "We create a program that matches your level and schedule." },
              { t: "3) Track progress", d: "Weekly check-ins and improvements as you get stronger." },
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
          title="Not sure which service to choose?"
          subtitle="Send a message — we’ll recommend the best plan for your goal."
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
              <div style={{ fontWeight: 900, fontSize: 18 }}>Free recommendation</div>
              <div className="p">Quick reply + guidance from a coach.</div>
            </div>
            <Link className="btn primary" to="/contact">Contact UrbanFit</Link>
          </div>
        </Section>
      </ScrollReveal>
    </>
  );
}
