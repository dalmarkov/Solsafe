'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, Variants, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { FileSearch, DraftingCompass, Waypoints, HardHat, Settings2 } from 'lucide-react'

const containerVariants: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  }
}

const farmServices = [
  { 
    title: "Analiza", 
    icon: FileSearch,
    desc: "Koncepcja, rentownosc, zalozenia.",
    full: "Przeprowadzamy kompleksową analizę wykonalności (feasibility study) inwestycji, obejmującą prognozę uzysku energii oraz precyzyjne wyliczenie wskaźników IRR i NPV. Przygotowujemy pełną strategię inwestycyjną oraz bierzemy na siebie cały proces administracyjny: od uzyskania decyzji o środowiskowych uwarunkowaniach, przez uzyskanie warunków zabudowy, aż po ostateczne warunki przyłączenia do sieci elektroenergetycznej."
  },
  { 
    title: "Projektowanie", 
    icon: DraftingCompass,
    desc: "Dobor odpowiednich rozwiazan technicznych.",
    full: "Opracowujemy wielobranżowe projekty budowlane i wykonawcze, optymalizując układ farmy pod kątem maksymalizacji uzysków energii przy zachowaniu minimalnych kosztów operacyjnych (OPEX). Dobieramy komponenty o najwyższej klasie niezawodności i przeprowadzamy weryfikację bankowalności (bankability) technologii, co jest kluczowe przy ubieganiu się o zewnętrzne finansowanie inwestycji."
  },
  { 
    title: "Pelna obsluga OSD", 
    icon: Waypoints,
    desc: "Warunki przylaczeniowe, telemechanika, badania IRiESD.",
    full: "Zarządzamy pełnym procesem przyłączeniowym, eliminując ryzyka formalno-prawne. Nasze wsparcie obejmuje projektowanie układów automatyki, wdrożenie systemów zdalnego sterowania telemechaniką oraz pełną obsługę procedur odbiorowych. Gwarantujemy przeprowadzenie niezbędnych badań zgodności IRiESD oraz uzyskanie certyfikacji wymaganej przez Operatorów Systemów Dystrybucyjnych (OSD) do legalnego wprowadzenia energii do sieci."
  },
  { 
    title: "Budowa", 
    icon: HardHat,
    desc: "Dostawa, montaz, utrzymanie.",
    full: "Jako generalny wykonawca farm wielkoskalowych posiadamy własne zaplecze techniczne, logistyczne oraz specjalistyczne ekipy montażowe. Nasza kadra inżynierska nadzoruje każdy etap prac budowlanych – od przygotowania terenu i kafarowania, po montaż konstrukcji i instalację elektryczną. Stosujemy rygorystyczne standardy kontroli jakości, co zapewnia terminowość oraz najwyższy poziom bezpieczeństwa wykonania farm o mocach megawatowych."
  },
  { 
    title: "O&M", 
    icon: Settings2,
    desc: "Monitoring, serwis.",
    full: "Zapewniamy profesjonalne zarządzanie eksploatacją i utrzymaniem ruchu (O&M). Nasz autorski system monitoringu 24/7 wykrywa anomalie w czasie rzeczywistym, pozwalając na prewencyjne reagowanie i minimalizację przestojów. Świadczymy usługi przeglądów okresowych, serwisów gwarancyjnych i pogwarancyjnych, co pozwala utrzymać wydajność instalacji na założonym poziomie przez cały cykl życia farmy."
  }
]

