"use client";

import React from "react";
import { WobbleCard } from "./ui/wobble-card";

type WobbleCardData = {
  title: string;
  days?: string;
  place?: string;
};

type WobbleCardDemoProps = {
  cards: WobbleCardData[];
};

export function WobbleCardDemo({ cards }: WobbleCardDemoProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      {cards.map((card, index) => (
        <WobbleCard
          key={index}
          containerClassName={`col-span-1 ${index === 0 ? "lg:col-span-2 bg-pink-800 min-h-[500px] lg:min-h-[300px]" : ""}`}
        >
          <div className="max-w-xs">
            <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              {card.title}
            </h2>
            <p className="mt-4 text-left text-base/6 text-neutral-200">
              {card.days && <span>Días: {card.days}. </span>}
              {card.place && <span>Lugar: {card.place}.</span>}
            </p>
          </div>
          {index === 0 && (
            <img
              src="/linear.webp"
              width={500}
              height={500}
              alt="linear demo image"
              className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
            />
          )}
        </WobbleCard>
      ))}
    </div>
  );
}
