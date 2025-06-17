'use client';

import Image from 'next/image';
import Link from 'next/link';

type Membro = {
  nome: string;
  cargo: string;
  imagem?: string;
  linkedin?: string;
};

const membros: Membro[] = [
  {
    nome: 'Nalyson Costa',
    cargo: 'Frontend',
    imagem: 'https://randomuser.me/api/portraits/men/75.jpg',
    linkedin: 'https://www.linkedin.com/in/nalysoncasta/',
  },
  {
    nome: 'Aiko Yara',
    cargo: 'Backend',
    imagem: 'https://randomuser.me/api/portraits/women/65.jpg',
    linkedin: 'https://www.linkedin.com/in/aikoyara/',
  },
];

export default function DevTeam() {
  const defaultImage = '/default-profile.png';

  return (
    <main className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center text-green-800 mb-10 font-montserrat">
        Equipe de Desenvolvimento
      </h1>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {membros.map(({ nome, cargo, imagem, linkedin }) => (
          <div
            key={nome}
            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 transition hover:shadow-xl"
          >
            <div className="relative h-64 w-full">
              <Image
                src={imagem && imagem.length > 0 ? imagem : defaultImage}
                alt={nome}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw,
                       (max-width: 1200px) 50vw,
                       33vw"
              />
            </div>

            <div className="p-4 text-center">
              <h2 className="text-xl font-semibold text-green-700">{nome}</h2>
              <p className="text-gray-600 mb-4">{cargo}</p>

              {linkedin && linkedin.length > 0 ? (
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition"
                >
                  LinkedIn
                </a>
              ) : (
                <span className="inline-block px-4 py-2 text-gray-400 cursor-not-allowed select-none">
                  LinkedIn não disponível
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <Link href="/team">
          <button className="bg-green-700 text-white px-6 py-2 rounded-full shadow hover:bg-green-800 transition-all font-semibold">
            Voltar para Nossa Equipe
          </button>
        </Link>
      </div>
    </main>
  );
}
