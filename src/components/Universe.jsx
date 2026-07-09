export default function Universe() {
  const products = [
    {
      id: 1,
      name: 'Lume Profile',
      shortName: 'LP',
      description: 'Perfil digital atrelado à sua carteirinha física do estudante. Registre suas conexões presenciais verificadas e compartilhe sua verdadeira essência acadêmica.',
      bgColor: 'bg-purple-600',
      textColor: 'text-white',
      icon: 'LP',
    },
    {
      id: 2,
      name: 'Lume Marketplace',
      shortName: 'Marketplace',
      description: 'O shopping virtual da nossa comunidade, criado para organizar e dar visibilidade ao comércio entre estudantes, permitindo que você encontre o que precisa.',
      bgColor: 'bg-cyan-500',
      textColor: 'text-[#003D6A]',
      icon: 'M',
    },
    {
      id: 3,
      name: 'Lume Food',
      shortName: 'Food',
      description: 'A nossa vitrine gastronômica dedicada a conectar você à produção culinária dos seus colegas, facilitando o acesso a lanches e refeições.',
      bgColor: 'bg-[#F5B422]',
      textColor: 'text-[#003D6A]',
      icon: 'F',
    },
  ];

  return (
    <section id="universo" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 sm:mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#003D6A] mb-4 font-inter">
            Conheça o Nosso Universo
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 font-roboto max-w-2xl mx-auto">
            Para que os uffianos prosperem, integramos diferentes ferramentas em um só lugar
          </p>
        </div>

        <div className="mb-16 sm:mb-20 p-6 sm:p-8 bg-gradient-to-r from-[#003D6A] to-blue-700 rounded-2xl">
          <div className="flex flex-col sm:flex-row gap-6 items-start">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-xl flex items-center justify-center">
                <span className="text-4xl">L</span>
              </div>
            </div>
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-inter">
                O Lume nasceu para ser mais do que uma plataforma
              </h3>
              <p className="text-base sm:text-lg text-gray-100 font-roboto leading-relaxed">
                Somos uma infraestrutura viva, feita exclusivamente por e para estudantes, com o objetivo de transformar a forma como descobrimos pessoas e oportunidades dentro da nossa universidade. Acreditamos que a identidade universitária vai muito além de um número de matrícula: ela é feita de conexões reais e apoio mútuo.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className={`rounded-2xl p-8 sm:p-10 text-center transition-transform hover:scale-105 ${product.bgColor} ${product.textColor}`}
            >
              <div className="mb-6 text-5xl sm:text-6xl font-bold font-inter opacity-80">
                {product.icon}
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-3 font-inter">
                {product.name}
              </h3>
              <p className="font-roboto text-base sm:text-lg leading-relaxed opacity-90">
                {product.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
