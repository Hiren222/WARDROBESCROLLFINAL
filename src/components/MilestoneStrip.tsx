import React from 'react';
import { MILESTONES } from '../data/wardrobeData';

export const MilestoneStrip: React.FC = () => {
  return (
    <section 
      id="milestones" 
      aria-label="Studio Milestones"
      className="bg-[#FAF6F0] py-12 md:py-16 border-b border-[#EDE0CE]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-[#D4B896]/50">
          {MILESTONES.map((item, idx) => (
            <div 
              key={idx} 
              className={`flex flex-col items-center text-center px-4 py-4 md:py-2 ${
                idx === 1 ? 'border-t-0' : ''
              }`}
            >
              <span className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#C4913A] tracking-tight">
                {item.value}
              </span>
              <span className="mt-1.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#2A2420]">
                {item.label}
              </span>
              {item.sublabel && (
                <span className="mt-0.5 text-[11px] sm:text-xs text-[#8A7A6A] font-light max-w-[180px]">
                  {item.sublabel}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
