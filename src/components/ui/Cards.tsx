// src/components/ui/Card.tsx

import Image from 'next/image'
import Link from 'next/link'

type CardProps = {
  imageUrl: string
  title: string
  description: string
  linkHref: string
  linkText: string
};

export default function Card({ imageUrl, title, description, linkHref, linkText }: CardProps) {
  return (
    <div className="max-w-sm overflow-hidden shadow-lg bg-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1 p-8 border border-black  dark:bg-slate-800">
      <div className="relative w-full h-48">
        <Image 
          src={imageUrl} 
          alt={`Imagem do projeto ${title}`}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-bold text-xl mb-2 text-gray-900 dark:text-white">{title}</h3>
        <p className="text-gray-700 text-base mb-4 flex-grow dark:text-white">
          {description}
        </p>
        <Link
          href={linkHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-auto bg-[#FF6464] text-white font-semibold py-2 px-4 rounded-lg hover:bg-[#E55A5A] transition-colors text-center"
        >
          {linkText}
        </Link>
      </div>
      
    </div>
  )
}