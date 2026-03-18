'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiPhone, FiMail } from 'react-icons/fi';

const contactData = [
  {
    dept: "Zarząd",
    people: [
      { name: "Krzysztof Mazur", tel: "+48 537 240 689", mail: "k.mazur@solsafe.pl" },
      { name: "Aleksandra Krzysteczko", tel: "+48 532 456 626", mail: "a.krzysteczko@solsafe.pl" }
    ]
  },
  {
    dept: "Dział Finansowy",
    people: [
      { name: "Aleksandra Krzysteczko", tel: "+48 532 456 626", mail: "a.krzysteczko@solsafe.pl" },
      { name: "Marta Tarnawa", tel: "+48 532 560 839", mail: "m.tarnawa@solsafe.pl" },
      { name: "Andżelika Śliwa", tel: "+48 532 356 374", mail: "a.sliwa@solsafe.pl" }
    ]
  },
  {
    dept: "Dział techniczny",
    people: [
      { name: "Adrian Kanik", tel: "+48 532 455 298", mail: "a.kanik@solsafe.pl" },
      { name: "Ireneusz Wiecha", tel: "+48 539 268 390", mail: "i.wiecha@solsafe.pl" }
    ]
  },
  {
    dept: "Zamówienia Publiczne",
    people: [
      { name: "Andrzej Pieróg", tel: "+48 532 545 564", mail: "przetargi@solsafe.pl" },
      { name: "Krzysztof Mazur", tel: "+48 537 240 689", mail: "k.mazur@solsafe.pl" }
    ]
  },
  {
    dept: "Serwis",
    people: [
      { name: "Wsparcie Serwisowe", tel: "+48 537 240 689", mail: "serwis@solsafe.pl" }
    ]
  }
];

export default function KontaktPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Принудительный скролл вверх при загрузке страницы контактов
    window.scrollTo(0, 0);
  }, []);

  if (!mounted) return <div className="min-h-screen bg-[#F7F6F2]" />;

  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen bg-[#F7F6F2] text-[#1a1a1a] pt-[120px] md:pt-[180px] pb-20 px-4 md:px-12 font-sans"
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {contactData.map((item, idx) => (
            <motion.section 
              key={item.dept}
              // Заменил whileInView на animate, чтобы карточки появлялись сразу
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: idx * 0.1,
                ease: [0.215, 0.61, 0.355, 1] 
              }}
              whileHover={{ 
                y: typeof window !== 'undefined' && window.innerWidth > 768 ? -8 : 0,
                backgroundColor: "#ffffff",
              }}
              className="p-6 md:p-10 rounded-[30px] md:rounded-[40px] border border-zinc-200/50 bg-white/40 backdrop-blur-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              <div className="mb-8 md:mb-10">
                <h2 className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400 group-hover:text-[#ff5a1f] transition-colors">
                  {item.dept}
                </h2>
                <div className="mt-3 w-8 h-[1px] bg-zinc-300 group-hover:bg-[#ff5a1f] group-hover:w-full transition-all duration-500" />
              </div>

              <div className="space-y-10 md:space-y-12 flex-grow">
                {item.people.map((person) => (
                  <div key={person.mail} className="flex flex-col group/person">
                    <h3 className="text-xl md:text-2xl font-medium tracking-tight mb-3 md:mb-4 group-hover/person:text-[#ff5a1f] transition-colors">
                      {person.name}
                    </h3>
                    <div className="flex flex-col space-y-2.5 md:space-y-3">
                      <a 
                        href={`tel:${person.tel?.replace(/\s/g, '')}`} 
                        className="text-xs md:text-sm font-light text-zinc-500 hover:text-black flex items-center gap-3 transition-colors"
                      >
                        <FiPhone className="text-[#ff5a1f]" />
                        {person.tel}
                      </a>
                      <a 
                        href={`mailto:${person.mail}`} 
                        className="text-xs md:text-sm font-light text-zinc-400 hover:text-[#ff5a1f] flex items-center gap-3 transition-colors break-all"
                      >
                        <FiMail className="opacity-50" />
                        {person.mail}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>
          ))}
        </div>
      </div>
    </motion.main>
  );
}