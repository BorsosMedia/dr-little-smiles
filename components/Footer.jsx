import Image from "next/image"

const Footer = () => {
  return(
    <footer>
      <Image src={'/'} alt="Logo" />
      <section>
      <Image src={'/'} alt="YouTube" />
      <Image src={'/'} alt="Instagram" />
      <Image src={'/'} alt="TikTok" />
      </section>
      <section>
        <p>Design and Development by <a href="https://www.borsosmedia.com/" target='_blank'>Borsos Media</a></p>
        <p>Doctor Little Smiles - All Rights Reserved</p>
      </section>
    </footer>
  )
}

export default Footer