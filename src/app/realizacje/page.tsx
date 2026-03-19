'use client';

import { useState, useMemo, useEffect, useRef } from 'react';
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
  const [mounted, setMounted] = useState(false);
  const projectsPerPage = 10;
  
  const projectsRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);

  useEffect(() => {
    setMounted(true);
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (mounted && projectsRef.current) {
      const yOffset = -120;
      const element = projectsRef.current;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }, [currentPage]);

  const categories = ['WSZYSTKIE', 'FARMY PV', 'DLA DOMU', 'DLA FIRMY'];

  const filteredData = useMemo(() => {
    setCurrentPage(1); 
    return filter === 'WSZYSTKIE' 
      ? ALL_PROJECTS 
      : ALL_PROJECTS.filter(p => p.category === filter);
  }, [filter]);

  const currentProjects = filteredData.slice((currentPage - 1) * projectsPerPage, currentPage * projectsPerPage);
  const totalPages = Math.ceil(filteredData.length / projectsPerPage);

  if (!mounted) return <div className="min-h-screen bg-[#0f0f0f]" />;

  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="relative min-h-screen bg-[#0f0f0f] overflow-x-hidden font-sans text-white"
    >
      <div className="fixed inset-0 z-[1] pointer-events-none opacity-[0.10] mix-blend-soft-light noise-bg"></div>
      
      {/* 1. HERO СЕКЦИЯ (400PX) */}
      <section className="relative w-full h-[400px] bg-black overflow-hidden flex items-center justify-center">
        <img 
          src="/img/realizacje/work.png" 
          alt="Work" 
          className="absolute inset-0 w-full h-full object-cover opacity-60" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0f0f0f]" />
        
        {/* ТЕКСТ С ГЛАВНОЙ СТРАНИЦЫ */}
        <div className="relative z-10 px-6 w-full flex justify-center">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-white text-4xl md:text-6xl lg:text-[75px] font-light tracking-tight max-w-[1200px] text-center leading-[1.1]"
          >
            Nasze Realizacje
          </motion.h1>
        </div>
      </section>

      {/* 2. КОНТЕНТ С НАЕЗДОМ */}
      <div className="relative z-20 -mt-20 md:-mt-24">
        {/* ФИЛЬТРЫ */}
        <section className="px-6 md:px-12 mb-12 md:mb-16 text-center">
          <p className="text-sm md:text-lg font-light text-white/60 mb-8 md:mb-12 max-w-2xl mx-auto italic">
            Poznaj niektóre z naszych zrealizowanych projektów.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`will-change-[backdrop-filter] px-10 py-4 border rounded-full font-medium transition-all duration-300 text-[10px] md:text-xs uppercase tracking-widest ${
                  filter === cat 
                  ? 'bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.4)]' 
                  : 'bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white hover:text-black hover:border-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* СЕТКА КАРТОЧЕК */}
        <div ref={projectsRef} className="scroll-mt-32">
          <section className="w-full px-2 md:px-0">
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-[10px]">
              <AnimatePresence mode='popLayout'>
                {currentProjects.map((item) => (
                  <Link href={`/realizacje/${item.id}`} key={item.id} scroll={false}> 
                    <motion.div
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="relative h-[220px] md:h-[420px] overflow-hidden rounded-sm md:rounded-none group cursor-pointer bg-zinc-900"
                    >
                      <img 
                        src={item.img} 
                        alt={item.title} 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/10 to-transparent transition-opacity duration-500 group-hover:opacity-80" />

                      <div className="relative z-10 h-full w-full flex flex-col items-center justify-start p-6 md:p-10 text-center">
                        <h3 className="text-2xl md:text-5xl font-medium text-white mb-2 md:mb-3 tracking-tighter uppercase italic drop-shadow-lg leading-none">
                          {item.title}
                        </h3>
                        <p className="text-white/80 text-xs md:text-base font-light max-w-[240px] md:max-w-sm drop-shadow-md line-clamp-2 md:line-clamp-none">
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
        </div>

        {/* ПАГИНАЦИЯ */}
        {totalPages > 1 && (
          <section className="flex justify-center items-center gap-3 md:gap-4 py-16 md:py-10">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
              <button
                key={pageNum}
                onClick={() => setCurrentPage(pageNum)}
                className={`w-10 h-10 md:w-12 md:h-12 rounded-full font-bold transition-all duration-300 text-sm md:text-base border ${
                  currentPage === pageNum 
                  ? 'bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.2)]' 
                  : 'bg-white/10 backdrop-blur-md text-white border-white/20 hover:bg-white hover:text-black'
                }`}
              >
                {pageNum}
              </button>
            ))}
          </section>
        )}

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
                 <div className="absolute top-[63%] left-[39%] h-1.5 w-1.5 md:h-2 md:w-2 bg-[#ff5a1f]/70 rounded-full"></div>
                 <div className="absolute top-[61%] left-[35%] h-1.5 w-1.5 md:h-2 md:w-2 bg-[#ff5a1f]/70 rounded-full"></div>
                 <div className="absolute top-[72%] left-[32%] h-1.5 w-1.5 md:h-2 md:w-2 bg-[#ff5a1f]/70 rounded-full"></div>
              </div>
            </div>
          </div>

          <div className="w-full py-10 md:py-24 bg-black flex justify-center">
            <div className="max-w-[1440px] w-full px-4 md:px-10">
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8">
                {[
                  { n: "1193", t: "Instalacji <br/> w Polsce" },
                  { n: "24", t: "Instalacje <br/> w Europie" },
                  { n: "911K", t: "Ułożennych <br/> paneli" },
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
      </div>

      {/* БЕГУЩАЯ СТРОКА */}
        <section className="relative w-screen left-1/2 -translate-x-1/2 py-4 bg-white overflow-hidden border-none mt-0">
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

      <style jsx global>{`
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-marquee { display: flex; width: max-content; animation: marquee 30s linear infinite; }
        
        .noise-bg {
          background-image: url("https://grainy-gradients.vercel.app/noise.svg");
        }
      `}</style>
    </motion.main>
  );
}