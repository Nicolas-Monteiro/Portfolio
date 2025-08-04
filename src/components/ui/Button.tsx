
import type React from 'react'
import { twMerge } from 'tailwind-merge'
import Link from 'next/link'

type ButtonSettings = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'default' | 'icon';
  href?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ children, className,variant = 'primary',size = 'default' , href , ...props }: ButtonSettings) {
  const baseClasses = 'relative inline-flex items-center justify-center font-semibold transition-colors rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2';
   const variantStyles = {
    primary: 'bg-[#FF6464] text-white hover:bg-[#E55A5A] focus:ring-[#FF6464]',
    secondary: 'bg-white text-black hover:bg-slate-600 border border-black',
    outline: 'bg-transparent border border-slate-400 text-slate-600 hover:bg-slate-100 hover:text-slate-800 focus:ring-slate-400',
  }
  const sizeStyle = {
    default: 'h-10 px-4 py-2',
    icon:'h-10 w-10',
  }
  const finalClassName = twMerge(
    baseClasses,
    variantStyles[variant],
    sizeStyle[size],
    className
  );

  if (href) {
    const isExternal = href.startsWith('http')
    return (
      <Link
        href={href}
        className={finalClassName}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
      >
        {children}
      </Link>
    )}
  return (
    <button
      className={twMerge(baseClasses, className, variantStyles[variant], sizeStyle[size], className)}
      {...props}
      
    >
      {children}
    </button>
  )
}