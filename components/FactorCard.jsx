import Image from "next/image";

import FactorPopup from "./FactorPopup";

const FactorCard = ({ image, alt, width, height, title, content, bullets }) => {
  return (
    <article className="card">
      <Image src={image} alt={alt} width={width} height={height} />
      <div>
        <h3 className="card-title">{title}</h3>
        <p className="text-sm text-text-grey">{content}</p>
      </div>
      <FactorPopup
        image={image}
        alt={alt}
        width={width}
        height={height}
        title={title}
        bullets={bullets}
      />
    </article>
  );
};

export default FactorCard;
