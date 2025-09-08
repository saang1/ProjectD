import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Shield, Star } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { servicesData } from '@/data/servicesData';

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = servicesData.find(s => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Servicio no encontrado</h1>
            <Link to="/#servicios" className="text-primary hover:underline">
              Volver a servicios
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-black to-gray-900 text-white">
          <div className="absolute inset-0 opacity-30">
            <img 
              src={service.image} 
              alt={service.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative container mx-auto px-4">
            <Link 
              to="/#servicios"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft size={20} />
              Volver a servicios
            </Link>
            <h1 className="text-5xl font-bold mb-4">{service.title}</h1>
            <p className="text-xl text-gray-300 max-w-2xl">{service.description}</p>
          </div>
        </section>

        {/* Service Details */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Star className="text-primary" size={24} />
                      Proceso Detallado
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="prose prose-gray max-w-none">
                      <p className="text-muted-foreground mb-6">{service.detailedDescription}</p>
                      <h4 className="font-semibold mb-4">Proceso paso a paso:</h4>
                      <ol className="space-y-3">
                        {service.process.map((step, index) => (
                          <li key={index} className="flex gap-3">
                            <span className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-semibold">
                              {index + 1}
                            </span>
                            <span>{step}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </CardContent>
                </Card>

                {/* FAQ Section */}
                <Card>
                  <CardHeader>
                    <CardTitle>Preguntas Frecuentes</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {service.faq.map((item, index) => (
                        <div key={index} className="border-b border-gray-200 pb-4 last:border-0">
                          <h4 className="font-semibold mb-2 text-foreground">{item.question}</h4>
                          <p className="text-muted-foreground">{item.answer}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Service Info */}
                <Card>
                  <CardHeader>
                    <CardTitle>Información del Servicio</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Clock className="text-primary" size={20} />
                      <div>
                        <p className="font-medium">Duración</p>
                        <p className="text-sm text-muted-foreground">{service.duration}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Shield className="text-primary" size={20} />
                      <div>
                        <p className="font-medium">Garantía</p>
                        <p className="text-sm text-muted-foreground">{service.warranty}</p>
                      </div>
                    </div>
                    <div className="pt-4 border-t">
                      <p className="font-semibold mb-2">Precio estimado:</p>
                      <p className="text-2xl font-bold text-primary">{service.price}</p>
                      <p className="text-sm text-muted-foreground mt-1">*El precio final puede variar según el estado del vehículo</p>
                    </div>
                  </CardContent>
                </Card>

                {/* CTA Buttons */}
                <div className="space-y-3">
                  <a
                    href={`https://wa.me/5491136809256?text=Hola%2C%20quiero%20solicitar%20el%20servicio%20de%20${service.title}%20que%20vi%20en%20su%20página`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-green-600 text-white text-center py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
                  >
                    Solicitar Servicio
                  </a>
                  <a
                    href={`https://wa.me/5491136809256?text=Hola%2C%20quiero%20consultar%20el%20precio%20del%20servicio%20de%20${service.title}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full border border-gray-300 text-gray-700 text-center py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                  >
                    Consultar Precio
                  </a>
                </div>

                {/* Features */}
                <Card>
                  <CardHeader>
                    <CardTitle>Incluye</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ServiceDetail;