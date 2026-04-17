import {
  useEffect,
  useState,
  type ChangeEvent,
  type SyntheticEvent,
} from "react";
import { useNavigate, useParams } from "react-router-dom";
import { atualizar, criar, Listar } from "../../../services/Service";
import type { Produto } from "../../../models/Produto";
import type { Categoria } from "../../../models/Categoria";
import { ClipLoader } from "react-spinners";

const camposNutricionais = [
  { label: "Calorias (kcal)", name: "calorias", icon: "🔥" },
  { label: "Gordura Total (g)", name: "gordura_total", icon: "🧈" },
  { label: "Gordura Saturada (g)", name: "gordura_saturada", icon: "🫙" },
  { label: "Açúcar (g)", name: "acucar", icon: "🍯" },
  { label: "Sódio (mg)", name: "sodio", icon: "🧂" },
  { label: "Fibra (g)", name: "fibra", icon: "🌾" },
  { label: "Proteína (g)", name: "proteina", icon: "💪" },
  { label: "% Frutas e Vegetais", name: "frutas_vegetais_percentual", icon: "🥦" },
];

export function FormProduto() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isLoadingProduto, setIsLoadingProduto] = useState<boolean>(false);
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [produto, setProduto] = useState<Produto>({} as Produto);

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
      alert("Erro ao buscar as Categorias");
    }
  }

  useEffect(() => {
    buscarCategorias();
    if (id !== undefined) buscarProdutoPorId(id);
  }, [id]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setProduto((prev) => ({
      ...prev,
      [name]:
        name === "nome" || name === "descricao_Alimentar" ? value : Number(value),
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
    navigate("/gerenciar-prato");
  }

  async function gerarNovoProduto(e: SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    try {
      if (id !== undefined) {
        await atualizar(`/produtos/atualizar`, produto, setProduto);
        alert("Produto atualizado com sucesso");
      } else {
        await criar(`/produtos/cadastrar`, produto, setProduto);
        alert("Produto cadastrado com sucesso");
      }
      navigate('/gerenciar-prato');
    } catch {
      alert("Erro ao salvar o Produto");
    }
    setIsLoading(false);
    retornar();
  }

  if (isLoadingProduto) {
    return (
      <div className="min-h-screen bg-[#FDF6EC] flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <ClipLoader color="#D97706" size={40} />
          <p className="text-[#B07D3A] font-medium">Carregando prato...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FDF6EC] py-12 px-4">
      <div className="container mx-auto max-w-2xl flex flex-col gap-8">

        {/* Header */}
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#B07D3A] mb-1">
            {id !== undefined ? "Atualizando prato" : "Novo prato"}
          </p>
          <h1 className="text-4xl font-bold text-[#3D1F00]">
            {id !== undefined ? "Editar Prato" : "Cadastrar Prato"}
          </h1>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-[#E2C98A]" />
          <span className="text-[#D4A84B]">✦</span>
          <div className="h-px flex-1 bg-[#E2C98A]" />
        </div>

        {/* Formulário */}
        <form
          onSubmit={gerarNovoProduto}
          className="bg-white border border-[#E2C98A] rounded-3xl shadow-sm p-8 flex flex-col gap-6"
        >

          {/* Seção: Informações básicas */}
          <section className="flex flex-col gap-4">
            <h2 className="text-sm font-bold uppercase tracking-widest text-[#B07D3A]">
              Informações do prato
            </h2>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-[#3D1F00]">
                Nome do prato <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                name="nome"
                value={produto.nome || ""}
                onChange={atualizarEstado}
                required
                placeholder="Ex: Risoto de Cogumelos"
                className="border-2 border-[#E2C98A] focus:border-[#D97706] focus:outline-none rounded-xl p-3 text-[#3D1F00] bg-[#FDFAF3] placeholder-[#C9AD7A] transition-colors duration-200"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-[#3D1F00]">
                Descrição Alimentar <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                name="descricao_Alimentar"
                value={produto.descricao_Alimentar || ""}
                onChange={atualizarEstado}
                required
                placeholder="Ex: Contém glúten, lactose..."
                className="border-2 border-[#E2C98A] focus:border-[#D97706] focus:outline-none rounded-xl p-3 text-[#3D1F00] bg-[#FDFAF3] placeholder-[#C9AD7A] transition-colors duration-200"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-[#3D1F00]">
                Categoria <span className="text-red-400">*</span>
              </label>
              <select
                value={produto.categoria?.id || ""}
                onChange={(e) => selecionarCategoria(e.target.value)}
                required
                className="border-2 border-[#E2C98A] focus:border-[#D97706] focus:outline-none rounded-xl p-3 text-[#3D1F00] bg-[#FDFAF3] transition-colors duration-200 cursor-pointer"
              >
                <option value="" disabled>
                  Selecione uma categoria
                </option>
                {categorias.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.tipo}
                  </option>
                ))}
              </select>
            </div>
          </section>

          {/* Divisor de seção */}
          <div className="h-px bg-[#F0DFB4]" />

          {/* Seção: Informações nutricionais */}
          <section className="flex flex-col gap-4">
            <h2 className="text-sm font-bold uppercase tracking-widest text-[#B07D3A]">
              Tabela Nutricional
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {camposNutricionais.map((campo) => (
                <div key={campo.name} className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-[#3D1F00] flex items-center gap-1.5">
                    <span className="text-base">{campo.icon}</span>
                    {campo.label}
                    <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="number"
                    name={campo.name}
                    value={(produto as any)[campo.name] || ""}
                    onChange={atualizarEstado}
                    required
                    min={0}
                    placeholder="0"
                    className="border-2 border-[#E2C98A] focus:border-[#D97706] focus:outline-none rounded-xl p-3 text-[#3D1F00] bg-[#FDFAF3] placeholder-[#C9AD7A] transition-colors duration-200"
                  />
                </div>
              ))}
            </div>
          </section>

          {/* Divisor */}
          <div className="h-px bg-[#F0DFB4]" />

          {/* Botões */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              type="button"
              onClick={retornar}
              className="flex-1 py-3 px-6 rounded-xl border-2 border-[#E2C98A] text-[#7A5C3A] font-semibold hover:bg-[#FDF0D5] transition-colors duration-200"
            >
              Cancelar
            </button>

            <button
              type="submit"
              disabled={isLoading}
              className="flex-1 flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-[#D97706] hover:bg-[#B45309] disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold transition-colors duration-200 shadow-sm"
            >
              {isLoading ? (
                <ClipLoader color="#ffffff" size={20} />
              ) : (
                <>
                  {id !== undefined ? (
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                      </svg>
                      Atualizar Prato
                    </>
                  ) : (
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                      </svg>
                      Cadastrar Prato
                    </>
                  )}
                </>
              )}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}