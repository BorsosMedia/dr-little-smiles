import Image from "next/image";

import facebook from "../public/assets/facebook.svg";
import instagram from "../public/assets/instagram.svg";
import tiktok from "../public/assets/tiktok.svg";
import youtube from "../public/assets/youtube.svg";

const SocialLinks = () => {
  return (
    <>
      <a
        href="https://www.youtube.com/channel/UCH9KEecVJPYkEifSHfxrzcw"
        target="_blank"
      >
        <Image src={youtube} alt="YouTube" className="icons" />
      </a>
      <a href="https://www.instagram.com/nikthedentist/" target="_blank">
        <Image src={instagram} alt="Instagram" className="icons" />
      </a>
      <a href="https://www.tiktok.com/@nikthedentist" target="_blank">
        <Image src={tiktok} alt="TikTok" className="icons" />
      </a>
      <a href="https://www.facebook.com/nikhilsharma.dmd/" target="_blank">
        <Image src={facebook} alt="Facebook" className="icons" />
      </a>
    </>
  );
};

export default SocialLinks;
