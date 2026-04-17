import Titulo from "../../../components/titulo/Titulo"
import { cronogramaDia } from "./Data"

function Cronograma() {
  return (
    <>
      <div className="relative z-0 w-full flex flex-col -mb-6 px-28 py-20 bg-[#E2BE94] border border-red-900 rounded-t-3xl p-8 gap-8">
        <Titulo titulo="CRONOGRAMA" />

        <table className="w-full text-2xl text-amber-950">
          <thead>
            <tr className="text-amber-950">
              <th className="w-16"/>
              <th className="text-left py-3 px-4 tracking-wide">Endereço</th>
              <th className="text-right py-3 px-4 tracking-wide">Horário</th>
            </tr>
          </thead>

          <tbody>
            {cronogramaDia.map((item, index) => (
              <tr key={index} className="border-t border-red-900">
                <td className="py-3 px-4 font-bold text-red-900 w-16 whitespace-nowrap">{item.dia}</td>
                <td className="py-3 px-4 ">{item.endereco}</td>
                <td className="py-3 px-4 text-right whitespace-nowrap">{item.horario}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Cronograma