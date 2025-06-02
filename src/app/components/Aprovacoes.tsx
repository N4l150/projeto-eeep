'use client'
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Carrossel() {
  const slides = [
    { imagem: "/images/darlan.png", nome: "Darlan Fernandes", texto: "Faculdade Vidal" },
    { imagem: "/images/Nalyson.png", nome: "José Nalyson", texto: "UNP" },
    { imagem: "/images/Carlos.png", nome: "Carlos Eduardo", texto: "Cacheado :)" },
    { imagem: "/images/alan.png", nome: "Alan Mendes", texto: "UFC" },
    { imagem: "/images/murilo.png", nome: "Murilo Ivo", texto: "UFC" },
    { imagem: "/images/kaik.png", nome: "Valber Kaik", texto: "UFC" },
    { imagem: "/images/Kennedy.png", nome: "Kennedy Viana", texto: "UFC" },
    { imagem: "/images/jhon.png", nome: "Jhonatas Oliva", texto: "UFC" },
    { imagem: "/images/aiko.png", nome: "Aiko Yara", texto: "UFC" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);

    //configs de responsividade
  useEffect(() => {
    const updateVisibleCount = () => {
      const width = window.innerWidth;
      if (width < 640) setVisibleCount(1); 
      else if (width < 1024) setVisibleCount(2); 
      else setVisibleCount(4); 
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  function prevSlide() {
    setCurrentIndex((prev) =>
      prev === 0 ? slides.length - visibleCount : prev - 1
    );
  }

  //Não tirar esse comentario se n da erro
  // eslint-disable-next-line react-hooks/exhaustive-deps
  function nextSlide() {
    setCurrentIndex((prev) =>
      (prev + 1) % (slides.length - visibleCount + 1)
    );
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex, nextSlide, visibleCount]);

  const visibleSlides = slides.slice(currentIndex, currentIndex + visibleCount);

  return (
    <>
      <div className="w-full bg-green-800 text-white py-12 px-4">
        <h1 className="text-4xl font-bold text-center mb-8 tracking-tight font-montserrat">
          Aprovações em Faculdades
        </h1>

        <div className="relative max-w-7xl mx-auto flex gap-4 justify-center items-center px-8">

          <button
            onClick={prevSlide}
            className="absolute top-0 left-0 w-1/4 h-full flex items-center justify-start px-4 text-white text-4xl font-bold hover:text-gray-300 transition-all duration-300 z-20"
          >
            ‹
          </button>
          
          {visibleSlides.map((slide, index) => (
            <div
              key={index}
              className="bg-white text-black border-4 border-green-800 p-6 rounded-2xl shadow-xl w-72 transition-all hover:scale-105 hover:z-10"
            >
              <div className="flex flex-col items-center">
                <Image
                  src={slide.imagem}
                  alt={`Foto de ${slide.nome}`}
                  width={160}
                  height={160}
                  className="rounded-full border-4 border-green-700 shadow-md mb-4 object-cover"
                />
                <h2 className="text-2xl font-semibold text-green-900 mb-1">
                  {slide.nome}
                </h2>
                <p className="text-md text-gray-700 italic">{slide.texto}</p>
              </div>
            </div>
          ))}

         
          <button
            onClick={nextSlide}
            className="absolute top-0 right-0 w-1/4 h-full flex items-center justify-end px-4 text-white text-4xl font-bold hover:text-gray-300 transition-all duration-300 z-20"
          >
            ›
          </button>
        </div>
      </div>

      {/* Linha laranja no final */}
      <div className="h-1 bg-orange-400 w-full my-8" />
    </>
  );
}
