'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Espaços() {
  const slides = [
    {
      imagem: '/Escola/quadra.jpeg',
      titulo: 'Quadra',
      descricao: 'Quem dera fosse assim',
    },
    {
      imagem: '/Escola/sala.jpeg',
      titulo: 'Sala de Aula',
      descricao: 'slallaaaaakakwjqnefjwefonwejkfnj´wrefjqw vjk1r3bg',
    },
    {
      imagem: '/escola/lab.jpeg',
      titulo: 'Laboratório de linguas',
      descricao: 'Compiueters',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  function prevSlide() {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }
  //Não tirar esse comentario pra n dar erro
  // eslint-disable-next-line react-hooks/exhaustive-deps
  function nextSlide() {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const slide = slides[currentIndex];

  return (
    <section className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold text-center mb-8 text-green-800">
        Conheça nossos Espaços
      </h2>

      <div className="relative flex flex-col md:flex-row items-center md:items-start gap-6">
        <div className="w-full md:w-1/2 aspect-[4/3] rounded-lg overflow-hidden shadow-lg bg-gray-100 flex items-center justify-center">
          <Image
            src={slide.imagem}
            alt={slide.titulo}
            width={640} 
            height={480} 
            style={{ objectFit: 'contain' }}
            className="rounded-lg"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>

        <div className="md:w-1/2 text-center md:text-left">
          <h3 className="text-2xl font-semibold text-green-900 mb-3">{slide.titulo}</h3>
          <p className="text-gray-700 text-lg leading-relaxed">{slide.descricao}</p>
        </div>

        {/* Botões */}
        <button
          onClick={prevSlide}
          aria-label="Slide anterior"
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-green-700 text-white rounded-full w-10 h-10 hover:bg-green-900 transition"
        >
          ‹
        </button>
        <button
          onClick={nextSlide}
          aria-label="Próximo slide"
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-green-700 text-white rounded-full w-10 h-10 hover:bg-green-900 transition"
        >
          ›
        </button>
      </div>
    </section>
  );
}
