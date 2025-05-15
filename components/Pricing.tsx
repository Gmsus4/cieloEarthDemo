import React from 'react'
import { Button } from './Button'
import { PricingItem } from "@/data/gastronomiaTimeline"
import { Check } from 'lucide-react';

type PricingProps = {
    pricingInfo: PricingItem[];
} 

export const Pricing = ({pricingInfo}: PricingProps) => {
  return (
        // <div className="relative xl:w-5/12 xl:mx-auto">
        <div className="relative w-full">
            <div>
                {
                    pricingInfo.map((item, index) => {
                        return (
                            <div key={index} className="p-6 relative z-10 bg-white border border-gray-200 rounded-xl md:p-10 dark:bg-neutral-900 dark:border-neutral-800">
                                <h3 className="text-xl font-bold text-gray-800 dark:text-neutral-200">{item.title}</h3>
                                <div className="text-sm text-gray-500 dark:text-neutral-500">{item.description}</div>

                                <div className="mt-5">
                                    <span className="text-6xl font-bold text-gray-800 dark:text-neutral-200">${item.price}</span>
                                    <span className="text-lg font-bold text-gray-800 dark:text-neutral-200">.00</span>
                                    <span className="ms-3 text-gray-500 dark:text-neutral-500">{item.currency} / por persona</span>
                                </div>

                                <div className="mt-5 grid sm:grid-cols-1 gap-y-2 py-4 first:pt-0 last:pb-0 sm:gap-x-6 sm:gap-y-0">
                                    <ul className="space-y-2 text-sm sm:text-base">
                                        {
                                            item.packageDetails.map((detail, index) => {
                                                return (
                                                    <li key={index} className="flex gap-x-3">
                                                        {/* <span className="mt-0.5 size-6 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                                                        </span> */}
                                                        <Check />
                                                        <span className="text-gray-800 dark:text-neutral-200">
                                                            {detail}
                                                        </span>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                                <div className="mt-5 grid grid-cols-2 gap-x-4 py-4 first:pt-0 last:pb-0">
                                    <div>
                                        <p className="text-sm text-gray-500 dark:text-neutral-500">Cancel anytime.</p>
                                        <p className="text-sm text-gray-500 dark:text-neutral-500">No card required.</p>
                                    </div>

                                    <div className="flex justify-end">
                                        <Button title="Reservar" url={item.urlBtn} isBgColorBlack={true} isPreview={false}/>
                                        {/* <button type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-50 dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">Start free trial</button> */}
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
  )
}
