import Image from "next/image";

import SocialLinks from "./SocialLinks";
import nikDesktop from "../public/assets/nik-desktop.png";
import nikMobile from "../public/assets/nik-mobile.png";

const About = () => {
  return (
    <article className="bg-about">
      <h2 className="subheadline py-[5vh] text-center">
        <span className="text-effect-mobile md:text-effect-desktop">
          Doctor Little Smiles
        </span>
      </h2>
      <section className="about-display">
        <div className="col-span-5 flex flex-col gap-16">
          <div className="grid items-center gap-16 lg:col-start-3 lg:grid-cols-3">
            <div className="w-full px-[10vw] lg:col-span-2 lg:col-start-2 lg:px-0">
              <div className="relative pt-[56.25%]">
                <iframe
                  src="https://player.vimeo.com/video/885721170?h=2f9a793edf&amp;badge=0&amp;autopause=0&amp;quality_selector=1&amp;player_id=0&amp;app_id=58479"
                  frameborder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  title="Nik Intro"
                  className="absolute left-0 top-0 h-full w-full rounded shadow-2xl drop-shadow-2xl"
                ></iframe>
              </div>
            </div>
            <div className="lg:social-media-display col-span-2 col-start-2 my-8 hidden">
              <span className="bold text-2xl">Follow us:</span>
              <SocialLinks />
            </div>
          </div>
          <div className="flex flex-col gap-16 px-[10vw] lg:px-0 lg:pl-[10vw]">
            <p>
              <span className="bold">Dr. Nikhil (Nik) Sharma</span> is a
              dedicated <span className="bold">Pediatric dentist</span> and a
              dedicated advocate for oral health. His unwavering passion lies in
              the promotion of early oral health practices.
            </p>
            <p>
              His journey into dentistry commenced with a five-year program at
              McGill University. Following this, Dr. Nik embarked on an intense
              one-year residency at the Montreal Children&apos;s Hospital, a
              level one trauma center. It was during this residency that he
              found his calling as a Pediatric dentist. He continued his
              education with a two-year residency in pediatric dentistry at the
              Eastman Institute for Oral Health in Rochester, New York. Upon
              successfully completing his studies and board exams, he returned
              to Montreal as a board-certified pediatric dentist.
            </p>
            <p className="lg:pb-[10vh]">
              In Montreal, Dr. Nik practiced part-time in both a private clinic
              and at McGill as the director of a Hospital Residency program. As
              the program director, he not only trained new dentists in
              providing exemplary pediatric care but also managed numerous
              patients himself in the hospital setting, on the wards and in the
              operating room. Several years later, he transitioned to full-time
              practice as a Pediatric dentist and clinic director in the Greater
              Toronto Area.
            </p>
          </div>
          <div className="grid grid-cols-2">
            <div className="grid grid-cols-2 place-content-center place-items-center gap-6 place-self-center pl-[10vw] lg:hidden">
              <span className="bold col-span-2 text-xl">Follow us:</span>
              <SocialLinks />
            </div>
            <Image
              src={nikMobile}
              alt="Nik's Picture"
              className="place-self-end lg:hidden"
            />
          </div>
        </div>
        <Image
          src={nikDesktop}
          alt="Nik's Picture"
          className="col-span-2 hidden h-auto w-full lg:block"
        />
      </section>
    </article>
  );
};

export default About;
