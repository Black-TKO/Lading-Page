export default function Footer() {
  return (
    <footer className="bg-[#003D6A] text-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-8">
          {/* About */}
          <div>
            <h4 className="text-lg font-bold font-inter mb-4">Sobre o Lume</h4>
            <p className="text-sm sm:text-base text-gray-300 font-roboto">
              Ecossistema digital criado por estudantes da UFF para conectar pessoas e impulsionar a economia estudantil.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-bold font-inter mb-4">Navegação</h4>
            <ul className="space-y-2 text-sm sm:text-base text-gray-300 font-roboto">
              <li><a href="#hero" className="hover:text-[#F5B422] transition-colors">Início</a></li>
              <li><a href="#universo" className="hover:text-[#F5B422] transition-colors">Universo</a></li>
              <li><a href="#equipe" className="hover:text-[#F5B422] transition-colors">Equipe</a></li>
              <li><a href="#apoiar" className="hover:text-[#F5B422] transition-colors">Apoiar</a></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-bold font-inter mb-4">Plataformas</h4>
            <ul className="space-y-2 text-sm sm:text-base text-gray-300 font-roboto">
              <li><a href="#" className="hover:text-[#F5B422] transition-colors">Lume Profile</a></li>
              <li><a href="#" className="hover:text-[#F5B422] transition-colors">Marketplace</a></li>
              <li><a href="#" className="hover:text-[#F5B422] transition-colors">Lume Food</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold font-inter mb-4">Contato</h4>
            <p className="text-sm sm:text-base text-gray-300 font-roboto mb-2">
              Email: <span className="text-[#F5B422]">contato@lume.app</span>
            </p>
            <p className="text-sm sm:text-base text-gray-300 font-roboto">
              Movimento de Estudantes da UFF
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          {/* Bottom Section */}
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm sm:text-base text-gray-400 font-roboto">
            <p>
              Copyright 2024 Lume. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 mt-4 sm:mt-0">
              <a href="#" className="hover:text-[#F5B422] transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-[#F5B422] transition-colors">Termos de Uso</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
