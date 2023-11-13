import Image from "next/image";

import FactorPopup from "./FactorPopup";

const FactorCard = ({ image, alt, width, height, title, content, bullets }) => {
  return (
    <article className="flex h-[450px] w-[340px] flex-col items-center justify-between gap-5 rounded-3xl border border-border-grey bg-white px-5 py-10">
      <Image src={image} alt={alt} width={width} height={height} />
      <div>
        <h3 className="subheadline-blue">{title}</h3>
        <p className="text-text-grey">{content}</p>
      </div>
      <FactorPopup title={title} bullets={bullets} />
    </article>
  );
};

export default FactorCard;
