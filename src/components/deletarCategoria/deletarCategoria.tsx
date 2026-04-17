import  { useState } from 'react'
import { useParams } from 'react-router-dom'
import { deletarCategoria } from '../../service/service'

const {id} = useParams()
const[isloading,setIsloading]=useState<boolean>()


export default function deletarCategorias() {

async function deletar(){
try {
setIsloading(true)
await deletarCategoria(`/categorias/${id}`)

alert('deletado com sucesso!')
    
} catch (error) {
    console.log(error)
}finally{
    setIsloading(false)
}


}
  return (
    <div>
      <button onClick={deletar}></button>
    </div>
  )
}
