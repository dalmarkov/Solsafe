'use client';

import { motion, useScroll, useSpring, useInView } from 'framer-motion';
import { useRef } from 'react';

const paragraphs = [
  "Solsafe – generalny wykonawca inwestycji fotowoltaicznych. Solsafe to doświadczony generalny wykonawca (EPC), realizujący kompleksowe inwestycje fotowoltaiczne dla wymagających klientów biznesowych oraz projektów wielkoskalowych. Od 2013 roku firma konsekwentnie rozwija swoje kompetencje w obszarze odnawialnych źródeł energii.",
  "Jako generalny wykonawca Solsafe odpowiada za pełen cykl inwestycyjny – od koncepcji i analiz technicznych, przez projektowanie i optymalizację, aż po realizację, uruchomienie oraz obsługę formalną i dokumentacyjną. Taki model współpracy zapewnia inwestorom jeden punkt odpowiedzialności.",
  "Fundamentem działalności Solsafe jest własne zaplecze wykonawcze – wyspecjalizowane zespoły montażowe, park maszynowy oraz doświadczona kadra inżynierska. Dzięki temu firma realizuje inwestycje w sposób bezpośredni i w pełni kontrolowany.",
  "Solsafe koncentruje się na projektach dla sektora biznesowego, farmach fotowoltaicznych oraz instalacjach przemysłowych, gdzie kluczowe znaczenie mają niezawodność, skalowalność oraz maksymalizacja efektywności inwestycji. Każdy projekt jest indywidualnie optymalizowany z wykorzystaniem komponentów klasy TIER 1.",
  "Solsafe to partner dla inwestorów, którzy oczekują więcej niż standardowej realizacji – to generalny wykonawca, który łączy doświadczenie, kontrolę i odpowiedzialność, dostarczając projekty energetyczne o wysokiej wartości i długoterminowej stabilności."
];

const values = [
  { title: "Partnerstwo i Inwestor", text: "Sukces inwestora jest naszą jedyną miarą skuteczności. Nie dostarczamy usług, budujemy długoterminową wartość dla biznesu poprzez aktywne wsłuchiwanie się w potrzeby rynku." },
  { title: "Transparentność Techniczna", text: "Budujemy na faktach. Przejrzystość procesów i pełna odpowiedzialność za każdy etap inwestycji – od projektu po serwis – to fundament zaufania w sektorze OZE." },
  { title: "Ewolucja Technologiczna", text: "Wyznaczamy standardy, zamiast za nimi podążać. Korzystamy wyłącznie z technologii od najstabilniejszych światowych producentów oraz autorskich rozwiązań inżynieryjnych." },
  { title: "Synergia Kompetencji", text: "Własne zaplecze wykonawcze i kadra inżynierska pracują jako jeden organizm. Eliminujemy bariery komunikacyjne, by dostarczać wielkoskalowe projekty terminowo." },
  { title: "Niezawodność i Bezpieczeństwo", text: "Zero kompromisów. Każdy detal instalacji przechodzi rygorystyczną kontrolę jakości, bo wiemy, że stabilna energia to bezpieczeństwo finansowe Twojej firmy." },
  { title: "Ludzie i Wspólne Cele", text: "Nasz zespół to eksperci połączeni wspólną pasją do inżynierii. Szanujemy różnorodne perspektywy i style pracy, bo wiemy, że to one pozwalają nam osiągać więcej jako całość." }
];

const team = [
  { name: "Krzysztof Mazur", role: "Prezes zarządu", dept: "Zarząd", img: "/img/zespol/Krzystof_M.jpeg" },
  { name: "Adrian Kanik", role: "Kierownik projektu", dept: "Dział techniczny", img: "/img/zespol/Adrian_K.jpeg" },
  { name: "Ireneusz Wiecha", role: "Kierownik projektu", dept: "Dział techniczny", img: "/img/zespol/Ireniusz_W.jpg" },
  { name: "Dawid Wawak", role: "Kierownik projektu", dept: "Dział techniczny", img: "/img/zespol/Dawid_W.jpg" },
  { name: "Andrzej Pieróg", role: "Kierownik projektu", dept: "Dział techniczny", img: "" },
  { name: "Wojciech Szpoton", role: "Specjalista ds. technicznych", dept: "Dział techniczny", img: "/img/zespol/Wojtek_Sp.jpg" },
  { name: "Aleksandra Krzysteczko", role: "Dział księgowy", dept: "Dział finansowy", img: "/img/zespol/Ola_K.jpg" },
  { name: "Marta Tarnawa", role: "Dział księgowy", dept: "Dział finansowy", img: "/img/zespol/Marta_T.jpg" },
  { name: "Angelika Śliwa", role: "Dział księgowy", dept: "Dział finansowy", img: "/img/zespol/Angelika_S.jpeg" },
  { name: "Jolanta Kobiernik", role: "Dział księgowy", dept: "Dział finansowy", img: "/img/zespol/Jola_K.jpg" },
];

