import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { MilestoneStrip } from './components/MilestoneStrip';
import { OurWorkSection } from './components/OurWorkSection';
import { BeforeAfterSection } from './components/BeforeAfterSection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [selectedProjectType, setSelectedProjectType] = useState<string>('');
  const [selectedStylePreference, setSelectedStylePreference] = useState<string>('');

  // Smooth Scroll Helper
  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const yOffset = -70; // Header height compensation
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // Scroll Spy for Nav Highlighting
  useEffect(() => {
    const sections = ['hero', 'work', 'transformations', 'why-us', 'testimonials', 'contact'];

    const handleScrollSpy = () => {
      const scrollPosition = window.scrollY + 180;
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScrollSpy, { passive: true });
    handleScrollSpy();
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, []);

  const handleSelectProjectForInquiry = (projectName: string, projectCategory: string) => {
    setSelectedProjectType(projectCategory === 'Walk-In' ? 'New Walk-In Wardrobe' : projectCategory === 'Fitted' ? 'Fitted Wardrobe' : 'Dressing Room');
    if (projectName.toLowerCase().includes('oak') || projectName.toLowerCase().includes('brass')) {
      setSelectedStylePreference('Warm Wood and Brass');
    } else if (projectName.toLowerCase().includes('classic') || projectName.toLowerCase().includes('manor')) {
      setSelectedStylePreference('Classic and Traditional');
    } else if (projectName.toLowerCase().includes('clean')) {
      setSelectedStylePreference('Contemporary and Handleless');
    }
    scrollToSection('contact');
  };

  return (
    <div className="min-h-screen bg-[#FAF6F0] text-[#2A2420] flex flex-col font-sans selection:bg-[#C4913A] selection:text-white">
      {/* Sticky Header */}
      <Header
        activeSection={activeSection}
        onNavigate={scrollToSection}
      />

      {/* Main Content Flow */}
      <main className="flex-1">
        {/* 1. Pinned Hero Video Section (z-0) */}
        <HeroSection
          onSeeWorkClick={() => scrollToSection('work')}
          onBookClick={() => scrollToSection('contact')}
        />

        {/* Content sections layered with z-index 1 & solid background scrolling on top of hero */}
        <div className="relative z-[1] bg-[#FAF6F0] shadow-2xl">
          {/* 2. Milestone Strip */}
          <MilestoneStrip />

          {/* 3. Our Work Portfolio Grid & Modal */}
          <OurWorkSection
            onSelectProjectForInquiry={handleSelectProjectForInquiry}
          />

          {/* 4. Interactive Before and After Comparison Section */}
          <BeforeAfterSection />

          {/* 5. Why Choose Us */}
          <WhyChooseUsSection />

          {/* 6. Testimonials */}
          <TestimonialsSection />

          {/* 7. Contact and Consultation Booking Form */}
          <ContactSection
            initialProjectType={selectedProjectType}
            initialStylePreference={selectedStylePreference}
          />

          {/* Footer */}
          <Footer onNavigate={scrollToSection} />
        </div>
      </main>
    </div>
  );
}
