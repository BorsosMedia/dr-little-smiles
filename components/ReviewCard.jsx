import Image from "next/image";

import star from "../public/assets/star.svg";

const ReviewCard = ({ review, name, location }) => {
  return (
    <article className="box-border flex h-[520px] w-[340px] flex-col items-start justify-between gap-24 rounded-3xl border border-border-grey bg-white p-8 text-left">
      <section className="flex-center gap-2">
        <Image src={star} alt="star" width={20} height={20} />
        <Image src={star} alt="star" width={20} height={20} />
        <Image src={star} alt="star" width={20} height={20} />
        <Image src={star} alt="star" width={20} height={20} />
        <Image src={star} alt="star" width={20} height={20} />
      </section>
      <p className="text-sm text-text-grey">{review}</p>
      <h5 className="blue bold">{name}</h5>
      <h6>{location}</h6>
    </article>
  );
};

export default ReviewCard;
