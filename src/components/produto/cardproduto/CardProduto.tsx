import { Link } from "react-router-dom";
import type { Produto } from "../../../models/Produto";

interface CardProdutoProps {
  prod: Produto;
}

export function CardProduto({ prod }: CardProdutoProps) {
  return (
    <div>
      <h2>{prod.nome}</h2>
      <p>Nutri-Score: {prod.nutri_score}</p>
      <p>Calorias: {prod.calorias}kcal</p>

      {prod.categoria && <span>Categoria: {prod.categoria.tipo}</span>}

      <Link to={`/editarProduto/${prod.id}`}>Editar</Link>
      <Link to={`/deletarProduto/${prod.id}`}>Deletar</Link>
    </div>
  );
}
