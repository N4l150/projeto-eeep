/* eslint-disable @next/next/no-img-element */
export default function Footer() {
  return (
    <footer className="w-full bg-green-800 text-white py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-6">
        <div className="flex-shrink-0">
          <img
            src="/Escola/sala.jpeg" 
            alt="EEEP Lúcia Baltazar Costa"
            className="w-24 h-24 rounded-full object-cover border-2 border-white"
          />
        </div>

        <div className="flex-1 text-center md:text-left">
          <h2 className="text-xl font-bold mb-2">Lúcia Baltazar Costa</h2>
          <p>Contato: (11) 1111-1111 | Lúciabaltazar@Gmail.com</p>
        </div>

        <div className="flex-1 text-center md:text-left">
          <h3 className="text-lg font-semibold mb-2">Perguntas Frequentes</h3>
          <ul className="space-y-1">
            <li>
              <a href="#" className="hover:underline">
                Como me matricular?
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Como funcionam os cursos?
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Como entrar em contato com a secretaria?
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
