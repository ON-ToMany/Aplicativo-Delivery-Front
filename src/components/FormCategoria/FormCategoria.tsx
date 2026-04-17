import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {atualizar, criar, Listar } from '../../service/service'
import type { Categoria } from '../../models/Categoria'

export default function FormCategoria() {



const[categoria,setCategoria]=useState<Categoria>({} as Categoria)
const {id} = useParams<{id:string}>()
const[isloading,setIsloading]=useState<boolean>()

const navigate =useNavigate()

const retorna = ()=>{
    navigate("/")
}


const buscarId = async ()=>{
try{
await Listar(`/categorias/${id}`,setCategoria)

}catch(error){
    console.log(error)
}
}




useEffect(()=>{
if(id !== undefined){
    buscarId()
}

},[id])


//cadastrar e atualizar

async function categoriaForm(){
if(id ===undefined){
try{
await criar("/categorias/cadastrar",categoria,setCategoria)
alert('cadastrado com sucesso!')
}catch(error){
console.log(error)
}
}else{

try{
await atualizar("/categorias/atualizar",categoria,setCategoria)
alert('categoria Atualizada!')
}catch(error){
console.log(error)
}


}

}





  return (
    <div>
      
    </div>
  )
}
