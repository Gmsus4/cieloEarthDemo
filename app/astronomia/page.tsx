import { Metadata } from "next";
import { HeroSectionTitle } from "@/components/HeroSectionTitle";
import { NavbarComponent } from "@/components/NavbarComponent";
import { TitleSections } from "@/components/TitleSections";
import { WobbleCardDemo } from "@/components/WobbleCardDemo";
import { MapPin } from "lucide-react";
import { lugaresAstronomia } from "@/data/astronomia"

export const metadata: Metadata = {
  title: "Astronomía | YourTalent",
  description: "El destino más exclusivo de México",
};

function titleToSlug(title: string): string {
  if (!title) return '';
  
  return title
    .toLowerCase()
    .normalize("NFD")                      // Normaliza y descompone caracteres acentuados
    .replace(/[\u0300-\u036f]/g, "")       // Elimina los diacríticos (acentos)
    .replace(/[^a-z0-9\s-]/g, "")          // Elimina caracteres que no sean letras, números, espacios o guiones
    .trim()                                // Elimina espacios al inicio y final
    .replace(/\s+/g, "-")                  // Reemplaza espacios con guiones
    .replace(/-+/g, "-")                   // Evita múltiples guiones consecutivos
    .replace(/^-+|-+$/g, "");              // Elimina guiones al inicio o final
}

export default function CabalgatasPage() {
  return (
    <div className="relative w-full">
      <div className="bg-[url('/astronomia.webp')] bg-cover bg-top bg-no-repeat h-screen relative">
      <div className="absolute inset-0 bg-black/60"/>
        <NavbarComponent />
        <HeroSectionTitle title="Astronomía para curiosos: descubre lo que hay más allá." buttonA="Ver lugares" urlA="#lugares" buttonB="Más información" urlB="#">
            {/* <p className="text-xl text-center">Contamos con diferentes tipos de residencias.</p> */}
            {/* <p className="text-xl text-center">Espacios de 1 a 7 habitaciones, según tus necesidades.</p> */}
            {/* <div className="mt-10 flex gap-2 items-center justify-center">
                <MapPin />
                <p>Ubicado en  la costa sur de Jalisco, en el océano Pacífico.</p>
            </div> */}
        </HeroSectionTitle>
      </div>
      
      <section id="lugares" className="w-full min-h-screen flex flex-col items-center justify-start py-20">
        <TitleSections title="Elige tu tipo de espacio ideal"/>
        <WobbleCardDemo
          cards={lugaresAstronomia.map((item) => ({
            title: item.title,
            colSpan: "lg:col-span-1",
            slug: titleToSlug(item.title),
            image: item.image || "https://via.placeholder.com/400x300", // fallback en caso de que falte la imagen
            section: "astronomia",
            btnTitle: "Ver lugar"
          }))}
        />
      </section>
    </div>
  );
}