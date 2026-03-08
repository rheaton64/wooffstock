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

      <Image
        src="/images/logo.jpg"
        alt="Wooffstock Logo"
        width={220}
        height={220}
        className="hero-logo"
        priority
      />

      <h1>Wooffstock</h1>
      <p className="hero-subtitle" style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}>
        Presents an evening to benefit{" "}<span style={{ fontWeight: 900, letterSpacing: "1px", marginLeft: "6px" }}>Local Animal Rescues</span>
      </p>
      <p className="hero-subtitle" style={{ marginTop: "-16px" }}>
        Honoring Dr. Renee Bayha
      </p>

      <div className="hero-details">
        <div className="hero-detail">
          <span className="label">Date</span>
          <span className="value">Saturday, May 2nd</span>
        </div>
        <div className="hero-divider" />
        <div className="hero-detail">
          <span className="label">Time</span>
          <span className="value">7:00 – 9:30 PM</span>
        </div>
        <div className="hero-divider" />
        <div className="hero-detail">
          <span className="label">Venue</span>
          <span className="value">Waccabuc Country Club Carriage House, Waccabuc, NY</span>
        </div>
      </div>

      <a
        href="#tickets"
        className="hero-cta"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById("tickets")?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        Get Your Tickets
      </a>
    </section>
  );
}
