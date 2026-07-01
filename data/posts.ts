export type Post = {
  id: string;
  title: string;
  excerpt: string;
  href: string;
  image: string;
  date?: string;
};

export const posts: Post[] = [
  {
    id: '1',
    title: 'Dólar cierra al alza',
    excerpt: 'Reacción a datos de empleo en EE.UU. y expectativas de tasas.',
    href: '#',
    image: '/noticia1.jpg',
    date: '2025-09-12',
  },
  {
    id: '2',
    title: 'Tasas para pymes',
    excerpt: 'Panorama semanal de financiamiento y liquidez.',
    href: '#',
    image: '/noticia2.jpg',
    date: '2025-09-11',
  },
  {
    id: '3',
    title: 'Proyección de inflación',
    excerpt: 'Banco Central ajusta senda de política monetaria.',
    href: '#',
    image: '/noticia3.jpg',
    date: '2025-09-10',
  },
];