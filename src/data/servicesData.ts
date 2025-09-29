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
      "Abrillantados",
      "Acrilicos",
      "Ceramicos",
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
    price: "$80.000 por panel",
    faq: [
      {
        question: "¿Cuándo necesita mi auto este servicio?",
        answer: "Cuando notes rayones superficiales, falta de brillo, o marcas circulares (remolinos) en la pintura. También si la superficie se siente áspera al tacto."
      },
      {
        question: "¿Cuando mi auto necesita un tratamiento cerámico?",
        answer: "El tratamiento cerámico es ideal si buscas una protección duradera contra rayones, químicos y condiciones climáticas extremas, además de facilitar la limpieza y mantener el brillo por más tiempo."
      },
      {
        question: "¿Cuando mi auto necesita un tratamiento acrilico?",
        answer: "El tratamiento acrílico es una opción intermedia que ofrece buena protección y brillo, ideal para vehículos que no están expuestos a condiciones extremas pero que aún requieren un cuidado adicional."
      },
      {
        question: "¿Cuando mi auto necesita un abrillantado?",
        answer: "El abrillantado es adecuado para vehículos con desgaste leve a moderado, donde se busca restaurar el brillo y eliminar pequeñas imperfecciones sin necesidad de un lijado profundo."
      }
    ],
    icon: Car,
    image: "/lovable-uploads/pulido.webp",
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
    price: "Desde $150.000",
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
    price: "A convenir",
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
    price: "A convenir",
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
    image: "/lovable-uploads/optica-led.jpg",
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
    price: "Común: $30.000 | VIP: $80.000",
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
    image: "/lovable-uploads/lavado.png",
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
    price: "$60.000",
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
  {
    title: "Pulido de óptica",
    slug: "pulido-optica",
    description: "Restauración y pulido profesional de ópticas para mejorar la visibilidad y estética.",
    detailedDescription: "El pulido de ópticas elimina el amarillamiento, rayas y opacidad de los faros, devolviendo transparencia y brillo. Utilizamos productos y herramientas específicas para garantizar resultados duraderos.",
    features: [
      "Eliminación de opacidad",
      "Recuperación de brillo",
      "Protección UV",
    ],
    process: [
      "Limpieza y desengrasado de ópticas",
      "Lijado progresivo según estado",
      "Pulido con compuestos especiales",
      "Aplicación de sellador protector UV"
    ],
    duration: "1-2 horas",
    warranty: "6 meses contra opacidad",
    price: "$60.000 por par",
    faq: [
      {
        question: "¿Sirve para cualquier tipo de óptica?",
        answer: "Sí, trabajamos con ópticas plásticas y acrílicas de autos y motos."
      },
      {
        question: "¿Cuánto dura el resultado?",
        answer: "Con el cuidado adecuado, el resultado puede durar más de un año."
      }
    ],
    icon: Eye,
    image: "/lovable-uploads/pulido-optica.jpg",
    imageAlt: "Pulido de óptica",
    color: "text-cyan-600",
  },
  {
    title: "Reparación de equipos",
    slug: "reparacion-equipos",
    description: "Diagnóstico y reparación de equipos electrónicos automotrices: audio, alarmas, sensores y más.",
    detailedDescription: "Solucionamos fallas en equipos electrónicos de tu vehículo, desde sistemas de audio hasta potencias y alarmas. Servicio profesional y diagnóstico preciso.",
    features: [
      "Diagnóstico profesional",
      "Repuestos originales",
      "Garantía en reparación",
    ],
    process: [
      "Evaluación y diagnóstico del equipo",
      "Presupuesto detallado",
      "Reparación y prueba de funcionamiento",
      "Entrega con garantía"
    ],
    duration: "7 días según equipo",
    warranty: "3 meses en reparación",
    price: "A convenir",
    faq: [
      {
        question: "¿Reparan cualquier marca?",
        answer: "Sí, trabajamos con todas las marcas y modelos."
      },
      {
        question: "¿Cuánto tiempo tarda el diagnóstico?",
        answer: "Entre 5 y 7 días según el equipo."
      }
    ],
    icon: Wrench,
    image: "/lovable-uploads/reparacion-equipos.jpg",
    imageAlt: "Reparación de equipos",
    color: "text-orange-600",
  },
  {
    title: "Polarizado",
    slug: "polarizado",
    description: "Instalación de láminas polarizadas para vidrios, mejorando privacidad y protección solar.",
    detailedDescription: "Ofrecemos polarizado profesional para autos y camionetas, con láminas homologadas y garantía. Mejora la estética, reduce el calor y protege el interior del vehículo.",
    features: [
      "Láminas homologadas",
      "Protección UV",
      "Instalación sin burbujas",
    ],
    process: [
      "Limpieza y preparación de vidrios",
      "Corte y ajuste de láminas",
      "Instalación profesional",
      "Revisión y garantía"
    ],
    duration: "2-4 horas",
    warranty: "1 año contra desprendimiento",
    price: "A convenir",
    faq: [
      {
        question: "¿Qué tonos ofrecen?",
        answer: "Tenemos varios tonos y grados de polarizado, todos legales."
      },
      {
        question: "¿Cuánto tiempo tarda?",
        answer: "Entre 2 y 4 horas según cantidad de vidrios."
      }
    ],
    icon: Palette,
    image: "/lovable-uploads/polarizado.jpg",
    imageAlt: "Polarizado",
    color: "text-teal-600",
  },
  {
    title: "Tratamientos",
    slug: "tratamientos",
    description: "Elegí el tratamiento ideal para tu auto: abrillantado, acrílico o cerámico. Cada uno con procesos y beneficios específicos.",
    detailedDescription: "Ofrecemos tres tipos de tratamientos para la pintura de tu vehículo, adaptados a diferentes necesidades y presupuestos. Mejorá el brillo, la protección y la durabilidad de la pintura con la opción que más te convenga.",
    features: [
      "Abrillantado: un solo paso 3 en 1, lavado básico, listo en el día (8 horas).",
      "Acrílico: descontaminado, lavado, corrección media/alta según estado, 3 pasos de pulido.",
      "Cerámico: igual que acrílico pero con sellador cerámico premium (a convenir)."
    ],
    process: [
      "Evaluación del estado de la pintura.",
      "Lavado y descontaminado según tratamiento.",
      "Corrección y pulido (cantidad de pasos según tipo).",
      "Aplicación de sellador (acrílico o cerámico).",
      "Inspección final y entrega."
    ],
    duration: "Abrillantado: 8 horas | Acrílico: 1 día | Cerámico: 1-2 días",
    warranty: "Abrillantado: 3 meses | Acrílico: 6 meses | Cerámico: 1 año",
    price: "Abrillantado: $150.000 | Acrílico: $350.000 | Cerámico: $600.000",
    faq: [
      {
        question: "¿Qué incluye el abrillantado?",
        answer: "Incluye lavado básico y abrillantado de un solo paso con producto 3 en 1. El auto está listo en el día."
      },
      {
        question: "¿En qué consiste el tratamiento acrílico?",
        answer: "Descontaminado, lavado, corrección media/alta según estado y 3 pasos de pulido para máxima protección y brillo."
      },
      {
        question: "¿Qué diferencia hay con el cerámico?",
        answer: "El cerámico incluye el mismo proceso que el acrílico pero se finaliza con un sellador cerámico premium, que ofrece mayor durabilidad y protección."
      }
    ],
    icon: PaintBucket,
    image: "/lovable-uploads/tratamientos.jpg",
    imageAlt: "Tratamientos de pintura",
    color: "text-indigo-600",
  },
];