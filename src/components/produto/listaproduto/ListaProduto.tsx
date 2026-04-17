import { useEffect, useState } from "react";
import { Listar } from "../../../services/Service";
import { CardProduto } from "../cardproduto/CardProduto";
import type { Produto } from "../../../models/Produto";
import { Link } from "react-router-dom";
import { ClipLoader } from "react-spinners";

export function ListaProduto() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [produtos, setProdutos] = useState<Produto[]>([]);

  useEffect(() => {
    buscarProdutos();
  }, []);

  async function buscarProdutos() {
    try {
      setIsLoading(true);
      await Listar("/produtos", setProdutos);
    } catch (error: any) {
      console.log(error);
      alert("Erro ao buscar os produtos");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#FDF6EC] py-12 px-4 mt-20">
      <div className="container mx-auto max-w-6xl flex flex-col gap-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#B07D3A] mb-1">
              Painel de gestão
            </p>
            <h1 className="text-4xl font-bold text-[#3D1F00]">
              Gerenciar Pratos
            </h1>
          </div>

          <Link
            to="/cadastrar-prato"
            className="flex items-center gap-2 bg-[#D97706] hover:bg-[#B45309] text-white font-semibold px-5 py-3 rounded-xl shadow-sm transition-colors duration-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
            Cadastrar Prato
          </Link>
        </div>

        {/* Divider decorativo */}
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-[#E2C98A]" />
          <span className="text-[#D4A84B]">✦</span>
          <div className="h-px flex-1 bg-[#E2C98A]" />
        </div>

        {/* Loading */}
        {isLoading && (
          <div className="flex flex-col items-center justify-center py-20 gap-4">
            <ClipLoader color="#D97706" size={40} />
            <p className="text-[#B07D3A] font-medium">Carregando pratos...</p>
          </div>
        )}

        {/* Vazio */}
        {!isLoading && produtos.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 gap-3 text-center">
            <span className="text-5xl">🍽️</span>
            <p className="text-xl font-semibold text-[#7A5C3A]">
              Nenhum prato cadastrado
            </p>
            <p className="text-sm text-[#B07D3A]">
              Comece adicionando o seu primeiro prato ao cardápio.
            </p>
          </div>
        )}

        {/* Grid de cards */}
        {!isLoading && produtos.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {produtos.map((produto) => (
              <CardProduto key={produto.id} produto={produto} />
            ))}
          </div>
        )}

      </div>
    </div>
  );
}