'use client';

import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />

      <main className="flex flex-col md:flex-row items-center justify-center min-h-[80vh] px-6 py-12 bg-gray-50 gap-10">
        <div className="relative w-full md:w-1/2 lg:w-1/3 h-80 md:h-[400px] rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/images/adriano.jpg"
            alt="sla"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold text-green-800 mb-4">Coordenador do curso</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda inventore, placeat, ab recusandae vero laudantium minima incidunt error, voluptas reiciendis eveniet consequuntur quo laboriosam iure suscipit totam consequatur modi atque.
          </p>
        </div>
      </main>

      <main className="flex flex-col md:flex-row items-center justify-center min-h-[80vh] px-6 py-12 bg-white gap-10">
        <div className="relative w-full md:w-1/2 lg:w-1/3 h-80 md:h-[400px] rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/images/Baggio.jpg" 
            alt="sla2"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold text-green-800 mb-4">Porofessor do curso</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione deserunt facere amet tempore sit ullam totam excepturi dolorum laborum quis, maiores quas veritatis, atque iure nihil quasi harum ducimus ipsum.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
