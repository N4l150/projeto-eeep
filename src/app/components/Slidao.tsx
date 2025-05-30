'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const slides = [
  {
    imagem: '/Escola/quadra.jpeg',
    titulo: 'Quadra ',
    texto: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
  },
  {
    imagem: '/Escola/sala.jpeg',
    titulo: 'Salas',
    texto: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
  },
  {
    imagem: '/Escola/lab.jpeg',
    titulo: 'Laboratório',
    texto: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
  },
];

export default function Slidao() {
  const [indexAtual, setIndexAtual] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndexAtual((prev) => (prev + 1) % slides.length);
    }, 5000); 

    return () => clearInterval(intervalo);
  }, []);

  const slideAtual = slides[indexAtual];

  return (
    <section className="relative w-full h-[80vh] overflow-hidden">
      <Image
        src={slideAtual.imagem}
        alt={slideAtual.titulo}
        fill
        className="object-cover transition-opacity duration-1000"
        priority
      />

      <div className="absolute inset-0 bg-black/40" />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          {slideAtual.titulo}
        </h2>
        <p className="text-xs sm:text-sm md:text-base max-w-md">
          {slideAtual.texto}
        </p>
      </div>
    </section>
  );
}
