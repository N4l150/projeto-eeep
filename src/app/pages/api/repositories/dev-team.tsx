'use client';
import Image from 'next/image';

const membros = [
  {
    nome: 'Nalyson Casta',
    cargo: 'Frontend',
    imagem: '',
    linkedin: '',
  },
  {
    nome: 'Aiko Yara',
    cargo: 'Backend',
    imagem: '',
    linkedin: '',
  }
];

export default function DevTeam() {
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
                src={imagem}
                alt={nome}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-4 text-center">
              <h2 className="text-xl font-semibold text-green-700">{nome}</h2>
              <p className="text-gray-600 mb-4">{cargo}</p>
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition"
              >
                LinkedIn
              </a>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
