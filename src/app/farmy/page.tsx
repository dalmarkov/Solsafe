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
      staggerChildren: 0.12,
      delayChildren: 0.25
    }
  }
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
}

const farmServices = [
  { 
    title: "Analiza", 
    desc: "Dobry projekt i dokumentacja to podstawa.",
    full: "Opracujemy koncepcję inwestycji, analizy okresu zwrotu i wskaźników pozyskiwania energii. Przygotujemy za Ciebie wnioski o wydanie wszystkich niezbędnych decyzji oraz dokumenty do warunków przyłączenia."
  },
  { 
    title: "Projektowanie", 
    desc: "Wsparcie finansowe i techniczne projektu.",
    full: "Twój projekt wymaga wsparcia finansowego? Znamy wszystkie dostępne na rynku możliwości i pomożemy Ci je pozyskać. Tworzymy szczegółowy projekt budowlany będący podstawą do wydania pozwoleń." 
  },
  { 
    title: "Budowa", 
    desc: "Sprawne i profesjonalne wykonawstwo.",
    full: "Posiadamy własny transport, sprzęt budowlany i ekipy wykonawcze. Nasze doświadczenie w realizacji dużych projektów w Europie gwarantuje najwyższe standardy budowy farm o mocach megawatowych." 
  },
  { 
    title: "O&M", 
    desc: "Stały monitoring i weryfikacja produkcji.",
    full: "Wspieramy Cię również po uruchomieniu farmy. Monitorujemy i weryfikujemy produkcję w pierwszym okresie pracy, co daje Ci gwarancję, że Twoja inwestycja będzie działać na 100% możliwości." 
  }
]

