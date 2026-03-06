'use client';

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    // Меняем фон на светлую сепию и текст на темный
    <footer className="bg-[#F7F6F2] text-[#1a1a1a] py-20 px-8 border-t border-black/5">
      <div className="max-w-[1440px] mx-auto grid md:grid-cols-3 gap-12 border-b border-black/5 pb-16">
        
        {/* Логотип (теперь темный) */}
        <div>
          <Link href="/" onClick={scrollToTop} className="inline-block mb-8 hover:opacity-80 transition-opacity">
            <Image 
              src="/logo_solsafe.png"
              alt="Solsafe Logo" 
              width={140}
              height={45}
              // Фильтр brightness-0 делает белый логотип черным
              className="object-contain brightness-0"
            />
          </Link>
          <p className="text-gray-500 text-sm font-light leading-relaxed max-w-xs">
            Inteligentne rozwiązania energetyczne dla Twojego domu i firmy. Przyszłość zaczyna się na Twoim dachu.
          </p>
        </div>

        {/* Навигация */}
        <div className="space-y-6">
          {/* Заголовок секции чуть темнее для читаемости */}
          <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-black/20">Nawigacja</h4>
          <ul className="text-[10px] space-y-4 text-gray-500 font-bold uppercase tracking-[0.2em]">
            <li><a href="#firma-oferta" className="hover:text-black transition">Dla firmy</a></li>
            <li><a href="#farmy" className="hover:text-black transition">Farmy fotowoltaiczne</a></li>
            <li><a href="#dom" className="hover:text-black transition">Dla domu</a></li>
            <li><a href="#realizacje" className="hover:text-black transition">Realizacje</a></li>
            <li><a href="#biuro" className="hover:text-black transition">Biuro Rachunkowe</a></li>
          </ul>
        </div>

        {/* Контакты */}
        <div className="space-y-6">
          <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-black/20">Kontakt</h4>
          <div className="space-y-2">
            <p className="text-sm text-gray-500 font-light italic">Bielsko-Biała, Polska</p>
            <a href="mailto:biuro@solsafe.pl" className="block text-sm text-gray-500 font-light hover:text-black transition">
              biuro@solsafe.pl
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto pt-8 text-[9px] text-gray-400 uppercase tracking-[0.4em] font-bold flex flex-col sm:flex-row justify-between items-center gap-4">
        <span>© 2026 Solsafe. Wszelkie prawa zastrzeżone.</span>
        <div className="flex gap-8">
          <a href="#" className="hover:text-black transition">Facebook</a>
          <a href="#" className="hover:text-black transition">Instagram</a>
        </div>
      </div>
    </footer>
  );
}