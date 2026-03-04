import Image from "next/image";
import FadeIn from "./FadeIn";

export default function News() {
  return (
    <section className="news" id="news">
      <FadeIn><div className="section-label">Press</div></FadeIn>
      <FadeIn><div className="section-title">In the News</div></FadeIn>
      <FadeIn>
        <div className="section-subtitle">
          Wooffstock has been making tails wag — and headlines — in our community.
        </div>
      </FadeIn>

      <div className="news-grid">
        <FadeIn>
          <div className="news-card">
            <Image
              src="/images/news-mt-kisco.jpg"
              alt="Mt. Kisco-Bedford Times article about Wooffstock 2025"
              width={500}
              height={300}
              className="news-img"
            />
            <div className="news-caption">
              <div className="news-source">The Mt. Kisco-Bedford Times · October 2025</div>
              <div className="news-headline">A Doggone Good Time!</div>
              <div className="news-excerpt">
                Pound Ridge celebrates canines at Wooffstock — featuring blessings of furry and feathered friends, dog
                and kitty adoptions, face painting, a silent auction, Walter&apos;s Hotdog truck, and live music by
                Charlie Sub &amp; Sound Dogs.
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="news-card">
            <Image
              src="/images/news-recorder.jpg"
              alt="The Recorder article about Wooffstock 2025"
              width={500}
              height={300}
              className="news-img"
            />
            <div className="news-caption">
              <div className="news-source">The Recorder · October 2025</div>
              <div className="news-headline">Fur and Fun</div>
              <div className="news-excerpt">
                The latest Wooffstock featured live music, food, a silent auction and raffle, all to support local
                animal shelters and adoptions at the Pound Ridge Community Church.
              </div>
            </div>
          </div>
        </FadeIn>
      </div>

      <FadeIn>
        <div className="news-video">
          <video controls width="100%">
            <source src="/videos/wooffstock.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="news-caption">
            <div className="news-source">Wooffstock</div>
            <div className="news-headline">Watch the Highlights</div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
