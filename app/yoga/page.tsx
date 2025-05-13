import { Metadata } from "next";
import { HeroSectionTitle } from "@/components/HeroSectionTitle";
import { NavbarComponent } from "@/components/NavbarComponent";
import { ChefHat, House, TreePalm } from "lucide-react";

export const metadata: Metadata = {
  title: "Yoga | Cielo Earth",
  description: "Un espacio para reconectar contigo y encontrar la calma.",
};


export default function YogaPage() {
    return (
        <div className="relative w-full">
            <div className="bg-[url('/yoga.jpg')] bg-cover bg-top bg-no-repeat h-screen relative">
                <div className="absolute inset-0 bg-black/60" />
                <NavbarComponent />
                <HeroSectionTitle title="Un espacio para reconectar contigo y encontrar la calma." buttonA="Vive la Experiencia" urlA="#retiroDeYoga" />
            </div>
            <div id="retiroDeYoga" className="px-10 overflow-hidden py-24 sm:py-32 min-h-screen flex flex-col items-center justify-center">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        <div className="lg:pt-4 lg:pr-8">
                            <div className="lg:max-w-lg">
                                <h2 className="text-base/7 font-semibold text-gray-500">En la Venta, Baja California Sur</h2>
                                <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">Retiro de Yoga</p>
                                <p className="mt-6 text-lg/8 text-gray-200">Vive una experiencia transformadora en un entorno natural poco explorado, donde podrás reconectar contigo   mismo mientras disfrutas de atención personalizada en un hotel de lujo y platillos frescos preparados por un chef especializado para nutrir cuerpo y alma.</p>
                                <div className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                                    <div className="text-gray-300 flex gap-4 font-light">
                                        <House />
                                        Hospedaje en hotel boutique con atención personalizada.
                                    </div>

                                    <div className="text-gray-300 flex gap-4 font-light">
                                        <ChefHat />
                                        Cocina gourmet saludable incluida durante toda la estancia.
                                    </div>

                                    <div className="text-gray-300 flex gap-4 font-light">
                                        <TreePalm />
                                        Espacios naturales para reconectar, descansar o explorar.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img src="https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg" alt="Product screenshot" className="w-full max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 lg:w-[57rem] md:-ml-4 lg:-ml-0" width="2432" height="1442" />
                    </div>
                </div>
            </div>
        </div>
    );
}