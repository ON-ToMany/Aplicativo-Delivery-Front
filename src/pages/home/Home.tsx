import Hero from "./hero/Hero";
import SobreFriendlyFood from "./sobre-friendly-food/SobreFriendlyFood";
import Cardapio from "./cardapio/Cardapio";
import OndeEstamos from "./onde-estamos/OndeEstamos";
import Cronograma from "./cronograma/Cronograma";

function Home() {
  return (
    <div>
      <section id="hero">
        <Hero />
      </section>

      {/* Nova seção: Sobre Nós */}
      <section id="sobre-nos">
        <SobreFriendlyFood />
      </section>

      {/* Nova seção: Cardápio */}
      <section id="cardapio">
        <Cardapio />
      </section>

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