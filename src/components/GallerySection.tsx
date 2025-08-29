
import React, { useState } from 'react';

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryItems = [
    {
      before: '/lovable-uploads/c29b6a2c-b3e5-40a4-8f42-ac7731cb416e.png',
      after: '/lovable-uploads/162c40ce-2b22-4327-9dc4-32d07d352d7e.png',
      title: 'Detailing Interior Alfa Romeo',
      service: 'Limpieza Profunda + Acondicionamiento'
    },
    {
      before: '/lovable-uploads/3ae9cb9b-c524-45e3-9f2d-23dc5342cb4c.png',
      after: '/lovable-uploads/0b8e6a58-97a7-4faf-b08d-145b176ca126.png',
      title: 'Pulido de Faros Profesional',
      service: 'Restauración + Protección UV'
    },
    {
      before: '/lovable-uploads/a3110208-cdf4-47e1-8636-91506b11e4fc.png',
      after: '/lovable-uploads/d9c595b3-fe94-427a-b456-19d29233d409.png',
      title: 'Restauración Sistema de Frenos',
      service: 'Limpieza + Pintura + Protección'
    },
    {
      before: '/lovable-uploads/e115b780-9bf3-42dc-a809-be9861d90858.png',
      after: '/lovable-uploads/443218b2-6ff0-42c7-87e4-5de93e81623c.png',
      title: 'Restauración de Llantas Volkswagen',
      service: 'Limpieza + Pulido + Protección'
    }
  ];

  return (
    <section id="galeria" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            Galería <span className="text-gray-600">Antes y Después</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mirá la transformación que logramos en cada vehículo. 
            Estos resultados hablan por sí solos de la calidad de nuestro trabajo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {galleryItems.map((item, index) => (
            <div 
              key={index}
              className="group cursor-pointer"
              onClick={() => setSelectedImage(index)}
            >
              <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200">
                <div className="relative">
                  <div className="grid grid-cols-2 h-64">
                    <div className="relative overflow-hidden">
                      <img 
                        src={item.before} 
                        alt={`${item.title} - Antes`}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/10"></div>
                      <div className="absolute top-4 left-4 bg-gray-800 text-white px-3 py-1 rounded-md text-sm font-medium">
                        ANTES
                      </div>
                    </div>
                    <div className="relative overflow-hidden">
                      <img 
                        src={item.after} 
                        alt={`${item.title} - Después`}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/10"></div>
                      <div className="absolute top-4 right-4 bg-gray-600 text-white px-3 py-1 rounded-md text-sm font-medium">
                        DESPUÉS
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 font-medium">{item.service}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal para imagen ampliada */}
        {selectedImage !== null && (
          <div 
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="max-w-4xl w-full">
              <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                  <div className="relative">
                    <img 
                      src={galleryItems[selectedImage].before} 
                      alt="Antes"
                      className="w-full h-80 md:h-96 object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-gray-800 text-white px-4 py-2 rounded-md font-medium">
                      ANTES
                    </div>
                  </div>
                  <div className="relative">
                    <img 
                      src={galleryItems[selectedImage].after} 
                      alt="Después"
                      className="w-full h-80 md:h-96 object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-gray-600 text-white px-4 py-2 rounded-md font-medium">
                      DESPUÉS
                    </div>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                    {galleryItems[selectedImage].title}
                  </h3>
                  <p className="text-gray-600 font-medium">
                    {galleryItems[selectedImage].service}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="text-center mt-12">
          <button 
            className="inline-flex items-center bg-gray-800 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-700 transition-colors"
          >
            Ver Más Trabajos
          </button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
