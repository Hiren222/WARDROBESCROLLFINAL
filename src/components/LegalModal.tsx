import React from 'react';
import { X, Shield } from 'lucide-react';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const isPrivacy = type === 'privacy';

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative bg-[#FAF6F0] w-full max-w-2xl rounded-xl shadow-2xl border border-[#D4B896] p-6 sm:p-8 animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 p-2 text-[#8A7A6A] hover:text-[#2A2420] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-[#C4913A] mb-3">
          <Shield className="w-5 h-5" />
          <span className="text-xs uppercase tracking-[0.2em] font-semibold">
            Studio Compliance
          </span>
        </div>

        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2A2420] mb-4">
          {isPrivacy ? 'Privacy & Data Protection' : 'Client Terms of Service'}
        </h3>

        <div className="space-y-4 text-xs sm:text-sm text-[#5E5145] leading-relaxed max-h-80 overflow-y-auto pr-2">
          {isPrivacy ? (
            <>
              <p>
                At Wardrobe Interior Designer, we are committed to upholding the highest standards of privacy and confidentiality for our private residential and commercial clients.
              </p>
              <p>
                <strong>Information Collection:</strong> We collect only the necessary contact details, room dimensions, architectural blueprints, and lifestyle requirements provided by you in the design brief to prepare tailored proposals and 3D architectural renders.
              </p>
              <p>
                <strong>Confidentiality:</strong> Under no circumstances do we sell, rent, or transfer your contact data or home address to third parties. All photography of completed bespoke projects is published solely with explicit client authorization.
              </p>
              <p>
                For data access requests or inquiries, reach out to hello@wardrobedesigner.com.
              </p>
            </>
          ) : (
            <>
              <p>
                Welcome to Wardrobe Interior Designer. By engaging our design studio or requesting architectural wardrobe briefs, you agree to our bespoke commission principles:
              </p>
              <p>
                <strong>Bespoke Manufacture:</strong> Each fitted wardrobe and dressing room suite is manufactured to precision millimeter specifications determined following an in-person site survey.
              </p>
              <p>
                <strong>Materials &amp; Grain:</strong> As we utilize authentic solid European hardwoods and natural hand-finished veneers, organic grain variances and natural timber highlights are characteristic of genuine artisan craftsmanship.
              </p>
              <p>
                <strong>Design Revisions:</strong> Commissioned projects include iterative 3D renderings and comprehensive hardware sample reviews prior to cabinet production.
              </p>
            </>
          )}
        </div>

        <div className="mt-6 pt-4 border-t border-[#EDE0CE] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-[#2A2420] text-white text-xs font-semibold uppercase tracking-wider rounded-full hover:bg-[#C4913A] transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
