import FadeIn from "./FadeIn";

export default function About() {
  return (
    <section className="about" id="about">
      <FadeIn><div className="section-label">Who We Are</div></FadeIn>
      <FadeIn><div className="section-title">About Wooffstock</div></FadeIn>
      <FadeIn>
        <div className="about-belief">
          We believe all animals deserve a safe and loving home.
        </div>
      </FadeIn>

      <div className="about-grid">
        <FadeIn>
          <div className="about-text">
            <p>
              Through the partnership of Wooffstock Press and the Pound Ridge Community Church, we held
              our first Adoption Day and Blessing of the Animals in September 2024. We have since grown
              to support five local animal rescues, have hosted two evening benefits, and are about to
              host our third annual Adoption and Blessing Day on October 4, 2026.
            </p>
            <p>
              We strive to help support local shelters in their mission to save, rehabilitate, and
              find forever homes for animals in need.
            </p>
          </div>
        </FadeIn>
        <FadeIn>
          <div className="about-highlight">
            <h3>100% to the Rescues</h3>
            <p>
              We are entirely volunteer run, and 100% of profits raised go directly to our local
              rescue partners.
            </p>
          </div>
        </FadeIn>
      </div>

      <FadeIn>
        <div
          style={{
            textAlign: "center",
            marginTop: "2.5rem",
            paddingTop: "1.5rem",
            borderTop: "1px solid rgba(212,162,58,0.25)",
          }}
        >
          <p style={{ fontFamily: "var(--font-sacramento), 'Sacramento', cursive", fontSize: "1.4rem", color: "var(--gold)", marginBottom: "0.5rem" }}>
            Lovingly organized by our Planning Committee
          </p>
          <p style={{ fontSize: "0.95rem", color: "var(--charcoal)", letterSpacing: "0.03em" }}>
            Nadine Ashby · Nancy Heaton · Laura Prichard
          </p>
        </div>
      </FadeIn>
    </section>
  );
}
