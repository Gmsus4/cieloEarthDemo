import React from "react";
import { FlipWords } from "../components/ui/flip-words";

export function FlipWordsDemo() {
  const words = ["inolvidables", "mágicas", "auténticas", "especiales", "sorprendentes", "hermosas", "agradables", "transformadoras", "emocionantes", "inolvidables", "renovadoras", "excepcionales", "fascinantes", "inspiradoras"];

  return (
    <div className="px-4">
      <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        ¿Quieres vivir experiencias
        <FlipWords words={words} /> <br />
        con tus seres queridos? <br /> 
      </div>
    </div>
  );
}
