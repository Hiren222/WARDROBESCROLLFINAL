import React from 'react';
import { WardrobeProject } from '../types';
import { X, Sparkles, CheckCircle, ArrowRight } from 'lucide-react';

interface ProjectModalProps {
  project: WardrobeProject | null;
  onClose: () => void;
  onInquire: (projectName: string, projectCategory: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onInquire }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 md:p-10 animate-in fade-in duration-300">
      {/* Modal Card */}
      <div 
        className="relative bg-[#FAF6F0] w-full max-w-4xl rounded-xl overflow-hidden shadow-2xl border border-[#D4B896] animate-in zoom-in-95 duration-300"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-project-title"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close project modal"
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-[#2A2420]/80 hover:bg-[#2A2420] text-white flex items-center justify-center backdrop-blur-md transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header & Hero Image */}
        <div className="relative h-72 sm:h-96 w-full bg-[#2A2420] overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-center"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2A2420] via-[#2A2420]/40 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <span className="inline-block px-3 py-1 bg-[#C4913A] text-white text-xs font-semibold uppercase tracking-widest rounded-full mb-2">
              {project.categoryLabel}
            </span>
            <h2 id="modal-project-title" className="font-serif text-3xl sm:text-4xl font-bold">
              {project.title}
            </h2>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 md:p-10 space-y-8 max-h-[60vh] overflow-y-auto">
          {/* Overview */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C4913A] mb-2">
              Design Vision &amp; Architecture
            </h3>
            <p className="text-[#2A2420] text-base sm:text-lg leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Key Specifications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#EDE0CE]/40 p-6 rounded-lg border border-[#D4B896]/60">
            <div>
              <h4 className="text-xs uppercase tracking-wider font-semibold text-[#2A2420] flex items-center gap-1.5 mb-2">
                <Sparkles className="w-3.5 h-3.5 text-[#C4913A]" />
                Crafted Materials
              </h4>
              <ul className="space-y-1.5 text-sm text-[#8A7A6A]">
                {project.details.materials.map((m, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C4913A]" />
                    <span className="text-[#2A2420] font-medium">{m}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-wider font-semibold text-[#2A2420] flex items-center gap-1.5 mb-2">
                <Sparkles className="w-3.5 h-3.5 text-[#C4913A]" />
                Hardware &amp; Illumination
              </h4>
              <div className="space-y-2 text-sm">
                <div>
                  <span className="text-xs text-[#8A7A6A] block">Hardware Spec:</span>
                  <span className="text-[#2A2420] font-medium">{project.details.hardware}</span>
                </div>
                <div>
                  <span className="text-xs text-[#8A7A6A] block">Lighting Temperature:</span>
                  <span className="text-[#2A2420] font-medium">{project.details.lighting}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Key Features List */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C4913A] mb-3">
              Bespoke Storage Features
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.details.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-sm text-[#2A2420]">
                  <CheckCircle className="w-4 h-4 text-[#C4913A] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Gallery Previews (all genuine wardrobe interiors) */}
          {project.galleryImages && project.galleryImages.length > 1 && (
            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C4913A] mb-3">
                Craftsmanship Perspectives
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {project.galleryImages.map((imgUrl, idx) => (
                  <div key={idx} className="h-32 sm:h-40 rounded-lg overflow-hidden border border-[#D4B896]">
                    <img
                      src={imgUrl}
                      alt={`${project.title} detail angle ${idx + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      decoding="async"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action CTA */}
          <div className="pt-4 border-t border-[#D4B896] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-xs text-[#8A7A6A] block">Inspired by this project?</span>
              <span className="font-serif text-lg text-[#2A2420] font-bold">Commission a tailored wardrobe in this style</span>
            </div>
            <button
              onClick={() => {
                onInquire(project.title, project.category);
                onClose();
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#C4913A] hover:bg-[#A97A2E] text-white text-xs font-semibold uppercase tracking-wider rounded-full shadow-md transition-luxury cursor-pointer"
            >
              <span>Enquire About This Design</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
