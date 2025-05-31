// use client para funcionamento de alguns components
'use client';

import Image from "next/image";
// tipagem para props
type Team= {
    name: string;
    role: string;
    image: string;
};

const team = [
        { name: 'Dra. Ana Silva', role: 'Psicóloga Clínica', image: 'https://randomuser.me/api/portraits/women/44.jpg' },
        { name: 'Dr. João Pereira', role: 'Psicoterapeuta', image: 'https://randomuser.me/api/portraits/men/46.jpg' },
        { name: 'Dra. Maria Souza', role: 'Psicóloga Infantil', image: 'https://randomuser.me/api/portraits/women/65.jpg' },
    ];

// uso da props 
export default function Team() {

    return (
        <section id="team" className="py-12 px-4 bg-gray-50">
            <h3 className="text-3xl font-bold text-center text-teal-800 mb-8 font-montserrat">Nossa Equipe</h3>
            <div className="grid md:grid-cols-3 gap-8">
                {team.map((member, index) => (
                    <div key={index} className="text-center hover:shadow-xl transition rounded-lg p-4">
                        <Image
                            src={member.image}
                            alt={member.name}
                            width={256}
                            height={256}
                            className="w-32 h-32 mx-auto rounded-full mb-4 shadow-lg" 
                        />
                        <h4 className="text-lg font-semibold text-teal-800">{member.name}</h4>
                        <p className="text-gray-600">{member.role}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}
