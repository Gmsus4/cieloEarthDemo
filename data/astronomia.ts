import {
  TreePalm,
  Check,
  Utensils,
  Wifi,
  Dumbbell,
  Coffee,
  ParkingCircle,
  ChefHat,
  Ship,
  Fish,
  CookingPot,
  Sunset,
  Bike,
  Binoculars,
  Paintbrush,
  MapPin,
  Telescope,
  User,
  Tent,
  Flame,
  Book,
  Users,
  Mountain,
  Star,
  Building,
  Monitor,
  Footprints,
  Handshake,
  Map,
} from "lucide-react";

// Función para asignar íconos según el título de la amenidad
function getAmenityIcon(title: string) {
  const lowerTitle = title.toLowerCase();
  if (lowerTitle.includes("playa")) return TreePalm;
  if (lowerTitle.includes("kayak")) return Ship;
  if (lowerTitle.includes("paddle")) return Ship;
  if (lowerTitle.includes("tennis")) return Dumbbell;
  if (lowerTitle.includes("restaurante")) return Utensils;
  if (lowerTitle.includes("room service")) return ChefHat;
  if (lowerTitle.includes("pueblo")) return MapPin;
  if (lowerTitle.includes("art gallery")) return Paintbrush;
  if (lowerTitle.includes("caminata")) return Binoculars;
  if (lowerTitle.includes("comida")) return Utensils;
  if (lowerTitle.includes("taller")) return Paintbrush;
  if (lowerTitle.includes("wifi")) return Wifi;
  if (lowerTitle.includes("gimnasio")) return Dumbbell;
  if (lowerTitle.includes("cafetería")) return Coffee;
  if (lowerTitle.includes("estacionamiento")) return ParkingCircle;
  if (lowerTitle.includes("chef")) return ChefHat;
  if (lowerTitle.includes("yate")) return Ship;
  if (lowerTitle.includes("pesca")) return Fish;
  if (lowerTitle.includes("cocina")) return CookingPot;
  if (lowerTitle.includes("atardecer")) return Sunset;
  if (lowerTitle.includes("bicicleta")) return Bike;
  if (lowerTitle.includes("mirador")) return Binoculars;
  return Check;
}


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

