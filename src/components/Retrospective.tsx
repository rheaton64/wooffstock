import FadeIn from "./FadeIn";

export default function Retrospective() {
  return (
    <section className="retrospective" id="looking-back">
      <FadeIn><div className="section-label">Looking Back</div></FadeIn>
      <FadeIn><div className="section-title">Our May 2026 Benefit</div></FadeIn>
      <FadeIn>
        <div className="section-subtitle">
          An evening to remember — and a record year for the rescues.
        </div>
      </FadeIn>

      <FadeIn>
        <div className="retro-text">
          <p>
            Wooffstock&apos;s second annual benefit on May 2, 2026, was a chance to enjoy a night
            out while making a real difference in the lives of animals who need our help. This
            year&apos;s event was held at the Waccabuc Country Club Carriage House and honored
            long-time local vet and animal lover, <a href="#honoree">Dr. Renee Bayha</a>. For the
            second year in a row, The Rufus Jones Trio, featuring John Osborne on piano and Eric
            Gitelson on bass, delighted the crowd with their Americana music. They set the perfect
            mood for an evening featuring fine wine, an art sale, a bourbon bar, a cigar
            aficionado, and a silent auction — all in support of local animal rescues.
          </p>
          <p>
            We were humbled by the response from our community — the event sold out and raised
            $25,000 for local animal rescues!
          </p>
        </div>
      </FadeIn>

      <FadeIn>
        <div className="retro-stats">
          <div className="retro-stat">
            <span className="retro-stat-number">Sold Out</span>
            <span className="retro-stat-label">Every Ticket Claimed</span>
          </div>
          <div className="retro-stat-divider" />
          <div className="retro-stat">
            <span className="retro-stat-number">$25,000</span>
            <span className="retro-stat-label">Raised for Local Animal Rescues</span>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
