'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const [menuAberto, setMenuAberto] = useState(true);

  const toggleMenu = () => setMenuAberto(!menuAberto);

  return (
    <header>

      <div className="bg-gradient-to-br from-green-900 to-green-600 text-white px-6 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between max-w-7xl mx-auto gap-4">

          <div className="flex items-center gap-4">
            <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-white">
              <Image
                src="/images/logo/lbc-logo.jpg"
                alt="Logo da Escola"
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold font-montserrat">
              EEEP Lúcia Baltazar
            </h1>
          </div>

          <button
            onClick={toggleMenu}
            className="sm:hidden bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition"
          >
            {menuAberto ? 'Fechar Menu' : 'Abrir Menu'}
          </button>

          {menuAberto && (
            <nav className="flex flex-wrap justify-center sm:justify-end gap-4 text-sm sm:text-base font-medium mt-4 sm:mt-0">
              <Link href="/FAQ" className="hover:underline underline-offset-4">FAQ</Link>
              <a href="#cursos" className="hover:underline underline-offset-4">Cursos</a>
              <a href="#equipe" className="hover:underline underline-offset-4">Equipe</a>
              <Link href="/quem-somos" className="hover:underline underline-offset-4">Quem somos</Link>
              <a href="#contato" className="hover:underline underline-offset-4">Contato</a>
              <Link href="/cnpj" className="hover:underline underline-offset-4">CNPJ</Link>
            </nav>
          )}
        </div>
      </div>

      <div className="h-1 bg-orange-400" />


      <div className="bg-white px-6 py-6 shadow-inner">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-green-900 font-semibold text-base sm:text-lg">
            Acesso Rápido:
          </span>
          <div className="flex gap-4 flex-wrap justify-center sm:justify-end">
            <a
              href="https://aluno.seduc.ce.gov.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-800 text-white px-6 py-2 rounded-full shadow hover:bg-orange-500 hover:text-white transition font-semibold"
            >
              Aluno Online
            </a>
            <a
              href="https://professor.seduc.ce.gov.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-800 text-white px-6 py-2 rounded-full shadow hover:bg-orange-500 hover:text-white transition font-semibold"
            >
              Professor Online
            </a>
          </div>
        </div>
      </div>

      <div className="h-1 bg-green-800" />
    </header>
  );
}
