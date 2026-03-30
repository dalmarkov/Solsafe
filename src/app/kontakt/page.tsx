'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPhone, FiMail, FiCheckCircle } from 'react-icons/fi';

const contactData = [
  {
    dept: "Zarząd",
    people: [
      { name: "Krzysztof Mazur", tels: ["+48 537 240 689"], mail: "k.mazur@solsafe.pl" }
    ]
  },
  {
    dept: "Dział Finansowy",
    people: [
      { name: "Aleksandra Krzysteczko", tels: ["+48 532 456 626"], mail: "a.krzysteczko@solsafe.pl" },
      { name: "Marta Tarnawa", tels: ["+48 532 560 839"], mail: "m.tarnawa@solsafe.pl" },
      { name: "Andżelika Śliwa", tels: ["+48 532 356 374"], mail: "a.sliwa@solsafe.pl" }
    ]
  },
  {
    dept: "Dział techniczny",
    people: [
      { name: "Adrian Kanik", tels: ["+48 532 455 298"], mail: "a.kanik@solsafe.pl" },
      { name: "Ireneusz Wiecha", tels: ["+48 539 268 390"], mail: "i.wiecha@solsafe.pl" },
      { name: "Wojciech Szpoton", tels: ["+48 533 262 304"], mail: "w.szpoton@solsafe.pl" }
    ]
  },
  {
    dept: "Zamówienia Publiczne",
    people: [
      { name: "Andrzej Pieróg", tels: ["+48 532 545 564"], mail: "przetargi@solsafe.pl" },
      { name: "Krzysztof Mazur", tels: ["+48 537 240 689"], mail: "k.mazur@solsafe.pl" }
    ]
  },
  {
    dept: "Serwis",
    people: [
      { 
        name: "Wsparcie Serwisowe", 
        // Добавлены ваши 2 новых номера в массив
        tels: ["+48 537 240 689", "+48 532 455 298", "+48 533 262 304"], 
        mail: "serwis@solsafe.pl" 
      },
    ]
  }
];

export default function KontaktPage() {
  const [mounted, setMounted] = useState(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  useEffect(() => {
    setMounted(true);
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  if (!mounted) return <div className="min-h-screen bg-[#F7F6F2]" />;

  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-[#F7F6F2] text-[#1a1a1a] pt-[120px] md:pt-[180px] pb-32 px-4 md:px-12 font-sans"
    >
      <div className="max-w-[1440px] mx-auto">
        
        {/* CONTACT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {contactData.map((item, idx) => (
            <motion.section 
              key={item.dept}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 md:p-10 rounded-[30px] md:rounded-[40px] border border-zinc-200/50 bg-white/40 backdrop-blur-sm hover:shadow-xl transition-all duration-300 group"
            >
              <div className="mb-8">
                <h2 className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400 group-hover:text-[#ff5a1f] transition-colors">
                  {item.dept}
                </h2>
                <div className="mt-3 w-8 h-[1px] bg-zinc-300 group-hover:w-full group-hover:bg-[#ff5a1f] transition-all duration-500" />
              </div>

              <div className="space-y-10">
                {item.people.map((person, pIdx) => (
                  <div key={pIdx} className="flex flex-col group/person">
                    <h3 className="text-xl md:text-2xl font-medium tracking-tight mb-3 group-hover/person:text-[#ff5a1f] transition-colors">
                      {person.name}
                    </h3>
                    <div className="flex flex-col space-y-2">
                      {/* Рендеринг всех номеров телефона из массива */}
                      {person.tels.map((tel, tIdx) => (
                        <a 
                          key={tIdx} 
                          href={`tel:${tel.replace(/\s+/g, '')}`} 
                          className="text-xs md:text-sm font-light text-zinc-500 hover:text-black flex items-center gap-3 transition-colors"
                        >
                          <FiPhone className="text-[#ff5a1f] shrink-0" /> {tel}
                        </a>
                      ))}
                      
                      <a href={`mailto:${person.mail}`} className="text-xs md:text-sm font-light text-zinc-400 hover:text-[#ff5a1f] flex items-center gap-3 transition-colors break-all">
                        <FiMail className="opacity-50 shrink-0" /> {person.mail}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>
          ))}
        </div>

        {/* FORM SECTION */}
        <div className="mt-32 pt-24 border-t border-zinc-300/50 max-w-[1000px] mx-auto">
          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-20"
              >
                <FiCheckCircle className="mx-auto text-6xl text-[#ff5a1f] mb-6" />
                <h3 className="text-3xl font-medium mb-4 text-[#1a1a1a]">Dziękujemy!</h3>
                <p className="text-zinc-500">Twoja wiadomość została wysłana. Skontaktujemy się z Tobą najszybciej, jak to możliwe.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-8 text-[#ff5a1f] text-xs font-bold uppercase tracking-widest border-b border-[#ff5a1f] pb-1"
                >
                  Wyślij kolejną wiadomość
                </button>
              </motion.div>
            ) : (
              <motion.div key="form">
                <div className="text-center mb-20">
                  <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-400 mb-6">Formularz kontaktowy</h2>
                  <p className="text-3xl md:text-6xl font-normal tracking-tight">
                    Masz pytania? <span className="italic font-light">Napisz do nas.</span>
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
                  <div className="relative group">
                    <input name="name" required type="text" placeholder="Imię i Nazwisko" className="w-full bg-transparent border-b border-zinc-300 py-5 outline-none focus:border-[#ff5a1f] transition-colors placeholder:text-zinc-400 font-light text-xl" />
                    <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#ff5a1f] group-focus-within:w-full transition-all duration-500" />
                  </div>
                  <div className="relative group">
                    <input name="email" required type="email" placeholder="Adres E-mail" className="w-full bg-transparent border-b border-zinc-300 py-5 outline-none focus:border-[#ff5a1f] transition-colors placeholder:text-zinc-400 font-light text-xl" />
                    <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#ff5a1f] group-focus-within:w-full transition-all duration-500" />
                  </div>
                  <div className="relative group md:col-span-2">
                    <textarea name="message" required rows={4} placeholder="W czym możemy pomóc?" className="w-full bg-transparent border-b border-zinc-300 py-5 outline-none focus:border-[#ff5a1f] transition-colors placeholder:text-zinc-400 font-light text-xl resize-none" />
                    <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#ff5a1f] group-focus-within:w-full transition-all duration-500" />
                  </div>

                  <div className="md:col-span-2 flex justify-center mt-12">
                    <button 
                      disabled={status === 'loading'}
                      className="px-16 py-5 bg-black text-white rounded-full text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-300 hover:bg-[#ff5a1f] disabled:bg-zinc-400"
                    >
                      {status === 'loading' ? 'Wysyłanie...' : 'Wyślij wiadomość'}
                    </button>
                  </div>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.main>
  );
}