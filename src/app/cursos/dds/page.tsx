import Image from "next/image";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <>
      <Header />


      <section className="bg-white py-12 text-center max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold text-green-900 font-montserrat">Des. de Sistemas</h1>
      </section>

      {/* Faixa com imagens */}
      <section className="w-full h-[20vh] flex overflow-x-auto no-scrollbar">
        <div className="relative flex-shrink-0 w-1/3 h-full">
          <Image
            src="/images/teste.png"
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative flex-shrink-0 w-1/3 h-full">
          <Image
            src="/images/teste.png"
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative flex-shrink-0 w-1/3 h-full">
          <Image
            src="/images/teste.png"
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

   
      <section className="bg-white py-16 px-6 text-center max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-green-800 mb-6 font-montserrat">Por que escolher Des. de Sistemas?</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt dolore cupiditate provident accusamus distinctio quis quod, ipsam quae magnam, enim delectus repudiandae similique vitae dolor debitis exercitationem quo et deleniti!
        </p>
      </section>

      {/* Grade */}
      <section className="bg-green-50 py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-green-800 mb-8 text-center font-montserrat">Grade do Curso</h2>
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
              <td className="border border-green-300 py-2 px-4">Introdução ao curso</td>
              <td className="border border-green-300 py-2 px-4">100h</td>
              <td className="border border-green-300 py-2 px-4">Conceitos básicos.</td>
            </tr>
            <tr>
              <td className="border border-green-300 py-2 px-4">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</td>
              <td className="border border-green-300 py-2 px-4">100h</td>
              <td className="border border-green-300 py-2 px-4">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.</td>
            </tr>
            <tr className="even:bg-green-100">
              <td className="border border-green-300 py-2 px-4">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</td>
              <td className="border border-green-300 py-2 px-4">100h</td>
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

        {/* Professores */}
        <section className="max-w-6xl mx-auto px-6 py-16 space-y-16">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-40 h-40 relative rounded-full overflow-hidden border-2 border-green-800">
              <Image
                src="/images/aiko.png"
                alt="Coordenador do Curso"
                fill
                className="object-cover"
                priority
              />
            </div>
            
            {/* coordenador */}
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-semibold text-green-800 font-montserrat">Coordenador do Curso</h3>
              <p className="mt-2 text-gray-700 text-base max-w-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ipsam aliquid optio consequatur illum neque recusandae reiciendis accusamus ut hic. Fugit mollitia ut velit delectus eveniet eos quia possimus ullam.
              </p>
            </div>
          </div>

          {/* Linha separando  */}
          <hr className="border-t-3 border-orange-500 w-full" />

          {/* Professor */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="w-40 h-40 relative rounded-full overflow-hidden border-2 border-green-800">
              <Image
                src="/images/Nalyson.png"
                alt="Professor do Curso"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-semibold text-green-800 font-montserrat">Professor do Curso</h3>
              <p className="mt-2 text-gray-700 text-base max-w-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis dignissimos nam repudiandae deserunt enim inventore fugiat ex deleniti quod, cupiditate similique laboriosam libero adipisci, in eligendi error nisi! Necessitatibus, aliquid!
              </p>
            </div>
          </div>
        </section>


      <Footer />
    </>
  );
}
