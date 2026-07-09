export default function Support() {
  const features = [
    {
      id: 1,
      title: 'Totalmente customizável',
      description: 'Escolha a cor e a imagem de fundo',
      icon: 'C',
    },
    {
      id: 2,
      title: 'Tecnologia de aproximação',
      description: 'Acesso instantâneo ao ecossistema Lume',
      icon: 'T',
    },
    {
      id: 3,
      title: 'QR Code exclusivo',
      description: 'Acesso ao seu Lume Profile',
      icon: 'Q',
    },
    {
      id: 4,
      title: 'Ou apoie compartilhando',
      description: 'Divulgue nas redes sociais',
      icon: 'S',
    },
  ];

  return (
    <section id="apoiar" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 sm:mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#003D6A] mb-4 font-inter">
            Como Apoiar o Movimento
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <p className="text-base sm:text-lg text-gray-700 font-roboto mb-6 leading-relaxed">
              O Lume é um movimento independente. Você pode fazer parte dessa construção adquirindo as nossas carteirinhas de estudantes não oficial de uso exclusivamente sociocultural pelo valor de <span className="font-bold text-[#F5B422]">20 reais</span>.
            </p>
            
            <p className="text-base sm:text-lg text-gray-700 font-roboto mb-6 leading-relaxed">
              Este item possui uma versão totalmente customizável ao seu gosto, sendo possível escolher a cor e a imagem de fundo. Através da tecnologia de aproximação, você acessa instantaneamente todo o ecossistema Lume que contém todas as nossas plataformas.
            </p>

            <p className="text-base sm:text-lg text-gray-700 font-roboto mb-8 leading-relaxed">
              Além disso, o QR Code exclusivo no verso abre as portas para o seu Lume Profile, unindo o físico e o digital na palma da sua mão.
            </p>

            <button className="w-full sm:w-auto px-8 py-4 bg-[#F5B422] text-[#003D6A] font-bold rounded-lg hover:bg-yellow-500 transition-colors font-inter">
              QUERO MINHA CARTEIRINHA
            </button>
          </div>

          <div className="flex justify-center items-center">
            <div className="relative w-full max-w-sm">
              <div className="bg-gradient-to-br from-[#003D6A] to-blue-700 rounded-2xl p-6 sm:p-8 text-white shadow-lg mb-4">
                <div className="text-2xl font-bold font-inter mb-4">LUME</div>
                <div className="text-sm font-roboto">ESTUDANTE NAO OFICIAL</div>
                <div className="mt-8 text-right opacity-75">NFC</div>
              </div>

              <div className="bg-gradient-to-br from-[#003D6A] to-blue-700 rounded-2xl p-6 sm:p-8 text-white shadow-lg transform translate-y-4 translate-x-4">
                <div className="text-2xl font-bold font-inter mb-2">LUME</div>
                <div className="text-xs font-roboto mb-4">Seu acesso a todo o ecossistema LUME e ao seu Lume Profile</div>
                <div className="bg-white rounded p-3 w-24 h-24 flex items-center justify-center text-gray-400">QR Code</div>
                <div className="mt-4 text-right opacity-75 text-xs">NFC</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-gradient-to-br from-[#003D6A] to-blue-700 rounded-2xl p-6 sm:p-8 text-white text-center hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl font-bold font-inter mb-4 opacity-60">
                {feature.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold font-inter mb-2">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-200 font-roboto">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
