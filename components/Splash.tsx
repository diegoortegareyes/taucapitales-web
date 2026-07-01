'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Splash() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // 1) después de 1 segundo aplica fade-out
    const t1 = setTimeout(() => {
      const el = document.getElementById('splash-root');
      if (el) el.classList.add('animate-fade-out');
    }, 1000);

    // 2) después de 1.7 segundos desmonta el splash
    const t2 = setTimeout(() => {
      setShow(false);
    }, 1700);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (!show) return null;

  return (
    <div
      id="splash-root"
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
    >
      <Image
        src="/logo.png"
        alt="Tau Capitales"
        width={240}
        height={240}
        priority
        className="h-60 w-auto animate-scale-in"
        draggable={false}
      />
    </div>
  );
}
