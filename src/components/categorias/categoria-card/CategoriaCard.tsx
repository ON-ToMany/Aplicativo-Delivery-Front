import { useNavigate } from "react-router-dom";
import type { Categoria } from "../../../models/Categoria";

interface CardCategoriaProps {
  categoria: Categoria;
  onDeletar: (id: number) => void;
}
 
function CategoriaCard({ categoria, onDeletar }: CardCategoriaProps) {
  const navigate = useNavigate();
 
  return (
    <div className="flex flex-col gap-3 bg-[#EDD9B8] border border-[#C8A97A] rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="flex flex-col gap-1">
        <h3 className="text-xl font-bold text-red-950">{categoria.tipo}</h3>
        <p className="text-sm text-amber-900/70 font-medium">
          {categoria.targetAudience}
        </p>
      </div>
 
      <div className="flex gap-2 mt-1">
        <button
          onClick={() => navigate(`/editarCategoria/${categoria.id}`)}
          className="flex-1 py-1.5 px-4 rounded-full border border-red-900 text-red-900 text-sm font-semibold bg-transparent hover:bg-red-900/10 transition-colors duration-150 cursor-pointer"
        >
          editar
        </button>
        <button
          onClick={() => onDeletar(categoria.id)}
          className="flex-1 py-1.5 px-4 rounded-full bg-red-900 text-[#EDD9B8] text-sm font-semibold hover:bg-red-950 transition-colors duration-150 cursor-pointer"
        >
          deletar
        </button>
      </div>
    </div>
  );
}
export default CategoriaCard;