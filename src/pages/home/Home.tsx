import Cronograma from "./cronograma/Cronograma";
import OndeEstamos from "./onde-estamos/OndeEstamos";

function Home() {
  return (
    <div>
      <h1>Home</h1>
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