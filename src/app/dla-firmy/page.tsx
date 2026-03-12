'use client';

import { motion } from 'framer-motion';

export default function Page() {
  // Контейнер с гарантированной видимостью
  const containerVariants = {
    hidden: { opacity: 1 }, 
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  // Анимация элементов (без привязки к скроллу для стабильности)
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as any }
    }
  };

  const services = [
    { title: "Audyt energetyczny", desc: "Szczegółowa analiza profilu zużycia mocy." },
    { title: "Monitoring 24/7", desc: "Pełna kontrola produkcji i oszczędności." },
    { title: "Skalowalność", desc: "Systemy gotowe na rozbudowę wraz z Twoją firmą." }
  ];

  return (
    <main className="min-h-screen bg-[#f9f9fb] font-sans overflow-x-hidden">
      
      {/* HERO SECTION — Оптимизирована для переходов */}
      <section className="relative w-full h-[80vh] md:h-[87vh] overflow-hidden bg-zinc-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="/img/for_firm1.png" 
            alt="Fotowoltaika dla Firm" 
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10" />
        </div>
        
        <div className="relative z-20 h-full flex flex-col justify-end pb-24 px-8 md:px-24">
          <div className="max-w-[1440px] mx-auto w-full">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-[#ff5a1f] font-bold tracking-[0.5em] text-[10px] md:text-[12px] uppercase mb-6 block"
            >
              Energia dla Biznesu
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-white text-4xl md:text-8xl font-light tracking-tighter leading-[1.1] mb-8 uppercase italic"
            >
              Inwestycja, która <br className="hidden md:block"/> 
              <span className="font-medium not-italic text-white/90">pracuje na Twój zysk.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-white/60 text-base md:text-2xl max-w-2xl font-light"
            >
              Zredukuj koszty operacyjne i zwiększ niezależność energetyczną swojego przedsiębiorstwa.
            </motion.p>
          </div>
        </div>
      </section>

      {/* CONTENT SECTION — Гарантированное отображение */}
      <section className="relative z-30 -mt-10 w-full bg-[#f9f9fb] rounded-t-[20px] shadow-[0_-15px_40px_rgba(0,0,0,0.15)]">
        <motion.div 
          className="w-full py-24 px-6 md:px-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="max-w-[1440px] mx-auto">
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-32 items-start">
              
              <motion.div variants={itemVariants}>
                <h2 className="text-3xl md:text-5xl font-light mb-8 tracking-tight text-zinc-900 uppercase italic">
                  Dla Firmy
                </h2>
                <p className="text-zinc-500 leading-relaxed text-lg md:text-xl font-light max-w-xl mb-8">
                  Wdrażamy zaawansowane systemy fotowoltaiczne, które realnie wpływają na rentowność Twojego przedsiębiorstwa. 
                  Nasze rozwiązania są skrojone pod profil zużycia energii.
                </p>
                <div className="h-[2px] w-24 bg-[#ff5a1f]" />
              </motion.div>

              <div className="grid gap-4">
                {services.map((item, idx) => (
                  <motion.div 
                    key={idx} 
                    variants={itemVariants}
                    className="p-8 rounded-[16px] bg-white border border-zinc-100 shadow-sm hover:shadow-xl transition-all duration-500 group cursor-pointer"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-lg font-bold text-zinc-900 uppercase tracking-widest mb-1 group-hover:text-[#ff5a1f] transition-colors">
                          {item.title}
                        </h4>
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
              className="mt-24 pt-16 border-t border-zinc-200 flex flex-col items-center text-center"
            >
              <button className="w-full md:w-fit px-16 py-6 bg-black text-white rounded-full text-[12px] uppercase tracking-[0.3em] font-bold hover:bg-[#ff5a1f] transition-all duration-500 shadow-2xl">
                Skontaktuj się z ekspertem
              </button>
            </motion.div>

          </div>
        </motion.div>
      </section>
    </main>
  );
}