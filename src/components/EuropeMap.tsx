'use client';

import React from 'react';

export default function EuropeMap() {
  // Оптимизированный контур Европы (Path Data)
  const europePath = "M435,55 L455,45 L490,55 L510,85 L515,130 L545,150 L630,165 L730,190 L780,240 L760,300 L710,340 L630,380 L560,420 L515,445 L480,445 L455,410 L430,385 L390,360 L330,350 L260,365 L180,345 L130,300 L115,220 L135,160 L190,120 L270,105 L350,85 Z M220,135 L255,115 L285,140 L260,175 L225,165 Z M420,40 L475,30 L520,50 L535,100 L490,125 L435,100 Z";

  return (
    <div className="relative w-full aspect-[21/9] mb-40 flex items-center justify-center group">
      <div className="relative w-full h-full max-w-[1100px] transition-transform duration-1000 ease-out group-hover:scale-[1.01]">
        
        <svg 
          viewBox="0 0 850 500" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className="w-full h-full"
        >
          <defs>
            {/* 1. Сетка белых точек (Матрица) */}
            <pattern id="whiteDots" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.1" fill="white" fillOpacity="0.3" />
            </pattern>

            {/* 2. Маска, которая обрезает сетку по форме Европы */}
            <clipPath id="europeClip">
              <path d={europePath} />
            </clipPath>
          </defs>

          {/* Слой с точками */}
          <rect 
            width="850" 
            height="500" 
            fill="url(#whiteDots)" 
            clipPath="url(#europeClip)"
            className="transition-opacity duration-700 opacity-80 group-hover:opacity-100"
          />

          {/* Тонкая линия границы для четкости (Stroke) */}
          <path 
            d={europePath} 
            stroke="white" 
            strokeWidth="0.5" 
            strokeOpacity="0.1" 
            fill="none"
          />
        </svg>

        {/* МАРКЕР POLSKA (HQ) - Центрирован по Польше */}
        <div 
          className="absolute z-10"
          style={{ top: '38%', left: '46%' }} 
        >
          <div className="relative flex h-14 w-14 items-center justify-center">
            {/* Анимация пульсации */}
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff5a1f] opacity-20"></span>
            {/* Сама точка */}
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#ff5a1f] shadow-[0_0_15px_#ff5a1f]"></span>
            
            {/* Красивая подпись */}
            <div className="absolute top-12 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black/95 border-l-2 border-l-[#ff5a1f] border border-white/10 px-4 py-1.5 backdrop-blur-md">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white">Polska (HQ)</p>
            </div>
          </div>
        </div>

        {/* ТОЧКИ ПРИСУТСТВИЯ В ЕВРОПЕ */}
        <div className="absolute top-[65%] left-[30%] opacity-50">
          <span className="flex h-2 w-2 rounded-full bg-white shadow-[0_0_8px_white]"></span>
        </div>
        <div className="absolute top-[75%] left-[42%] opacity-50">
          <span className="flex h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_8px_white]"></span>
        </div>

      </div>
    </div>
  );
}