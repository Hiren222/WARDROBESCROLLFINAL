import React, { useState } from 'react';
import { Instagram, Compass, ExternalLink } from 'lucide-react';
import { LegalModal } from './LegalModal';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [legalType, setLegalType] = useState<'privacy' | 'terms' | null>(null);

  return (
    <footer
      id="main-footer"
      aria-label="Studio Footer"
      className="bg-[#2A2420] text-[#FAF6F0] pt-16 pb-12 border-t border-[#C4913A]/30 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 3-Column Minimal Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 pb-12">
          
          {/* Column 1: Brand & Tagline & Socials */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-sm flex items-center justify-center border border-[#C4913A] bg-[#C4913A]/10 text-[#C4913A]">
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 21V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16" />
                  <path d="M4 21h16" />
                  <path d="M12 3v18" />
                  <path d="M9 12h.01" />
                  <path d="M15 12h.01" />
                </svg>
              </div>
              <span className="font-serif text-2xl font-bold tracking-wide text-white">
                Wardrobe Interior Designer
              </span>
            </div>

            <p className="font-serif italic text-lg text-[#E8DCB8]">
              &ldquo;Your Wardrobe. Perfectly Yours.&rdquo;
            </p>

            <p className="text-xs text-[#FAF6F0]/70 leading-relaxed max-w-sm">
              Architectural wardrobe cabinetry, dressing suites, and walk-in closet transformations designed and crafted in the UK.
            </p>

            {/* Social Icons (Instagram, Pinterest, Houzz) */}
            <div className="flex items-center gap-3 pt-2">
              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Follow our wardrobe projects on Instagram"
                className="w-9 h-9 rounded-full bg-[#352E2A] border border-[#C4913A]/30 flex items-center justify-center text-[#FAF6F0] hover:text-[#C4913A] hover:border-[#C4913A] transition-all duration-300 cursor-pointer"
              >
                <Instagram className="w-4 h-4" />
              </a>

              {/* Pinterest */}
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noreferrer"
                aria-label="View our wardrobe moodboards on Pinterest"
                className="w-9 h-9 rounded-full bg-[#352E2A] border border-[#C4913A]/30 flex items-center justify-center text-[#FAF6F0] hover:text-[#C4913A] hover:border-[#C4913A] transition-all duration-300 cursor-pointer"
              >
                {/* Custom Pinterest SVG */}
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.224 7.462-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
                </svg>
              </a>

              {/* Houzz */}
              <a
                href="https://houzz.com"
                target="_blank"
                rel="noreferrer"
                aria-label="See client reviews on Houzz"
                className="w-9 h-9 rounded-full bg-[#352E2A] border border-[#C4913A]/30 flex items-center justify-center text-[#FAF6F0] hover:text-[#C4913A] hover:border-[#C4913A] transition-all duration-300 cursor-pointer"
              >
                {/* Custom Houzz Icon */}
                <span className="font-bold text-xs">H</span>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4 md:pl-8">
            <span className="text-xs uppercase tracking-[0.2em] text-[#C4913A] font-semibold block">
              Quick Links
            </span>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('hero')}
                  className="text-[#FAF6F0]/80 hover:text-[#C4913A] transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('work')}
                  className="text-[#FAF6F0]/80 hover:text-[#C4913A] transition-colors cursor-pointer"
                >
                  Our Work
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('transformations')}
                  className="text-[#FAF6F0]/80 hover:text-[#C4913A] transition-colors cursor-pointer"
                >
                  Transformations
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('why-us')}
                  className="text-[#FAF6F0]/80 hover:text-[#C4913A] transition-colors cursor-pointer"
                >
                  Why Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="text-[#FAF6F0]/80 hover:text-[#C4913A] transition-colors cursor-pointer"
                >
                  Contact &amp; Booking
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Studio Schedule */}
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-[0.2em] text-[#C4913A] font-semibold block">
              Direct Contact
            </span>
            <div className="space-y-2 text-sm text-[#FAF6F0]/85">
              <p>
                <a
                  href="mailto:hello@wardrobedesigner.com"
                  className="text-[#E8DCB8] hover:text-[#C4913A] font-medium transition-colors"
                >
                  hello@wardrobedesigner.com
                </a>
              </p>
              <p className="text-xs text-[#FAF6F0]/70 pt-1">
                <span className="text-white block font-medium">Studio Consultations:</span>
                Mon–Fri 9am–6pm<br />
                Sat by appointment
              </p>
              <p className="text-xs text-[#8A7A6A] pt-2">
                Available for private residential projects across the UK &amp; European destinations.
              </p>
            </div>
          </div>

        </div>

        {/* Thin brass gold divider line */}
        <div className="border-t border-[#C4913A]/40 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8A7A6A]">
          <div>
            © 2025 Wardrobe Interior Designer. All rights reserved.
          </div>
          
          <div className="flex items-center gap-6">
            <button
              onClick={() => setLegalType('privacy')}
              className="hover:text-[#C4913A] transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span>|</span>
            <button
              onClick={() => setLegalType('terms')}
              className="hover:text-[#C4913A] transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
          </div>
        </div>

      </div>

      {/* Legal Privacy / Terms Modal */}
      <LegalModal
        type={legalType}
        onClose={() => setLegalType(null)}
      />
    </footer>
  );
};
