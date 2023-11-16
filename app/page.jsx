import About from "../components/About";
import Cavities from "../components/Cavities";
import Factors from "../components/Factors";
import Hero from "../components/Hero";
import Prevention from "../components/Prevention";
// import Reviews from "../components/Reviews";

export default function Home() {
  return (
    <main className="bg-light-grey">
      <Hero />
      <About />
      <Cavities />
      <Prevention />
      <Factors />
      {/* <Reviews /> */}
    </main>
  );
}
