'use client';

import Hero from '@/components/Hero';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, margin: "-50px" },
  transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] as const }
};

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#050505]">
      {/* 1. HERO */}
      <Hero />

      {/* 2. DLA FIRMY */}
      <section className="relative h-[85vh] w-full flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <img src="/img/for_firm1.png" alt="Fotowoltaika dla firm" className="w-full h-full object-cover" />
        </div>
        <motion.div {...fadeInUp} className="relative z-20 max-w-[1440px] mx-auto px-8 w-full">
          <span className="text-white/70 font-bold tracking-[0.4em] text-[10px] uppercase mb-4 block">Efektywność biznesu</span>
          <h2 className="text-white text-5xl md:text-7xl font-light mb-8 tracking-tight">Dla Firmy</h2>
          <p className="text-white/90 text-xl max-w-xl mb-10 font-light leading-relaxed">Zredukuj koszty operacyjne i zbuduj wizerunek ekologicznego przedsiębiorstwa.</p>
          <button className="px-12 py-5 border border-white text-white rounded-full font-medium hover:bg-white hover:text-black transition-all duration-300 text-sm uppercase tracking-widest">Sprawdź ofertę</button>
        </motion.div>
      </section>

      {/* 3. FARMY */}
      <section className="relative h-[85vh] w-full flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/30 z-10"></div>
          <img src="/img/farmy.jpg" alt="Farmy fotowoltaiczne" className="w-full h-full object-cover" />
        </div>
        <motion.div {...fadeInUp} className="relative z-20 max-w-[1440px] mx-auto px-8 w-full text-right flex flex-col items-end">
          <span className="text-white/70 font-bold tracking-[0.4em] text-[10px] uppercase mb-4 block">Wielka skala</span>
          <h2 className="text-white text-5xl md:text-7xl font-light mb-8 tracking-tight">Farmy Fotowoltaiczne</h2>
          <p className="text-white/90 text-xl max-w-xl mb-10 font-light leading-relaxed">Inwestycje w OZE na dużą skalę.</p>
          <button className="px-12 py-5 border border-white text-white rounded-full font-medium hover:bg-white hover:text-black transition-all duration-300 text-sm uppercase tracking-widest">Dowiedz się więcej</button>
        </motion.div>
      </section>

      {/* 4. DLA DOMU */}
      <section className="relative h-[85vh] w-full flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <img src="/img/dla_domu.jpg" alt="Fotowoltaika dla domu" className="w-full h-full object-cover" />
        </div>
        <motion.div {...fadeInUp} className="relative z-20 max-w-[1440px] mx-auto px-8 w-full">
          <span className="text-white/70 font-bold tracking-[0.4em] text-[10px] uppercase mb-4 block">Niezależność</span>
          <h2 className="text-white text-5xl md:text-7xl font-light mb-8 tracking-tight">Dla Domu</h2>
          <p className="text-white/90 text-xl max-w-xl mb-10 font-light leading-relaxed">Czysta energia dla Twojej rodziny.</p>
          <button className="px-12 py-5 border border-white text-white rounded-full font-medium hover:bg-white hover:text-black transition-all duration-300 text-sm uppercase tracking-widest">Bezpłatna wycena</button>
        </motion.div>
      </section>

      {/* 5. SEKCJA: MAPA I STATYSTYKI */}
      <section className="relative w-full bg-black flex flex-col items-center overflow-hidden">
        
        {/* КАРТА */}
        <div className="relative w-full h-[50vh] md:h-[70vh] flex items-center justify-center overflow-hidden border-b border-white/5">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
          
          <div className="relative w-[240%] md:w-[130%] aspect-[16/10] flex-shrink-0 -translate-y-[20%] md:-translate-y-[15%]">
            <img 
              src="/img/map.jpg" 
              alt="Mapa" 
              className="w-full h-full object-fill opacity-40" 
            />

            <div className="absolute inset-0 z-20 pointer-events-none">
               {/* ТВОИ НАСТРОЕННЫЕ ТОЧКИ */}
               <div className="absolute top-[62%] left-[50%] transform -translate-x-1/2 -translate-y-1/2">
                  <span className="relative flex h-3 w-3 md:h-6 md:w-6">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff5a1f] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 md:h-6 md:w-6 bg-[#ff5a1f] shadow-[0_0_15px_#ff5a1f]"></span>
                  </span>
               </div>
               <div className="absolute top-[63%] left-[39%] h-1.5 w-1.5 md:h-2 md:w-2 bg-[#ff5a1f]/70 rounded-full"></div>
               <div className="absolute top-[61%] left-[35%] h-1.5 w-1.5 md:h-2 md:w-2 bg-[#ff5a1f]/70 rounded-full"></div>
               <div className="absolute top-[72%] left-[32%] h-1.5 w-1.5 md:h-2 md:w-2 bg-[#ff5a1f]/70 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* ПАНЕЛЬ ЦИФР */}
        <div className="w-full py-6 md:py-14 bg-black flex justify-center">
          <div className="max-w-[1440px] w-full px-4 md:px-10">
            <div className="flex flex-row items-start justify-center md:grid md:grid-cols-5 gap-4 md:gap-8">
              {[
                { n: "1193", t: "Instalacji <br/> w Polsce" },
                { n: "24", t: "Instalacje <br/> w Europie" },
                { n: "911K", t: "Ułożonych <br/> paneli" },
                { n: "4", t: "Krajów <br/> Europy" },
                { n: "13", t: "Lat <br/> doświadczenia" }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.2 }}
                  /* Добавлена группа для ховера и центрирование текста */
                  className="group flex flex-col items-center text-center flex-1 min-w-0 cursor-default"
                >
                  <span className="text-[16px] xs:text-xl sm:text-2xl md:text-5xl lg:text-7xl font-medium text-white group-hover:text-[#ff5a1f] tracking-tighter transition-colors duration-300 leading-none">
                    {item.n}
                  </span>
                  <p 
                    className="text-[6px] xs:text-[7px] md:text-[10px] text-white/40 group-hover:text-white/60 uppercase tracking-widest font-bold leading-tight mt-2 md:mt-4 transition-colors duration-300" 
                    dangerouslySetInnerHTML={{ __html: item.t }} 
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. ПАРТНЕРЫ */}
      <section className="py-4 bg-white overflow-hidden border-t border-gray-100">
        <div className="flex animate-marquee whitespace-nowrap">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex items-center">
              {['Huawei', 'Growatt', 'Fronius', 'Ja Solar', 'Enphase', 'Sofar'].map((brand) => (
                <span key={brand} className="mx-8 md:mx-12 text-[10px] font-bold text-gray-400 tracking-[0.2em] uppercase">{brand}</span>
              ))}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}