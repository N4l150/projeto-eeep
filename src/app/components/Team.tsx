'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

type TeamMember = {
  name: string;
  role: string;
  image: string;
};

const team: TeamMember[] = [
  { name: 'Paulo Bessa', role: 'Diretor', image: 'https://randomuser.me/api/portraits/women/44.jpg' },
  { name: 'Cayo Robson', role: 'Coordenador', image: 'https://randomuser.me/api/portraits/men/46.jpg' },
  { name: 'Tatina Maia', role: 'Coordenadora', image: 'https://randomuser.me/api/portraits/women/65.jpg' },
  { name: 'Adriano Gomes', role: 'Coordenador dds', image: 'https://randomuser.me/api/portraits/men/52.jpg' },
  { name: 'Jiannini Baggio', role: 'Professor dds', image: 'https://randomuser.me/api/portraits/women/71.jpg' },
  { name: 'Rafela Moreira', role: 'Professora de História', image: 'https://randomuser.me/api/portraits/men/34.jpg' },
];

export default function Team() {
  const [index, setIndex] = useState(0);
  const visibleCount = 3;

  const nextSlide = () => {
    setIndex((prev) => (prev + visibleCount) % team.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - visibleCount + team.length) % team.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, []);

  const visibleTeam = [...team, ...team].slice(index, index + visibleCount);

  return (
    <section className="bg-white py-12 px-4 relative">
      <h3 className="text-3xl font-extrabold text-center text-green-800 mb-10 font-montserrat">
        Nossa Equipe
      </h3>

      <div className="max-w-6xl mx-auto px-4 relative">
        {/* Botões nas laterais */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 text-4xl text-green-800 hover:text-green-500 px-4 z-20"
          aria-label="Anterior"
        >
          ‹
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 text-4xl text-green-800 hover:text-green-500 px-4 z-20"
          aria-label="Próximo"
        >
          ›
        </button>

        {/* Grade de cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {visibleTeam.map((member, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-md border-l-4 border-orange-400 p-5 transition hover:shadow-lg"
            >
              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-green-300">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={96}
                  height={96}
                  className="object-cover w-full h-full"
                />
              </div>
              <h4 className="text-lg font-bold text-green-800 text-center font-montserrat">
                {member.name}
              </h4>
              <p className="text-sm text-gray-700 text-center">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
