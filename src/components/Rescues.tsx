import Image from "next/image";
import FadeIn from "./FadeIn";

const rescues = [
  { name: "ROAR", url: "https://roar-ridgefield.org", logo: "/images/roar-logo.png" },
  { name: "PawSafe", url: "https://pawsafe.org", logo: "/images/pawsafe-logo.png" },
  { name: "Adopt-A-Dog", url: "https://adopt-a-dog.org", logo: "/images/adopt-a-dog-logo.png" },
  { name: "New York Pet Rescue", url: "https://ny-petrescue.org", logo: "/images/ny-pet-rescue-logo.png" },
  { name: "SPCA Westchester", url: "https://spcawestchester.org", logo: "/images/spca-westchester-logo.png" },
];

export default function Rescues() {
  return (
    <section className="rescues" id="rescues">
      <FadeIn><div className="section-label">Our Partners</div></FadeIn>
      <FadeIn><div className="section-title">Those We Help</div></FadeIn>
      <FadeIn>
        <div className="section-subtitle">
          Your support directly benefits these incredible local animal rescue organizations.
        </div>
      </FadeIn>

      <div className="rescues-grid">
        {rescues.map((r) => (
          <FadeIn key={r.name}>
            <a href={r.url} target="_blank" rel="noopener noreferrer" className="rescue-card">
              <Image src={r.logo} alt={`${r.name} logo`} width={120} height={120} className="rescue-icon" />
              <span className="rescue-name">{r.name}</span>
              <span className="rescue-link">Visit Site →</span>
            </a>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
