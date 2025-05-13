import React from 'react'
import { experiences } from "@/data/fourExperencies";
import { Noise } from './Noise';
import { GlowingEffect } from './ui/glowing-effect';
import { Button } from './Button';

export const NextExperiences = () => {
  return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto h-auto px-10 py-4">
          {
            experiences.map((experience, index) => {
              return (
                <div style={{ backgroundImage: `url(${experience.bgImage})`}} key={index} className={`bg-cover bg-top bg-no-repeat w-full p-4 h-96 rounded-2xl relative overflow-hidden text-white`}>
                  <div className="absolute inset-0 bg-black/60 z-0" />
                  <Noise />
                  <div className="relative z-10 flex flex-col-reverse justify-start h-full w-full gap-4 rounded-2xl p-4">
                    <GlowingEffect
                      spread={40}
                      glow={true}
                      disabled={false}
                      proximity={64}
                      inactiveZone={0.01}
                    />
                    <Button url={experience.href} title="Saber más"/>
                    <p>{experience.description}</p>
                    <h3 className="text-4xl font-bold">{experience.title}</h3>
                  </div>
                </div>
              )
            })
          }
        </div>
  )
}