export const lugaresAstronomia = [
  {
    title: "Cielo Estrellado en Sierra Gorda",
    description: "Una experiencia inmersiva de observación astronómica en uno de los cielos más limpios de México.",
    features: [
      { title: "Zona de observación", qty: 1, icon: Telescope },
      { title: "Guía astronómico", qty: 1, icon: User },
      { title: "Campamento", qty: 1, icon: Tent },
    ],
    amenities: [
      { title: "Telescopios profesionales", icon: getAmenityIcon("Telescopios profesionales") },
      { title: "Astrofotografía", icon: getAmenityIcon("Astrofotografía") },
      { title: "Narraciones mitológicas", icon: getAmenityIcon("Narraciones mitológicas") },
      { title: "Fogata y bebidas calientes", icon: getAmenityIcon("Fogata y bebidas calientes") },
    ],
    location: "Sierra Gorda, Querétaro",
    image: "/astronomia/cieloEstrellado.webp",
    images: [
      "https://images.pexels.com/photos/956981/milky-way-starry-sky-night-sky-star-956981.jpeg",
      "https://images.pexels.com/photos/127577/nature-stars-sky-night-127577.jpeg",
      "https://images.pexels.com/photos/1112186/pexels-photo-1112186.jpeg",
      "https://images.pexels.com/photos/3879167/pexels-photo-3879167.jpeg",
      "https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg"
    ],
    locationUrl: "https://maps.app.goo.gl/QuauJ5oFVhvxtnTX9",
  },
  {
    title: "Noche Cósmica en el Desierto",
    description: "Sumérgete en una noche mágica en el desierto con observación de estrellas y guía espiritual.",
    features: [
      { title: "Zona desértica", qty: 1, icon: Tent },
      { title: "Guía espiritual", qty: 1, icon: User },
      { title: "Ritual de fuego", qty: 1, icon: Flame },
    ],
    amenities: [
      { title: "Meditación guiada", icon: getAmenityIcon("Meditación guiada") },
      { title: "Lectura de constelaciones", icon: getAmenityIcon("Lectura de constelaciones") },
      { title: "Cena ligera al aire libre", icon: getAmenityIcon("Cena ligera al aire libre") },
    ],
    location: "Desierto de los Leones, CDMX",
    image: "/astronomia/desierto.webp",
    images: [
      "https://images.pexels.com/photos/1054213/pexels-photo-1054213.jpeg",
      "https://images.pexels.com/photos/891252/pexels-photo-891252.jpeg",
      "https://images.pexels.com/photos/3617500/pexels-photo-3617500.jpeg",
      "https://images.pexels.com/photos/1624438/pexels-photo-1624438.jpeg",
      "https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg",
      "https://images.pexels.com/photos/1809644/pexels-photo-1809644.jpeg",
      "https://images.pexels.com/photos/5282587/pexels-photo-5282587.jpeg"
    ],
    locationUrl: "https://maps.app.goo.gl/RJZY5npL3LEoWRiW9",
  },
  {
    title: "Campamento Lunar en Valle de Bravo",
    description: "Observación de la luna con telescopios y taller de fases lunares para toda la familia.",
    features: [
      { title: "Zona de camping", qty: 1, icon: Tent },
      { title: "Taller lunar", qty: 1, icon: Book },
      { title: "Área familiar", qty: 1, icon: Users },
    ],
    amenities: [
      { title: "Telescopios para niños", icon: getAmenityIcon("Telescopios para niños") },
      { title: "Taller de dibujo lunar", icon: getAmenityIcon("Taller de dibujo lunar") },
      { title: "Zona de picnic", icon: getAmenityIcon("Zona de picnic") },
    ],
    location: "Valle de Bravo, Estado de México",
    image: "/astronomia/campamentoLunar.webp",
    images: [
      "https://images.pexels.com/photos/957040/pexels-photo-957040.jpeg",
      "https://images.pexels.com/photos/1025469/pexels-photo-1025469.jpeg",
      "https://images.pexels.com/photos/5863393/pexels-photo-5863393.jpeg",
      "https://images.pexels.com/photos/3163477/pexels-photo-3163477.jpeg",
      "https://images.pexels.com/photos/2387877/pexels-photo-2387877.jpeg",
      "https://images.pexels.com/photos/4553618/pexels-photo-4553618.jpeg",
      "https://images.pexels.com/photos/2670898/pexels-photo-2670898.jpeg"
    ],
    locationUrl: "https://maps.app.goo.gl/bFmcECyDhfBfeDRx7",
  },
  {
    title: "Ruta Astronómica en Real de Catorce",
    description: "Descubre el cielo nocturno del altiplano con historias, ciencia y estrellas fugaces.",
    features: [
      { title: "Punto elevado", qty: 1, icon: Mountain },
      { title: "Tour guiado", qty: 1, icon: Map },
      { title: "Noche estrellada", qty: 1, icon: Star },
    ],
    amenities: [
      { title: "Guía astronómico", icon: getAmenityIcon("Guía astronómico") },
      { title: "Observación sin luz artificial", icon: getAmenityIcon("Observación sin luz artificial") },
      { title: "Acceso 4x4", icon: getAmenityIcon("Acceso 4x4") },
    ],
    location: "Real de Catorce, San Luis Potosí",
    image: "/astronomia/ruta.webp",
    images: [
      "https://images.pexels.com/photos/15352436/pexels-photo-15352436.jpeg",
      "https://images.pexels.com/photos/10546576/pexels-photo-10546576.jpeg",
      "https://images.pexels.com/photos/1539225/pexels-photo-1539225.jpeg",
      "https://images.pexels.com/photos/2469122/pexels-photo-2469122.jpeg",
      "https://images.pexels.com/photos/3893748/pexels-photo-3893748.jpeg",
      "https://images.pexels.com/photos/1366630/pexels-photo-1366630.jpeg",
      "https://images.pexels.com/photos/771883/pexels-photo-771883.jpeg"
    ],
    locationUrl: "https://maps.app.goo.gl/WoLZqf6mFZCZb3cv9",
  },
  {
    title: "Observatorio del Cielo Profundo",
    description: "Explora galaxias, nebulosas y cúmulos desde un observatorio profesional abierto al público.",
    features: [
      { title: "Cúpula astronómica", qty: 1, icon: Building },
      { title: "Telescopio avanzado", qty: 1, icon: Telescope },
      { title: "Sala interactiva", qty: 1, icon: Monitor },
    ],
    amenities: [
      { title: "Charla científica", icon: getAmenityIcon("Charla científica") },
      { title: "Simulador del cielo", icon: getAmenityIcon("Simulador del cielo") },
      { title: "Zona de descanso", icon: getAmenityIcon("Zona de descanso") },
    ],
    location: "Tonantzintla, Puebla",
    image: "/astronomia/cieloProfundo.webp",
    images: [
      "https://images.pexels.com/photos/19333669/pexels-photo-19333669.jpeg",
      "https://images.pexels.com/photos/360912/pexels-photo-360912.jpeg",
      "https://images.pexels.com/photos/47367/full-moon-moon-bright-sky-47367.jpeg",
      "https://images.pexels.com/photos/39561/solar-flare-sun-eruption-energy-39561.jpeg",
      "https://images.pexels.com/photos/12498752/pexels-photo-12498752.jpeg",
      "https://images.pexels.com/photos/5915170/pexels-photo-5915170.jpeg",
      "https://images.pexels.com/photos/256376/pexels-photo-256376.jpeg"
    ],
    locationUrl: "https://maps.app.goo.gl/4VpfsdVVpFiqq2uH9",
  },
  {
    title: "Sendero Nocturno en la Sierra Tarahumara",
    description: "Una caminata guiada bajo la vía láctea, acompañada de relatos ancestrales y astronomía natural.",
    features: [
      { title: "Ruta guiada", qty: 1, icon: Footprints },
      { title: "Comunidad indígena", qty: 1, icon: Handshake },
      { title: "Observación natural", qty: 1, icon: Binoculars },
    ],
    amenities: [
      { title: "Historias tradicionales", icon: getAmenityIcon("Historias tradicionales") },
      { title: "Cena típica rarámuri", icon: getAmenityIcon("Cena típica rarámuri") },
      { title: "Silencio absoluto", icon: getAmenityIcon("Silencio absoluto") },
    ],
    location: "Sierra Tarahumara, Chihuahua",
    image: "/astronomia/sendero.jpg",
    images: [
      "https://images.pexels.com/photos/1696777/pexels-photo-1696777.jpeg",
      "https://images.pexels.com/photos/998641/pexels-photo-998641.jpeg",
      "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg",
      "https://images.pexels.com/photos/2376799/pexels-photo-2376799.jpeg",
      "https://images.pexels.com/photos/3331094/pexels-photo-3331094.jpeg",
      "https://images.pexels.com/photos/2365457/pexels-photo-2365457.jpeg",
      "https://images.pexels.com/photos/1624256/pexels-photo-1624256.jpeg"
    ],
    locationUrl: "https://maps.app.goo.gl/7EN3g9D9k8pbj3Z88",
  },
];