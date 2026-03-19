'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

const systemDetails = [
  { id: 'panels', title: "Panele PV", top: '15%', left: '42%', desc: "Wysokowydajne moduły N-Type zbierają energię słoneczną nawet przy słabym oświetleniu." },
  { id: 'panels_2', title: "Optymalizacja", top: '22%', left: '55%', desc: "Każdy panel pracuje niezależnie, zapewniając maksymalny uzysk energii bez względu na zacienienie." },
  { id: 'inverter', title: "Falownik", top: '48%', left: '46%', desc: "Mózg systemu. Zmienia prąd DC na AC i zarządza inteligentnym rozdziałem energii w domu." },
  { id: 'cable_1', title: "Instalacja DC", top: '35%', left: '55%', desc: "Zabezpieczone trasy kablowe prowadzą czystą energię prosto z dachu do inwertera." },
  { id: 'meter', title: "Licznik", top: '63%', left: '54%', desc: "Monitoruje w czasie rzeczywistym, ile energii produkujesz, a ile oddajesz do sieci." },
  { id: 'ev_charger', title: "Wallbox", top: '71%', left: '58%', desc: "Stacja ładowania pozwala wykorzystać nadwyżki energii do zasilania Twojego samochodu." },
  { id: 'ev_car', title: "Pojazd EV", top: '82%', left: '45%', desc: "Samochód staje się częścią Twojego domowego ekosystemu energetycznego." },
  { id: 'home_main', title: "Zasilanie", top: '75%', left: '25%', desc: "Darmowa energia płynie do wszystkich urządzeń AGD, dbając o Twój portfel i środowisko." },
  { id: 'home_light', title: "Oświetlenie", top: '55%', left: '30%', desc: "Inteligentne zarządzanie energią pozwala na efektywne zasilanie nowoczesnych systemów LED." },
  { id: 'garden', title: "Systemy Ogrodowe", top: '85%', left: '10%', desc: "Oświetlenie zewnętrzne i pompy basenowe mogą być w pełni zasilane ze słońca." }
];

export default function SolarInteractiveSection() {
  const [activeTab, setActiveTab] = useState(systemDetails[0]);

  return (
    <section className="min-h-screen bg-white py-20 flex items-center overflow-hidden">
      <div className="max-w-[1700px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 items-center px-6 md:px-12">
        
        {/* ЛЕВАЯ ЧАСТЬ: ТЕКСТ (4 колонки) */}
        <div className="lg:col-span-4 order-2 lg:order-1 relative z-10">
          <motion.div className="max-w-md">
            <span className="text-yellow-500 font-bold tracking-[0.4em] text-[10px] uppercase mb-4 block">
              Jak to działa
            </span>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4 }}
              >
                <h2 className="text-4xl md:text-6xl font-light tracking-tighter mb-6 text-zinc-900 leading-tight">
                  {activeTab.title}
                </h2>
                <p className="text-zinc-500 text-lg font-light leading-relaxed">
                  {activeTab.desc}
                </p>
              </motion.div>
            </AnimatePresence>
            
            <div className="mt-12 flex flex-wrap gap-2">
                {/* Индикаторы всех точек для быстрой навигации */}
                {systemDetails.map((t) => (
                    <div 
                        key={t.id}
                        className={`h-1 transition-all duration-500 rounded-full ${activeTab.id === t.id ? 'w-8 bg-yellow-500' : 'w-2 bg-zinc-200'}`}
                    />
                ))}
            </div>
          </motion.div>
        </div>

        {/* ПРАВАЯ ЧАСТЬ: БОЛЬШОЕ ФОТО (8 колонок) */}
        <div className="lg:col-span-8 order-1 lg:order-2 relative">
          <div className="relative w-full aspect-[4/3] lg:scale-125">
            <Image 
              src="/img/o-energii/dom-anim.png" 
              alt="System Solsafe" 
              fill
              className="object-contain"
              priority
            />

            {/* ТОЧКИ (HOTSPOTS) */}
            {systemDetails.map((item, index) => (
              <div
                key={item.id}
                className="absolute z-20 -translate-x-1/2 -translate-y-1/2 cursor-pointer p-4"
                style={{ top: item.top, left: item.left }}
                onClick={() => setActiveTab(item)}
              >
                {/* Анимация затухания и загорания (разный delay для каждой точки) */}
                <motion.div 
                  className="relative w-2.5 h-2.5 rounded-full shadow-[0_0_15px_rgba(250,204,21,0.8)]"
                  animate={{ 
                    opacity: [0.2, 1, 0.2],
                    scale: activeTab.id === item.id ? 1.5 : 1
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    delay: index * 0.4, // Создает эффект "бегущих" огней
                    ease: "easeInOut" 
                  }}
                  style={{ 
                    backgroundColor: activeTab.id === item.id ? '#FACC15' : '#EAB308' 
                  }}
                />
                
                {/* Ореол вокруг активной точки */}
                {activeTab.id === item.id && (
                    <motion.div 
                        layoutId="activeGlow"
                        className="absolute inset-0 rounded-full bg-yellow-400/30 blur-md"
                        animate={{ scale: [1, 2.5], opacity: [0.5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    />
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}