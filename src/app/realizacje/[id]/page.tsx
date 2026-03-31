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
      className="relative min-h-screen bg-white font-sans text-black overflow-x-hidden"
    >
      {/* Легкий шум поверх белого фона */}
      <div className="fixed inset-0 z-[1] pointer-events-none opacity-[0.03] mix-blend-multiply noise-bg"></div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 pt-[120px] pb-32">
        
        {/* Кнопка НАЗАД (Текст с линией и стрелкой) */}
        <div className="mb-16">
          <Link 
            href="/realizacje" 
            className="group relative inline-flex items-center py-2 text-[11px] md:text-xs font-bold uppercase tracking-[0.2em] transition-colors duration-300"
          >
            <span className="mr-3 transition-transform duration-300 group-hover:-translate-x-1 text-zinc-400 group-hover:text-black">←</span> 
            <span className="text-zinc-400 group-hover:text-black transition-colors duration-300">
              Wróć do realizacji
            </span>
            <div className="absolute left-6 right-0 bottom-0 h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </Link>
        </div>

        {/* ЗАГОЛОВОК ПРОЕКТА — ШРИФТ ПО РЕФЕРЕНСУ */}
        <header className="max-w-6xl mb-20">
          <span className="text-[#ff5a1f] font-bold text-[10px] uppercase tracking-[0.4em] block mb-6">
            {project.category}
          </span>
          <h1 className="text-black text-4xl md:text-6xl lg:text-[75px] font-light tracking-tight leading-[1.05] md:leading-[1.1]">
            {project.title}
          </h1>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* ЛЕВАЯ КОЛОНКА (Контент) */}
          <div className="lg:col-span-8 space-y-24">
            
            {/* ГЛАВНОЕ ФОТО */}
            <div className="relative overflow-hidden rounded-2xl md:rounded-[2rem] bg-zinc-50 aspect-[16/9]">
              <img 
                src={project.img} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out hover:scale-105"
              />
            </div>

            {/* ОПИСАНИЕ — ЧИСТЫЙ ЧЕРНЫЙ */}
            <div className="max-w-3xl">
              <p className="text-xl md:text-2xl lg:text-3xl text-black font-light leading-relaxed tracking-tight">
                {project.fullDesc || project.desc}
              </p>
            </div>

            {/* ГАЛЕРЕЯ */}
            {hasGallery && (
              <div className="space-y-16">
                {project.gallery.map((imgUrl: string, idx: number) => (
                  imgUrl && (
                    <div key={idx} className="overflow-hidden rounded-2xl md:rounded-[2rem] aspect-[16/9] bg-zinc-50">
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

          {/* ПРАВАЯ КОЛОНКА (Параметры) */}
          <aside className="lg:col-span-4 lg:sticky lg:top-[140px] space-y-12">
            <div>
              <h3 className="text-[11px] font-bold uppercase tracking-[0.4em] text-black mb-8">
                Parametry techniczne
              </h3>
              <div className="border-t border-zinc-200">
                {project.specs && Object.entries(project.specs).map(([key, value]: [string, any]) => (
                  <div key={key} className="py-6 border-b border-zinc-100 flex justify-between items-center gap-4">
                    <span className="text-[10px] uppercase font-bold text-zinc-400 tracking-[0.2em] shrink-0">
                      {key}
                    </span>
                    <span className="text-sm font-bold text-black uppercase tracking-tighter">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Блок */}
            <div className="bg-[#f8f8f8] p-10 rounded-[40px] border border-zinc-100 flex flex-col items-center text-center shadow-sm">
              <h4 className="text-2xl md:text-3xl font-bold uppercase tracking-[-0.04em] leading-[0.9] text-black mb-8 max-w-[240px]">
                Twoje słońce. Twój zysk. Nasza pasja.
              </h4>
              <Link 
                href="/kontakt" 
                className="w-full py-5 bg-black text-white text-[11px] font-extrabold uppercase tracking-[0.2em] rounded-full hover:bg-[#ff5a1f] transition-all duration-300 shadow-lg"
              >
                Skontaktuj się
              </Link>
            </div>
          </aside>
        </div>
      </div>

      <style jsx global>{`
        .noise-bg { background-image: url("https://grainy-gradients.vercel.app/noise.svg"); }
      `}</style>
    </motion.main>
  );
}