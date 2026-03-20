'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FiPlus, FiMinus, FiGlobe, FiZap, FiShield, FiTrendingUp, FiChevronDown } from 'react-icons/fi';

// ДАННЫЕ ВТОРОГО БЛОКА (ФАКТЫ ОБНОВЛЕНЫ ПОД РАЗДЕЛЫ)
const detailedBenefits = [
  { 
    id: 'eco',
    icon: <FiGlobe />, 
    title: "Ekologia i Środowisko", 
    short: "Redukcja emisji CO2 i walka z ociepleniem klimatu.",
    long: "Wybierając energię słoneczną, realnie wpływasz na stan planety. Typowa instalacja domowa pozwala uniknąć emisji około 3 ton dwutlenku węgla rocznie. To tak, jakbyś posadził blisko 100 drzew każdego roku.",
    fact: "Przeciętna instalacja 10 kWp w ciągu 25 lat zapobiega emisji ponad 150 ton CO2 do atmosfery."
  },
  { 
    id: 'save',
    icon: <FiTrendingUp />, 
    title: "Maksymalna Oszczędność", 
    short: "Obniżenie rachunków za prąd nawet o 90% rocznie.",
    long: "Instalacja fotowoltaiczna to jedna z najbezpieczniejszych inwestycji finansowych. Przy obecnych cenach energii, system zwraca się średnio w ciągu 5-7 lat, a przez kolejne 20-25 lat generuje czysty zysk.",
    fact: "W ciągu 25 lat eksploatacji, oszczędności na rachunkach mogą przekroczyć 150 000 PLN przy obecnych cenach prądu."
  },
  { 
    id: 'indep',
    icon: <FiZap />, 
    title: "Niezależność Energetyczna", 
    short: "Własna elektrownia to brak obaw o ceny energii.",
    long: "Posiadając własny system PV z magazynem energii, tworzysz autonomiczną wyspę energetyczną. Nawet w przypadku awarii sieci ogólnej (blackoutu), Twój dom może nadal funkcjonować.",
    fact: "Magazyny energii pozwalają na zwiększenie autokonsumpcji z 20% do nawet 80% energii wytworzonej przez panele."
  },
  { 
    id: 'value',
    icon: <FiShield />, 
    title: "Wzrost Wartości Domu", 
    short: "Wyższy standard nieruchomości i certyfikat energetyczny.",
    long: "Domy wyposażone w nowoczesne systemy odnawialnych źródeł energii cieszą się znacznie większym zainteresowaniem na rynku wtórnym. Instalacja Solsafe podnosi klasę energetyczną budynku.",
    fact: "Według badań rynkowych, domy z instalacją PV sprzedają się średnio o 4% drożej niż ich odpowiedniki bez paneli."
  }
];

const systemSteps = [
  { title: "01. Panele Fotowoltaiczne", content: "Wysokowydajne moduły monokrystaliczne zamieniające światło w prąd stały." },
  { title: "02. Inteligentny Inwerter", content: "Zarządza przepływem energii i zamienia prąd DC na AC dla Twojego domu." },
  { title: "03. Magazyn Energii", content: "Przechowuje nadwyżki energii, abyś mógł z nich korzystać po zachodzie słońca." },
  { title: "04. Stacja Ładowania EV", content: "Pozwala na darmowe ładowanie samochodu elektrycznego prosto z Twojej instalacji." }
];

// РАСШИРЕННЫЙ СПИСОК FAQ (10 ВОПРОСОВ)
const faqs = [
  { q: "Czy fotowoltaika działa w zimie i przy zachmurzeniu?", a: "Tak. Panele fotowoltaiczne reagują na promieniowanie świetlne, a nie na temperaturę. Nawet w pochmurne dni system generuje energię, choć z mniejszą intensywnością niż w pełnym słońcu." },
  { q: "Jak długo trwa zwrot z inwestycji?", a: "Średni czas zwrotu inwestycji w Polsce wynosi obecnie od 5 do 8 lat. Okres ten skraca się w przypadku korzystania z dotacji oraz przy rosnących cenach energii elektrycznej." },
  { q: "Co się dzieje z nadwyżkami energii w systemie Net-billing?", a: "Nadwyżki energii są sprzedawane do sieci po cenie rynkowej, a środki trafiają na Twoje konto depozytowe, z którego opłacasz prąd pobierany w nocy lub zimą." },
  { q: "Czy panele wymagają regularnego czyszczenia?", a: "Zazwyczaj deszcz wystarcza do utrzymania paneli w czystości. Zalecamy jednak profesjonalne mycie raz na 2-3 lata, jeśli instalacja znajduje się w miejscu o dużym zapyleniu." },
  { q: "Ile lat gwarancji otrzymuję na system?", a: "Solsafe oferuje 25 lat gwarancji na wydajność paneli oraz standardowo od 10 do 12 lat gwarancji na inwerter i magazyn energii z możliwością przedłużenia." },
  { q: "Czy mój dach wytrzyma ciężar paneli?", a: "Przed montażem nasi inżynierowie przeprowadzają audyt techniczny. Standardowa instalacja waży około 15-20 kg na m², co dla większości konstrukcji dachowych nie stanowi problemu." },
  { q: "Czy instalacja działa podczas awarii prądu w sieci?", a: "Standardowa instalacja wyłącza się ze względów bezpieczeństwa. Jeśli jednak posiadasz magazyn energii z funkcją zasilania awaryjnego (Backup), system przełączy się na pracę wyspową." },
  { q: "Jak dobrać odpowiednią moc instalacji?", a: "Moc dobieramy na podstawie Twojego rocznego zużycia energii. Analizujemy rachunki i planowane inwestycje, takie jak klimatyzacja czy samochód elektryczny." },
  { q: "Czy montaż paneli wiąże się z dziurawieniem dachu?", a: "Stosujemy certyfikowane systemy montażowe dopasowane do rodzaju pokrycia. Są one w pełni szczelne i bezpieczne dla konstrukcji dachu." },
  { q: "Czy mogę monitorować pracę systemu przez telefon?", a: "Tak, każda nasza instalacja posiada moduł WiFi/GSM, który pozwala na podgląd produkcji i zużycia energii w czasie rzeczywistym przez dedykowaną aplikację." }
];

