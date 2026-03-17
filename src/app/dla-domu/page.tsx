'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0 }
}

const products = [
  { 
    title: "Instalacje Fotowoltaiczne", 
    tag: "Energy Production",
    desc: "Zaawansowane systemy oparte na technologii mikrofalowników. Zapewniamy maksymalną wydajność każdego modułu.",
    details: "Nasze systemy PV charakteryzują się o 25% wyższą wydajnością w skali roku dzięki eliminacji wpływu zacienienia. Oferujemy monitoring na poziomie pojedynczego panelu i 25-letnią gwarancję produktową.",
    img: "/img/dla-domu/dla_domu1.jpg"
  },
  { 
    title: "Ładowarki do samochodów", 
    tag: "E-mobility",
    desc: "Inteligentne stacje ładowania Wallbox zintegrowane z Twoją instalacją.",
    details: "System dynamicznego równoważenia obciążenia (DLB) dba, aby ładowanie auta nie przeciążyło sieci domowej.",
    img: "/img/dla-domu/charger.jpg"
  },
  { 
    title: "Automatyka Domowa", 
    tag: "Smart Control",
    desc: "Zarządzaj energią w czasie rzeczywistym.",
    details: "Solsafe Home App pozwala na inteligentne zarządzanie urządzeniami o wysokim poborze mocy.",
    img: "/img/dla-domu/smart-home.jpg"
  },
  { 
    title: "Elektryka", 
    tag: "Safe Infrastructure",
    desc: "Bezpieczeństwo to podstawa.",
    details: "Od modernizacji rozdzielni po kompleksowe okablowanie inteligentnego domu.",
    img: "/img/dla-domu/electric.jpg"
  },
  { 
    title: "Pompy Ciepła", 
    tag: "Eco Heating",
    desc: "Ekologiczne ogrzewanie.",
    details: "Dobieramy pompy ciepła o najwyższym współczynniku COP.",
    img: "/img/dla-domu/pomp.jpg"
  }
]

export default function Page() {

  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  return (
    <main className="min-h-screen bg-[#f9f9fb] text-zinc-900 overflow-x-hidden">

      {/* HERO — Исправленный вариант с использованием sticky */}
      <section className="relative w-full h-[90vh]">
        {/* Контейнер теперь не имеет clip-path, он просто управляет положением */}
        <div className="absolute inset-0 z-0">
          <div className="sticky top-0 w-full h-[90vh] overflow-hidden">
            <Image
              src="/img/dla_domu2.jpg"
              alt="Dla Domu"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent backdrop-blur-[2px]" />
          </div>
        </div>

        {/* Текст поверх */}
        <div className="relative z-20 h-full flex flex-col justify-end pb-24 md:pb-32 px-8 md:px-24">
          <div className="max-w-[1600px] mx-auto w-full">
            <motion.h1
              initial="hidden"
              animate="show"
              variants={fadeUp}
              transition={{ duration: 0.8 }}
              className="text-white text-4xl md:text-8xl font-light tracking-tight uppercase italic"
            >
              Twój dom. <br/>
              <span className="font-medium not-italic text-white/90">
                Twoja energia.
              </span>
            </motion.h1>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="relative z-30 -mt-10 bg-white rounded-t-[24px] shadow-[0_-20px_50px_rgba(0,0,0,0.15)]">

        <div className="py-24 space-y-32">

          {products.map((item, idx) => (

            <motion.div
              key={idx}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.7 }}
              className="max-w-[1440px] mx-auto px-6 md:px-24"
            >

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-start">

                {/* TEXT */}
                <div className={idx % 2 !== 0 ? "lg:order-2" : ""}>

                  <span className="text-[#ff5a1f] font-semibold text-[10px] uppercase tracking-[0.3em] mb-4 block">
                    {item.tag}
                  </span>

                  <h2 className="text-3xl md:text-5xl font-medium mb-6 tracking-tight leading-none">
                    {item.title}
                  </h2>

                  <p className="text-zinc-500 text-lg font-light leading-relaxed mb-8 max-w-lg">
                    {item.desc}
                  </p>

                  <button
                    onClick={() =>
                      setExpandedIndex(expandedIndex === idx ? null : idx)
                    }
                    className="flex items-center gap-4 group mb-6"
                  >

                    <span className="text-sm font-bold uppercase tracking-widest group-hover:text-[#ff5a1f] transition">
                      {expandedIndex === idx
                        ? "Zwiń informacje"
                        : "Szczegóły rozwiązania"}
                    </span>

                    <motion.div
                      animate={{ rotate: expandedIndex === idx ? 180 : 0 }}
                      className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center group-hover:bg-[#ff5a1f] group-hover:text-white transition"
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <path d="M6 9l6 6 6-6"/>
                      </svg>
                    </motion.div>

                  </button>

                  <AnimatePresence>

                    {expandedIndex === idx && (

                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="overflow-hidden"
                      >

                        <div className="pb-8 pt-4 border-t border-zinc-100">

                          <p className="text-zinc-600 italic mb-8">
                            {item.details}
                          </p>

                          <button className="px-8 py-4 bg-[#ff5a1f] text-white rounded-full text-xs uppercase tracking-widest font-bold hover:bg-black transition shadow-lg">
                            Zapytaj o wycenę
                          </button>

                        </div>

                      </motion.div>

                    )}

                  </AnimatePresence>

                </div>

                {/* IMAGE */}
                <div className={`relative aspect-[15/15] rounded-[24px] overflow-hidden shadow-xl group ${idx % 2 !== 0 ? "lg:order-1" : ""}`}>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full"
                  >

                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      sizes="(max-width:768px) 100vw, 50vw"
                      className="object-cover"
                    />

                  </motion.div>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </section>

    </main>
  )
}