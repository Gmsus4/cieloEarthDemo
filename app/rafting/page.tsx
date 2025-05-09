"use client"

import React from "react";
import { motion } from "framer-motion";
import { HeroSectionTitle } from "@/components/HeroSectionTitle";
import { NavbarComponent } from "@/components/NavbarComponent";
import { TwoColumnFeatureSection } from '../../components/TwoColumnFeatureSection';

import { dataInicio, dataSaturday, dataSunday } from "@/data/rafting";

export default function RaftinPage() {
    return (
        <div className="relative w-full">
            <div className="bg-[url('/raftin.jpg')] bg-cover bg-top bg-no-repeat h-screen relative">
                <div className="absolute inset-0 bg-black/60" />
                <NavbarComponent />
                <HeroSectionTitle title="Explora, fluye y reconecta: tu aventura comienza en Raft-in.">
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
                            Unete a Nosotros
                        </button>
                        <button className="w-60 transform rounded-lg border border-gray-300 bg-white px-6 py-2 font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 dark:border-gray-700 dark:bg-black dark:text-white dark:hover:bg-gray-900">
                            Agendar Fecha
                        </button>
                    </motion.div>
                </HeroSectionTitle>
            </div>
            <TwoColumnFeatureSection widthImage="w-7/12" widthNode="w-5/12" title="Siente, vive, conecta" urlImage="https://images.pexels.com/photos/29969059/pexels-photo-29969059/free-photo-of-kayak-en-las-dolomitas.jpeg" alt="Foto de Mehmet Altintaş de Pexels">
                 <motion.p 
                     className="text-lg text-gray-600 dark:text-gray-300 mb-10 leading-relaxed"
                     initial={{ y: 20, opacity: 0 }}
                     whileInView={{ y: 0, opacity: 1 }}
                     transition={{ duration: 0.5, delay: 0.4 }}
                     viewport={{ once: true }}
                 >
                     Vive un fin de semana inolvidable: tres días de rafting en ríos cristalinos, baños de barro sanadores, yoga al amanecer, fogatas bajo el cielo estrellado y la purificación ancestral de un temazcal.
                 </motion.p>
             
                 <motion.div
                     className="space-y-4 mb-10"
                     initial={{ y: 20, opacity: 0 }}
                     whileInView={{ y: 0, opacity: 1 }}
                     transition={{ duration: 0.5, delay: 0.6 }}
                     viewport={{ once: true }}
                 >
                     {[
                         "Guías certificados con experiencia",
                         "Equipo completo de seguridad incluido",
                         "Gastronomía local y alojamiento"
                     ].map((item, index) => (
                         <div key={index} className="flex items-center gap-3">
                             <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-teal-400 flex items-center justify-center">
                                 <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                     <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                 </svg>
                             </div>
                             <span className="text-gray-700 dark:text-gray-200">{item}</span>
                         </div>
                     ))}
                 </motion.div> 
            </TwoColumnFeatureSection>
            <TwoColumnFeatureSection widthImage="w-5/12" widthNode="w-7/12" isImageLeft={true} title="El Inicio" urlImage="https://images.pexels.com/photos/19732180/pexels-photo-19732180/free-photo-of-vacaciones-relajacion-bosque-barca.jpeg" alt="Foto de Mehmet Altintaş de Pexels">
                <motion.div
                    className="space-y-4 mb-10"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    viewport={{ once: true }}
                >
                    <ol className="relative border-s border-gray-200 dark:border-gray-700"> 
                        {dataInicio.map((data, index) => {
                            return (
                                <li className="mb-10 ms-6" key={index}>            
                                    <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                         {React.createElement(data.icon, { className: "w-3.5 h-3.5 text-blue-800 dark:text-blue-300" })}
                                    </span>
                                    <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                                        {data.title}
                                    </h3>
                                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                                        {data.description}
                                    </p>
                                </li>
                            )
                        })}              
                    </ol>
                </motion.div>
            </TwoColumnFeatureSection>           
        </div>
    );
}


