import { Link } from "react-router-dom";
import Section from "../components/Section";
import Card from "../components/Card";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <div className="section" style={{ paddingTop: 90 }}>
        <div className="container">
          <div className="glass" style={{ padding: 28 }}>
            <span className="badge">🔥 UrbanFit Lanka • Hardcore Training</span>

            <h1 className="h1" style={{ marginTop: 14 }}>
              Train harder. <span style={{ color: "rgba(34,197,94,0.95)" }}>Look better.</span>
              <br /> Feel unstoppable.
            </h1>

            <p className="p" style={{ maxWidth: 760, marginTop: 12 }}>
              Personalized fitness plans, expert coaching, and a community built for results.
              Start your transformation with UrbanFit Lanka today.
            </p>

            <div style={{ display: "flex", gap: 12, marginTop: 16, flexWrap: "wrap" }}>
              <Link className="btn primary" to="/contact">Get a Free Consultation</Link>
              <Link className="btn ghost" to="/pricing">See Plans</Link>
            </div>

            {/* Quick stats */}
            <div className="grid cols3" style={{ marginTop: 18 }}>
              <Card>
                <div style={{ fontWeight: 900, fontSize: 18 }}>+500</div>
                <div className="p">Members trained</div>
              </Card>
              <Card>
                <div style={{ fontWeight: 900, fontSize: 18 }}>7 Days</div>
                <div className="p">Weekly programs</div>
              </Card>
              <Card>
                <div style={{ fontWeight: 900, fontSize: 18 }}>1:1</div>
                <div className="p">Personal coaching</div>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* SERVICES */}
      <Section
        title="Services"
        subtitle="Everything you need — strength, fat loss, and performance."
      >
        <div className="grid cols3">
          {[
            { t: "Strength Training", d: "Progressive plans to build real muscle and power." },
            { t: "Fat Loss Programs", d: "Sustainable routines with diet guidance & tracking." },
            { t: "Group Classes", d: "High-energy sessions to stay consistent and motivated." },
          ].map((x) => (
            <Card key={x.t}>
              <div style={{ fontWeight: 900 }}>{x.t}</div>
              <div className="p">{x.d}</div>
            </Card>
          ))}
        </div>
      </Section>

      {/* TRAINERS */}
      <Section
        title="Trainers"
        subtitle="Certified coaches to guide your journey."
      >
        <div className="grid cols3">
          {[
            { n: "Coach Nimal", s: "Strength & Conditioning" },
            { n: "Coach Shehani", s: "Fat Loss & Mobility" },
            { n: "Coach Kasun", s: "Athletic Performance" },
          ].map((x) => (
            <Card key={x.n}>
              <div style={{ fontWeight: 900 }}>{x.n}</div>
              <div className="p">{x.s}</div>
              <div style={{ marginTop: 10 }}>
                <Link className="btn ghost" to="/trainers">View Profile</Link>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section
        title="Ready to start?"
        subtitle="Send us a message and we’ll recommend the best plan for you."
      >
        <div className="glass" style={{ padding: 22, display: "flex", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
          <div>
            <div style={{ fontWeight: 900, fontSize: 18 }}>Get your free consultation</div>
            <div className="p">We reply fast. Let’s build your plan.</div>
          </div>
          <Link className="btn primary" to="/contact">Contact UrbanFit</Link>
        </div>
      </Section>
    </>
  );
}
