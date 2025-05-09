"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type HeroSectionOneProps = {
  title: string;
  children: ReactNode;
};

export function HeroSectionTitle({title, children}: HeroSectionOneProps) {
  return (
    <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-center h-screen">
      <div className="px-4 flex flex-col items-center justify-center">
        <h2 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-black md:text-4xl lg:text-7xl dark:text-slate-100">
          {title
            .split(" ")
            .map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.1,
                  ease: "easeInOut",
                }}
                className="mr-4 inline-block text-center"
              >
                {word}
              </motion.span>
            ))}
        </h2>
        {children}
      </div>
    </div>
  );
}
    