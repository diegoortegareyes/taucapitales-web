// app/noticias/noticia-1/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Nueva sociedad entre Anglo American y Codelco | Tau Servicios Empresas",
  description:
    "El Estado chileno se queda con la mayor parte de los beneficios gracias a impuestos y royalties.",
  alternates: { canonical: "https://www.taucapitales.cl/noticias/noticia-1" },
  openGraph: { type: "article" },
};

export default function Noticia1() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-12 bg-white grid lg:grid-cols-12 gap-10">
      {/* CONTENIDO PRINCIPAL */}
      <article className="lg:col-span-9 space-y-6">
        {/* Eyebrow + título */}
        <p className="text-xs uppercase tracking-wider text-sky-700/80 font-semibold">
          Mercado minero · Chile
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-sky-900 leading-tight">
          📰 Anglo American y Codelco sellan histórica alianza: Estado chileno captará la mayor parte de los beneficios
        </h1>

        {/* Bajada */}
        <p className="text-[15px] md:text-base text-gray-700 leading-relaxed text-justify">
          Anglo American Sur y Codelco constituirán una nueva empresa minera en el distrito de Los Bronces.
          El acuerdo permitirá aprovechar sinergias y reducir costos, mientras que el Estado chileno captará
          cerca del 75% de los beneficios gracias a impuestos, royalty y dividendos.
        </p>

        {/* Imagen */}
        <figure className="rounded-2xl overflow-hidden ring-1 ring-sky-100 bg-gradient-to-br from-sky-50/50 to-white">
          <Image
            src="/noticia1.png"
            alt="Los Bronces / Anglo American y Codelco"
            width={1200}
            height={630}
            className="w-full h-64 md:h-80 object-cover"
          />
          <figcaption className="px-4 py-2 text-xs text-sky-900/80">
            Distrito minero de Los Bronces: alianza público-privada estratégica para Chile.
          </figcaption>
        </figure>

        {/* Resumen ampliado */}
        <section className="space-y-4 text-gray-700 leading-relaxed text-justify">
          <p>
            Una nueva empresa minera será constituida en el distrito de Los Bronces, tras un inédito acuerdo
            entre <strong>Anglo American Sur</strong> y <strong>Codelco</strong>, la mayor minera estatal del cobre.
            Esta sociedad conjunta integrará las operaciones de Los Bronces Integrado con parte de la División
            Andina, permitiendo aprovechar infraestructura compartida y optimizar el impacto ambiental.
          </p>
          <p>
            Lo más llamativo es que, aunque Codelco no será socio mayoritario, el Estado chileno captará alrededor
            del <strong>75% del valor económico</strong> generado (USD $3.750 millones de un total de USD $5.000 millones),
            gracias a su capacidad de recaudación vía impuestos, royalty y dividendos.
          </p>
        </section>

        {/* Claves del acuerdo */}
        <section className="rounded-2xl border p-5 bg-gradient-to-br from-sky-50/40 to-white ring-1 ring-sky-100">
          <h2 className="text-lg font-semibold text-sky-900">📊 Claves del acuerdo</h2>
          <ul className="mt-2 space-y-1.5 text-sm text-sky-900/90">
            <li>• Nueva empresa (&quot;OpCo&quot;) gestionará la operación combinada en Los Bronces.</li>
            <li>• Producción proyectada: más de <strong>320.000 toneladas</strong> de cobre fino anuales.</li>
            <li>• Vida útil extendida en al menos <strong>30 años</strong>, con empleo e inversión sostenida.</li>
            <li>• Sinergias logísticas: chancadores, concentradoras, tranques y accesos compartidos.</li>
          </ul>
        </section>

        {/* ¿Por qué es relevante? */}
        <section className="space-y-5 text-gray-700 leading-relaxed text-justify">
          <h3 className="text-xl font-semibold text-sky-900">🧩 ¿Por qué es relevante?</h3>
          <p>
            El acuerdo marca un nuevo modelo de colaboración público-privada, donde una empresa estatal y una
            transnacional convergen intereses estratégicos en lugar de competir. Esto optimiza recursos, genera
            mayor valor colectivo y refleja cómo, bajo la legislación tributaria vigente, el Estado puede captar
            beneficios significativos sin inyectar capital adicional.
          </p>
          <p>
            Además, permite a Codelco aprovechar recursos de alta ley sin asumir todos los costos, mientras el
            Fisco obtiene ingresos frescos en un contexto de necesidades fiscales crecientes.
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