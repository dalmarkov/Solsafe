'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FiPlus, FiMinus, FiGlobe, FiZap, FiShield, FiTrendingUp, FiChevronDown, FiBatteryCharging } from 'react-icons/fi';

// 1. DATA CONFIGURATION
const systemSteps = [
  { 
    title: "01. Panele Fotowoltaiczne", 
    content: "Zastosowanie technologii N-Type i ogniw bifacjalnych pozwala na generowanie energii nawet w pochmurne dni oraz z promieniowania odbitego od podłoża, zwiększając roczny uzysk o 10-20%." 
  },
  { 
    title: "02. Inteligentny Inwerter", 
    content: "Serce systemu z wbudowanym systemem EMS (Energy Management System). Monitoruje wydajność każdego modułu i optymalizuje zużycie prądu w czasie rzeczywistym przez aplikację mobilną." 
  },
  { 
    title: "03. Magazyn Energii", 
    content: "Baterie litowo-żelazowo-fosforanowe (LiFePO4) o żywotności ponad 6000 cykli. Zapewniają zasilanie awaryjne (Full Backup) i chronią przed wzrostami cen energii w godzinach szczytu." 
  },
  { 
    title: "04. Stacja Ładowania EV", 
    content: "Wallbox zintegrowany z domową elektrownią. Inteligentne ładowanie wykorzystuje wyłącznie nadwyżki energii słonecznej, co pozwala na przejechanie 100 km praktycznie za zero złotych." 
  }
];

const pinCoords = [
  { top: '24%', left: '49%', icon: <FiZap /> }, 
  { top: '52%', left: '43.7%', icon: <FiZap /> }, 
  { top: '60%', left: '37%', icon: <FiBatteryCharging /> }, 
  { top: '71%', left: '33%', icon: <FiBatteryCharging /> }, 
];

const detailedBenefits = [
  { 
    id: 'eco', 
    icon: <FiGlobe />, 
    title: "Ekologia i Środowisko", 
    short: "Realny wpływ na dekarbonizację.", 
    long: "Wybierając Solsafe, przyczyniasz się do redukcji smogu i emisji gazów cieplarnianych. System fotowoltaiczny o mocy 10 kWp w ciągu 25 lat pracy oszczędza środowisku tyle dwutlenku węgla, ile pochłonęłoby około 1000 dorosłych drzew. To czyste powietrze dla Twoich dzieci i sąsiadów.", 
    fact: "1000 posadzonych drzew = jedna instalacja domowa." 
  },
  { 
    id: 'save', 
    icon: <FiTrendingUp />, 
    title: "Maksymalna Oszczędność", 
    short: "Zabezpieczenie przed inflacją energetyczną.", 
    long: "Ceny prądu rosną średnio o 10-15% rocznie. Własna elektrownia pozwala 'zamrozić' koszty energii na poziomie bliskim zeru. Dzięki Net-billingowi i optymalizacji autokonsumpcji, każda wyprodukowana kilowatogodzina to realna oszczędność w domowym budżecie od pierwszego dnia.", 
    fact: "Zwrot z inwestycji (ROI) wynosi od 18% do 25% rocznie." 
  },
  { 
    id: 'indep', 
    icon: <FiZap />, 
    title: "Niezależność Energetyczna", 
    short: "Twoje bezpieczeństwo w każdych warunkach.", 
    long: "Z magazynem energii stajesz się odporny na awarie sieci i blackouty. Funkcja zasilania rezerwowego pozwala na nieprzerwaną pracę lodówki, pompy ciepła czy systemów bezpieczeństwa. Przestajesz być zależny od zewnętrznych dostawców i politycznych zmian cen paliw kopalnych.", 
    fact: "Magazyn energii zwiększa autokonsumpcję z 25% do nawet 85%." 
  },
  { 
    id: 'value', 
    icon: <FiShield />, 
    title: "Wzrost Wartości Domu", 
    short: "Inwestycja, która podnosi standard nieruchomości.", 
    long: "Nieruchomości wyposażone w systemy OZE (Odnawialne Źródła Energii) są postrzegane jako segment premium. Dom z niskimi kosztami utrzymania jest znacznie łatwiejszy do sprzedaży lub wynajmu. Instalacja Solsafe podnosi klasę energetyczną budynku, co staje się kluczowe przy certyfikacji energetycznej.", 
    fact: "Wartość rynkowa domu rośnie średnio o 40-60 tys. PLN." 
  }
];

