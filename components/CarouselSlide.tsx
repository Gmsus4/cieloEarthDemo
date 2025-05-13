"use client";

import Carousel from "@/components/ui/carousel";
interface SlideData {
  src: string;
  title: string;
  button: string;
  date: string;
  place: string
}

interface CarouselProps {
  slides: SlideData[];
}

export function CarouselSlide({slides}: CarouselProps) {

  return (
    <div className="relative overflow-hidden w-full h-full lg:pt-10 lg:pb-20 pb-20 py-4">
      <Carousel slides={slides} />
    </div>
  );
}
