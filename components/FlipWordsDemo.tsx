"use client"
import React from "react";


import { motion } from "framer-motion";
import { FlipWords } from "../components/ui/flip-words";
import { ColourfulText } from "./ui/colourful-text";

export function FlipWordsDemo() {
  const words = ["inolvidables", "mágicas", "auténticas", "especiales", "sorprendentes", "hermosas", "agradables", "transformadoras", "emocionantes", "inolvidables", "renovadoras", "excepcionales", "fascinantes", "inspiradoras"];

  return (
    <div className="px-4">
      <div className="mt-12 mb-6 text-2xl mx-auto font-normal text-red-400 dark:text-white/60">
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
          >
            ¿Quieres vivir experiencias
            <FlipWords words={words}/> 
            con tus seres queridos? 
          </motion.div>
      </div>
    </div>
  );
}
