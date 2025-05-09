"use client";

import Carousel from "@/components/ui/carousel";
export function CarouselDemo() {
  const slideData = [
    {
      title: "Cabalgata Cielo Rojo",
      button: "Saber más",
      date: "",
      place: "Valle de Bravo",
      src: "https://images.pexels.com/photos/3136928/pexels-photo-3136928.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "Surf Camp",
      button: "Saber más",
      date: "",
      place: "Saladita, Guerrero",
      src: "https://images.pexels.com/photos/1533729/pexels-photo-1533729.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "Raft-in Earth",
      button: "Saber más",
      date: "",
      place: "Jacomulco, Veracruz",
      src: "https://images.pexels.com/photos/10762571/pexels-photo-10762571.jpeg",
    },
    {
      title: "Cabalgata Earth",
      button: "Saber más",
      date: "",
      place: "Valle de Bravo",
      src: "https://images.pexels.com/photos/162520/farmer-man-shepherd-dog-162520.jpeg",
    },
  ];
  return (
    <div className="relative overflow-hidden w-full h-full lg:pt-10 lg:pb-20 pb-20 py-4">
      <Carousel slides={slideData} />
    </div>
  );
}
