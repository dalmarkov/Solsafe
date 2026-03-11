'use client';

import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

// Стили Swiper
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Page() {
  const blocks = [
    { id: 1, title: 'WSZYSTKIE', tag: 'Solsafe Solutions', img: '/img/question_energy.jpg' },
    { id: 2, title: 'DLA FIRMY', tag: 'Optymalizacja kosztów', img: '/img/for_firm1.png' },
    { id: 3, title: 'FARMY FOTOWOLTAICZNE', tag: 'Inwestycje w Europie', img: '/img/farmy.jpg' },
    { id: 4, title: 'DLA DOMU', tag: 'Oszczędność dla rodziny', img: '/img/dla_domu.jpg' },
  ];

  return (
    <main className="min-h-screen bg-[#F7F6F2] pt-[140px] overflow-x-hidden">
      
      {/* СЛАЙДЕР */}
      <section className="relative w-full mb-32 group/slider px-4 md:px-12">
        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1.1}
          centeredSlides={false}
          navigation={{
            nextEl: '.nav-btn-next',
            prevEl: '.nav-btn-prev',
          }}
          pagination={{ 
            clickable: true, 
            el: '.slider-dots-container' 
          }}
          breakpoints={{
            1024: { slidesPerView: 1.5 }, 
          }}
          className="!overflow-visible" 
        >
          {blocks.map((item) => (
            <SwiperSlide key={item.id}>
              {/* Закругление строго 8px */}
              <div className="relative h-[500px] md:h-[680px] w-full rounded-[8px] overflow-hidden bg-zinc-900 shadow-xl transition-all duration-500 group">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-1000 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                <div className="absolute inset-0 p-8 md:p-14 flex flex-col justify-end items-start">
                  <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/60 mb-2">
                    {item.tag}
                  </span>
                  <h3 className="text-4xl md:text-6xl font-medium text-white mb-10 tracking-tighter uppercase italic">
                    {item.title}
                  </h3>
                  <button className="px-12 py-4 bg-white text-black rounded-full text-[11px] uppercase tracking-widest font-bold hover:bg-[#ff5a1f] hover:text-white transition-all duration-500">
                    Szczegóły
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* СТРЕЛКИ НАВИГАЦИИ */}
        <button className="nav-btn-prev absolute left-4 md:left-16 top-1/2 -translate-y-1/2 z-40 w-14 h-14 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white opacity-0 group-hover/slider:opacity-100 transition-all duration-300 hover:bg-white hover:text-black">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 19L8 12L15 5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        
        <button className="nav-btn-next absolute right-4 md:right-16 top-1/2 -translate-y-1/2 z-40 w-14 h-14 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white opacity-0 group-hover/slider:opacity-100 transition-all duration-300 hover:bg-white hover:text-black">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        
        <div className="slider-dots-container flex justify-start mt-10 gap-3"></div>
      </section>

      {/* СЕКЦИЯ С КАРТОЙ */}
      <section className="relative w-screen left-1/2 -translate-x-1/2 bg-black flex flex-col items-center overflow-hidden">
        <div className="relative w-full h-[50vh] md:h-[70vh] flex items-center justify-center overflow-hidden border-b border-white/5">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
          <div className="relative w-[240%] md:w-[130%] aspect-[16/10] flex-shrink-0 -translate-y-[20%] md:-translate-y-[15%]">
            <img src="/img/map.jpg" alt="Mapa" className="w-full h-full object-fill opacity-40" />
            <div className="absolute inset-0 z-20 pointer-events-none">
               <div className="absolute top-[62%] left-[50%] transform -translate-x-1/2 -translate-y-1/2">
                  <span className="relative flex h-3 w-3 md:h-6 md:w-6">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff5a1f] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 md:h-6 md:w-6 bg-[#ff5a1f] shadow-[0_0_20px_#ff5a1f]"></span>
                  </span>
               </div>
               <div className="absolute top-[63%] left-[39%] h-1.5 w-1.5 md:h-2 md:w-2 bg-[#ff5a1f]/70 rounded-full"></div>
               <div className="absolute top-[61%] left-[35%] h-1.5 w-1.5 md:h-2 md:w-2 bg-[#ff5a1f]/70 rounded-full"></div>
               <div className="absolute top-[72%] left-[32%] h-1.5 w-1.5 md:h-2 md:w-2 bg-[#ff5a1f]/70 rounded-full"></div>
            </div>
          </div>
        </div>

        <div className="w-full py-14 md:py-24 bg-black flex justify-center">
          <div className="max-w-[1440px] w-full px-4 md:px-10">
            <div className="flex flex-row items-start justify-center md:grid md:grid-cols-5 gap-4 md:gap-8">
              {[
                { n: "1193", t: "Instalacji <br/> w Polsce" },
                { n: "24", t: "Instalacje <br/> w Europie" },
                { n: "911K", t: "Ułożonych <br/> paneli" },
                { n: "4", t: "Krajów <br/> Europy" },
                { n: "13", t: "Lat <br/> doświadczenia" }
              ].map((item, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 20 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true }} 
                  transition={{ duration: 0.5, delay: idx * 0.1 }} 
                  className="group flex flex-col items-center text-center flex-1 min-w-0 cursor-default"
                >
                  <span className="text-[18px] xs:text-xl sm:text-3xl md:text-5xl lg:text-7xl font-medium text-white group-hover:text-[#ff5a1f] tracking-tighter transition-all duration-300 leading-none drop-shadow-[0_0_15px_rgba(255,90,31,0.5)]">
                    {item.n}
                  </span>
                  <p className="text-[6px] xs:text-[7px] md:text-[10px] text-white/40 group-hover:text-white/80 uppercase tracking-widest font-bold leading-tight mt-3 md:mt-5 transition-colors duration-300" dangerouslySetInnerHTML={{ __html: item.t }} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ПАРТНЕРЫ */}
      <section className="relative w-screen left-1/2 -translate-x-1/2 py-4 bg-white overflow-hidden border-t border-gray-100">
        <div className="flex animate-marquee whitespace-nowrap">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex items-center">
              {['Huawei', 'Growatt', 'Fronius', 'Ja Solar', 'Enphase', 'Sofar'].map((brand) => (
                <span key={brand} className="mx-8 md:mx-12 text-[10px] font-bold text-gray-400 tracking-[0.2em] uppercase">{brand}</span>
              ))}
            </div>
          ))}
        </div>
      </section>

      <style jsx global>{`
        .slider-dots-container .swiper-pagination-bullet { 
          width: 40px; height: 2px; border-radius: 0; background: #000 !important; opacity: 0.1; transition: all 0.3s ease; 
        }
        .slider-dots-container .swiper-pagination-bullet-active { 
          background: #ff5a1f !important; opacity: 1 !important; 
        }
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-marquee { display: flex; width: max-content; animation: marquee 30s linear infinite; }
      `}</style>
    </main>
  );
}