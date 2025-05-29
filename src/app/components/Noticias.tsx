'use client';
import { useState } from 'react';

type Noticia = {
  id: number;
  titulo: string;
  resumo: string;
  data: string;
};

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
      titulo: 'BLAAAAAAAAAAAAAAAAAAAAAAAA',
      resumo:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit architecto aliquam nisi neque quisquam nostrum debitis quas id maiores optio ullam distinctio vel nesciunt, vitae eveniet culpa deleniti eligendi! Ad.',
      data: '28-05-2025',
    },
    {
      id: 4,
      titulo: 'BLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
      resumo:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit architecto aliquam nisi neque quisquam nostrum debitis quas id maiores optio ullam distinctio vel nesciunt, vitae eveniet culpa deleniti eligendi! Ad.',
      data: '28-05-2025',
    },
    {
      id: 5,
      titulo: 'BLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
      resumo:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit architecto aliquam nisi neque quisquam nostrum debitis quas id maiores optio ullam distinctio vel nesciunt, vitae eveniet culpa deleniti eligendi! Ad.',
      data: '28-05-2025',
    },
  ]);

  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8 text-center text-green-800">Últimas Notícias</h1>

      <div className="space-y-8">
        {noticias.map(({ id, titulo, resumo, data }) => (
          <article
            key={id}
            className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition"
          >
            <div className="flex">
 
              <div className="w-1 bg-orange-400 rounded-l-lg mr-4"></div>
              

              <div className="flex-1">
                <header className="mb-2 flex justify-between items-center">
                  <h2 className="text-2xl font-semibold text-green-800">{titulo}</h2>
                  <time className="text-sm text-gray-500" dateTime={data}>
                    {new Date(data).toLocaleDateString()}
                  </time>
                </header>
                <p className="text-gray-700 leading-relaxed">{resumo}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
