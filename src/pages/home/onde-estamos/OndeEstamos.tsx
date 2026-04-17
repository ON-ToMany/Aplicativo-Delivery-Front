import { MapContainer, TileLayer, Marker } from "react-leaflet";
import Pin from "../../../assets/icons/pin.svg";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import Titulo from "../../../components/titulo/Titulo";

// Coordenadas do local onde está o foodtruck (Exemplo: Maracanã como na imagem)
const localizacao: [number, number] = [-22.9121, -43.2302]; 

const icon = L.icon({
  iconUrl: Pin,
  iconSize: [40, 40], // Ajustado para parecer um pouco maior como o da imagem
  iconAnchor: [20, 40],
});

function OndeEstamos() {
  return (
    // Removido h-screen e adicionado py-12 para respiro vertical
    <section className="w-full flex flex-col items-center justify-center px-6 py-12 bg-[#fffcf2]">
      
      {/* Centraliza o título e define um espaçamento inferior */}
      <div className="mb-10">
        <Titulo titulo="ONDE ESTAMOS" />
      </div>

      <div className="w-full max-w-5xl aspect-video md:aspect-21/9 border-[3px] border-[#7a1b1b] rounded-[40px] overflow-hidden shadow-sm">
        <MapContainer 
          center={localizacao} 
          zoom={15} 
          className="w-full h-full"
          zoomControl={false} // Opcional: remove os botões de +/- para um visual mais limpo
        >
          <TileLayer 
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>' 
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          
          <Marker position={localizacao} icon={icon} />
        </MapContainer>
      </div>
    </section>
  );
}

export default OndeEstamos;