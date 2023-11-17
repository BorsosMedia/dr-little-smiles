import Image from "next/image";

import logo from "../public/assets/logo-white.svg";

const Hero = () => {
  return (
    <article className="bg-hero">
      <section className="col-span-2 place-content-center py-[30.53435114503817%] pl-[5vw] md:py-[17.3611%] md:pl-[10vw]">
        <Image src={logo} alt="logo" className="h-24 w-24 lg:h-48 lg:w-48" />
        <h1 className="headline">
          <span className="text-effect">
            <span className="whitespace-nowrap">Caring for the Smiles</span>
            <br />
            <span className="whitespace-nowrap">that Matter Most</span>
          </span>
        </h1>
      </section>
    </article>
  );
};

export default Hero;
