'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function Page() {
  // Состояние для отслеживания открытой карточки
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const products = [
    { 
      title: "Instalacje Fotowoltaiczne", 
      tag: "Energy Production",
      desc: "Zaawansowane systemy oparte na technologii mikrofalowników. Zapewniamy maksymalną wydajność każdego modułu.",
      details: "Nasze systemy PV charakteryzują się o 25% wyższą wydajnością w skali roku dzięki eliminacji wpływu zacienienia. Oferujemy monitoring na poziomie pojedynczego panelu i 25-letnią gwarancję produktową.",
      img: "/img/question_energy.jpg"
    },
    { 
      title: "Ładowarki do samochodów", 
      tag: "E-mobility",
      desc: "Inteligentne stacje ładowania Wallbox zintegrowane z Twoją instalacją.",
      details: "System dynamicznego równoważenia obciążenia (DLB) dba, aby ładowanie auta nie przeciążyło sieci domowej. Możesz zaprogramować ładowanie tylko z nadwyżek energii słonecznej, jeżdżąc całkowicie za darmo.",
      img: "/img/dla_domu1.jpg"
    },
    { 
      title: "Automatyka Domowa", 
      tag: "Smart Control",
      desc: "Zarządzaj energią w czasie rzeczywistym. Inteligentne systemy monitoringu.",
      details: "Solsafe Home App pozwala na inteligentne zarządzanie urządzeniami o wysokim poborze mocy. System automatycznie włączy zmywarkę lub pompę ciepła, gdy produkcja z Twojej instalacji PV będzie najwyższa.",
      img: "/img/farmy.jpg" 
    },
    { 
      title: "Instalacje Elektryczne", 
      tag: "Safe Infrastructure",
      desc: "Bezpieczeństwo to podstawa. Wykonujemy nowoczesne instalacje elektryczne nowej generacji.",
      details: "Od modernizacji rozdzielni po kompleksowe okablowanie inteligentnego domu. Stosujemy osprzęt najwyższej klasy, przygotowany pod przyszłą rozbudowę o magazyny energii i systemy V2H (Vehicle-to-Home).",
      img: "/img/for_firm1.png"
    },
    { 
      title: "Pompy Ciepła", 
      tag: "Eco Heating",
      desc: "Ekologiczne ogrzewanie, które współpracuje z Twoją fotowoltaiką.",
      details: "Dobieramy pompy ciepła o najwyższym współczynniku COP, które w połączeniu z fotowoltaiką redukują koszty ogrzewania nawet o 80%. Zapewniamy pełną integrację hydrauliczną и elektryczną z istniejącym systemem.",
      img: "/img/map.jpg"
    }
  ];

  return (
    <main className="min-h-screen bg-[#f9f9fb] font-sans text-zinc-900 overflow-x-hidden">
      
      {/* HERO SECTION — Без изменений */}
      <section className="relative w-full h-[87.5vh]" style={{ clipPath: 'inset(0 0 0 0)' }}>
        <div className="fixed inset-0 w-full h-[90vh] z-0">
          <img src="/img/dla_domu2.jpg" alt="Dla Domu" className="w-full h-full object-cover" />
          <div className="backdrop-blur-[2px] absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
        </div>
        <div className="relative z-20 h-full flex flex-col justify-end pb-24 md:pb-32 px-8 md:px-24">
          <div className="max-w-[1600px] mx-auto w-full">
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-white text-4xl md:text-8xl font-light tracking-tight uppercase italic">Twój dom. <br/><span className="font-medium not-italic text-white/90">Twoja energia.</span></motion.h1>
          </div>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="relative z-30 -mt-10 w-full bg-white rounded-t-[20px] shadow-[0_-15px_40px_rgba(0,0,0,0.15)]">
        <div className="w-full py-24 space-y-32">
          {products.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              className="max-w-[1440px] mx-auto px-6 md:px-24"
            >
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-start ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                
                {/* Текстовый блок */}
                <div className={idx % 2 !== 0 ? 'lg:order-2' : ''}>
                  <span className="text-[#ff5a1f] font-semibold text-[10px] uppercase tracking-[0.3em] mb-4 block">{item.tag}</span>
                  <h2 className="text-3xl md:text-5xl font-medium mb-6 tracking-tight text-zinc-900 leading-none">{item.title}</h2>
                  <p className="text-zinc-500 text-lg font-light leading-relaxed mb-8 max-w-lg">{item.desc}</p>
                  
                  {/* Кнопка раскрытия */}
                  <button 
                    onClick={() => setExpandedIndex(expandedIndex === idx ? null : idx)}
                    className="flex items-center gap-4 group cursor-pointer mb-6"
                  >
                    <span className="text-sm font-bold uppercase tracking-widest text-zinc-900 group-hover:text-[#ff5a1f] transition-colors">
                      {expandedIndex === idx ? 'Zwiń informacje' : 'Szczegóły rozwiązania'}
                    </span>
                    <motion.div 
                      animate={{ rotate: expandedIndex === idx ? 180 : 0 }}
                      className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center group-hover:bg-[#ff5a1f] group-hover:text-white transition-all"
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M6 9l6 6 6-6"/></svg>
                    </motion.div>
                  </button>

                  {/* Скрытая информация */}
                  <AnimatePresence>
                    {expandedIndex === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pb-8 pt-2 border-t border-zinc-100">
                          <p className="text-zinc-600 text-base leading-relaxed mb-8 italic">
                            {item.details}
                          </p>
                          <button className="px-8 py-4 bg-[#ff5a1f] text-white rounded-full text-xs uppercase tracking-widest font-bold hover:bg-black transition-all shadow-lg">
                            Zapytaj o wycenę
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                
                {/* Изображение */}
                <div className="relative aspect-[16/10] rounded-[24px] overflow-hidden bg-zinc-100 shadow-sm">
                  <img src={item.img} className="w-full h-full object-cover" alt={item.title} />
                </div>
                
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}