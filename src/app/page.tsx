'use client';

import Hero from '@/components/Hero';
import { motion } from 'framer-motion';
import Link from 'next/link';

// Настройка анимации появления контента
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, margin: "-50px" },
  transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] as const }
};

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#050505]">
      {/* 1. ГЛАВНЫЙ ЭКРАН */}
      <Hero />

      {/* 2. СЕКЦИЯ: DLA FIRMY */}
      <section className="relative h-[92vh] w-full flex items-end pb-20 overflow-hidden group">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/20 z-10"></div>
          <img src="/img/for_firm1.png" alt="Fotowoltaika dla firm" className="w-full h-full object-cover" />
        </div>
        <motion.div {...fadeInUp} className="relative z-20 max-w-[1440px] mx-auto px-8 w-full">
          <span className="text-white/70 font-bold tracking-[0.4em] text-[10px] uppercase mb-4 block">Efektywność biznesu</span>
          <h2 className="text-white text-5xl md:text-7xl font-light mb-8 tracking-tight">Dla Firmy</h2>
          <p className="text-white/90 text-xl max-w-xl mb-10 font-light leading-relaxed">Zredukuj koszty operacyjne i zbuduj wizerunek ekologicznego przedsiębiorstwa.</p>
          <Link href="/dla-firmy">
            <button className="bg-white/30 will-change-[backdrop-filter] px-12 py-5 border border-white text-white rounded-full font-medium transition-all duration-300 text-sm uppercase tracking-widest hover:bg-white hover:text-black">
              Sprawdź ofertę
            </button>
          </Link>
        </motion.div>
      </section>

      {/* 3. СЕКЦИЯ: FARMY FOTOWOLTAICZNE */}
      <section className="relative h-[92vh] w-full flex items-end pb-20 overflow-hidden group">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/20 z-10"></div>
          <img src="/img/farmy.jpg" alt="Farmy fotowoltaiczne" className="w-full h-full object-cover" />
        </div>
        <motion.div {...fadeInUp} className="relative z-20 max-w-[1440px] mx-auto px-8 w-full text-right flex flex-col items-end">
          <span className="text-white/70 font-bold tracking-[0.4em] text-[10px] uppercase mb-4 block">Wielka skala</span>
          <h2 className="text-white text-5xl md:text-7xl font-light mb-8 tracking-tight">Farmy Fotowoltaiczne</h2>
          <p className="text-white/90 text-xl max-w-xl mb-10 font-light leading-relaxed">Inwestycje w OZE na dużą skalę.</p>
          <Link href="/farmy">
            <button className="bg-white/30 will-change-[backdrop-filter] px-12 py-5 border border-white text-white rounded-full font-medium transition-all duration-300 text-sm uppercase tracking-widest hover:bg-white hover:text-black">
              Dowiedz się больше
            </button>
          </Link>
        </motion.div>
      </section>

      {/* 4. СЕКЦИЯ: DLA ДОМА */}
      <section className="relative h-[92vh] w-full flex items-end pb-20 overflow-hidden group">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/20 z-10"></div>
          <img src="/img/dla_domu2.jpg" alt="Fotowoltaika для дома" className="w-full h-full object-cover" />
        </div>
        <motion.div {...fadeInUp} className="relative z-20 max-w-[1440px] mx-auto px-8 w-full">
          <span className="text-white/70 font-bold tracking-[0.4em] text-[10px] uppercase mb-4 block">Niezależność</span>
          <h2 className="text-white text-5xl md:text-7xl font-light mb-8 tracking-tight">Dla Domu</h2>
          <p className="text-white/90 text-xl max-w-xl mb-10 font-light leading-relaxed">Czysta energia для твоей семьи.</p>
          <Link href="/dla-domu">
            <button className="bg-white/30 will-change-[backdrop-filter] px-12 py-5 border border-white text-white rounded-full font-medium transition-all duration-300 text-sm uppercase tracking-widest hover:bg-white hover:text-black">
              Bezpłatna wycena
            </button>
          </Link>
        </motion.div>
      </section>

      {/* 5. КВАДРАТНЫЕ БЛОКИ */}
      <section className="relative w-full flex flex-col md:flex-row gap-[7px] bg-[#F7F6F2] p-[7px]">
        
        {/* ЛЕВЫЙ БЛОК: Centrum Solsafe */}
        <div className="relative flex-1 aspect-square md:aspect-auto md:h-[80vh] overflow-hidden rounded-sm bg-zinc-900 group">
          <div className="absolute inset-0 bg-black/40 z-10 group-hover:bg-black/20 transition-colors duration-500"></div>
          <img 
            src="/img/help_center.jpg" 
            alt="Centrum Solsafe" 
            className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000" 
          />
          <motion.div {...fadeInUp} className="relative z-20 h-full flex flex-col items-center justify-end text-center px-8 pb-12 md:pb-20">
            <h3 className="text-white text-2xl md:text-5xl font-light mb-4 tracking-tight leading-tight">Centrum Solsafe</h3>
            <p className="text-white/70 text-base md:text-lg mb-8 font-light max-w-sm leading-relaxed">Uzyskaj pomoc, której potrzebujesz.</p>
            
            {/* ИЗМЕНЕНО: Ссылка на контакты */}
            <Link href="/kontakt">
              <button className="bg-white/30 will-change-[backdrop-filter] px-10 py-4 rounded-full font-medium text-[10px] uppercase tracking-[0.2em] transition-all duration-300 border border-white text-white group-hover:bg-white group-hover:text-black">
                Dowiedz się więcej
              </button>
            </Link>
          </motion.div>
        </div>

        {/* ПРАВЫЙ БЛОК: Wszystko o energii */}
        <div className="relative flex-1 aspect-square md:aspect-auto md:h-[80vh] overflow-hidden rounded-sm bg-zinc-900 group">
          <div className="absolute inset-0 bg-black/50 z-10 group-hover:bg-black/30 transition-colors duration-500"></div>
          <img 
            src="/img/question_energy.jpg" 
            alt="Wszystko o energii" 
            className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000" 
          />
          <motion.div {...fadeInUp} className="relative z-20 h-full flex flex-col items-center justify-end text-center px-8 pb-12 md:pb-20">
            <h3 className="text-white text-2xl md:text-5xl font-light mb-4 tracking-tight leading-tight">Wszystko o energii</h3>
            <p className="text-white/70 text-base md:text-lg mb-8 font-light max-w-sm leading-relaxed">Fotowoltaika bez tajemnic. Odpowiedzi na najczęstsze pytania.</p>
            
            <button className="bg-white/30 will-change-[backdrop-filter] px-10 py-4 rounded-full font-medium text-[10px] uppercase tracking-[0.2em] transition-all duration-300 border border-white text-white group-hover:bg-white group-hover:text-black">
              Dowiedz się więcej
            </button>
          </motion.div>
        </div>

      </section>
    </main>
  );
}