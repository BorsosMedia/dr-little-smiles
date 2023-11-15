import Image from "next/image";

import kids from "../public/assets/prevention.jpg";

const Prevention = () => {
  return (
    <article className="article-display white gap-32">
      <Image src={kids} alt="Kids smiling" className="h-auto w-full" />
      <section className="">
        <div className="paragraphs-display default-x-padding md:px-0 md:pr-[10vw]">
          <h2 className="subheadline">Prevention Over Treatment</h2>
          <p>
            Preventing tooth decay in children yields numerous advantages,
            including the avoidance of discomfort, stress, and expenses,
            alongside the promotion of good oral habits and overall well-being.
            Preventative measures spare children from the pain and anxiety
            associated with dental procedures such as fillings, offering a less
            invasive and time-efficient alternative.
          </p>
          <p>
            Furthermore, prevention can also decelerate the progression of
            cavities, reducing the necessity for complex treatments and
            mitigating the stress of dental appointments. In addition, it proves
            to be cost-effective in comparison to expensive treatments that may
            not be fully covered by insurance.
          </p>
          <p>
            Moreover, prevention preserves a child&apos;s natural teeth and
            upholds their alignment and bite integrity. By instilling preventive
            practices at home, children acquire valuable oral hygiene and
            dietary habits from an early age, fostering long-term oral and
            overall health while lowering the risk of various dental issues,
            including gum disease.
          </p>
        </div>
      </section>
    </article>
  );
};

export default Prevention;
