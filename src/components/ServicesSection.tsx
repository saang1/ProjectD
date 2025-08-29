
import React from 'react';
import { Car, Wrench, PaintBucket, Eye, Hammer, Palette } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      title: 'Tratamientos Sonax Certificado',
      description: 'Productos profesionales Sonax para el cuidado integral de tu vehículo con certificación oficial.',
      price: 'Consultar',
      features: ['Productos certificados Sonax', 'Tratamientos profesionales', 'Garantía de calidad', 'Resultados duraderos'],
      icon: Car
    },
    {
      title: 'Limpieza de Interior',
      description: 'Limpieza profunda y detallada del interior de tu vehículo, tapizados, cueros y plásticos.',
      price: 'Desde $12.000',
      features: ['Aspirado completo', 'Limpieza de tapizados', 'Acondicionamiento de cueros', 'Desinfección'],
      icon: Wrench
    },
    {
      title: 'Service de Pintura/Pulidos',
      description: 'Corrección de pintura profesional para eliminar rayones y devolver el brillo original.',
      price: 'Desde $25.000',
      features: ['Pulido profesional', 'Corrección de defectos', 'Eliminación de rayones', 'Restauración del brillo'],
      icon: PaintBucket
    },
    {
      title: 'Restauración de Ópticas',
      description: 'Recuperá la transparencia y claridad de las ópticas de tu auto para mayor seguridad.',
      price: 'Desde $8.000',
      features: ['Lijado progresivo', 'Pulido especializado', 'Protección UV', 'Mayor visibilidad'],
      icon: Eye
    },
    {
      title: 'Sacabollos',
      description: 'Reparación de abolladuras sin pintura, manteniendo el acabado original de fábrica.',
      price: 'Desde $5.000',
      features: ['Sin pintura', 'Técnica PDR', 'Mantiene valor original', 'Reparación invisible'],
      icon: Hammer
    },
    {
      title: 'Ploteos',
      description: 'Personalización y protección de tu vehículo con ploteos de alta calidad y diseños únicos.',
      price: 'Consultar',
      features: ['Diseños personalizados', 'Materiales premium', 'Protección de pintura', 'Acabado profesional'],
      icon: Palette
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos una gama completa de servicios profesionales para el cuidado y mantenimiento de tu vehículo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-200">
                <div className="flex items-start mb-6">
                  <div className="bg-gray-100 p-3 rounded-lg mr-4">
                    <IconComponent className="h-6 w-6 text-gray-700" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{service.title}</h3>
                    <p className="text-gray-600 font-medium">{service.price}</p>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-gray-400 rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a 
                  href="https://wa.me/5491123456789?text=Hola%2C%20quiero%20consultar%20por%20el%20servicio%20de%20car%20detailing" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block w-full bg-gray-800 text-white text-center rounded-lg font-medium hover:bg-gray-700 transition-colors py-3"
                >
                  Consultar Precio
                </a>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gray-800 rounded-lg p-8 max-w-3xl mx-auto">
            <p className="text-gray-300 mb-6 text-lg">
              ¿No encontrás lo que buscás? Consultanos por servicios personalizados.
            </p>
            <a 
              href="https://wa.me/5491123456789?text=Hola%2C%20necesito%20un%20servicio%20personalizado" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-gray-800 transition-colors"
            >
              Consultar Servicio Personalizado
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
