export type PricingItem = {
  title: string;
  subtitle?: string;
  price: number;
  currency: string;
  packageDetails: string[];
  urlBtn: string;
  description?: string;
};

export const faq = {
  saboresOaxaquenos: {
    title: "Sabores Oaxaqueños",
    items: [
      {
        question: "¿Qué incluye la experiencia de Sabores Oaxaqueños?",
        answer:
          "Incluye degustación de platillos típicos, cata de mezcales, un taller de cocina, recorrido por un mercado local y espectáculo cultural con música y danza tradicional.",
      },
      {
        question: "¿Necesito saber cocinar para el taller de mole?",
        answer:
          "No es necesario. El taller está diseñado para todos los niveles. Aprenderás los pasos básicos de manera práctica y divertida.",
      },
      {
        question: "¿Los platillos ofrecidos son aptos para vegetarianos?",
        answer:
          "Algunos platillos pueden adaptarse. Te recomendamos indicarlo al momento de tu reserva para hacer los ajustes necesarios.",
      },
      {
        question: "¿Puedo asistir con niños?",
        answer:
          "Sí, la experiencia es familiar y contamos con actividades culturales que pueden disfrutar los más pequeños.",
      },
      {
        question: "¿Dónde se lleva a cabo la experiencia?",
        answer:
          "Se realiza en una cocina tradicional ubicada en el centro histórico y en zonas representativas de Oaxaca.",
      },
      {
        question: "¿Hay productos disponibles para comprar al finalizar?",
        answer:
          "Sí, puedes adquirir productos artesanales y gastronómicos como moles, mezcales y utensilios tradicionales.",
      },
    ],
  },

  rutaDelTequila: {
    title: "Ruta del Tequilaz",
    items: [
      {
        question: "¿Qué incluye el tour de la Ruta del Tequilaz?",
        answer:
          "Incluye visitas guiadas a varias casas tequileras, degustaciones, transporte, guía certificado y una comida tradicional.",
      },
      {
        question: "¿Se pueden hacer compras durante el tour?",
        answer:
          "Sí, en cada tequilera tendrás la oportunidad de comprar botellas y productos a precios preferenciales.",
      },
      {
        question: "¿Hay restricciones de edad para participar?",
        answer:
          "Sí, debes ser mayor de edad (18+) para consumir alcohol y participar en las catas.",
      },
      {
        question: "¿Qué tipo de transporte se utiliza?",
        answer:
          "Contamos con unidades cómodas y climatizadas. El transporte es redondo desde un punto de encuentro central.",
      },
      {
        question: "¿Cuánto dura el recorrido completo?",
        answer:
          "Aproximadamente 6 horas, incluyendo traslados, visitas, catas y comida.",
      },
      {
        question: "¿Debo reservar con anticipación?",
        answer:
          "Sí, debido a la demanda limitada se recomienda reservar al menos con una semana de anticipación.",
      },
    ],
  },

  festivalDelChileEnNogada: {
    title: "Festival del Chile en Nogada",
    items: [
      {
        question: "¿Qué puedo encontrar en el Festival del Chile en Nogada?",
        answer:
          "Una gran variedad de versiones del platillo tradicional, música en vivo, talleres gastronómicos y mercado de productos locales.",
      },
      {
        question: "¿Hay opciones para personas vegetarianas?",
        answer:
          "Sí, algunas versiones del chile en nogada están hechas con relleno vegetal. Pregunta por disponibilidad al llegar.",
      },
      {
        question: "¿El evento es pet friendly?",
        answer:
          "Sí, puedes asistir con tu mascota siempre que esté bajo supervisión y con correa.",
      },
      {
        question: "¿Hay actividades culturales o solo comida?",
        answer:
          "Además de la gastronomía, hay presentaciones de danza, música regional y concursos de cocina.",
      },
      {
        question: "¿Cuánto cuesta la entrada?",
        answer:
          "La entrada general es gratuita, pero los platillos y talleres tienen un costo individual.",
      },
      {
        question: "¿Dónde se realiza el festival?",
        answer:
          "Se lleva a cabo en una plaza pública emblemática, con acceso fácil y señalización en todo el recinto.",
      },
    ],
  },
};


