import axios from "axios";

const api = axios.create({baseURL: import.meta.env.VITE_API_URL})

// logica de ordem

//const Filtragem_Saudavel = ()=>{
//const categoriasOrdenadas = [...categoria].sort((a: Categoria, b: Categoria) => 
//a.nutri_score.localeCompare(b.nutri_score)
//);
//}

// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
export const Listar = async (url: string, setDados: Function) => {
  try {
    const resposta = await api.get(url)
    setDados(resposta.data)
  } catch (error) {
    console.error("Erro ao listar:", error)
    setDados([]) 
  }
}


// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
export const criar = async(url:string,dados:object,setDados:Function)=>{
const resposta = await api.post(url,dados)
setDados(resposta.data)


}

// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
export const atualizar = async(url:string,dados:object,setDados:Function)=>{
    const resposta = await api.put(url,dados)
    
    setDados(resposta.data)


}


export const deletar = async(url:string)=>{
await api.delete(url)


}