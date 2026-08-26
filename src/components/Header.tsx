import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeSection, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroElement = document.getElementById('hero');
      if (heroElement) {
        const rect = heroElement.getBoundingClientRect();
        // While pinned, rect.bottom is window.innerHeight. When hero unpins and scrolls away, switch to solid header
        const isPastHero = rect.bottom <= 80;
        setIsScrolled(isPastHero);
      } else {
        setIsScrolled(window.scrollY > 80);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const navItems = [
    { id: 'work', label: 'Our Work' },
    { id: 'transformations', label: 'Transformations' },
    { id: 'why-us', label: 'Why Us' },
    { id: 'testimonials', label: 'Reviews' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 inset-x-0 z-50 w-full transition-all duration-500 ease-out ${
        isScrolled
          ? 'bg-[#2A2420]/95 backdrop-blur-md border-b border-white/10 py-4 shadow-lg'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 flex items-center justify-between">
        {/* Logo / Brand Name in Serif + Subline */}
        <button
          onClick={() => handleNavClick('hero')}
          className="text-left group cursor-pointer focus:outline-none"
          aria-label="Hartleigh & Vane Bespoke Wardrobes"
        >
          <span className="block font-serif text-xl sm:text-2xl font-normal tracking-wide text-white group-hover:text-[#C4913A] transition-colors duration-300">
            Hartleigh &amp; Vane
          </span>
          <span className="block text-[9px] sm:text-[10px] tracking-[0.3em] uppercase font-light text-white/70 -mt-0.5">
            Bespoke Wardrobes
          </span>
        </button>

        {/* Desktop Nav Links & Outlined Box Button */}
        <div className="hidden md:flex items-center gap-10">
          <nav className="flex items-center gap-8" aria-label="Main Navigation">
            <button
              onClick={() => handleNavClick('why-us')}
              className={`text-xs font-medium tracking-[0.25em] uppercase transition-colors duration-300 cursor-pointer ${
                activeSection === 'why-us' ? 'text-[#C4913A]' : 'text-white/80 hover:text-white'
              }`}
            >
              Craft
            </button>
            <button
              onClick={() => handleNavClick('transformations')}
              className={`text-xs font-medium tracking-[0.25em] uppercase transition-colors duration-300 cursor-pointer ${
                activeSection === 'transformations' ? 'text-[#C4913A]' : 'text-white/80 hover:text-white'
              }`}
            >
              Process
            </button>
            <button
              onClick={() => handleNavClick('work')}
              className={`text-xs font-medium tracking-[0.25em] uppercase transition-colors duration-300 cursor-pointer ${
                activeSection === 'work' ? 'text-[#C4913A]' : 'text-white/80 hover:text-white'
              }`}
            >
              Work
            </button>
          </nav>

          {/* Screenshot-Style Outlined "GET A QUOTE" Button */}
          <button
            onClick={() => handleNavClick('contact')}
            className="border border-white/35 hover:border-white text-white hover:bg-white/10 text-xs font-medium tracking-[0.25em] uppercase px-5 py-2.5 transition-all duration-300 cursor-pointer backdrop-blur-xs"
          >
            Get a Quote
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            className="p-2 rounded-md text-white transition-colors hover:text-[#C4913A]"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Full-Screen Overlay Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[70px] bottom-0 min-h-screen bg-[#2A2420]/98 backdrop-blur-xl border-t border-white/10 flex flex-col justify-between px-8 py-10 z-50 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col items-center justify-center space-y-6 pt-6">
            <span className="text-xs uppercase tracking-[0.3em] text-[#C4913A] font-semibold">
              Bespoke Wardrobes
            </span>
            <button
              onClick={() => handleNavClick('why-us')}
              className="font-serif text-2xl tracking-wider text-white hover:text-[#C4913A] transition-colors py-1"
            >
              CRAFT
            </button>
            <button
              onClick={() => handleNavClick('transformations')}
              className="font-serif text-2xl tracking-wider text-white hover:text-[#C4913A] transition-colors py-1"
            >
              PROCESS
            </button>
            <button
              onClick={() => handleNavClick('work')}
              className="font-serif text-2xl tracking-wider text-white hover:text-[#C4913A] transition-colors py-1"
            >
              WORK
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="mt-6 w-full max-w-xs border border-white/40 hover:border-white text-white py-3 text-xs font-semibold tracking-[0.25em] uppercase transition-all"
            >
              Get a Quote
            </button>
          </div>

          <div className="text-center text-xs text-white/50 tracking-widest uppercase pb-12">
            London • Surrey • Cotswolds
          </div>
        </div>
      )}
    </header>
  );
};
