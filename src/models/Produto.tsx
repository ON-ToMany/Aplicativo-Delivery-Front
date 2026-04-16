export default interface Produto {
  id: number;
  nome: string;
  descricao_Alimentar: string;
  calorias: number;
  gordura_total: number;
  gordura_saturada: number;
  acucar: number;
  sodio: number;
  fibra: number;
  proteina: number;
  frutas_vegetais_percentual: number;
  nutri_score: string;
  usuario: Usuario | null;
  categoria: Categoria | null;
}
