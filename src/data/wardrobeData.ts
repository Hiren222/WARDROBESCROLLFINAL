import { WardrobeProject, TransformationItem, Testimonial, Milestone, WhyUsFeature } from '../types';

export const HERO_IMAGE = "https://images.unsplash.com/photo-1558997519-83ea9252def8?auto=format&fit=crop&w=2200&q=85";
export const EDITORIAL_DETAIL_IMAGE = "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80";

export const MILESTONES: Milestone[] = [
  {
    value: "180+",
    label: "Wardrobes Designed",
    sublabel: "Across residential & penthouse projects"
  },
  {
    value: "14",
    label: "Years of Experience",
    sublabel: "Specialist wardrobe craftsmanship"
  },
  {
    value: "100%",
    label: "Bespoke Every Time",
    sublabel: "Zero off-the-shelf components"
  },
  {
    value: "4.9★",
    label: "Client Rating",
    sublabel: "Based on 140+ verified client reviews"
  }
];

export const PROJECTS: WardrobeProject[] = [
  {
    id: "oak-brass-suite",
    title: "The Oak and Brass Suite",
    category: "Walk-In",
    categoryLabel: "WALK-IN",
    image: "/afrerone.jpeg",
    galleryImages: [
      "/afrerone.jpeg",
      "/aftertwo.jpeg",
      "/aftertree.jpeg"
    ],
    description: "A bespoke walk-in wardrobe in natural blonde oak with brass frame detailing, illuminated display bays, and luxury accessory trays.",
    details: {
      materials: ["Solid European Blonde Oak", "Brushed Brass Trims", "Fluted Glass Panels", "Suede Drawer Inserts"],
      dimensions: "18.5 m² Master Walk-In Suite",
      features: [
        "Floor-to-ceiling illuminated display bays",
        "Glass-topped central island with luxury accessory trays",
        "Full-length shoe galleria with angled soft-lit shelves",
        "Integrated dual-voltage vanity grooming station"
      ],
      hardware: "Custom extruded brushed brass handles & Blum soft-close runners",
      lighting: "2700K concealed warm LED strip channels with motion activation"
    }
  },
  {
    id: "velvet-room",
    title: "The Velvet Room",
    category: "Dressing Room",
    categoryLabel: "DRESSING ROOM",
    image: "/afterfour.jpeg",
    galleryImages: [
      "/afterfour.jpeg",
      "/afrerone.jpeg",
      "/aftertwo.jpeg"
    ],
    description: "A bespoke dressing room with velvet-lined drawers, warm ambient backlighting, and customized full-height cabinetry.",
    details: {
      materials: ["Hand-buffed Pale Oak", "Forest Velvet Lining", "Antique Brass Pulls", "Beveled Low-Iron Mirrors"],
      dimensions: "14.2 m² Dedicated Dressing Suite",
      features: [
        "Velvet-padded jewelry and watch organization inserts",
        "Full-height backlit tri-fold vanity dressing mirror",
        "Dedicated cashmere and knitwear pull-out trays",
        "Handcrafted upholstered bench seating"
      ],
      hardware: "Hand-turned solid brass knurled knobs",
      lighting: "CRI 95+ neutral-warm vanity daylight calibration"
    }
  },
  {
    id: "clean-line",
    title: "The Clean Line",
    category: "Contemporary",
    categoryLabel: "CONTEMPORARY",
    image: "/aftertwo.jpeg",
    galleryImages: [
      "/aftertwo.jpeg",
      "/aftertree.jpeg",
      "/afterfour.jpeg"
    ],
    description: "A sleek handleless fitted wardrobe with seamless floor-to-ceiling flush fit and integrated linear LED profiles.",
    details: {
      materials: ["Ultra-matte Warm Cream Lacquer", "Smoked Oak Interiors", "Concealed J-Pull Profiles"],
      dimensions: "5.4m Continuous Wall Installation",
      features: [
        "Seamless floor-to-ceiling flush fit with zero shadow gaps",
        "Automated push-to-open touch mechanisms",
        "Concealed pull-down wardrobe rails for tall hanging spaces",
        "Acoustic felt back panels for silent garment movement"
      ],
      hardware: "Concealed Hafele motorized push-to-open systems",
      lighting: "Recessed vertical micro-channel ambient glow"
    }
  },
  {
    id: "manor-dressing-room",
    title: "The Manor Dressing Room",
    category: "Classic",
    categoryLabel: "CLASSIC",
    image: "/aftertree.jpeg",
    galleryImages: [
      "/aftertree.jpeg",
      "/afrerone.jpeg",
      "/afterfour.jpeg"
    ],
    description: "A grand dressing room with hand-crafted bespoke cabinetry, antique brass fittings, and integrated warm lighting.",
    details: {
      materials: ["Solid Ash Framework", "Heritage Paint Finish in Almond Parchment", "Aged Unlacquered Brass", "Herringbone Oak"],
      dimensions: "24.0 m² Heritage Estate Dressing Chamber",
      features: [
        "Ornate cornice moldings integrated with architectural coving",
        "Glazed display vitrines for curated hat and handbag storage",
        "Central gentleman's valet bureau with leather writing insert",
        "Hidden safe and secure compartment integration"
      ],
      hardware: "Bespoke unlacquered brass drop pulls & classic butt hinges",
      lighting: "Warm diffused downlights with brass pendant accents"
    }
  }
];

