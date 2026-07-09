import { useState } from 'react';
import { ReactComponent as Logo } from '../assets/logo.svg';
import { IoMenu, IoClose } from 'react-icons/io5';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'Início', href: '#hero' },
    { label: 'Universo', href: '#universo' },
    { label: 'Equipe', href: '#equipe' },
    { label: 'Apoiar', href: '#apoiar' },
    { label: 'Futuro', href: '#futuro' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-[#003D6A] shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <div className="flex-shrink-0">
            <Logo className="h-10 sm:h-12 w-auto fill-current text-white" />
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-white hover:text-[#F5B422] transition-colors text-sm font-medium font-inter"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-[#F5B422] transition-colors"
            >
              {isOpen ? <IoClose size={24} /> : <IoMenu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-white hover:text-[#F5B422] hover:bg-[#002a4a] px-3 py-2 rounded-md text-sm font-medium transition-colors font-inter"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
