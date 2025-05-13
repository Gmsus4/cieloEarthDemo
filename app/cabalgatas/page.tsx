import { Metadata } from "next";
import { HeroSectionTitle } from "@/components/HeroSectionTitle";
import { NavbarComponent } from "@/components/NavbarComponent";
import { TitleSections } from "@/components/TitleSections";
import { WobbleCardDemo } from "@/components/WobbleCardDemo";

export const metadata: Metadata = {
  title: "Cabalgatas | Cielo Earth",
  description: "Redescubre la naturaleza al ritmo de cada galope.",
};

export default function CabalgatasPage() {
  return (
    <div className="relative w-full">
      <div className="bg-[url('/cabalgata.jpg')] bg-cover bg-top bg-no-repeat h-screen relative">
      <div className="absolute inset-0 bg-black/60" />
        <NavbarComponent />
        <HeroSectionTitle title="Redescubre la naturaleza al ritmo de cada galope." buttonA="Ver tipos de Cabalgatas" urlA="#typesCabalgatas" buttonB="No se" urlB="#"/>
      </div>
      
      <section id="typesCabalgatas" className="w-full min-h-screen flex flex-col items-center justify-start py-20">
        <TitleSections title="Ofrecemos 3 tipos de Cabalgatas"/>
        <WobbleCardDemo
          cards={[
            {
              title: "Cabalgata Cielo",
              days: "2 días y una noche en el Cielo",
              place: "Valle de Bravo, Estado de México",
              colSpan: "lg:col-span-2",
              slug: "cielo",
              image: "https://images.pexels.com/photos/2291648/pexels-photo-2291648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              section: "cabalgatas",
              btnTitle: "Quiero Cielo"

            },
            {
              title: "Cabalgata Earth",
              days: "4 horas en los bosques más mágicos",
              place: "Valle de Bravo, Estado de México",
              slug: "earth",
              image: "https://images.pexels.com/photos/3739624/pexels-photo-3739624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              section: "cabalgatas",
              btnTitle: "Quiero Earth"
            },
            {
              title: "Cabalgata Desierto",
              days: "2 hrs de clases y cabalgata",
              place: "Desierto de los Leones, Ciudad de México",
              colSpan: "lg:col-span-3",
              slug: "desierto",
              image: "https://images.pexels.com/photos/2714627/pexels-photo-2714627.jpeg",
              section: "cabalgatas",
              btnTitle: "Quiero Desierto"
            },
          ]}
        />
      </section>
    </div>
  );
}