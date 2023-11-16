import Image from "next/image";

import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <footer className="bg-footer">
      <Image src="/assets/logo-white.svg" alt="Logo" width={200} height={200} />
      <section className="social-media-display">
        <SocialLinks />
      </section>
      <section className="gap-16">
        <p>
          Design and Development by{" "}
          <a
            href="https://www.borsosmedia.com/"
            target="_blank"
            className="bold underline"
          >
            Borsos Media
          </a>
        </p>
        <p>Doctor Little Smiles - All Rights Reserved</p>
      </section>
    </footer>
  );
};

export default Footer;