export const PricingInfo = {
  saboresOaxaquenos: {
    title: "Sabores Oaxaqueños",
    description: "Descubre los secretos de la cocina oaxaqueña en una experiencia única.",
    subtitle: "Una experiencia culinaria y cultural",
    price: 1200,
    currency: "MXN",
    packageDetails: [
      "Degustación de 5 platillos tradicionales oaxaqueños",
      "Cata de mezcales artesanales",
      "Taller de preparación de mole negro",
      "Recorrido guiado por mercado local",
      "Música en vivo y bailes regionales",
    ],
    urlBtn: "https://example.com/sabores-oaxaquenos",
  },
  rutaDelTequila: {
    title: "Ruta del Tequilaz",
    description: "Aprende todo sobre el tequila mientras disfrutas de su sabor auténtico.",
    subtitle: "Explora el alma del agave",
    price: 1500,
    currency: "MXN",
    packageDetails: [
      "Visita a dos tequileras tradicionales",
      "Cata guiada de tequilas premium",
      "Maridaje con botanas regionales",
      "Recorrido por campos de agave",
      "Transporte y guía incluidos",
    ],
    urlBtn: "https://example.com/ruta-del-tequilaz",
  },
  festivalDelChileEnNogada: {
    title: "Festival del Chile en Nogada",
    description: "Descubre el arte culinario detrás del chile en nogada.",
    subtitle: "Celebración de la tradición poblana",
    price: 950,
    currency: "MXN",
    packageDetails: [
      "Plato principal: Chile en nogada elaborado por chefs invitados",
      "Bebida de cortesía (vino blanco o mezcal)",
      "Postre típico poblano",
      "Exposición de artesanías locales",
      "Música tradicional y ambiente familiar",
    ],
    urlBtn: "https://example.com/festival-chile-nogada",
  }
}



