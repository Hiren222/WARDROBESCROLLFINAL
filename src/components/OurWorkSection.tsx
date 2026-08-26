import React, { useState, useEffect, useRef } from 'react';
import { PROJECTS } from '../data/wardrobeData';
import { ProjectCategory, WardrobeProject } from '../types';
import { ProjectModal } from './ProjectModal';
import { Eye, ArrowUpRight, Sparkles } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface OurWorkSectionProps {
  onSelectProjectForInquiry: (projectName: string, projectCategory: string) => void;
}

export const OurWorkSection: React.FC<OurWorkSectionProps> = ({ onSelectProjectForInquiry }) => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('All');
  const [selectedProject, setSelectedProject] = useState<WardrobeProject | null>(null);
  
  const sectionRef = useRef<HTMLElement>(null);
  const stackingRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);

  const filters: ProjectCategory[] = ['All', 'Walk-In', 'Fitted', 'Dressing Room', 'Contemporary', 'Classic'];

  const filteredProjects = activeFilter === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeFilter);

  // Initialize GSAP Smooth Stacking Cards Scrub
  useEffect(() => {
    const cards = cardRefs.current.filter((el): el is HTMLElement => el !== null);
    if (cards.length === 0) return;

    const ctx = gsap.context(() => {
      cards.forEach((card, index) => {
        if (index < cards.length - 1) {
          const nextCard = cards[index + 1];
          if (nextCard) {
            gsap.to(card, {
              scrollTrigger: {
                trigger: nextCard,
                start: 'top 80%',
                end: 'top 25%',
                scrub: true,
              },
              scale: 0.94 - (cards.length - 1 - index) * 0.015,
              opacity: 0.88,
              ease: 'none',
            });
          }
        }
      });
    }, sectionRef);

    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 150);

    return () => {
      clearTimeout(timer);
      ctx.revert();
    };
  }, [filteredProjects]);

  return (
    <section 
      id="work" 
      ref={sectionRef}
      aria-label="Our Wardrobe Portfolio"
      className="bg-[#EDE0CE] py-20 md:py-28 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 md:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FAF6F0] border border-[#D4B896] text-[#C4913A] text-xs font-semibold uppercase tracking-[0.2em]">
            <Sparkles className="w-3.5 h-3.5 text-[#C4913A]" />
            <span>Curated Portfolio</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#2A2420] tracking-tight">
            Our Wardrobes
          </h2>
          <p className="text-sm sm:text-base text-[#8A7A6A] font-light max-w-2xl mx-auto leading-relaxed">
            Every project is entirely bespoke — designed and built for one person and one space only. Scroll through our signature creations.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-14">
          {filters.map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2 rounded-full text-xs font-medium tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-[#C4913A] text-white shadow-md'
                    : 'bg-[#FAF6F0] text-[#2A2420] hover:bg-[#F2E4CB] border border-[#D4B896]/60'
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {/* Stacking Cards Container */}
        <div 
          ref={stackingRef}
          className="stacking relative flex flex-col gap-10 md:gap-14 pb-12 max-w-5xl mx-auto"
        >
          {filteredProjects.map((project, index) => (
            <article
              key={project.id}
              ref={(el) => { cardRefs.current[index] = el; }}
              onClick={() => setSelectedProject(project)}
              className="stacking__card group sticky bg-[#FAF6F0] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl border border-[#D4B896]/60 transition-shadow duration-300 flex flex-col md:flex-row cursor-pointer will-change-transform"
              style={{
                top: `${96 + index * 20}px`,
                zIndex: index + 1,
              }}
            >
              {/* Image Container with Smooth Hover Zoom */}
              <div className="relative md:w-3/5 aspect-[4/3] md:aspect-auto md:min-h-[380px] overflow-hidden bg-[#2A2420]">
                <img
                  src={project.image}
                  alt={`${project.title} - ${project.category} wardrobe interior design`}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />

                {/* Badge on top corner */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="text-[11px] font-semibold tracking-[0.2em] text-[#C4913A] uppercase bg-[#2A2420]/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#C4913A]/40 shadow-md">
                    {project.categoryLabel}
                  </span>
                </div>

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-[#2A2420]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-[#C4913A] text-white flex items-center justify-center shadow-lg group-hover:rotate-45 transition-transform duration-300">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Card Details & Specifications Preview */}
              <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-between border-t md:border-t-0 md:border-l border-[#EDE0CE] bg-[#FAF6F0]">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold tracking-[0.2em] text-[#C4913A] uppercase">
                      Project 0{index + 1}
                    </span>
                    <span className="text-xs text-[#8A7A6A] font-light">
                      {project.details.dimensions.split(' ')[0]}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2A2420] group-hover:text-[#C4913A] transition-colors leading-tight">
                    {project.title}
                  </h3>

                  <p className="text-sm text-[#8A7A6A] font-light leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights Pill list */}
                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {project.details.materials.slice(0, 3).map((mat, i) => (
                      <span 
                        key={i}
                        className="text-[11px] px-2.5 py-1 rounded-md bg-[#EDE0CE]/60 text-[#2A2420]/80 font-medium"
                      >
                        {mat}
                      </span>
                    ))}
                  </div>
                </div>

                {/* View Details Action */}
                <div className="pt-6 border-t border-[#EDE0CE] flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#C4913A] uppercase group-hover:translate-x-1 transition-transform">
                    <Eye className="w-4 h-4" />
                    <span>View Specifications</span>
                  </div>
                  <span className="text-xs text-[#8A7A6A]/60 uppercase tracking-widest font-mono">
                    Click to Open
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Centered View All Wardrobes button */}
        <div className="mt-8 text-center">
          <button
            onClick={() => {
              setActiveFilter('All');
              const el = document.getElementById('work');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full border border-[#C4913A] text-[#C4913A] hover:bg-[#C4913A] hover:text-white text-xs font-semibold uppercase tracking-widest transition-luxury shadow-xs hover:shadow-md cursor-pointer"
          >
            <span>Reset &amp; View All Wardrobes</span>
          </button>
        </div>

      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onInquire={onSelectProjectForInquiry}
      />
    </section>
  );
};

