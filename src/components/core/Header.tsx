"use client"

import Link from 'next/link'
import { Menu } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetTrigger,
} from "@/components/ui/sheet"
import Button  from "@/components/ui/Button"
import { ModeToggle } from '@/components/ui/Theme_button'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full p-4 sm:px-8 z-50
                       bg-white/80 backdrop-blur-sm border-b border-slate-200/60
                       dark:bg-slate-900/80 dark:border-slate-800/60">
      
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="#inicio" className="text-2xl font-bold text-black dark:text-white">
          Nícolas
        </Link>

        <div className="flex items-center gap-x-4">
          
          <nav className="hidden md:flex gap-x-8">
            <Link href="#projetos" className="text-slate-700 hover:text-black dark:text-slate-300 dark:hover:text-white transition-colors">
              Projetos
            </Link>
            <Link href="#sobre" className="text-slate-700 hover:text-black dark:text-slate-300 dark:hover:text-white transition-colors">
              Sobre mim
            </Link>
            <Link href="#contato" className="text-slate-700 hover:text-black dark:text-slate-300 dark:hover:text-white transition-colors">
              Contato
            </Link>
          </nav>
          <ModeToggle />
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Abrir menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="grid gap-6 text-lg font-medium mt-8">
                  <SheetClose asChild>
                    <Link href="#inicio">Início</Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href="#projetos">Projetos</Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href="#sobre">Sobre mim</Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href="#contato">Contato</Link>
                  </SheetClose>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        
        </div>
      </div>
    </header>
  )
}