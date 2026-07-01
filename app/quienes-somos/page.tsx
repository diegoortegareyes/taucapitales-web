import type { Metadata } from "next";
import { FaUserTie, FaHandshake, FaShieldAlt, FaChartLine, FaLightbulb } from "react-icons/fa";
import {
  FaPhone,
  FaBook,
  FaUsers,
  FaFileInvoice,
  FaChartBar,
  FaMoneyBillWave,
  FaCircleCheck,
  FaFileInvoiceDollar,
} from "react-icons/fa6";

export const metadata: Metadata = {
  title: "Quiénes somos | Tau Servicios Empresas",
  description:
    "Conoce a Tau Servicios Empresas: acompañamos a pymes chilenas con factoring, contabilidad y gestión financiera cercana, transparente y con visión de largo plazo.",
  alternates: { canonical: "https://www.taucapitales.cl/quienes-somos" },
  openGraph: {
    title: "Quiénes somos | Tau Servicios Empresas",
    description:
      "Acompañamos a pymes chilenas con soluciones financieras y de gestión a medida, con transparencia y agilidad.",
    url: "https://www.taucapitales.cl/quienes-somos",
    siteName: "Tau Servicios Empresas",
    locale: "es_CL",
    type: "website",
  },
};

export default function QuienesSomosPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 bg-white">
      {/* Encabezado */}
      <header className="mb-2">
        <p className="text-xs tracking-wider uppercase text-gray-500">TAU Servicios a Empresas</p>
        <h1 className="mt-2 text-4xl md:text-5xl font-extrabold text-sky-900">Quiénes somos</h1>
        <p className="mt-3 max-w-3xl text-[15px] md:text-base leading-relaxed text-gray-700 text-justify">
          En <span className="font-semibold">TAU Servicios a Empresas</span> impulsamos el crecimiento de las PYMES con
          soluciones financieras y de gestión a medida. Creemos en la transparencia, la agilidad y las relaciones de largo plazo.
        </p>
        <p className="mt-3 max-w-3xl text-[15px] md:text-base leading-relaxed text-gray-700 text-justify">
          Nos definimos como un equipo con una sólida trayectoria y experiencia en contabilidad, finanzas y gestión
          empresarial. Ofrecemos a nuestros clientes un acompañamiento cercano, confiable y adaptado a sus necesidades,
          construyendo confianza con profesionalismo y anticipando desafíos para entregar soluciones sólidas y duraderas.
        </p>
      </header>

      {/* Layout 3/4 izquierda + 1/4 derecha */}
      <div className="grid lg:grid-cols-12 gap-8 items-start">
        {/* Columna izquierda (3/4) */}
        <div className="lg:col-span-9 space-y-10">
          {/* POR QUÉ ELEGIRNOS */}
          <section id="por-que" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-semibold text-sky-900">¿Por qué elegirnos?</h2>
            <ul className="mt-3 list-disc pl-6 text-[15px] md:text-base leading-relaxed text-gray-700 space-y-2 text-justify">
              <li>
                <span className="font-medium">Experiencia y solidez comprobada:</span> llevamos años ayudando a PYMES a crecer; conocemos
                qué funciona y qué realmente impulsa a tu empresa.
              </li>
              <li>
                <span className="font-medium">Acompañamiento personalizado:</span> nos convertimos en un aliado cercano. Entendemos la
                realidad de cada PYME y adaptamos nuestras soluciones.
              </li>
              <li>
                <span className="font-medium">Visión a largo plazo:</span> pensamos en el crecimiento sostenido de tu negocio y te ayudamos a
                proyectarlo hacia el futuro.
              </li>
              <li>
                <span className="font-medium">Confianza y profesionalismo:</span> combinamos seriedad profesional con trato humano, para que
                siempre sientas que estás en buenas manos.
              </li>
              <li>
                <span className="font-medium">Resultados concretos y medibles:</span> trabajamos con metas claras y
                medibles, nada de promesas vacías.
              </li>
            </ul>
          </section>

          {/* MISIÓN */}
          <section id="mision" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-semibold text-sky-900">Nuestra misión</h2>
            <p className="mt-3 text-[15px] md:text-base leading-relaxed text-gray-700 text-justify">
              Convertirnos en el pilar de confianza de las pequeñas y medianas empresas, brindando soluciones empresariales que
              resuelvan sus necesidades presentes e impulsen su crecimiento futuro. Nos comprometemos a acompañar a cada cliente con
              un enfoque profesional, cercano y adaptable, para que alcance su verdadero potencial con la tranquilidad de estar en
              manos expertas.
            </p>
          </section>

          {/* VALORES */}
          <section id="valores" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-semibold text-sky-900">Nuestros valores</h2>
            <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  t: "Compromiso con el cliente",
                  d: "Ponemos a nuestros clientes en el centro: entendemos sus necesidades y brindamos un acompañamiento cercano y confiable.",
                  icon: <FaHandshake className="text-sky-700" />,
                },
                {
                  t: "Profesionalismo y excelencia",
                  d: "Actuamos con el más alto nivel profesional, cuidando cada detalle para ofrecer un servicio de excelencia.",
                  icon: <FaUserTie className="text-sky-700" />,
                },
                {
                  t: "Transparencia y honestidad",
                  d: "Construimos relaciones claras y honestas: comunicamos con transparencia para que sepas qué esperar.",
                  icon: <FaShieldAlt className="text-sky-700" />,
                },
                {
                  t: "Crecimiento conjunto",
                  d: "El éxito de tu PYME es nuestro éxito. Nos comprometemos a ser un apoyo constante en tu camino.",
                  icon: <FaChartLine className="text-sky-700" />,
                },
                {
                  t: "Adaptabilidad e innovación",
                  d: "Nos ajustamos a los cambios y buscamos nuevas formas de mejorar para ofrecer siempre lo mejor.",
                  icon: <FaLightbulb className="text-sky-700" />,
                },
              ].map((v) => (
                <div key={v.t} className="rounded-2xl border p-5 shadow-sm hover:shadow-md transition">
                  <div className="flex items-center gap-2 mb-1">
                    {v.icon}
                    <p className="font-semibold text-sky-900">{v.t}</p>
                  </div>
                  <p className="text-sm text-gray-600 text-justify">{v.d}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Columna derecha (1/4) */}
        <aside className="lg:col-span-3">
          {/* Aside bien arriba */}
          <div className="lg:sticky lg:top-0 lg:-mt-48 space-y-6">
            {/* Llamado a la acción contundente */}
            <div className="rounded-2xl border p-6 bg-sky-50 text-center shadow-sm">
              <h3 className="text-lg font-semibold text-sky-900 mb-2 flex items-center justify-center gap-2">
                <FaPhone className="text-sky-700" /> ¿Hablamos?
              </h3>
              <p className="text-sm text-gray-700 mb-4">
                Da el siguiente paso y conversemos sobre cómo podemos potenciar tu empresa.
              </p>
              <a
                href="/contacto"
                className="inline-flex items-center justify-center rounded-xl px-5 py-2 text-sm font-medium text-white bg-sky-900 hover:bg-sky-800 transition"
              >
                Contáctanos ahora
              </a>
            </div>

            {/* Servicios (solo títulos) */}
            <div className="rounded-2xl border p-5 shadow-sm">
              <h4 className="text-base font-semibold text-sky-900 mb-2">Servicios</h4>
              <ul className="space-y-1.5 text-sm text-sky-900/90">
                <li><a className="hover:underline flex items-center gap-2" href="/servicios"><FaBook className="text-sky-600" /> Contabilidad</a></li>
                <li><a className="hover:underline flex items-center gap-2" href="/servicios"><FaUsers className="text-sky-600" /> Laboral</a></li>
                <li><a className="hover:underline flex items-center gap-2" href="/servicios"><FaFileInvoice className="text-sky-600" /> Tributaria</a></li>
                <li><a className="hover:underline flex items-center gap-2" href="/servicios"><FaChartBar className="text-sky-600" /> Financiera</a></li>
                <li><a className="hover:underline flex items-center gap-2" href="/servicios"><FaMoneyBillWave className="text-sky-600" /> Factoring</a></li>
                <li><a className="hover:underline flex items-center gap-2" href="/servicios"><FaCircleCheck className="text-sky-600" /> Confirming</a></li>
                <li><a className="hover:underline flex items-center gap-2" href="/servicios"><FaFileInvoiceDollar className="text-sky-600" /> Gestión de Cobranza</a></li>
              </ul>
              <div className="mt-3">
                <a href="/servicios" className="inline-block text-xs font-medium text-sky-800 hover:underline">
                  Ver detalles de cada servicio →
                </a>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}