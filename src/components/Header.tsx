
import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  const textColorClass = isScrolled ? 'text-gray-800' : 'text-white';
  const projectTextColor = isScrolled ? 'text-gray-800' : 'text-white';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' : 'bg-black/20 backdrop-blur-sm'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="relative">
              <h1 className="font-bold text-xl lg:text-2xl transition-colors duration-300">
                <span className={`${projectTextColor}`}>Project</span>
                <span className="text-red-500 ml-2 text-2xl lg:text-3xl">D</span>
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('inicio')} className={`font-medium hover:text-gray-600 transition-colors ${textColorClass}`}>
              Inicio
            </button>
            <button onClick={() => scrollToSection('servicios')} className={`font-medium hover:text-gray-600 transition-colors ${textColorClass}`}>
              Servicios
            </button>
            <button onClick={() => scrollToSection('galeria')} className={`font-medium hover:text-gray-600 transition-colors ${textColorClass}`}>
              Galería
            </button>
            <button onClick={() => scrollToSection('testimonios')} className={`font-medium hover:text-gray-600 transition-colors ${textColorClass}`}>
              Testimonios
            </button>
            <button onClick={() => scrollToSection('contacto')} className="bg-gray-800 text-white px-6 py-2.5 rounded-lg hover:bg-gray-700 transition-colors font-medium">
              Contacto
            </button>
          </nav>

          {/* Mobile menu button */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2">
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <div className={`h-0.5 w-full transition-all duration-300 ${isScrolled ? 'bg-gray-800' : 'bg-white'} ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
              <div className={`h-0.5 w-full transition-all duration-300 ${isScrolled ? 'bg-gray-800' : 'bg-white'} ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
              <div className={`h-0.5 w-full transition-all duration-300 ${isScrolled ? 'bg-gray-800' : 'bg-white'} ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md rounded-lg mt-4 p-4 border border-gray-200">
            <nav className="flex flex-col space-y-2">
              <button onClick={() => scrollToSection('inicio')} className="text-gray-700 hover:text-gray-900 transition-colors text-left py-3 font-medium">
                Inicio
              </button>
              <button onClick={() => scrollToSection('servicios')} className="text-gray-700 hover:text-gray-900 transition-colors text-left py-3 font-medium">
                Servicios
              </button>
              <button onClick={() => scrollToSection('galeria')} className="text-gray-700 hover:text-gray-900 transition-colors text-left py-3 font-medium">
                Galería
              </button>
              <button onClick={() => scrollToSection('testimonios')} className="text-gray-700 hover:text-gray-900 transition-colors text-left py-3 font-medium">
                Testimonios
              </button>
              <button onClick={() => scrollToSection('contacto')} className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors text-center mt-2 font-medium">
                Contacto
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
