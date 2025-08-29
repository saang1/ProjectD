
import React from 'react';

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with subtle overlay */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: `url('/lovable-uploads/ccd71cd9-1c75-4e87-aea7-99ab0cf45a35.png')`
      }}>
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Clean, professional title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="block text-white mb-2">Servicio Profesional</span>
            <span className="block text-gray-300">de Car Detailing</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed">
            Restauramos y protegemos tu vehículo con técnicas profesionales y productos de primera calidad.
          </p>
          
          {/* Minimalist buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button onClick={scrollToContact} className="bg-white text-gray-900 px-8 py-3 rounded-lg text-lg font-medium hover:bg-gray-100 transition-colors w-full sm:w-auto">
              Reservar Turno
            </button>
            
            <a href="https://wa.me/5491123456789?text=Hola%2C%20quiero%20consultar%20por%20un%20servicio%20de%20car%20detailing" target="_blank" rel="noopener noreferrer" className="border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-white hover:text-gray-900 transition-colors w-full sm:w-auto">
              Consultar por WhatsApp
            </a>
          </div>
          
          {/* Clean stats section */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold text-white mb-2">+500</div>
                <div className="text-gray-300">Autos Atendidos</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold text-white mb-2">98%</div>
                <div className="text-gray-300">Satisfacción</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold text-white mb-2">5★</div>
                <div className="text-gray-300">Calificación</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Minimalist scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
