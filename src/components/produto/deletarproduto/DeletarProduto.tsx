import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { deletar, Listar } from "../../../services/Service";
import type { Produto } from "../../../models/Produto";
import { ClipLoader } from "react-spinners";

export function DeletarProduto() {
  const [produto, setProduto] = useState<Produto>({} as Produto);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id !== undefined) {
      Listar(`/produtos/${id}`, setProduto);
    }
  }, [id]);

  async function confirmarExclusao() {
    setIsLoading(true);
    try {
      await deletar(`/produtos/${id}`);
      navigate("/gerenciar-prato");
    } catch {
      alert("Erro ao deletar o produto");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#FDF6EC] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white border border-[#E2C98A] rounded-3xl shadow-lg overflow-hidden">

        {/* Faixa de aviso */}
        <div className="bg-red-50 border-b border-red-100 px-8 py-5 flex items-center gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="3 6 5 6 21 6" />
              <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
              <path d="M10 11v6M14 11v6" />
              <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
            </svg>
          </div>
          <div>
            <h2 className="text-lg font-bold text-red-700">Excluir prato</h2>
            <p className="text-xs text-red-400">Essa ação não pode ser desfeita</p>
          </div>
        </div>

        {/* Corpo */}
        <div className="px-8 py-8 flex flex-col gap-6">
          <p className="text-[#7A5C3A] text-sm leading-relaxed">
            Você está prestes a excluir permanentemente o prato:
          </p>

          <div className="bg-[#FDF0D5] border border-[#E2C98A] rounded-2xl px-5 py-4">
            <p className="text-xs uppercase tracking-widest text-[#B07D3A] font-semibold mb-1">
              {produto.categoria?.tipo ?? "Sem categoria"}
            </p>
            <h3 className="text-xl font-bold text-[#3D1F00]">
              {produto.nome || "Carregando..."}
            </h3>
            {produto.descricao_Alimentar && (
              <p className="text-sm text-[#7A5C3A] mt-1 line-clamp-2">
                {produto.descricao_Alimentar}
              </p>
            )}
          </div>

          <p className="text-sm text-gray-400 text-center">
            Tem certeza que deseja continuar?
          </p>

          {/* Botões */}
          <div className="flex gap-3">
            <button
              onClick={() => navigate("/gerenciar-prato")}
              className="flex-1 py-3 px-4 rounded-xl border-2 border-[#E2C98A] text-[#7A5C3A] font-semibold text-sm hover:bg-[#FDF0D5] transition-colors duration-200"
            >
              Cancelar
            </button>

            <button
              onClick={confirmarExclusao}
              disabled={isLoading}
              className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-red-500 hover:bg-red-600 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold text-sm transition-colors duration-200"
            >
              {isLoading ? (
                <ClipLoader color="#ffffff" size={18} />
              ) : (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="3 6 5 6 21 6" />
                    <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
                    <path d="M10 11v6M14 11v6" />
                    <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
                  </svg>
                  Confirmar exclusão
                </>
              )}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}