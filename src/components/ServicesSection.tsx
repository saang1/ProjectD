import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "./ui/card";
import { servicesData } from "@/data/servicesData";

const ServicesSection = () => {

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
          {servicesData.map((service, index) => {
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

                </div>

                <CardContent className="flex flex-col flex-1 p-6">
                  <div className="space-y-3 flex-1">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    {/* Precio del servicio */}
                    {service.price && (
                      <p className="text-lg font-bold text-red-600">{service.price}</p>
                    )}
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
                  <div className="flex gap-2 mt-4">
                    <Link
                      to={`/servicio/${service.slug}`}
                      className="flex-1 bg-gray-100 text-gray-800 text-center rounded-lg font-medium hover:bg-gray-200 transition-colors py-3"
                    >
                      Ver más
                    </Link>
                    <a
                      href={`https://wa.me/5491136809256?text=Hola%2C%20quiero%20consultar%20por%20el%20servicio%20de%20${service.title}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-black text-white text-center rounded-lg font-medium hover:bg-gray-900 transition-colors py-3"
                    >
                      Consultar Precio
                    </a>
                  </div>
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
              href="https://wa.me/5491136809256?text=Hola%2C%20queria%20consultar%20por%20un%20servicio%20personalizado%20de%20detailing"
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
