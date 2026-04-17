import Equipe from "./equipe/Equipe";
import SobreOneToMany from "./sobre-one-to-many/SobreOneToMany";

function Sobre() {
  return (
    <div>
      <section id="SobreOneToMany">
        <SobreOneToMany />
      </section>
      
      <section id="equipe">
        <Equipe />
      </section>
    </div>
  );
}

export default Sobre;