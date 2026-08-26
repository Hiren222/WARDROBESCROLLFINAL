import React, { useState, useRef, useCallback } from 'react';
import { TransformationItem } from '../types';
import { Sparkles } from 'lucide-react';

interface BeforeAfterSliderProps {
  item: TransformationItem;
  defaultPosition?: number;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({ item, defaultPosition = 40 }) => {
  const [sliderPos, setSliderPos] = useState<number>(defaultPosition);
  const [isInteracted, setIsInteracted] = useState<boolean>(false);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const width = rect.width;
    const percentage = Math.max(0, Math.min(100, (x / width) * 100));
    setSliderPos(percentage);
    if (!isInteracted) {
      setIsInteracted(true);
    }
  }, [isInteracted]);

  const onPointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    handleMove(e.clientX);
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  const onPointerUp = (e: React.PointerEvent) => {
    setIsDragging(false);
    (e.target as HTMLElement).releasePointerCapture?.(e.pointerId);
  };

  return (
    <div className="bg-[#FAF6F0] rounded-2xl p-4 sm:p-6 lg:p-8 shadow-sm border border-[#D4B896]/60 transition-luxury hover:shadow-xl">
      
      {/* Top Meta & Badges */}
      <div className="flex items-center justify-between gap-4 mb-4">
        <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C4913A]">
          {item.subtitle}
        </span>
        <div className="flex items-center gap-2 text-xs">
          <span className="px-2.5 py-1 rounded-md bg-[#2A2420] text-white font-medium">
            Before
          </span>
          <span className="text-[#8A7A6A]">vs</span>
          <span className="px-2.5 py-1 rounded-md bg-[#C4913A] text-white font-medium shadow-xs">
            After
          </span>
        </div>
      </div>

      {/* Comparison Canvas Frame */}
      <div
        ref={containerRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-xl overflow-hidden cursor-ew-resize select-none bg-[#2A2420] touch-none"
        role="region"
        aria-label={`Before and after comparison for ${item.title}`}
      >
        {/* AFTER IMAGE (Background / Full view revealed on right) */}
        <img
          src={item.afterImage}
          alt={item.afterAlt}
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
          referrerPolicy="no-referrer"
          loading="lazy"
        />

        {/* AFTER Label Overlay on Right */}
        <div className="absolute top-4 right-4 z-10 pointer-events-none">
          <span className="px-3 py-1 rounded-full bg-[#C4913A]/90 text-white text-xs font-semibold uppercase tracking-wider backdrop-blur-md shadow-md">
            After
          </span>
        </div>

        {/* BEFORE IMAGE (Clipped on Left via CSS clip-path) */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
        >
          <img
            src={item.beforeImage}
            alt={item.beforeAlt}
            className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
            referrerPolicy="no-referrer"
            loading="lazy"
          />
          {/* BEFORE Label Overlay on Left */}
          <div className="absolute top-4 left-4 z-10 pointer-events-none">
            <span className="px-3 py-1 rounded-full bg-[#2A2420]/90 text-white text-xs font-semibold uppercase tracking-wider backdrop-blur-md shadow-md">
              Before
            </span>
          </div>
        </div>

        {/* SLIDER DIVIDER LINE & HANDLE */}
        <div
          className="absolute top-0 bottom-0 z-20 pointer-events-none"
          style={{ left: `${sliderPos}%` }}
        >
          {/* Brass Gold Vertical Line */}
          <div className="absolute inset-y-0 -left-[1.5px] w-[3px] bg-[#C4913A] shadow-[0_0_14px_rgba(196,145,58,0.7)]" />

          {/* Central Circular Drag Handle */}
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#C4913A] border-2 border-white shadow-xl flex items-center justify-center text-white cursor-ew-resize pointer-events-auto hover:scale-110 active:scale-95 transition-transform duration-200">
            {/* Left-Right Arrow Icon */}
            <svg
              className="w-5 h-5 text-white stroke-current"
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
              <polyline points="9 18 3 12 9 6" />
            </svg>
            <svg
              className="w-5 h-5 text-white stroke-current -ml-2"
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6" />
              <polyline points="15 18 21 12 15 6" />
            </svg>
          </div>

          {/* "Drag to reveal" Tooltip on First Load */}
          {!isInteracted && (
            <div className="absolute bottom-6 -translate-x-1/2 whitespace-nowrap px-3 py-1.5 rounded-full bg-[#2A2420]/90 text-white text-[11px] font-medium tracking-wide shadow-lg border border-[#C4913A]/50 backdrop-blur-md animate-pulse">
              Drag to reveal ↔
            </div>
          )}
        </div>
      </div>

      {/* Card Footer & Description */}
      <div className="mt-5 pt-3 border-t border-[#EDE0CE] flex flex-col md:flex-row md:items-center justify-between gap-3">
        <div>
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#2A2420]">
            {item.title}
          </h3>
          <p className="mt-1 text-xs sm:text-sm text-[#8A7A6A] leading-relaxed max-w-2xl">
            {item.description}
          </p>
        </div>

        {/* Transformation Key Badges */}
        <div className="flex flex-wrap items-center gap-1.5">
          {item.highlights.map((badge, idx) => (
            <span
              key={idx}
              className="inline-flex items-center gap-1 text-[10px] font-semibold text-[#2A2420] bg-[#EDE0CE] px-2.5 py-1 rounded-full"
            >
              <Sparkles className="w-2.5 h-2.5 text-[#C4913A]" />
              {badge}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
