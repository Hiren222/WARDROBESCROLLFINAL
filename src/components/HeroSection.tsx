import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface HeroSectionProps {
  onSeeWorkClick?: () => void;
  onBookClick?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = () => {
  const heroRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const textContentRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const hero = heroRef.current;
    const textContent = textContentRef.current;
    const scrollIndicator = scrollIndicatorRef.current;
    if (!video || !hero) return;

    // iOS Touch activation
    const handleTouch = () => {
      if (video) {
        video.play().then(() => {
          video.pause();
        }).catch(() => {});
      }
    };
    document.documentElement.addEventListener('touchstart', handleTouch, { once: true });

    // GSAP ScrollTrigger timeline for video scrubbing
    let tl: gsap.core.Timeline | null = null;

    const setupTimeline = () => {
      if (tl) tl.kill();

      const duration = video.duration && !isNaN(video.duration) && video.duration > 0 ? video.duration : 4;

      tl = gsap.timeline({
        scrollTrigger: {
          trigger: hero,
          start: 'top top',
          end: '+=250%',
          pin: true,
          pinSpacing: true,
          scrub: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // Video scrub runs from timeline progress 0.0 to 1.0 (100% duration across full scroll)
      tl.fromTo(
        video,
        { currentTime: 0 },
        { currentTime: duration, ease: 'none', duration: 1.0 },
        0
      );

      // Hero text content fades out exactly at 10% scroll progress (timeline progress 0.0 -> 0.10)
      if (textContent) {
        tl.fromTo(
          textContent,
          { opacity: 1, y: 0 },
          { 
            opacity: 0, 
            y: -25, 
            duration: 0.10, 
            ease: 'power1.out' 
          },
          0
        );
      }

      // Bottom scroll indicator fades out within the first 6% of scroll progress
      if (scrollIndicator) {
        tl.fromTo(
          scrollIndicator,
          { opacity: 1, y: 0 },
          { 
            opacity: 0, 
            y: 10, 
            duration: 0.06, 
            ease: 'power1.out' 
          },
          0
        );
      }

      ScrollTrigger.refresh();
    };

    if (video.readyState >= 1) {
      setupTimeline();
    } else {
      video.addEventListener('loadedmetadata', setupTimeline, { once: true });
      video.addEventListener('canplay', setupTimeline, { once: true });
      video.addEventListener('durationchange', setupTimeline, { once: true });
    }

    const src = '/HerobgwadrobeFINAL.mp4';
    if (!video.src) {
      video.src = src;
    }
    video.load();

    const onCanPlayThrough = () => {
      setupTimeline();
    };

    video.addEventListener('canplaythrough', onCanPlayThrough, { once: true });
    video.addEventListener('loadeddata', setupTimeline, { once: true });

    return () => {
      document.documentElement.removeEventListener('touchstart', handleTouch);
      video.removeEventListener('loadedmetadata', setupTimeline);
      video.removeEventListener('canplay', setupTimeline);
      video.removeEventListener('loadeddata', setupTimeline);
      video.removeEventListener('canplaythrough', onCanPlayThrough);
      video.removeEventListener('durationchange', setupTimeline);
      if (tl) tl.kill();
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === hero || trigger.vars.pin === hero) {
          trigger.kill();
        }
      });
    };
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      aria-label="Hero Introduction"
      className="relative w-full h-screen flex items-center justify-start overflow-hidden bg-[#2A2420] z-0"
    >
      {/* Background Video: HerobgwadrobeFINAL.mp4 */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          ref={videoRef}
          src="/HerobgwadrobeFINAL.mp4"
          playsInline
          muted
          autoPlay={false}
          preload="auto"
          className="video-background w-full h-full object-cover object-center"
        />
      </div>

      {/* Hero Content Container (Centered layout matching screenshot) */}
      <div 
        ref={textContentRef}
        className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 w-full pt-16 pb-20 flex flex-col justify-center items-center text-center will-change-[opacity,transform]"
      >
        <div className="space-y-6 md:space-y-7 animate-in fade-in slide-in-from-bottom-6 duration-700">
          
          {/* Screenshot-Style Eyebrow: BESPOKE WARDROBES · EST. 1987 */}
          <p className="text-[#E5A93C] text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
            Bespoke Wardrobes &middot; Est. 1987
          </p>

          {/* Screenshot-Style Large Elegant Serif Headline: "Scroll to fit the wardrobe" */}
          <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-[96px] font-normal tracking-tight text-white leading-[1.04] sm:leading-[0.98] drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
            Scroll to fit<br />the wardrobe
          </h1>

          {/* Screenshot-Style Subtitle */}
          <p className="text-white text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-xl mx-auto pt-1 drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)]">
            Hand-built cabinetry, book-matched veneer<br className="hidden sm:inline" /> and brass that will outlive the house &mdash; fitted<br className="hidden sm:inline" /> in five days.
          </p>

        </div>
      </div>

      {/* Screenshot-Style Bottom SCROLL Indicator */}
      <div 
        ref={scrollIndicatorRef}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 pointer-events-none will-change-[opacity,transform] drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]"
      >
        <span className="text-[11px] uppercase tracking-[0.35em] text-white/70 font-light">
          Scroll
        </span>
        <div className="w-[1px] h-7 bg-[#C4913A]/90 animate-pulse" />
      </div>
    </section>
  );
};
