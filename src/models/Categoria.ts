import type { Produto } from "./Produto";

export interface Categoria {
  id: number;
  tipo: string;
  targetAudience: string;
  produto: Produto[];
}
