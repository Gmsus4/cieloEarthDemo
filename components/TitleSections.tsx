import React from 'react'

type TitleSectionsProps = {
  title: string;
};

export const TitleSections = ({title}: TitleSectionsProps) => {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-left sm:text-center pl-4 sm:px-10 mb-8 lg:mb-16 mt-12 text-3xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">
            {title}
        </h2>
    </div>
  )
}
