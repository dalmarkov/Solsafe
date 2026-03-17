'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

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
  { title: "Audyt energetyczny", desc: "Szczegółowa analiza profilu zużycia mocy." },
  { title: "Monitoring 24/7", desc: "Pełna kontrola produkcji i oszczędności." },
  { title: "Skalowalność", desc: "Systemy gotowe na rozbudowę wraz z Twoją firmą." }
]

export default function Page() {

  return (
    <main className="min-h-screen bg-[#f9f9fb] font-sans overflow-x-hidden">

      {/* HERO */}
      <section className="relative w-full h-[85vh]">
        {/* Контейнер для изображения — имитируем fixed через sticky */}
        <div className="absolute inset-0 z-0">
          <div className="sticky top-0 w-full h-[85vh] overflow-hidden">
            <Image
              src="/img/for_firm1.png"
              alt="Fotowoltaika dla Firm"
              fill
              priority
              className="object-cover opacity-90"
            />
            
            {/* Градиент и блюр */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent backdrop-blur-[2px]" />
          </div>
        </div>

        {/* Контент поверх изображения */}
        <div className="relative z-20 h-full flex flex-col justify-end pb-20 px-6 md:px-24">
          <div className="max-w-[1440px] mx-auto w-full">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
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

      {/* CONTENT */}
      <section className="relative z-30 -mt-10 w-full bg-[#f9f9fb] rounded-t-[24px] shadow-[0_-20px_50px_rgba(0,0,0,0.15)]">

        <motion.div
          className="w-full py-24 px-6 md:px-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >

          <div className="max-w-[1440px] mx-auto">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-32 items-start">

              {/* LEFT */}
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

              {/* RIGHT */}
              <div className="grid gap-5">

                {services.map((item, idx) => (

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
                          <path d="M5 12h14M12 5l7 7-7 7" />
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
              className="mt-28 pt-16 border-t border-zinc-200 flex flex-col items-center text-center"
            >

              <button className="w-full md:w-fit px-16 py-6 bg-black text-white rounded-full text-[12px] uppercase tracking-[0.3em] font-bold hover:bg-[#ff5a1f] transition-all duration-500 shadow-2xl hover:scale-[1.03]">

                Skontaktuj się z ekspertem

              </button>

            </motion.div>

          </div>

        </motion.div>

      </section>

    </main>
  )
}