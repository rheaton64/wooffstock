import Image from "next/image";
import FadeIn from "./FadeIn";

export default function Honoree() {
  return (
    <section className="honoree" id="honoree">
      <FadeIn><div className="section-label">Celebrating</div></FadeIn>
      <FadeIn><div className="section-title">Our Guest of Honor</div></FadeIn>
      <FadeIn>
        <div className="section-subtitle">
          This year&apos;s event celebrates a beloved member of our community.
        </div>
      </FadeIn>

      <div className="honoree-content">
        <FadeIn>
          <div className="honoree-photos">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/honoree-main.jpg"
              alt="Dr. Renee Bayha with her dogs"
              className="honoree-photo main"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/honoree-dogs.jpg"
              alt="Dr. Renee Bayha with her dogs"
              className="honoree-photo secondary"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/honoree-field-trial.jpg"
              alt="Dr. Renee Bayha Gossett at a retriever field trial"
              className="honoree-photo secondary"
            />
          </div>
        </FadeIn>

        <FadeIn>
          <div className="honoree-bio">
            <div className="honoree-name">Dr. Renee Bayha</div>
            <div className="honoree-title">Pound Ridge Veterinarian</div>
            <div className="honoree-alma">BS &amp; DVM, Cornell University</div>
            <div className="honoree-divider" />

            <p className="honoree-desc">
              Raised on a Charolais beef cattle farm in Mahopac, New York, my earliest memories are loving and caring
              for both large and small animals.
            </p>
            <p className="honoree-desc">
              I received my BS and DVM degrees from Cornell University. I completed a large animal (equine) internship
              at the University of Pennsylvania at New Bolton Center and practiced general equine medicine and surgery
              before joining the Pound Ridge Veterinary Center. I have enjoyed a rewarding career practicing small
              animal medicine and surgery there since 1988. I have had the honor of being selected by my peers as one
              of Westchester County&apos;s top veterinarians in 2011, 2012 and 2013.
            </p>
            <p className="honoree-desc">
              Cornell has remained a beacon of inspiration for me since my undergraduate days and I have served in
              various volunteer and leadership roles for the College of Veterinary Medicine Advisory Board, the Cornell
              University Council Administrative Board, the Committee for Alumni Elected Trustees and the
              President&apos;s Council for Cornell Women.
            </p>
            <p className="honoree-desc">
              I have also volunteered my veterinary skills to care for the grey and red wolves at the{" "}
              <a href="https://nywolf.org" target="_blank" rel="noopener noreferrer">
                Wolf Conservation Center
              </a>{" "}
              in South Salem, New York since 2001. In 2024, I assisted in transporting five newborn Mexican gray wolf
              pups from the WCC to New Mexico, where they were fostered into a wild den as part of a federal effort to
              save one of North America&apos;s most endangered mammals.{" "}
              <a
                href="https://nywolf.org/2024/05/endangered-wolf-pups-fostered-into-wild-den-in-new-mexico/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read the full story →
              </a>
            </p>
            <p className="honoree-desc">
              Through my daughter&apos;s pursuit of riding horses, I also became very involved in our local chapter of
              the United States Pony Club. And also enjoy volunteering at my local parish, the Pound Ridge Community
              Church.
            </p>
            <p className="honoree-desc">
              I currently live in South Salem, New York with my husband, Tom Gossett. I have two children, Billy and
              Elizabeth. We share our home with two dogs, Dottie and Robbie and a cat named Peter George. I have
              competed my Labrador Retriever Henry in AKC Hunt Tests; he had earned the highest title of AKC Master
              Hunter and in 2015 qualified and competed at the Master National in South Carolina. I am currently
              training and competing my yellow Labrador Retriever, Robbie, in AKC and HRC Hunt Tests. Robbie has earned
              the highest title of AKC Master Hunter and is also a HRC Seasoned Hunter and an Advanced Canine Good
              Citizen.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
