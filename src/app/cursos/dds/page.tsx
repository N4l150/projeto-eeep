'use client';

import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />

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
          <h2 className="text-4xl font-bold text-green-800 mb-4">Coordenador do Curso</h2>
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
          <h2 className="text-4xl font-bold text-green-800 mb-4">Professor do Curso</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae! Ipsam necessitatibus eaque nisi cumque eos eum deserunt deleniti eligendi hic, quas adipisci, voluptatum sunt quisquam! Eum temporibus consequatur enim.
          </p>
        </div>
      </main>

      <section className="bg-white py-16 px-6 text-center max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-green-800 mb-6">Por que escolher DDS?</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, sed ab. Tempora illum omnis nostrum quo, minima minus odio deleniti nam eos animi maxime alias perspiciatis fuga iusto, quae voluptates? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad beatae deserunt sint iusto accusantium doloribus nemo facilis, et modi laborum eveniet. Corporis similique at iste quae eum enim tempora commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, quaerat numquam sit expedita ipsum ipsa voluptatem facilis a, magni consequuntur incidunt excepturi ducimus reiciendis odio eveniet quae nisi quibusdam aspernatur.
        </p>
      </section>

      <Footer />
    </>
  );
}
