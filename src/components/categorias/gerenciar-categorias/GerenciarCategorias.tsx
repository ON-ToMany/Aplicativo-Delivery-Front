import { useEffect, useState } from "react";
import type { Categoria } from "../../../models/Categoria";
import { useNavigate } from "react-router-dom";
import { deletar, Listar } from "../../../services/Service";
import CategoriaCard from "../categoria-card/CategoriaCard";

function GerenciarCategorias() {
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
 
  async function buscarCategorias() {
    setLoading(true);
    await Listar("/categorias", setCategorias);
    setLoading(false);
  }
 
  useEffect(() => {
    buscarCategorias();
  }, []);
 
  async function handleDeletar(id: number) {
    await deletar(`/categorias/${id}`);
    await buscarCategorias();
  }
 
  return (
    <div className="min-h-screen bg-[#F5F5F5] pt-28 pb-16 px-8 md:px-20">

      <div className="flex items-center justify-between mb-10">
        <h1 className="text-4xl md:text-5xl font-black text-red-900 italic">
          Gerenciar Categorias
        </h1>
 
        <button
          onClick={() => navigate("/cadastrarCategoria")}
          className="flex items-center gap-2 bg-red-900 text-[#EDD9B8] font-bold text-sm px-5 py-2.5 rounded-full shadow hover:bg-red-950 hover:scale-105 transition-all duration-200 cursor-pointer"
        >
          <span className="text-lg leading-none">+</span>
          cadastrar novo
        </button>
      </div>
 
      {loading ? (
        <div className="flex justify-center items-center h-48">
          <span className="text-red-900/60 text-lg font-medium animate-pulse">
            Carregando categorias...
          </span>
        </div>
      ) : categorias.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-48 gap-3 text-red-900/50">
          <span className="text-5xl">🍽️</span>
          <p className="text-lg font-semibold">Nenhuma categoria cadastrada.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categorias.map((cat) => (
            <CategoriaCard
              key={cat.id}
              categoria={cat}
              onDeletar={handleDeletar}
            />
          ))}
        </div>
      )}
    </div>
  );
}
 export default GerenciarCategorias;