const faqs = [
  { q: "Czy fotowoltaika działa w zimie i w pochmurne dni?", a: "Tak. Panele PV generują energię z promieniowania rozproszonego. Choć uzysk w grudniu jest niższy niż w czerwcu, nowoczesne ogniwa bifacjalne efektywnie wykorzystują światło odbite od śniegu." },
  { q: "Jak długo trwa proces montażu i uruchomienia?", a: "Sam montaż na dachu skośnym trwa zazwyczaj 1-2 dni robocze. Cały proces, wliczając zgłoszenie do operatora sieci (OSD) i wymianę licznika na dwukierunkowy, zamyka się zwykle w 30 dniach." },
  { q: "Co dzieje się z prądem, którego nie zużyję na bieżąco?", a: "Nadwyżki są w pierwszej kolejności gromadzone w Twoim magazynie energii. Gdy bateria jest pełna, prąd trafia do sieci ogólnej, a Ty otrzymujesz za niego środki na tzw. depozyt prosumencki (Net-billing)." },
  { q: "Czy panele fotowoltaiczne wymagają czyszczenia?", a: "W polskim klimacie opady deszczu zazwyczaj wystarczają do utrzymania paneli w czystości. Zalecamy jednak profesjonalny przegląd i ewentualne mycie wodą demineralizowaną raz na 2-3 lata dla zachowania pełnej wydajności." },
  { q: "Ile lat realnie będzie działać moja instalacja?", a: "Gwarancja na wydajność liniową wynosi 25-30 lat, co oznacza, że po tym czasie panele nadal będą generować min. 85% mocy początkowej. Konstrukcje wsporcze i okablowanie są projektowane na 40+ lat pracy." },
  { q: "Czy system Solsafe jest odporny na grad i silny wiatr?", a: "Nasze moduły posiadają certyfikację na uderzenia gradu o średnicy 25mm pędzącego z prędkością 83 km/h oraz wytrzymują obciążenie wiatrem do 2400 Pa (ok. 220 km/h)." }
];

