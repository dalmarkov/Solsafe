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

// ОБНОВЛЕННЫЕ 6 РАЗДЕЛОВ С ПОЛНЫМ ИНФОРМАЦИОННЫМ НАПОЛНЕНИЕМ
const services = [
  { 
    title: "Audyt energetyczny", 
    desc: "Szczegółowa analiza profilu zużycia mocy.",
    full: "Sprawdzamy, czy parametry energetyczne w Twojej firmie są odpowiednio dobrane. Analizujemy faktury и moc zamówioną, eliminując kary za przekroczenia oraz opłaty za energię bierną. Doradzamy, jak zoptymalizować gospodarkę, by realnie obniżyć koszty stałe."
  },
  { 
    title: "Instalacje fotowoltaiczne", 
    desc: "Projektowanie, montaż i pełna obsługa OSD.",
    full: "Doradzamy, jak optymalnie wykorzystać powierzchnię budynku lub gruntu. Dobieramy wielkość instalacji oraz rodzaj komponentów premium, montujemy, podłączamy и uruchamiamy system. Przejmujemy na siebie wszystkie formalności związane ze zgłoszeniem do sieci."
  },
  { 
    title: "Magazyn energii", 
    desc: "Bezpieczeństwo i niezależność procesów.",
    full: "Zwiększamy autokonsumpcję energii w Twoim przedsiębiorstwie. Magazyn energii chroni przed blackoutami i kosztownymi przestojami linii produkcyjnych, zapewniając stabilne zasilanie rezerwowe w każdych warunkach pogodowych."
  },
  { 
    title: "Zarządzanie energią", 
    desc: "Optymalizacja taryf i negocjacje cen.",
    full: "Po audycie pomożemy dobrać najkorzystniejszą grupę taryfową oraz stawki za energię elektryczną i paliwo gazowe. Będziemy negocjować w Twoim imieniu z dostawcami, dbając nie tylko o cenę, ale także o stabilność i bezpieczeństwo umów."
  },
  { 
    title: "Usługi serwisowe / Konserwacja", 
    desc: "Stała opieka techniczna i przeglądy.",
    full: "Zapewniamy ciągłość pracy Twojej elektrowni poprzez regularne przeglądy okresowe и konserwację aparatury. Szybki czas reakcji serwisu gwarantuje minimalizację strat i pewność, że system zawsze generuje maksymalne uzyski."
  },
  { 
    title: "Monitoring", 
    desc: "Pełna kontrola produkcji i oszczędności.",
    full: "Oferujemy inteligentne systemy monitorowania 24/7. Dzięki zaawansowanej analityce masz wgląd w czasie rzeczywistym w wydajność instalacji, poziom autokonsumpcji i realne oszczędności finansowe generowane przez system Solsafe."
  }
]

export default function Page() {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-[#f9f9fb] font-sans overflow-x-hidden">

      {/* HERO — Твой оригинальный код */}
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

      {/* CONTENT — Твой оригинальный стиль с добавленным функционалом раскрытия */}
      <section className="relative z-30 -mt-10 w-full bg-[#f9f9fb] rounded-t-[24px] shadow-[0_-20px_50px_rgba(0,0,0,0.15)]">

        <motion.div
          className="w-full py-24 px-6 md:px-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >

          <div className="max-w-[1440px] mx-auto">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-32 items-start">

              {/* LEFT — Твой оригинальный код */}
              <motion.div variants={itemVariants}>
                <h2 className="text-3xl md:text-5xl font-light mb-8 tracking-tight text-zinc-900 uppercase italic">
                  Dla Firmy
                </h2>

                <p className="text-zinc-500 leading-relaxed text-lg md:text-xl font-light max-w-xl mb-8">
                  Wdrażamy zaawansowane systemy fotowoltaiczne, które realnie wpływają
                  na rentowność Twojego przedsiębiorstwa. Nasze rozwiązania są
                  skrojone pod profil zużycia energii.
                </p>

                <div className="h-[2px] w-24 bg-[#ff5a1f]" />
              </motion.div>

              {/* RIGHT — Твои карточки с логикой раскрытия */}
              <div className="grid gap-5">

                {services.map((item, idx) => (

                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    onClick={() => setExpandedIdx(expandedIdx === idx ? null : idx)}
                    whileHover={{ y: -6 }}
                    className={`p-8 rounded-[18px] bg-white/80 backdrop-blur-md border transition-all duration-500 group cursor-pointer ${expandedIdx === idx ? 'border-[#ff5a1f] shadow-2xl' : 'border-zinc-100 shadow-sm hover:shadow-2xl'}`}
                  >

                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="text-lg font-bold text-zinc-900 uppercase tracking-widest mb-1 group-hover:text-[#ff5a1f] transition-colors">
                          {item.title}
                        </h4>

                        <p className="text-zinc-500 text-sm font-light">
                          {item.desc}
                        </p>
                      </div>

                      <div className={`w-10 h-10 rounded-full bg-zinc-50 flex items-center justify-center transition-all duration-500 ${expandedIdx === idx ? 'bg-[#ff5a1f] text-white rotate-180' : 'group-hover:bg-[#ff5a1f] group-hover:text-white'}`}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>

                    {/* Раскрывающаяся информация */}
                    <AnimatePresence>
                      {expandedIdx === idx && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="pt-6 mt-6 border-t border-zinc-100">
                            <p className="text-zinc-600 text-sm md:text-base leading-relaxed font-light italic">
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

            {/* CTA — Твой оригинальный код */}
            <motion.div
              variants={itemVariants}
              className="mt-28 pt-16 border-t border-zinc-200 flex flex-col items-center text-center"
            >

              <Link href="/kontakt">
                <button className="px-14 py-4 bg-black text-white rounded-full text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-300 hover:bg-[#ff6b00] shadow-[0_4px_15px_rgba(0,0,0,0.1)] hover:shadow-[0_10px_25px_rgba(255,107,0,0.25)] active:scale-95">
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