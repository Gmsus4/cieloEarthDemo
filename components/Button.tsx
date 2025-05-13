import Link from 'next/link';
import React, { MouseEventHandler } from 'react'
import { LinkPreview } from './ui/link-preview';
type ButtonProps = {
  title: string;
  url: string;
  isBgColorBlack?: boolean;
  isPreview?: boolean;
  onClick?: MouseEventHandler<HTMLAnchorElement> | undefined;
};

export const Button = ({title, url = "", isBgColorBlack = false, onClick, isPreview = true}: ButtonProps) => {
  const isExternalLink = url.startsWith('http://') || url.startsWith('https://');

  if (isExternalLink && isPreview) {
    // Para enlaces externos usa <a>
    return (
      <LinkPreview url={url} className={`w-fit cursor-pointer px-6 py-2 ${isBgColorBlack ? "bg-black text-white" : "bg-white text-black"} rounded-lg font-bold transform hover:-translate-y-1 transition duration-400`}>
        {title}
      </LinkPreview>
    )
  } else {
    // Para enlaces internos usa Link de Next.js
    return (
      <Link onClick={onClick} href={url} className={`w-fit cursor-pointer px-6 py-2 ${isBgColorBlack ? "bg-black text-white" : "bg-white text-black"} rounded-lg font-bold transform hover:-translate-y-1 transition duration-400`}>
        {title}
      </Link>
    )
  }
}


// `w-fit cursor-pointer px-6 py-2 ${isBgColorBlack ? "bg-black text-white" : "bg-white text-black"} rounded-lg font-bold transform hover:-translate-y-1 transition duration-400`