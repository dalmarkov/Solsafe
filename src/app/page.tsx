'use client';

import Hero from '@/components/Hero';
import EuropeMap from '@/components/EuropeMap';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white">
      {/* 1. ГЛАВНЫЙ ЭКРАН */}
      <Hero />

      {/* 2. СЕКЦИЯ: DLA FIRMY */}
      <section className="relative h-[85vh] w-full flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <img src="/img/dla_firmy.jpg" alt="Fotowoltaika dla firm" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-20 max-w-[1440px] mx-auto px-8 w-full">
          <span className="text-white/70 font-bold tracking-[0.4em] text-[10px] uppercase mb-4 block">Efektywność biznesu</span>
          <h2 className="text-white text-5xl md:text-7xl font-light mb-8 tracking-tight">Dla Firmy</h2>
          <p className="text-white/90 text-xl max-w-xl mb-10 font-light leading-relaxed">Zredukuj koszty operacyjne i zbuduj wizerunek ekologicznego przedsiębiorstwa.</p>
          <button className="px-12 py-5 border border-white text-white rounded-full font-medium hover:bg-white hover:text-black transition-all duration-300 text-sm uppercase tracking-widest">Sprawdź ofertę</button>
        </div>
      </section>

      {/* 3. СЕКЦИЯ: FARMY */}
      <section className="relative h-[85vh] w-full flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/30 z-10"></div>
          <img src="/img/farmy.jpg" alt="Farmy fotowoltaiczne" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-20 max-w-[1440px] mx-auto px-8 w-full text-right flex flex-col items-end">
          <span className="text-white/70 font-bold tracking-[0.4em] text-[10px] uppercase mb-4 block">Wielka skala</span>
          <h2 className="text-white text-5xl md:text-7xl font-light mb-8 tracking-tight">Farmy Fotowoltaiczne</h2>
          <p className="text-white/90 text-xl max-w-xl mb-10 font-light leading-relaxed">Inwestycje в OZE на dużą skalę.</p>
          <button className="px-12 py-5 border border-white text-white rounded-full font-medium hover:bg-white hover:text-black transition-all duration-300 text-sm uppercase tracking-widest">Dowiedz się więcej</button>
        </div>
      </section>

      {/* 4. СЕКЦИЯ: DLA DOMU */}
      <section className="relative h-[85vh] w-full flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <img src="/img/dla_domu.jpg" alt="Fotowoltaika dla domu" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-20 max-w-[1440px] mx-auto px-8 w-full">
          <span className="text-white/70 font-bold tracking-[0.4em] text-[10px] uppercase mb-4 block">Niezależność</span>
          <h2 className="text-white text-5xl md:text-7xl font-light mb-8 tracking-tight">Dla Domu</h2>
          <p className="text-white/90 text-xl max-w-xl mb-10 font-light leading-relaxed">Czysta energia dla Twojej rodziny.</p>
          <button className="px-12 py-5 border border-white text-white rounded-full font-medium hover:bg-white hover:text-black transition-all duration-300 text-sm uppercase tracking-widest">Bezpłatna wycena</button>
        </div>
      </section>

      {/* 5. СЕКЦИЯ: КАРТА И ЦИФРЫ */}
      <section className="py-40 bg-[#1a0a0a] text-white overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-8">

          <EuropeMap />

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-16 border-t border-white/5 pt-24">
            <div className="flex flex-col space-y-4 group">
              <span className="text-6xl lg:text-7xl font-medium tracking-tighter transition-colors group-hover:text-[#ff5a1f]">1193</span>
              <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-bold leading-tight">instalacji <br /> zamontowanych w Polsce</p>
            </div>
            <div className="flex flex-col space-y-4 group">
              <span className="text-6xl lg:text-7xl font-medium tracking-tighter transition-colors group-hover:text-[#ff5a1f]">24</span>
              <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-bold leading-tight">instalacje <br /> zamontowane w Europie</p>
            </div>
            <div className="flex flex-col space-y-4 group">
              <span className="text-6xl lg:text-7xl font-medium tracking-tighter transition-colors group-hover:text-[#ff5a1f]">911K</span>
              <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-bold leading-tight">ułożonych sztuk paneli <br /> fotowoltaicznych</p>
            </div>
            <div className="flex flex-col space-y-4 group">
              <span className="text-6xl lg:text-7xl font-medium tracking-tighter transition-colors group-hover:text-[#ff5a1f]">6</span>
              <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-bold leading-tight">krajów, w których <br /> pracowaliśmy</p>
            </div>
            <div className="flex flex-col space-y-4 group">
              <span className="text-6xl lg:text-7xl font-medium tracking-tighter transition-colors group-hover:text-[#ff5a1f]">11</span>
              <p className="text-[10px] text-gray-400 uppercase tracking-[0.2em] font-bold leading-tight">lat doświadczenia <br /> w branży</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. ПАРТНЕРЫ */}
      <section className="py-4 bg-white overflow-hidden border-t border-gray-50">
        <div className="relative flex w-full overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center">
                <span className="mx-12 text-[10px] font-bold text-gray-400 tracking-[0.2em] uppercase">Huawei</span>
                <span className="mx-12 text-[10px] font-bold text-gray-400 tracking-[0.2em] uppercase">Longi Solar</span>
                <span className="mx-12 text-[10px] font-bold text-gray-400 tracking-[0.2em] uppercase">Fronius</span>
                <span className="mx-12 text-[10px] font-bold text-gray-400 tracking-[0.2em] uppercase">Ja Solar</span>
                <span className="mx-12 text-[10px] font-bold text-gray-400 tracking-[0.2em] uppercase">Enphase</span>
                <span className="mx-12 text-[10px] font-bold text-gray-400 tracking-[0.2em] uppercase">Sofar</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}