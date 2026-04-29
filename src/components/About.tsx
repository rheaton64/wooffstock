import FadeIn from "./FadeIn";

export default function About() {
  return (
    <section className="about" id="about">
      <FadeIn><div className="section-label">About the Event</div></FadeIn>
      <FadeIn><div className="section-title">An Evening for a Cause</div></FadeIn>
      <FadeIn>
        <div className="section-subtitle">
          Join us for a magical night of art, music, and community — all to support our furry friends in need.
        </div>
      </FadeIn>

      <div className="about-grid">
        <FadeIn>
          <div className="about-text">
            <p>
              Wooffstock is a one-of-a-kind fundraiser bringing together the community for an evening of live Americana, an
              art sale, fine wine, a bourbon bar, cigar aficionado, hors-d&apos;oeuvres, and a silent auction — all in
              support of local animal rescues.
            </p>
            <p>
              This year&apos;s event will be held at the Waccabuc Country Club Carriage House, and is your chance to
              enjoy a wonderful night out while making a real difference in the lives of animals who need our help.
            </p>
          </div>
        </FadeIn>
        <FadeIn>
          <div className="about-highlight">
            <h3>Every Ticket Saves Lives</h3>
            <p>
              100% of the proceeds from Wooffstock go directly to supporting animal rescues. Your ticket isn&apos;t just
              an evening out — it&apos;s a lifeline for animals in need of loving homes.
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
          <p style={{ fontSize: "0.95rem", color: "var(--charcoal)", letterSpacing: "0.03em", marginBottom: "0.2rem" }}>
            Nadine Ashby · Nancy Heaton · Laura Prichard · Betsy Ronel
          </p>
          <p style={{ fontSize: "0.95rem", color: "var(--charcoal)", letterSpacing: "0.03em" }}>
            Stacy Brunner · Liz Gossett · Ryan Heaton · Lily Moss · Elisabeth Post-Marner
          </p>
        </div>
      </FadeIn>
    </section>
  );
}
