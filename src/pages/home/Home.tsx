import Cronograma from "./cronograma/Cronograma";
import Hero from "./hero/Hero";
import OndeEstamos from "./onde-estamos/OndeEstamos";

function Home() {
  return (
    <div>
      <section id="hero">
        <Hero />
      </section>{" "}
      <section id="onde-estamos">
        <OndeEstamos />
      </section>
      <section id="cronograma">
        <Cronograma />
      </section>
    </div>
  );
}

export default Home;
