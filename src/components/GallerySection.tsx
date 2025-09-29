
import React, { useState } from 'react';

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryItems = [
    {
      before: '/lovable-uploads/antes1.jpg',
      after: '/lovable-uploads/despues1.jpg',
      title: 'Interior',
      service: 'Lijado + Pulido'
    },
    {
      before: '/lovable-uploads/antes2.jpg',
      after: '/lovable-uploads/despues2.jpg',
      title: 'Pulido de Faros Profesional',
      service: 'Restauración + Protección UV'
    },
    {
      before: '/lovable-uploads/antes3.jpg',
      after: '/lovable-uploads/despues3.jpg',
      title: 'Lavado Motor',
      service: 'Limpieza + Vapor + Protección'
    },
    {
      before: '/lovable-uploads/antes4.jpeg',
      after: '/lovable-uploads/despues4.jpeg',
      title: 'Tapizado de Asientos',
      service: 'Limpieza + Protección'
    }
  ];

  return (
    <section id="galeria" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-black">
            Galería <span className="text-red-600">Antes y Después</span>
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
                      <div className="absolute top-4 left-4 bg-black text-white px-3 py-1 rounded-md text-sm font-medium">
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
                      <div className="absolute top-4 right-4 bg-red-700 text-white px-3 py-1 rounded-md text-sm font-medium">
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
                    <div className="absolute top-4 left-4 bg-black text-white px-4 py-2 rounded-md font-medium">
                      ANTES
                    </div>
                  </div>
                  <div className="relative">
                    <img
                      src={galleryItems[selectedImage].after}
                      alt="Después"
                      className="w-full h-80 md:h-96 object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-red-700 text-white px-4 py-2 rounded-md font-medium">
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
            className="inline-flex items-center bg-black text-white px-8 py-3 rounded-lg font-medium hover:bg-black transition-colors"
          >
            <a href="https://www.instagram.com/projectd_detailing/" target='_blank'>Ver Más Trabajos</a>

          </button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
