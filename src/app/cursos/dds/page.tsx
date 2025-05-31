'use client';

import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />

      <section className="bg-white py-12 text-center max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold text-green-900 font-montserrat">Desenvolvimento de Sistemas</h1>
      </section>

      <main className="flex flex-col md:flex-row items-center justify-center min-h-[80vh] px-6 py-16 bg-green-100 gap-10">
        <div className="relative w-full md:w-1/2 lg:w-1/3 h-80 md:h-[400px] rounded-xl overflow-hidden shadow-xl hover:scale-105 transition-transform duration-300">
          <Image
            src="/images/adriano.jpg"
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="hidden md:block w-1 h-full bg-orange-400 rounded-full animate-pulse" />

        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold text-green-800 mb-4 font-montserrat">Coordenador do Curso</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro maxime repellat praesentium, cum excepturi, suscipit tenetur, unde sunt ipsam quam rerum animi? Nemo dolorum quia, repellat eveniet eum modi similique!
          </p>
        </div>
      </main>

      <main className="flex flex-col md:flex-row-reverse items-center justify-center min-h-[80vh] px-6 py-16 bg-orange-100 gap-10">
        <div className="relative w-full md:w-1/2 lg:w-1/3 h-80 md:h-[400px] rounded-xl overflow-hidden shadow-xl hover:scale-105 transition-transform duration-300">
          <Image
            src="/images/Baggio.jpg"
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="hidden md:block w-1 h-full bg-gray-300 rounded-full animate-pulse" />

        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold text-green-800 mb-4 font-montserrat">Professor do Curso</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae! Ipsam necessitatibus eaque nisi cumque eos eum deserunt deleniti eligendi hic, quas adipisci, voluptatum sunt quisquam! Eum temporibus consequatur enim.
          </p>
        </div>
      </main>

      <section className="bg-white py-16 px-6 text-center max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-green-800 mb-6 font-montserrat">Por que escolher Desenvolvimento de Sistemas?</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, sed ab. Tempora illum omnis nostrum quo, minima minus odio deleniti nam eos animi maxime alias perspiciatis fuga iusto, quae voluptates? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad beatae deserunt sint iusto accusantium doloribus nemo facilis, et modi laborum eveniet. Corporis similique at iste quae eum enim tempora commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, quaerat numquam sit expedita ipsum ipsa voluptatem facilis a, magni consequuntur incidunt excepturi ducimus reiciendis odio eveniet quae nisi quibusdam aspernatur.
        </p>
      </section>

      <section className="bg-green-50 py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-green-800 mb-8 text-center font-montserrat">Grade Curricular do Curso</h2>
        <table className="w-full border border-green-300 rounded-md overflow-hidden">
          <thead className="bg-green-200">
            <tr>
              <th className="border border-green-300 py-3 px-4 text-left">Disciplina</th>
              <th className="border border-green-300 py-3 px-4 text-left">Carga Horária</th>
              <th className="border border-green-300 py-3 px-4 text-left">Descrição</th>
            </tr>
          </thead>
          <tbody>
            <tr className="even:bg-green-100">
              <td className="border border-green-300 py-2 px-4">Introdução ao DDS</td>
              <td className="border border-green-300 py-2 px-4">40h</td>
              <td className="border border-green-300 py-2 px-4">Conceitos básicos e objetivos do curso.</td>
            </tr>
            <tr>
              <td className="border border-green-300 py-2 px-4">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</td>
              <td className="border border-green-300 py-2 px-4">60h</td>
              <td className="border border-green-300 py-2 px-4">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.</td>
            </tr>
            <tr className="even:bg-green-100">
              <td className="border border-green-300 py-2 px-4">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</td>
              <td className="border border-green-300 py-2 px-4">80h</td>
              <td className="border border-green-300 py-2 px-4">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</td>
            </tr>
            <tr>
              <td className="border border-green-300 py-2 px-4">Estágio </td>
              <td className="border border-green-300 py-2 px-4">100h</td>
              <td className="border border-green-300 py-2 px-4">Experiência no mercado.</td>
            </tr>
          </tbody>
        </table>
      </section>

      <Footer />
    </>
  );
}
