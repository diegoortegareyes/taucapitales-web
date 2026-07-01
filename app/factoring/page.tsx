import type { Metadata } from "next";
import Link from "next/link";
import { FaMoneyBillWave, FaShieldAlt, FaBalanceScale, FaHandshake } from "react-icons/fa";
import Calculadora from "../../components/Calculadora";
import Faq from "../../components/Faq";
import {
  FaComments,
  FaBook,
  FaUsers,
  FaFileInvoice,
  FaChartBar,
  FaCircleCheck,
  FaFileInvoiceDollar,
} from "react-icons/fa6";

export const metadata: Metadata = {
  title: "Factoring en Chile | Tau Servicios Empresas",
  description:
    "Anticipa el pago de tus facturas y obtén liquidez inmediata con factoring. Simula tu anticipo online y conoce cómo funciona con Tau Capitales.",
  alternates: { canonical: "https://www.taucapitales.cl/factoring" },
  openGraph: {
    title: "Factoring en Chile | Tau Servicios Empresas",
    description:
      "Convierte tus facturas por cobrar en liquidez inmediata. Simula tu anticipo y conoce el proceso paso a paso.",
    url: "https://www.taucapitales.cl/factoring",
    siteName: "Tau Servicios Empresas",
    locale: "es_CL",
    type: "website",
  },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <section id="factoring">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-12">
            
            {/* IZQUIERDA: contenido principal */}
            <div className="lg:col-span-2">
              <h1 className="text-3xl font-bold tracking-tight text-sky-900 sm:text-4xl">
                ¿Qué es el Factoring?
              </h1>
              <p className="mt-6 text-base leading-7 text-sky-800">
                El <strong>factoring</strong> es un mecanismo financiero que
                permite a tu empresa convertir sus facturas por cobrar en
                liquidez inmediata. En lugar de esperar 30, 60 o 90 días a que
                los clientes paguen, recibes un anticipo del monto de esas
                facturas a través de una empresa de factoring, como
                <span className="font-semibold"> Tau Capitales</span>.
              </p>

              <h2 className="mt-8 text-2xl font-semibold text-sky-900">
                Beneficios principales
              </h2>
              <ul className="mt-4 space-y-3 text-sky-800">
                <li className="flex items-start gap-2">
                  <FaMoneyBillWave className="mt-1 text-sky-600" />
                  <span>Mejora inmediata de la liquidez.</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaShieldAlt className="mt-1 text-sky-600" />
                  <span>Reducción del riesgo de incobrabilidad.</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaBalanceScale className="mt-1 text-sky-600" />
                  <span>Mayor estabilidad en el flujo de caja.</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaHandshake className="mt-1 text-sky-600" />
                  <span>Facilita la negociación con proveedores.</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaShieldAlt className="mt-1 text-sky-600" />
                  <span>Sin necesidad de endeudamiento bancario.</span>
                </li>
              </ul>

              <h2 className="mt-8 text-2xl font-semibold text-sky-900">
                ¿Cómo funciona?
              </h2>
              <p className="mt-4 text-base leading-7 text-sky-800">
                1. Emites una factura a tu cliente.<br />
                2. Cedes esa factura a <strong>Tau Capitales</strong>.<br />
                3. Recibes un porcentaje del valor de la factura de forma
                inmediata.<br />
                4. Cuando tu cliente paga, se liquida la operación descontando
                la comisión acordada.
              </p>

              <div className="mt-10 flex gap-4">
                <Link
                  href="/contacto"
                  className="rounded-xl bg-sky-700 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-sky-800"
                >
                  Solicitar una asesoría
                </Link>
                <Link
                  href="/servicios"
                  className="rounded-xl border border-sky-200 bg-white px-5 py-3 text-sm font-medium text-sky-800 shadow-sm transition hover:border-sky-300 hover:bg-sky-50"
                >
                  Volver a Servicios
                </Link>
              </div>

              <div className="mt-12">
                <Calculadora />
              </div>

              <div className="mt-12">
                <Faq />
              </div>
            </div>

            {/* DERECHA: aside con misma estructura usada en el proyecto */}
            <aside className="mt-12 lg:mt-0">
              <div className="lg:sticky lg:top-24 space-y-6">
                {/* Hablamos */}
                <div className="rounded-2xl border border-sky-100 bg-sky-50 p-6 shadow-sm">
                  <h4 className="text-lg font-semibold text-sky-900 mb-3 flex items-center gap-2">
                    <FaComments className="text-sky-700" /> ¿Hablamos?
                  </h4>
                  <p className="text-sm text-sky-800/90 mb-4">
                    Conversemos sobre tus necesidades y te proponemos una
                    solución concreta para tu empresa. Respuesta rápida y trato
                    cercano.
                  </p>
                  <Link
                    href="/contacto"
                    className="block w-full rounded-lg bg-sky-600 px-4 py-2 text-center text-sm font-medium text-white shadow-sm transition hover:bg-sky-700"
                  >
                    Contáctanos ahora
                  </Link>
                </div>

                {/* Servicios relacionados */}
                <div className="rounded-2xl border border-sky-100 bg-white p-6 shadow-sm">
                  <h4 className="text-base font-semibold text-sky-900 mb-3">
                    Nuestros Servicios
                  </h4>
                  <ul className="space-y-2 text-sm text-sky-800/90">
                    <li className="flex items-center gap-2"><FaBook className="text-sky-600" /> Contabilidad</li>
                    <li className="flex items-center gap-2"><FaUsers className="text-sky-600" /> Laboral</li>
                    <li className="flex items-center gap-2"><FaFileInvoice className="text-sky-600" /> Tributaria</li>
                    <li className="flex items-center gap-2"><FaChartBar className="text-sky-600" /> Financiera</li>
                    <li className="flex items-center gap-2"><FaCircleCheck className="text-sky-600" /> Confirming</li>
                    <li className="flex items-center gap-2"><FaFileInvoiceDollar className="text-sky-600" /> Gestión de Cobranza</li>
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}