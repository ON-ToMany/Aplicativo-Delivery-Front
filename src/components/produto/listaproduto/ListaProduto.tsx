import { useEffect, useState } from "react";
import { Listar } from "../../../services/Service";
import { CardProduto } from "../cardproduto/CardProduto";
import type { Produto } from "../../../models/Produto";

export function ListaProduto() {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  useEffect(() => {
    Listar("/produtos", setProdutos);
  }, []);

  const produtosOrdenados = [...produtos].sort((a, b) =>
    a.nutri_score.localeCompare(b.nutri_score),
  );

  return (
    <>
      {produtosOrdenados.map((produto) => (
        <CardProduto key={produto.id} prod={produto} />
      ))}
    </>
  );
}
