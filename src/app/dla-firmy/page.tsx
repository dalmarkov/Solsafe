'use client';

import { motion } from 'framer-motion';

export default function Page() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    /* Цвет фона светлый, текст меняем на черный/zinc-900 для читаемости */
    <main className="min-h-screen bg-[#F7F6F2] text-zinc-900 pt-[120px] px-8 pb-24">
      <div className="max-w-[1440px] mx-auto">
        
        {/* ЗАГОЛОВОК */}
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-orange-600 font-bold tracking-[0.3em] text-[10px] uppercase mb-4 block"
        >
          Solsafe Solutions
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-light tracking-tighter mb-8 text-black"
        >
          Dla Firmy
        </motion.h1>

        {/* ГЛАВНОЕ ИЗОБРАЖЕНИЕ */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="w-full h-[400px] md:h-[600px] rounded-3xl bg-zinc-200 overflow-hidden mb-16 shadow-sm"
        >
          <div className="w-full h-full bg-zinc-300 flex items-center justify-center text-zinc-500 font-light italic">
            Content Image Placeholder
          </div>
        </motion.div>

        {/* ДОПОЛНИТЕЛЬНЫЙ БЛОК (Чтобы проверить полосу) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 mb-20">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl font-light mb-6 tracking-tight text-black">Optymalizacja kosztów energii</h2>
            <p className="text-zinc-600 leading-relaxed text-lg font-light">
              Wdrażamy zaawansowane systemy fotowoltaiczne, które realnie wpływają na rentowność Twojego przedsiębiorstwa. 
              Nasze rozwiązania są skrojone pod profil zużycia energii w Twoim obiekcie.
            </p>
          </motion.div>

          <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="flex flex-col justify-center">
            <div className="space-y-6">
                <div className="flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-orange-500" />
                    <p className="text-sm font-medium">Audyt energetyczny przed każdą instalacją</p>
                </div>
                <div className="flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-orange-500" />
                    <p className="text-sm font-medium">Monitoring produkcji energii 24/7</p>
                </div>
                <div className="flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-orange-500" />
                    <p className="text-sm font-medium">Serwis i wsparcie techniczne po montażu</p>
                </div>
            </div>
          </motion.div>
        </div>

        {/* КНОПКА */}
        <motion.div {...fadeInUp} className="flex justify-center pt-12 border-t border-black/5">
          <button className="px-12 py-5 border border-black text-black rounded-full text-[10px] uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-500">
            Skontaktuj się z ekspertem
          </button>
        </motion.div>

      </div>
    </main>
  );
}