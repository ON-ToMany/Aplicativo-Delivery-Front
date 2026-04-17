type TituloProps = {
    titulo: string;
}

function Titulo({ titulo }: TituloProps) {
  return (
    <h2 className="text-5xl font-black text-red-900">{titulo}</h2>
  )
}

export default Titulo