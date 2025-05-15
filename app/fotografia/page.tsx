import React from "react";
import { HeroSectionTitle } from "@/components/HeroSectionTitle";
import { NavbarComponent } from "@/components/NavbarComponent";
import { dataInicio, dataSaturday, dataSunday, PricingInfo } from "@/data/fotografia";
import { TimelineFotografia } from "@/components/TimelineFotografia";
import { Metadata } from "next";
import { Pricing } from "@/components/Pricing";

export const metadata: Metadata = {
  title: "Fotografía | YourTalent",
  description: "Captura la esencia de cada momento con tu cámara.",
};

export default function FotografiaPage() {
    return (
        <div className="relative w-full">
            <div className="bg-[url('/fotografia.webp')] bg-cover bg-top bg-no-repeat h-screen relative">
                <div className="absolute inset-0 bg-black/60" />
                <NavbarComponent />
                <HeroSectionTitle title="Tu viaje visual: Un recorrido completo por el arte y la técnica de la fotografía." buttonA="Explorar el recorrido" urlA="#timelineFotografia" buttonB="Ver precios" urlB="#pricing" />
            </div>
            <div id="timelineFotografia">
                <TimelineFotografia dataTimeline={dataInicio} title="El inicio"/>
                <TimelineFotografia dataTimeline={dataSaturday} title="Sábado"/>
                <TimelineFotografia dataTimeline={dataSunday} title="Domingo"/>
            </div>
            <div id="pricing" className="px-6 min-h-screen flex items-center justify-center flex-col max-w-[85rem] py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                <div className="mx-auto max-w-2xl mb-8 lg:mb-14 text-center">
                    <h2 className="text-3xl lg:text-4xl text-gray-800 font-bold dark:text-neutral-200">
                    Explora más por menos
                    </h2>
                </div>
                <div className="xl:w-5/12 xl:mx-auto">
                    <Pricing pricingInfo={[PricingInfo]} />
                </div>
            </div>
        </div>
    );
}