import { RiGithubFill, RiLinkedinFill } from "react-icons/ri";

type Props = {
  nome: string;
  cargo: string;
  dsc: string;
  foto: string;
  github: string;
  linkedin: string;
};

function Equipe({ nome, cargo, dsc, foto, github, linkedin }: Props) {
  return (
    <div className="w-full max-w-4xl py-8 border-b border-red-950/40">
      <div className="flex gap-6 items-start">
        {/* FOTO */}
        <div className="w-32 h-32 shrink-0">
          <img
            src={foto}
            alt={nome}
            className="w-full h-full object-cover rounded-md"
          />
        </div>

        {/* CONTEÚDO */}
        <div className="flex flex-col gap-2">
          {/* NOME + CARGO */}
          <div className="flex items-center gap-3">
            <h2 className="text-base font-semibold text-gray-900">{nome}</h2>
            <span className="text-sm text-red-700 font-medium">{cargo}</span>
          </div>

          {/* DESCRIÇÃO */}
          <p className="text-sm text-gray-700 max-w-xl">{dsc}</p>

          {/* BOTÃO */}
          <div className="flex gap-3 mt-3">
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-red-800 hover:bg-red-900 text-[#E2BE94]  hover:text-white/80 px-4 py-1.5 rounded-full text-sm font-semibold transition"
            >
              <RiGithubFill className="text-lg" />
              GitHub
            </a>

            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-red-800 hover:bg-red-900 text-[#E2BE94]  hover:text-white/80 px-4 py-1.5 rounded-full text-sm font-semibold transition"
            >
              <RiLinkedinFill className="text-lg" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Equipe;
