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
    title: "Instalacje", 
    desc: "Maksymalna wydajność dzięki technologii mikrofalowników.",
    details: "Nasze systemy PV eliminują wpływ zacienienia, zapewniając do 25% więcej energii w skali roku. Oferujemy monitoring każdego panelu z osobna oraz 25-letnią gwarancję na sprzęt.",
    img: "/img/dla-domu/dla_domu1.jpg"
  },
  { 
    title: "Magazyny Energii", 
    desc: "Twoja własna energia dostępna o każdej porze dnia i nocy.",
    details: "Zwiększ autokonsumpcję i zabezpiecz swój dom przed przerwami w dostawie prądu. Dobieramy pojemność baterii idealnie pod Twój profil zużycia, zapewniając pełne bezpieczeństwo energetyczne.",
    img: "/img/dla-domu/magazyn.jpg"
  },
  { 
    title: "Elektryka & Automatyka", 
    desc: "Nowoczesne instalacje elektryczne i systemy Smart Home.",
    details: "Od kompleksowego okablowania po inteligentne zarządzanie domem. Projektujemy systemy, które uczą się Twoich nawyków, oszczędzając energię i podnosząc komfort życia.",
    img: "/img/dla-domu/electric.jpg"
  },
  { 
    title: "Ładowarki elektryczne", 
    desc: "Szybkie i bezpieczne ładowanie Twojego auta w domu.",
    details: "Stacje typu Wallbox zintegrowane z fotowoltaiką. Dzięki funkcji DLB (Dynamic Load Balancing) system automatycznie dostosowuje moc ładowania, chroniąc Twoją instalację przed przeciążeniem.",
    img: "/img/dla-domu/charger.jpg"
  },
  { 
    title: "Pompy Ciepła", 
    desc: "Czyste i tanie ogrzewanie zintegrowane z słońcem.",
    details: "Dobieramy urządzenia o najwyższym współczynniku wydajności COP. W połączeniu z instalacją fotowoltaiczną, pompa ciepła staje się niemal darmowym źródłem ogrzewania i ciepłej wody.",
    img: "/img/dla-domu/pomp.jpg"
  }
]

export default function Page() {

  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  return (
    <main className="min-h-screen bg-[#f9f9fb] text-zinc-900 overflow-x-hidden">

      {/* HERO — Исправленный вариант с использованием sticky */}
      <section className="relative w-full h-[75dvh] md:h-[90vh] bg-black overflow-hidden">
        {/* 1. ФОН: Стабильная картинка без sticky */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/img/dla_domu2.jpg"
            alt="Dla Domu"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          {/* Твой оригинальный градиент и блюр */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent backdrop-blur-[2px]" />
        </div>

        {/* 2. КОНТЕНТ: Твой оригинальный текст и отступы */}
        <div className="relative z-20 h-full w-full"> 
          <div className="max-w-[1600px] mx-auto h-full flex flex-col justify-end pb-24 md:pb-32 px-8 md:px-24">
            <motion.h1
              key="home-hero-title"
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
              animate={idx === 0 ? "show" : undefined} 
              whileInView={idx !== 0 ? "show" : undefined}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.7, delay: idx === 0 ? 0.5 : 0 }} // Небольшая задержка для первого блока, чтобы он шел после Hero
              className="max-w-[1440px] mx-auto px-6 md:px-24"
            >

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-start">

                {/* TEXT */}
                <div className={idx % 2 !== 0 ? "lg:order-2" : ""}>
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