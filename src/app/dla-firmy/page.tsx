'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { BarChart3, Zap, BatteryCharging, Network, Wrench, Activity } from 'lucide-react'

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
    icon: BarChart3,
    desc: "Szczegółowa analiza profilu zużycia mocy.",
    full: "Przeprowadzamy audyt energetyczny obejmujący weryfikację wydajności energetycznej przedsiębiorstwa. Analizujemy profile zużycia energii w układzie rocznym, optymalizujemy moc zamówioną oraz identyfikujemy źródła strat energii biernej. Wynikiem audytu jest raport z gotowymi rekomendacjami modernizacyjnymi, które pozwalają na realną redukcję kosztów operacyjnych i ochronę przed karami od Operatorów Systemów Dystrybucyjnych.",
    img: "/img/dla-firmy/IMG_0558.jpg" 
  },
  { 
    title: "Instalacje fotowoltaiczne", 
    icon: Zap,
    desc: "Projektowanie, montaż, utrzymanie.",
    full: "Dostarczamy kompleksowe rozwiązania fotowoltaiczne typu 'pod klucz' dla przemysłu i biznesu. Każdy projekt poprzedzamy precyzyjną analizą nasłonecznienia oraz analizą strukturalną dachu/gruntu. Korzystamy wyłącznie z komponentów Tier-1, które gwarantują maksymalną wydajność w długim terminie. Nasze instalacje są projektowane tak, aby uzyskać najwyższy współczynnik autokonsumpcji, co drastycznie skraca czas zwrotu z inwestycji (ROI).",
    img: "/img/dla-firmy/montaz.jpg"
  },
  { 
    title: "Magazyn energii", 
    icon: BatteryCharging,
    desc: "Niezależność i bezpieczeństwo.",
    full: "Wdrażamy przemysłowe systemy magazynowania energii (BESS), które stanowią fundament bezpieczeństwa energetycznego firmy. Nasze rozwiązania pozwalają na arbitraż cenowy (magazynowanie energii w taniej taryfie i wykorzystanie w szczycie), eliminację przerw w dostawie prądu (funkcja UPS dla całego obiektu) oraz stabilizację parametrów sieciowych, co chroni wrażliwy sprzęt przed uszkodzeniami.",
    img: "/img/dla-firmy/magazyn.png"
  },
  { 
    title: "Zarządzanie energią", 
    icon: Network,
    desc: "Optymalizacja zużycia energii, optymalizacja procesu.",
    full: "Oferujemy profesjonalne doradztwo w zakresie strategii zakupowych energii elektrycznej. Analizujemy rynek, negocjujemy kontrakty z dostawcami i dobieramy najkorzystniejsze profile taryfowe dopasowane do specyfiki Twojej produkcji. Nasze podejście pozwala ograniczyć ekspozycję firmy na zmienność cen rynkowych, zapewniając stabilność budżetową i przewidywalne koszty energii w długiej perspektywie.",
    img: "/img/dla-firmy/management.jpg"
  },
  { 
    title: "Usługi serwisowe / Konserwacja", 
    icon: Wrench,
    desc: "Przeglądy, opieka techniczna, pomiary, modernizacje, utylizacja.",
    full: "Gwarantujemy najwyższą dostępność operacyjną Twojej elektrowni. Nasz serwis świadczy usługi przeglądów okresowych z wykorzystaniem kamer termowizyjnych, pomiarów elektrycznych oraz certyfikowanych przeglądów instalacji. Zapewniamy szybki czas reakcji (SLA), zdalną diagnostykę usterek oraz wsparcie w zakresie modernizacji systemów, co zapobiega przestojom w produkcji i pozwala utrzymać farmę w najwyższej kondycji technicznej.",
    img: "/img/dla-firmy/service.jpg"
  },
  { 
    title: "Monitoring", 
    icon: Activity,
    desc: "Pełna kontrola nad zużyciem energii w przedsiębiorstwie.",
    full: "Wdrażamy zaawansowane systemy monitoringu (SCADA/EMS), które integrują dane z całej infrastruktury energetycznej firmy. Dzięki analityce danych w czasie rzeczywistym, masz pełną kontrolę nad wydajnością instalacji OZE, bieżącym zużyciem energii oraz stanem magazynów energii. Systemy raportowania pozwalają na wyciąganie wniosków w celu dalszej optymalizacji procesów produkcyjnych i precyzyjnego zarządzania kosztami energii.",
    img: "/img/dla-firmy/monitoring.jpg"
  }
]

