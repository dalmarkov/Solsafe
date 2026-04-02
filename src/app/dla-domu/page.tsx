'use client'

import { motion, AnimatePresence, Variants } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
}

const products = [
  { 
    id: 0,
    title: "Instalacje Fotowoltaiczne", 
    details: "Nasze systemy eliminują wpływ zacienienia, zapewniając do 25% więcej energii. Oferujemy monitoring każdego panelu z osobna oraz 25-letnią gwarancję.",
    img: "/img/dla-domu/dla_domu1.jpg"
  },
  { 
    id: 1,
    title: "Magazyny Energii", 
    details: "Zwiększ autokonsumpcję i zabezpiecz swój dom przed przerwami w dostawie prądu. Dobieramy pojemność baterii idealnie pod Twój profil zużycia.",
    img: "/img/dla-domu/magazyn.jpg"
  },
  { 
    id: 2,
    title: "Elektryka & Automatyka", 
    details: "Od kompleksowego okablowania po inteligentne zarządzanie domem. Projektujemy systemy, które uczą się Twoich nawyków, oszczędzając energię.",
    img: "/img/dla-domu/electric.jpg"
  },
  { 
    id: 3,
    title: "Ładowarki elektryczne", 
    details: "Stacje typu Wallbox zintegrowane z fotowoltaiką. Funkcja DLB automatycznie dostosowuje moc ładowania, chroniąc instalację przed przeciążeniem.",
    img: "/img/dla-domu/IMG_0555.jpg"
  },
  { 
    id: 4,
    title: "Pompy Ciepła", 
    details: "Dobieramy urządzenia o najwyższym współczynniku COP. W połączeniu z PV, pompa ciepła staje się niemal darmowym źródłem ogrzewania.",
    img: "/img/dla-domu/pomp.mp4",
    poster: "/img/dla-domu/pomp-poster.png" 
  }
]

function ProductMedia({ src, title, isVideo, poster }: { src: string; title: string; isVideo: boolean; poster?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (isVideo && videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    if (isVideo && videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <div 
      className="absolute inset-0 w-full h-full transform-gpu bg-zinc-200"
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}
    >
      {isVideo ? (
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
          style={{ backfaceVisibility: 'hidden', opacity: 1 }}
        />
      ) : (
        <Image 
          src={src} 
          alt={title} 
          fill 
          className="object-cover transition-transform duration-[1.2s] group-hover:scale-105" 
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      )}
    </div>
  );
}

export default function Page() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  return (
    <main className="min-h-screen bg-[#f9f9fb] text-zinc-900 overflow-x-hidden font-sans">
      
      {/* HERO SECTION — Оптимизировано LCP */}
      <section className="relative w-full h-[75dvh] md:h-[90vh] bg-black overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image 
            src="/img/dla_domu2-blur.jpg" 
            alt="Dla Domu" 
            fill 
            priority 
            quality={90}
            className="object-cover" 
          />
          {/* Удален backdrop-blur для стабильной загрузки */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        </div>
        <div className="relative z-20 h-full w-full"> 
          <div className="max-w-[1600px] mx-auto h-full flex flex-col justify-end pb-24 md:pb-32 px-8 md:px-24">
            <motion.h1 initial="hidden" animate="show" variants={fadeUp}
              className="text-white text-4xl md:text-8xl font-light tracking-tight uppercase italic"
            >
              Twój dom. <br/>
              <span className="font-medium not-italic text-white/90">Twoja energia.</span>
            </motion.h1>
          </div>
        </div>
      </section>

      <section className="relative z-30 -mt-10 bg-[#f5f5f7] rounded-t-[24px] md:rounded-t-[40px] pb-16">
        
        {/* Адаптированный заголовок для мобильных */}
        <div className="max-w-[1400px] mx-auto px-6 pt-28 mb-20 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }} 
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-3xl md:text-7xl font-normal tracking-tight text-zinc-900 leading-tight md:leading-none"
          >
            Energia stworzona <br className="md:hidden" /> dla Twojego komfortu
          </motion.h2>
        </div>

        <div className="max-w-[1450px] mx-auto px-4 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {products.map((item) => {
              const isFullWidth = item.id === 0;
              const isExpanded = expandedId === item.id;
              const isVideo = item.img.endsWith('.mp4');

              return (
                <div key={item.id} className={`${isFullWidth ? 'md:col-span-2' : 'col-span-1'} flex flex-col`}>
                  
                  <motion.div 
                    layout="position"
                    onClick={() => toggleExpand(item.id)}
                    className={`relative overflow-hidden rounded-[20px] md:rounded-[24px] group cursor-pointer shadow-sm z-10 transform-gpu
                      ${isFullWidth ? 'h-[500px] md:h-[700px]' : 'h-[350px] md:h-[450px]'}
                    `}
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    <ProductMedia 
                      src={item.img} 
                      title={item.title} 
                      isVideo={isVideo} 
                      poster={(item as any).poster} 
                    />

                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-500 pointer-events-none" />
                    
                    <div className={`absolute inset-0 flex flex-col items-center justify-start p-8 text-center text-white pointer-events-none
                      ${isFullWidth ? 'pt-12 md:pt-20' : 'pt-10 md:pt-14'}`}
                    >
                      <h3 className={`${isFullWidth ? 'text-3xl md:text-5xl' : 'text-2xl md:text-3xl'} font-normal tracking-tight mb-6`}>
                        {item.title}
                      </h3>
                      <div className={`px-6 py-2 border border-white/40 rounded-full text-[10px] font-bold uppercase tracking-widest backdrop-blur-sm transition-all ${isExpanded ? 'opacity-0' : 'opacity-100'}`}>
                        Szczegóły
                      </div>
                    </div>
                  </motion.div>

                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ 
                          height: 'auto', 
                          opacity: 1,
                          transition: { 
                            height: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
                            opacity: { duration: 0.3, delay: 0.2 } 
                          }
                        }}
                        exit={{ 
                          height: 0, 
                          opacity: 0,
                          transition: { 
                            height: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
                            opacity: { duration: 0.2 } 
                          }
                        }}
                        className="overflow-hidden bg-white rounded-b-[24px] -mt-4 shadow-xl border-t border-zinc-50"
                      >
                        <div className="pt-14 pb-12 px-8 text-center flex flex-col items-center">
                          <p className="text-zinc-500 text-sm md:text-base font-light mb-8 max-w-2xl leading-relaxed italic">
                            {item.details}
                          </p>
                          <Link href="/kontakt">
                            <button className="px-10 py-4 border border-zinc-900 text-zinc-900 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all hover:bg-zinc-900 hover:text-white">
                              Zapytaj o bezpłatną wycenę
                            </button>
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          <div className="mt-20 pt-16 border-t border-zinc-300/50 flex justify-center">
            <Link href="/kontakt">
              <motion.button 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="px-14 py-4 bg-black text-white rounded-full text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-300 hover:bg-[#ff6b00] shadow-[0_4px_15px_rgba(0,0,0,0.1)] hover:shadow-[0_10px_25px_rgba(255,107,0,0.25)] active:scale-95"
              >
                Rozpocznij inwestycję
              </motion.button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}