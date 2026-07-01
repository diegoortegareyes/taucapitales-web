import Image from "next/image";
import { FaFacebook, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-sky-800 text-gray-100 py-8 mt-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">

        {/* Logo + info empresa */}
        <div className="flex items-center space-x-3 mb-4 md:mb-0">
          <Image src="/logo.png" alt="Tau Capitales" width={64} height={64} className="h-12 w-auto" />
          <div>
            <p className="font-semibold text-white">Tau Capitales SPA</p>
            <p className="text-sm">Factoring y Servicios Financieros</p>
          </div>
        </div>

        {/* Contacto */}
        <div className="text-sm text-center md:text-right">
          <p className="font-semibold text-white">Pablo Alvarez</p>
          <p>Providencia, Chile</p>
          <p>+56 9 4555 3902</p>
          <p>contacto@taucapitales.cl</p>

          {/* Redes sociales */}
          <div className="flex justify-center md:justify-end space-x-4 mt-3 text-lg">
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaFacebook />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaLinkedin />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaInstagram />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      {/* Derechos reservados */}
      <div className="border-t border-sky-700 mt-6 pt-4 text-center text-xs text-sky-100">
        © {new Date().getFullYear()} Tau Capitales. Todos los derechos reservados.
      </div>
    </footer>
  );
}