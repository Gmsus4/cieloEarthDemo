"use client";

import React from "react";
import { WobbleCard } from "./ui/wobble-card";
import { Button } from "./Button";

type WobbleCardData = {
  title: string;
  days?: string;
  place?: string;
  colSpan?: string;
  section: string;
  image: string;
  slug: string;
  btnTitle: string;
};

type WobbleCardDemoProps = {
  cards: WobbleCardData[];
};

export function WobbleCardDemo({ cards }: WobbleCardDemoProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full px-10">
      {cards.map((card, index) => (
        <WobbleCard
          key={index}
          title={card.title}
          urlImage={card.image}
          containerClassName={`col-span-1 ${card.colSpan ?? ""} min-h-[300px] relative overflow-hidden`}
        >
          <div className="relative z-10 max-w-xs flex flex-col h-full justify-between px-4 sm:px-0">
            <div>
              <h2 className="text-left text-balance text-2xl md:text-xl lg:text-4xl font-semibold tracking-[-0.015em] text-white">
                {card.title}
              </h2>
              <p className="mt-4 text-left text-lg text-neutral-200">
                {card.days}
              </p>
              <p className="mt-2 text-left text-md text-neutral-200">{card.place}</p>
            </div>
            <Button url={`/${card.section}/${card.slug}`} title={card.btnTitle} isBgColorBlack={true}/>
          </div>
        </WobbleCard>
      ))}
    </div>
  );
}