export const TRANSFORMATIONS: TransformationItem[] = [
  {
    id: "suite-transformation-1",
    title: "The Oak and Brass Suite",
    subtitle: "Walk-In Transformation",
    description: "A complete reinvention — from an empty room to a bespoke luxury walk-in wardrobe suite crafted in natural blonde oak and brass.",
    beforeImage: "/beforeone.jpeg",
    afterImage: "/afrerone.jpeg",
    beforeAlt: "Room space before bespoke wardrobe installation",
    afterAlt: "Stunning bespoke walk-in wardrobe with luxury finish and lighting",
    highlights: ["+240% usable wardrobe storage", "Custom central island unit", "Integrated 2700K warm LED lighting"]
  },
  {
    id: "suite-transformation-2",
    title: "The Velvet Room",
    subtitle: "Dressing Room Transformation",
    description: "An unorganized room space converted into a luxury dressing room with custom bespoke cabinetry and velvet finishes.",
    beforeImage: "/beforefour.jpeg",
    afterImage: "/afterfour.jpeg",
    beforeAlt: "Room space before custom dressing room conversion",
    afterAlt: "Bespoke dressing room with custom shelving, velvet lining, and integrated illumination",
    highlights: ["Velvet jewelry organization drawers", "Full-height illuminated mirror", "Hand-turned brass hardware"]
  },
  {
    id: "suite-transformation-3",
    title: "The Manor Dressing Room",
    subtitle: "Heritage Classic Transformation",
    description: "A bare master chamber transformed into a grand classic dressing room with hand-crafted cabinetry and warm lighting.",
    beforeImage: "/beforetree.jpeg",
    afterImage: "/aftertree.jpeg",
    beforeAlt: "Room space before transformation",
    afterAlt: "Grand classic dressing room with bespoke cabinetry and integrated lighting",
    highlights: ["Bespoke hand-painted cabinetry", "Herringbone oak flooring integration", "Concealed accessory safes"]
  }
];

export const WHY_US_FEATURES: WhyUsFeature[] = [
  {
    title: "Truly Bespoke",
    description: "Every wardrobe is designed from scratch for your exact space, your clothing, and your daily routine. Nothing is off-the-shelf.",
    iconName: "Compass"
  },
  {
    title: "Design to Installation",
    description: "One studio handles everything — design, build, and fitting. You have a single point of contact from day one to handover.",
    iconName: "Layers"
  },
  {
    title: "Premium Materials Only",
    description: "We use solid wood, hand-finished veneers, brushed brass hardware, and soft-close mechanisms sourced from trusted craftsmen.",
    iconName: "Sparkles"
  },
  {
    title: "Built to Last",
    description: "Our wardrobes are built as furniture, not flat-pack. Every joint, panel, and detail is made to stand for decades.",
    iconName: "ShieldCheck"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "caroline-h",
    quote: "I never thought a wardrobe could change how I feel about getting dressed in the morning. Now I genuinely look forward to it. The craftsmanship is extraordinary.",
    author: "Caroline H.",
    projectType: "Walk-In Oak Suite",
    location: "Kensington, London",
    rating: 5
  },
  {
    id: "james-priya-w",
    quote: "From our first meeting to the day they handed over the keys, the whole experience was seamless. The dressing room is the best room in our house — full stop.",
    author: "James & Priya W.",
    projectType: "Bespoke Dressing Room",
    location: "Cobham, Surrey",
    rating: 5
  },
  {
    id: "michael-t",
    quote: "We had a small awkward space next to the master bedroom that had been wasted for years. They turned it into something we use every single day and could not live without.",
    author: "Michael T.",
    projectType: "Fitted Wardrobe Transformation",
    location: "Edinburgh",
    rating: 5
  }
];
