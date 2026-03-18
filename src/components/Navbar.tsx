'use client';

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isFirmaOpen, setIsFirmaOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Скролл-логика
  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        const currentScrollY = window.scrollY;
        
        if (isMobileMenuOpen) {
          setIsVisible(true);
          return;
        }

        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
        setLastScrollY(currentScrollY);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isMobileMenuOpen]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) setIsMobileMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinks = [
    { name: 'Dla firmy', href: '/dla-firmy' },
    { name: 'Farmy fotowoltaiczne', href: '/farmy' },
    { name: 'Dla domu', href: '/dla-domu' },
    { name: 'Realizacje', href: '/realizacje' },
    { name: 'Biuro Rachunkowe', href: 'https://ksiegowosc-solsafe.pl/' }, // Заменил на внешнюю ссылку
  ];

  const MailIcon = ({ className = "w-5 h-5" }) => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
    </svg>
  );

  return (
    <nav 
      className={`w-full z-[100] h-[70px] transition-transform duration-500 ease-in-out bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-white/5 ${
        isMobileMenuOpen 
          ? '!fixed top-0 left-0 bg-white translate-y-0' 
          : 'absolute xl:fixed top-0 left-0'
      } ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <div className="max-w-[1440px] mx-auto px-8 xl:px-12 h-full flex items-center justify-between relative z-[150]">
        
        <div className="flex-shrink-0 relative z-[160]">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
            <Image 
              src="/logo_solsafe.png" 
              alt="Solsafe Logo" 
              width={140} 
              height={42} 
              className={`object-contain transition-all duration-300 ${isMobileMenuOpen ? 'invert xl:invert-0' : ''}`} 
              priority 
            />
          </Link>
        </div>

        {/* DESKTOP NAV */}
        <div className="hidden xl:flex items-center justify-center gap-x-8 h-full flex-grow mx-4">
          {navLinks.map((item) => {
            const isExternal = item.name === 'Biuro Rachunkowe';
            const commonStyles = `relative text-[10px] font-bold uppercase tracking-widest transition-colors h-full flex items-center group pt-1 whitespace-nowrap ${
              pathname === item.href ? 'text-white' : 'text-gray-300 hover:text-white'
            }`;

            if (isExternal) {
              return (
                <a 
                  key={item.name} 
                  href={item.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={commonStyles}
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </a>
              );
            }

            return (
              <Link 
                key={item.name} 
                href={item.href} 
                className={commonStyles}
              >
                {item.name}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-white transition-transform duration-300 origin-left ${
                  pathname === item.href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}></span>
              </Link>
            );
          })}
          
          {/* ОСТАЛЬНОЕ МЕНЮ БЕЗ ИЗМЕНЕНИЙ */}
          <div 
            className="relative h-full flex items-center cursor-pointer group pt-1" 
            onMouseEnter={() => setIsFirmaOpen(true)} 
            onMouseLeave={() => setIsFirmaOpen(false)}
          >
            <div className={`text-[10px] font-bold uppercase tracking-widest flex items-center gap-1 transition-colors ${isFirmaOpen ? 'text-white' : 'text-gray-400'}`}>
               o nas
              <svg className={`w-2.5 h-2.5 transition-transform duration-300 ${isFirmaOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            
            <div className={`absolute top-[70px] right-[-100px] w-[600px] z-[200] transition-all duration-300 ${isFirmaOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
              <div className="h-4 w-full bg-transparent absolute -top-4"></div>
              <div className="bg-white shadow-2xl flex text-black overflow-hidden border-t-4 border-white">
                <div className="w-1/2 p-8 border-r border-gray-100">
                  <span className="text-[9px] font-black uppercase tracking-[0.3em] text-gray-400 block mb-6">O Firmie</span>
                  <div className="flex flex-col gap-4">
                    <Link href="/zespol" className="text-xl font-bold hover:text-[#ff5a1f] transition-colors tracking-tighter">Zespół</Link>
                    <Link href="/kontakt" className="text-xl font-bold hover:text-[#ff5a1f] transition-colors tracking-tighter">Kontakt</Link>
                    <Link href="/blog" className="text-xl font-bold hover:text-[#ff5a1f] transition-colors tracking-tighter">Blog</Link>
                  </div>
                </div>
                <div className="w-1/2 p-8 bg-gray-50/50 flex items-center">
                  <p className="text-[11px] leading-relaxed text-gray-500 font-medium italic">
                    Solsafe to gwarancja jakości i bezpieczeństwa.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 relative z-[160]">
          {!isMobileMenuOpen && (
            <a 
              href="mailto:solsafe@solsafe.pl" 
              title="solsafe@solsafe.pl"
              className="hidden xl:flex items-center justify-center w-10 h-10 rounded-full bg-white/5 hover:bg-[#ff5a1f] transition-all duration-300 text-white"
            >
              <MailIcon />
            </a>
          )}

          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="xl:hidden flex flex-col gap-1.5 p-2 focus:outline-none">
            <div className={`h-0.5 w-6 transition-all duration-300 ${isMobileMenuOpen ? 'bg-black rotate-45 translate-y-2' : 'bg-white'}`}></div>
            <div className={`h-0.5 w-6 transition-all duration-300 ${isMobileMenuOpen ? 'bg-black opacity-0' : 'bg-white'}`}></div>
            <div className={`h-0.5 w-6 transition-all duration-300 ${isMobileMenuOpen ? 'bg-black -rotate-45 -translate-y-2' : 'bg-white'}`}></div>
          </button>
        </div>
      </div>

      {/* МОБИЛЬНОЕ МЕНЮ */}
      <div className={`fixed inset-0 w-full h-[100dvh] bg-white z-[110] xl:hidden transition-transform duration-500 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="absolute top-0 left-0 w-full h-[70px] bg-white z-[120]"></div>
        <div className="h-full overflow-y-auto pt-28 pb-12 px-8 flex flex-col bg-white">
          <div className="flex flex-col min-h-max text-black">
            <div className="flex flex-col space-y-7 mb-12">
              {navLinks.map((item) => {
                if (item.name === 'Biuro Rachunkowe') {
                  return (
                    <a 
                      key={item.name} 
                      href={item.href} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-3xl font-bold uppercase tracking-tighter"
                    >
                      {item.name}
                    </a>
                  );
                }
                return (
                  <Link key={item.name} href={item.href} onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-bold uppercase tracking-tighter">
                    {item.name}
                  </Link>
                );
              })}
            </div>
            <div className="mt-auto pt-10 border-t border-gray-100 flex flex-col gap-5">
              <Link href="/zespol" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-bold uppercase tracking-widest text-gray-400">Zespół</Link>
              <Link href="/kontakt" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-bold uppercase tracking-widest text-[#ff5a1f]">Kontakt</Link>
              <a href="mailto:solsafe@solsafe.pl" className="flex items-center gap-3 text-2xl font-light text-black mt-2 tracking-tight group">
                <div className="text-[#ff5a1f]">
                  <MailIcon className="w-7 h-7" />
                </div>
                <span>solsafe@solsafe.pl</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}