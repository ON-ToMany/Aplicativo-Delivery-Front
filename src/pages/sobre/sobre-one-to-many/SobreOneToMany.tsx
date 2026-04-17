function SobreOneToMany() {
  return (
    <section
      id="sobre"
      className="pt-32 pb-20 px-6 bg-[#E2BE94]"
    >
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col md:flex-row items-center gap-12">

          {/* IMAGEM */}
          <div className="flex justify-center shrink">
            <img
              src="https://ik.imagekit.io/9yqf3fqpw/OneToMany..png"
              alt="OneToMany"
              className="w-72 object-contain"
            />
          </div>

          {/* TEXTO */}
          <div className="max-w-md ml-50">
            <h2 className="text-4xl font-bold text-red-950 mb-6">
              Sobre Nós
            </h2>

            <p className="text-red-950 text-lg leading-relaxed text-justify">
              Uma empresa focada no desenvolvimento de soluções tecnológicas
              com propósito.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default SobreOneToMany;