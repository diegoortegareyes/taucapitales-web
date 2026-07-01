import type { Metadata } from "next";
import Link from "next/link";
import { FaPhone } from "react-icons/fa6";

export const metadata: Metadata = {
  title: "Servicios | Tau Servicios Empresas",
  description:
    "Contabilidad, laboral, tributaria, financiera, factoring, confirming y gestión de cobranza: asesoría integral para hacer crecer tu pyme.",
  alternates: { canonical: "https://www.taucapitales.cl/servicios" },
  openGraph: {
    title: "Servicios | Tau Servicios Empresas",
    description:
      "Asesoría integral para pymes: contabilidad, laboral, tributaria, financiera, factoring, confirming y cobranza.",
    url: "https://www.taucapitales.cl/servicios",
    siteName: "Tau Servicios Empresas",
    locale: "es_CL",
    type: "website",
  },
};

const servicios = [
  {
    key: "contabilidad",
    title: "Contabilidad",
    desc:
      "Fortalecemos la gestión contable para asegurar cumplimiento normativo y claridad financiera.",
    bullets: [
      "Contabilidad mensual y emisión de comprobantes",
      "Inventarios, activos fijos y conciliaciones",
      "Libros contables y estados financieros",
      "Reconstrucción de contabilidades e implementación de sistemas",
      "Informes de gestión para bancos",
    ],
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden>
        <path
          fill="currentColor"
          d="M7 3h10a2 2 0 0 1 2 2v14l-4-2-4 2-4-2-4 2V5a2 2 0 0 1 2-2h2Z"
        />
      </svg>
    ),
  },
  {
    key: "laboral",
    title: "Laboral",
    desc:
      "Administración laboral integral para minimizar riesgos y cumplir la normativa.",
    bullets: [
      "Contratos, liquidaciones y finiquitos",
      "Remuneraciones y cargas previsionales",
      "Licencias electrónicas y certificados F30/F30-1",
      "Registro electrónico y fiscalizaciones",
      "Reglamento interno",
    ],
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden>
        <path
          fill="currentColor"
          d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Zm-7 9v-1a7 7 0 0 1 14 0v1Z"
        />
      </svg>
    ),
  },
  {
    key: "tributaria",
    title: "Tributaria",
    desc:
      "Planificación y cumplimiento tributario para pagar lo justo, a tiempo y sin multas.",
    bullets: [
      "IVA y Renta mensuales/anuales",
      "Planificación para PYMEs y DJ anuales",
      "Defensas ante SII y saneamiento",
      "Exenciones, franquicias y devoluciones",
      "Regularización fiscal",
    ],
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden>
        <path
          fill="currentColor"
          d="M3 4h18v2H3zm2 5h14v2H5zm-2 5h18v2H3zm2 5h14v2H5z"
        />
      </svg>
    ),
  },
  {
    key: "financiera",
    title: "Financiera",
    desc:
      "Gestión estratégica para mejorar liquidez, control interno y toma de decisiones.",
    bullets: [
      "Diagnóstico y KPIs (liquidez, rentabilidad, rotación)",
      "Estructura financiera y negociación bancaria",
      "Flujos de caja y presupuestos",
      "Optimización de inventarios",
      "Controles internos",
    ],
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden>
        <path
          fill="currentColor"
          d="M3 13h4v8H3zm7-6h4v14h-4zM17 3h4v18h-4z"
        />
      </svg>
    ),
  },
  {
    key: "factoring",
    title: "Factoring",
    desc: "Liquidez inmediata anticipando el pago de tus facturas por cobrar.",
    bullets: [
      "Anticipo de facturas",
      "Financiamiento flexible",
      "Reducción de riesgo de incobrabilidad",
      "Capital de trabajo eficiente",
    ],
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden>
        <path
          fill="currentColor"
          d="M12 1 3 5v6c0 5 3.8 9.7 9 11 5.2-1.3 9-6 9-11V5Zm0 18a7 7 0 0 1-7-7V6.3l7-3.1 7 3.1V12a7 7 0 0 1-7 7Z"
        />
      </svg>
    ),
  },
  {
    key: "confirming",
    title: "Confirming",
    desc:
      "Gestión de pagos a proveedores con pago anticipado y mejores condiciones.",
    bullets: [
      "Administración de órdenes de pago",
      "Anticipo a proveedores",
      "Relaciones comerciales optimizadas",
      "Transparencia y trazabilidad",
    ],
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden>
        <path
          fill="currentColor"
          d="M4 4h7v7H4zm9 0h7v7h-7zM4 13h7v7H4zm9 7v-7h7v7z"
        />
      </svg>
    ),
  },
  {
    key: "cobranza",
    title: "Gestión de Cobranza",
    desc:
      "Recuperación profesional de cuentas por cobrar con enfoque preventivo.",
    bullets: [
      "Cobranza preventiva y extrajudicial",
      "Negociación de acuerdos de pago",
      "Seguimiento permanente de deudores",
      "Reportes periódicos de cartera",
    ],
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden>
        <path
          fill="currentColor"
          d="M12 3a9 9 0 1 0 9 9h-2a7 7 0 1 1-7-7V3l4 2-4 2V5Z"
        />
      </svg>
    ),
  },
];

