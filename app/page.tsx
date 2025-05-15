import { CarouselSlide } from "@/components/CarouselSlide";
import { HeroSectionTitle } from "@/components/HeroSectionTitle";
import { NavbarComponent } from "@/components/NavbarComponent";
import { NextExperiences } from "@/components/NextExperiences";
import { TitleSections } from "@/components/TitleSections";
import { slideDataViajes } from "@/data/carouselViajes"

export default function Page() {
  return (
    <div className="relative w-full">
      <div className="bg-[url('/hero.webp')] bg-cover bg-top bg-no-repeat h-screen relative">
        <div className="absolute inset-0 bg-black/60" />
        <NavbarComponent />        
        <HeroSectionTitle title="Descubre, Aprende y Mejora tus Habilidades en Todos los Ámbitos de la Vida" buttonA="Unete a Nosotros" buttonB="Ver cursos" urlA="#nextexperiences" urlB="#cursos" isFlipWords={true} />
      </div>

      <div id="nextexperiences" className="w-full h-auto flex flex-col items-center justify-start pb-10 pt-16 sm:py-20">
        <TitleSections title="Próximos Viajes"/>
        <CarouselSlide slides={ slideDataViajes }/>
      </div>
      
      <div id="cursos" className="overflow-hidden min-h-screen flex flex-col items-center justify-start pb-10 pt-16 sm:py-20">
        <TitleSections title="Aprende con nosotros ✍️"/>
        <NextExperiences />
      </div>
    </div>
  );
}