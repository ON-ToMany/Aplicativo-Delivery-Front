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
    // usuario: null,
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

  return 
  
}
