"use client";

import { useEffect, useState, type MouseEvent } from "react";

function scrollTo(e: MouseEvent<HTMLAnchorElement>) {
  const href = e.currentTarget.getAttribute("href");
  if (!href?.startsWith("#")) return;
  e.preventDefault();
  document.getElementById(href.slice(1))?.scrollIntoView({ behavior: "smooth" });
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={scrolled ? "scrolled" : ""}>
      <div className="nav-brand">Wooffstock</div>
      <div className="nav-links">
        <a href="#about" onClick={scrollTo}>About</a>
        <a href="#entertainment" onClick={scrollTo}>Entertainment</a>
        <a href="#music" onClick={scrollTo}>Music</a>
        <a href="#honoree" onClick={scrollTo}>Honoree</a>
        <a href="#rescues" onClick={scrollTo}>Those We Help</a>
        <a href="#news" onClick={scrollTo}>News</a>
        <a href="#tickets" className="nav-cta" onClick={scrollTo}>
          Donate
        </a>
      </div>
      <button
        className="mobile-nav-btn"
        onClick={() =>
          document
            .getElementById("tickets")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      >
        🐾 Donate
      </button>
    </nav>
  );
}
