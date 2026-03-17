'use client';

import { motion } from 'framer-motion';

export default function Page() {
  return (
    <main className="min-h-screen bg-[#F7F6F2] text-white pt-[120px] px-8">
      <div className="max-w-[1440px] mx-auto">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-orange-500 font-bold tracking-[0.3em] text-[10px] uppercase mb-4 block"
        >
          Solsafe Solutions
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-light tracking-tighter mb-8"
        >
          {/* Меню заголовка в зависимости от страницы */}
          Zespół
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="w-full h-[400px] rounded-3xl bg-zinc-900 overflow-hidden mb-12"
        >
          {/* Заглушка для изображения */}
          <div className="w-full h-full bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center text-zinc-500">
            Content Image Placeholder
          </div>
        </motion.div>
      </div>
    </main>
  );
}