'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react'; 
import { Great_Vibes } from 'next/font/google';

const greatVibes = Great_Vibes({ subsets: ['latin'], weight: '400' });

const links = [
  { href: '/', label: 'Inicio' },
  { href: '/factoring', label: 'Factoring' },
  { href: '/servicios', label: 'Servicios' },
  { href: '/quienes-somos', label: 'Quiénes somos' },
  { href: '/contacto', label: 'Contacto' },
];

export default function NavBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isActive = (href: string) => pathname === href;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-sky-200 text-sky-800 ${
        scrolled
          ? 'bg-white/80 supports-[backdrop-filter]:backdrop-blur shadow-sm'
          : 'bg-white'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-0 py-2 flex items-start justify-between">

        {/* LOGO + MARCA */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Tau Servicios Empresas"
            width={160}
            height={160}
            priority
            className="h-20 md:h-24 lg:h-28 w-auto"
          />
          <span className="font-semibold tracking-tight text-2xl text-black leading-none">
            Tau Servicios Empresas
          </span>
        </Link>

        {/* Botón mobile */}
        <button
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-sky-50"
          aria-label="Abrir menú"
          onClick={() => setOpen(v => !v)}
        >
          {open ? (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          )}
        </button>

        {/* Desktop */}
        <div className="hidden md:flex flex-col items-end self-start w-full max-w-[60%]">
          
          <ul className="flex items-start gap-1 mt-0">

            {links.map(l => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`px-3 py-1 rounded-md text-xs md:text-sm font-medium leading-none transition ${
                    isActive(l.href) ? 'bg-sky-100 text-sky-900' : 'hover:bg-sky-50'
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            ))}

            {/* === BOTÓN ENRÓLATE AQUÍ (AZUL) === */}
            <li className="pl-2">
              <a
                href="https://taucapitales.fapro.cl"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md px-3 py-1 
                           text-xs md:text-sm bg-sky-700 text-white hover:bg-sky-800 transition font-medium"
              >
                Enrólate aquí
              </a>
            </li>

            {/* WhatsApp desktop */}
            <li className="pl-2">
              <a
                href="https://wa.me/56945553902?text=Hola%20Pablo%20Alvarez,%20quisiera%20m%C3%A1s%20informaci%C3%B3n"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Pablo Alvarez"
                className="inline-flex items-center gap-2 rounded-md px-3 py-1 text-xs md:text-sm bg-green-500 text-white hover:bg-green-600 transition"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.5 3.5A11 11 0 0 0 3.1 18.3L2 22l3.8-1a11 11 0 0 0 14.7-17.5Zm-7.1 16a9 9 0 0 1-4.6-1.3l-.3-.2-2.7.7.7-2.6-.2-.3a9 9 0 1 1 7.1 3.7Zm4.1-6.7c-.2-.1-1.3-.7-1.5-.8s-.3-.1-.5.1-.6.8-.7.9-.3.2-.5.1a7.3 7.3 0 0 1-2.2-1.4 8.1 8.1 0 0 1-1.5-1.9c-.1-.2 0-.4.1-.6l.4-.5c.1-.2.2-.3.3-.5s0-.3 0-.4l-.7-1.6c-.2-.5-.5-.5-.7-.5h-.6a1 1 0 0 0-.7.3c-.3.3-1 1-1 2.4s1 2.7 1.1 2.9a12 12 0 0 0 4.4 4.1c.6.2 1 .4 1.3.5h.6c.4 0 1.2-.5 1.4-1s.5-1.1.5-1.2-.1-.3-.3-.4Z"/>
                </svg>
                WhatsApp
              </a>
            </li>
          </ul>

          {/* FRASE */}
          <div className="mt-4 w-full flex justify-center md:justify-end pr-2">
            <p
              className={`${greatVibes.className} text-sky-600 text-xl md:text-2xl lg:text-3xl text-center md:text-right whitespace-pre-line max-w-2xl`}
            >
              {'El éxito no es definitivo, el fracaso no es fatal:\nlo que cuenta es el valor de continuar.(Winston Churchill)'}
              <img src="/pluma.png" alt="Pluma" className="inline-block align-middle ml-3 h-5 w-5 object-contain" />
            </p>
          </div>
        </div>
      </nav>

      {/* Mobile */}
      {open && (
        <div className="md:hidden border-t border-sky-200 bg-white">
          <ul className="max-w-6xl mx-auto px-4 py-1 space-y-1">
            {links.map(l => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`block px-4 py-3 rounded-md text-base ${
                    isActive(l.href) ? 'bg-sky-100 text-sky-900' : 'hover:bg-sky-50'
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              </li>
            ))}

            {/* === ENRÓLATE AQUÍ MOBILE === */}
            <li>
              <a
                href="https://taucapitales.fapro.cl"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center rounded-md px-4 py-3 text-base 
                           bg-sky-700 text-white hover:bg-sky-800 transition font-medium"
              >
                Enrólate aquí
              </a>
            </li>
          </ul>

          {/* WhatsApp mobile */}
          <div className="max-w-6xl mx-auto px-4 pb-3 -mt-1">
            <a
              href="https://wa.me/56945553902?text=Hola%20Pablo%20Alvarez,%20quisiera%20m%C3%A1s%20informaci%C3%B3n"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Pablo Alvarez"
              className="w-full inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 text-sm bg-green-500 text-white hover:bg-green-600 transition"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.5 3.5A11 11 0 0 0 3.1 18.3L2 22l3.8-1a11 11 0 0 0 14.7-17.5Zm-7.1 16a9 9 0 0 1-4.6-1.3l-.3-.2-2.7.7.7-2.6-.2-.3a9 9 0 1 1 7.1 3.7Zm4.1-6.7c-.2-.1-1.3-.7-1.5-.8s-.3-.1-.5.1-.6.8-.7.9-.3.2-.5.1a7.3 7.3 0 0 1-2.2-1.4 8.1 8.1 0 0 1-1.5-1.9c-.1-.2 0-.4.1-.6l.4-.5c.1-.2.2-.3.3-.5s0-.3 0-.4l-.7-1.6c-.2-.5-.5-.5-.7-.5h-.6a1 1 0 0 0-.7.3c-.3.3-1 1-1 2.4s1 2.7 1.1 2.9a12 12 0 0 0 4.4 4.1c.6.2 1 .4 1.3.5h.6c.4 0 1.2-.5 1.4-1s.5-1.1.5-1.2-.1-.3-.3-.4Z"/>
              </svg>
              WhatsApp
            </a>
          </div>

          {/* FRASE mobile */}
          <div className="max-w-6xl mx-auto px-4 pb-3 -mt-1 flex justify-center">
            <p className={`${greatVibes.className} text-sky-700 text-xl text-center whitespace-pre-line max-w-xs`}>
              {'El éxito no es definitivo, el fracaso no es fatal:\nlo que cuenta es el valor de continuar.'}
              <img src="/pluma.png" alt="Pluma" className="inline-block align-middle ml-2 h-5 w-5 object-contain" />
            </p>
          </div>
        </div>
      )}
    </header>
  );
}