const departments = ["Zarząd", "Dział techniczny", "Dział finansowy"];

function TimelineBlock({ text, index }: { text: string; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });
  return (
    <div key={index} ref={ref} className="relative md:flex md:items-center min-h-[300px] md:min-h-[400px] py-12 md:py-0">
      <motion.div animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }} transition={{ duration: 0.9, ease: [0.215, 0.61, 0.355, 1] }} className={`pl-10 md:pl-0 md:w-1/2 md:px-12 lg:px-20 ${index % 2 === 0 ? 'md:text-right md:ml-0' : 'md:ml-auto md:text-left'}`}>
        <p className="text-lg md:text-2xl lg:text-3xl font-light leading-snug tracking-tight text-black">{text}</p>
      </motion.div>
      <motion.div animate={isInView ? { scale: 1 } : { scale: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="absolute left-[-5px] md:left-1/2 md:-translate-x-1/2 top-16 md:top-1/2 md:-translate-y-1/2 w-3 h-3 md:w-4 md:h-4 bg-black rounded-full z-20 border-2 border-white" />
    </div>
  );
}

export default function TeamPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start center", "end end"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <main className="min-h-screen bg-white text-black pt-[100px] md:pt-[140px] pb-40 font-sans overflow-x-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
        
        <header className="mb-20 md:mb-32 flex flex-col items-center text-center">
          <motion.h1 initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="text-black text-4xl md:text-6xl lg:text-[75px] font-light tracking-tight max-w-[1200px] mb-8 leading-[1.1]">
            Energia naszych działań
          </motion.h1>
        </header>

        <div ref={containerRef} className="relative mb-32 md:mb-40">
          <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 w-[2px] md:w-[4px] h-full bg-zinc-100" />
          <motion.div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 w-[2px] md:w-[4px] bg-black origin-top z-10" style={{ scaleY }} />
          <div className="relative">
            {paragraphs.map((text, index) => <TimelineBlock key={index} text={text} index={index} />)}
          </div>
        </div>

        <section className="mb-32 md:mb-40">
          <header className="mb-20 flex flex-col items-center text-center">
            <h2 className="text-3xl md:text-5xl font-light tracking-tighter uppercase mb-6">Co jest dla nas najważniejsze</h2>
            <div className="w-24 h-[1px] bg-black opacity-20" />
          </header>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 md:gap-y-24">
            {values.map((val, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.7, delay: i * 0.05 }} className="space-y-6 group">
                <div className="w-8 h-[2px] bg-black transition-all duration-500 group-hover:w-16" />
                <h3 className="text-xl md:text-2xl font-bold tracking-tight uppercase leading-none">{val.title}</h3>
                <p className="text-zinc-500 font-light leading-relaxed md:text-lg">{val.text}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section>
          {departments.map((dept) => (
            <div key={dept} className="mb-24 md:mb-32">
              <header className="mb-12">
                <h2 className="text-2xl md:text-3xl font-light tracking-tighter uppercase mb-2">{dept}</h2>
                <div className="w-16 h-[2px] bg-black" />
              </header>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-16">
                {team.filter(m => m.dept === dept).map((member, i) => (
                  <motion.div key={member.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="group">
                    <div className="aspect-[3/4] bg-zinc-100 mb-6 overflow-hidden rounded-sm border border-zinc-100">
                      {member.img ? (
                        <img src={member.img} alt={member.name} className="w-full h-full object-cover object-center" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-zinc-50"><span className="text-zinc-300 text-[10px] font-black uppercase tracking-[0.3em]">No photo</span></div>
                      )}
                    </div>
                    <div className="space-y-2 px-2 md:px-0">
                      <h4 className="text-lg font-bold uppercase tracking-tight leading-tight">{member.name}</h4>
                      <p className="text-[10px] text-zinc-400 uppercase tracking-widest font-bold">{member.role}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}