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
  // Исправление гидратации: ждем, пока компонент загрузится в браузере
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Если компонент еще не примонтирован, возвращаем пустой контейнер с тем же фоном, 
  // чтобы избежать "прыжков" и ошибок 404/белого экрана
  if (!mounted) {
    return <div className="min-h-screen bg-[#F7F6F2]" />;
  }

  return (
    <main className="min-h-screen bg-[#F7F6F2] text-[#1a1a1a] pt-[120px] pb-32 px-6 md:px-12 font-sans">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Сетка отделов */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contactData.map((item) => (
            <motion.section 
              key={item.dept} // Используем название отдела как уникальный ключ
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              whileHover={{ 
                y: -10,
                backgroundColor: "#ffffff",
                transition: { duration: 0.3 }
              }}
              className="p-10 rounded-[40px] border border-transparent hover:border-zinc-200 hover:shadow-2xl hover:shadow-orange-500/5 transition-all duration-500 flex flex-col group"
            >
              <div className="mb-10">
                <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-400 group-hover:text-[#ff5a1f] transition-colors">
                  {item.dept}
                </h2>
                <div className="mt-4 w-10 h-0.5 bg-zinc-200 group-hover:bg-[#ff5a1f] group-hover:w-full transition-all duration-500 rounded-full" />
              </div>

              <div className="space-y-12 flex-grow">
                {item.people.map((person) => (
                  <div key={person.mail} className="flex flex-col group/person">
                    <h3 className="text-2xl font-medium tracking-tight mb-4 group-hover/person:text-[#ff5a1f] transition-colors">
                      {person.name}
                    </h3>
                    <div className="flex flex-col space-y-3">
                      <a 
                        href={`tel:${person.tel?.replace(/\s/g, '')}`} 
                        className="text-sm font-light text-zinc-500 hover:text-zinc-900 flex items-center gap-3 transition-colors"
                      >
                        <FiPhone className="text-[#ff5a1f] opacity-50 group-hover/person:opacity-100 transition-opacity" />
                        {person.tel}
                      </a>
                      <a 
                        href={`mailto:${person.mail}`} 
                        className="text-sm font-light text-zinc-400 hover:text-[#ff5a1f] flex items-center gap-3 transition-colors"
                      >
                        <FiMail className="opacity-30 group-hover/person:opacity-100 transition-opacity" />
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
    </main>
  );
}