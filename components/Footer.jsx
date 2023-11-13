import Image from "next/image";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#000000" }}>
      <Image
        src={"/assets/logo-white.svg"}
        alt="Logo"
        width={200}
        height={200}
      />
      <section>
        <Image src={"/"} alt="YouTube" width={20} height={20} />
        <Image src={"/"} alt="Instagram" width={20} height={20} />
        <Image src={"/"} alt="TikTok" width={20} height={20} />
      </section>
      <section>
        <p>
          Design and Development by{" "}
          <a href="https://www.borsosmedia.com/" target="_blank">
            Borsos Media
          </a>
        </p>
        <p>Doctor Little Smiles - All Rights Reserved</p>
      </section>
    </footer>
  );
};

export default Footer;
