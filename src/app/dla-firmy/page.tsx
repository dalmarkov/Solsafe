'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.25
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as any }
  }
}

const services = [
  { 
    title: "Audyt energetyczny", 
    desc: "Szczegółowa analiza profilu zużycia mocy.",
    full: "Sprawdzamy, czy parametry energetyczne w Twojej firmie są odpowiednio dobrane. Analizujemy faktury i moc zamówioną, eliminując kary za przekroczenia oraz opłaty za energię bierną."
  },
  { 
    title: "Instalacje fotowoltaiczne", 
    desc: "Projektowanie, montaż i pełna obsługa OSD.",
    full: "Doradzamy, jak optymalnie wykorzystać powierzchnię budynku lub gruntu. Dobieramy wielkość instalacji oraz rodzaj komponentów premium, montujemy i uruchamiamy system."
  },
  { 
    title: "Magazyn energii", 
    desc: "Bezpieczeństwo i niezależność procesów.",
    full: "Zwiększamy autokonsumpcję energii w Twoim przedsiębiorstwie. Magazyn energii chroni przed blackoutami i zapewnia stabilne zasilanie rezerwowe."
  },
  { 
    title: "Zarządzanie energią", 
    desc: "Optymalizacja taryf i negocjacje cen.",
    full: "Dobierzemy najkorzystniejszą grupę taryfową oraz stawki za energię. Będziemy negocjować w Twoim imieniu z dostawcami, dbając o stabilność umów."
  },
  { 
    title: "Usługi serwisowe / Konserwacja", 
    desc: "Stała opieka techniczna i przeglądy.",
    full: "Zapewniamy ciągłość pracy elektrowni poprzez regularne przeglądy. Szybki czas reakcji serwisu gwarantuje minimalizację strat."
  },
  { 
    title: "Monitoring", 
    desc: "Pełna kontrola produkcji i oszczędności.",
    full: "Oferujemy inteligentne systemy monitorowania 24/7. Masz wgląd w czasie rzeczywistym w wydajność instalacji i realne oszczędności."
  }
]

export default function Page() {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-[#f9f9fb] font-sans overflow-x-hidden">

      {/* HERO */}
      <section className="relative w-full h-[75dvh] md:h-[90vh] bg-black overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/img/for_firm1.png"
            alt="Fotowoltaika dla Firm"
            fill
            priority
            className="object-cover opacity-90"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent backdrop-blur-[2px]" />
        </div>

        <div className="relative z-20 h-full w-full"> 
          <div className="max-w-[1440px] mx-auto h-full flex flex-col justify-end pb-20 px-6 md:px-10">
            <motion.h1
              key="hero-main-title"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="text-white text-4xl md:text-8xl font-light tracking-tighter leading-[1.1] mb-8 uppercase italic"
            >
              Inwestycja, która <br className="hidden md:block" />
              <span className="font-medium not-italic text-white/90">
                pracuje na Twój zysk.
              </span>
            </motion.h1>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="relative z-30 -mt-10 w-full bg-[#f9f9fb] rounded-t-[24px] shadow-[0_-20px_50px_rgba(0,0,0,0.15)]">

        <motion.div
          className="w-full py-24 px-6 md:px-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >

          <div className="max-w-[1440px] mx-auto">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-32 items-start">

              {/* LEFT SIDE — DYNAMIC TEXT (DESKTOP) */}
              <motion.div variants={itemVariants} className="lg:sticky lg:top-40">
                <h2 className="text-3xl md:text-5xl font-light mb-16 tracking-tight text-zinc-900 uppercase">
                  Dla Firmy
                </h2>

                <div className="relative min-h-[450px] hidden lg:block">
                  <AnimatePresence mode="wait">
                    {expandedIdx === null ? (
                      <motion.div
                        key="default-content"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                      >
                        <p className="text-lg md:text-2xl lg:text-3xl font-light leading-snug tracking-tight text-black">
                          Wdrażamy zaawansowane systemy fotowoltaiczne, które realnie wpływają
                          na rentowność Twojego przedsiębiorstwa.
                        </p>
                      </motion.div>
                    ) : (
                      <motion.div
                        key={`service-content-${expandedIdx}`}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                      >
                        <motion.span 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="text-black text-[10px] font-black uppercase tracking-[0.5em] block mb-8"
                        >
                          {services[expandedIdx].title}
                        </motion.span>
                        <p className="text-lg md:text-2xl lg:text-3xl font-light leading-snug tracking-tight text-black">
                          {services[expandedIdx].full}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* MOBILE ONLY */}
                <div className="lg:hidden">
                    <p className="text-zinc-500 leading-tight text-xl font-light mb-8">
                      Wdrażamy zaawansowane systemy fotowoltaiczne, które realnie wpływają
                      na rentowność Twojego przedsiębiorstwa.
                    </p>
                </div>

                <div className="h-[2px] w-24 bg-[#ff5a1f] mt-12" />
              </motion.div>

              {/* RIGHT SIDE — CARDS */}
              <div className="grid gap-4">
                {services.map((item, idx) => (
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
                            <p className="text-zinc-900 text-lg leading-snug font-medium tracking-tight">
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

            <motion.div
              variants={itemVariants}
              className="mt-32 pt-16 border-t border-zinc-200 flex flex-col items-center text-center"
            >
              <Link href="/kontakt">
                <button className="px-16 py-5 bg-black text-white rounded-full text-[10px] font-black uppercase tracking-[0.3em] transition-all duration-300 hover:bg-[#ff6b00] shadow-xl active:scale-95">
                  Skontaktuj się z ekspertem
                </button>
              </Link>
            </motion.div>

          </div>
        </motion.div>
      </section>
    </main>
  )
}