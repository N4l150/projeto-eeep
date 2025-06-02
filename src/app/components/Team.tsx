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
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const updateVisibleCount = () => {
      const width = window.innerWidth;
      if (width < 640) setVisibleCount(1); // mobile
      else if (width < 1024) setVisibleCount(2); // tablet
      else setVisibleCount(3); // desktop
    };

    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % (team.length - visibleCount + 1));
  };

  const prevSlide = () => {
    setIndex((prev) =>
      prev === 0 ? team.length - visibleCount : prev - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [index, visibleCount]);

  const visibleTeam = team.slice(index, index + visibleCount);

  return (
    <section className="bg-white py-12 px-4 relative">
      <h3 className="text-3xl font-extrabold text-center text-green-800 mb-10 font-montserrat">
        Nossa Equipe
      </h3>

      <div className="relative max-w-7xl mx-auto flex gap-4 justify-center items-center px-8">
        <button
          onClick={prevSlide}
          className="absolute top-0 left-0 w-1/4 h-full flex items-center justify-start px-4 text-green-800 text-4xl font-bold hover:text-green-500 transition-all duration-300 z-20"
          aria-label="Anterior"
        >
          ‹
        </button>

        {visibleTeam.map((member, i) => (
          <div
            key={i}
            className="bg-white border-4 border-green-700 p-6 rounded-2xl shadow-xl w-72 transition-all hover:scale-105 hover:z-10"
          >
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 mb-4 rounded-full overflow-hidden border-4 border-green-300">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={96}
                  height={96}
                  className="object-cover w-full h-full"
                />
              </div>
              <h4 className="text-xl font-bold text-green-800 text-center font-montserrat">
                {member.name}
              </h4>
              <p className="text-sm text-gray-700 text-center">{member.role}</p>
            </div>
          </div>
        ))}

        <button
          onClick={nextSlide}
          className="absolute top-0 right-0 w-1/4 h-full flex items-center justify-end px-4 text-green-800 text-4xl font-bold hover:text-green-500 transition-all duration-300 z-20"
          aria-label="Próximo"
        >
          ›
        </button>
      </div>

      <div className="h-1 bg-orange-400 w-full my-8" />
    </section>
  );
}
