import { Metadata } from "next";
import { HeroSectionTitle } from "@/components/HeroSectionTitle";
import { NavbarComponent } from "@/components/NavbarComponent";
import { ChefHat, House, TreePalm } from "lucide-react";

export const metadata: Metadata = {
  title: "Artesanía | YoureTalent",
  description: "Explora técnicas ancestrales y la belleza del trabajo artesanal.",
};


export default function YogaPage() {
    return (
        <div className="relative w-full">
            <div className="bg-[url('/artesanias.webp')] bg-cover bg-top bg-no-repeat h-screen relative">
                <div className="absolute inset-0 bg-black/60" />
                <NavbarComponent />
                <HeroSectionTitle title="Un espacio para reconectar contigo y encontrar la calma." buttonA="Vive la Experiencia" urlA="#retiroDeYoga" />
            </div>
            <div id="retiroDeYoga" className="px-10 overflow-hidden py-24 sm:py-32 min-h-screen flex flex-col items-center justify-center">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        <div className="lg:pt-4 lg:pr-8">
                            <div className="lg:max-w-lg">
                                <h2 className="text-base/7 font-semibold text-gray-500">San Martín Tilcajete, Oaxaca</h2>
                                <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">Encuentro de Artesanía</p>
                                <p className="mt-6 text-lg/8 text-gray-200">Sumérgete en una experiencia cultural única donde aprenderás de artesanos locales, descubrirás técnicas ancestrales y crearás con tus propias manos piezas que cuentan historias. Un viaje para valorar la tradición y la creatividad colectiva.</p>
                                <div className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                                    <div className="text-gray-300 flex gap-4 font-light">
                                        <House />
                                        Alojamiento en un entorno tranquilo que honra la tradición artesanal.
                                    </div>

                                    <div className="text-gray-300 flex gap-4 font-light">
                                        <ChefHat />
                                        Gastronomía local incluida, preparada con ingredientes y recetas de la región.
                                    </div>

                                    <div className="text-gray-300 flex gap-4 font-light">
                                        <TreePalm />
                                        Talleres al aire libre con maestros artesanos y espacios para inspirarte.
                                    </div>
                                </div>

                            </div>
                        </div>
                        <img src="/artesanias/painting.webp" alt="Product screenshot" className="w-full max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 lg:w-[57rem] md:-ml-4 lg:-ml-0" width="2432" height="1442" />
                    </div>
                </div>
            </div>
        </div>
    );
}