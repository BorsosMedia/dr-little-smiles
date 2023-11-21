import About from "../components/About";
import Cavities from "../components/Cavities";
import Factors from "../components/Factors";
import Hero from "../components/Hero";
import Newsletter from "../components/Newsletter";
import Prevention from "../components/Prevention";
import Reviews from "../components/Reviews";

export default function Home() {
  return (
    <main>
      <Hero />
      <Newsletter />
      <About />
      <Cavities />
      <Prevention />
      <Factors />
      <Reviews />
    </main>
  );
}
