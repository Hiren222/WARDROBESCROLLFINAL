import React from 'react';
import { TRANSFORMATIONS } from '../data/wardrobeData';
import { BeforeAfterSlider } from './BeforeAfterSlider';

export const BeforeAfterSection: React.FC = () => {
  return (
    <section
      id="transformations"
      aria-label="Before and After Wardrobe Transformations"
      className="bg-[#FAF6F0] py-20 md:py-28 relative border-t border-[#EDE0CE]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-[#EDE0CE] border border-[#D4B896] text-[#C4913A] text-xs font-semibold uppercase tracking-[0.2em]">
            Real Results
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#2A2420] tracking-tight">
            The Transformation
          </h2>
          <p className="text-sm sm:text-base text-[#8A7A6A] font-light max-w-2xl mx-auto leading-relaxed">
            Drag the slider to see what a bespoke wardrobe design can do to a space.
          </p>
        </div>

        {/* 3 Transformation Cards Stacked Vertically with Generous Spacing */}
        <div className="space-y-12 sm:space-y-16">
          {TRANSFORMATIONS.map((item, idx) => (
            <BeforeAfterSlider
              key={item.id}
              item={item}
              defaultPosition={idx === 0 ? 38 : idx === 1 ? 42 : 36}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