export default function Page() {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const playCount = useRef(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const isMobile = window.matchMedia("(max-width: 1024px)").matches;

    if (isMobile) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && playCount.current < 2) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        },
        { threshold: 0.3 }
      );

      const handleVideoEnded = () => {
        playCount.current += 1;
        if (playCount.current >= 2) {
          video.loop = false;
          video.pause();
        }
      };

      video.addEventListener('ended', handleVideoEnded);
      if (containerRef.current) observer.observe(containerRef.current);

      return () => {
        observer.disconnect();
        video.removeEventListener('ended', handleVideoEnded);
      };
    }
  }, []);

  const handleMouseEnter = () => {
    if (window.innerWidth > 1024 && videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth > 1024 && videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <main className="min-h-screen bg-[#f9f9fb] font-sans overflow-x-hidden antialiased">

      <section className="relative w-full h-[75dvh] md:h-[90vh] bg-black overflow-hidden flex flex-col justify-end transform-gpu">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/img/farmy-blur3.jpg"
            alt="Farmy Fotowoltaiczne"
            fill
            priority 
            quality={90} 
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
        </div>

        <div className="relative z-20 w-full max-w-[1600px] mx-auto pb-20 px-6 md:px-24">
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white text-4xl md:text-8xl font-light tracking-tight mb-6 uppercase italic"
          >
            Farmy <br className="hidden md:block" />
            <span className="font-medium not-italic text-white/90">
              Fotowoltaiczne.
            </span>
          </motion.h1>
        </div>
      </section>

      <section className="relative z-30 w-full bg-[#f9f9fb] -mt-10 rounded-t-[24px]">
        <motion.div
          className="w-full px-2 md:px-12 py-16 md:py-24" 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-32 items-start">
              
              <motion.div variants={itemVariants} className="lg:sticky lg:top-40 hidden lg:block transform-gpu">
                <h2 className="text-3xl md:text-5xl font-light mb-16 tracking-tight text-zinc-900 uppercase">
                  Energia na wielka skale
                </h2>

                <div className="relative min-h-[450px]">
                  <div className="flex flex-col gap-10">
                    <AnimatePresence mode="wait">
                      {expandedIdx === null ? (
                        <motion.div
                          key="default-farm"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 10 }}
                          transition={{ duration: 0.2 }}
                        >
                          <p className="text-lg md:text-2xl lg:text-3xl font-light leading-snug tracking-tight text-black">
                            Budowa farm fotowoltaicznych to proces wymagajacy precyzji i doswiadczenia na kazdym etapie.
                          </p>
                        </motion.div>
                      ) : (
                        <motion.div
                          key={`farm-service-${expandedIdx}`}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 10 }}
                          transition={{ duration: 0.2 }}
                        >
                          <span className="text-black text-[10px] font-black uppercase tracking-[0.5em] block mb-8">
                            {farmServices[expandedIdx].title}
                          </span>
                          <p className="text-lg md:text-2xl lg:text-3xl font-light leading-snug tracking-tight text-black mb-12">
                            {farmServices[expandedIdx].full}
                          </p>
                          <div className="text-[#ff5a1f] opacity-30 drop-shadow-xl">
                            {(() => {
                              const Icon = farmServices[expandedIdx].icon;
                              return <Icon size={180} strokeWidth={1.2} />;
                            })()}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>

              <div className="grid gap-5">
                <h2 className="lg:hidden text-3xl font-normal mb-8 tracking-tight text-zinc-900 uppercase leading-tight text-center">
                  Energia na wielka skale
                </h2>

                {farmServices.map((item, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    onClick={() => setExpandedIdx(expandedIdx === idx ? null : idx)}
                    className={`p-6 md:p-8 rounded-[20px] bg-white border transition-all duration-300 group cursor-pointer transform-gpu ${
                      expandedIdx === idx 
                        ? 'border-[#ff5a1f] shadow-xl' 
                        : 'border-zinc-100 shadow-sm'
                    }`}
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className={`hidden lg:flex w-11 h-11 rounded-full flex-shrink-0 items-center justify-center transition-all duration-300 mr-2 border ${
                        expandedIdx === idx 
                          ? 'bg-[#ff5a1f] border-[#ff5a1f] text-white' 
                          : 'bg-transparent border-zinc-200 text-zinc-400 group-hover:text-[#ff5a1f]'
                      }`}>
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M15 18l-6-6 6-6" />
                        </svg>
                      </div>

                      <div className="flex-grow">
                        <h4 className={`text-sm md:text-base font-bold uppercase tracking-widest mb-1 transition-colors ${
                          expandedIdx === idx ? 'text-[#ff5a1f]' : 'text-zinc-900'
                        }`}>
                          {item.title}
                        </h4>
                        <p className="text-zinc-400 text-[10px] md:text-xs font-medium uppercase tracking-wider">
                          {item.desc}
                        </p>
                      </div>

                      <div className={`lg:hidden w-10 h-10 aspect-square rounded-full flex-shrink-0 flex items-center justify-center transition-all duration-300 ${
                        expandedIdx === idx 
                          ? 'bg-[#ff5a1f] text-white rotate-180' 
                          : 'bg-zinc-50 text-zinc-400'
                      }`}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>

                    <AnimatePresence initial={false}>
                      {expandedIdx === idx && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ 
                            height: 'auto', 
                            opacity: 1,
                            transition: { 
                              height: { 
                                type: "spring", 
                                stiffness: 300, 
                                damping: 30, 
                                restDelta: 0.5 
                              },
                              opacity: { duration: 0.2, delay: 0.1 }
                            }
                          }}
                          exit={{ 
                            height: 0, 
                            opacity: 0,
                            transition: { 
                              height: { duration: 0.3, ease: "circOut" },
                              opacity: { duration: 0.15 }
                            }
                          }}
                          className="overflow-hidden lg:hidden will-change-[height,opacity]"
                        >
                          <div className="pt-6 mt-6 border-t border-zinc-100 text-zinc-900 transform-gpu">
                            <p className="text-sm leading-snug font-medium mb-6 italic">
                              {item.full}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div variants={itemVariants} className="mt-[80px] md:mt-[160px] flex flex-col items-center transform-gpu">
              
              <div className="text-center mb-[40px] md:mb-[100px] w-full px-4 flex flex-col items-center">
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="max-w-4xl"
                >
                  <h2 className="text-3xl md:text-7xl font-normal tracking-tight text-zinc-900 leading-tight md:leading-none">
                    Większa moc, <br className="md:hidden" /> maksymalna efektywnosc
                  </h2>
                  <p className="mt-6 md:mt-12 text-zinc-500 text-[10px] md:text-xl font-light uppercase tracking-[0.2em] leading-relaxed">
                    Przemyslowe systemy magazynowania <br className="md:hidden" /> dla Twojej farmy
                  </p>
                </motion.div>
              </div>

              <div 
                ref={containerRef}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="max-w-[1440px] w-full -mx-1 md:mx-0 grid grid-cols-1 lg:grid-cols-5 gap-0 items-stretch bg-zinc-950 rounded-[24px] md:rounded-[32px] overflow-hidden shadow-2xl min-h-[450px] md:min-h-[550px]"
              >
                
                <div className="relative h-[350px] lg:h-auto w-full order-1 lg:order-2 lg:col-span-3 overflow-hidden bg-black">
                  <video
                    ref={videoRef}
                    src="/img/farmy/box_energy.mp4"
                    loop={true}
                    muted
                    playsInline
                    preload="auto"
                    className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-zinc-950 lg:hidden pointer-events-none h-full" />
                  <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-transparent to-transparent hidden lg:block pointer-events-none w-1/3" />
                </div>

                <div className="p-8 md:p-16 py-16 md:py-20 flex flex-col justify-center items-start order-2 lg:order-1 lg:col-span-2 bg-zinc-950">
                  <h2 className="text-white text-4xl md:text-5xl font-light mb-6 tracking-tight uppercase leading-tight">
                    Wielkoskalowe <br /> <span className="font-medium">Magazyny Energii</span>
                  </h2>
                  <p className="text-zinc-400 text-lg md:text-xl font-light leading-relaxed mb-10 max-w-xl">
                    Optymalizujemy prace farm fotowoltaicznych poprzez systemy BESS. Zwieksz rentownosc swojej inwestycji i stabilizuj parametry sieciowe w czasie rzeczywistym.
                  </p>
                </div>

              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="w-full pt-[80px] md:pt-[120px] flex flex-col items-center text-center">
              <p className="text-zinc-500 text-base md:text-lg font-light mb-10 max-w-2xl leading-relaxed">
                Szukasz sprawdzonego partnera do realizacji wielkoskalowej inwestycji OZE? Razem zbudujemy bezpieczna przyszlosc Twojego biznesu.
              </p>
              
              <Link href="/kontakt">
                <button className="px-12 md:px-16 py-5 bg-black text-white rounded-full text-[10px] font-black uppercase tracking-[0.3em] hover:bg-[#ff5a1f] transition-all shadow-xl active:scale-95 transform-gpu">
                  Rozpocznij inwestycje
                </button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </main>
  )
}