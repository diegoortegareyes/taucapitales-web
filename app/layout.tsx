import './globals.css';
import type { Metadata } from 'next';
import Splash from '../components/Splash';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';  // 👈 importamos

export const metadata: Metadata = {
  title: 'Tau Servicios Empresas',
  description: 'Factoring y servicios financieros',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="bg-white">
      <body className="min-h-dvh bg-white text-gray-900 flex flex-col">
        <Splash />
        <NavBar />
        <main className="flex-grow">{children}</main>
        <Footer /> {/* 👈 ahora siempre aparece */}
      </body>
    </html>
  );
}