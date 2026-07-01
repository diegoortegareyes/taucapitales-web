// app/noticias/noticia-2/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Pagos atrasados: 80% de PYMES afectadas | Tau Servicios Empresas",
  description:
    "Estudio de Asech y RedCapital revela incumplimientos masivos de la Ley de Pago a 30 días.",
  alternates: { canonical: "https://www.taucapitales.cl/noticias/noticia-2" },
  openGraph: { type: "article" },
};

export default function Noticia2() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-12 bg-white grid lg:grid-cols-12 gap-10">
      {/* CONTENIDO PRINCIPAL */}
      <article className="lg:col-span-9 space-y-6">
        {/* Eyebrow + título */}
        <p className="text-xs uppercase tracking-wider text-sky-700/80 font-semibold">
          Pymes · Chile
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-sky-900 leading-tight">
          📰 Resumen ampliado — Las PYMES siguen resintiendo pagos tardíos, a pesar de la ley que fija un plazo de 30 días
        </h1>

        {/* Bajada */}
        <p className="text-[15px] md:text-base text-gray-700 leading-relaxed text-justify">
          A cinco años de la Ley de Pago a 30 días, un estudio de Asech y RedCapital revela que los incumplimientos
          permanecen generalizados: la mayoría de las PYMES continúa recibiendo pagos fuera de plazo, afectando su liquidez,
          competitividad e incluso su supervivencia.
        </p>

        {/* Imagen controlada */}
        <figure className="rounded-2xl overflow-hidden ring-1 ring-sky-100 bg-gradient-to-br from-sky-50/50 to-white">
          <Image
            src="/noticia2.png"
            alt="Pagos a PYMES y cumplimiento de la Ley de 30 días"
            width={1200}
            height={630}
            className="w-full h-64 md:h-80 object-cover"
          />
          <figcaption className="px-4 py-2 text-xs text-sky-900/80">
            Ley de Pago a 30 días: avances normativos con brechas persistentes en el cumplimiento real.
          </figcaption>
        </figure>

        {/* Resultados clave */}
        <section className="rounded-2xl border p-5 bg-gradient-to-br from-sky-50/40 to-white ring-1 ring-sky-100">
          <h2 className="text-lg font-semibold text-sky-900">📊 Resultados clave del estudio (Asech y RedCapital)</h2>
          <ul className="mt-2 space-y-1.5 text-sm text-sky-900/90">
            <li>• El <strong>80%</strong> de las PYMES afirma que sus clientes no respetan el plazo legal.</li>
            <li>• El <strong>44%</strong> recibe pagos con promedio superior a 30 días.</li>
            <li>• Dentro de ese grupo: <strong>35,6%</strong> entre 31 y 60 días; solo <strong>11,2%</strong> recibe dentro del plazo.</li>
            <li>• Los principales deudores: empresas de mayor tamaño, que debieran liderar el cumplimiento.</li>
          </ul>
        </section>

        {/* ¿Qué establece la ley? */}
        <section className="space-y-5 text-gray-700 leading-relaxed text-justify">
          <h3 className="text-xl font-semibold text-sky-900">🧾 ¿Qué establece la ley?</h3>
          <p>
            Promulgada en 2019 y plenamente vigente desde 2021, la normativa fija un máximo de <strong>30 días corridos</strong>
            para el pago de facturas, salvo acuerdos explícitos y firmados que extiendan el plazo. Aplica a compañías privadas
            y entidades del Estado, y busca equilibrar la relación entre grandes compradores y proveedores más pequeños.
          </p>

          <h3 className="text-xl font-semibold text-sky-900">🚨 Problemas estructurales y operativos</h3>
          <ul className="list-disc pl-6 space-y-1.5">
            <li><strong>Falta de fiscalización efectiva:</strong> escasez de sanciones claras y disuasivas.</li>
            <li><strong>Asimetría de poder:</strong> las PYMES temen exigir cumplimiento por perder al cliente.</li>
            <li><strong>Limitaciones de gestión:</strong> recursos humanos y tecnológicos insuficientes para cobrar sistemáticamente.</li>
          </ul>

          <h3 className="text-xl font-semibold text-sky-900">💬 Preocupaciones del sector</h3>
          <p>
            Según gremios como ASECH, el incumplimiento afecta severamente la operación de miles de empresas:
            menor liquidez, mayores costos financieros, dificultad para planificar e invertir y, en casos críticos,
            riesgos de continuidad.
          </p>

          <h3 className="text-xl font-semibold text-sky-900">📌 Conclusión</h3>
          <p>
            Sin fiscalización y sanciones robustas, y sin cambios culturales entre grandes compradores, la Ley de Pago a 30 días
            seguirá siendo insuficiente. Para las PYMES, el retraso en los pagos continúa siendo uno de los principales
            obstáculos para crecer y competir.
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