import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Contatos() {
  const iconStyle = "text-slate-400 text-4xl hover:text-white hover:scale-110 transition-all duration-300";

  return (
    <section id="contato" className="w-full bg-black py-20 sm:py-28">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-white">
          Entre em Contato
        </h2>
        <p className="text-slate-400 mt-3 max-w-md mx-auto">
          Sinta-se à vontade para se conectar comigo através das minhas redes.
        </p>

        <div className="mt-10 flex justify-center gap-x-8 md:gap-x-12">
          
          <a
            href="https://github.com/seu-usuario"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub className={iconStyle} />
          </a>

          <a
            href="https://linkedin.com/in/seu-perfil"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin className={iconStyle} />
          </a>

          <a
            href="mailto:seu-email@exemplo.com"
            aria-label="Email"
          >
            <FaEnvelope className={iconStyle} />
          </a>

        </div>
      </div>
    </section>
  );
}

