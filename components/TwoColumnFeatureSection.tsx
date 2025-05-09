"use client"

import { motion } from "framer-motion";
import { ReactNode } from "react";

type TwoColumnFeatureSectionProps = {
    title: string;
    urlImage: string;
    alt: string;
    isImageLeft?: boolean;
    widthImage?: string;
    widthNode?: string;
    children: ReactNode;
};
  

export const TwoColumnFeatureSection = ({title, urlImage, alt, children, isImageLeft = false, widthImage = "w-1/2", widthNode = "w-1/2"}: TwoColumnFeatureSectionProps) => {
  return (
    // <div className="min-h-screen w-full flex flex-row-reverse justify-center items-stretch overflow-hidden">
    <div className={`min-h-screen w-full flex ${isImageLeft ? "flex-row" : "flex-row-reverse"}`}>
        <div className={`${widthImage} h-auto`}>
            <img src={urlImage} alt={alt} className="h-screen object-cover w-full"/>
        </div>
        
        <div className={`${widthNode} flex items-center`}>
            <motion.div 
                className="px-8 md:px-12 lg:px-20 py-16 max-w-xl mx-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "80px" }}
                    transition={{ duration: 0.4 }}
                    viewport={{ once: true }}
                    className="h-1 bg-gradient-to-r from-blue-500 to-teal-400 mb-6"
                />
                
                <motion.h2 
                    className="text-4xl md:text-5xl font-bold mb-8 text-gray-800 dark:text-white tracking-tight"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <span className="block">{title}</span>
                    {/* <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">conecta.</span> */}
                </motion.h2>
                {children}
            </motion.div>
        </div>
    </div>
  )
}