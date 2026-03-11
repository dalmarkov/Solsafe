'use client';

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  // Функция для плавного скролла вверх при клике на логотип (если мы на главной)
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#F7F6F2] text-[#1a1a1a] py-10 px-8 border-t border-black/5">
      <div className="max-w-[1440px] mx-auto grid md:grid-cols-3 gap-10 border-b border-black/5 pb-16">
        
        {/* ЛОГОТИП */}
        <div>
          <Link href="/" onClick={scrollToTop} className="inline-block mb-8 hover:opacity-80 transition-opacity">
            <Image 
              src="/logo_solsafe.png"
              alt="Solsafe Logo" 
              width={140}
              height={45}
              className="object-contain brightness-0"
            />
          </Link>
          <p className="text-gray-500 text-sm font-light leading-relaxed max-w-xs">
            Inteligentne rozwiązania energetyczne dla Twojego domu i firmy. Przyszłość zaczyna się na Twoim dachu.
          </p>
        </div>

        {/* НАВИГАЦИЯ (ОБНОВЛЕННЫЕ ПУТИ) */}
        <div className="space-y-6">
          <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-black/20">Nawigacja</h4>
          <ul className="text-[10px] space-y-4 text-gray-500 font-bold uppercase tracking-[0.2em]">
            <li>
              <Link href="/dla-firmy" className="hover:text-black transition">Dla firmy</Link>
            </li>
            <li>
              <Link href="/farmy" className="hover:text-black transition">Farmy fotowoltaiczne</Link>
            </li>
            <li>
              <Link href="/dla-domu" className="hover:text-black transition">Dla domu</Link>
            </li>
            <li>
              <Link href="/realizacje" className="hover:text-black transition">Realizacje</Link>
            </li>
            <li>
              <Link href="/biuro-rachunkowe" className="hover:text-black transition">Biuro Rachunkowe</Link>
            </li>
          </ul>
        </div>

        {/* КОНТАКТЫ */}
        <div className="space-y-6">
          <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-black/20">Kontakt</h4>
          <div className="space-y-2">
            <p className="text-sm text-gray-500 font-light italic">Bielsko-Biała, Polska</p>
            {/* Добавил ссылку на отдельную страницу контактов, так как она у тебя есть в структуре */}
            <Link href="/kontakt" className="block text-sm text-gray-500 font-light hover:text-black transition mb-2">
              Strona kontaktowa
            </Link>
            <a href="mailto:biuro@solsafe.pl" className="block text-sm text-gray-500 font-light hover:text-black transition">
              biuro@solsafe.pl
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto pt-5 text-[9px] text-gray-400 uppercase tracking-[0.4em] font-bold flex flex-col sm:flex-row justify-between items-center gap-4">
        <span>© 2026 Solsafe. Wszelkie prawa zastrzeżone.</span>
        <div className="flex gap-8">
          <a href="#" className="hover:text-black transition">Facebook</a>
          <a href="#" className="hover:text-black transition">Instagram</a>
        </div>
      </div>
    </footer>
  );
}