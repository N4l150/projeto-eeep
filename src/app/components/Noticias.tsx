'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

type Noticia = {
  id: number;
  titulo: string;
  resumo: string;
  data: string;
};

function Espacos() {
  const slides = [
    {
      imagem: '/Escola/quadra.jpeg',
      titulo: 'Quadra',
      descricao: 'Espaço amplo para atividades esportivas e eventos escolares.',
    },
    {
      imagem: '/Escola/sala.jpeg',
      titulo: 'Sala de Aula',
      descricao: 'Ambiente confortável e bem equipado para o aprendizado.',
    },
    {
      imagem: '/escola/lab.jpeg',
      titulo: 'Laboratório',
      descricao: 'Equipado para experiências e descobertas científicas.',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  function prevSlide() {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }
  // Não tirar pra n dar erro
  // eslint-disable-next-line react-hooks/exhaustive-deps
  function nextSlide() {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const slide = slides[currentIndex];

  return (
    <section className="w-full max-w-md p-4 bg-green-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-4 text-green-800">
        Nossos Espaços
      </h2>

      <div className="relative rounded-lg overflow-hidden">
        <Image
          src={slide.imagem}
          alt={slide.titulo}
          width={400}
          height={300}
          className="rounded-md w-full h-auto object-cover"
          sizes="(max-width: 768px) 100vw, 400px"
        />

        <div className="mt-3 text-center">
          <h3 className="text-xl font-semibold text-green-900">{slide.titulo}</h3>
          <p className="text-sm text-gray-700">{slide.descricao}</p>
        </div>

        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-green-700 text-white w-7 h-7 rounded-full hover:bg-green-900"
        >
          ‹
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-green-700 text-white w-7 h-7 rounded-full hover:bg-green-900"
        >
          ›
        </button>
      </div>
    </section>
  );
}

export default function Noticias() {
  const [noticias] = useState<Noticia[]>([
    {
      id: 1,
      titulo: 'Nova liderança do Grêmio Estudantil',
      resumo:
        'A coordenação anúncia nova liderança do grêmio estudantil da Lúcia Baltazar.',
      data: '25-05-2025',
    },
    {
      id: 2,
      titulo: 'Projeto verdejando planta mais de 30 árvores',
      resumo:
        'Alunos participaram de projeto de sustentabilidade que resultou no plantio de 30 árvores no bairro Luiz Alves de Freitas.',
      data: '27-05-2025',
    },
    {
      id: 3,
      titulo: 'Feira Cultural movimenta a escola',
      resumo:
        'Estudantes organizaram exposições e apresentações culturais durante toda a semana.',
      data: '29-05-2025',
    },
  ]);

  return (
    <main className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8 text-center text-green-800">
        Últimas Notícias
      </h1>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/2">
          <Espacos />
        </div>

        {/* Notícias */}
        <div className="md:w-1/2 space-y-4">
          {noticias.map(({ id, titulo, resumo, data }) => (
            <article
              key={id}
              className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition"
            >
              <div className="flex">
                <div className="w-1 bg-orange-400 rounded-l-lg mr-3"></div>
                <div className="flex-1">
                  <header className="mb-1 flex justify-between items-center">
                    <h2 className="text-lg font-semibold text-green-800">{titulo}</h2>
                    <time className="text-xs text-gray-500" dateTime={data}>
                      {new Date(data).toLocaleDateString()}
                    </time>
                  </header>
                  <p className="text-gray-700 text-sm">{resumo}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
