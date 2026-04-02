'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Page() {
  return (
    <main className="min-h-screen bg-[#F7F6F2] text-zinc-900 pt-[15dvh] md:pt-[20dvh] px-8 overflow-hidden relative">
      
      {/* Фон: Мягкий энергетический импульс — добавлен will-change-transform для плавности */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <motion.div 
          animate={{ 
            scale: [1, 1.15, 1],
            opacity: [0.1, 0.25, 0.1] 
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 8, 
            ease: "easeInOut" 
          }}
          className="w-[300px] h-[300px] md:w-[600px] md:h-[600px] rounded-full bg-[#ff5a1f] blur-[100px] md:blur-[160px] will-change-transform"
        />
      </div>

      <div className="max-w-[1440px] mx-auto flex flex-col items-center text-center relative z-10">
        
        {/* Иконка загрузки: добавлена плавная отрисовка */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
          className="mb-10"
        >
          <svg 
            width="32" height="32" 
            viewBox="0 0 24 24" 
            fill="none" 
            className="text-[#ff5a1f]"
          >
            <path 
              d="M12 2V6M12 18V22M6 12H2M22 12H18M19.07 4.93L16.24 7.76M7.76 16.24L4.93 19.07M19.07 19.07L16.24 16.24M7.76 7.76L4.93 4.93" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              strokeLinecap="round"
            />
          </svg>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl md:text-6xl font-light tracking-tighter mb-6 text-zinc-900 uppercase"
        >
          Ładujemy nową wiedzę
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="max-w-xl text-zinc-500 text-sm md:text-lg font-light leading-relaxed mb-12 px-4"
        >
          Nasza baza wiedzy o odnawialnych źródłach energii jest obecnie в fazie intensywnego montażu. 
          Już wkrótce dostarczymy Ci dawkę czystej inspiracji i technicznych konkretów.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Link 
            href="/"
            className="group relative text-zinc-950 font-bold text-[10px] uppercase tracking-[0.2em] inline-block"
          >
            <span className="relative z-10">Powrót do strony głównej</span>
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#ff5a1f] transform origin-left transition-transform duration-300 group-hover:scale-x-110" />
          </Link>
        </motion.div>

        {/* Статус: теперь адаптивный. На мобилке он не будет ломать верстку */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ delay: 0.8 }}
          className="mt-32 md:mt-48 select-none pointer-events-none"
        >
          <span className="text-[10vw] md:text-[60px] leading-none uppercase tracking-[0.2em] font-black text-zinc-900 block opacity-20">
            W budowie
          </span>
        </motion.div>
      </div>
    </main>
  );
}