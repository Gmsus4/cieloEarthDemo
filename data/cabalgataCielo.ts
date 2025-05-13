export type PricingItem = {
  title: string;
  subtitle?: string;
  price: number;
  currency: string;
  packageDetails: string[];
  urlBtn: string;
};

export const pricingInfo = [
  {
    title: "Cabalgata Cielo Incluye",
    subtitle: "",
    price: 9800,
    packageDetails: [
      "2 días de cabalgata rodeados de bosques y vistas maravillosas",
      "Caballo asignado según tu experiencia",
      "Día 1: Cabalgata de 6 horas",
      "Día 2: Cabalgata o hike a un mirador",
      "Picnic en el bosque",
      "Comida / Cena / Desayuno incluidos",
      "1 noche en cabañas El Cielo",
      "Seguro de gastos médicos",
      "Caballerangos, cocineras y staff acompañando todo el viaje",
    ],
    currency: "MXN",
    urlBtn: "https://google.com",
  },
];

export const faqCabalgata = [
  {
    question: "¿Puedo cancelar en cualquier momento?",
    answer:
      "Sí, puedes cancelar en cualquier momento sin que se te hagan preguntas al cancelar, pero agradeceríamos mucho si nos proporcionas algún comentario.",
  },
  {
    question:
      "¿Se necesita experiencia previa para participar en la cabalgata?",
    answer:
      "No se requiere experiencia previa. Nuestros guías proporcionarán instrucciones básicas y siempre estarán pendientes de los participantes durante todo el recorrido.",
  },
  {
    question: "¿Qué ropa debo llevar para la cabalgata?",
    answer:
      "Recomendamos usar pantalones largos cómodos, botas o zapatos cerrados resistentes, camisa de manga larga, sombrero o gorra para protegerse del sol, y una chaqueta ligera para las temperaturas más frescas de la mañana o la tarde.",
  },
  {
    question: "¿Hay límite de edad para participar?",
    answer:
      "Aceptamos participantes a partir de 12 años. Los menores de edad deben estar acompañados por un adulto responsable.",
  },
  {
    question: "¿Qué sucede en caso de mal tiempo?",
    answer:
      "En caso de condiciones climáticas adversas, podríamos reprogramar la actividad o ofrecer alternativas. Contactaremos a todos los participantes con anticipación si hay cambios en la agenda.",
  },
];

export const dataInicio = [
  {
    title: "Sábado 9:00 am",
    description: "Nos reuniremos en Valle de Bravo en el rancho acordado.",

    images: [
      "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/17472764/pexels-photo-17472764/free-photo-of-swimming-pool-in-seaside.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/5663201/pexels-photo-5663201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/261169/pexels-photo-261169.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
  },
  {
    title: "Punto de encuentro y equipaje",
    description:
      "Aquí dejaremos los coches y las maletas. Nuestro staff se encargará de llevar las maletas a las cabañas en el Cielo donde pasaremos la noche..",

    images: [
      "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/106343/pexels-photo-106343.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1132558/pexels-photo-1132558.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
  },
  {
    title: "Asignación de caballos y práctica",
    description:
      "Después de un té o café se asignarán los caballos de acuerdo a su experiencia y daremos unas vueltas de práctica en la pista antes de salir a la montaña.",

    images: [
      "https://images.pexels.com/photos/290627/pexels-photo-290627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/5977765/pexels-photo-5977765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
  },
];

export const dataElCamino = [
  {
    title: "Camino al Cielo",
    description:
      "Para llegar al Cielo tendremos que cruzar ríos, lagos y montañas.",

    images: [
      "https://images.pexels.com/photos/5159914/pexels-photo-5159914.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg",
    ],
  },
  {
    title: "Magia en cada paso",
    description:
      "Déjate sorprender por la magia de este lugar.Viviremos un día lleno de adrenalina descendiendo por un río rodeado de paisajes espectaculares.",

    images: [
      "https://images.pexels.com/photos/5159914/pexels-photo-5159914.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg",
    ],
  },
  {
    title: "Cabalgatas extensas y memorables",
    description:
      "La cabalgata tiene una duración de aproximadamente 6 horas cada día.",

    images: [
      "https://images.pexels.com/photos/5159914/pexels-photo-5159914.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg",
    ],
  },
  {
    title: "Picnic en el corazón del bosque",
    description:
      "A la mitad del camino un picnic nos estará esperando con ricas botanas y bebidas.",

    images: [
      "https://images.pexels.com/photos/5159914/pexels-photo-5159914.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg",
    ],
  },
  {
    title: "Día 2: Cabalgata o hike",
    description:
      "El segundo día de cabalgata es optativo: el participante puede escoger entre un segundo día a caballo o una caminata hacia un hermoso mirador en la cima de la montaña.",

    images: [
      "https://images.pexels.com/photos/5159914/pexels-photo-5159914.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg",
    ],
  },
];

export const dataLaLlegada = [
  {
    title: "Refugio en el bosque",
    description:
      "Las cabañas se encuentran en un bosque hermoso y seguro donde pasaremos la noche.",
    images: [
      "https://images.pexels.com/photos/5159914/pexels-photo-5159914.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg",
    ],
  },
  {
    title: "Bienvenida reconfortante",
    description: "Aquí nos recibirán con deliciosa comida y bebidas.",
    images: [
      "https://images.pexels.com/photos/5159914/pexels-photo-5159914.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg",
    ],
  },
  {
    title: "Comodidad sencilla y cálida",
    description:
      "Estas cabañas cuentan con agua caliente y camas limpias. No hay luz, wifi, ni señal de teléfono (solo en caso de emergencia).",
    images: [
      "https://images.pexels.com/photos/5159914/pexels-photo-5159914.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg",
    ],
  },
  {
    title: "Una noche entre fuego y naturaleza",
    description:
      "El fuego y la naturaleza nos acompañarán por el resto de la noche.",
    images: [
      "https://images.pexels.com/photos/5159914/pexels-photo-5159914.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg",
    ],
  },
];

export const dataNextDay = [
  {
    title: "Tú eliges la aventura",
    description:
      "Podrán decidir entre un hike a un hermoso mirador o un emocionante segundo día de cabalgata.",
    images: [
      "https://images.pexels.com/photos/5159914/pexels-photo-5159914.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg",
    ],
  },
  {
    title: "Energía para el camino",
    description:
      "Este día iniciará con un rico desayuno seguido por la actividad de su elección.",
    images: [
      "https://images.pexels.com/photos/5159914/pexels-photo-5159914.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg",
    ],
  },
  {
    title: "Un respiro con sabor",
    description:
      "Contaremos con un refrigerio en su actividad y de ahí continuaremos a la hacienda de donde partimos.",
    images: [
      "https://images.pexels.com/photos/5159914/pexels-photo-5159914.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg",
    ],
  },
  {
    title: "Cierre con el corazón lleno",
    description:
      "Estaremos llegando alrededor de las 4-5 pm para finalizar la experiencia del Cielo.",
    images: [
      "https://images.pexels.com/photos/5159914/pexels-photo-5159914.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg",
    ],
  },
];
