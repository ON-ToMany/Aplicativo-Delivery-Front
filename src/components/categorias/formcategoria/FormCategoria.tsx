import { useEffect, useState, type ChangeEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type { Categoria } from "../../../models/Categoria";
import { criar, atualizar, Listar } from "../../../services/Service";

function FormCategoria() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const [categoria, setCategoria] = useState<Categoria>({
    id: 0,
    tipo: "",
    targetAudience: "",
    produto: [],
  });

  async function buscarPorId(id: string) {
    try {
      await Listar(`/categorias/${id}`, setCategoria);
    } catch (error) {
      console.error("Erro ao carregar a categoria:", error);
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setCategoria((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function retornar() {
    navigate("/categorias");
  }

  async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    if (categoria.tipo.trim() === "" || categoria.targetAudience.trim() === "") {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    if (id !== undefined) {
      try {
        await atualizar(`/categorias/atualizar`, categoria, setCategoria);
        alert("Categoria atualizada com sucesso! ✅");
        retornar();
      } catch (error) {
        alert("Erro ao atualizar a categoria. Verifique a conexão.");
      }
    } else {
      try {
        const dadosParaEnvio = {
          tipo: categoria.tipo,
          targetAudience: categoria.targetAudience
        };

        await criar(`/categorias/cadastrar`, dadosParaEnvio, setCategoria);
        alert("Categoria cadastrada com sucesso! ✅");
        retornar();
      } catch (error) {
        alert("Erro ao cadastrar a categoria.");
      }
    }
  }

  return (
    <div className="container flex flex-col items-center justify-center mx-auto pt-32 pb-20">
      <h1 className="text-4xl text-center my-8 font-black text-red-900 italic uppercase tracking-tighter">
        {id !== undefined ? "Editar Categoria" : "Nova Categoria"}
      </h1>

      <form 
        className="w-full max-w-md flex flex-col gap-6 bg-white p-8 rounded-2xl shadow-lg border border-red-100" 
        onSubmit={gerarNovaCategoria}
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="tipo" className="font-bold text-red-950 ml-1">
            Nome da Categoria
          </label>
          <input
            type="text"
            id="tipo"
            name="tipo"
            placeholder="Ex: Pizzas Veganas"
            className="border-2 border-red-100 rounded-xl p-3 focus:outline-none focus:border-red-900 transition-colors"
            value={categoria.tipo}
            onChange={atualizarEstado}
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="targetAudience" className="font-bold text-red-950 ml-1">
            Público Alvo
          </label>
          <input
            type="text"
            id="targetAudience"
            name="targetAudience"
            placeholder="Ex: Geral, Público Fit..."
            className="border-2 border-red-100 rounded-xl p-3 focus:outline-none focus:border-red-900 transition-colors"
            value={categoria.targetAudience}
            onChange={atualizarEstado}
            required
          />
        </div>

        <div className="flex gap-4 mt-4">
          <button
            type="button"
            onClick={retornar}
            className="flex-1 rounded-xl text-red-900 border-2 border-red-900 py-3 font-bold hover:bg-red-50 transition-all cursor-pointer"
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="flex-1 rounded-xl text-white bg-red-900 py-3 font-bold hover:bg-red-950 shadow-md hover:shadow-red-900/20 transition-all cursor-pointer"
          >
            {id !== undefined ? "Salvar" : "Cadastrar"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormCategoria;