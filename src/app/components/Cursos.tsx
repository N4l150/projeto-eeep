'use client'
import { Code, Briefcase, Building, HeartPulse } from 'lucide-react';
import Link from "next/link";

export default function Cursos() {
  const cursos = [
    {
      id: "adm",
      nome: "Administração",
      icone: <Briefcase size={72} className="text-blue-800 mx-auto" />,
    },
    {
      id: "dds",
      nome: "Desenvolvimento de Sistemas",
      icone: <Code size={72} className="text-purple-800 mx-auto" />,
    },
    {
      id: "edf",
      nome: "Edificações",
      icone: <Building size={72} className="text-yellow-800 mx-auto" />,
    },
    {
      id: "masso",
      nome: "Massoterapia",
      icone: <HeartPulse size={72} className="text-pink-500 mx-auto" />,
    }
  ];

  return (
    <div className="p-8">
      <h1 className="text-4xl font-semibold mb-8 text-center ">
        Conheça nossos Cursos
      </h1>
      <div className="grid sm:grid-cols-4 gap-5 relative">
        {cursos.map((curso) => (
          <Link
            key={curso.id}
            href={`/cursos/${curso.id}`}
            className="border-4 border-gray-800 rounded-xl overflow-hidden shadow-lg transition-all duration-300 text-center p-6 w-full 
                       hover:scale-105 hover:shadow-2xl hover:z-10 bg-white"
          >
            <div className="mb-5">{curso.icone}</div>
            <h2 className="text-xl font-semibold mb-1">{curso.nome}</h2>
            <p className="text-sm text-gray-600">Clique para saber mais</p>
          </Link>
        ))}
      </div>
           <div className="h-1 bg-orange-400 mt-4 w-full" />

    </div>
    
  );
}
