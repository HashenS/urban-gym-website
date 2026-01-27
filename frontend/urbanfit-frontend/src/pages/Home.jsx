// src/pages/Home.jsx
import { Link } from "react-router-dom";
import Section from "../components/Section";
import Card from "../components/Card";
import ScrollReveal from "../components/ScrollReveal";
import ServiceCard from "../components/ServiceCard";

// ✅ Scroll-scrubbed video component (REPLACED BY STATIC IMAGE)
// import HeroVideo from "../components/HeroVideo";
import heroImg from "../assets/hero.png";

export default function Home() {
  const services = [
    { t: "Strength Training", d: "Progressive plans to build real muscle and power.", folder: "strength_traning", count: 31 },
    { t: "Fat Loss Programs", d: "Sustainable routines with diet guidance & tracking.", folder: "fatt_loss", count: 63 },
    { t: "Group Classes", d: "High-energy sessions to stay consistent and motivated.", folder: "group_classes", count: 42 },
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

  const delayClass = (i) => `revealDelay${Math.min(i + 1, 6)}`;

  return (
    <>
      {/* HERO */}
      <div className="section" style={{ paddingTop: 60 }}>
        <div className="container">
          <ScrollReveal>
            <div className="glass heroCover">
              {/* image behind text */}
              <img src={heroImg} className="heroAthlete" alt="Hero Athlete" />

              {/* content above image */}
              <div className="heroCoverContent">
                <span className="badge" style={{ marginBottom: 0 }}>🔥 UrbanFit Lanka • Hardcore Training</span>

                <h1 className="heroHeadlineBig" style={{ marginTop: 10 }}>
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
                <div className="grid cols3 heroStats">
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
      <Section title="Services" subtitle="Everything you need — strength, fat loss, and performance.">
        <div className="grid cols3">
          {services.map((x, i) => (
            <ScrollReveal key={x.t} className={delayClass(i)}>
              <ServiceCard
                className="hoverGlow"
                style={{ padding: 18 }}
                folderName={x.folder}
                frameCount={x.count}
              >
                <div style={{ fontWeight: 900 }}>{x.t}</div>
                <div className="p">{x.d}</div>
                <div style={{ marginTop: 10 }}>
                  <Link className="btn ghost" to="/services">
                    Explore all services
                  </Link>
                </div>
              </ServiceCard>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* TRAINERS */}
      <Section title="Trainers" subtitle="Certified coaches to guide your journey.">
        <div className="grid cols3">
          {trainers.map((x, i) => (
            <ScrollReveal key={x.n} className={delayClass(i)}>
              <Card className="hoverGlow" style={{ padding: 18 }}>
                <div style={{ fontWeight: 900 }}>{x.n}</div>
                <div className="p">{x.s}</div>
                <div style={{ marginTop: 10 }}>
                  <Link className="btn ghost" to="/trainers">
                    View Profile
                  </Link>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section
        title="Ready to start?"
        subtitle="Send us a message and we’ll recommend the best plan for you."
      >
        <ScrollReveal>
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
        </ScrollReveal>
      </Section>
    </>
  );
}