export default function ServiciosSection() {
  return (
    <section id="servicios" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-12">
          {/* Columna izquierda (2/3) con los servicios */}
          <div className="lg:col-span-2">
            <div className="mx-auto max-w-2xl lg:max-w-none">
              <h2 className="text-3xl font-bold tracking-tight text-sky-900 sm:text-4xl">
                Nuestros Servicios
              </h2>
              <p className="mt-3 text-base leading-7 text-sky-700">
                Asesoría integral para impulsar tu negocio: contabilidad,
                laboral, tributaria, financiera, factoring, confirming y gestión
                de cobranza.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {servicios.map((s) => (
                <article
                  key={s.key}
                  className="group rounded-2xl border border-sky-100 bg-white p-6 shadow-sm transition hover:shadow-md focus-within:shadow-md"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-sky-50 text-sky-700 ring-1 ring-sky-100">
                      {s.icon}
                    </span>
                    <h3 className="text-lg font-semibold text-sky-900">
                      {s.title}
                    </h3>
                  </div>

                  <p className="mt-3 text-sm text-sky-800/90">{s.desc}</p>

                  <ul className="mt-4 space-y-1.5 text-sm text-sky-800/90">
                    {s.bullets.map((b, i) => (
                      <li key={i} className="flex gap-2">
                        <span
                          aria-hidden
                          className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-sky-400"
                        />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-4">
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center rounded-2xl bg-sky-700 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-sky-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-600"
              >
                Solicitar asesoría
              </Link>
              <Link
                href="/quienes-somos"
                className="inline-flex items-center justify-center rounded-2xl border border-sky-200 bg-white px-5 py-3 text-sm font-medium text-sky-800 shadow-sm transition hover:border-sky-300 hover:bg-sky-50"
              >
                Conoce nuestra misión
              </Link>
            </div>
          </div>

          {/* Columna derecha (1/3) con "¿Hablamos?" */}
          <aside className="mt-12 lg:mt-0">
            <div className="lg:sticky lg:top-12 space-y-6">
              <div className="rounded-2xl border p-6 bg-sky-50 text-center shadow-sm">
                <h4 className="text-lg font-semibold text-sky-900 mb-2 flex items-center justify-center gap-2">
                  <FaPhone className="text-sky-700" /> ¿Hablamos?
                </h4>
                <p className="text-sm text-gray-700">
                  Conversemos sobre tus necesidades y te proponemos una solución
                  concreta para tu empresa.
                </p>
                <p className="mt-2 text-sm text-gray-700">
                  Respuesta rápida y trato cercano. Atendemos PYMES de distintos
                  rubros en todo Chile.
                </p>
                <p className="mt-2 text-xs text-sky-800/90">
                  Horario: Lun a Vie · 9:00–18:00 · Providencia, Chile
                </p>
                <a
                  href="/contacto"
                  className="mt-4 inline-flex items-center justify-center rounded-xl px-5 py-2 text-sm font-medium text-white bg-sky-900 hover:bg-sky-800 transition"
                >
                  Contáctanos ahora
                </a>
              </div>

              <div className="rounded-2xl border p-5 shadow-sm">
                <p className="text-sm font-semibold text-sky-900">¿Tienes dudas?</p>
                <p className="mt-1 text-sm text-sky-900/90">
                  También podemos coordinar una llamada breve para entender tu
                  caso y contarte cómo trabajamos.
                </p>
                <a
                  href="/contacto"
                  className="mt-3 inline-block text-xs font-medium text-sky-800 hover:underline"
                >
                  Agenda una llamada →
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}