export default function Page() {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-[#f9f9fb] font-sans overflow-x-hidden">

      {/* HERO */}
      <section className="relative w-full h-[75dvh] md:h-[90vh] bg-black overflow-hidden flex flex-col justify-end">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/img/farmy.jpg"
            alt="Farmy Fotowoltaiczne"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent backdrop-blur-[2px]" />
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

      {/* CONTENT */}
      <section className="relative z-30 w-full bg-[#f9f9fb] -mt-10 rounded-t-[24px] shadow-[0_-20px_50px_rgba(0,0,0,0.15)]">
        <motion.div
          className="w-full px-6 md:px-12 py-12 md:py-24"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="max-w-[1440px] mx-auto">
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-32 items-start">
              
              {/* LEFT SIDE — DYNAMIC TEXT (DESKTOP) */}
              <motion.div variants={itemVariants} className="lg:sticky lg:top-40">
                <h2 className="text-3xl md:text-5xl font-light mb-16 tracking-tight text-zinc-900 uppercase">
                  Energia na wielką skalę
                </h2>

                <div className="relative min-h-[400px] hidden lg:block">
                  <AnimatePresence mode="wait">
                    {expandedIdx === null ? (
                      <motion.div
                        key="default-farm"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                      >
                        <p className="text-lg md:text-2xl lg:text-3xl font-light leading-snug tracking-tight text-black">
                          Budowa farm fotowoltaicznych to proces wymagający precyzji i doświadczenia na każdym etapie.
                        </p>
                      </motion.div>
                    ) : (
                      <motion.div
                        key={`farm-service-${expandedIdx}`}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
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
                </div>

                {/* MOBILE ONLY */}
                <div className="lg:hidden mb-8">
                    <p className="text-zinc-500 leading-tight text-xl font-light">
                      Budowa farm fotowoltaicznych wymaga precyzji od analizy gruntu po serwis.
                    </p>
                </div>

                <div className="h-[2px] w-24 bg-[#ff5a1f] mt-12" />
              </motion.div>

              {/* RIGHT SIDE — ACCORDIONS */}
              <div className="grid gap-5">
                {farmServices.map((item, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    onClick={() => setExpandedIdx(expandedIdx === idx ? null : idx)}
                    whileHover={{ x: -10 }}
                    className={`p-8 rounded-[20px] bg-white border transition-all duration-500 group cursor-pointer ${
                      expandedIdx === idx 
                        ? 'border-[#ff5a1f] shadow-2xl' 
                        : 'border-zinc-100 shadow-sm hover:shadow-xl'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className={`hidden lg:flex w-11 h-11 rounded-full items-center justify-center transition-all duration-500 mr-6 border ${
                        expandedIdx === idx ? 'bg-[#ff5a1f] border-[#ff5a1f] text-white' : 'bg-transparent border-zinc-200 text-zinc-400 group-hover:border-[#ff5a1f] group-hover:text-[#ff5a1f]'
                      }`}>
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M15 18l-6-6 6-6" />
                        </svg>
                      </div>

                      <div className="flex-grow">
                        <h4 className={`text-base font-bold uppercase tracking-widest mb-1 transition-colors ${
                          expandedIdx === idx ? 'text-[#ff5a1f]' : 'text-zinc-900 group-hover:text-[#ff5a1f]'
                        }`}>
                          {item.title}
                        </h4>
                        <p className="text-zinc-400 text-xs font-medium uppercase tracking-wider">
                          {item.desc}
                        </p>
                      </div>

                      <div className={`lg:hidden w-10 h-10 rounded-full bg-zinc-50 flex items-center justify-center transition-all duration-500 ${
                        expandedIdx === idx ? 'bg-[#ff5a1f] text-white rotate-180' : ''
                      }`}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>

                    <AnimatePresence>
                      {expandedIdx === idx && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4 }}
                          className="overflow-hidden lg:hidden"
                        >
                          <div className="pt-6 mt-6 border-t border-zinc-100">
                            <p className="text-zinc-900 text-lg leading-snug font-medium tracking-tight italic">
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

            {/* --- DZIERŻAWA --- */}
            <motion.div variants={itemVariants} className="mt-[160px] mb-[60px] flex flex-col items-center">
              
              <div className="text-center mb-[60px]">
                <h2 className="text-3xl md:text-5xl font-light text-zinc-900 uppercase tracking-tight">
                  Zarabiaj na dzierżawie
                </h2>
              </div>

              <div className="relative w-full aspect-square md:aspect-[21/9] rounded-[24px] md:rounded-[32px] overflow-hidden shadow-2xl mb-12 flex items-start justify-center pt-8 md:pt-16">
                <Image 
                  src="/img/farmy/grunt.jpg"
                  alt="Teren pod farmę"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/10 to-transparent" />
                <h3 className="relative z-10 text-white text-center px-4 md:px-6 text-lg md:text-2xl font-light max-w-4xl leading-snug md:leading-relaxed uppercase tracking-wide">
                  Szukamy działek, które spełniają niezbędne warunki pod budowę farmy PV.
                </h3>
              </div>

              <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { label: "Powierzchnia", val: "Min. 1.5 ha" },
                  { label: "Klasa gruntu", val: "IV, V, VI i nieużytki" },
                  { label: "Ukształtowanie", val: "Płaska lub spadek PD" },
                  { label: "Linia energetyczna", val: "Odległość do 300m" },
                  { label: "Odległość od GPZ", val: "Do 8km" },
                  { label: "Stan prawny", val: "Brak MPZP lub zapis o OZE/PV" }
                ].map((spec, i) => (
                  <motion.div 
                    key={i} 
                    whileHover={{ y: -5 }}
                    className="p-8 md:p-10 rounded-[20px] bg-white border border-zinc-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-300"
                  >
                    <p className="text-zinc-400 text-[10px] md:text-[11px] uppercase font-bold mb-4 tracking-[0.2em]">
                      {spec.label}
                    </p>
                    <p className="text-zinc-900 text-base md:text-xl font-medium tracking-tight">
                      {spec.val}
                    </p>
                    <div className="mt-4 h-[1px] w-8 bg-zinc-200" />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* КОНТАКТНЫЙ БЛОК */}
            <motion.div variants={itemVariants} className="w-full border-t border-zinc-200 pt-[80px] flex flex-col items-center text-center">
              <p className="text-zinc-500 text-base md:text-lg font-light mb-10 max-w-3xl px-4 italic leading-relaxed">
                Masz taką działkę i chcesz ją oddać w dzierżawę? <br className="hidden md:block"/>
                Zdaj się na nas – zrobimy to bezkosztowo za Ciebie!
              </p>
              
              <Link href="/kontakt">
                <button className="px-14 py-5 bg-black text-white rounded-full text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-[#ff6b00] transition-all shadow-xl active:scale-95">
                  Rozpocznij inwestycję
                </button>
              </Link>
            </motion.div>

          </div>
        </motion.div>
      </section>

    </main>
  )
}