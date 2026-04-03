'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import projectsData from '../../data/projects.json';

export default function ProjectDetailPage() {
  const params = useParams();
  const [activeIdx, setActiveIdx] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !params?.id) return null;

  const project = (projectsData as any[]).find(
    (p) => p.id?.toString() === params.id?.toString()
  );

  if (!project) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center text-[10px] uppercase tracking-[0.5em] text-zinc-400 font-sans">
        Projekt nie został odnaleziony
      </div>
    );
  }

  const allImages = [project.img, ...(project.gallery || [])].filter(
    (img) => typeof img === 'string' && img.trim() !== ""
  );

  const nextSlide = () => setActiveIdx((prev) => (prev + 1) % allImages.length);
  const prevSlide = () => setActiveIdx((prev) => (prev - 1 + allImages.length) % allImages.length);

  const fullText = project.fullDesc || project.desc || "";
  const sentences = fullText.split('. ').filter((s: string) => s.trim().length > 0);
  const half = Math.ceil(sentences.length / 2);
  
  const col1 = sentences.slice(0, half).join('. ') + (sentences.length > 0 ? '.' : '');
  const col2 = sentences.slice(half).join('. ') + (sentences.length > half ? '.' : '');

  return (
    <motion.main 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="relative min-h-screen bg-white font-sans text-zinc-900 antialiased"
    >
      {/* Текстура шума */}
      <div className="fixed inset-0 z-[1] pointer-events-none opacity-[0.04] mix-blend-multiply noise-bg"></div>

      {/* 1. НАВИГАЦИЯ (Адаптированная высота) */}
      <nav className="fixed top-0 left-0 w-full z-50 px-4 md:px-12 py-3 md:py-4 flex justify-between items-center bg-white/60 backdrop-blur-xl border-b border-zinc-100/30">
        <Link href="/realizacje" className="group flex items-center gap-2 md:gap-3 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] hover:text-black transition-colors">
          <span className="text-base md:text-lg leading-none">‹</span> 
          Wróć
        </Link>
        <span className="text-[9px] md:text-[10px] font-medium uppercase tracking-[0.2em] md:tracking-[0.4em] text-zinc-300">
          SolSafe / 2026
        </span>
      </nav>

      <div className="relative z-10 max-w-[1600px] mx-auto px-4 md:px-12 lg:px-24 pt-24 md:pt-32 pb-20">
        
        {/* 2. ТИТУЛ (Адаптивный размер) */}
        <header className="mb-10 md:mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl lg:text-7xl font-normal tracking-tight text-zinc-900 leading-[1.1] md:leading-none uppercase break-words"
          >
            {project.title}
          </motion.h1>
        </header>

        {/* 3. КОНТЕНТ (Стек на мобильных) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-start border-t border-zinc-100 pt-8 md:pt-12">
          
          {/* СЛАЙДЕР */}
          <div className="lg:col-span-8 group relative w-full">
            <div className="relative aspect-[4/3] md:aspect-[16/10] w-full overflow-hidden rounded-[24px] md:rounded-[40px] bg-zinc-50 shadow-sm">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIdx}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <Image 
                    src={allImages[activeIdx]} 
                    alt={project.title} 
                    fill 
                    className="object-cover"
                    priority
                  />
                </motion.div>
              </AnimatePresence>

              {/* Управление слайдером */}
              {allImages.length > 1 && (
                <div className="absolute inset-0 flex items-center justify-between px-4 md:px-6 pointer-events-none">
                  <button 
                    onClick={prevSlide}
                    className="pointer-events-auto w-10 h-10 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white hover:text-black transition-all"
                  >
                    ‹
                  </button>
                  <button 
                    onClick={nextSlide}
                    className="pointer-events-auto w-10 h-10 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white hover:text-black transition-all"
                  >
                    ›
                  </button>
                </div>
              )}
            </div>
            
            {/* Прогресс бар */}
            <div className="mt-6 md:mt-8 flex items-center gap-4 md:gap-6 text-[8px] md:text-[9px] font-black uppercase tracking-[0.3em]">
              <span className="text-zinc-900 shrink-0">Foto {activeIdx + 1}</span>
              <div className="relative flex-1 h-[1px] bg-zinc-100">
                <motion.div 
                   className="absolute left-0 top-0 h-full bg-black"
                   initial={false}
                   animate={{ width: `${((activeIdx + 1) / allImages.length) * 100}%` }}
                   transition={{ duration: 0.4 }}
                />
              </div>
              <span className="text-zinc-300 shrink-0">{allImages.length}</span>
            </div>
          </div>

          {/* ТТХ (Вертикальный список) */}
          <div className="lg:col-span-4 flex flex-col pt-4 md:pt-2">
            <h3 className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 mb-6 md:mb-8">
              Specyfikacja techniczna
            </h3>
            
            <div className="space-y-0 border-t border-zinc-100">
              {project.specs && Object.entries(project.specs).map(([key, value]: [string, any], idx) => (
                <div key={key} className="py-5 md:py-6 border-b border-zinc-100 flex justify-between items-baseline group px-1">
                  <div className="flex flex-col gap-1">
                    <span className="text-[8px] uppercase font-bold text-zinc-300 tracking-[0.1em]">
                      0{idx + 1}
                    </span>
                    <span className="text-[9px] md:text-[10px] uppercase font-bold text-zinc-400 tracking-[0.2em]">
                      {key}
                    </span>
                  </div>
                  <span className="text-base md:text-xl font-bold tracking-tighter uppercase text-right pl-4">
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 4. ОПИСАНИЕ (Адаптивные колонки) */}
        <section className="mt-16 md:mt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-6xl"
          >
            <div className="h-px w-12 md:w-16 bg-[#ff5a1f] mb-8 md:mb-12" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-24">
              {/* Колонки текста */}
              <div className="flex gap-4 md:gap-8">
                <span className="text-[9px] md:text-[10px] font-black text-[#ff5a1f] mt-1.5 md:mt-2 tracking-widest shrink-0">01</span>
                <p className="text-lg md:text-2xl lg:text-3xl text-zinc-900 font-light leading-[1.4] md:leading-[1.3] tracking-tight">
                  {col1}
                </p>
              </div>

              {col2.length > 5 && (
                <div className="flex gap-4 md:gap-8 pt-8 lg:pt-0 border-t lg:border-t-0 border-zinc-50 md:border-transparent">
                  <span className="text-[9px] md:text-[10px] font-black text-[#ff5a1f] mt-1.5 md:mt-2 tracking-widest shrink-0">02</span>
                  <p className="text-lg md:text-2xl lg:text-3xl text-zinc-900 font-light leading-[1.4] md:leading-[1.3] tracking-tight">
                    {col2}
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </section>

        {/* 5. CTA (Крупно даже на мобилках) */}
        <section className="mt-24 md:mt-40 text-center border-t border-zinc-100 pt-16 md:pt-24">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-400 mb-8 md:mb-12">
              Gotowy na projekt?
            </h3>
            <Link 
              href="/kontakt" 
              className="group relative inline-block text-3xl md:text-7xl font-light uppercase tracking-tighter"
            >
              <span className="relative z-10 group-active:text-zinc-500 transition-colors text-black">
                Kontakt
              </span>
              <div className="absolute left-0 bottom-0 w-full h-[1px] bg-black" />
            </Link>
          </div>
        </section>
      </div>

      <style jsx global>{`
        body { background-color: #ffffff; }
        .noise-bg { background-image: url("https://grainy-gradients.vercel.app/noise.svg"); }
      `}</style>
    </motion.main>
  );
}