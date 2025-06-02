'use client';

import { useState } from "react";

const faqs = [
  {
    question: "Quais são as áreas de atuação do curso de Administração?",
    answer:
      "O administrador pode atuar em recursos humanos, marketing, finanças, logística, consultoria, empreendedorismo, entre outros setores.",
  },
  {
    question: "O curso tem estágio obrigatório?",
    answer:
      "Sim. O estágio supervisionado é parte fundamental da formação e permite vivência prática no mercado.",
  },
  {
    question: "Quais são os diferenciais deste curso?",
    answer:
      "Professores experientes, grade curricular atualizada e parcerias com empresas para estágios e projetos.",
  },
  {
    question: "O curso é reconhecido pelo MEC?",
    answer:
      "Sim, o curso é reconhecido e segue todas as diretrizes do Ministério da Educação.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-white py-16 px-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-center text-green-800 mb-10 font-montserrat">
        Perguntas Frequentes
      </h1>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-green-300 rounded-lg overflow-hidden shadow-sm"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full text-left px-6 py-4 bg-green-100 hover:bg-green-200 transition-colors font-semibold text-green-900 flex justify-between items-center"
            >
              {faq.question}
              <span>{openIndex === index ? "−" : "+"}</span>
            </button>

            {openIndex === index && (
              <div className="px-6 py-4 bg-white text-gray-700">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}
