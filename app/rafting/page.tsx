import React from "react";
import { HeroSectionTitle } from "@/components/HeroSectionTitle";
import { NavbarComponent } from "@/components/NavbarComponent";
import { dataInicio, dataSaturday, dataSunday } from "@/data/rafting";
import { TimelineRafting } from "@/components/TimelineRafting";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rafting | Cielo Earth",
  description: "Explora, fluye y reconecta: tu aventura comienza en Raft-in.",
};

export default function RaftinPage() {
    return (
        <div className="relative w-full">
            <div className="bg-[url('/raftin.jpg')] bg-cover bg-top bg-no-repeat h-screen relative">
                <div className="absolute inset-0 bg-black/60" />
                <NavbarComponent />
                <HeroSectionTitle title="Explora, fluye y reconecta: tu aventura comienza en Raft-in." buttonA="Explorar el recorrido" urlA="#timelineRafting" />
            </div>
            <div id="timelineRafting">
                <TimelineRafting dataTimeline={dataInicio} title="El inicio"/>
                <TimelineRafting dataTimeline={dataSaturday} title="Sábado"/>
                <TimelineRafting dataTimeline={dataSunday} title="Domingo"/>
            </div>
        </div>
    );
}