import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/wardrobeData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section
      id="testimonials"
      aria-label="Client Testimonials"
      className="bg-[#EDE0CE] py-20 md:py-28 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-[#FAF6F0] border border-[#D4B896] text-[#C4913A] text-xs font-semibold uppercase tracking-[0.2em]">
            Client Experiences
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#2A2420] tracking-tight">
            What Our Clients Say
          </h2>
          <p className="text-sm sm:text-base text-[#8A7A6A] font-light max-w-xl mx-auto leading-relaxed">
            Words from people who now walk into their wardrobe every morning with a smile.
          </p>
        </div>

        {/* 3 Testimonial Cards Side-by-Side */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-[#FAF6F0] rounded-xl p-8 shadow-xs hover:shadow-xl transition-luxury border-l-4 border-l-[#C4913A] border-y border-r border-[#D4B896]/60 flex flex-col justify-between transform hover:-translate-y-1.5"
            >
              <div>
                {/* 5 Brass Gold Stars */}
                <div className="flex items-center gap-1 mb-4 text-[#C4913A]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                {/* Large Brass Gold Quotation Mark */}
                <Quote className="w-8 h-8 text-[#C4913A]/50 mb-3" />

                {/* Client Quote in Italic Serif */}
                <p className="font-serif text-lg sm:text-xl italic text-[#2A2420] leading-relaxed mb-6">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Client Name & Project Descriptor */}
              <div className="pt-4 border-t border-[#EDE0CE]">
                <h3 className="font-sans font-bold text-sm sm:text-base text-[#2A2420]">
                  {item.author}
                </h3>
                <span className="text-[11px] font-semibold text-[#C4913A] uppercase tracking-wider block mt-0.5">
                  {item.projectType}
                </span>
                <span className="text-[10px] text-[#8A7A6A] block mt-0.5">
                  {item.location}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
