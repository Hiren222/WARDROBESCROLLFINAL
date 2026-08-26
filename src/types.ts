export type ProjectCategory = 'All' | 'Walk-In' | 'Fitted' | 'Dressing Room' | 'Contemporary' | 'Classic';

export interface WardrobeProject {
  id: string;
  title: string;
  category: 'Walk-In' | 'Fitted' | 'Dressing Room' | 'Contemporary' | 'Classic';
  categoryLabel: string;
  image: string;
  galleryImages: string[];
  description: string;
  details: {
    materials: string[];
    dimensions?: string;
    features: string[];
    hardware: string;
    lighting: string;
  };
}

export interface TransformationItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  beforeAlt: string;
  afterAlt: string;
  highlights: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  projectType: string;
  location: string;
  rating: number;
}

export interface Milestone {
  value: string;
  label: string;
  sublabel?: string;
}

export interface WhyUsFeature {
  title: string;
  description: string;
  iconName: 'Compass' | 'Layers' | 'Sparkles' | 'ShieldCheck';
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  projectType: string;
  spaceSize: string;
  stylePreference: string;
  budget: string;
  desiredStartDate: string;
  hearAboutUs: string;
  spaceDetails: string;
}
