import React from 'react';

const SobreFriendlyFood: React.FC = () => {
  return (
    <section className="bg-[#f5e6d3] py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        
        {/* Lado Esquerdo: Títulos e Botão */}
        <div className="space-y-6">
          <h2 className="text-5xl font-black text-[#7a1b1b] tracking-tight">
            SOBRE NÓS
          </h2>
          <div className="space-y-2">
            <p className="text-[#a64d4d] italic font-medium text-xl">
              Alimentando Vidas, onde a Fome Estiver!
            </p>
            <p className="text-gray-700 font-medium">
              gostou do nosso projeto e quer contribuir?
            </p>
          </div>
          <button className="bg-[#7a1b1b] text-white px-8 py-2 rounded-full font-bold hover:bg-[#5a1414] transition-colors cursor-pointer">
            seja voluntário
          </button>
        </div>

        {/* Lado Direito: Texto Descritivo */}
        <div className="text-gray-800 leading-relaxed space-y-4 text-lg">
          <p>
            O <span className="font-bold text-[#7a1b1b]">Friendly Food</span> não é apenas um app, é uma rede de esperança em movimento. Somos um <span className="font-bold text-[#7a1b1b]">delivery itinerante</span> dedicado a levar refeições saudáveis, nutritivas e feitas com carinho diretamente para quem mais precisa.
          </p>
          <p>
            Nossa missão é <span className="font-bold text-[#7a1b1b]">combater a insegurança alimentar</span>, encurtando a distância entre a comida de qualidade e as comunidades vulneráveis. Através da tecnologia, conectamos corações generosos à nossa estrutura logística, garantindo que a ajuda chegue a quem, muitas vezes, não tem como buscá-la.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SobreFriendlyFood;