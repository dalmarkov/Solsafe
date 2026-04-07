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
    details: "Nasze inteligentne systemy oparte na technologii mikrofalowników całkowicie eliminują negatywny wpływ zacienienia, zapewniając do 25% więcej energii w porównaniu do tradycyjnych instalacji szeregowych. Dzięki architekturze rozproszonej każdy panel pracuje jako niezależna jednostka, co pozwala na precyzyjny monitoring wydajności każdego modułu z osobna za pośrednictwem dedykowanej aplikacji mobilnej. Rozwiązanie to drastycznie podnosi bezpieczeństwo pożarowe poprzez eliminację wysokiego napięcia DC na dachu, a najwyższa na rynku, 25-letnia gwarancja produktowa stanowi fundament wieloletniego spokoju i pełnej niezależności energetycznej Twojego domu.",
    img: "/img/dla-domu/dla_domu1.jpg"
  },
  { 
    id: 1,
    title: "Magazyny Energii", 
    details: "Magazyny energii z SolSafe maksymalizują autokonsumpcję, pozwalając na pełne wykorzystanie darmowej energii również po zmroku. System pełni rolę niezawodnej tarczy ochronnej, gwarantując zasilanie awaryjne w przypadku nagłych przerw w dostawie prądu. Pojemność baterii dobieramy precyzyjnie pod Twój indywidualny profil zużycia, zapewniając bezpieczeństwo technologii LFP oraz realną niezależność od sieci na lata.",
    img: "/img/dla-domu/magazyn.jpg"
  },
  { 
    id: 2,
    title: "Elektryka i Automatyka", 
    details: "Inteligentna automatyka i systemy okablowania to fundament nowoczesnego domu, który uczy się Twoich nawyków. Nasze rozwiązania autonomicznie zarządzają oświetleniem, ogrzewaniem i energią, maksymalizując oszczędności przy zachowaniu najwyższego komfortu. Projektujemy zintegrowane systemy, które przewidują Twoje potrzeby, czyniąc budynek w pełni efektywnym i gotowym na wyzwania przyszłości.",
    img: "/img/dla-domu/electric1.jpg"
  },
  { 
    id: 3,
    title: "Ładowarki elektryczne", 
    details: "Stacje Wallbox integrują ładowanie pojazdu z systemem fotowoltaicznym, tworząc inteligentny obieg czystej energii. Dzięki zaawansowanej funkcji DLB system w czasie rzeczywistym dostosowuje moc ładowania do aktualnego obciążenia sieci, chroniąc domową instalację przed przeciążeniem. To rozwiązanie pozwala na maksymalne wykorzystanie darmowych nadwyżek energii ze słońca, gwarantując najtańsze i najbezpieczniejsze zasilanie Twojego samochodu elektrycznego.",
    img: "/img/dla-domu/ladowarka.mp4",
    poster: "/img/dla-domu/IMG_0555.jpg"
  },
  { 
    id: 4,
    title: "Pompy Ciepła", 
    details: "Pompy ciepła z SolSafe to szczyt efektywności w technologii grzewczej. Dobieramy urządzenia o najwyższym współczynniku COP, które w synergii z instalacją fotowoltaiczną zamieniają darmową energię ze słońca w niemal bezkosztowe źródło ciepła. Nasze systemy zapewniają całoroczny komfort termiczny i minimalne koszty eksploatacji, czyniąc Twój dom w pełni niezależnym od paliw kopalnych oraz niekontrolowanych wzrostów cen rynkowych.",
    img: "/img/dla-domu/pomp.mp4",
    poster: "/img/dla-domu/pomp-poster.png" 
  }
]

function ProductMedia({ src, title, isVideo, poster }: { src: string; title: string; isVideo: boolean; poster?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!isVideo || !videoRef.current) return;

    // Логика автоплея ТОЛЬКО для мобильных устройств
    const observer = new IntersectionObserver(
      ([entry]) => {
        const isMobile = window.innerWidth <= 1024;
        if (isMobile) {
          if (entry.isIntersecting) {
            videoRef.current?.play().catch(() => {});
          } else {
            videoRef.current?.pause();
          }
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(videoRef.current);
    return () => observer.disconnect();
  }, [isVideo]);

  const handleMouseEnter = () => {
    // На десктопе запускаем только при наведении
    if (isVideo && videoRef.current && window.innerWidth > 1024) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    // На десктопе ставим на паузу при уходе курсора
    if (isVideo && videoRef.current && window.innerWidth > 1024) {
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
          style={{ backfaceVisibility: 'hidden' }}
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
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <main className="min-h-screen bg-[#f9f9fb] text-zinc-900 overflow-x-hidden font-sans">
      
      {/* HERO SECTION */}
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
        
        <div className="max-w-[1400px] mx-auto px-6 pt-20 mb-20 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }} 
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-3xl md:text-7xl font-normal tracking-light text-zinc-900 leading-tight md:leading-none"
          >
            Energia stworzona <br className="md:hidden" /> dla Twojego komfortu
          </motion.h2>
        </div>

        <div className="max-w-[1450px] mx-auto px-2 md:px-12">
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
                    className={`relative overflow-hidden rounded-[24px] group cursor-pointer shadow-sm z-10 transform-gpu
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
                    
                    <div className={`absolute inset-0 flex flex-col items-center justify-end p-8 text-center text-white pointer-events-none
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