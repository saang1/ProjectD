
import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    vehicle: '',
    service: '',
    message: ''
  });

  const services = [
    'Lustrado / lijado',
    'Limpieza de interior',
    'Audio Car',
    'Luces Leds ',
    'Lavados Comunes y Vip',
    'Lavado de motor',
    'Consulta Personalizada'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `Hola! Me llamo ${formData.name}
    
 Teléfono: ${formData.phone}
 Email: ${formData.email}
 Tipo de Vehiculo: ${formData.vehicle}
 Servicio de interés: ${formData.service}

Mensaje: ${formData.message}

Enviado desde la web de Car Detailing.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/5491136809256?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');

    toast({
      title: "¡Consulta enviada!",
      description: "Te redirigimos a WhatsApp para completar tu consulta."
    });

    setFormData({
      name: '',
      phone: '',
      email: '',
      vehicle: '',
      service: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contacto" className="py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 lg:text-5xl text-red-700">
            Contacto y Ubicación
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Estamos ubicados en tu ciudad para brindarte el mejor servicio. Contactanos para agendar tu turno.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulario de Contacto */}
          <div className="bg-gray-900 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Envianos tu Consulta</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-300 font-medium mb-2">
                  Nombre Completo *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-gray-500"
                  placeholder="Tu nombre completo"
                />
              </div>

              <div>
                <label className="block text-gray-300 font-medium mb-2">
                  Teléfono *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-gray-500"
                  placeholder="11 1234-5678"
                />
              </div>

              <div>
                <label className="block text-gray-300 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-gray-500"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label className="block text-gray-300 font-medium mb-2">
                  Tipo de Vehículo
                </label>
                <select
                  name="vehicle"
                  value={formData.vehicle}
                  onChange={handleChange}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gray-500"
                >
                  <option value="">Seleccionar tipo de vehículo...</option>
                  <option value="moto">Moto</option>
                  <option value="auto">Auto</option>
                  <option value="camioneta">Camioneta</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-300 font-medium mb-2">
                  Servicio de Interés
                </label>
                <select
                  required
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gray-500"
                >
                  <option value="">Seleccionar servicio...</option>
                  {services.map(service => (
                    <option key={service} value={service}>{service}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-gray-300 font-medium mb-2">
                  Mensaje
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-gray-500"
                  placeholder="Contanos más detalles sobre tu auto o el servicio que necesitás..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-white text-gray-900 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Enviar Consulta por WhatsApp
              </button>
            </form>
          </div>

          {/* Información de Contacto y Mapa */}
          <div className="space-y-8">
            {/* Info de Contacto */}
            <div className="bg-gray-900 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Información de Contacto</h3>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="text-xl">🏢</div>
                  <div>
                    <h4 className="text-white font-medium mb-1">ProjectD</h4>
                    <p className="text-gray-300">Justo Jose de Urquiza 4300</p>
                    <p className="text-gray-400">Caseros, Buenos Aires</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="text-xl">📱</div>
                  <div>
                    <h4 className="text-white font-medium mb-1">WhatsApp</h4>
                    <a href="https://wa.me/541136809256" className="text-gray-300 hover:text-white transition-colors">
                      +54 11 3680-9256
                    </a>
                  </div>
                </div>



                <div className="flex items-start space-x-3">
                  <div className="text-xl">🕒</div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Horarios</h4>
                    <p className="text-gray-300">Lunes a Viernes: 9:00 - 18:00</p>
                    <p className="text-gray-400">Sabados y Domingos cerrado</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="text-xl">📸</div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Instagram</h4>
                    <a href="https://instagram.com/projectd_detailing" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                      @projectd_detailing
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Mapa */}
            <div className="bg-gray-900 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Nuestra Ubicación</h3>
              <div className="aspect-video bg-gray-700 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3905.140486053563!2d-58.55463280229327!3d-34.60874737501295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb749b08b0865%3A0xed851aa6e0acbd39!2sProject%20D!5e0!3m2!1ses!2sar!4v1756934930677!5m2!1ses!2sar"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación ProjectD"
                />
              </div>
              <p className="text-gray-400 mt-4">
                Justo Jose de Urquiza 4300, Caseros - Atendemos en nuestro local
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
