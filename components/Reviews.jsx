import ReviewCard from "./ReviewCard";

const Reviews = () => {
  return (
    <article className="factors-display bg-white">
      <h2 className="subheadline blue">What Others Are Saying About Us</h2>
      <section className="flex-center flex-wrap gap-32">
        <ReviewCard
          name="John Khoushoo"
          location="Toronto, Canada"
          review="“My wife and I have a child who recently turned 1. Thankfully, we stumbled into Dr. Nik Sharma during one of his informative talks on social media. We reached out to Dr. Sharma to see if he could see our son for his first visit. He responded very quickly and scheduled us in on short notice. Dr. Sharma was very professional, friendly, and great with kids. Highly knowledgeable and took the time to patiently answer all of our questions. Since our visit, we have learned a lot about our son's dental care, and he actually loves brushing now after receiving tips and tricks from Dr. Sharma.”"
        />
        <ReviewCard
          name="Marina Banks"
          location="Manchester, UK"
          review="“Dr.Nik has been a great help to me from day one as he made me aware of when I need to start looking after my son's teeth. He has continued to provide lots of helpful tips and suggestions through his social media platforms. He is also always readily available to respond to any queries I've had and is very knowledgeable. He clearly knows and understands children which is what makes his advice so practical and helpful. Thank you for your help Dr. Nik!”"
        />
        <ReviewCard
          name="Gabrielle Lemay"
          location="Trois-Rivières, Quebec, Canada"
          review="“Dr Sharma has been a gem for me. As a mother of a toddler and a dentist, he has been my go to resource when I need information about prevention, good dental hygiene, diagnosis and even resources for treatments. He is quick to provide evidence based ressources and information that are available and easy to understand and apply. He provides interesting information about dental products and how to use them, for dentists and parents. And always with a smile!”"
        />
      </section>
    </article>
  );
};

export default Reviews;
