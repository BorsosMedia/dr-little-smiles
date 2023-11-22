import Image from "next/image";

import Newsletter from "./Newsletter";
import logo from "../public/assets/logo-white.svg";

const Hero = () => {
  return (
    <article className="bg-hero">
      <section className="col-span-2 box-border place-content-center py-[45.80152671755725%] pl-[10vw] md:py-[26.04165%] md:pl-[10vw] lg:py-0">
        <Image src={logo} alt="logo" className="h-24 w-24 lg:h-48 lg:w-48" />
        <h1 className="headline md:hidden">
          <span className="text-effect-mobile">
            Caring <span className="whitespace-nowrap">for the</span> Smiles
            that Matter Most
          </span>
        </h1>
        <h1 className="headline hidden md:block">
          <span className="text-effect-desktop">
            <span className="whitespace-nowrap">Caring for the Smiles</span>
            <br />
            <span className="whitespace-nowrap">that Matter Most</span>
          </span>
        </h1>
        <Newsletter inHero={true} />
      </section>
    </article>
  );
};

export default Hero;
