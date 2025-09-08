import { Car, Wrench, PaintBucket, Eye, Hammer, Palette } from "lucide-react";

export interface Service {
  title: string;
  slug: string;
  description: string;
  detailedDescription: string;
  features: string[];
  process: string[];
  duration: string;
  warranty: string;
  price: string;
  faq: { question: string; answer: string }[];
  icon: any;
  image: string;
  imageAlt: string;
  color: string;
}

export const servicesData: Service[] = [
  {
    title: "Lustrado/Lijado",
    slug: "lustrado-lijado",
    description: "Corrección profesional de pintura que elimina rayones, remolinos y opacidad, restaurando el brillo original de tu vehículo.",
    detailedDescription: "Nuestro servicio de lustrado y lijado es un proceso técnico especializado que corrige imperfecciones de la pintura automotriz. Utilizamos productos de alta gama y técnicas profesionales para eliminar micro rayones, remolinos causados por lavados incorrectos, y opacidad generada por el tiempo y la exposición a los elementos.",
    features: [
      "Eliminación de micro rayones y remolinos",
      "Restauración del brillo original",
      "Corrección de opacidad y marcas de lavado",
      "Preparación para encerado y protección",
    ],
    process: [
      "Inspección detallada de la pintura con luz LED",
      "Lavado y descontaminación completa",
      "Evaluación del grosor de pintura",
      "Proceso de lijado húmedo con diferentes granos",
      "Pulido con compuestos abrasivos progresivos",
      "Lustrado final para brillo espejo",
      "Aplicación de cera o sellador protector"
    ],
    duration: "4-8 horas",
    warranty: "6 meses en condiciones normales de uso",
    price: "Desde $80.000",
    faq: [
      {
        question: "¿Cuándo necesita mi auto este servicio?",
        answer: "Cuando notes rayones superficiales, falta de brillo, o marcas circulares (remolinos) en la pintura. También si la superficie se siente áspera al tacto."
      },
      {
        question: "¿Se puede hacer en cualquier color de auto?",
        answer: "Sí, trabajamos con todos los colores, aunque los colores oscuros requieren mayor cuidado por ser más susceptibles a mostrar imperfecciones."
      },
      {
        question: "¿Cuánto dura el resultado?",
        answer: "Con cuidado adecuado, el resultado puede durar entre 6 meses a 2 años, dependiendo del mantenimiento y condiciones de uso."
      },
      {
        question: "¿Qué cuidados debo tener después?",
        answer: "Evitar lavaderos automáticos, usar técnicas de lavado seguras, y aplicar cera cada 3-4 meses para mantener la protección."
      }
    ],
    icon: Car,
    image: "/lovable-uploads/pulido2.jpg",
    imageAlt: "Tratamiento Sonax",
    color: "text-red-600",
  },
  {
    title: "Limpieza de Interior",
    slug: "limpieza-interior",
    description: "Limpieza profunda y detallada del interior de tu vehículo, tapizados, cueros y plásticos.",
    detailedDescription: "Servicio integral de limpieza y acondicionamiento del interior vehicular. Trabajamos con productos específicos para cada tipo de material, garantizando una limpieza profunda que elimina manchas, olores y bacterias, mientras preserva y protege las superficies.",
    features: [
      "Aspirado completo",
      "Limpieza de tapizados",
      "Acondicionamiento de cueros",
      "Desinfección",
    ],
    process: [
      "Retiro de objetos personales y basura",
      "Aspirado profundo de alfombras y tapizados",
      "Limpieza de superficies duras con productos específicos",
      "Tratamiento de manchas en tapizados",
      "Acondicionamiento y nutrición de cueros",
      "Limpieza de vidrios internos",
      "Aplicación de aromatizante y desinfectante",
      "Colocación de protectores en pedales"
    ],
    duration: "2-4 horas",
    warranty: "30 días contra reaparición de manchas tratadas",
    price: "Desde $35.000",
    faq: [
      {
        question: "¿Qué tipo de manchas pueden quitar?",
        answer: "Podemos tratar la mayoría de manchas como café, gaseosas, barro, grasa, y marcas de uso normal. Manchas muy antiguas o de tinta pueden requerir tratamientos especiales."
      },
      {
        question: "¿Trabajan con cuero y tela por igual?",
        answer: "Sí, tenemos productos específicos para cada material: cuero natural, cuero sintético, telas, microfibra y plásticos."
      },
      {
        question: "¿Cuánto tiempo tarda en secar?",
        answer: "Generalmente 1-2 horas en condiciones normales. En invierno o alta humedad puede extenderse a 3-4 horas."
      },
      {
        question: "¿Incluye la limpieza del baúl?",
        answer: "Sí, el servicio incluye aspirado y limpieza básica del baúl. La limpieza profunda tiene costo adicional."
      }
    ],
    icon: Wrench,
    image: "/lovable-uploads/aspirando.jpg",
    imageAlt: "Limpieza Interior",
    color: "text-blue-600",
  },
  {
    title: "Audio Car",
    slug: "audio-car",
    description: "Instalación y configuración de sistemas de sonido automotriz, equipos multimedia y accesorios electrónicos para tu vehículo.",
    detailedDescription: "Especialistas en instalación de sistemas de audio automotriz de alta calidad. Trabajamos con las mejores marcas del mercado y ofrecemos soluciones personalizadas para cada vehículo, desde sistemas básicos hasta configuraciones de competencia.",
    features: [
      "Equipos de alta calidad y marcas reconocidas",
      "Instalación profesional certificada",
      "Configuración personalizada según vehículo",
      "Garantía en instalación y equipos",
    ],
    process: [
      "Consulta técnica y evaluación del vehículo",
      "Diseño del sistema según presupuesto y preferencias",
      "Cotización detallada de equipos y mano de obra",
      "Pedido de equipos y accesorios",
      "Instalación profesional con herramientas especializadas",
      "Configuración y calibración del sistema",
      "Pruebas de funcionamiento y calidad",
      "Capacitación al cliente sobre el uso"
    ],
    duration: "1-3 días según complejidad",
    warranty: "1 año en instalación, garantía de fábrica en equipos",
    price: "Desde $150.000",
    faq: [
      {
        question: "¿Qué marcas de equipos manejan?",
        answer: "Trabajamos con Pioneer, Sony, JBL, Alpine, Kenwood, y otras marcas reconocidas. También equipos de alta gama como Focal y Hertz."
      },
      {
        question: "¿Se puede instalar en cualquier vehículo?",
        answer: "Sí, tenemos soluciones para todos los vehículos, desde autos antiguos hasta los más modernos con sistemas integrados."
      },
      {
        question: "¿Incluye cableado y accesorios?",
        answer: "Sí, todos los cables, conectores y accesorios necesarios están incluidos en el presupuesto."
      },
      {
        question: "¿Afecta la garantía del vehículo?",
        answer: "No, realizamos instalaciones profesionales que no afectan la garantía original del vehículo."
      }
    ],
    icon: PaintBucket,
    image: "/lovable-uploads/audio-car.jpg",
    imageAlt: "Audio Car",
    color: "text-yellow-500",
  },
  {
    title: "Luces LED",
    slug: "luces-led",
    description: "Instalación de luces LED automotrices para interior y exterior, mejorando la iluminación y estética de tu vehículo.",
    detailedDescription: "Modernizá la iluminación de tu vehículo con tecnología LED de última generación. Ofrecemos soluciones completas para luces de posición, stop, intermitentes, interiores y faros principales, mejorando tanto la seguridad como la estética.",
    features: [
      "Tecnología LED de última generación",
      "Instalación sin modificar cableado original",
      "Mayor durabilidad y bajo consumo",
      "Mejora significativa en visibilidad",
    ],
    process: [
      "Evaluación del sistema eléctrico del vehículo",
      "Selección de LEDs compatibles",
      "Desmontaje cuidadoso de las luces originales",
      "Instalación de resistencias si es necesario",
      "Montaje de luces LED y verificación de polaridad",
      "Pruebas de funcionamiento completas",
      "Verificación de no interferencia con computadora",
      "Ajuste final y limpieza"
    ],
    duration: "1-3 horas",
    warranty: "2 años en LEDs, 6 meses en instalación",
    price: "Desde $25.000",
    faq: [
      {
        question: "¿Los LEDs duran más que las lámparas comunes?",
        answer: "Sí, los LEDs duran aproximadamente 25.000 horas vs 1.000 horas de las lámparas halógenas tradicionales."
      },
      {
        question: "¿Consumen menos energía?",
        answer: "Sí, consumen hasta 80% menos energía que las lámparas tradicionales, lo que reduce el consumo de combustible."
      },
      {
        question: "¿Pueden causar problemas en la computadora del auto?",
        answer: "No, utilizamos resistencias y adaptadores específicos para evitar errores en la computadora de abordo."
      },
      {
        question: "¿Se pueden instalar en cualquier vehículo?",
        answer: "Sí, tenemos soluciones para todos los vehículos, desde los más antiguos hasta los más modernos."
      }
    ],
    icon: Eye,
    image: "/lovable-uploads/antes4.jpeg",
    imageAlt: "Luces LED",
    color: "text-amber-600",
  },
  {
    title: "Lavados Comunes y VIP",
    slug: "lavados-comunes-vip",
    description: "Servicios de lavado exterior e interior con diferentes niveles de calidad, desde básico hasta premium con tratamientos especializados.",
    detailedDescription: "Ofrecemos diferentes niveles de lavado para adaptarnos a tus necesidades y presupuesto. Desde el lavado básico hasta nuestro servicio VIP que incluye tratamientos especiales de protección y acondicionamiento.",
    features: [
      "Productos de limpieza especializados",
      "Técnicas de lavado sin contacto",
      "Atención personalizada según nivel",
      "Protección de superficies delicadas",
    ],
    process: [
      "Pre-lavado con agua a presión",
      "Aplicación de espuma activa desengrasante",
      "Lavado manual con técnica de dos baldes",
      "Limpieza detallada de rines y neumáticos",
      "Secado con toallas de microfibra",
      "Limpieza de vidrios y espejos",
      "Aspirado interior (en servicio VIP)",
      "Aplicación de cera rápida o sellador (VIP)"
    ],
    duration: "30min-2 horas según tipo",
    warranty: "Satisfacción garantizada",
    price: "Común: $8.000 | VIP: $18.000",
    faq: [
      {
        question: "¿Cuál es la diferencia entre común y VIP?",
        answer: "El común incluye lavado exterior básico. El VIP agrega aspirado interior, limpieza de tapizados, cera, y productos premium."
      },
      {
        question: "¿Con qué frecuencia debo lavar mi auto?",
        answer: "Recomendamos cada 15 días para uso urbano, o semanalmente si el vehículo está muy expuesto a polvo o contaminación."
      },
      {
        question: "¿Usan productos que dañen la pintura?",
        answer: "No, todos nuestros productos son pH balanceado y específicos para uso automotriz, sin componentes abrasivos."
      },
      {
        question: "¿Trabajan en días de lluvia?",
        answer: "Tenemos área techada disponible, pero recomendamos reagendar en caso de lluvia intensa para mejores resultados."
      }
    ],
    icon: Hammer,
    image: "/lovable-uploads/lavado.jpg",
    imageAlt: "Lavados",
    color: "text-green-600",
  },
  {
    title: "Lavado de Motor",
    slug: "lavado-motor",
    description: "Limpieza y desengrasado del motor de tu vehículo, mejorando su apariencia y funcionamiento.",
    detailedDescription: "Servicio especializado de limpieza del compartimiento del motor. Utilizamos técnicas seguras y productos específicos que remueven grasa, aceite y suciedad acumulada, mejorando la apariencia y facilitando el mantenimiento.",
    features: [
      "Desengrasado",
      "Limpieza a fondo",
      "Protección de componentes",
      "Mejora de rendimiento",
    ],
    process: [
      "Enfriamiento del motor y protección de componentes eléctricos",
      "Aplicación de desengrasante específico",
      "Tiempo de acción del producto (15-20 min)",
      "Enjuague controlado con agua a presión moderada",
      "Limpieza detallada con cepillos especiales",
      "Segundo enjuague y verificación",
      "Secado con aire comprimido",
      "Aplicación de protector de gomas y plásticos"
    ],
    duration: "45min-1.5 horas",
    warranty: "30 días contra defectos en el proceso",
    price: "Desde $15.000",
    faq: [
      {
        question: "¿Es seguro lavar el motor con agua?",
        answer: "Sí, cuando se hace profesionalmente. Protegemos todos los componentes eléctricos y usamos presión controlada."
      },
      {
        question: "¿Con qué frecuencia se debe hacer?",
        answer: "Recomendamos cada 6 meses o cuando se note acumulación excesiva de grasa y suciedad."
      },
      {
        question: "¿Mejora el rendimiento del motor?",
        answer: "Indirectamente sí, ya que un motor limpio disipa mejor el calor y facilita la detección de posibles pérdidas."
      },
      {
        question: "¿Puede causar problemas eléctricos?",
        answer: "No si se hace correctamente. Nosotros protegemos alternador, computadora, bobinas y demás componentes sensibles."
      }
    ],
    icon: Palette,
    image: "/lovable-uploads/lavado-motor.jpg",
    imageAlt: "Lavado de Motor",
    color: "text-purple-600",
  },
];