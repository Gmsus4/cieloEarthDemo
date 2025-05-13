import React from 'react'

export type FAQType = {
    question: string;
    answer: string;
};


type FAQProps = {
    FAQInfo: FAQType[];
} 

export const FAQ = ({FAQInfo}:FAQProps) => {
  return (
     <div className="grid sm:grid-cols-2 gap-6 md:gap-12">
        {
            FAQInfo.map((info, index) => {
                return (
                    <div key={index}>
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-neutral-200">{info.question}</h3>
                        <p className="mt-2 text-gray-600 dark:text-neutral-400">{info.answer}</p>
                    </div>
                )
            })
        }
     </div>
  )
}
