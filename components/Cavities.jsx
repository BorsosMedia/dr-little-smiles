import Image from "next/image";

import diagram from "../public/assets/cavities.png";

const Cavities = () => {
  return (
    <article className="article-display bg-cavities gap-32">
      <section className="paragraphs-display">
        <h2 className="subheadline blue hidden lg:block">What are cavities?</h2>
        <p>
          <span className="bold">Tooth decay</span>, commonly referred to as
          cavities, is a chronic disease initiated by acid-producing bacteria,
          primarily Streptococcus mutans.
        </p>
        <p>
          These bacteria thrive on food particles, particularly those high in
          sugars and starches, and in turn, they generate acid that erodes tooth
          enamel. This ongoing acid exposure results in the development of small
          holes and enamel damage, ultimately leading to the formation of
          cavities.
        </p>
        <p>
          Nevertheless, our oral cavity and saliva contain components that
          counteract this acid and combat harmful bacteria. Additionally,
          minerals and elements found in saliva, along with the inclusion of
          anti-cavity agents like fluoride in toothpaste, collectively
          contribute to the restoration of weakened enamel.
        </p>
        <p>
          The equilibrium between enamel demineralization (breakdown) and
          remineralization (re-building) is influenced by our dietary choices,
          oral hygiene practices, and the quality of our mouth and teeth. An
          imbalance in this process increases the likelihood of cavities.
        </p>
      </section>
      <Image
        src={diagram}
        alt="Cavities Diagram"
        className="h-auto w-[20rem] lg:w-full"
      />
      <h2 className="subheadline blue lg:hidden">What are cavities?</h2>
    </article>
  );
};

export default Cavities;
