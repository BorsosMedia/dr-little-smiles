import Image from "next/image"

import FactorPopup from "./FactorPopup"



const FactorCard = ({image, alt, width, height, title, content, bullets}) => {

  return(
    <article>
      <Image src={image} alt={alt} width={width} height={height} />
      <h3>{title}</h3>
      <p>{content}</p>
      <FactorPopup title={title} bullets={bullets}/>
    </article>
  )
}

export default FactorCard