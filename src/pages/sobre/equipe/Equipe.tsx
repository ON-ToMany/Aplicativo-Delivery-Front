import EquipeCard from "./equipe-card/EquipeCard";

function Equipe() {
  const equipe = [
    {
      nome: "Breno Nunes",
      cargo: "SCRUM MASTER",
      dsc: "Responsável pela organização da equipe e acompanhamento das entregas.",
      foto: "https://ik.imagekit.io/9yqf3fqpw/breno.png",
      github: "https://github.com/BrenoNunes96",
      linkedin: "https://www.linkedin.com/in/breno-nunes-7592b0142",
    },
    {
      nome: "Márcia Fogaça",
      cargo: "TESTER",
      dsc: "Responsável pelos testes e validação das funcionalidades do sistema.",
      foto: "https://ik.imagekit.io/9yqf3fqpw/marcia.png",
      github: "https://github.com/MarciaFogaca",
      linkedin: "https://www.linkedin.com/in/marciatellesfogaca",
    },
    {
      nome: "Álvaro César",
      cargo: "Dev Full Stack",
      dsc: "Colaborou na ideia e construção do projeto, participando ativamente em todas as etapas.",
      foto: "https://ik.imagekit.io/9yqf3fqpw/alvaro.png",
      github: "https://github.com/alvarocsr2",
      linkedin: "https://www.linkedin.com/in/alvaro-cesar-maximiano-02914b215/",
    },
    {
      nome: "José Rodrigues",
      cargo: "Dev Full Stack",
      dsc: "Colaborou na ideia e construção do projeto, participando ativamente em todas as etapas.",
      foto: "https://ik.imagekit.io/9yqf3fqpw/jose.png",
      github: "https://github.com/jrs-neto",
      linkedin: "https://www.linkedin.com/in/jrodrigues-neto",
    },
    {
      nome: "Maria Eduarda Gomes",
      cargo: "Dev Full Stack",
      dsc: "Colaborou na ideia e construção do projeto, participando ativamente em todas as etapas.",
      foto: "https://ik.imagekit.io/9yqf3fqpw/maria.png",
      github: "https://github.com/memariaa",
      linkedin: "https://www.linkedin.com/in/memariaa",
    },
    {
      nome: "Mayara Monteiro",
      cargo: "Dev Full Stack",
      dsc: "Colaborou na ideia e construção do projeto, participando ativamente em todas as etapas.",
      foto: "https://ik.imagekit.io/9yqf3fqpw/mayaram.png",
      github: "https://github.com/Imayagmb",
      linkedin: "https://www.linkedin.com/in/imayagmb",
    },
  ];

  return (
    <section className="flex flex-col items-center gap-10">

      {equipe.map((pessoa, i) => (
        <EquipeCard key={i} {...pessoa} />
      ))}
    </section>
  );
}

export default Equipe;
