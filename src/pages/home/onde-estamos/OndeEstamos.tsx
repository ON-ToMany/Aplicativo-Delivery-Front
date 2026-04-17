import { MapContainer, TileLayer, Marker } from "react-leaflet";
import Pin from "../../../assets/icons/pin.svg";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import  Titulo  from "../../../components/titulo/Titulo";

// Coordenadas do local onde está o foodtruck (exemplo: Rio de Janeiro) 
const localizacao: [number, number] = [-22.9068, -43.1729]; 

// Configuração do ícone personalizado para o marcador no mapa
const icon = L.icon({
  iconUrl: Pin,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

function OndeEstamos() {
  return (
    <div className="flex-col w-full h-screen flex justify-center px-28 py-16 gap-8">
      <Titulo titulo="ONDE ESTAMOS" />

      <div className="w-full h-full border-4 border-red-900 rounded-xl overflow-hidden ">
        {/* Container do mapa, centraliza na tela a localização definida na const localizacao; zoom do mapa */}
        <MapContainer center={localizacao} zoom={13} className="w-full h-full">
          <TileLayer attribution="&copy; OpenStreetMap" url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
          
          {/* Adiciona o pin na localização do foodtruck */}
          <Marker position={localizacao} icon={icon} />
        </MapContainer>
      </div>
    </div>
  )
}
export default OndeEstamos