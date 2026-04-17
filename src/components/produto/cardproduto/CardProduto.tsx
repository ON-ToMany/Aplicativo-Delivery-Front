import { Link } from "react-router-dom";
import type { Produto } from "../../../models/Produto";


interface produto {
produto: Produto
}
export function CardProduto({ produto }: produto) {
  return (
    <div className="flex flex-col p-2 bg-[#E2BE94] w-fit rounded-lg gap-2">
      <h2>{produto.nome}</h2>
      <p>{produto.descricao_Alimentar}</p>

      <Link to={`/editar-prato/${produto.id}`} className='w-full text-white bg-indigo-400 
                    hover:bg-indigo-800 flex items-center justify-center py-2'>
                    <button>Editar</button>
                </Link>
                <Link to='' className='text-white bg-red-400 
                    hover:bg-red-700 w-full flex items-center justify-center'>
                    <button>Deletar</button>
                </Link>
    </div>
  );
}
