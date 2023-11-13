import FactorCard from "./FactorCard"

const Factors = () => {

  return(
    <article>
      <h2>Prevention Factors</h2>
      <p>GOOD NEWS! Tooth decay is a preventable disease, and this prevention can be achieved by managing the multiple factors that contribute to the formation of cavities: Diet, Bacteria, Host, and Time. It is essential to regulate our dietary choices and eating habits, reduce the presence of harmful bacteria in our mouths, all while maintaining a conducive oral environment and healthy dentition.</p>
      <section>
        <FactorCard image={''} alt='Apple' title='Diet & Dietary Habits' content='Choose your snacks wisely, as they can either fuel cavity-causing bacteria or help clean your teeth - opt for tooth-friendly choices like cheese, nuts, and celery to keep your smile bright!' />
        <FactorCard image={''} alt='Toothbrush' title='Hygiene Routine & Products' content="Prevent cavities with a daily dental defense: brush and floss to banish plaque, fortify enamel with toothpaste's anti-cavity heroes, and team up with dental pros for extra protection!" />
        <FactorCard image={''} alt='Mouth' title='Your Mouth & Teeth' content="Preventing childhood cavities requires more than diet and hygiene; it's about understanding host factors like saliva, oral microbiome, enamel strength, and overall health, for comprehensive cavity defense." />
      </section>
    </article>
  )
}

export default Factors