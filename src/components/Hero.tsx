"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero">
      <div className="music-note" style={{ top: "15%", left: "10%" }}>♪</div>
      <div className="music-note" style={{ top: "25%", right: "12%" }}>♫</div>
      <div className="music-note" style={{ bottom: "20%", left: "15%" }}>♩</div>
      <div className="music-note" style={{ bottom: "30%", right: "8%" }}>♬</div>

      <div className="paw-bg" style={{ top: "12%", left: "8%" }}>🐾</div>
      <div className="paw-bg" style={{ top: "35%", right: "6%", animationDelay: "-3s" }}>🐾</div>
      <div className="paw-bg" style={{ bottom: "15%", left: "20%", animationDelay: "-5s" }}>🐾</div>
      <div className="paw-bg" style={{ bottom: "25%", right: "18%", animationDelay: "-2s" }}>🐾</div>

      <h1 className="sr-only">Wooffstock</h1>
      <Image
        src="/images/wooffstock-lockup.png"
        alt="Wooffstock — a cat and dog playing on the neck of a guitar"
        width={1512}
        height={579}
        className="hero-lockup"
        priority
      />

      <p className="hero-event-title">
        Presents our 3rd Annual{" "}
        <span className="hero-event-name">
          Rescue Pet Adoption Day
          <span className="hero-event-and">and</span>
          Blessing of the Animals
        </span>
      </p>

      <p className="hero-artist">
        Guest Musical Artist —{" "}
        <span style={{ whiteSpace: "nowrap" }}>Alex Cano</span>
      </p>

      <div className="hero-details">
        <div className="hero-detail">
          <span className="label">Date</span>
          <span className="value">Sunday, October 4th</span>
        </div>
        <div className="hero-divider" />
        <div className="hero-detail">
          <span className="label">Time</span>
          <span className="value">1:00 – 4:00 PM</span>
        </div>
        <div className="hero-divider" />
        <div className="hero-detail">
          <span className="label">Venue</span>
          <span className="value">Pound Ridge Community Church</span>
        </div>
      </div>

      <p className="hero-free">Free admission — all are welcome!</p>

      <a
        href="#tickets"
        className="hero-cta"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById("tickets")?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        Make a Donation
      </a>
    </section>
  );
}
