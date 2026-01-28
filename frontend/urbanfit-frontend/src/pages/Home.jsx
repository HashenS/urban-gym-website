import { useState, useEffect, useRef, useMemo } from "react";
import { Link } from "react-router-dom";
import Section from "../components/Section";
import Card from "../components/Card";
import ServiceCard from "../components/ServiceCard";
import TrainerCard from "../components/TrainerCard";
import ScrollReveal from "../components/ScrollReveal";
import ExplodingButton from "../components/ExplodingButton";

// Trainer Images
import nimalImg from "../assets/trainers/nimal.jpg";
import shehaniImg from "../assets/trainers/shehani.jpg";
import kasunImg from "../assets/trainers/kasun.jpg";

export default function Home() {
  const canvasRef = useRef(null);
  const frameCount = 240;
  const imagesRef = useRef([]);
  const frameIndexRef = useRef(0);
  const lastTimeRef = useRef(0);

  // Preload frames
  useEffect(() => {
    const frames = Array.from({ length: frameCount }, (_, i) => {
      const frameNumber = String(i + 1).padStart(3, "0");
      return new URL(`../assets/video_frames/heroo/ezgif-frame-${frameNumber}.jpg`, import.meta.url).href;
    });

    const loadedImages = frames.map((src) => {
      const img = new Image();
      img.src = src;
      return img;
    });
    imagesRef.current = loadedImages;

    // Animation Loop
    const animate = (time) => {
      if (time - lastTimeRef.current >= 40) { // ~25fps
        lastTimeRef.current = time;
        const canvas = canvasRef.current;
        if (canvas) {
          const ctx = canvas.getContext("2d");
          const img = imagesRef.current[frameIndexRef.current];
          if (img && img.complete) {
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
          }
          frameIndexRef.current = (frameIndexRef.current + 1) % frameCount;
        }
      }
      requestAnimationFrame(animate);
    };

    const requestId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestId);
  }, []);

  const services = [
    { t: "Strength Training", d: "Progressive plans to build real muscle and power.", folder: "strength_traning", count: 31 },
    { t: "Fat Loss Programs", d: "Sustainable routines with diet guidance & tracking.", folder: "fatt_loss", count: 63 },
    { t: "Group Classes", d: "High-energy sessions to stay consistent and motivated.", folder: "group_classes", count: 42 },
  ];

  const trainers = [
    { n: "Coach Nimal", s: "Strength & Conditioning", img: nimalImg },
    { n: "Coach Shehani", s: "Fat Loss & Mobility", img: shehaniImg },
    { n: "Coach Kasun", s: "Athletic Performance", img: kasunImg },
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
              {/* High-performance Canvas animation (no flicker) */}
              <canvas
                ref={canvasRef}
                className="heroAthlete"
                width={1280} // Base resolution
                height={720}
                style={{
                  filter: "blur(8px)",
                  transform: "scale(1.1)", // Slight scale to hide edge artifacts from blur
                }}
              />

              {/* content above image */}
              <div className="heroCoverContent">

                <h1 className="heroHeadlineBig">
                  Train harder.{" "}
                  <span style={{ color: "rgba(34,197,94,0.95)" }}>Look better.</span>
                  <br /> Feel unstoppable.
                </h1>

                <p className="p" style={{ maxWidth: 760, marginTop: 12 }}>
                  Personalized fitness plans, expert coaching, and a community built for results.
                  Start your transformation with UrbanFit Lanka today.
                </p>

                <div className="button-group-mobile" style={{ display: "flex", gap: 16, marginTop: 16, flexWrap: "wrap" }}>
                  <ExplodingButton to="/contact">
                    Get a Free Consultation
                  </ExplodingButton>
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
                <Link className="btn ghost" to="/services">
                  Explore all services
                </Link>
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
              <TrainerCard
                name={x.n}
                specialty={x.s}
                image={x.img}
                className="hoverGlow"
              >
                <Link className="btn ghost" to="/trainers" style={{ color: "#fff", borderColor: "rgba(255,255,255,0.2)" }}>
                  View Profile
                </Link>
              </TrainerCard>
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
          <div className="glass cta-box">
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
