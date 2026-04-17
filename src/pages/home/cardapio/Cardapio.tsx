import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaChevronDown } from 'react-icons/fa';
import Pratos from '../../../assets/images/pratos/pratos';



interface Prato {
  id: number;
  nome: string;
  descricao: string;
  nutreScore: string;
  imagem: string;
}

const pratos: Prato[] = [
  {
    id: 1,
    nome: "Frango Grelhado Fit",
    descricao: "Peito de frango grelhado acebolado, acompanhado de arroz integral, feijão carioca fresquinho e uma porção de legumes no vapor.",
    nutreScore: "A",
    imagem:  Pratos.frango
  },
  {
    id: 2,
    nome: "Peixe ao Molho de Ervas",
    descricao: "Filé de tilápia assado com ervas finas, servido com purê de batata doce e mix de folhas verdes com tomate cereja.",
    nutreScore: "A",
    imagem: Pratos.peixe
  },
  {
    id: 3,
    nome: "Omelete de Espinafre",
    descricao: "Omelete super nutritivo com espinafre e queijo branco, acompanhado de arroz sete grãos e salada de beterraba ralada.",
    nutreScore: "A",
    imagem: Pratos.omelete
  },
  {
    id: 4,
    nome: "Carne Moída com Legumes",
    descricao: "Patinho moído refogado com cenoura e vagem, acompanhado de arroz branco soltinho e feijão preto.",
    nutreScore: "A",
    imagem: Pratos.carnemoida
  },
];

const Cardapio: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);


  const totalSlides = Math.ceil(pratos.length / 2);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1 >= totalSlides ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  return (
    <section className="bg-[#fffcf2] py-16 px-6 md:px-20 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Header do Cardápio */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
          <h2 className="text-5xl font-black text-[#7a1b1b]">CARDÁPIO</h2>
          
          <div className="flex gap-4">
            <button className="flex items-center gap-2 bg-[#d9c5a0] px-4 py-2 rounded-lg font-bold text-gray-800 cursor-pointer">
              Categoria <FaChevronDown size={14} />
            </button>
            <button className="flex items-center gap-2 bg-[#d9c5a0] px-4 py-2 rounded-lg font-bold text-gray-800 cursor-pointer">
              Saudável <FaChevronDown size={14} />
            </button>
          </div>
        </div>

        {/* Slider */}
        <div className="relative flex items-center group">
          <button 
            onClick={prevSlide}
            className="absolute -left-12 p-2 text-[#7a1b1b] hover:scale-110 transition-transform hidden md:block z-10 cursor-pointer"
          >
            <FaChevronLeft size={40} />
          </button>

          <div className="overflow-hidden w-full">
            <div 
              className="flex transition-transform duration-500 ease-out gap-6"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {pratos.map((prato) => (
                <div key={prato.id} className="min-w-full md:min-w-[calc(50%-12px)] bg-[#e6d5b8] rounded-3xl overflow-hidden flex shadow-sm h-64">
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-[#5a3e2b] mb-2">{prato.nome}</h3>
                      <p className="text-sm text-[#5a3e2b] line-clamp-4 leading-relaxed">{prato.descricao}</p>
                    </div>
                    <div className="mt-4">
                      <p className="text-xs font-bold text-[#5a3e2b] mb-1">Nutre score:</p>
                      <span className="bg-[#00a859] text-white px-3 py-1 rounded font-bold">
                        {prato.nutreScore}
                      </span>
                    </div>
                  </div>
                  <div className="w-1/3 md:w-2/5">
                    <img 
                      src={prato.imagem} 
                      alt={prato.nome} 
                      className="h-full w-full object-cover" 
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button 
            onClick={nextSlide}
            className="absolute -right-12 p-2 text-[#7a1b1b] hover:scale-110 transition-transform hidden md:block z-10 cursor-pointer"
          >
            <FaChevronRight size={40} />
          </button>
        </div>

        {/* Indicadores (Dots) */}
        <div className="flex justify-center gap-2 mt-8">
          {[...Array(totalSlides)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-3 h-3 rounded-full transition-colors cursor-pointer ${currentIndex === i ? 'bg-[#7a1b1b]' : 'bg-[#d9c5a0]'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cardapio;