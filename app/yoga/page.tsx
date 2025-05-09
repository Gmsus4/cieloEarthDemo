"use client"

import { motion } from "framer-motion";
import { HeroSectionTitle } from "@/components/HeroSectionTitle";
import { NavbarComponent } from "@/components/NavbarComponent";
import Image from "next/image";

export default function YogaPage() {
    return (
        <div className="relative w-full">
            <div className="bg-[url('/yoga.jpg')] bg-cover bg-top bg-no-repeat h-screen relative">
                <div className="absolute inset-0 bg-black/60" />
                <NavbarComponent />
                <HeroSectionTitle title="Un espacio para reconectar contigo y encontrar la calma.">
                    <motion.div
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                        }}
                        transition={{
                            duration: 0.3,
                            delay: 1,
                        }}
                        className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
                    >
                        <button className="cursor-pointer w-60 transform rounded-lg bg-black px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
                            Ver tipos de Cabalgatas
                        </button>
                        <button className="w-60 transform rounded-lg border border-gray-300 bg-white px-6 py-2 font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 dark:border-gray-700 dark:bg-black dark:text-white dark:hover:bg-gray-900">
                            Contact Support
                        </button>
                    </motion.div>
                </HeroSectionTitle>
            </div>
            {/* <h3 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-5xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
            Ofrecemos 3 tipos de cabalgatas
            </h3> */}
            <div className="text-white py-20 px-4 sm:px-8 lg:px-16">
                <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="text-4xl font-bold text-white leading-tight">
                            Retiro de Yoga en La Ventana
                        </h2>
                        <p className="text-lg leading-relaxed">
                            Vive una experiencia transformadora en las playas vírgenes de <strong>La Ventana</strong>, en Baja California Sur. 
                            Un lugar poco explorado, perfecto para reconectar contigo mismo en paz y armonía.
                        </p>
                        <p className="text-lg leading-relaxed">
                            Te hospedarás en un hotel de lujo cuidadosamente elegido, donde serás atendido las 24 horas. 
                            Y cada día, un chef especializado nos acompañará con platillos deliciosos, frescos y diseñados para nutrir cuerpo y alma.
                        </p>
                        <ul className="list-disc list-inside text-md text-gray-200 pt-4">
                            <li>Playas vírgenes y ambiente aislado</li>
                            <li>Hotel boutique con atención personalizada</li>
                            <li>Cocina saludable y gourmet incluida</li>
                            <li>Sesiones de yoga al amanecer y atardecer</li>
                            <li>Tiempo libre para descansar o explorar</li>
                        </ul>
                        </div>
                        <div className="space-y-4">
                        <div className="relative h-64 w-full rounded-xl overflow-hidden shadow-lg">
                            <Image
                            src="/baja-playa.jpg"
                            alt="Playa virgen en La Ventana"
                            layout="fill"
                            objectFit="cover"
                            />
                        </div>
                        <div className="relative h-64 w-full rounded-xl overflow-hidden shadow-lg">
                            <Image
                            src="/hotel-retreat.jpg"
                            alt="Hotel donde se realiza el retiro"
                            layout="fill"
                            objectFit="cover"
                            />
                        </div>
                    </div>
                </div>
                </div>
        </div>
    );
}