import Image from "next/image";

import facebook from "../public/assets/facebook.svg";
import instagram from "../public/assets/instagram.svg";
import tiktok from "../public/assets/tiktok.svg";
import youtube from "../public/assets/youtube.svg";

const Footer = () => {
  return (
    <footer className="bg-footer">
      <Image src="/assets/logo-white.svg" alt="Logo" width={200} height={200} />
      <section className="social-media-display">
        <a href="#" target="_blank">
          <Image src={youtube} alt="YouTube" className="icons" />
        </a>
        <a href="https://www.instagram.com/nikthedentist/" target="_blank">
          <Image src={instagram} alt="Instagram" className="icons" />
        </a>
        <a href="https://www.tiktok.com/@nikthedentist" target="_blank">
          <Image src={tiktok} alt="TikTok" className="icons" />
        </a>
        <a href="#" target="_blank">
          <Image src={facebook} alt="Facebook" className="icons" />
        </a>
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
