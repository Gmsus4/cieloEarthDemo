"use client";

import React from "react";
import { WobbleCard } from "./ui/wobble-card";

type WobbleCardData = {
  title: string;
  days?: string;
  place?: string;
  colSpan?: string;
  image: string;
  slug: string;
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
          title={card.title}
          urlImage={card.image}
          containerClassName={`col-span-1 ${card.colSpan ?? ""} min-h-[300px] relative overflow-hidden`}
        >
          <div className="relative z-10 max-w-xs flex flex-col h-full justify-between">
            <div>
              <h2 className="text-left text-balance text-base md:text-xl lg:text-4xl font-semibold tracking-[-0.015em] text-white">
                {card.title}
              </h2>
              <p className="mt-4 text-left text-xl text-neutral-200">
                {card.days}
                {/* {card.days && <span>Días: {card.days}. </span>}
                {card.place && <span>Lugar: {card.place}.</span>} */}
              </p>
              <p className="mt-4 text-left text-md text-neutral-200">{card.place}</p>
            </div>
            <a href={`/cabalgatas/${card.slug}`} className="capitalize w-fit px-6 my-4 inline-block py-2 bg-black text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
              Quiero {card.slug}
            </a>
          </div>
        </WobbleCard>
      ))}
    </div>
  );
}
