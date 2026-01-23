import { Link } from "react-router-dom";
import Section from "../components/Section";
import Card from "../components/Card";
import ScrollReveal from "../components/ScrollReveal";
import FloatingIcons from "../components/FloatingIcons";

export default function Home() {
  const services = [
    { t: "Strength Training", d: "Progressive plans to build real muscle and power." },
    { t: "Fat Loss Programs", d: "Sustainable routines with diet guidance & tracking." },
    { t: "Group Classes", d: "High-energy sessions to stay consistent and motivated." },
  ];

  const trainers = [
    { n: "Coach Nimal", s: "Strength & Conditioning" },
    { n: "Coach Shehani", s: "Fat Loss & Mobility" },
    { n: "Coach Kasun", s: "Athletic Performance" },
  ];

  const stats = [
    { big: "+500", small: "Members trained" },
    { big: "7 Days", small: "Weekly programs" },
    { big: "1:1", small: "Personal coaching" },
  ];

  // uses your CSS classes: revealDelay1..revealDelay6
  const delayClass = (i) => `revealDelay${Math.min(i + 1, 6)}`;

  return (
    <>
      {/* HERO */}
      <div className="section" style={{ paddingTop: 90 }}>
        <div className="container">
          <ScrollReveal>
            <div
              className="glass"
              style={{
                padding: 28,
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Background animated icons */}
              <FloatingIcons />

              {/* Keep content above icons */}
              <div style={{ position: "relative", zIndex: 1 }}>
                <span className="badge">🔥 UrbanFit Lanka • Hardcore Training</span>

                <h1 className="h1" style={{ marginTop: 14 }}>
                  Train harder.{" "}
                  <span style={{ color: "rgba(34,197,94,0.95)" }}>Look better.</span>
                  <br /> Feel unstoppable.
                </h1>

                <p className="p" style={{ maxWidth: 760, marginTop: 12 }}>
                  Personalized fitness plans, expert coaching, and a community built for results.
                  Start your transformation with UrbanFit Lanka today.
                </p>

                <div style={{ display: "flex", gap: 12, marginTop: 16, flexWrap: "wrap" }}>
                  <Link className="btn primary" to="/contact">
                    Get a Free Consultation
                  </Link>
                  <Link className="btn ghost" to="/pricing">
                    See Plans
                  </Link>
                </div>

                {/* Quick stats */}
                <div className="grid cols3" style={{ marginTop: 18 }}>
                  {stats.map((x, i) => (
                    <ScrollReveal key={x.big} className={delayClass(i)}>
                      <Card className="hoverGlow" style={{ padding: 18 }}>
                        <div style={{ fontWeight: 900, fontSize: 18 }}>{x.big}</div>
                        <div className="p">{x.small}</div>
                      </Card>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* SERVICES */}
      <ScrollReveal>
        <Section
          title="Services"
          subtitle="Everything you need — strength, fat loss, and performance."
        >
          <div className="grid cols3">
            {services.map((x, i) => (
              <ScrollReveal key={x.t} className={delayClass(i)}>
                <Card className="hoverGlow" style={{ padding: 18 }}>
                  <div style={{ fontWeight: 900 }}>{x.t}</div>
                  <div className="p">{x.d}</div>

                  <div style={{ marginTop: 10 }}>
                    <Link className="btn ghost" to="/services">
                      Explore all services
                    </Link>
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </Section>
      </ScrollReveal>

      {/* TRAINERS */}
      <ScrollReveal>
        <Section title="Trainers" subtitle="Certified coaches to guide your journey.">
          <div className="grid cols3">
            {trainers.map((x, i) => (
              <ScrollReveal key={x.n} className={delayClass(i)}>
                <Card className="hoverGlow" style={{ padding: 18 }}>
                  <div style={{ fontWeight: 900 }}>{x.n}</div>
                  <div className="p">{x.s}</div>

                  <div style={{ marginTop: 10, display: "flex", gap: 10, flexWrap: "wrap" }}>
                    <Link className="btn ghost" to="/trainers">
                      View Profile
                    </Link>
                    <Link className="btn primary" to="/contact">
                      Book
                    </Link>
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </Section>
      </ScrollReveal>

      {/* CTA */}
      <ScrollReveal>
        <Section
          title="Ready to start?"
          subtitle="Send us a message and we’ll recommend the best plan for you."
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
              <div style={{ fontWeight: 900, fontSize: 18 }}>Get your free consultation</div>
              <div className="p">We reply fast. Let’s build your plan.</div>
            </div>
            <Link className="btn primary" to="/contact">
              Contact UrbanFit
            </Link>
          </div>
        </Section>
      </ScrollReveal>
    </>
  );
}
