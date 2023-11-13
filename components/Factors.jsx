import FactorCard from "./FactorCard"

const Factors = () => {

  const dietCard = {
    image: '/assets/apple.svg',
    alt: 'Apple',
    title: 'Diet & Dietary Habits',
    content: 'Choose your snacks wisely, as they can either fuel cavity-causing bacteria or help clean your teeth - opt for tooth-friendly choices like cheese, nuts, and celery to keep your smile bright!',
    bullets: ['Your diet and eating habits play a crucial role in the development of cavities, and therefore in its prevention as well. Consuming foods such as starchy carbohydrates and those high in sugars, provides fuel for cavity causing bacteria, which produce acids that erode tooth enamel, leading to cavities.', 'The frequency of sugary or starchy food intake ALSO matters, as constant snacking or sipping sugary drinks exposes your teeth to continuous acid and sugar exposure, leading to more enamel breakdown and cavities. Opt for healthier snacks that either promote saliva production or use their texture to clean your teeth - such as cheese, nuts, and celery!', 'Staying hydrated with water helps maintain saliva production, which neutralizes acids and protects your teeth. Water is also in itself a natural cleanser for your teeth. It helps rinse away food particles and acids from the mouth.', 'To further enhance your teeth, consider consuming a nutrient-rich diet with calcium, vitamin D, vitamin K2 and phosphorus as these support the formation and maintenance of healthy teeth. This is especially important for developing children as they spend numerous years in the formation and development phases of both baby and adult teeth!'],
  }

  const hygieneCard = {
    image: '/assets/toothbrush.svg',
    alt: 'Toothbrush',
    title: 'Hygiene Routine & Products',
    content: "Prevent cavities with a daily dental defense: brush and floss to banish plaque, fortify enamel with toothpaste's anti-cavity heroes, and team up with dental pros for extra protection!",
    bullets: ["The development of cavities necessitates the presence of cavity-causing bacteria, coupled with the consumption of food that these bacteria process to generate acid. Plaque forms as a result, being the combination of food particles and bacteria that inhabit the surface of your teeth. To combat this, it's imperative to incorporate brushing and flossing into your daily routine as they serve to eliminate plaque as well as any lingering food particles from the surfaces of your teeth and the spaces in between.", "In toothpaste, you'll discover anti-cavity agents like fluoride, xylitol, and nanohydroxyapatite, which not only target the bacteria responsible for cavities but, more significantly, fortify tooth enamel. This reinforcement renders the enamel more resilient to the acid attacks that initiate cavities.", "Selecting the appropriate toothbrush and employing suitable brushing techniques are paramount in protecting both your gums and enamel from harm. What you undertake at home is of utmost importance in ensuring daily protection for your teeth. Complimenting this with periodic cleanings performed by dental professionals every few months aids in the removal of stubborn plaque and tartar buildup."],
  }

  const mouthCard = {
    image: '/assets/mouth.svg',
    alt: 'Mouth',
    title: 'Your Mouth & Teeth',
    content: "Preventing childhood cavities requires more than diet and hygiene; it's about understanding host factors like saliva, oral microbiome, enamel strength, and overall health, for comprehensive cavity defense.",
    bullets: ["We all wonder - “I am brushing my child's teeth, they aren't having sweets, but why do they still get cavities?” Diet and hygiene, hate to say it, are the easier factors to consider when preventing cavities. These can be improved with a real effort, but there are factors that are more difficult to change. These are known as host factors.", "First and foremost, the quality and flow of saliva take center stage in your defense against cavities. Saliva acts as a natural safeguard by neutralizing acids, remineralizing enamel, and cleansing the mouth, making it a pivotal player in maintaining oral health.", "The composition of your oral microbiome, a diverse community of bacteria, fungi, and microorganisms inhabiting your mouth, plays a crucial role in the development of cavities. A harmonious and diverse microbiome is associated with a reduced risk of cavities, underlining its significance.", "The strength and quality of your tooth enamel, the outer layer of your teeth, hold considerable sway over your susceptibility to cavities. Furthermore, the shape and alignment of your teeth can influence the ease of cleaning and the potential for food retention, thereby impacting cavity risk.", "Genetics and overall health are additional variables that come into play when assessing risks for cavities. For example, a compromised immunity can diminish your ability to combat oral bacteria, potentially increasing the risk of cavities. Certain medications, particularly those that reduce saliva production or contain sugar, can contribute to the development of cavities. Hence, understanding and addressing these factors is integral to effective cavity prevention and maintaining optimal oral health for your children.", "By considering these various elements and tailoring preventative measures accordingly, we can achieve and maintain optimal oral health for all."],
  }
  

  return(
    <article>
      <h2>Prevention Factors</h2>
      <p>GOOD NEWS! Tooth decay is a preventable disease, and this prevention can be achieved by managing the multiple factors that contribute to the formation of cavities: Diet, Bacteria, Host, and Time. It is essential to regulate our dietary choices and eating habits, reduce the presence of harmful bacteria in our mouths, all while maintaining a conducive oral environment and healthy dentition.</p>
      <section>
        <FactorCard image={dietCard.image} alt={dietCard.alt} title={dietCard.title} content={dietCard.content} bullets={dietCard.bullets} width={20} height={20}/>
        <FactorCard image={hygieneCard.image} alt={hygieneCard.alt} title={hygieneCard.title} content={hygieneCard.content} bullets={hygieneCard.bullets} width={20} height={20}/>
        <FactorCard image={mouthCard.image} alt={mouthCard.alt} title={mouthCard.title} content={mouthCard.content} bullets={mouthCard.bullets} width={20} height={20}/>
      </section>
    </article>
  )
}

export default Factors