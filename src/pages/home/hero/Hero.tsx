function Hero() {
  return (
    <section className="relative w-full h-svh min-h-125 max-h-230 overflow-hidden">
      {/* Imagem de fundo */}
      <img
        src="https://ik.imagekit.io/9yqf3fqpw/image%203.png"
        alt="Friendly Food truck na rua"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Conteúdo */}
      <div className="relative z-10 flex flex-col justify-center h-full px-6 sm:px-12 md:px-20 gap-4 sm:gap-5 pt-20 sm:pt-24">
        {/* Título */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black italic leading-none text-[#E2BE94] drop-shadow-lg">
          <span className="text-red-500">F</span>RIENDLY
          <br />
          <span className="text-red-500">F</span>OOD
        </h1>

        {/* Subtítulo */}
        <p className="text-white/90 text-base sm:text-lg md:text-xl font-medium max-w-xs sm:max-w-sm leading-snug drop-shadow">
          Compartilhando refeições e espalhando solidariedade
        </p>

        {/* Botões */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-1 sm:mt-2">
          <a
            href="#doacao"
            className="text-center px-6 py-2.5 rounded-full border-2 border-[#E2BE94] text-[#E2BE94] font-semibold text-sm hover:bg-[#E2BE94] hover:text-red-950 transition-all duration-200"
          >
            Faça uma doação
          </a>
          <a
            href="#onde-estamos"
            className="text-center px-6 py-2.5 rounded-full bg-red-600 text-[#E2BE94] font-semibold text-sm hover:bg-red-700 hover:scale-105 transition-all duration-200"
          >
            Onde estamos
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;