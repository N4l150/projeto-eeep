'use client';
import { useState } from "react";

export default function Header() {
  const [menuAberto, setMenuAberto] = useState(true);

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  return (
    <header>
      {}
      <div className="flex flex-col sm:flex-row items-center justify-between px-6 py-6 bg-green-900 text-white">
        <h1 className="text-2xl font-bold text-center sm:text-left">
          EEEP Lúcia Baltazar
        </h1>

        {}
        <button
          onClick={toggleMenu}
          className="sm:hidden bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition mt-4 sm:mt-0 text-sm"
        >
          {menuAberto ? 'Fechar Menu' : 'Abrir Menu'}
        </button>

        {}
        {menuAberto && (
          <nav className="flex flex-wrap gap-5 text-base mt-4 sm:mt-0">
             <a href="#" className="hover:underline hover:underline-offset-4">Perguntas frequentes</a>
            <a href="#" className="hover:underline hover:underline-offset-4">Cursos</a>
            <a href="#" className="hover:underline hover:underline-offset-4">Equipe</a>
            <a href="#" className="hover:underline hover:underline-offset-4">História</a>
            <a href="#" className="hover:underline hover:underline-offset-4">Contato</a>
          </nav>
        )}
      </div>

      {}
      {/* Linha laranja pra ficar bntin */}
      <div className="h-1 bg-orange-400" />

      {}
        <div className="bg-white text-black px-6 py-4 text-center sm:text-left text-base">
          <a
            href="https://aluno.seduc.ce.gov.br/"
            className="inline-block bg-green-800 text-white px-4 py-2 rounded-full hover:bg-orange-400 transition mr-4"
          >
            Aluno Online
          </a>
          <a
            href="https://professor.seduc.ce.gov.br/"
            className="inline-block bg-green-800 text-white px-4 py-2 rounded-full hover:bg-orange-400 transition"
          >
            Professor Online
          </a>
        </div>
      {}
      {/* Linha final q to usando pra separar*/ }
      <div className="h-1 bg-green-800" /> 
    </header>
  );
}