export default function SolarHowItWorksFinal() {
  const [activeStep, setActiveStep] = useState(0);
  const [expandedBenefit, setExpandedBenefit] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    const scrollToTop = () => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      document.documentElement.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    };
    requestAnimationFrame(scrollToTop);
    const timer = setTimeout(scrollToTop, 60);
    return () => {
      clearTimeout(timer);
      if ('scrollRestoration' in history) history.scrollRestoration = 'auto';
    };
  }, []);

  return (
    <main className="bg-white min-h-screen overflow-x-hidden font-sans relative z-10">
      
      {/* --- 1. HERO --- */}
      <section className="bg-white pt-24 md:pt-40 pb-8 px-6 md:px-10 flex flex-col items-center text-center text-black">
        <h1 className="text-3xl md:text-6xl lg:text-[75px] font-light tracking-tight max-w-[1200px] mb-8 uppercase">
          JAK TO DZIAŁA
        </h1>
      </section>

      {/* --- 2. INTERACTIVE SECTION (HOTSPOTS) --- */}
      <section className="max-w-[1600px] mx-auto px-4 md:px-10 grid lg:grid-cols-12 gap-10 items-center pb-20">
        
        <div className="lg:col-span-7 order-1 lg:order-2 flex justify-start">
          <div className="relative w-full aspect-[4/3] max-w-[850px]">
            <Image
              src="/img/o-energii/home.jpg"
              alt="Schemat Solsafe"
              fill
              className="object-contain object-left"
              priority
            />

            {pinCoords.map((pin, index) => (
              <div
                key={index}
                style={{ top: pin.top, left: pin.left }}
                className="absolute z-30 -translate-x-1/2 -translate-y-1/2"
              >
                <motion.div
                  initial={false}
                  animate={{
                    scale: activeStep === index ? 1.2 : 1,
                  }}
                  onMouseEnter={() => setActiveStep(index)}
                  className="relative flex items-center justify-center cursor-pointer"
                >
                  <div className={`
                    w-4 h-4 md:w-6 md:h-6 rounded-full border-2 border-white shadow-lg transition-colors duration-500
                    ${activeStep === index ? 'bg-[#ff5a1f]' : 'bg-white'}
                  `} />

                  <AnimatePresence>
                    {activeStep === index && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.5 }}
                        animate={{ opacity: 1, y: -30, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.5 }}
                        className="absolute bg-white p-2 rounded-xl shadow-2xl border border-zinc-100 text-[#ff5a1f] text-xl md:text-2xl"
                      >
                        {pin.icon}
                        <div className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-3 h-3 bg-white rotate-45 border-r border-b border-zinc-100" />
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {activeStep === index && (
                    <motion.div
                      animate={{ scale: [1, 2.5], opacity: [0.5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                      className="absolute inset-0 bg-[#ff5a1f] rounded-full -z-10"
                    />
                  )}
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1 h-full z-10">
          {systemSteps.map((step, index) => (
            <div key={index} className={`border-b border-zinc-100 py-3 md:py-6 ${index === 3 ? 'border-0' : ''}`}>
              <button
                onMouseEnter={() => setActiveStep(index)}
                onClick={() => setActiveStep(index)}
                className="w-full flex items-center justify-between text-left group"
              >
                <span className={`text-lg md:text-2xl font-light transition-all ${activeStep === index ? 'text-[#ff5a1f]' : 'text-zinc-400 group-hover:text-zinc-900'}`}>
                  {step.title}
                </span>
                <span className={`transition-transform duration-300 ${activeStep === index ? 'rotate-180' : ''}`}>
                  {activeStep === index ? <FiMinus className="text-[#ff5a1f]" /> : <FiPlus className="text-zinc-300" />}
                </span>
              </button>
              <AnimatePresence>
                {activeStep === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="pt-3 pb-2 text-zinc-500 text-sm md:text-lg font-light leading-relaxed">
                      {step.content}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* --- 3. BENEFITS BLOCK --- */}
      <section className="bg-zinc-50 py-12 md:py-20 px-0 md:px-10 border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 md:px-0 space-y-4 md:space-y-6">
          {detailedBenefits.map((benefit) => (
            <motion.div key={benefit.id} layout className={`bg-white rounded-3xl md:rounded-[40px] overflow-hidden border border-zinc-100 transition-all duration-500 ${expandedBenefit === benefit.id ? 'shadow-2xl' : 'hover:shadow-lg'}`}>
              <div onClick={() => setExpandedBenefit(expandedBenefit === benefit.id ? null : benefit.id)} className="p-5 md:p-12 cursor-pointer flex flex-col md:flex-row items-center md:items-start justify-between gap-4 md:gap-8">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-3 md:gap-10 text-black">
                  <div className="text-3xl md:text-5xl text-[#ff5a1f]">{benefit.icon}</div>
                  <div className="text-center md:text-left">
                    <h4 className="text-lg md:text-3xl font-medium mb-1 md:mb-3 uppercase tracking-tight">{benefit.title}</h4>
                    <p className="text-zinc-400 font-light text-xs md:text-lg italic">{benefit.short}</p>
                  </div>
                </div>
                <div className={`p-2 md:p-4 rounded-full border border-zinc-100 transition-transform duration-500 ${expandedBenefit === benefit.id ? 'rotate-180 bg-zinc-900 text-white' : 'bg-zinc-50 text-black'}`}>
                  <FiChevronDown size={18} />
                </div>
              </div>
              <AnimatePresence>
                {expandedBenefit === benefit.id && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="px-5 md:px-12 pb-8 md:pb-12 text-black">
                    <div className="h-[1px] w-full bg-zinc-100 mb-6 md:mb-10" />
                    <div className="grid lg:grid-cols-12 gap-6 md:gap-10">
                      <div className="lg:col-span-8">
                        <p className="text-zinc-500 text-sm md:text-xl font-light leading-relaxed">{benefit.long}</p>
                      </div>
                      <div className="lg:col-span-4 bg-orange-50 rounded-2xl md:rounded-3xl p-5 md:p-8">
                        <h5 className="font-bold text-orange-700 uppercase text-[9px] md:text-xs tracking-widest mb-2 md:mb-4">Kluczowy fakt</h5>
                        <p className="text-orange-900 text-xs md:text-medium font-medium">{benefit.fact}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- 4. FAQ --- */}
      <section className="py-16 md:py-32 px-6 md:px-10 max-w-5xl mx-auto text-black">
        <h2 className="text-2xl md:text-4xl font-light text-center mb-10 md:mb-20 tracking-tight uppercase">Często zadawane pytania</h2>
        <div className="grid grid-cols-1 gap-1 md:gap-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-zinc-200">
              <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between py-5 md:py-10 text-left group">
                <span className={`text-base md:text-xl font-medium transition-colors ${openFaq === i ? 'text-[#ff5a1f]' : 'text-zinc-900 group-hover:text-[#ff5a1f]'}`}>{faq.q}</span>
                <FiPlus className={`transition-transform duration-300 ${openFaq === i ? 'rotate-45 text-[#ff5a1f]' : 'text-zinc-300'}`} />
              </button>
              <AnimatePresence>
                {openFaq === i && (
                  <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="overflow-hidden">
                    <p className="pb-6 md:pb-10 text-zinc-500 font-light text-sm md:text-lg leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* --- 5. CTA --- */}
      <section className="bg-white pb-32 md:pb-40 px-6 md:px-10">
        <div className="max-w-[1600px] mx-auto flex flex-col items-center">
          <h2 className="text-zinc-900 text-2xl md:text-5xl font-light mb-16 uppercase tracking-tight text-center">
            Jeśli wciąż masz pytania, <br className="hidden md:block" /> dowiedz się więcej
          </h2>
          <Link href="/kontakt">
            <button className="px-14 py-4 bg-black text-white rounded-full text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-300 hover:bg-[#ff6b00] shadow-lg active:scale-95">
              Skontaktuj się z ekspertem
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}