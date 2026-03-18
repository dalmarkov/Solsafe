'use client'

import { motion, Variants, easeOut } from 'framer-motion'
import Image from 'next/image'

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
    transition: { duration: 0.6, ease: easeOut }
  }
}

const farmServices = [
  { title: "Analiza", desc: "Kompleksowe przygotowanie dokumentacji i audyt terenu." },
  { title: "Projektowanie", desc: "Generalne wykonawstwo instalacji o mocach megawatowych." },
  { title: "Budowa", desc: "Zarządzanie procesem przyłączenia do sieci energetycznej." },
  { title: "O&M", desc: "Stały monitoring techniczny i utrzymanie infrastruktury." }
]

export default function Page() {
  return (
    <main className="min-h-screen bg-[#f9f9fb] font-sans overflow-x-hidden">

      {/* HERO */}
        <section className="relative w-full h-[75dvh] md:h-[90vh] bg-black overflow-hidden flex flex-col justify-end">
          {/* 1. ФОН (Абсолют, не влияет на размер секции) */}
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

          {/* 2. КОНТЕНТ (Прямое позиционирование) */}
          {/* Убрал промежуточный div, теперь pb-20 и px-6 md:px-24 работают точно так же, как в разделе Firma */}
          <div className="relative z-20 w-full max-w-[1600px] mx-auto pb-20 px-6 md:px-24">
              <motion.h1
                key="farmy-hero-title-v2"
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
          className="w-full px-6 md:px-12 py-24"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-32">

              {/* LEFT */}
              <motion.div variants={itemVariants}>
                <h2 className="text-3xl md:text-5xl font-light mb-8 text-zinc-900 uppercase italic">
                  Energia na wielką skalę
                </h2>
                <p className="text-zinc-500 leading-relaxed text-lg font-light max-w-xl mb-8">
                  Budowa farm fotowoltaicznych to proces wymagający precyzji.
                  Zapewniamy wsparcie od analizy gruntu po serwis techniczny.
                </p>
                <div className="h-[2px] w-24 bg-[#ff5a1f]" />
              </motion.div>

              {/* RIGHT */}
              <div className="grid gap-5">
                {farmServices.map((item, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    whileHover={{ y: -6 }}
                    className="p-8 rounded-[18px] bg-white/80 backdrop-blur-md border border-zinc-100 shadow-sm hover:shadow-2xl transition-all duration-500 group cursor-pointer"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-lg font-bold text-zinc-900 uppercase tracking-widest mb-1 group-hover:text-[#ff5a1f] transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-zinc-500 text-sm font-light">
                          {item.desc}
                        </p>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-zinc-50 flex items-center justify-center group-hover:bg-[#ff5a1f] group-hover:text-white transition-all">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <motion.div
              variants={itemVariants}
              className="mt-24 pt-16 border-t border-zinc-200 flex flex-col items-center"
            >
              <button className="w-full md:w-fit px-16 py-6 bg-black text-white rounded-full text-[12px] uppercase tracking-[0.3em] font-bold hover:bg-[#ff5a1f] transition-all duration-500 hover:scale-[1.03] shadow-xl">
                Rozpocznij inwestycję
              </button>
            </motion.div>
          </div>
        </motion.div>
      </section>

    </main>
  )
}