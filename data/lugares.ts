import {
  Bath,
  BedDouble,
  Fence,
  Hotel,
  TreePalm,
  Building2,
  MountainSnow,
  LampDesk,
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

export const lugares = [
  {
    title: "San Miguel de Allende",
    description:
      "Moderno loft ideal para una estancia cómoda y relajante, rodeado de naturaleza, arte y acceso a servicios exclusivos.",
    features: [
      { title: "Habitación", qty: 1, icon: BedDouble },
      { title: "Baño", qty: 1, icon: Bath },
      { title: "Terraza", qty: 1, icon: Fence },
    ],
    amenities: [
      { title: "4 albercas", icon: getAmenityIcon("4 albercas") },
      {
        title: "Playa exclusiva con aguas tranquilas",
        icon: getAmenityIcon("Playa exclusiva con aguas tranquilas"),
      },
      { title: "Kayak", icon: getAmenityIcon("Kayak") },
      { title: "Paddle board", icon: getAmenityIcon("Paddle board") },
      { title: "Tennis", icon: getAmenityIcon("Tennis") },
      { title: "2 restaurantes", icon: getAmenityIcon("2 restaurantes") },
      { title: "Room service", icon: getAmenityIcon("Room service") },
      {
        title: "Caminando a Pueblo Careyes",
        icon: getAmenityIcon("Caminando a Pueblo Careyes"),
      },
      {
        title: "Caminando a Art Gallery Careyes",
        icon: getAmenityIcon("Caminando a Art Gallery Careyes"),
      },
    ],
    location: "Club de Careyes",
    image:
      "https://images.pexels.com/photos/12610743/pexels-photo-12610743.jpeg",
    images: ["https://images.pexels.com/photos/31837999/pexels-photo-31837999/free-photo-of-stunning-monument-valley-buttes-under-clear-sky.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "https://images.pexels.com/photos/31469968/pexels-photo-31469968/free-photo-of-majestic-alpine-ibex-in-stunning-mountain-landscape.jpeg"],
    locationUrl: "https://maps.app.goo.gl/HeRDhMiyzqrrVJDA7",
  },
  {
    title: "Cuetzalan Mágico",
    description:
      "Cabaña enclavada en las montañas con vista al bosque y arquitectura tradicional mexicana.",
    features: [
      { title: "Habitaciones", qty: 2, icon: BedDouble },
      { title: "Baños", qty: 2, icon: Bath },
      { title: "Terraza", qty: 1, icon: Fence },
    ],
    amenities: [
      { title: "Temazcal", icon: getAmenityIcon("Temazcal") },
      { title: "Caminatas guiadas", icon: getAmenityIcon("Caminatas guiadas") },
      { title: "Comida tradicional", icon: getAmenityIcon("Comida tradicional") },
      { title: "Talleres de bordado", icon: getAmenityIcon("Talleres de bordado") },
    ],
    location: "Sierra Norte de Puebla",
    image:
      "https://images.pexels.com/photos/31984710/pexels-photo-31984710/free-photo-of-colorful-town-square-in-cuetzalan-mexico.jpeg",
    images: [
      "https://images.pexels.com/photos/15062516/pexels-photo-15062516/free-photo-of-figurines-of-saints-on-the-facade-of-st-michael-the-archangel-church.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/15062512/pexels-photo-15062512/free-photo-of-ancient-church-of-san-miguel-de-allende-in-mexico.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/15075692/pexels-photo-15075692/free-photo-of-bas-relief-on-corner-building.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
    locationUrl: "https://maps.app.goo.gl/HeRDhMiyzqrrVJDA7",
  },
  {
    title: "Ángel de Reforma",
    description:
      "Suite moderna en el corazón de la ciudad, ideal para estancias de negocios o placer.",
    features: [
      { title: "Habitación", qty: 1, icon: Hotel },
      { title: "Baño", qty: 1, icon: Bath },
      { title: "Vista urbana", qty: 1, icon: Building2 },
    ],
    amenities: [
      { title: "WiFi rápido", icon: getAmenityIcon("WiFi rápido") },
      { title: "Acceso a gimnasio", icon: getAmenityIcon("Acceso a gimnasio") },
      { title: "Cafetería en planta baja", icon: getAmenityIcon("Cafetería en planta baja") },
      { title: "Estacionamiento privado", icon: getAmenityIcon("Estacionamiento privado") },
    ],
    location: "Ciudad de México",
    image:
      "https://images.pexels.com/photos/31970992/pexels-photo-31970992/free-photo-of-aerial-view-of-angel-of-independence-in-mexico-city.jpeg",
    images: [""],
    locationUrl: "https://maps.app.goo.gl/HeRDhMiyzqrrVJDA7",
  },
  {
    title: "Costa Dorada",
    description:
      "Villa de lujo frente al mar, con diseño abierto y jardines tropicales.",
    features: [
      { title: "Habitaciones", qty: 4, icon: BedDouble },
      { title: "Baños", qty: 3, icon: Bath },
      { title: "Palmeras", qty: 1, icon: TreePalm },
    ],
    amenities: [
      { title: "Chef privado", icon: getAmenityIcon("Chef privado") },
      { title: "Alberca infinity", icon: getAmenityIcon("Alberca infinity") },
      { title: "Paseos en yate", icon: getAmenityIcon("Paseos en yate") },
      { title: "Spa al aire libre", icon: getAmenityIcon("Spa al aire libre") },
    ],
    location: "Costa Alegre, Jalisco",
    image: "https://images.pexels.com/photos/17492079/pexels-photo-17492079.jpeg",
    images: [""],
    locationUrl: "https://maps.app.goo.gl/HeRDhMiyzqrrVJDA7",
  },
  {
    title: "Cabaña Marina",
    description:
      "Refugio costero con diseño rústico y acceso directo a la playa.",
    features: [
      { title: "Habitación", qty: 1, icon: BedDouble },
      { title: "Baño", qty: 1, icon: Bath },
      { title: "Escritorio", qty: 1, icon: LampDesk },
    ],
    amenities: [
      { title: "Hamacas", icon: getAmenityIcon("Hamacas") },
      { title: "Pesca artesanal", icon: getAmenityIcon("Pesca artesanal") },
      { title: "Cocina equipada", icon: getAmenityIcon("Cocina equipada") },
      { title: "Atardeceres únicos", icon: getAmenityIcon("Atardeceres únicos") },
    ],
    location: "Bahía de Navidad",
    image: "https://images.pexels.com/photos/13445202/pexels-photo-13445202.jpeg",
    images: [""],
    locationUrl: "https://maps.app.go"
  }
] 
