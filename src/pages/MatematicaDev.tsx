import React, { useState } from 'react';
import { HeroReal } from "../components/matematica-real/HeroReal";
import { ActivitiesReal } from "../components/matematica-real/ActivitiesReal";
import { HowItWorksReal } from "../components/matematica-real/HowItWorksReal";

export default function MatematicaDev() {
  const [opacity, setOpacity] = useState(0.5);
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <div className="w-full min-h-screen bg-[#f8f9fa] relative flex flex-col items-center">
      
      {/* DEVELOPMENT CONTROLS */}
      <div className="fixed top-4 left-4 z-50 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-2xl border border-slate-200 text-sm flex flex-col gap-3 w-64">
        <h3 className="font-bold text-slate-800 border-b pb-2">Modo Comparação</h3>
        <label className="flex items-center gap-2 cursor-pointer select-none font-medium text-slate-700">
          <input 
            type="checkbox" 
            checked={showOverlay} 
            onChange={e => setShowOverlay(e.target.checked)} 
            className="w-4 h-4 text-sky-600 rounded"
          />
          Mostrar Referência
        </label>
        
        {showOverlay && (
          <label className="flex flex-col gap-2 font-medium text-slate-600 text-xs">
            Opacidade: {Math.round(opacity * 100)}%
            <input 
              type="range" 
              min="0" max="1" step="0.05" 
              value={opacity} 
              onChange={e => setOpacity(parseFloat(e.target.value))} 
              className="w-full accent-sky-500 cursor-pointer"
            />
          </label>
        )}
      </div>

      {/* REAL IMPLEMENTATION CONTAINER (1480px width) */}
      <div className="w-full relative mx-auto" style={{ maxWidth: '1480px' }}>
        
        {/* 1. HERO SECTION WITH OVERLAY */}
        <div className="relative w-full">
          {showOverlay && (
            <div 
              className="absolute top-0 left-0 w-full h-[726px] z-40 pointer-events-none"
              style={{ opacity }}
            >
              <img 
                src="/matematica/reference-skin/01-hero@2x.png" 
                alt="Reference Hero" 
                className="w-full h-[726px] block object-contain" 
              />
            </div>
          )}
          <HeroReal />
        </div>

        {/* 2. ACTIVITIES SECTION WITH OVERLAY */}
        <div className="relative w-full">
          {showOverlay && (
            <div 
              className="absolute top-0 left-0 w-full h-[500px] z-40 pointer-events-none"
              style={{ opacity }}
            >
              <img 
                src="/matematica/reference-skin/02-activities@2x.png" 
                alt="Reference Activities" 
                className="w-full h-[500px] block object-contain" 
              />
            </div>
          )}
          <ActivitiesReal />
        </div>

        {/* 3. HOW IT WORKS SECTION WITH OVERLAY */}
        <div className="relative w-full">
          {showOverlay && (
            <div 
              className="absolute top-0 left-0 w-full h-[380px] z-40 pointer-events-none"
              style={{ opacity }}
            >
              <img 
                src="/matematica/reference-skin/03-how-it-works@2x.png" 
                alt="Reference How It Works" 
                className="w-full h-[380px] block object-contain" 
              />
            </div>
          )}
          <HowItWorksReal />
        </div>
        
        {/* Placeholder for empty space below */}
        <div className="h-40 w-full bg-slate-100 flex items-center justify-center border-t-2 border-dashed border-slate-300 text-slate-400 font-medium">
          (As próximas seções serão construídas aqui)
        </div>
      </div>

    </div>
  );
}
