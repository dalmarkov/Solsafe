'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Page() {
  return (
    <main className="min-h-screen bg-[#F7F6F2] text-zinc-900 pt-[120px] px-8 overflow-hidden relative">
      
      {/* Элемент загрузки/энергии с подсветкой (без черного блока) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.3, 0.15] 
          }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          className="w-[300px] h-[300px] md:w-[600px] md:h-[600px] rounded-full bg-orange-500 blur-[100px] md:blur-[150px]"
        />
      </div>

      <div className="max-w-[1440px] mx-auto flex flex-col items-center text-center relative z-10">
        
        {/* Анимированная иконка загрузки сверху */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
          className="mb-12"
        >
          <svg 
            width="40" height="40" 
            viewBox="0 0 24 24" 
            fill="none" 
            className="text-orange-500"
          >
            <path 
              d="M12 2V6M12 18V22M6 12H2M22 12H18M19.07 4.93L16.24 7.76M7.76 16.24L4.93 19.07M19.07 19.07L16.24 16.24M7.76 7.76L4.93 4.93" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round"
            />
          </svg>
        </motion.div>
        
        {/* Главный заголовок — меньше, без италика, в верхнем регистре */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-light tracking-tighter mb-6 text-zinc-900 uppercase"
        >
          Ładujemy nową wiedzę
        </motion.h1>

        {/* Текст описания */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="max-w-xl text-zinc-500 text-base md:text-lg font-light leading-relaxed mb-12"
        >
          Nasza baza wiedzy o odnawialnych źródłach energii jest obecnie w fazie intensywnego montażu. 
          Już wkrótce dostarczymy Ci dawkę czystej inspiracji i technicznych konkretów.
        </motion.p>

        {/* Кнопка возврата */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-4"
        >
          <Link 
            href="/"
            className="text-zinc-950 font-bold text-[10px] uppercase tracking-[0.2em] border-b border-orange-500 pb-2 hover:text-orange-500 transition-colors duration-300"
          >
            Powrót do strony głównej
          </Link>
        </motion.div>

        {/* Нижняя подпись статуса */}
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 0.6 }}
          className="mt-24 text-[40px] uppercase tracking-[0.3em] text-zinc-900"
        >
          Strona w budowie
        </motion.span>
      </div>
    </main>
  );
}