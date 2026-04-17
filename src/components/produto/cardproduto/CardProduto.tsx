import { Link } from "react-router-dom";
import type { Produto } from "../../../models/Produto";

interface CardProdutoProps {
  produto: Produto;
}

export function CardProduto({ produto }: CardProdutoProps) {
  return (
    <div className="group flex flex-col bg-[#FAF0DC] border border-[#E2C98A] rounded-2xl p-5 gap-4 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">

      {/* Header */}
      <div className="flex flex-col gap-1">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#B07D3A]">
          {produto.categoria?.tipo ?? "Sem categoria"}
        </span>
        <h2 className="text-xl font-bold text-[#3D1F00] leading-tight">
          {produto.nome}
        </h2>
      </div>

      {/* Divider */}
      <div className="w-12 h-0.5 bg-[#D4A84B] rounded-full" />

      {/* Descrição */}
      <p className="text-sm text-[#7A5C3A] leading-relaxed line-clamp-3">
        {produto.descricao_Alimentar}
      </p>

      {/* Info nutricional resumida */}
      <div className="flex flex-wrap gap-2 mt-auto">
        {produto.calorias !== undefined && (
          <span className="text-xs bg-[#F0D9A8] text-[#7A5C3A] px-2 py-1 rounded-full font-medium">
            🔥 {produto.calorias} kcal
          </span>
        )}
        {produto.proteina !== undefined && (
          <span className="text-xs bg-[#F0D9A8] text-[#7A5C3A] px-2 py-1 rounded-full font-medium">
            💪 {produto.proteina}g prot.
          </span>
        )}
        {produto.fibra !== undefined && (
          <span className="text-xs bg-[#F0D9A8] text-[#7A5C3A] px-2 py-1 rounded-full font-medium">
            🌾 {produto.fibra}g fibra
          </span>
        )}
      </div>

      {/* Botões */}
      <div className="flex gap-3 pt-2">
        <Link
          to={`/editar-prato/${produto.id}`}
          className="flex-1 flex items-center justify-center gap-1.5 py-2 px-4 rounded-xl bg-[#D97706] hover:bg-[#B45309] text-white text-sm font-semibold transition-colors duration-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
          </svg>
          Editar
        </Link>

        <Link
          to={`/deletar-prato/${produto.id}`}
          className="flex-1 flex items-center justify-center gap-1.5 py-2 px-4 rounded-xl border-2 border-[#DC2626] text-[#DC2626] hover:bg-[#DC2626] hover:text-white text-sm font-semibold transition-all duration-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="3 6 5 6 21 6" />
            <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
            <path d="M10 11v6M14 11v6" />
            <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
          </svg>
          Deletar
        </Link>
      </div>
    </div>
  );
}