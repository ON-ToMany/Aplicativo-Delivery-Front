
import { useEffect, useState } from 'react'
import { Listar } from '../../service/service'
import type { Categoria } from '../../model/categoria'

export default function ListarCategoria() {
const[categoria,SetCategoria] =useState<Categoria[]>([])
const[isloading,setIloading] =useState<boolean>(false)





useEffect(()=>{
    
async function listar(){
try{
    setIloading(true)
await Listar("/categorias",SetCategoria)

}catch(error){
console.log(error)

}

}
listar()

},[])


  return (
    <div>
      
    </div>
  )
}
