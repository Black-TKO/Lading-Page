export default function Hero() {
  return (
    <section id="hero" className="pt-20 pb-12 sm:pt-32 sm:pb-20 bg-[#003D6A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 font-inter leading-tight">
              Ecossistema <span className="text-[#F5B422]">Lume</span>
            </h1>
            <p className="text-lg sm:text-xl mb-6 font-roboto text-gray-100 leading-relaxed">
              A Força da Nossa Comunidade
            </p>
            <p className="text-base sm:text-lg font-roboto text-gray-200 mb-8 leading-relaxed">
              Ecossistema digital criado por estudantes da UFF para conectar pessoas, integrar calouros, fortalecer o networking e impulsionar a economia estudantil.
            </p>
            <button className="w-full sm:w-auto px-8 py-4 bg-[#F5B422] text-[#003D6A] font-bold rounded-lg hover:bg-yellow-500 transition-colors font-inter text-center">
              FAZER PARTE DO LUME
            </button>
          </div>

          <div className="flex justify-center">
            <div className="relative w-full max-w-xs">
              <div className="rounded-3xl border-8 border-gray-400 bg-gradient-to-br from-blue-400 to-blue-600 p-2 shadow-2xl">
                <div className="bg-white rounded-2xl p-6 h-96 flex flex-col items-center justify-center">
                  <div className="text-[#003D6A] text-center">
                    <div className="text-5xl mb-4">L</div>
                    <p className="text-sm font-inter font-semibold">Seu acesso ao ecossistema</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
