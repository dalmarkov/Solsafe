'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import projectsData from '../../data/projects.json';

export default function ProjectDetailPage() {
  const { id } = useParams();
  const project = (projectsData as any[]).find(p => p.id === Number(id));

  if (!project) return null;

  const hasGallery = project.gallery && project.gallery.length > 0 && project.gallery[0] !== "";

  return (
    <motion.main 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-white pt-[120px] pb-32 font-sans"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
        
        {/* Кнопка НАЗАД */}
        <Link 
          href="/realizacje" 
          className="group inline-flex items-center text-zinc-400 font-bold text-[10px] uppercase tracking-[0.3em] mb-12 hover:text-[#ff5a1f] transition-colors"
        >
          <span className="mr-3 transition-transform duration-300 group-hover:-translate-x-1">←</span> 
          Wróć do realizacji
        </Link>

        {/* ЗАГОЛОВОК ПРОЕКТА — ОБНОВЛЕННЫЙ СТИЛЬ */}
        <header className="max-w-5xl mb-16">
          <span className="text-[#ff5a1f] font-bold text-[10px] uppercase tracking-[0.4em] block mb-4">
            {project.category}
          </span>
          <h1 className="text-zinc-900 text-4xl md:text-6xl lg:text-[75px] font-light tracking-tight leading-[1.1] uppercase">
            {project.title}
          </h1>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* ЛЕВАЯ КОЛОНКА */}
          <div className="lg:col-span-8 space-y-20">
            
            {/* ГЛАВНОЕ ФОТО */}
            <div className="relative overflow-hidden rounded-2xl bg-zinc-50 aspect-[16/9] shadow-sm">
              <img 
                src={project.img} 
                alt={project.title} 
                className="w-full h-full object-cover"
              />
            </div>

            {/* ОПИСАНИЕ */}
            <div className="max-w-2xl">
              <p className="text-xl md:text-2xl text-zinc-500 font-light leading-snug tracking-tight italic">
                {project.fullDesc || project.desc}
              </p>
            </div>

            {/* ГАЛЕРЕЯ */}
            {hasGallery && (
              <div className="space-y-20">
                {project.gallery.map((imgUrl: string, idx: number) => (
                  imgUrl && (
                    <div key={idx} className="overflow-hidden rounded-2xl aspect-[16/9] bg-zinc-50 shadow-sm">
                      <img 
                        src={imgUrl} 
                        alt={`Realizacja ${idx}`} 
                        className="w-full h-full object-cover" 
                      />
                    </div>
                  )
                ))}
              </div>
            )}
          </div>

          {/* ПРАВАЯ КОЛОНКА (ПАРАМЕТРЫ) */}
          <aside className="lg:col-span-4 lg:sticky lg:top-[140px] space-y-12">
            
            {/* Спецификация */}
            <div>
              <h3 className="text-[11px] font-bold uppercase tracking-[0.4em] text-zinc-900 mb-8">
                Parametry techniczne
              </h3>
              <div className="border-t border-zinc-100">
                {project.specs && Object.entries(project.specs).map(([key, value]: [string, any]) => (
                  <div key={key} className="py-6 border-b border-zinc-100 flex justify-between items-center gap-4">
                    <span className="text-[10px] uppercase font-bold text-zinc-400 tracking-[0.2em] shrink-0">
                      {key}
                    </span>
                    <span className="text-sm font-bold text-zinc-900 uppercase tracking-tighter">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Блок обратной связи */}
            <div className="bg-[#f8f8f8] p-10 rounded-[40px] border border-zinc-50 flex flex-col items-center text-center shadow-sm">
              <h4 className="text-2xl md:text-3xl font-bold uppercase tracking-[-0.04em] leading-[0.9] text-zinc-900 mb-8 max-w-[240px]">
                Twoje słońce. Twój zysk. Nasza pasja.
              </h4>
              
              <Link 
                href="/kontakt" 
                className="w-full py-5 bg-black text-white text-[11px] font-extrabold uppercase tracking-[0.2em] rounded-full hover:bg-[#ff5a1f] transition-all duration-300 shadow-lg hover:shadow-[#ff5a1f]/20"
              >
                Skontaktuj się
              </Link>
            </div>

          </aside>

        </div>
      </div>
    </motion.main>
  );
}