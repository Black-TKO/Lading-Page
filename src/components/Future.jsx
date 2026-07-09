export default function Future() {
  return (
    <section id="futuro" className="py-16 sm:py-24 bg-[#003D6A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 sm:mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 font-inter">
            O Futuro Está em Suas Mãos
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start">
          <div>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold font-inter mb-4 text-[#F5B422]">
                  Começamos em Niterói
                </h3>
                <p className="text-base sm:text-lg font-roboto text-gray-100 leading-relaxed">
                  Atualmente, o Lume opera com foco principal em Niterói, mas o nosso horizonte não tem limites.
                </p>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-bold font-inter mb-4 text-[#F5B422]">
                  Quem Define o Caminho
                </h3>
                <p className="text-base sm:text-lg font-roboto text-gray-100 leading-relaxed">
                  É importante que você saiba: o destino deste projeto não pertence ao governo, nem à instituição UFF; ele pertence a você.
                </p>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-bold font-inter mb-4 text-[#F5B422]">
                  Depende do Seu Engajamento
                </h3>
                <p className="text-base sm:text-lg font-roboto text-gray-100 leading-relaxed">
                  A decisão de continuar operando ou de atender outros campi no interior depende inteiramente da recepção dos estudantes nestas localidades.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#F5B422] to-yellow-500 rounded-2xl p-8 sm:p-12 text-[#003D6A]">
            <h3 className="text-3xl sm:text-4xl font-bold font-inter mb-6">
              Junte-se ao Movimento
            </h3>
            
            <div className="space-y-6 mb-8">
              <div className="bg-white bg-opacity-50 rounded-lg p-4">
                <p className="font-bold font-inter text-lg mb-2">Consumidores</p>
                <p className="font-roboto text-base">
                  Explore o marketplace, peça da nossa comunidade culinária e conecte-se com outros estudantes.
                </p>
              </div>

              <div className="bg-white bg-opacity-50 rounded-lg p-4">
                <p className="font-bold font-inter text-lg mb-2">Vendedores</p>
                <p className="font-roboto text-base">
                  Ofereça seus produtos e serviços através do ecossistema Lume.
                </p>
              </div>

              <div className="bg-white bg-opacity-50 rounded-lg p-4">
                <p className="font-bold font-inter text-lg mb-2">Divulgadores</p>
                <p className="font-roboto text-base">
                  Compartilhe o movimento nas redes sociais e ajude a expandir o Lume.
                </p>
              </div>
            </div>

            <p className="text-base sm:text-lg font-roboto font-semibold">
              Para que este ecossistema prospere, precisamos que você se mobilize e engaje o apoio ao movimento. O Lume é uma chama alimentada pela nossa própria comunidade. O seu apoio é o que define o tamanho do nosso alcance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
