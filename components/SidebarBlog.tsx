'use client';
import Link from 'next/link';
import { posts } from '../data/posts';


export default function SidebarBlog() {
  return (
    <aside className="sticky top-24 self-start">
      <h3 className="text-lg font-semibold text-sky-900 mb-4">Mercado financiero</h3>
      <div className="space-y-5">
        {posts.slice(0, 3).map(p => (
          <article
            key={p.id}
            className="border rounded-lg overflow-hidden hover:shadow-md transition"
          >
            <img src={p.image} alt={p.title} className="w-full h-32 object-cover" />
            <div className="p-3">
              <h4 className="text-sm font-medium text-gray-900 line-clamp-2">{p.title}</h4>
              <p className="text-xs text-gray-500 mt-1">{p.date}</p>
              <p className="text-sm text-gray-600 mt-2 line-clamp-3">{p.excerpt}</p>
              <Link
                href={p.href}
                className="text-sm text-sky-900 mt-2 inline-block hover:underline font-medium"
              >
                Ver más →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </aside>
  );
}