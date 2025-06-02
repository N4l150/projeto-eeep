'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';  

export default function Header() {
  const [menuAberto, setMenuAberto] = useState(true);

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  return (
    <header>
      <div className="flex flex-col sm:flex-row items-center justify-between px-6 py-6 bg-gradient-to-tl from-green-900 to-green-600 text-white">

        <div className="flex items-center gap-4">
          <div className="relative w-16 h-16 rounded-full overflow-hidden">
            <Image
              src="/images/logo/lbc-logo.jpg"
              alt="Logo da Escola"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>

          <h1 className="text-2xl font-bold text-center sm:text-left">
            EEEP Lúcia Baltazar
          </h1>
        </div>

        <button
          onClick={toggleMenu}
          className="sm:hidden bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition mt-4 sm:mt-0 text-sm"
        >
          {menuAberto ? 'Fechar Menu' : 'Abrir Menu'}
        </button>

        {menuAberto && (
          <nav className="flex flex-wrap gap-5 text-base mt-4 sm:mt-0">
            
            <Link href="/FAQ" className="hover:underline hover:underline-offset-4">
              FAQ
            </Link>
            <Link href="/cursos" className="hover:underline hover:underline-offset-4">
              Cursos
            </Link>
            <Link href="/equipe" className="hover:underline hover:underline-offset-4">
              Equipe
            </Link>
            <Link href="/quem-somos" className="hover:underline hover:underline-offset-4">
              Quem somos
            </Link>
            <Link href="/contato" className="hover:underline hover:underline-offset-4">
              Contato
            </Link>
            <Link href="/cnpj" className="hover:underline hover:underline-offset-4">
              CNPJ:
            </Link>
          </nav>
        )}
      </div>

      <div className="h-1 bg-orange-400" />

      <div className="bg-white text-black px-6 py-4 text-center sm:text-left text-base">
        <a
          href="https://aluno.seduc.ce.gov.br/"
          className="inline-block bg-green-800 text-white px-4 py-2 rounded-full hover:bg-orange-400 transition mr-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aluno Online
        </a>
        <a
          href="https://professor.seduc.ce.gov.br/"
          className="inline-block bg-green-800 text-white px-4 py-2 rounded-full hover:bg-orange-400 transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          Professor Online
        </a>
      </div>

      <div className="h-1 bg-green-800" />
    </header>
  );
}
