import { Link } from "react-router-dom";
import {
  RiFacebookFill,
  RiTwitterXFill,
  RiInstagramFill,
  RiLinkedinFill,
} from "react-icons/ri";

const Footer = () => (
  <footer className="bg-red-950 text-white pt-12 pb-5 px-12 rounded-t-3xl">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
      <div className="md:col-span-2">
        <div className="flex items-center gap-3 mb-4">
          <img
            src="https://ik.imagekit.io/9yqf3fqpw/logoescrita.png"
            alt="FriendlyFood"
            className="h-12 w-auto object-contain"
          />
          <span className="font-bold text-lg tracking-wide leading-tight">
            <div>
              <span className="text-red-500">F</span>
              <span className="text-[#E2BE94]">riendly</span>
            </div>
            <div>
              <span className="text-red-500">F</span>
              <span className="text-[#E2BE94]">ood</span>
            </div>
          </span>
        </div>
        <p className="text-white/55 text-sm uppercase leading-relaxed max-w-xs mb-5">
          Alimentando Vidas, onde a Fome Estiver!
        </p>
        <div className="flex gap-3">
          {[
            RiInstagramFill,
            RiLinkedinFill,
            RiFacebookFill,
            RiTwitterXFill,
          ].map((Icon, i) => (
            <button
              key={i}
              type="button"
              className="w-9 h-9 bg-white/10 hover:bg-[#E2BE94] rounded-lg flex items-center justify-center transition-colors text-white/70 hover:text-black cursor-pointer"
            >
              <Icon className="text-2xl" />
            </button>
          ))}
        </div>
      </div>

      {/* Links rápidos */}
      <div>
        <h4 className="font-semibold text-sm mb-4 text-white/90 uppercase tracking-wider">
          Links Rápidos
        </h4>
        <ul className="grid grid-cols-3 gap-2.5 text-center md:grid-cols-1 md:text-left">
          {[
            { label: "Início", path: "/home" },
            { label: "Cardápio", path: "/#cardapio" },
            { label: "Onde Estamos", path: "/#localizacao" },
            { label: "Sobre", path: "/sobre" },
            { label: "Faça sua doação", path: "/#doacao" },
            { label: "Seja Voluntário", path: "/#voluntario" },
          ].map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className="text-white/50 hover:text-[#E2BE94] text-sm transition-colors"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Portais */}
      <div>
        <h4 className="font-semibold text-sm mb-4 text-white/90 uppercase tracking-wider">
          Contatos
        </h4>
        <ul className="flex flex-col gap-2.5">
          <li>
            <div className="text-white/50 text-sm transition-colors">
              +55 21 4002-8922
            </div>
          </li>
          <li>
            <div className="text-white/50 text-sm transition-colors">
              contato@friendlyfood.com.br
            </div>
          </li>
        </ul>
      </div>
    </div>

    {/* Divisor */}
    <div className="border-t border-white/10 pt-5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
      <p>
        © {new Date().getFullYear()} FriendlyFood. Todos os direitos reservados.
      </p>
      <div className="flex gap-5">
        <a href="#" className="hover:text-white/70 transition-colors">
          Política de Privacidade
        </a>
        <a href="#" className="hover:text-white/70 transition-colors">
          Termos de Uso
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
