// app/noticias/noticia-3/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Bladex debuta en la Bolsa de Santiago | Tau Servicios Empresas",
  description:
    "El banco panameño ingresa al mercado chileno para expandir su presencia en la región.",
  alternates: { canonical: "https://www.taucapitales.cl/noticias/noticia-3" },
  openGraph: { type: "article" },
};

export default function Noticia3() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-12 bg-white grid lg:grid-cols-12 gap-10">
      {/* CONTENIDO PRINCIPAL */}
      <article className="lg:col-span-9 space-y-6">
        {/* Eyebrow + título */}
        <p className="text-xs uppercase tracking-wider text-sky-700/80 font-semibold">
          Finanzas · Mercado chileno
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-sky-900 leading-tight">
          📊 Bladex debuta en la Bolsa de Santiago con fuerte apuesta por el mercado chileno
        </h1>
        <h2 className="text-lg md:text-xl font-medium text-sky-800">
          🔔 Un hito para la integración bursátil regional
        </h2>

        {/* Bajada */}
        <p className="text-[15px] md:text-base text-gray-700 leading-relaxed text-justify">
          El Banco Latinoamericano de Comercio Exterior (Bladex) comenzó a cotizar en la Bolsa de Santiago,
          convirtiéndose en la primera entidad extranjera en listarse bajo el régimen de valores extranjeros.
          La ceremonia de apertura estuvo encabezada por su presidente ejecutivo, Jorge Salas, y marca
          un paso estratégico en la integración financiera regional.
        </p>

        {/* Imagen controlada */}
        <figure className="rounded-2xl overflow-hidden ring-1 ring-sky-100 bg-gradient-to-br from-sky-50/50 to-white">
          <Image
            src="/noticia3.png"
            alt="Debut de Bladex en la Bolsa de Santiago"
            width={1200}
            height={630}
            className="w-full h-64 md:h-80 object-cover"
          />
          <figcaption className="px-4 py-2 text-xs text-sky-900/80">
            Bladex celebra su campanazo en la Bolsa de Santiago, consolidando su expansión regional.
          </figcaption>
        </figure>

        {/* ¿Qué es Bladex? */}
        <section className="space-y-5 text-gray-700 leading-relaxed text-justify">
          <h3 className="text-xl font-semibold text-sky-900">📌 ¿Qué es Bladex?</h3>
          <p>
            Fundado en 1979 en Panamá, Bladex nació como un <em>banco de bancos</em>, impulsado por instituciones
            centrales y estatales de América Latina para financiar el comercio exterior. Actualmente opera en
            Nueva York, Panamá y Buenos Aires, y se posiciona como un actor clave en el financiamiento regional,
            especialmente en dólares.
          </p>
        </section>

        {/* Cifras claves */}
        <section className="rounded-2xl border p-5 bg-gradient-to-br from-sky-50/40 to-white ring-1 ring-sky-100">
          <h3 className="text-lg font-semibold text-sky-900">💰 Cifras claves del debut bursátil en Chile</h3>
          <ul className="mt-2 space-y-1.5 text-sm text-sky-900/90">
            <li>• 36 millones de acciones en circulación.</li>
            <li>• Precio de cada acción: <strong>US$ 47,34</strong>.</li>
            <li>• 17% de propiedad en manos de bancos centrales y estatales de la región.</li>
            <li>• Principales inversionistas: Brandes (6,1%), BlackRock (5,9%), LSV Asset Management (4,2%).</li>
            <li>• Listado corresponde a un <em>cross-listing</em>, sin emisión de nuevas acciones.</li>
          </ul>
        </section>

        {/* ¿Por qué Chile? */}
        <section className="space-y-5 text-gray-700 leading-relaxed text-justify">
          <h3 className="text-xl font-semibold text-sky-900">🇨🇱 ¿Por qué Chile?</h3>
          <p>
            Según Jorge Salas, Chile ofrece estabilidad macroeconómica, fundamentos sólidos y regulación moderna.
            La presencia en Santiago permite mayor visibilidad, cobertura de analistas y acceso directo a inversionistas
            locales como fondos mutuos y de pensiones. El marco regulatorio facilita además transar acciones
            extranjeras en pesos chilenos.
          </p>

          <h3 className="text-xl font-semibold text-sky-900">🔮 Proyecciones y visión estratégica</h3>
          <p>
            El ingreso a la Bolsa de Santiago es parte de un plan más amplio de fortalecimiento regional. Bladex
            busca crecer en préstamos sindicados, financiamiento estructurado y bonos en dólares, manteniendo
            su política de dividendos sólidos para atraer a inversionistas en busca de retornos estables.
          </p>

          <h3 className="text-xl font-semibold text-sky-900">🧩 En resumen</h3>
          <p>
            Bladex abre camino para que más emisores extranjeros lleguen a Chile bajo este régimen, reforzando al
            país como hub financiero regional. La entidad consolida así su rol como un actor clave en la integración
            de los mercados de capitales latinoamericanos.
          </p>
        </section>

        {/* CTA inferior → volver al inicio */}
        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium border border-sky-200 text-sky-900 hover:bg-sky-50"
          >
            ← Volver al inicio
          </Link>
        </div>
      </article>

      {/* ASIDE (estándar) */}
      <aside className="lg:col-span-3">
        <div className="lg:sticky lg:top-12 space-y-6">
          <div className="rounded-2xl border p-6 bg-sky-50 shadow-sm">
            <h3 className="text-lg font-semibold text-sky-900 mb-1">📞 ¿Hablamos?</h3>
            <p className="text-sm text-gray-700">
              Conversemos sobre tu empresa y el plan que mejor se adapte a tus metas.
            </p>
            <Link
              href="/contacto"
              className="mt-3 block rounded-lg bg-sky-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-sky-800"
            >
              Contáctanos
            </Link>
          </div>

          <div className="rounded-2xl border p-6 shadow-sm">
            <h4 className="text-base font-semibold text-sky-900 mb-3">Nuestros Servicios</h4>
            <ul className="space-y-2 text-sm text-sky-900/90">
              <li>💸 Factoring</li>
              <li>✅ Confirming</li>
              <li>📥 Gestión de Cobranza</li>
              <li>📘 Contabilidad</li>
              <li>📊 Finanzas</li>
              <li>🏢 Gestión Empresarial</li>
            </ul>
          </div>
        </div>
      </aside>
    </main>
  );
}