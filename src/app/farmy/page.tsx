'use client'

import { useState } from 'react'
import { motion, Variants, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

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
    desc: "Koncepcja, rentownosc, zalozenia.",
    full: "Opracujemy koncepcje inwestycji, analizy okresu zwrotu i wskaznikow pozyskiwania energii. Przygotujemy za Ciebie wnioski o wydanie wszystkich niezbednych decyzji oraz dokumenty do warunkow przylaczenia.",
    img: "/img/farmy/analiza.jpg" 
  },
  { 
    title: "Projektowanie", 
    desc: "Dobor odpowiednich rozwiazan technicznych.",
    full: "Twoj projekt wymaga wsparcia finansowego? Znamy wszystkie dostepne na rynku mozliwosci i pomozemy Ci je pozyskac. Tworzymy szczegolowy projekt budowlany bedacy podstawa do wydania pozwolen.",
    img: "/img/farmy/projektowanie.jpg"
  },
  { 
    title: "Pelna obsluga OSD", 
    desc: "Warunki przylaczeniowe, telemechanika, badania IRiESD.",
    full: "Zarzadzamy pelnym procesem przylaczeniowym: od uzyskania warunkow u Operatora (OSD), przez wdrozenie systemow zdalnej telemechaniki, az po certyfikowane badania zgodnosci IRiESD, gwarantujace bezpieczne i legalne oddawanie energii do sieci.",
    img: "/img/farmy/przylacze.jpg"
  },
  { 
    title: "Budowa", 
    desc: "Dostawa, montaz, utrzymanie.",
    full: "Posiadamy wlasny transport, sprzet budowlany i ekipy wykonawcze. Nasze doswiadczenie w realizacji duzych projektow w Europie gwarantuje najwyzsze standardy budowy farm o mocach megawatowych.",
    img: "/img/farmy/budowa.jpg"
  },
  { 
    title: "O&M", 
    desc: "Monitoring, serwis.",
    full: "Wspieramy Cie rowniez po uruchomieniu farmy. Monitorujemy i weryfikujemy produkcje w pierwszym okresie pracy, co daje Ci gwarancje, ze Twoja inwestycja bedzie dzialac na 100% mozliwosci.",
    img: "/img/farmy/monitoring-farmy.jpg"
  }
]

export default function Page() {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-[#f9f9fb] font-sans overflow-x-hidden antialiased">

      {/* HERO SECTION — Optimized for LCP */}
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

      {/* MAIN SERVICES SECTION */}
      <section className="relative z-30 w-full bg-[#f9f9fb] -mt-10 rounded-t-[24px]">
        <motion.div
          className="w-full px-6 md:px-12 py-16 md:py-24"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-32 items-start">
              
              {/* LEFT SIDE — DYNAMIC TEXT + PHOTO (DESKTOP) */}
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
                          <p className="text-lg md:text-2xl lg:text-3xl font-light leading-snug tracking-tight text-black">
                            {farmServices[expandedIdx].full}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div className="relative w-full h-[350px] md:h-[400px] rounded-[24px] overflow-hidden bg-zinc-100 shadow-lg transform-gpu">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={expandedIdx ?? 'default'}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.4 }}
                          className="absolute inset-0"
                        >
                          <Image
                            src={expandedIdx !== null ? farmServices[expandedIdx].img : "/img/farmy.jpg"}
                            alt="SolSafe Farm Detail"
                            fill
                            className="object-cover"
                            priority={expandedIdx === null}
                            sizes="(max-width: 1024px) 100vw, 50vw"
                          />
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* RIGHT SIDE — ACCORDIONS */}
              <div className="grid gap-5">
                <h2 className="lg:hidden text-3xl font-light mb-8 tracking-tight text-zinc-900 uppercase leading-tight whitespace-nowrap">
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
                            <div className="relative w-full h-[220px] rounded-[16px] overflow-hidden bg-zinc-100 shadow-inner transform-gpu">
                               <Image
                                src={item.img}
                                alt={item.title}
                                fill
                                quality={80}
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 30vw"
                                priority
                              />
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* --- SECTION: ENERGY STORAGE (ENLARGED) --- */}
            <motion.div variants={itemVariants} className="mt-[100px] md:mt-[160px] flex flex-col items-center transform-gpu">
              
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

              {/* УВЕЛИЧЕННАЯ ВЫСОТА БЛОКА: min-h-[600px] md:min-h-[850px] */}
              <div className="max-w-[1440px] w-full grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch bg-zinc-950 rounded-[32px] overflow-hidden shadow-2xl min-h-[600px] md:min-h-[650px]">
                
                {/* ТЕКСТОВЫЙ БЛОК С БОЛЬШИМИ ОТСТУПАМИ: py-20 md:py-32 */}
                <div className="p-8 md:p-24 py-20 md:py-32 flex flex-col justify-center items-start order-2 lg:order-1">
                  <h2 className="text-white text-4xl md:text-6xl font-light mb-8 tracking-tight uppercase leading-tight">
                    Wielkoskalowe <br /> <span className="font-medium">Magazyny Energii</span>
                  </h2>
                  <p className="text-zinc-400 text-lg md:text-2xl font-light leading-relaxed mb-12 max-w-xl">
                    Optymalizujemy prace farm fotowoltaicznych poprzez systemy BESS (Battery Energy Storage System). Zwieksz rentownosc swojej inwestycji, zarzadzajac nadwyzkami energii i stabilizujac parametry sieciowe w czasie rzeczywistym.
                  </p>
                </div>

                <div className="relative h-[450px] lg:h-auto w-full order-1 lg:order-2">
                  <Image 
                    src="/img/farmy/magazyn_industrial.jpg" 
                    alt="Przemyslowy magazyn energii"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  {/* Gradients to blend smoothly with the background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-transparent to-transparent hidden lg:block" />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent lg:hidden" />
                </div>

              </div>
            </motion.div>

            {/* FINAL CONTACT BLOCK */}
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