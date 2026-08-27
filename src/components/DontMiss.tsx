import Image from "next/image";
import FadeIn from "./FadeIn";

export default function DontMiss() {
  return (
    <section className="dont-miss" id="dont-miss">
      <FadeIn><div className="section-label">October 4th</div></FadeIn>
      <FadeIn><div className="section-title">Don&apos;t Miss</div></FadeIn>
      <FadeIn>
        <div className="section-subtitle">
          Live music, face painting, and fun for the whole family.
        </div>
      </FadeIn>

      <div className="dm-grid">
        <FadeIn>
          <div className="dm-card">
            <div className="dm-photos">
              <Image
                src="/images/alex-cano-1.jpg"
                alt="Alex Cano standing at sunset"
                width={2000}
                height={2000}
                className="dm-photo"
              />
              <Image
                src="/images/alex-cano-2.jpg"
                alt="Alex Cano playing acoustic guitar by the water"
                width={2000}
                height={2000}
                className="dm-photo"
              />
            </div>
            <h3 className="dm-name">Alex Cano</h3>
            <div className="dm-role">Guest Musical Artist</div>
            <p className="dm-desc">
              Singer-songwriter Alex Cano brings his soulful acoustic sound to the
              Blessing of the Animals.
            </p>
            <a
              className="dm-link"
              href="https://www.facebook.com/alexcanomusic"
              target="_blank"
              rel="noopener noreferrer"
            >
              Follow Alex on Facebook →
            </a>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="dm-card">
            <div className="dm-photos">
              <Image
                src="/images/mia-ayala-logo.webp"
                alt="Mia Ayala, Artist — paint splatter logo"
                width={1016}
                height={798}
                className="dm-photo dm-photo-card"
              />
            </div>
            <h3 className="dm-name">Mia Ayala</h3>
            <div className="dm-role">Face Painter</div>
            <p className="dm-desc">
              Artist Mia Ayala will be painting faces all afternoon — for kids of
              all ages!
            </p>
            <a
              className="dm-link"
              href="https://www.instagram.com/miaxayala_art"
              target="_blank"
              rel="noopener noreferrer"
            >
              Follow Mia on Instagram @miaxayala_art →
            </a>
          </div>
        </FadeIn>
      </div>

      <FadeIn>
        <p className="dm-extra">Plus tie dye, food, and fun — see you there! 🐾</p>
      </FadeIn>
    </section>
  );
}
