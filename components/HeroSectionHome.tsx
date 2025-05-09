"use client";

import { motion } from "framer-motion";
import { FlipWordsDemo } from "./FlipWordsDemo";

type HeroSectionOneProps = {
  title: string;
};

export function HeroSectionOne({title}: HeroSectionOneProps) {
  return (
    <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-center h-[80%]">
      <div className="px-4 py-10 md:py-20 flex flex-col items-center justify-center h-full">
        <h1 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-black md:text-4xl lg:text-7xl dark:text-slate-100">
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
                className="mr-4 inline-block"
              >
                {word}
              </motion.span>
            ))}
        </h1>
        <div className="hidden lg:inline">
          <FlipWordsDemo />
        </div>
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
            Explora ahora
          </button>
          <button className="w-60 transform rounded-lg border border-gray-300 bg-white px-6 py-2 font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 dark:border-gray-700 dark:bg-black dark:text-white dark:hover:bg-gray-900">
            Contact Support
          </button>
        </motion.div>
      </div>
    </div>
  );
}
    