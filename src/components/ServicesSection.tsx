import React from "react";
import { Car, Wrench, PaintBucket, Eye, Hammer, Palette } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const ServicesSection = () => {
  const services = [
    {
      title: "Lustrado/Lijado",
      description:
        "Corrección profesional de pintura que elimina rayones, remolinos y opacidad, restaurando el brillo original de tu vehículo.",
      features: [
        "Eliminación de micro rayones y remolinos",
        "Restauración del brillo original",
        "Corrección de opacidad y marcas de lavado",
        "Preparación para encerado y protección",
      ],
      icon: Car,
      image: "/lovable-uploads/pulido2.jpg",
      imageAlt: "Tratamiento Sonax",
      color: "text-red-600",
    },
    {
      title: "Limpieza de Interior",
      description:
        "Limpieza profunda y detallada del interior de tu vehículo, tapizados, cueros y plásticos.",
      features: [
        "Aspirado completo",
        "Limpieza de tapizados",
        "Acondicionamiento de cueros",
        "Desinfección",
      ],
      icon: Wrench,
      image: "/lovable-uploads/aspirando.jpg",
      imageAlt: "Limpieza Interior",
      color: "text-blue-600",
    },
    {
      title: "Audio Car",
      description:
        "Instalación y configuración de sistemas de sonido automotriz, equipos multimedia y accesorios electrónicos para tu vehículo.",
      features: [
        "Equipos de alta calidad y marcas reconocidas",
        "Instalación profesional certificada",
        "Configuración personalizada según vehículo",
        "Garantía en instalación y equipos",
      ],
      icon: PaintBucket,
      image: "/lovable-uploads/audio-car.jpg",
      imageAlt: "Pulido de pintura",
      color: "text-yellow-500",
    },
    {
      title: "Luces Leds",
      description:
        "Instalación de luces LED automotrices para interior y exterior, mejorando la iluminación y estética de tu vehículo.",
      features: [
        "Tecnología LED de última generación",
        "Instalación sin modificar cableado original",
        "Mayor durabilidad y bajo consumo",
        "Mejora significativa en visibilidad",
      ],
      icon: Eye,
      image: "/lovable-uploads/antes4.jpeg",
      imageAlt: "Restauración de ópticas",
      color: "text-amber-600",
    },
    {
      title: "Lavados Comunes y Vip",
      description:
        "Servicios de lavado exterior e interior con diferentes niveles de calidad, desde básico hasta premium con tratamientos especializados.",
      features: [
        "Productos de limpieza especializados",
        "Técnicas de lavado sin contacto",
        "Atención personalizada según nivel",
        "Protección de superficies delicadas",
      ],
      icon: Hammer,
      image: "/lovable-uploads/lavado.jpg",
      imageAlt: "Sacabollos",
      color: "text-green-600",
    },
    {
      title: "Lavado de motor",
      description:
        "Limpieza y desengrasado del motor de tu vehículo, mejorando su apariencia y funcionamiento.",
      features: [
        "Desengrasado",
        "Limpieza a fondo",
        "Protección de componentes",
        "Mejora de rendimiento",
      ],
      icon: Palette,
      image: "/lovable-uploads/lavado-motor.jpg",
      imageAlt: "Ploteos",
      color: "text-purple-600",
    },
  ];

  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-red-600">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos una gama completa de servicios profesionales para el
            cuidado y mantenimiento de tu vehículo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card
                key={index}
                className="group flex flex-col h-full min-h-[500px] hover:shadow-medical transition-all duration-300 hover:-translate-y-2 border-0 shadow-card bg-white overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Imagen del servicio */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  {/* Icono superpuesto */}
                  <div className="absolute top-4 left-4">
                    <div
                      className={`w-12 h-12 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className={`w-6 h-6 ${service.color}`} />
                    </div>
                  </div>
                </div>

                <CardContent className="flex flex-col flex-1 p-6">
                  <div className="space-y-3 flex-1">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {service.description}
                    </p>
                    <ul className="space-y-2 mb-2">
                      {service.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center text-gray-700"
                        >
                          <div className="w-2 h-2 bg-gray-400 rounded-full mr-3 flex-shrink-0"></div>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a
                    href="https://wa.me/5491123456789?text=Hola%2C%20quiero%20consultar%20por%20el%20servicio%20de%20car%20detailing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-black text-white text-center rounded-lg font-medium hover:bg-gray-900 transition-colors py-3 mt-4"
                  >
                    Consultar Precio
                  </a>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <div className="bg-black rounded-lg p-8 max-w-3xl mx-auto">
            <p className="text-gray-300 mb-6 text-lg">
              ¿No encontrás lo que buscás? Consultanos por servicios
              personalizados.
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
