"use client";
import { motion } from "framer-motion";
import { HeroSectionTitle } from "@/components/HeroSectionTitle";
import { NavbarComponent } from "@/components/NavbarComponent";
import { WobbleCardDemo } from "@/components/WobbleCardDemo";

export default function CabalgatasPage() {
  return (
    <div className="relative w-full">
      <div className="bg-[url('/cabalgata.jpg')] bg-cover bg-top bg-no-repeat h-screen relative">
      <div className="absolute inset-0 bg-black/60" />
        <NavbarComponent />
        <HeroSectionTitle title="Redescubre la naturaleza al ritmo de cada galope.">
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
      
      <section className="w-full min-h-screen flex flex-col items-center justify-start py-20">
        <h3 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-5xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
          Ofrecemos 3 tipos de cabalgatas
        </h3>
        <WobbleCardDemo
          cards={[
            {
              title: "Cabalgata Cielo",
              days: "2 días y una noche en el Cielo",
              place: "Valle de Bravo, Estado de México",
              colSpan: "lg:col-span-2",
              slug: "cielo",
              image: "https://images.pexels.com/photos/2291648/pexels-photo-2291648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            },
            {
              title: "Cabalgata Earth",
              days: "4 horas en los bosques más mágicos",
              place: "Valle de Bravo, Estado de México",
              slug: "earth",
              image: "https://images.pexels.com/photos/3739624/pexels-photo-3739624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            },
            {
              title: "Cabalgata Desierto",
              days: "2 hrs de clases y cabalgata",
              place: "Desierto de los Leones, Ciudad de México",
              colSpan: "lg:col-span-3",
              slug: "desierto",
              image: "https://images.pexels.com/photos/2714627/pexels-photo-2714627.jpeg"
            },
          ]}
        />
      </section>
    </div>
  );
}