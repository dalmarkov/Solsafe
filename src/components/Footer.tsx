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

        {/* НАВИГАЦИЯ */}
        <div className="space-y-6">
          <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-black">Nawigacja</h4>
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
              <a 
                href="https://ksiegowosc-solsafe.pl/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-black transition"
              >
                Biuro Rachunkowe
              </a>
            </li>
          </ul>
        </div>

        {/* КОНТАКТЫ */}
        <div className="space-y-6">
          <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-black">Kontakt</h4>
          <div className="space-y-2">
            <p className="text-sm text-gray-500 font-light ">ul. Bystrzańska 70,<br />43-309 Bielsko-Biała</p>
            <Link href="/kontakt" className="block text-sm text-gray-500 font-light hover:text-black transition mb-2">
              Strona kontaktowa
            </Link>
            <a href="mailto:biuro@solsafe.pl" className="block text-sm text-gray-500 font-light hover:text-black transition">
              Solsafe@Solsafe.pl
            </a>
          </div>
        </div>
      </div>

      {/* НИЖНЯЯ ПАНЕЛЬ */}
      <div className="max-w-[1440px] mx-auto pt-5 text-[9px] text-gray-400 uppercase tracking-[0.4em] font-bold flex flex-row justify-between items-center">
        <span>
          © 2026 Solsafe. <span className="hidden sm:inline">Wszelkie prawa zastrzeżone.</span>
        </span>
        
        <div className="flex items-center gap-8">
          <a 
            href="https://www.facebook.com/InstalacjeOZESolsafe" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-black transition"
          >
            Facebook
          </a>

          {/* ВЫБОР ЯЗЫКА (ЗАКОММЕНТИРОВАНО) */}
          {/* <li className="flex items-center gap-3 list-none">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="18" 
              height="18" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="text-zinc-400"
            >
              <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
            </svg>
            <div className="flex gap-2 text-[10px] font-bold uppercase tracking-widest text-zinc-400">
              <button className="hover:text-[#ff5a1f] transition-colors border-b border-white/20">PL</button>
              <span className="opacity-20">/</span>
              <button className="hover:text-[#ff5a1f] transition-colors">EN</button>
              <span className="opacity-20">/</span>
              <button className="hover:text-[#ff5a1f] transition-colors">FR</button>
            </div>
          </li> 
          */}
        </div>
      </div>
    </footer>
  );
}