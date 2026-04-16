import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { deletar, Listar } from "../../../services/Service";
import type Produto from "../../../models/Produto";

export function DeletarProduto() {
  const [produto, setProduto] = useState<Produto>({} as Produto);
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id !== undefined) {
      Listar(`/produtos/${id}`, setProduto);
    }
  }, [id]);

  async function confirmarExclusao() {
    await deletar(`/produtos/${id}`);
    navigate("/produtos");
  }

  return (
    <div>
      <p>Confirmar exclusão de: {produto.nome}?</p>
      <button onClick={() => navigate("/produtos")}>Cancelar</button>
      <button onClick={confirmarExclusao}>Confirmar</button>
    </div>
  );
}
