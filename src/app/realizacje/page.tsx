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

const ALL_PROJECTS = (Array.isArray(projectsData) ? projectsData : [])
  .filter((p: any) => p.id) as Project[];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  },
  exit: { opacity: 0, transition: { duration: 0.2 } }
};

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { duration: 0.5, ease: [0.215, 0.61, 0.355, 1] as const }
  }
};

export default function PortfolioPage() {
  const [filter, setFilter] = useState('WSZYSTKIE');
  const [currentPage, setCurrentPage] = useState(1);
  const [mounted, setMounted] = useState(false);
  const projectsPerPage = 10;
  
  const topSectionRef = useRef<HTMLDivElement>(null);
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

    if (mounted && topSectionRef.current) {
      const yOffset = -120;
      const y = topSectionRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
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

  if (!mounted) return <div className="min-h-screen bg-white" />;

  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative min-h-screen bg-gradient-to-b from-white via-white to-zinc-950 overflow-x-hidden font-sans text-black"
    >
      <div className="fixed inset-0 z-[1] pointer-events-none opacity-[0.05] mix-blend-multiply noise-bg"></div>
      
      {/* 1. HERO */}
      <section className="relative w-full pt-30 pb-10 md:pt-30 md:pb-20 flex items-center justify-center bg-transparent">
        <div className="relative z-10 px-6 w-full text-center">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-black text-4xl md:text-6xl lg:text-[75px] font-light tracking-tight leading-[1.1] max-w-[1200px] mx-auto mb-8"
          >
            Poznaj niektóre z naszych <br className="hidden md:block" /> zrealizowanych projektów.
          </motion.h1>
        </div>
      </section>

      {/* 2. КОНТЕНТ (ФИЛЬТРЫ КАК ТЕКСТ С ЛИНИЕЙ) */}
      <div className="relative z-20" ref={topSectionRef}>
        <section className="px-6 mb-16 text-center">
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className="group relative py-2 text-[11px] md:text-xs font-bold uppercase tracking-[0.2em] transition-colors duration-300"
              >
                <span className={filter === cat ? 'text-black' : 'text-gray-400 group-hover:text-black'}>
                  {cat}
                </span>
                
                {/* Линия под текстом */}
                {filter === cat ? (
                  <motion.div 
                    layoutId="underline"
                    className="absolute left-0 right-0 bottom-0 h-[2px] bg-black"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                ) : (
                  <div className="absolute left-0 right-0 bottom-0 h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                )}
              </button>
            ))}
          </div>
        </section>

        {/* СЕТКА */}
        <div className="max-w-[1550px] mx-auto px-4 md:px-4 pb-16 md:pb-14">
          <AnimatePresence mode='wait'>
            <motion.div 
              key={filter + currentPage}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
            >
              {currentProjects.map((item) => (
                <Link href={`/realizacje/${item.id}`} key={item.id} scroll={false}> 
                  <motion.div
                    variants={cardVariants}
                    className="relative h-[300px] md:h-[450px] overflow-hidden rounded-xl md:rounded-[1.5rem] group cursor-pointer bg-zinc-100 shadow-sm flex flex-col justify-end"
                  >
                    <img src={item.img} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent group-hover:via-black/30 transition-all duration-500" />
                    
                    <div className="relative z-10 p-6 md:p-12 w-full text-left">
                      <h3 className="text-xl md:text-2xl lg:text-3xl font-medium text-white mb-2 tracking-tight uppercase leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-white/70 text-[10px] md:text-xs font-light max-w-xs uppercase tracking-wider">
                        {item.desc}
                      </p>
                      <div className="mt-6 inline-block px-5 py-2 border border-white/30 text-white text-[9px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0 hover:bg-white hover:text-black">
                        Zobacz szczegóły
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* ПАГИНАЦИЯ */}
          {totalPages > 1 && (
            <section className="flex justify-center items-center gap-3 pt-16">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                <button
                  key={pageNum}
                  onClick={() => setCurrentPage(pageNum)}
                  className={`w-10 h-10 rounded-full font-bold transition-all border text-xs ${currentPage === pageNum ? 'bg-black text-white border-black' : 'bg-white/50 backdrop-blur-sm border-gray-200 text-black hover:border-black'}`}
                >
                  {pageNum}
                </button>
              ))}
            </section>
          )}
        </div>

        {/* КАРТА И ЦИФРЫ */}
        <section className="relative w-screen left-1/2 -translate-x-1/2 bg-black flex flex-col items-center overflow-hidden mt-0">
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
                  <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.1 }} className={`group flex flex-col items-center text-center flex-1 min-w-0 cursor-default ${idx === 4 ? 'col-span-2 md:col-span-1' : ''}`}>
                    <span className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-medium text-white group-hover:text-[#ff5a1f] tracking-tighter transition-all duration-300 leading-none">{item.n}</span>
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
          {[0, 1].map((i) => (
            <div key={i} className="flex items-center min-w-full justify-around">
              {['Huawei', 'Growatt', 'Grodno', 'Ja Solar', 'GoodWe', 'Sungrow', 'Trina Solar', 'Canadian Solar', 'TW Solar', 'Jetion Solar'].map((brand) => (
                <span key={brand + i} className="mx-6 md:mx-6 text-[9px] md:text-[10px] font-bold text-gray-400 tracking-[0.2em] uppercase">
                  {brand}
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 40s linear infinite;
        }
        .noise-bg { background-image: url("https://grainy-gradients.vercel.app/noise.svg"); }
      `}</style>
    </motion.main>
  );
}