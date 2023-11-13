import Image from "next/image";

const Cavities = () => {
  return (
    <article>
      <section>
        <h2>What are Cavities?</h2>
        <p>
          <span>Tooth decay</span>, commonly referred to as cavities, is a
          chronic disease initiated by acid-producing bacteria, primarily
          Streptococcus mutans.{" "}
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
      <Image src={"/"} alt="Cavities Diagram" width={20} height={20} />
    </article>
  );
};

export default Cavities;