export default function SolarHowItWorksFinal() {
  const [activeStep, setActiveStep] = useState(0);
  const [expandedBenefit, setExpandedBenefit] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="bg-white min-h-screen">
      
      {/* --- 1. HERO HEADER (ЦЕНТРИРОВАННЫЙ НА БЕЛОМ) --- */}
      <section className="bg-white pt-40 pb-16 px-10 flex flex-col items-center text-center">
        <div className="max-w-[1600px] w-full">
          <h1 className="text-zinc-900 text-4xl md:text-6xl lg:text-[75px] font-light tracking-tight max-w-[1200px] mb-8 leading-[1.1] uppercase mx-auto">
            JAK TO DZIAŁA
          </h1>
        </div>
      </section>

      {/* --- 2. INTERACTIVE SECTION --- */}
      <section className="max-w-[1600px] mx-auto px-10 grid lg:grid-cols-12 gap-20 items-start pb-32">
        <div className="lg:col-span-5 space-y-4">
          {systemSteps.map((step, index) => (
            <div key={index} className="border-b border-zinc-100 pb-4">
              <button onClick={() => setActiveStep(index)} className="w-full flex items-center justify-between py-8 text-left group">
                <span className={`text-2xl font-light ${activeStep === index ? 'text-[#ff5a1f]' : 'text-zinc-400'}`}>{step.title}</span>
                {activeStep === index ? <FiMinus className="text-[#ff5a1f]" /> : <FiPlus className="text-zinc-300" />}
              </button>
              <AnimatePresence>
                {activeStep === index && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                    <p className="pb-8 text-zinc-500 text-xl font-light leading-relaxed">{step.content}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
        <div className="lg:col-span-7 relative aspect-[4/3] w-full">
          <Image src="/img/o-energii/dom-anim.png" alt="Schemat" fill className="object-contain lg:scale-110" priority />
        </div>
      </section>

      {/* --- 3. SECOND BLOCK (С РЕАЛЬНЫМИ ФАКТАМИ) --- */}
      <section className="bg-zinc-50 py-32 px-10">
        <div className="max-w-7xl mx-auto space-y-6">
          {detailedBenefits.map((benefit) => (
            <motion.div 
              key={benefit.id} layout
              className={`bg-white rounded-[40px] overflow-hidden border border-zinc-100 transition-all duration-500 ${expandedBenefit === benefit.id ? 'shadow-2xl' : 'hover:shadow-lg'}`}
            >
              <div 
                onClick={() => setExpandedBenefit(expandedBenefit === benefit.id ? null : benefit.id)}
                className="p-10 md:p-12 cursor-pointer flex flex-col md:flex-row items-center md:items-start justify-between gap-8"
              >
                <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
                  <div className="text-5xl text-[#ff5a1f]">{benefit.icon}</div>
                  <div>
                    <h4 className="text-2xl md:text-3xl font-medium mb-3 text-zinc-900">{benefit.title}</h4>
                    <p className="text-zinc-400 font-light text-lg italic">{benefit.short}</p>
                  </div>
                </div>
                <div className={`p-4 rounded-full border border-zinc-100 transition-transform duration-500 ${expandedBenefit === benefit.id ? 'rotate-180 bg-zinc-900 text-white' : ''}`}>
                  <FiChevronDown size={24} />
                </div>
              </div>
              <AnimatePresence>
                {expandedBenefit === benefit.id && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="px-12 pb-12">
                    <div className="h-[1px] w-full bg-zinc-100 mb-10" />
                    <div className="grid lg:grid-cols-12 gap-10">
                      <div className="lg:col-span-8">
                        <p className="text-zinc-500 text-xl font-light leading-relaxed">{benefit.long}</p>
                      </div>
                      <div className="lg:col-span-4 bg-orange-50 rounded-3xl p-8">
                        <h5 className="font-bold text-orange-700 uppercase text-xs tracking-widest mb-4">Kluczowy fakt</h5>
                        <p className="text-orange-900 font-medium">{benefit.fact}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- 4. EXPANDED FAQ (БОЛЬШЕ ВОПРОСОВ) --- */}
      <section className="py-32 px-10 max-w-5xl mx-auto">
        <h2 className="text-4xl font-light text-center mb-16 tracking-tight uppercase">Często zadawane pytania</h2>
        <div className="grid grid-cols-1 gap-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-zinc-200">
              <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between py-10 text-left group">
                <span className={`text-xl font-medium transition-colors ${openFaq === i ? 'text-[#ff5a1f]' : 'text-zinc-900 group-hover:text-[#ff5a1f]'}`}>{faq.q}</span>
                <FiPlus className={`transition-transform duration-300 ${openFaq === i ? 'rotate-45 text-[#ff5a1f]' : 'text-zinc-300'}`} />
              </button>
              <AnimatePresence>
                {openFaq === i && (
                  <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="overflow-hidden">
                    <p className="pb-10 text-zinc-500 font-light text-lg leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}