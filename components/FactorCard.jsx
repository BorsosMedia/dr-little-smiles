import Image from "next/image"

import LearnMoreButton from "./LearnMoreButton"

const FactorCard = ({image, alt, title, content}) => {

  return(
    <article>
      <Image src={image} alt={alt} />
      <h3>{title}</h3>
      <p>{content}</p>
      <LearnMoreButton/>
    </article>
  )
}

export default FactorCard