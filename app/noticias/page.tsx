import type { Metadata } from "next";
import Link from "next/link";
import { noticias } from "../../data/noticias";

export const metadata: Metadata = {
  title: "Mercado financiero | Tau Servicios Empresas",
  description:
    "Noticias y análisis del mercado financiero chileno: pymes, factoring, tasas y actualidad económica relevante para tu empresa.",
  alternates: { canonical: "https://www.taucapitales.cl/noticias" },
  openGraph: {
    title: "Mercado financiero | Tau Servicios Empresas",
    description:
      "Noticias y análisis del mercado financiero chileno relevantes para pymes y empresas.",
    url: "https://www.taucapitales.cl/noticias",
    siteName: "Tau Servicios Empresas",
    locale: "es_CL",
    type: "website",
  },
};

export default function NoticiasPage() {
  const ordenadas = [...noticias].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-sky-900">
        Mercado financiero
      </h1>
      <p className="mt-3 text-gray-700 max-w-2xl">
        Noticias y análisis de actualidad económica y financiera relevantes
        para pymes y empresas en Chile.
      </p>

      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {ordenadas.map((n) => (
          <article
            key={n.slug}
            className="rounded-2xl border overflow-hidden bg-gradient-to-br from-sky-50 to-white ring-1 ring-sky-100 hover:shadow-md transition"
          >
            <img
              src={n.image}
              alt={n.title}
              className="h-40 w-full object-cover"
              loading="lazy"
            />
            <div className="p-4">
              <p className="text-xs uppercase tracking-wide text-sky-700/80 font-semibold">
                {n.category}
              </p>
              <h2 className="mt-1 font-semibold text-sky-900 leading-snug">
                {n.title}
              </h2>
              <p className="text-sm text-sky-900/80 mt-2">{n.excerpt}</p>
              <Link
                href={`/noticias/${n.slug}`}
                className="text-sm text-sky-700 hover:underline font-medium mt-3 inline-block"
              >
                Ver más →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
