import React from 'react';
import { Compass, Layers, Sparkles, ShieldCheck } from 'lucide-react';
import { WHY_US_FEATURES } from '../data/wardrobeData';

export const WhyChooseUsSection: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Compass':
        return <Compass className="w-7 h-7 text-[#C4913A]" />;
      case 'Layers':
        return <Layers className="w-7 h-7 text-[#C4913A]" />;
      case 'Sparkles':
        return <Sparkles className="w-7 h-7 text-[#C4913A]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-7 h-7 text-[#C4913A]" />;
      default:
        return <Sparkles className="w-7 h-7 text-[#C4913A]" />;
    }
  };

  return (
    <section
      id="why-us"
      aria-label="Why Choose Our Bespoke Wardrobes"
      className="bg-[#2A2420] text-[#FAF6F0] py-20 md:py-28 relative overflow-hidden"
    >
      {/* Subtle architectural background texture pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#C4913A_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 md:mb-20">
          <span className="inline-block text-xs uppercase tracking-[0.25em] font-semibold text-[#C4913A]">
            The Studio Standard
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Why Our Wardrobes Are Different
          </h2>
          <p className="text-sm sm:text-base text-[#FAF6F0]/70 font-light max-w-xl mx-auto">
            Uncompromising architectural precision, traditional joinery, and tailored storage intelligence.
          </p>
        </div>

        {/* 4 Feature Blocks in a 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
          {WHY_US_FEATURES.map((feature, idx) => (
            <div
              key={idx}
              className="bg-[#352E2A]/60 p-8 sm:p-10 rounded-xl border border-[#C4913A]/20 hover:border-[#C4913A]/60 transition-all duration-350 hover:bg-[#3D3530]/80 group"
            >
              <div className="w-14 h-14 rounded-lg bg-[#2A2420] border border-[#C4913A]/40 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md">
                {getIcon(feature.iconName)}
              </div>

              <h3 className="font-serif text-2xl font-bold text-white mb-3 group-hover:text-[#E8DCB8] transition-colors">
                {feature.title}
              </h3>

              <p className="text-sm sm:text-base text-[#FAF6F0]/85 font-light leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Thin brass gold divider */}
        <div className="mt-16 sm:mt-20 max-w-3xl mx-auto border-t border-[#C4913A]/40 pt-12 sm:pt-16 text-center">
          {/* Centered italic warm white quote in serif */}
          <blockquote className="font-serif text-xl sm:text-2xl md:text-3xl italic text-[#FAF6F0] font-normal leading-relaxed">
            &ldquo;A wardrobe designed around your life is not a luxury. It is the smartest investment a room can make.&rdquo;
          </blockquote>
          <span className="block mt-4 text-xs tracking-[0.25em] uppercase text-[#C4913A] font-semibold">
            Wardrobe Interior Designer Studio
          </span>
        </div>

      </div>
    </section>
  );
};