export default function Page() {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-[#f9f9fb] font-sans overflow-x-hidden antialiased">

      {/* HERO SECTION */}
      <section className="relative w-full h-[75dvh] md:h-[90vh] bg-black overflow-hidden transform-gpu">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/img/for_firm-blur.jpg"
            alt="Fotowoltaika dla Firm"
            fill
            priority
            quality={90}
            className="object-cover opacity-90"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
        </div>

        <div className="relative z-20 h-full w-full"> 
          <div className="max-w-[1440px] mx-auto h-full flex flex-col justify-end pb-20 px-6 md:px-10">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="text-white text-4xl md:text-8xl font-light tracking-tighter leading-tight md:leading-[1.1] mb-8 uppercase italic"
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
      <section className="relative z-30 -mt-10 w-full bg-[#f9f9fb] rounded-t-[24px]">
        <motion.div
          className="w-full py-16 md:py-24 px-2 md:px-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-32 items-start">

              {/* LEFT SIDE — DESKTOP ONLY */}
              <div className="lg:sticky lg:top-40 hidden lg:block transform-gpu">
                <h2 className="text-3xl md:text-5xl font-light mb-16 tracking-tight text-zinc-900 uppercase">
                  Dla Firmy
                </h2>

                <div className="relative min-h-[450px]">
                  <div className="flex flex-col gap-10">
                    <AnimatePresence mode="wait">
                      {expandedIdx === null ? (
                        <motion.div
                          key="default"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 10 }}
                          transition={{ duration: 0.2 }}
                        >
                          <p className="text-lg md:text-2xl lg:text-3xl font-light leading-snug tracking-tight text-black">
                            Wdrażamy zaawansowane systemy fotowoltaiczne, które realnie wpływają
                            na rentowność Twojego przedsiębiorstwa.
                          </p>
                        </motion.div>
                      ) : (
                        <motion.div
                          key={`service-${expandedIdx}`}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 10 }}
                          transition={{ duration: 0.2 }}
                        >
                          <span className="text-black text-[10px] font-black uppercase tracking-[0.5em] block mb-8">
                            {services[expandedIdx].title}
                          </span>
                          <p className="text-lg md:text-2xl lg:text-3xl font-light leading-snug tracking-tight text-black mb-12">
                            {services[expandedIdx].full}
                          </p>
                          {/* Иконка в левой части под текстом */}
                          <div className="text-[#ff5a1f] opacity-30 drop-shadow-xl">
                            {(() => {
                              const Icon = services[expandedIdx].icon;
                              return <Icon size={160} strokeWidth={1} />;
                            })()}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>

              {/* RIGHT SIDE — CARDS (ACCORDIONS) */}
              <div className="grid gap-4">
                <h2 className="lg:hidden text-3xl font-normal mb-8 tracking-light text-zinc-900 uppercase leading-tight text-center">
                  Dla Firmy
                </h2>

                {services.map((item, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    onClick={() => setExpandedIdx(expandedIdx === idx ? null : idx)}
                    className={`p-6 md:p-8 rounded-[20px] bg-white border transition-all duration-300 group cursor-pointer transform-gpu ${
                      expandedIdx === idx 
                        ? 'border-[#ff5a1f] shadow-xl' 
                        : 'border-zinc-100 shadow-sm hover:border-zinc-200'
                    }`}
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    <div className="flex items-center justify-between gap-4">
                      {/* Desktop arrow */}
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

                      {/* Mobile arrow */}
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
                          <div className="pt-6 mt-6 border-t border-zinc-100 transform-gpu">
                            <p className="text-zinc-900 text-sm md:text-lg leading-snug font-medium tracking-tight mb-6 italic">
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
              className="mt-20 md:mt-32 pt-16 border-t border-zinc-200 flex flex-col items-center text-center"
            >
              <p className="text-zinc-500 text-base md:text-lg font-light mb-10 max-w-2xl leading-relaxed">
                Szukasz optymalizacji kosztów energii w swojej firmie? Razem zbudujemy wydajny system, który zabezpieczy przyszłość Twojego biznesu.
              </p>
              <Link href="/kontakt">
                <button className="px-10 md:px-16 py-4 md:py-5 bg-black text-white rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] transition-all duration-300 hover:bg-[#ff6b00] shadow-xl active:scale-95 transform-gpu">
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