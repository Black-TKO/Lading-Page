export default function Team() {
  const team = [
    {
      id: 1,
      name: 'Luiz',
      role: 'Responsável pelo acolhimento e o elo de comunicação com cada um de vocês.',
    },
    {
      id: 2,
      name: 'Felipe',
      role: 'Tesoureiro e administrador que mantém a engrenagem financeira e estratégica girando.',
    },
    {
      id: 3,
      name: 'Kaue',
      role: 'Programador que transforma as necessidades da nossa comunidade em linhas de código.',
    },
    {
      id: 4,
      name: 'Marcos',
      role: 'Programador que transforma as necessidades da nossa comunidade em linhas de código.',
    },
  ];

  return (
    <section id="equipe" className="py-16 sm:py-24 bg-[#F6F6F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 sm:mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#003D6A] mb-4 font-inter">
            Quem Faz o Lume Acontecer
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 font-roboto max-w-2xl mx-auto">
            Humanizar o projeto é parte dos nossos valores fundamentais. Nossa equipe trabalha para garantir que o ecossistema seja seguro e funcional
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {team.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="w-full h-48 bg-gradient-to-br from-blue-200 to-blue-300 flex items-center justify-center">
                <img
                  src={`https://placehold.co/200x200/003D6A/F5B422?text=${member.name}`}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6 text-center">
                <h3 className="text-xl sm:text-2xl font-bold text-[#003D6A] mb-3 font-inter">
                  {member.name}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 font-roboto leading-relaxed">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
