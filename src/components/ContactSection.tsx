import React, { useState } from 'react';
import { Mail, Clock, ShieldCheck, CheckCircle2, AlertCircle, Sparkles, Send } from 'lucide-react';
import { EDITORIAL_DETAIL_IMAGE } from '../data/wardrobeData';
import { ContactFormData } from '../types';

interface ContactSectionProps {
  initialProjectType?: string;
  initialStylePreference?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialProjectType = '',
  initialStylePreference = '',
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    projectType: initialProjectType || 'New Walk-In Wardrobe',
    spaceSize: 'Medium 4–8m²',
    stylePreference: initialStylePreference || 'Warm Wood and Brass',
    budget: '£20K–£40K',
    desiredStartDate: '',
    hearAboutUs: 'Instagram',
    spaceDetails: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      errs.fullName = 'Please enter your full name.';
    }
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Please provide a phone number for designer consultation.';
    }
    if (!formData.projectType) {
      errs.projectType = 'Please select a project type.';
    }
    if (!formData.budget) {
      errs.budget = 'Please select an approximate budget range.';
    }
    if (!formData.spaceDetails.trim() || formData.spaceDetails.trim().length < 10) {
      errs.spaceDetails = 'Please briefly tell us about your space and requirements (min 10 characters).';
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulate luxury brief dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      projectType: 'New Walk-In Wardrobe',
      spaceSize: 'Medium 4–8m²',
      stylePreference: 'Warm Wood and Brass',
      budget: '£20K–£40K',
      desiredStartDate: '',
      hearAboutUs: 'Instagram',
      spaceDetails: '',
    });
  };

  return (
    <section
      id="contact"
      aria-label="Contact and Consultation Booking"
      className="bg-[#FAF6F0] py-20 md:py-28 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-[#EDE0CE] border border-[#D4B896] text-[#C4913A] text-xs font-semibold uppercase tracking-[0.2em]">
            Bespoke Consultation
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#2A2420] tracking-tight">
            Start Your Wardrobe Project
          </h2>
          <p className="text-sm sm:text-base text-[#8A7A6A] font-light max-w-xl mx-auto leading-relaxed">
            Tell us about your space and we will be in touch within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT COLUMN: Studio Details & Editorial Detail Image */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Studio Contact Information */}
            <div className="bg-[#FAF6F0] p-6 sm:p-8 rounded-xl border border-[#D4B896]/60 shadow-xs space-y-6">
              <h3 className="font-serif text-2xl font-bold text-[#2A2420]">
                The Design Studio
              </h3>

              <div className="space-y-4 text-sm text-[#2A2420]">
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-full bg-[#EDE0CE] flex items-center justify-center text-[#C4913A] shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-[#8A7A6A] font-semibold">Direct Email</span>
                    <a href="mailto:hello@wardrobedesigner.com" className="font-medium hover:text-[#C4913A] transition-colors">
                      hello@wardrobedesigner.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-full bg-[#EDE0CE] flex items-center justify-center text-[#C4913A] shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-[#8A7A6A] font-semibold">Studio Hours</span>
                    <p className="text-xs sm:text-sm text-[#2A2420]">
                      Monday–Friday 9am–6pm<br />
                      Saturday by appointment
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Editorial Wardrobe Detail Photo: Solid Wood, Brass Hardware, Soft Close */}
            <div 
              className="rounded-xl overflow-hidden border border-[#D4B896] shadow-md bg-[#2A2420] relative group"
              style={{ minHeight: '260px', position: 'relative' }}
            >
              <img
                src={EDITORIAL_DETAIL_IMAGE}
                alt="Close-up of bespoke brass drawer handles, soft-close mechanisms, and warm oak wardrobe grain texture"
                className="w-full h-64 sm:h-72 object-cover object-center group-hover:scale-103 transition-transform duration-700"
                style={{ width: '100%', height: '100%', minHeight: '260px', objectFit: 'cover' }}
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2A2420]/80 via-transparent to-transparent flex items-end p-5">
                <span className="text-white text-xs font-serif italic tracking-wide">
                  Every dovetail, brass handle, and soft-close hinge is handcrafted to order.
                </span>
              </div>
            </div>

            {/* 3 Trust Badges */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { title: '14+ Years', subtitle: 'Experience' },
                { title: '180+', subtitle: 'Wardrobes' },
                { title: '100%', subtitle: 'Bespoke' },
              ].map((badge, idx) => (
                <div
                  key={idx}
                  className="bg-[#EDE0CE]/60 border border-[#D4B896] rounded-lg p-3 text-center"
                >
                  <ShieldCheck className="w-4 h-4 text-[#C4913A] mx-auto mb-1" />
                  <span className="block font-bold text-xs sm:text-sm text-[#2A2420] font-serif">
                    {badge.title}
                  </span>
                  <span className="block text-[10px] text-[#8A7A6A] uppercase tracking-wider font-semibold">
                    {badge.subtitle}
                  </span>
                </div>
              ))}
            </div>

          </div>

          {/* RIGHT COLUMN: Project Inquiry Form Card */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-10 shadow-lg border border-[#D4B896]/50">
            
            {isSubmitted ? (
              <div className="py-12 px-4 text-center space-y-6 animate-in fade-in duration-500">
                <div className="w-16 h-16 rounded-full bg-[#FAF6F0] border-2 border-[#C4913A] flex items-center justify-center mx-auto text-[#C4913A] shadow-md">
                  <Sparkles className="w-8 h-8" />
                </div>
                
                <h3 className="font-serif text-3xl font-bold text-[#2A2420]">
                  Wardrobe Brief Received
                </h3>

                <p className="font-serif text-lg sm:text-xl italic text-[#2A2420] max-w-lg mx-auto leading-relaxed">
                  &ldquo;Thank you! We have received your wardrobe brief and one of our designers will be in touch personally within 24 hours. We cannot wait to see what we can create for you. ✦&rdquo;
                </p>

                <div className="p-4 bg-[#FAF6F0] rounded-lg border border-[#EDE0CE] max-w-md mx-auto text-left text-xs space-y-1.5 text-[#5E5145]">
                  <p><span className="font-bold text-[#2A2420]">Client:</span> {formData.fullName}</p>
                  <p><span className="font-bold text-[#2A2420]">Project Type:</span> {formData.projectType}</p>
                  <p><span className="font-bold text-[#2A2420]">Estimated Space:</span> {formData.spaceSize}</p>
                  <p><span className="font-bold text-[#2A2420]">Target Budget:</span> {formData.budget}</p>
                </div>

                <div className="pt-4">
                  <button
                    onClick={handleReset}
                    className="px-6 py-2.5 rounded-full border border-[#C4913A] text-[#C4913A] hover:bg-[#FAF6F0] text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    Submit Another Brief
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                
                <div className="border-b border-[#EDE0CE] pb-4 mb-2">
                  <h3 className="font-serif text-2xl font-bold text-[#2A2420]">
                    Your Wardrobe Brief
                  </h3>
                  <p className="text-xs text-[#8A7A6A] mt-1">
                    Fill in as much or as little detail as you have. All fields marked with * are required.
                  </p>
                </div>

                {/* Name, Email, Phone Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Full Name */}
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#2A2420] mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => {
                        setFormData({ ...formData, fullName: e.target.value });
                        if (errors.fullName) setErrors({ ...errors, fullName: '' });
                      }}
                      placeholder="e.g. Lady Victoria Spencer"
                      className={`w-full px-4 py-3 rounded-lg bg-[#FAF6F0]/60 border text-sm text-[#2A2420] placeholder-[#8A7A6A]/60 transition-all duration-200 outline-none focus:bg-white ${
                        errors.fullName
                          ? 'border-red-400 focus:ring-2 focus:ring-red-200'
                          : 'border-[#D4B896]/70 focus:border-[#C4913A] focus:ring-2 focus:ring-[#C4913A]/20'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#2A2420] mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: '' });
                      }}
                      placeholder="name@domain.com"
                      className={`w-full px-4 py-3 rounded-lg bg-[#FAF6F0]/60 border text-sm text-[#2A2420] placeholder-[#8A7A6A]/60 transition-all duration-200 outline-none focus:bg-white ${
                        errors.email
                          ? 'border-red-400 focus:ring-2 focus:ring-red-200'
                          : 'border-[#D4B896]/70 focus:border-[#C4913A] focus:ring-2 focus:ring-[#C4913A]/20'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#2A2420] mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({ ...formData, phone: e.target.value });
                        if (errors.phone) setErrors({ ...errors, phone: '' });
                      }}
                      placeholder="+44 20 7946 0912"
                      className={`w-full px-4 py-3 rounded-lg bg-[#FAF6F0]/60 border text-sm text-[#2A2420] placeholder-[#8A7A6A]/60 transition-all duration-200 outline-none focus:bg-white ${
                        errors.phone
                          ? 'border-red-400 focus:ring-2 focus:ring-red-200'
                          : 'border-[#D4B896]/70 focus:border-[#C4913A] focus:ring-2 focus:ring-[#C4913A]/20'
                      }`}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.phone}
                      </p>
                    )}
                  </div>

                </div>

                {/* Project Specifications Dropdowns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Project Type */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#2A2420] mb-1.5">
                      Project Type *
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-[#FAF6F0]/60 border border-[#D4B896]/70 text-sm text-[#2A2420] focus:border-[#C4913A] focus:ring-2 focus:ring-[#C4913A]/20 outline-none focus:bg-white"
                    >
                      <option value="New Walk-In Wardrobe">New Walk-In Wardrobe</option>
                      <option value="Fitted Wardrobe">Fitted Wardrobe</option>
                      <option value="Dressing Room">Dressing Room</option>
                      <option value="Master Bedroom Storage">Master Bedroom Storage</option>
                      <option value="Small Bedroom Wardrobe">Small Bedroom Wardrobe</option>
                      <option value="Full Dressing Suite">Full Dressing Suite</option>
                      <option value="Not Sure Yet">Not Sure Yet</option>
                    </select>
                  </div>

                  {/* Space Size Estimate */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#2A2420] mb-1.5">
                      Space Size Estimate
                    </label>
                    <select
                      value={formData.spaceSize}
                      onChange={(e) => setFormData({ ...formData, spaceSize: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-[#FAF6F0]/60 border border-[#D4B896]/70 text-sm text-[#2A2420] focus:border-[#C4913A] focus:ring-2 focus:ring-[#C4913A]/20 outline-none focus:bg-white"
                    >
                      <option value="Small Under 4m²">Small Under 4m²</option>
                      <option value="Medium 4–8m²">Medium 4–8m²</option>
                      <option value="Large 8–15m²">Large 8–15m²</option>
                      <option value="Very Large 15m²+">Very Large 15m²+</option>
                      <option value="Not Sure">Not Sure</option>
                    </select>
                  </div>

                  {/* Style Preference */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#2A2420] mb-1.5">
                      Style Preference
                    </label>
                    <select
                      value={formData.stylePreference}
                      onChange={(e) => setFormData({ ...formData, stylePreference: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-[#FAF6F0]/60 border border-[#D4B896]/70 text-sm text-[#2A2420] focus:border-[#C4913A] focus:ring-2 focus:ring-[#C4913A]/20 outline-none focus:bg-white"
                    >
                      <option value="Contemporary and Handleless">Contemporary and Handleless</option>
                      <option value="Classic and Traditional">Classic and Traditional</option>
                      <option value="Warm Wood and Brass">Warm Wood and Brass</option>
                      <option value="Painted and Bespoke">Painted and Bespoke</option>
                      <option value="Minimalist">Minimalist</option>
                      <option value="Not Sure — Help Me Decide">Not Sure — Help Me Decide</option>
                    </select>
                  </div>

                  {/* Approximate Budget */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#2A2420] mb-1.5">
                      Approximate Budget *
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-[#FAF6F0]/60 border border-[#D4B896]/70 text-sm text-[#2A2420] focus:border-[#C4913A] focus:ring-2 focus:ring-[#C4913A]/20 outline-none focus:bg-white"
                    >
                      <option value="Under £10K">Under £10K</option>
                      <option value="£10K–£20K">£10K–£20K</option>
                      <option value="£20K–£40K">£20K–£40K</option>
                      <option value="£40K–£80K">£40K–£80K</option>
                      <option value="£80K+">£80K+</option>
                      <option value="Prefer Not to Say">Prefer Not to Say</option>
                    </select>
                  </div>

                  {/* Desired Start Date */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#2A2420] mb-1.5">
                      Desired Start Date
                    </label>
                    <input
                      type="date"
                      value={formData.desiredStartDate}
                      onChange={(e) => setFormData({ ...formData, desiredStartDate: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-[#FAF6F0]/60 border border-[#D4B896]/70 text-sm text-[#2A2420] focus:border-[#C4913A] focus:ring-2 focus:ring-[#C4913A]/20 outline-none focus:bg-white"
                    />
                  </div>

                  {/* How Did You Hear About Us */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#2A2420] mb-1.5">
                      How Did You Hear About Us
                    </label>
                    <select
                      value={formData.hearAboutUs}
                      onChange={(e) => setFormData({ ...formData, hearAboutUs: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-[#FAF6F0]/60 border border-[#D4B896]/70 text-sm text-[#2A2420] focus:border-[#C4913A] focus:ring-2 focus:ring-[#C4913A]/20 outline-none focus:bg-white"
                    >
                      <option value="Instagram">Instagram</option>
                      <option value="Pinterest">Pinterest</option>
                      <option value="Google">Google</option>
                      <option value="Referral">Client Referral</option>
                      <option value="Houzz">Houzz</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                </div>

                {/* Tell Us About Your Space (required textarea) */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#2A2420] mb-1.5">
                    Tell Us About Your Space *
                  </label>
                  <textarea
                    rows={4}
                    value={formData.spaceDetails}
                    onChange={(e) => {
                      setFormData({ ...formData, spaceDetails: e.target.value });
                      if (errors.spaceDetails) setErrors({ ...errors, spaceDetails: '' });
                    }}
                    placeholder="Describe your current wardrobe situation, the space you have available, your style preferences, and anything else that will help us understand what your perfect wardrobe looks like."
                    className={`w-full px-4 py-3 rounded-lg bg-[#FAF6F0]/60 border text-sm text-[#2A2420] placeholder-[#8A7A6A]/60 transition-all duration-200 outline-none focus:bg-white ${
                      errors.spaceDetails
                        ? 'border-red-400 focus:ring-2 focus:ring-red-200'
                        : 'border-[#D4B896]/70 focus:border-[#C4913A] focus:ring-2 focus:ring-[#C4913A]/20'
                    }`}
                  />
                  {errors.spaceDetails && (
                    <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.spaceDetails}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-full bg-[#C4913A] hover:bg-[#A97A2E] text-white font-medium text-xs sm:text-sm uppercase tracking-widest transition-luxury shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                >
                  {isSubmitting ? (
                    <span>Sending Brief...</span>
                  ) : (
                    <>
                      <span>Send My Wardrobe Brief</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

                <p className="text-center text-[11px] text-[#8A7A6A]">
                  Confidential design consultation. We never share your contact details.
                </p>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
