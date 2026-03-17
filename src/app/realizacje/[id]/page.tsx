'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
// Подключаем тот же JSON файл
import projectsData from '../../data/projects.json';

export default function ProjectDetailPage() {
  const { id } = useParams();
  
  // Ищем проект в базе данных по ID
  const project = (projectsData as any[]).find(p => p.id === Number(id));

  // Если проект не найден
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F7F6F2] font-sans">
        <div className="text-center">
          <h2 className="text-2xl font-medium mb-6 text-zinc-400 uppercase tracking-widest">Projekt nie znaleziony</h2>
          <Link href="/realizacje" className="px-8 py-3 bg-[#ff5a1f] text-white font-bold text-xs uppercase tracking-widest rounded-full">
            Powrót do listy
          </Link>
        </div>
      </div>
    );
  }

  return (
    <motion.main 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-white pt-[140px] pb-20 font-sans"
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-12">
        
        {/* Кнопка НАЗАД */}
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Link 
            href="/realizacje" 
            className="group inline-flex items-center text-[#ff5a1f] font-bold text-[10px] uppercase tracking-[0.3em] mb-12 hover:opacity-70 transition-all"
          >
            <span className="mr-3 transform group-hover:-translate-x-2 transition-transform duration-300">←</span> 
            Powrót do wszystkich projektów
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* ЛЕВАЯ КОЛОНКА: ВИЗУАЛ */}
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="space-y-8"
          >
            {/* Главное изображение */}
            <div className="relative overflow-hidden bg-zinc-100 aspect-[4/3]">
              <img 
                src={project.img} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-[2s] hover:scale-105"
              />
            </div>

            {/* Сетка дополнительных фото (галерея) */}
            {project.gallery && project.gallery.length > 0 && (
              <div className="grid grid-cols-2 gap-8">
                {project.gallery.map((imgUrl: string, idx: number) => (
                  <div key={idx} className="overflow-hidden bg-zinc-100 aspect-square">
                    <img 
                      src={imgUrl} 
                      alt={`Galeria ${idx}`} 
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000"
                    />
                  </div>
                ))}
              </div>
            )}
          </motion.div>

          {/* ПРАВАЯ КОЛОНКА: ИНФОРМАЦИЯ */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <span className="text-[#ff5a1f] font-bold text-[10px] uppercase tracking-[0.5em] block mb-6">
              {project.category}
            </span>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium mb-10 tracking-tighter uppercase italic leading-[0.85] text-zinc-900">
              {project.title}
            </h1>

            <div className="mb-16">
              <p className="text-xl md:text-2xl text-zinc-500 font-light leading-relaxed">
                {project.fullDesc || project.desc}
              </p>
            </div>

            {/* ТЕХНИЧЕСКИЕ ПАРАМЕТРЫ */}
            {project.specs && (
              <div className="border-t border-zinc-100 pt-12">
                <h4 className="text-[10px] uppercase font-bold tracking-[0.3em] text-zinc-400 mb-10">
                  Specyfikacja techniczna
                </h4>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-12 gap-x-6">
                  {Object.entries(project.specs).map(([key, value]: [string, any]) => (
                    <div key={key} className="flex flex-col">
                      <span className="text-[9px] uppercase font-bold text-[#ff5a1f] mb-3 tracking-widest">
                        {key}
                      </span>
                      <span className="text-lg md:text-xl font-medium text-zinc-900 leading-tight">
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ПРИЗЫВ К ДЕЙСТВИЮ */}
            <div className="mt-20 p-10 bg-zinc-900 text-white flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/50 mb-2">Zainteresowany?</p>
                <p className="text-xl font-medium uppercase italic">Stwórzmy razem coś podobnego</p>
              </div>
              <Link 
                href="/kontakt" 
                className="w-full md:w-auto px-10 py-5 bg-[#ff5a1f] text-white text-[11px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 text-center"
              >
                Darmowa wycena
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </motion.main>
  );
}