export type Noticia = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  image: string;
  date: string; // ISO yyyy-mm-dd
  // Si content está definido, la ruta dinámica /noticias/[slug] la renderiza
  // automáticamente. Las 3 noticias originales tienen página propia escrita
  // a mano (app/noticias/noticia-1|2|3) y no necesitan 'content' aquí.
  content?: string[];
  claves?: string[];
};

export const noticias: Noticia[] = [
  {
    slug: "noticia-1",
    title:
      "Nueva sociedad entre Anglo American y Codelco",
    category: "Mercado minero · Chile",
    excerpt:
      "El Estado chileno se queda con la mayor parte de los beneficios gracias a impuestos y royalties.",
    image: "/noticia1.png",
    date: "2025-09-10",
  },
  {
    slug: "noticia-2",
    title: "Pagos atrasados: 80% de PYMES afectadas",
    category: "Pymes · Chile",
    excerpt:
      "Estudio de Asech y RedCapital revela incumplimientos masivos de la Ley de Pago a 30 días.",
    image: "/noticia2.png",
    date: "2025-09-22",
  },
  {
    slug: "noticia-3",
    title: "Bladex debuta en la Bolsa de Santiago",
    category: "Mercado financiero",
    excerpt:
      "El banco panameño ingresa al mercado chileno para expandir su presencia en la región.",
    image: "/noticia3.png",
    date: "2025-09-25",
  },
];
