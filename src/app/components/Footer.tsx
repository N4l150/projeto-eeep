/* eslint-disable @next/next/no-img-element */
export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-br from-green-900 to-green-600 text-white py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-6">
        
        <div className="flex-shrink-0">
          <img
            src="/images/logo/lbc-logo.jpg"
            alt="EEEP Lúcia Baltazar Costa"
            className="w-24 h-24 rounded-full object-cover border-2 border-white"
          />
        </div>

        <div className="flex-1 text-center md:text-left">
          <h2 className="text-xl font-bold mb-2">Lúcia Baltazar Costa</h2>
          <p>Contato: (11) 1111-1111 | luciabaltazar@gmail.com</p>
        </div>

        <div className="flex-1 text-center md:text-left">
          <h3 className="text-lg font-semibold mb-2">Links</h3>
          <ul className="space-y-1">
            <li>
              <a
                href="/ambientes-escolares"
                className="hover:underline transition-colors"
              >
                Ambientes Escolares
              </a>
            </li>
            <li>
              <a
                href="/historia-da-escola"
                className="hover:underline transition-colors"
              >
                História da Escola
              </a>
            </li>
            <li>
              <a
                href="/grupo-gestor"
                className="hover:underline transition-colors"
              >
                Grupo Gestor
              </a>
            </li>
            <li>
            </li>
          </ul>
        </div>

        <div className="flex-1 text-center md:text-left">
          <h3 className="text-lg font-semibold mb-2">Redes Sociais</h3>
          <div className="flex justify-center md:justify-start gap-4">
            
            <a
              href="https://www.instagram.com/eplimoeiro_/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition duration-300"
            >
              <img
                src="/icons/instagram.svg"
                alt="Instagram"
                className="w-8 h-8 filter invert hover:invert-0 hover:brightness-0 hover:sepia hover:hue-rotate-[30deg] hover:saturate-[10]"
              />
            </a>

            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition duration-300"
            >
              <img
                src="/icons/facebook.svg"
                alt="Facebook"
                className="w-8 h-8 filter invert hover:invert-0 hover:brightness-0 hover:sepia hover:hue-rotate-[330deg] hover:saturate-[8]"
              />
            </a>

            <a
              href="https://youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition duration-300"
            >
              <img
                src="/icons/youtube.svg"
                alt="YouTube"
                className="w-8 h-8 filter invert hover:invert-0 hover:brightness-0 hover:sepia hover:hue-rotate-[330deg] hover:saturate-[8]"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
