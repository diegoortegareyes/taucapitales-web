import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  FaBolt,
  FaHandshake,
  FaChartLine,
  FaMoneyBillWave,
  FaCircleCheck,
  FaFileInvoiceDollar,
  FaBook,
  FaChartBar,
  FaBuilding,
} from "react-icons/fa6";
import CasosDeExito from "../components/CasosDeExito";
import Faq from "../components/Faq";
import { noticias } from "../data/noticias";

export const metadata: Metadata = {
  title: "Tau Servicios Empresas | Factoring y Servicios Financieros para Pymes",
  description:
    "Liquidez inmediata para tu empresa: factoring, confirming, cobranza, contabilidad y gestión financiera con rapidez, confianza y transparencia.",
  alternates: { canonical: "https://www.taucapitales.cl/" },
  openGraph: {
    title: "Tau Servicios Empresas | Factoring y Servicios Financieros para Pymes",
    description:
      "Anticipa tus facturas, optimiza tu flujo de caja y accede a servicios contables y financieros con confianza y transparencia.",
    url: "https://www.taucapitales.cl/",
    siteName: "Tau Servicios Empresas",
    locale: "es_CL",
    type: "website",
  },
};

export default function Page() {
  return (
    <main className="max-w-6xl mx-auto px-4 bg-white">
      {/* HERO */}
      <section className="relative grid md:grid-cols-2 gap-8 items-center py-3">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-sky-900 leading-tight">
            Liquidez inmediata y gestión integral para tu empresa
          </h1>
          <p className="text-gray-700 text-lg">
            En <span className="font-semibold">Tau Servicios Empresas</span> te ayudamos a anticipar
            el pago de tus facturas, optimizar el flujo de caja y acceder a servicios contables,
            financieros y de gestión empresarial con confianza y transparencia.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contacto"
              className="inline-block bg-sky-900 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-sky-800 transition"
            >
              Solicitar asesoría
            </Link>
            <Link
              href="/servicios"
              className="inline-block border border-sky-200 text-sky-900 px-6 py-3 rounded-lg text-lg font-medium hover:bg-sky-50 transition"
            >
              Conoce nuestros servicios
            </Link>
          </div>

          {/* Íconos de confianza */}
          <div className="flex flex-wrap gap-6 mt-6 text-sm text-sky-800">
            <div className="flex items-center gap-2">
              <FaBolt className="text-sky-600" /> Rapidez
            </div>
            <div className="flex items-center gap-2">
              <FaHandshake className="text-sky-600" /> Confianza
            </div>
            <div className="flex items-center gap-2">
              <FaChartLine className="text-sky-600" /> Transparencia
            </div>
          </div>
        </div>

        <div>
          <div className="flex justify-center">
            <Image
              src="/hero.jpg"
              alt="Factoring Tau Servicios Empresas"
              width={640}
              height={480}
              priority
              className="rounded-xl max-h-96 w-auto object-cover"
            />
          </div>

          {/* ⭐ BOTÓN ENRÓLATE AQUÍ (AGREGADO) ⭐ */}
          <div className="mt-6 w-full flex justify-center">
            <a
              href="https://taucapitales.fapro.cl"
              target="_blank"
              className="block w-full md:w-2/3 bg-green-600 text-white text-center py-4 rounded-xl text-xl font-semibold shadow hover:bg-green-700 transition"
            >
              Enrólate aquí
            </a>
          </div>
          {/* ⭐ FIN BOTÓN ⭐ */}
        </div>
      </section>

      {/* GRID PRINCIPAL: 3/4 contenido + 1/4 noticias */}
      <div className="grid lg:grid-cols-4 gap-8">
        {/* IZQUIERDA (3/4): contenido */}
        <div className="lg:col-span-3 space-y-12">
          {/* QUIÉNES SOMOS */}
          <section className="rounded-2xl border p-6 md:p-8">
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold text-sky-900">¿Quiénes somos?</h2>
                <p className="text-gray-700 mt-2 max-w-3xl text-justify">
                  En <span className="font-semibold">Tau Servicios Empresas</span> acompañamos a pymes y empresas
                  con soluciones de liquidez rápidas y transparentes. Evaluamos ágil, ofrecemos tasas competitivas
                  y te asesoramos en cada paso para decisiones con confianza.
                </p>
              </div>
              <Link
                href="/quienes-somos"
                className="shrink-0 inline-block bg-sky-900 text-white px-4 py-2 rounded-lg font-medium hover:bg-sky-800 transition"
              >
                Ver más
              </Link>
            </div>
          </section>

          {/* SERVICIOS */}
          <section className="rounded-2xl border p-6 md:p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl md:text-3xl font-semibold text-sky-900">Nuestros Servicios</h2>
              <Link href="/servicios" className="text-sky-900 hover:underline font-medium">
                Ver todos →
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: FaMoneyBillWave, titulo: "Factoring", desc: "Liquidez inmediata anticipando facturas." },
                { icon: FaCircleCheck, titulo: "Confirming", desc: "Mejor gestión de pagos a proveedores." },
                { icon: FaFileInvoiceDollar, titulo: "Gestión de Cobranza", desc: "Recupera cuentas con gestión profesional." },
                { icon: FaBook, titulo: "Contabilidad", desc: "Cumplimiento normativo y claridad financiera." },
                { icon: FaChartBar, titulo: "Finanzas", desc: "Optimización de caja, KPIs y negociación bancaria." },
                { icon: FaBuilding, titulo: "Gestión Empresarial", desc: "Soporte integral para crecer con confianza." },
              ].map(s => (
                <div
                  key={s.titulo}
                  className="rounded-2xl border p-5 hover:shadow-md transition
                             bg-gradient-to-br from-sky-50 to-white ring-1 ring-sky-100"
                >
                  <p className="text-lg font-medium text-sky-900 flex items-center gap-2">
                    <s.icon className="text-sky-600" /> {s.titulo}
                  </p>
                  <p className="text-sm text-sky-900/80 mt-1">{s.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CASOS DE ÉXITO */}
          <CasosDeExito />

          {/* FAQ */}
          <Faq />
        </div>

        {/* DERECHA (1/4): Noticias */}
        <div className="lg:col-span-1 space-y-6">
          <div className="rounded-2xl border p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-sky-900 mb-4">Mercado financiero</h3>

            <div className="space-y-4">
              {noticias.map(n => (
                <div
                  key={n.slug}
                  className="rounded-2xl border p-3 bg-gradient-to-br from-sky-50 to-white ring-1 ring-sky-100"
                >
                  <div className="overflow-hidden rounded-lg">
                    <Image
                      src={n.image}
                      alt={n.title}
                      width={400}
                      height={300}
                      className="h-32 w-full object-cover"
                    />
                  </div>
                  <div className="pt-3 border-t mt-3">
                    <h4 className="font-semibold text-sky-900 leading-snug">{n.title}</h4>
                    <p className="text-sm text-sky-900/80 mt-1">{n.excerpt}</p>
                    <Link href={`/noticias/${n.slug}`} className="text-sm text-sky-700 hover:underline font-medium">
                      Ver más →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/noticias"
              className="inline-block text-sky-900 hover:underline font-medium"
            >
              Ver todas las noticias →
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}