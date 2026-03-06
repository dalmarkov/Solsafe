'use client';

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      
      {/* 1. ФОНОВОЕ ВИДЕО */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full opacity-70" // opacity-70 делает видео чуть темнее для читаемости текста
        >
          {/* Путь /hero-video.mp4 автоматически ищет файл в папке public */}
          <source src="/hero-video.mp4" type="video/mp4" />
          Ваш браузер не поддерживает видео.
        </video>
        
        {/* Мягкий градиент поверх видео, чтобы текст всегда был виден */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* 2. КОНТЕНТ (Стиль Enphase) */}
      <div className="relative z-10 w-full px-6 flex flex-col items-center text-center">
        
        <h1 className="text-white text-4xl md:text-6xl lg:text-[75px] font-light tracking-tight max-w-[1200px] mb-8 leading-[1.1]">
          Nastał nowy dzień w historii energii słonecznej z Solsafe
        </h1>

        <p className="text-white/90 text-lg md:text-2xl font-light max-w-[850px] mb-12 leading-relaxed">
          Wytwarzaj, wykorzystuj, magazynuj i sprzedawaj własną energię.
        </p>

        {/* КНОПКИ */}
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <button className="min-w-[220px] px-10 py-4 bg-white text-black rounded-full font-medium text-lg hover:bg-gray-200 transition-all duration-300">
            Dowiedz się więcej
          </button>
          <button className="min-w-[220px] px-10 py-4 border border-white text-white rounded-full font-medium text-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-md">
            Obejrzyj film
          </button>
        </div>
      </div>

      {/* Нижний градиент для плавного перехода к контенту */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/40 to-transparent z-[5]"></div>
    </section>
  );
}