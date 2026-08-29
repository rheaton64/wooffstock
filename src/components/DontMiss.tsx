import Image from "next/image";
import FadeIn from "./FadeIn";

export default function DontMiss() {
  return (
    <section className="dont-miss" id="dont-miss">
      <FadeIn><div className="section-label">October 4th</div></FadeIn>
      <FadeIn><div className="section-title">Don&apos;t Miss</div></FadeIn>

      <FadeIn>
        <div className="dm-feature">
          <div className="dm-role dm-feature-role">Guest Musical Artist</div>
          <h3 className="dm-feature-name">Alex Cano</h3>
          <div className="dm-feature-photos">
            <Image
              src="/images/alex-cano-1.jpg"
              alt="Alex Cano standing at sunset"
              width={2000}
              height={2000}
              className="dm-photo dm-feature-photo"
            />
            <Image
              src="/images/alex-cano-2.jpg"
              alt="Alex Cano playing acoustic guitar by the water"
              width={2000}
              height={2000}
              className="dm-photo dm-feature-photo"
            />
          </div>
          <p className="dm-desc dm-feature-desc">
            Singer-songwriter Alex Cano brings his soulful acoustic sound to
            the Blessing of the Animals.
          </p>
          <div className="music-decorative">
            <span>♪</span>
            <span>♫</span>
            <span>♩</span>
            <span>♬</span>
            <span>♪</span>
          </div>
          <a
            className="dm-link dm-feature-link"
            href="https://www.facebook.com/alexcanomusic"
            target="_blank"
            rel="noopener noreferrer"
          >
            Follow Alex on Facebook →
          </a>
        </div>
      </FadeIn>

      <FadeIn>
        <div className="dm-mini">
          <Image
            src="/images/mia-ayala-logo.webp"
            alt="Mia Ayala, Artist — paint splatter logo"
            width={1016}
            height={798}
            className="dm-mini-img"
          />
          <div className="dm-mini-text">
            <div className="dm-role">Face Painter</div>
            <h3 className="dm-mini-name">Mia Ayala</h3>
            <p className="dm-desc">
              Artist Mia Ayala will be painting faces all afternoon — for kids
              of all ages!
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
        </div>
      </FadeIn>

      <FadeIn>
        <p className="dm-extra">Plus tie dye, food, and fun — see you there! 🐾</p>
      </FadeIn>
    </section>
  );
}
