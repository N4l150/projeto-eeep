'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

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
    function updateVisibleCount() {
      const width = window.innerWidth;
      if (width < 640) setVisibleCount(1);
      else if (width < 1024) setVisibleCount(2);
      else setVisibleCount(3);
    }

    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % (team.length - visibleCount + 1));
  };

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? team.length - visibleCount : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [index, visibleCount]);

  const visibleTeam = team.slice(index, index + visibleCount);

  return (
    <section id="equipe" className="bg-white py-12 px-4 relative">
      <h3 className="text-3xl font-extrabold text-center text-green-800 mb-10 font-montserrat">
        Nossa Equipe
      </h3>

      <div className="relative max-w-7xl mx-auto flex gap-4 justify-center items-center px-8">
        <button
          onClick={prevSlide}
          className="absolute top-0 left-0 w-1/4 h-full flex items-center justify-start px-4 text-green-800 text-4xl font-bold hover:text-gray-400 transition-all duration-300 z-20"
          aria-label="Anterior"
        >
          ‹
        </button>

        {visibleTeam.map((member) => (
          <div
            key={member.name}
            className="bg-white border-l-4 border-orange-500 p-6 rounded-xl shadow-md w-72 transition-all hover:scale-105 hover:z-10"
          >
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 mb-4 rounded-full overflow-hidden border-4 border-green-800">
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
          className="absolute top-0 right-0 w-1/4 h-full flex items-center justify-end px-4 text-green-700 text-4xl font-bold hover:text-gray-400 transition-all duration-300 z-20"
          aria-label="Próximo"
        >
          ›
        </button>
      </div>

      <div className="h-1 bg-orange-400 w-full my-8" />

      <div className="bg-gray-100 py-6 mt-8 px-4 rounded-xl shadow-inner">
        <h2 className="text-xl sm:text-2xl font-bold text-green-800 text-center mb-4 font-montserrat">
          Acesse também
        </h2>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <Link href="/devTeam">
            <button className="bg-green-700 text-white px-6 py-2 rounded-full shadow hover:bg-green-800 transition-all font-semibold">
              Dev-Team
            </button>
          </Link>

          <button
            onClick={() => window.open('https://www.linkedin.com', '_blank')}
            className="bg-green-700 text-white px-6 py-2 rounded-full shadow hover:bg-green-800 transition-all font-semibold"
          >
            LinkedIn
          </button>
        </div>
      </div>
    </section>
  );
}
