import axios from "axios";

const api = axios.create({baseURL:"sads"})



// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
export const Listar = async(url:string,setDados:Function)=>{
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const resposta = await api.get(url)

setDados(resposta.data)

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