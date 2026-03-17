'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import projectsData from '../data/projects.json';

interface Project {
  id: number;
  category: string;
  title: string;
  desc: string;
  img: string;
}

const ALL_PROJECTS = (projectsData as any[]).filter(p => p.id) as Project[];

export default function PortfolioPage() {
  const [filter, setFilter] = useState('WSZYSTKIE');
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 10;

  const categories = ['WSZYSTKIE', 'FARMY PV', 'DLA DOMU', 'DLA FIRMY'];

  const filteredData = useMemo(() => {
    setCurrentPage(1); 
    return filter === 'WSZYSTKIE' 
      ? ALL_PROJECTS 
      : ALL_PROJECTS.filter(p => p.category === filter);
  }, [filter]);

  const currentProjects = filteredData.slice((currentPage - 1) * projectsPerPage, currentPage * projectsPerPage);
  const totalPages = Math.ceil(filteredData.length / projectsPerPage);

  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="min-h-screen bg-[#F7F6F2] pt-[100px] md:pt-[140px] overflow-x-hidden font-sans"
    >
      
      {/* ЗАГОЛОВОК */}
      <section className="px-6 md:px-12 mb-8 md:mb-16 text-center">
        <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-zinc-900 mb-8 md:mb-12 max-w-3xl mx-auto leading-tight">
          Poznaj niektóre z naszych zrealizowanych projektów.
        </h2>

        {/* КНОПКИ ФИЛЬТРАЦИИ */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 md:px-8 md:py-2.5 rounded-full text-[9px] md:text-[11px] uppercase tracking-[0.15em] font-bold transition-all duration-300 border ${
                filter === cat 
                ? 'bg-[#ff5a1f] text-white border-[#ff5a1f]' 
                : 'bg-white text-zinc-400 border-zinc-200 hover:border-[#ff5a1f] hover:text-[#ff5a1f]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* СЕТКА КАРТОЧЕК */}
      <section className="w-full px-2 md:px-0">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-[10px]">
          <AnimatePresence mode='popLayout'>
            {currentProjects.map((item) => (
              <Link href={`/realizacje/${item.id}`} key={item.id}>
                <motion.div
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  // Изменили h-[400px] на h-[280px] для мобилок
                  className="relative h-[280px] md:h-[550px] overflow-hidden rounded-sm md:rounded-none group cursor-pointer bg-zinc-200"
                >
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/10 to-transparent transition-opacity duration-500 group-hover:opacity-80" />

                  <div className="relative z-10 h-full w-full flex flex-col items-center justify-start p-6 md:p-10 text-center">
                    {/* Адаптивный размер шрифта для заголовка */}
                    <h3 className="text-2xl md:text-6xl font-medium text-white mb-2 md:mb-3 tracking-tighter uppercase italic drop-shadow-lg leading-none">
                      {item.title}
                    </h3>
                    <p className="text-white/80 text-xs md:text-lg font-light max-w-[240px] md:max-w-sm drop-shadow-md line-clamp-2 md:line-clamp-none">
                      {item.desc}
                    </p>
                    
                    <div className="mt-4 md:mt-6 px-4 py-1.5 md:px-6 md:py-2 border border-white/30 text-white text-[8px] md:text-[10px] uppercase tracking-widest opacity-100 md:opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-0 md:translate-y-4 group-hover:translate-y-0">
                      Zobacz szczegóły
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* НОМЕРА СТРАНИЦ */}
      {totalPages > 1 && (
        <section className="flex justify-center items-center gap-3 md:gap-4 py-12 md:py-20 bg-[#F7F6F2]">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
            <button
              key={pageNum}
              onClick={() => {
                setCurrentPage(pageNum);
                window.scrollTo({ top: 200, behavior: 'smooth' });
              }}
              className={`w-10 h-10 md:w-12 md:h-12 rounded-full font-bold transition-all duration-300 text-sm md:text-base ${
                currentPage === pageNum 
                ? 'bg-[#ff5a1f] text-white shadow-lg' 
                : 'bg-white text-black border border-zinc-200 hover:border-[#ff5a1f]'
              }`}
            >
              {pageNum}
            </button>
          ))}
        </section>
      )}

      {/* БЕГУЩАЯ СТРОКА */}
      <section className="relative w-screen left-1/2 -translate-x-1/2 py-4 bg-white overflow-hidden border-t border-gray-100 mt-6 md:mt-10">
        <div className="flex animate-marquee whitespace-nowrap">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex items-center">
              {['Huawei', 'Growatt', 'Fronius', 'Ja Solar', 'Enphase', 'Sofar'].map((brand) => (
                <span key={brand} className="mx-6 md:mx-12 text-[9px] md:text-[10px] font-bold text-gray-400 tracking-[0.2em] uppercase">
                  {brand}
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* КАРТА И ЦИФРЫ */}
      <section className="relative w-screen left-1/2 -translate-x-1/2 bg-black flex flex-col items-center overflow-hidden">
        <div className="relative w-full h-[40vh] md:h-[70vh] flex items-center justify-center overflow-hidden border-b border-white/5">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
          <div className="relative w-[280%] md:w-[130%] aspect-[16/10] flex-shrink-0 -translate-y-[10%] md:-translate-y-[15%]">
            <img src="/img/map.jpg" alt="Mapa" className="w-full h-full object-fill opacity-40" />
            <div className="absolute inset-0 z-20 pointer-events-none">
               <div className="absolute top-[62%] left-[50%] transform -translate-x-1/2 -translate-y-1/2">
                  <span className="relative flex h-3 w-3 md:h-6 md:w-6">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff5a1f] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 md:h-6 md:w-6 bg-[#ff5a1f] shadow-[0_0_20px_#ff5a1f]"></span>
                  </span>
               </div>
            </div>
          </div>
        </div>

        <div className="w-full py-10 md:py-24 bg-black flex justify-center">
          <div className="max-w-[1440px] w-full px-4 md:px-10">
            {/* На мобилках используем сетку 2x3 или 3x2 для лучшей читаемости цифр */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8">
              {[
                { n: "1193", t: "Instalacji <br/> w Polsce" },
                { n: "24", t: "Instalacje <br/> w Europie" },
                { n: "911K", t: "Ułożonych <br/> paneli" },
                { n: "4", t: "Krajów <br/> Europy" },
                { n: "13", t: "Lat <br/> doświadczenia" }
              ].map((item, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 20 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true }} 
                  transition={{ duration: 0.5, delay: idx * 0.1 }} 
                  className={`group flex flex-col items-center text-center flex-1 min-w-0 cursor-default ${idx === 4 ? 'col-span-2 md:col-span-1' : ''}`}
                >
                  <span className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-medium text-white group-hover:text-[#ff5a1f] tracking-tighter transition-all duration-300 leading-none">
                    {item.n}
                  </span>
                  <p className="text-[8px] md:text-[10px] text-white/40 group-hover:text-white/80 uppercase tracking-widest font-bold leading-tight mt-2 md:mt-5 transition-colors duration-300" dangerouslySetInnerHTML={{ __html: item.t }} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-marquee { display: flex; width: max-content; animation: marquee 30s linear infinite; }
      `}</style>
    </motion.main>
  );
}