// Datos para Sabores Oaxaqueños
export const dataPrimerContacto = [
  {
    title: "Viernes 9:00 am",
    description: "Nos reuniremos en el centro de Oaxaca para iniciar nuestro recorrido gastronómico.",
    images: [
      "https://images.pexels.com/photos/5490380/pexels-photo-5490380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/6270541/pexels-photo-6270541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/16971927/pexels-photo-16971927/free-photo-of-comida-mercado-verdura-al-aire-libre.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/6270530/pexels-photo-6270530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
  },
  {
    title: "Visita al Mercado 20 de Noviembre",
    description: "Exploraremos uno de los mercados más emblemáticos de Oaxaca donde conoceremos los ingredientes base de su cocina tradicional: chiles, chocolate, quesillo y chapulines.",
    images: [
      "https://images.pexels.com/photos/8969237/pexels-photo-8969237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/9027521/pexels-photo-9027521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/5835359/pexels-photo-5835359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/2801040/pexels-photo-2801040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
  },
  {
    title: "Introducción a los 7 moles",
    description: "Un chef local nos explicará la historia, ingredientes y diferencias entre los siete moles tradicionales de Oaxaca: negro, rojo, coloradito, amarillo, verde, chichilo y manchamanteles.",
    images: [
      "https://images.pexels.com/photos/7613423/pexels-photo-7613423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/4916479/pexels-photo-4916479.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
  },
];

export const dataPreparacion = [
  {
    title: "Viernes 12:00 pm",
    description: "Traslado a la cocina tradicional donde aprenderemos las técnicas ancestrales de la cocina oaxaqueña.",
    images: [
      "https://images.pexels.com/photos/2544829/pexels-photo-2544829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/2403391/pexels-photo-2403391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/6210764/pexels-photo-6210764.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/5824883/pexels-photo-5824883.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
  },
  {
    title: "Taller de molcajete y metate",
    description: "Aprenderemos a usar los utensilios tradicionales mexicanos para moler salsas, chiles y especias de la forma ancestral que da el sabor característico a la cocina oaxaqueña.",
    images: [
      "https://images.pexels.com/photos/6210977/pexels-photo-6210977.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/4873657/pexels-photo-4873657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/6210883/pexels-photo-6210883.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/5737757/pexels-photo-5737757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
  },
  {
    title: "Preparación de tlayudas",
    description: "Manos a la masa: aprenderemos a preparar las famosas tlayudas oaxaqueñas con todos sus ingredientes tradicionales: frijoles refritos, tasajo, quesillo, chapulines y aguacate.",
    images: [
      "https://images.pexels.com/photos/10311642/pexels-photo-10311642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/6941001/pexels-photo-6941001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
  },
];

// Datos para Ruta del Tequila
export const dataCamposAgave = [
  {
    title: "Sábado 10:00 am",
    description: "Punto de encuentro en la plaza principal de Tequila, Jalisco, donde nos recibirá nuestro maestro tequilero.",
    images: [
      "https://images.pexels.com/photos/6747335/pexels-photo-6747335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/351709/pexels-photo-351709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/17151834/pexels-photo-17151834/free-photo-of-plantas-campo-agricultura-cultivo.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/210680/pexels-photo-210680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
  },
  {
    title: "Recorrido por los campos azules",
    description: "Visitaremos los impresionantes paisajes agaveros, Patrimonio de la Humanidad por la UNESCO, donde observaremos el cultivo del Agave tequilana weber variedad azul.",
    images: [
      "https://images.pexels.com/photos/4221068/pexels-photo-4221068.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1334627/pexels-photo-1334627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/7514775/pexels-photo-7514775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/4562684/pexels-photo-4562684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
  },
  {
    title: "Demostración de jima",
    description: "Un jimador experimentado nos mostrará el proceso tradicional de corte de las pencas y extracción de la piña del agave, técnica que requiere años de experiencia y precisión.",
    images: [
      "https://images.pexels.com/photos/12604135/pexels-photo-12604135.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/3782033/pexels-photo-3782033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
  },
];

// Datos para Festival del Chile en Nogada
export const dataHistoriaTradicion = [
  {
    title: "10:00 am",
    description: "Nos reuniremos en el centro histórico de Puebla para comenzar nuestra experiencia gastronómica patriótica.",
    images: [
      "https://images.pexels.com/photos/13902325/pexels-photo-13902325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/8088440/pexels-photo-8088440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/5031901/pexels-photo-5031901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/2347383/pexels-photo-2347383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
  },
  {
    title: "Introducción histórica",
    description: "Un experto historiador gastronómico nos contará la historia del Chile en Nogada, creado por las monjas agustinas en 1821 para celebrar la independencia y recibir a Agustín de Iturbide.",
    images: [
      "https://images.pexels.com/photos/7694037/pexels-photo-7694037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/8120093/pexels-photo-8120093.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/3810952/pexels-photo-3810952.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/4551155/pexels-photo-4551155.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
  },
  {
    title: "Los ingredientes patrióticos",
    description: "Analizaremos el simbolismo de los colores de la bandera mexicana en el platillo: el verde del chile y perejil, el blanco de la nogada y el rojo de la granada.",
    images: [
      "https://images.pexels.com/photos/7437868/pexels-photo-7437868.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/6546024/pexels-photo-6546024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
  },
];

export const dataSeleccionIngredientes = [
  {
    title: "11:30 am",
    description: "Visita al Mercado de Sabores Poblanos para seleccionar los ingredientes de temporada para nuestro Chile en Nogada.",
    images: [
      "https://images.pexels.com/photos/264537/pexels-photo-264537.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/2252584/pexels-photo-2252584.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/7129527/pexels-photo-7129527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/2751755/pexels-photo-2751755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
  },
  {
    title: "Selección de chiles poblanos",
    description: "Aprenderemos a identificar los mejores chiles poblanos: brillantes, firmes y de color verde intenso, fundamentales para la base del platillo.",
    images: [
      "https://images.pexels.com/photos/5288731/pexels-photo-5288731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/6210094/pexels-photo-6210094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/8972183/pexels-photo-8972183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/11411548/pexels-photo-11411548.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
  },
  {
    title: "Frutas de temporada",
    description: "Seleccionaremos las frutas de temporada para el relleno: manzana panochera, pera de leche, durazno criollo, acitrones y piñones, que dan el sabor agridulce característico.",
    images: [
      "https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/2872755/pexels-photo-2872755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
  },
];