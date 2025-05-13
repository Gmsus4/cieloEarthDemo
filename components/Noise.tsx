import React from "react";

type NoiseProps = {
  backgroundSize?: string;
};

export const Noise = ({backgroundSize = "30%"}: NoiseProps) => {
  return (
    <div
      className="absolute inset-0 w-full h-full scale-[1.2] transform opacity-10 [mask-image:radial-gradient(#fff,transparent,75%)]"
      style={{
        backgroundImage: "url(/noise.webp)",
        backgroundSize: `${backgroundSize}`,
      }}
    ></div>
  );
};
