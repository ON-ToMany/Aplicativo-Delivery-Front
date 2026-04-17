import { useEffect, useState, type ChangeEvent, type SyntheticEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { atualizar, criar, Listar } from "../../../services/Service";
import type { Produto } from "../../../models/Produto";
import type { Categoria } from "../../../models/Categoria";
import { ClipLoader } from "react-spinners";

export function FormProduto() {

  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isLoadingProduto, setIsLoadingProduto] = useState<boolean>(false);
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [produto, setProduto] = useState<Produto>({} as Produto);

  const { id } = useParams<{ id: string }>();

  // Diagnóstico — remova após confirmar que o id está chegando
  console.log("ID vindo do useParams:", id);

  // ================== BUSCAS ==================

  async function buscarProdutoPorId(id: string) {
    setIsLoadingProduto(true);
    try {
      await Listar(`/produtos/${id}/`, setProduto);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoadingProduto(false);
    }
  }

  async function buscarCategorias() {
    try {
      await Listar(`/categorias`, setCategorias);
    } catch {
      alert('Erro ao buscar as Categorias');
    }
  }

  // ================== EFFECTS ==================

  useEffect(() => {
    buscarCategorias();

    if (id !== undefined) {
      buscarProdutoPorId(id);
    }
  }, [id]);

  // ================== HANDLERS ==================

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    setProduto((prev) => ({
      ...prev,
      [name]:
        name === "nome" || name === "descricao_Alimentar"
          ? value
          : Number(value),
    }));
  }

  function selecionarCategoria(idCategoria: string) {
    const categoriaSelecionada = categorias.find(
      (cat) => cat.id === Number(idCategoria)
    );

    setProduto((prev) => ({
      ...prev,
      categoria: categoriaSelecionada || null,
    }));
  }

  function retornar() {
    navigate('/produtos');
  }

  async function gerarNovoProduto(e: SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (id !== undefined) {
        await atualizar(`/produtos/atualizar`, produto, setProduto);
        alert('Produto atualizado com sucesso');
      } else {
        await criar(`/produtos/cadastrar`, produto, setProduto);
        alert('Produto cadastrado com sucesso');
      }
    } catch {
      alert('Erro ao salvar o Produto');
    }

    setIsLoading(false);
    retornar();
  }

  // ================== RENDER ==================

  if (isLoadingProduto) {
    return (
      <div className="flex justify-center mt-10">
        <ClipLoader color="#6366f1" size={32} />
      </div>
    );
  }

  return (
    <div className="container flex flex-col mx-auto items-center">
      <h1 className="text-4xl text-center my-8">
        {id !== undefined ? 'Editar Produto' : 'Cadastrar Produto'}
      </h1>

      <form className="flex flex-col w-1/2 gap-4" onSubmit={gerarNovoProduto}>

        {/* Nome */}
        <div className="flex flex-col gap-2">
          <label>Nome do prato</label>
          <input
            type="text"
            name="nome"
            value={produto.nome || ''}
            onChange={atualizarEstado}
            required
            className="border-2 border-slate-700 rounded p-2"
          />
        </div>

        {/* Descrição */}
        <div className="flex flex-col gap-2">
          <label>Descrição Alimentar</label>
          <input
            type="text"
            name="descricao_Alimentar"
            value={produto.descricao_Alimentar || ''}
            onChange={atualizarEstado}
            required
            className="border-2 border-slate-700 rounded p-2"
          />
        </div>

        {/* Campos nutricionais */}
        {[
          { label: "Calorias", name: "calorias" },
          { label: "Gordura Total (g)", name: "gordura_total" },
          { label: "Gordura Saturada (g)", name: "gordura_saturada" },
          { label: "Açúcar (g)", name: "acucar" },
          { label: "Sódio (mg)", name: "sodio" },
          { label: "Fibra (g)", name: "fibra" },
          { label: "Proteína (g)", name: "proteina" },
          { label: "% Frutas e Vegetais", name: "frutas_vegetais_percentual" },
        ].map((campo) => (
          <div className="flex flex-col gap-2" key={campo.name}>
            <label>{campo.label}</label>
            <input
              type="number"
              name={campo.name}
              value={(produto as any)[campo.name] || ''}
              onChange={atualizarEstado}
              required
              className="border-2 border-slate-700 rounded p-2"
            />
          </div>
        ))}

        {/* Categoria */}
        <div className="flex flex-col gap-2">
          <label>Categoria</label>
          <select
            value={produto.categoria?.id || ''}
            onChange={(e) => selecionarCategoria(e.target.value)}
            className="border p-2 border-slate-800 rounded"
            required
          >
            <option value="" disabled>
              Selecione uma Categoria
            </option>

            {categorias.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.tipo}
              </option>
            ))}
          </select>
        </div>

        {/* Botão */}
        <button
          type="submit"
          className="rounded bg-indigo-400 hover:bg-indigo-800 text-white font-bold w-1/2 mx-auto py-2 flex justify-center"
        >
          {isLoading ? <ClipLoader color="#ffffff" size={24} /> : (id !== undefined ? 'Atualizar' : 'Cadastrar')}
        </button>

      </form>
    </div>
  );
}