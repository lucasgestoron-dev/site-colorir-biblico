import React, { useState } from 'react';
import { HeroReal } from "../components/matematica-real/HeroReal";

export default function MatematicaDev() {
  const [opacity, setOpacity] = useState(0.5);
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <div className="w-full min-h-screen bg-[#f8f9fa] relative flex flex-col items-center">
      
      {/* DEVELOPMENT CONTROLS */}
      <div className="fixed top-4 left-4 z-50 bg-white p-4 rounded-xl shadow-2xl border border-slate-200 text-sm flex flex-col gap-3 w-64">
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
              className="w-full accent-sky-500"
            />
          </label>
        )}
      </div>

      {/* REFERENCE OVERLAY */}
      {showOverlay && (
        <div 
          className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full z-40 pointer-events-none"
          style={{ maxWidth: '1480px', opacity }}
        >
          <img src="/matematica/reference-skin/01-hero@2x.png" alt="Reference Hero" className="w-full block" />
        </div>
      )}

      {/* REAL IMPLEMENTATION */}
      <div className="w-full relative mx-auto" style={{ maxWidth: '1480px' }}>
        <HeroReal />
        
        {/* Placeholder for empty space below if needed */}
        <div className="h-screen w-full bg-white flex items-center justify-center border-t-4 border-dashed border-slate-200 text-slate-400 font-medium">
          (As próximas seções serão construídas aqui)
        </div>
      </div>

    </div>
  );
}
