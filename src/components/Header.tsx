
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateToSection = (sectionId: string) => {
    if (location.pathname === '/') {
      // We're on home page, scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth'
        });
      }
    } else {
      // We're on another page, navigate to home with hash
      navigate(`/#${sectionId}`);
    }
    setIsMobileMenuOpen(false);
  };

  const goToHome = () => {
    navigate('/');
    setIsMobileMenuOpen(false);
  };

  const textColorClass = isScrolled ? 'text-gray-800' : 'text-white';
  const projectTextColor = isScrolled ? 'text-gray-800' : 'text-white';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/60 backdrop-blur-md shadow-lg' : 'bg-black/20 backdrop-blur-sm'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={goToHome}>
            <img 
              src="/lovable-uploads/logo.svg" 
              alt="project D logo" 
              className="h-24 w-24 lg:h-40 lg:w-40 object-contain hover:scale-105 transition-transform duration-200"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => navigateToSection('inicio')} className={`font-medium hover:text-red-600 transition-colors ${textColorClass}`}>
              Inicio
            </button>
            <button onClick={() => navigateToSection('servicios')} className={`font-medium hover:text-red-600 transition-colors ${textColorClass}`}>
              Servicios
            </button>
            <button onClick={() => navigateToSection('galeria')} className={`font-medium hover:text-red-600 transition-colors ${textColorClass}`}>
              Galería
            </button>
            <button onClick={() => navigateToSection('testimonios')} className={`font-medium hover:text-red-600 transition-colors ${textColorClass}`}>
              Testimonios
            </button>
            <button onClick={() => navigateToSection('contacto')} className="bg-red-700 text-white px-6 py-2.5 rounded-lg hover:bg-red-900 transition-colors font-medium">
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
              <button onClick={() => navigateToSection('inicio')} className="text-gray-700 hover:text-gray-900 transition-colors text-left py-3 font-medium">
                Inicio
              </button>
              <button onClick={() => navigateToSection('servicios')} className="text-gray-700 hover:text-gray-900 transition-colors text-left py-3 font-medium">
                Servicios
              </button>
              <button onClick={() => navigateToSection('galeria')} className="text-gray-700 hover:text-gray-900 transition-colors text-left py-3 font-medium">
                Galería
              </button>
              <button onClick={() => navigateToSection('testimonios')} className="text-gray-700 hover:text-gray-900 transition-colors text-left py-3 font-medium">
                Testimonios
              </button>
              <button onClick={() => navigateToSection('contacto')} className="bg-red-700 text-white px-6 py-3 rounded-lg hover:bg-red-900 transition-colors text-center mt-2 font-medium">
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
