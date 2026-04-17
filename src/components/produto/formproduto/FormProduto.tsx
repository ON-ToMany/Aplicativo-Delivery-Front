import { useEffect, useState, type ChangeEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { atualizar, criar, Listar } from "../../../services/Service";
import type { Produto } from "../../../models/Produto";

export function FormProduto() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const [produto, setProduto] = useState<Produto>({
    id: 0,
    nome: "",
    descricao_Alimentar: "",
    calorias: 0,
    gordura_total: 0,
    gordura_saturada: 0,
    acucar: 0,
    sodio: 0,
    fibra: 0,
    proteina: 0,
    frutas_vegetais_percentual: 0,
    nutri_score: "A",
    categoria: null,
  });

  useEffect(() => {
    if (id !== undefined) {
      Listar(`/produtos/${id}`, setProduto);
    }
  }, [id]);

  function atualizarEstado(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) {
    const { name, value, type } = e.target;

    setProduto({
      ...produto,

      [name]: type === "number" ? parseFloat(value) : value,
    });
  }

  async function salvar(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    if (id !== undefined) {
      await atualizar(`/produtos`, produto, setProduto);
    } else {
      await criar(`/produtos`, produto, setProduto);
    }
    navigate("/produtos");
  }

  return (
    <div className="container flex flex-col items-center justify-center mx-auto pt-32 pb-20">
      <h1 className="text-4xl text-center my-8 font-black text-red-900 italic uppercase">
        {id !== undefined ? "Editar Produto" : "Novo Produto"}
      </h1>

      <form onSubmit={salvar} className="w-full max-w-2xl flex flex-col gap-4 bg-white p-8 rounded-2xl shadow-lg border border-red-100">
        
        <div className="flex flex-col gap-2">
          <label htmlFor="nome" className="font-bold text-red-950">Nome do Produto</label>
          <input
            type="text"
            id="nome"
            name="nome"
            placeholder="Ex: Hambúrguer de Lentilha"
            className="border-2 border-red-100 rounded-xl p-3 focus:outline-none focus:border-red-900"
            value={produto.nome}
            onChange={atualizarEstado} 
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="descricao_Alimentar" className="font-bold text-red-950">Descrição</label>
          <textarea
            id="descricao_Alimentar"
            name="descricao_Alimentar"
            placeholder="Detalhes do produto..."
            className="border-2 border-red-100 rounded-xl p-3 focus:outline-none focus:border-red-900"
            value={produto.descricao_Alimentar}
            onChange={atualizarEstado}
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
                <label htmlFor="calorias" className="font-bold text-red-950">Calorias (kcal)</label>
                <input
                    type="number"
                    id="calorias"
                    name="calorias"
                    className="border-2 border-red-100 rounded-xl p-3"
                    value={produto.calorias}
                    onChange={atualizarEstado}
                />
            </div>
        </div>

        <div className="flex gap-4 mt-6">
          <button
            type="button"
            onClick={() => navigate("/produtos")}
            className="flex-1 rounded-xl text-red-900 border-2 border-red-900 py-3 font-bold hover:bg-red-50 cursor-pointer"
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="flex-1 rounded-xl text-white bg-red-900 py-3 font-bold hover:bg-red-950 shadow-md transition-all cursor-pointer"
          >
            {id !== undefined ? "Salvar Alterações" : "Cadastrar Produto"}
          </button>
        </div>
      </form>
    </div>
  );
}