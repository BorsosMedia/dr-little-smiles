import Image from "next/image";

import kids from "../public/assets/prevention.jpg";

const Prevention = () => {
  return (
    <article className="prevention-display">
      <Image
        src={kids}
        alt="Kids smiling"
        className="h-auto w-full md:hidden xl:block"
      />
      <section className="bg-prevention md:hidden xl:block">
        <div className="paragraphs-display h-full place-content-center">
          <h2 className="subheadline text-center md:text-left">
            Prevention Over Treatment
          </h2>
          <p>
            Preventing tooth decay in children yields numerous advantages,
            including the avoidance of discomfort, stress, and expenses,
            alongside the promotion of good oral habits and overall well-being.
            Preventative measures spare children from the pain and anxiety
            associated with dental procedures such as fillings, offering a less
            invasive and time-efficient alternative.
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
      <section className="bg-prevention hidden md:block xl:hidden">
        <Image
          src={kids}
          alt="Kids smiling"
          className="float-left m-6 w-[50%]"
        />
        <h2 className="subheadline">Prevention Over Treatment</h2>
        <p className="my-4">
          Preventing tooth decay in children yields numerous advantages,
          including the avoidance of discomfort, stress, and expenses, alongside
          the promotion of good oral habits and overall well-being. Preventative
          measures spare children from the pain and anxiety associated with
          dental procedures such as fillings, offering a less invasive and
          time-efficient alternative.
        </p>
        <p>
          Moreover, prevention preserves a child&apos;s natural teeth and
          upholds their alignment and bite integrity. By instilling preventive
          practices at home, children acquire valuable oral hygiene and dietary
          habits from an early age, fostering long-term oral and overall health
          while lowering the risk of various dental issues, including gum
          disease.
        </p>
      </section>
    </article>
  );
};

export default Prevention;
