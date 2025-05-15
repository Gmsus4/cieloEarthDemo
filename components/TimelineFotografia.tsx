import React from "react";
import { Timeline } from "@/components/ui/timeline";

type TimelineProps = {
    dataTimeline: any [];
    title: string;
    subtitle?: string
};

export function TimelineFotografia({dataTimeline, title, subtitle}: TimelineProps) {
  const allEvents = dataTimeline;

  const timelineData = allEvents.map((item, index) => {
    // const Icon = item.icon;
    const images = item.images;
    return {
      title: item.title,
      content: (
        <div>
          <p className="mb-8 text-lg sm:text-xl md:text-2xl text-gray-200 font-normal dark:text-neutral-200">
            {item.description}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {images && images.map((image: string, index: number) => (
              <img
                key={index}
                src={image}
                alt={`Imagen ${index + 1}`}
                className="w-full h-72 object-cover object-center rounded-lg shadow-md"
              />
            ))}
          </div>
        </div>
      )
    };
  });

  return (
    <div className="px-2 overflow-hidden pb-0 pt-32 min-h-screen flex flex-col items-center justify-center">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">
          {title}
        </h2>
        {
          subtitle && (
            <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm">
              {subtitle}
            </p>
          )
        }
      </div>
      <Timeline data={timelineData} />
    </div>
  );
}
