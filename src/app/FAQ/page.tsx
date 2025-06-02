'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';

type FAQ = {
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  {
    question: "perguntas",
    answer: "laaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.",
  },
  {
    question: "perguntas",
    answer: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
  },
  {
    question: "perguntas",
    answer: "laaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
  },
  {
    question: "perguntas",
    answer: "laaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
  },
  {
    question: "perguntas",
    answer: "laaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
  },
  {
    question: "perguntas",
    answer: "laaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
  },
];

export default function FAQPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />

      <main className="flex-grow max-w-5xl mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold mb-10 text-center font-montserrat text-green-800">
          Perguntas Frequentes
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border rounded-xl p-6 bg-white shadow-sm min-h-[180px] flex flex-col"
            >
              <h2 className="text-lg font-semibold mb-3 text-green-700 font-montserrat break-words">
                {faq.question}
              </h2>
              <p className="text-gray-700 break-words flex-grow">{faq.answer}</p>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
