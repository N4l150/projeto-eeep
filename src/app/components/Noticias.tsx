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
    <section className="w-full max-w-md mx-auto p-6 bg-white rounded-3xl shadow-xl border border-gray-200">
      <h2 className="text-3xl font-extrabold text-center mb-6 text-green-700 tracking-tight font-montserrat">
        Nossos Espaços
      </h2>

      <div className="relative rounded-2xl overflow-hidden group shadow-md">
        <Image
          src={slide.imagem}
          alt={slide.titulo}
          width={400}
          height={300}
          className="w-full h-64 object-cover rounded-2xl transition-transform duration-500 group-hover:scale-[1.02]"
          sizes="(max-width: 768px) 100vw, 400px"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-70 rounded-2xl" />

        <div className="absolute bottom-4 left-4 right-4 text-white z-10">
          <h3 className="text-xl font-semibold drop-shadow-md">{slide.titulo}</h3>
          <p className="text-sm drop-shadow-md">{slide.descricao}</p>
        </div>

        {/* Botões de navegação */}
         {/* Botão anterior */}
          <button
            onClick={prevSlide}
            aria-label="Slide anterior"
            className="absolute top-0 left-0 w-1/4 h-full flex items-center justify-start px-4 text-white text-4xl font-bold hover:text-green-400 transition-all duration-300 z-20"
          >
            ‹
          </button>

          {/* Botão próximo */}
          <button
            onClick={nextSlide}
            aria-label="Próximo slide"
            className="absolute top-0 right-0 w-1/4 h-full flex items-center justify-end px-4 text-white text-4xl font-bold hover:text-green-400 transition-all duration-300 z-20"
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
      <h1 className="text-4xl font-bold mb-8 text-center text-green-800 font-montserrat">
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
                    <h2 className="text-lg font-semibold text-green-80 font-montserrat">{titulo}</h2>
                    <time className="text-xs text-gray-500" dateTime={data}>
                      {new Date(data).toLocaleDateString()}
                    </time>
                  </header>
                  <p className="text-gray-700 text-sm hover:text-green-800 hover:font-semibold transition">{resumo}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
