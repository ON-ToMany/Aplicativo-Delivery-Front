import type { Produto } from "./Produto";

export interface Usuario{
    id: string;
    nome: string;
    usuario: string;
    senha: string;
    produto: Produto[];
}