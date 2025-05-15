import { Metadata } from "next";
import { HeroSectionTitle } from "@/components/HeroSectionTitle";
import { NavbarComponent } from "@/components/NavbarComponent";
import { TitleSections } from "@/components/TitleSections";
import { WobbleCardDemo } from "@/components/WobbleCardDemo";
import { cards } from "@/data/gastronomias";

export const metadata: Metadata = {
  title: "Gastronomía | YoureTalent",
  description: "Descubre los sabores auténticos y técnicas culinarias ancestrales..",
};

export default function GastronomiaPage() {
  return (
    <div className="relative w-full">
      <div className="bg-[url('/gastronomia.webp')] bg-cover bg-top bg-no-repeat h-screen relative">
      <div className="absolute inset-0 bg-black/60" />
        <NavbarComponent />
        <HeroSectionTitle title="Un Viaje a la Esencia de la Cocina Mexicana." buttonA="Ver Platillos" urlA="#typesGastronomias"/>
      </div>
      
      <section id="typesGastronomias" className="w-full min-h-screen flex flex-col items-center justify-start py-20">
        <TitleSections title="Conoce nuestros sabores"/>
        <WobbleCardDemo cards={cards}/> 
        {/* Pasar los slug a gastronomias.ts la data */}
      </section>
    </div>
  );
}