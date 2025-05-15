import { dataPrimerContacto, dataPreparacion, dataCamposAgave, dataHistoriaTradicion, dataSeleccionIngredientes, PricingInfo, faq } from "@/data/gastronomiaTimeline";

export const cards = [
  {
    title: "Sabores Oaxaqueños",
    days: "2 días de inmersión culinaria",
    place: "Oaxaca de Juárez, Oaxaca",
    colSpan: "lg:col-span-2",
    slug: "oaxaca-tradicional",
    image: "/gastronomia/oaxaca-tradicional.webp",
    section: "gastronomia",
    btnTitle: "Explorar Menú"
  },
  {
    title: "Ruta del Tequila",
    days: "4 horas de degustación y maridaje",
    place: "Tequila, Jalisco",
    slug: "tequila-experience",
    image: "/gastronomia/tequila-experience.webp",
    section: "gastronomia",
    btnTitle: "Ver ruta",
  },
  {
    title: "Festival del Chile en Nogada",
    days: "3 hrs de taller culinario tradicional",
    place: "Puebla de Zaragoza, Puebla",
    colSpan: "lg:col-span-3",
    slug: "chiles-nogada",
    image: "/gastronomia/chiles-nogada.webp",
    section: "gastronomia",
    btnTitle: "Cocinar Ahora"
  },
]

export const gastronomias = [
    {
        title: "Sabores Oaxaqueños",
        slug: "oaxaca-tradicional",
        slugBtnPrimary: "Explora la Cultura Culinaria",
        slugBtnSecundary: "Compra tu Entrada",
        location: "Oaxaca de Juárez, Oaxaca",
        date: "24 y 25 de Mayo",
        days: "2 días de inmersión culinaria",
        pricing: PricingInfo.saboresOaxaquenos,
        faq: faq.saboresOaxaquenos,
        image: "https://images.pexels.com/photos/5737247/pexels-photo-5737247.jpeg",
        timeline: [
          {
            title: "Primer contacto",
            data: dataPrimerContacto
          },
          {
            title: "Preparación",
            data: dataPreparacion
          },
        ],
        description: "Una experiencia gastronómica completa para descubrir los secretos culinarios de Oaxaca, considerada la capital gastronómica de México, con sus siete moles tradicionales y técnicas ancestrales."
    },


    {
        title: "Ruta del Tequila",
        slug: "tequila-experience",
        slugBtnPrimary: "Conoce la Ruta",
        slugBtnSecundary: "Ver precios",
        location: "Tequila, Jalisco",
        date: "Todos los sábados",
        days: "4 horas de degustación y maridaje",
        pricing: PricingInfo.rutaDelTequila,
        faq: faq.rutaDelTequila,
        image: "https://images.pexels.com/photos/5947019/pexels-photo-5947019.jpeg",
        timeline: [
          {
            title: "Campos de agave",
            data: dataCamposAgave
          },
        ],
        description: "Adéntrate en el mundo del tequila, Patrimonio de la Humanidad, a través de una experiencia sensorial completa en su lugar de origen. Conoce desde la planta hasta la botella este emblemático destilado mexicano."
    },


    {
        title: "Festival del Chile en Nogada",
        slug: "chiles-nogada",
        slugBtnPrimary: "Ver elaboración",
        slugBtnSecundary: "Ver precios",
        location: "Puebla de Zaragoza, Puebla",
        date: "Agosto y Septiembre",
        days: "3 hrs de taller culinario tradicional",
        pricing: PricingInfo.festivalDelChileEnNogada,
        faq: faq.festivalDelChileEnNogada,
        image: "https://images.pexels.com/photos/7172072/pexels-photo-7172072.jpeg",
        timeline: [
          {
            title: "Historia y tradición",
            data: dataHistoriaTradicion
          },
          {
            title: "Selección de ingredientes",
            data: dataSeleccionIngredientes
          },
        ],
        description: "Vive la experiencia de preparar el emblemático platillo mexicano que celebra la independencia, en su lugar de origen. El Chile en Nogada, con sus colores verde, blanco y rojo, representa un hito en la gastronomía tradicional mexicana."
    },
]