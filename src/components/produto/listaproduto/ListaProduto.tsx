import { useEffect, useState } from "react";
import { Listar } from "../../../services/Service";
import { CardProduto } from "../cardproduto/CardProduto";
import type { Produto } from "../../../models/Produto";
import Titulo from "../../titulo/Titulo";
import { Link } from "react-router-dom";

export function ListaProduto() {

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [produtos, setProdutos] = useState<Produto[]>([]);

  useEffect(() => {
    buscarProdutos();
  }, []);

  async function buscarProdutos() {
    try {
      setIsLoading(true);
      await Listar('/produtos', setProdutos);
    } catch (error: any) {
      console.log(error);
      alert('Erro ao buscar os produtos');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="flex justify-center w-full my-40">
      <div className="container flex flex-col mx-2 gap-8">

        <div className="flex justify-between items-center">
          <Titulo titulo="Gerenciar Pratos" />
          <Link 
            to="/cadastrar-prato"
            className="bg-indigo-500 hover:bg-indigo-700 text-white px-4 py-2 rounded"
          >
            Cadastrar Prato
          </Link>
        </div>

        {isLoading && (
          <p className="text-center text-lg">Carregando produtos...</p>
        )}

        {!isLoading && produtos.length === 0 && (
          <p className="text-center text-gray-500">Nenhum produto encontrado</p>
        )}

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {produtos.map((produto) => (
            <CardProduto key={produto.id} produto={produto} />
          ))}
        </div>

      </div>
    </div>
  );
}
