import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { noticias } from "../../../data/noticias";

// Los slugs "noticia-1", "noticia-2" y "noticia-3" tienen una página propia
// escrita a mano (app/noticias/noticia-1|2|3/page.tsx) con contenido más
// detallado; esas rutas estáticas tienen prioridad sobre esta ruta dinámica.
// Esta página dinámica sirve automáticamente cualquier noticia nueva que se
// agregue a data/noticias.ts con el campo `content` definido, sin necesidad
// de crear una carpeta nueva por artículo.

export function generateStaticParams() {
  return noticias
    .filter((n) => n.content)
    .map((n) => ({ slug: n.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const noticia = noticias.find((n) => n.slug === params.slug);
  if (!noticia) return {};

  return {
    title: `${noticia.title} | Tau Servicios Empresas`,
    description: noticia.excerpt,
    alternates: {
      canonical: `https://www.taucapitales.cl/noticias/${noticia.slug}`,
    },
    openGraph: {
      title: noticia.title,
      description: noticia.excerpt,
      url: `https://www.taucapitales.cl/noticias/${noticia.slug}`,
      siteName: "Tau Servicios Empresas",
      locale: "es_CL",
      type: "article",
    },
  };
}

export default function NoticiaPage({
  params,
}: {
  params: { slug: string };
}) {
  const noticia = noticias.find((n) => n.slug === params.slug && n.content);
  if (!noticia) notFound();

  return (
    <main className="max-w-7xl mx-auto px-4 py-12 bg-white grid lg:grid-cols-12 gap-10">
      <article className="lg:col-span-9 space-y-6">
        <p className="text-xs uppercase tracking-wider text-sky-700/80 font-semibold">
          {noticia.category}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-sky-900 leading-tight">
          {noticia.title}
        </h1>
        <p className="text-[15px] md:text-base text-gray-700 leading-relaxed text-justify">
          {noticia.excerpt}
        </p>

        <figure className="rounded-2xl overflow-hidden ring-1 ring-sky-100 bg-gradient-to-br from-sky-50/50 to-white">
          <Image
            src={noticia.image}
            alt={noticia.title}
            width={1200}
            height={630}
            className="w-full h-64 md:h-80 object-cover"
          />
        </figure>

        <section className="space-y-4 text-gray-700 leading-relaxed text-justify">
          {noticia.content?.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </section>

        {noticia.claves && noticia.claves.length > 0 && (
          <section className="rounded-2xl border p-5 bg-gradient-to-br from-sky-50/40 to-white ring-1 ring-sky-100">
            <h2 className="text-lg font-semibold text-sky-900">
              Claves
            </h2>
            <ul className="mt-2 space-y-1.5 text-sm text-sky-900/90">
              {noticia.claves.map((c, i) => (
                <li key={i}>• {c}</li>
              ))}
            </ul>
          </section>
        )}

        <div className="pt-2">
          <Link
            href="/noticias"
            className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium border border-sky-200 text-sky-900 hover:bg-sky-50"
          >
            ← Volver a noticias
          </Link>
        </div>
      </article>

      <aside className="lg:col-span-3">
        <div className="lg:sticky lg:top-12 space-y-6">
          <div className="rounded-2xl border p-6 bg-sky-50 shadow-sm">
            <h3 className="text-lg font-semibold text-sky-900 mb-1">
              ¿Hablamos?
            </h3>
            <p className="text-sm text-gray-700">
              Conversemos sobre tu empresa y el plan que mejor se adapte a tus
              metas.
            </p>
            <Link
              href="/contacto"
              className="mt-3 block rounded-lg bg-sky-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-sky-800"
            >
              Contáctanos
            </Link>
          </div>
        </div>
      </aside>
    </main>
  );
}
