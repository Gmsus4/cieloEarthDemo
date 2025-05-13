import { CarouselSlide } from "@/components/CarouselSlide";
import { HeroSectionTitle } from "@/components/HeroSectionTitle";
import { NavbarComponent } from "@/components/NavbarComponent";
import { NextExperiences } from "@/components/NextExperiences";
import { TitleSections } from "@/components/TitleSections";
import { slideDataCabalgata } from "@/data/carouselCabalgata"

export default function Page() {
  return (
    <div className="relative w-full">
      <div className="bg-[url('/hero.jpeg')] bg-cover bg-top bg-no-repeat h-screen relative">
        <div className="absolute inset-0 bg-black/60" />
        <NavbarComponent />        
        <HeroSectionTitle title="Viajes que pisan fuerte la tierra y acarician el cielo." buttonA="Unete a Nosotros" buttonB="Agendar Fecha" urlA="#nextexperiences" urlB="/date" isFlipWords={true} />
      </div>

      <div id="nextexperiences" className="w-full h-auto flex flex-col items-center justify-start pb-10 pt-16 sm:py-20">
        <TitleSections title="Próximas Experiencias"/>
        <CarouselSlide slides={slideDataCabalgata}/>
      </div>
      
      <div className="overflow-hidden pb-32 min-h-screen flex flex-col items-center justify-center">
        <TitleSections title="Nuestras 4 experiencias de conexión"/>
        <NextExperiences />
      </div>
    </div>
  );
}