import {
  dataInicio as cieloInicio,
  dataElCamino as cieloElCamino,
  dataLaLlegada as cieloLaLlegada,
  dataNextDay as cieloNextDay,
  faqCabalgata,
  pricingInfo as cieloPricingInfo,
} from "@/data/cabalgataCielo";


export const cabalgatas = [
    {
        slug: "cielo",
        title: "Cabalgata Cielo",
        location: "Valle de Bravos",
        date: "17 y 18 de Mayo",
        days: "2 días de cabalgata",
        pricing: cieloPricingInfo,
        faq: faqCabalgata,
        image: "",
        timeline: [
          {
            title: "El Inicio",
            data: cieloInicio,
          },
          {
            title: "El Camino",
            data: cieloElCamino,
          },
          {
            title: "La llegada",
            data: cieloLaLlegada,
          },
          {
            title: "Al siguiente día",
            data: cieloNextDay,
          },
        ],
        description: "asd"
    },
    {
        slug: "earth",
        title: "Cabalgata Earth",
        location: "Valle de Bravos",
        date: "17 y 18 de Mayo",
        days: "2 días de cabalgata",
        pricing: cieloPricingInfo,
        faq: faqCabalgata,
        image: "",
        timeline: [
          {
            title: "El Inicio",
            data: cieloInicio,
          },
          {
            title: "El Camino",
            data: cieloElCamino,
          },
          {
            title: "La llegada",
            data: cieloLaLlegada,
          },
          {
            title: "Al siguiente día",
            data: cieloNextDay,
          },
        ],
        description: "asd"
    },
    {
        slug: "desierto",
        title: "Cabalgata Desierto",
        location: "Valle de Bravos",
        date: "17 y 18 de Mayo",
        days: "2 días de cabalgata",
        pricing: cieloPricingInfo,
        faq: faqCabalgata,
        image: "",
        timeline: [
          {
            title: "El Inicio",
            data: cieloInicio,
          },
          {
            title: "El Camino",
            data: cieloElCamino,
          },
          {
            title: "La llegada",
            data: cieloLaLlegada,
          },
          {
            title: "Al siguiente día",
            data: cieloNextDay,
          },
        ],
        description: "asd"
    },
]