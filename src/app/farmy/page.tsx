'use client';

import { motion } from 'framer-motion';

export default function Page() {
  // Упрощаем анимацию до предела. Никаких сложных триггеров.
  const containerVariants = {
    hidden: { opacity: 1 }, // Контейнер ВСЕGDA имеет opacity 1
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as any }
    }
  };

  const farmServices = [
    { title: "Projektowanie i Analiza", desc: "Kompleksowe przygotowanie dokumentacji i audyt terenu." },
    { title: "Budowa i Wykonawstwo", desc: "Generalne wykonawstwo instalacji o mocach megawatowych." },
    { title: "Przyłącza i Sieci", desc: "Zarządzanie procesem przyłączenia do sieci energetycznej." },
    { title: "O&M - Serwis Farm", desc: "Stały monitoring techniczny i utrzymanie infrastruktury." }
  ];

  return (
    <main className="min-h-screen bg-[#f9f9fb] font-sans">
      
      {/* HERO SECTION */}
      <section className="relative w-full h-[80vh] md:h-[90vh] overflow-hidden">
        {/* Картинка без фиксированного позиционирования, если оно вызывает баги */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/img/farmy.jpg" 
            alt="Farmy" 
            className="w-full h-full object-cover"
          />
          <div className="backdrop-blur-[2px] absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10" />
        </div>
        
        <div className="relative z-20 h-full flex flex-col justify-end pb-20 px-6 md:px-24">
          <div className="max-w-[1600px] mx-auto w-full">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-white text-4xl md:text-8xl font-light tracking-tight mb-6 uppercase italic"
            >
              Farmy <br className="hidden md:block" /> 
              <span className="font-medium not-italic text-white/90">Fotowoltaiczne.</span>
            </motion.h1>
          </div>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="relative z-30 w-full bg-[#f9f9fb] -mt-10 rounded-t-[20px]">
        <motion.div 
          className="w-full px-6 md:px-12 py-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible" // Анимация запускается СРАЗУ при монтировании
        >
          <div className="max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-32">
              
              <motion.div variants={itemVariants}>
                <h2 className="text-3xl md:text-5xl font-light mb-8 text-zinc-900 uppercase italic">
                  Energia na wielką skalę
                </h2>
                <p className="text-zinc-500 leading-relaxed text-lg font-light max-w-xl mb-8">
                  Budowa farm fotowoltaicznych to proces wymagający precyzji. 
                  Zapewniamy wsparcie od analizy gruntu po serwis techniczny.
                </p>
                <div className="h-[2px] w-24 bg-[#ff5a1f]" />
              </motion.div>

              <div className="grid gap-4">
                {farmServices.map((item, idx) => (
                  <motion.div 
                    key={idx} 
                    variants={itemVariants}
                    className="p-8 rounded-[16px] bg-white border border-zinc-100 shadow-sm group hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-lg font-bold text-zinc-900 uppercase tracking-widest mb-1 group-hover:text-[#ff5a1f]">{item.title}</h4>
                        <p className="text-zinc-500 text-sm font-light">{item.desc}</p>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-zinc-50 flex items-center justify-center group-hover:bg-[#ff5a1f] group-hover:text-white transition-all">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

            </div>

            <motion.div 
              variants={itemVariants}
              className="mt-20 pt-16 border-t border-zinc-200 flex flex-col items-center"
            >
              <button className="w-full md:w-fit px-16 py-6 bg-black text-white rounded-full text-[12px] uppercase tracking-[0.3em] font-bold hover:bg-[#ff5a1f] transition-all">
                Rozpocznij inwestycję
              </button>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}