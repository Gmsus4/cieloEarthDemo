"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { FlipWordsDemo } from "./FlipWordsDemo";
import { Button } from "./Button";

type HeroSectionOneProps = {
  title: string;
  isFlipWords?: boolean;
  buttonA?: string;
  buttonB?: string;
  urlA?: string;
  urlB?: string;
  children?: ReactNode;
};

export function HeroSectionTitle({title, children, isFlipWords = false, buttonA, buttonB, urlA, urlB}: HeroSectionOneProps) {
  return (
    <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-center h-screen">
      <div className="px-4 flex flex-col items-center justify-center">
        <h2 className="px-10 text-justify sm:text-center sm:text-6xl relative z-10 mx-auto max-w-4xl  text-5xl font-bold text-black lg:text-7xl dark:text-slate-100">
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
        {
          isFlipWords && (
            <div className="hidden lg:inline">
              <FlipWordsDemo />
            </div>
          )
        }
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
          className="mt-8"
        >
        {children}
        </motion.div>
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
            className="relative px-10 z-10 mt-8 flex flex-wrap items-center w-full justify-start sm:justify-center gap-4"
        >
          { buttonA && <Button title={buttonA} url={urlA!}/>}
          { buttonB && <Button title={buttonB} url={urlB!} isBgColorBlack={true}/>}
        </motion.div>
      </div>
    </div>
  );
}
    