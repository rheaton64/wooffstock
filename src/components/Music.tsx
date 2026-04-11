import Image from "next/image";
import FadeIn from "./FadeIn";

export default function Music() {
    return (
        <section className="music" id="music">
            <FadeIn>
                <div className="section-label">Live Entertainment</div>
            </FadeIn>
            <FadeIn>
                <div className="section-title">The Music</div>
            </FadeIn>
            <FadeIn>
                <div className="section-subtitle">
                    An evening of smooth jazz to set the perfect mood.
                </div>
            </FadeIn>

            <FadeIn>
                <div className="music-content">
                    <Image
                        src="/images/rufus-jones.jpg"
                        alt="Rufus Jones"
                        width={280}
                        height={280}
                        className="rufus-photo"
                    />
                    <div className="band-name">The Rufus Jones Jazz Trio</div>
                    <div className="band-members">
                        Featuring <strong>John Osborne</strong> on Piano
                        <br />
                        &amp; <strong>Eric Gitelson</strong> on Bass
                    </div>
                    <div className="music-decorative">
                        <span>♪</span>
                        <span>♫</span>
                        <span>♩</span>
                        <span>♬</span>
                        <span>♪</span>
                    </div>
                </div>
            </FadeIn>
        </section>
    );
}
