import FadeIn from "./FadeIn";

const features = [
  { icon: "🎨", title: "Art Sale", desc: "Browse and purchase original artwork" },
  { icon: "🎵", title: "Live Americana", desc: "The Rufus Jones Trio" },
  { icon: "🍷", title: "Wine", desc: "Curated wine selections" },
  { icon: "🥃", title: "Bourbon Bar", desc: "Premium bourbon tastings" },
  { icon: "🍽️", title: "Hors-d'oeuvres", desc: "Delicious bites all evening" },
  { icon: "🔨", title: "Silent Auction", desc: "Bid on exciting prizes" },
  { icon: "cigar", title: "Cigar Aficionado", desc: "For the cigar enthusiast" },
  { icon: "🐾", title: "Great Cause", desc: "Supporting animal rescues" },
];

function CigarIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="48" height="48">
      <rect x="8" y="26" width="40" height="12" rx="3" fill="#8B6914" stroke="#6B4F10" strokeWidth="1.5" />
      <rect x="8" y="26" width="8" height="12" rx="2" fill="#D4A23A" />
      <rect x="48" y="27" width="10" height="10" rx="2" fill="#C0C0C0" opacity="0.7" />
      <path d="M54 27 Q58 20 55 14 Q60 18 58 27" fill="#AAAAAA" opacity="0.5" />
      <path d="M56 27 Q62 18 58 10 Q64 16 61 27" fill="#999999" opacity="0.4" />
      <rect x="16" y="28" width="32" height="1.5" rx="0.5" fill="#A07818" opacity="0.5" />
      <rect x="16" y="33" width="32" height="1.5" rx="0.5" fill="#A07818" opacity="0.5" />
    </svg>
  );
}

export default function Entertainment() {
  return (
    <section className="features" id="entertainment">
      <FadeIn><div className="section-label">The Evening Includes</div></FadeIn>
      <FadeIn><div className="section-title">A Night to Remember</div></FadeIn>
      <FadeIn>
        <div className="section-subtitle">
          An unforgettable lineup of entertainment, food, and drink awaits.
        </div>
      </FadeIn>

      <div className="features-grid">
        {features.map((f) => (
          <FadeIn key={f.title}>
            <div className="feature-card">
              <span className="feature-icon">
                {f.icon === "cigar" ? <CigarIcon /> : f.icon}
              </span>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
