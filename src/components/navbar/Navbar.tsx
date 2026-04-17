import Logo from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="fixed z-2000 flex flex-row w-full justify-between items-center p-4 bg-[#E2BE94] border-l border-r border-b rounded-b-3xl border-red-900 text-red-900 font-semibold shadow-sm">
        <Link to="/">
          <div className="flex flex-row justify-center items-center gap-2">
            <img src={Logo} alt="Logo" className="h-12" />
            <span className="text-2xl text-red-800 font-extrabold italic">FRIENDLY FOOD</span>
          </div>
        </Link>
        <nav>
          <ul className="flex flex-row gap-6">
            <li className="hover:text-red-950 transition-colors duration-200"><a href="/">Início</a></li>
            <li className="hover:text-red-950 transition-colors duration-200"><a href="#cardapio">Cardápio</a></li>
            <li className="hover:text-red-950 transition-colors duration-200"><a href="#onde-estamos">Onde Estamos</a></li>
            <li className="hover:text-red-950 transition-colors duration-200"><a href="/sobre">Sobre</a></li>
            <li className="hover:text-red-950 transition-colors duration-200"><a href="/gerenciar-prato">Gerenciar Pratos</a></li>
            <li className="hover:text-red-950 transition-colors duration-200"><a href="/categorias">Gerenciar Categoria</a></li>
          </ul>
        </nav>

        <div className="w-fit h-fit flex felx-row gap-4 items-center">
          <button className="w-fit p-2 border border-red-900 bg-yellow-50 rounded-full shadow-sm font-medium cursor-pointer text-nowrap hover:border-red-950 hover:text-red-950 hover:scale-103 transition-all duration-200">Faça seu pedido</button>
        </div>
      </div>
    </>
  );
}

export default Navbar;