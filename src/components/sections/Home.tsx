import Image from 'next/image'
import Button from '../ui/Button'

export default function Home() {
  return (
    <section className="w-full min-h-screen flex flex-col lg:flex-row justify-between items-center p-20 gap-x-50 gap-y-10">
      
      <div className="flex flex-col max-w-xl">
        <div className="flex flex-col gap-y-2">
          <h1 className="text-3xl font-medium text-[#FF5876]">
            Programador web
          </h1>
          <h2 className="text-3xl font-medium text-black dark:text-white">
            Olá, me chamo Nícolas
          </h2>
          <p className="text-black leading-relaxed mt-2 dark:text-white">
            estudante de Bacharelado em Sistemas de Informação pela Universidade Federal Rural de Pernambuco (UFRPE) e atualmente atuo como analista de projetos na Seed a Bit, a empresa júnior de tecnologia da universidade. Tenho interesse em desenvolvimento de software e estou construindo minha base com foco em lógica de programação e desenvolvimento web. Já tive contato inicial com tecnologias como Python, HTML, CSS e JavaScript, e sigo estudando para aprimorar minhas habilidades técnicas.
          </p>
        </div>

        <div className="mt-8 flex flex-row gap-x-8">
          <Button variant='primary'>
            PROJETOS
          </Button>
          <Button variant='secondary'>
            Linkedin
          </Button>
        </div>
      </div>

      <div className="relative md:w-500 md:h-500 flex-shrink-0">
        <Image
          src="/images/Foto_inicial.png"
          alt="Foto de perfil de Nícolas"
          width={560}
          height={560}
          className="rounded-full object-cover"
        />
      </div>

    </section>
  )
}