// Data for PETPOP Pet Wellness Brand

export const BRAND_COLORS = {
  primaryGreen: '#4ade80', // Vibrant PETPOP green
  darkGreen: '#15803d',
  limeAccent: '#84cc16',
  softCream: '#FAF9F5',
  lightGreenBg: '#F0FDF4',
  darkCharcoal: '#1F2937'
};

export const PRODUCTS = [
  {
    id: 'skin-coat-support',
    name: 'PETPOP Skin & Coat Support Powder',
    category: 'Dogs & Cats',
    size: '6.36 oz (180g)',
    flavor: 'Chicken Flavor',
    price: '$28.99',
    numericPrice: 28.99,
    rating: 4.9,
    reviewsCount: 328,
    image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=800',
    description: 'Enriched with Omega 3, 6 & 9, Biotin, and Vitamin C in a delicious easy-mix chicken formula that nourishes sensitive skin and promotes a thick, lustrous coat.',
    highlights: [
      'For Dogs & Cats',
      'Chicken Flavor',
      'Omega 3, 6 & 9',
      'Biotin & Vitamin C',
      'Easy Mix Powder',
      'Skin & Coat Support'
    ],
    features: [
      'Nourishes dry, sensitive skin from within',
      'Supports a thick, vibrant & lustrous coat',
      'Rich in Essential Omega 3, 6 & 9 fatty acids',
      'Delicious natural chicken flavor pets crave daily'
    ],
    usageDirections: 'Please follow the serving instructions provided on the product packaging.',
    badge: 'Best Seller'
  },
  {
    id: 'dog-dental-powder',
    name: 'PETPOP Dog Dental Powder',
    category: 'Dogs',
    size: '5.29 oz (150g)',
    flavor: 'Natural Spearmint & Kelp',
    price: '$24.99',
    numericPrice: 24.99,
    rating: 4.8,
    reviewsCount: 245,
    image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=800',
    description: 'All-natural daily oral care supplement for dogs formulated with kelp and spearmint to fight tartar, manage plaque, and maintain fresh breath effortless.',
    highlights: [
      'Daily Oral Care',
      'Dental Support',
      'Breath Freshening',
      'Tartar Support',
      'Plaque Support',
      'Easy Powder Format'
    ],
    features: [
      'Promotes cleaner teeth without the stress of brushing',
      'Supports tartar and plaque management in daily meals',
      'Maintains fresh breath for closer daily cuddles',
      'Convenient daily powder scoop fits right over kibble or wet food'
    ],
    usageDirections: 'Please follow the serving instructions provided on the product packaging.',
    badge: 'Popular Choice'
  },
  {
    id: 'hip-joint-mobility',
    name: 'PETPOP Hip & Joint Mobility Powder',
    category: 'Dogs & Cats',
    size: '6.00 oz (170g)',
    flavor: 'Savory Beef Flavor',
    price: '$29.99',
    numericPrice: 29.99,
    rating: 4.9,
    reviewsCount: 189,
    image: 'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&q=80&w=800',
    description: 'Glucosamine, Chondroitin, and MSM joint complex powder to support flexibility, cartilage health, and smooth mobility in active & aging pets.',
    highlights: [
      'Glucosamine & MSM',
      'Chondroitin Complex',
      'Joint & Cartilage Support',
      'Savory Beef Flavor',
      'Smooth Mobility'
    ],
    features: [
      'Supports healthy cartilage and joint lubrication',
      'Eases stiffness in aging or highly active dogs & cats',
      'Reinforces hip flexibility for active daily playtime',
      'Palatable beef powder easily mixes into morning food'
    ],
    usageDirections: 'Please follow the serving instructions provided on the product packaging.',
    badge: 'High Strength'
  },
  {
    id: 'probiotic-gut-health',
    name: 'PETPOP Probiotic & Gut Health Powder',
    category: 'Dogs & Cats',
    size: '5.50 oz (156g)',
    flavor: 'Mild Turkey Flavor',
    price: '$26.99',
    numericPrice: 26.99,
    rating: 4.8,
    reviewsCount: 212,
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=800',
    description: 'Advanced 5-Strain Probiotic blend with Prebiotic Fiber & Digestive Enzymes to promote healthy digestion, immune defense, and gut microflora balance.',
    highlights: [
      '5 Billion CFUs',
      'Prebiotics & Enzymes',
      'Stomach Comfort',
      'Immune Defense',
      'Dogs & Cats'
    ],
    features: [
      'Encourages optimal gut flora balance and stool quality',
      'Helps alleviate occasional gas and sensitive stomach',
      'Supports strong natural immune system response',
      'Gentle daily turkey powder formula for sensitive pets'
    ],
    usageDirections: 'Please follow the serving instructions provided on the product packaging.',
    badge: 'Vet Formulated'
  },
  {
    id: 'calming-anti-anxiety',
    name: 'PETPOP Calming & Relaxation Powder',
    category: 'Dogs & Cats',
    size: '5.00 oz (140g)',
    flavor: 'Peanut Butter Flavor',
    price: '$27.99',
    numericPrice: 27.99,
    rating: 4.9,
    reviewsCount: 164,
    image: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&q=80&w=800',
    description: 'L-Theanine, Chamomile, Organic Hemp Seed, and Ashwagandha powder to ease stress, fireworks reactivity, separation discomfort, and travel anxiety.',
    highlights: [
      'L-Theanine & Chamomile',
      'Hemp Seed & Ashwagandha',
      'Stress Relief',
      'Peanut Butter Flavor',
      'Non-Drowsy'
    ],
    features: [
      'Promotes calm behavior during thunderstorms, fireworks & travel',
      'Eases nervous energy without causing lethargy or drowsiness',
      'Supports balanced mood and restfulness in routine changes',
      'Irresistible peanut butter flavor pets love'
    ],
    usageDirections: 'Please follow the serving instructions provided on the product packaging.',
    badge: 'Calming Support'
  }
];

export const INGREDIENTS = [
  {
    id: 'omegas',
    title: 'Essential Omega 3, 6 & 9',
    sub: 'Clean Wild Alaskan Marine Source',
    desc: 'Deeply nourishes skin lipid barriers, reduces seasonal scratching, and gives coats a radiant, velvety shine.',
    badge: 'Natural Sourced',
    icon: 'Droplet'
  },
  {
    id: 'kelp',
    title: 'Organic Norwegian Kelp',
    sub: 'Sustainably Harvested Seaweed',
    desc: 'Naturally rich in minerals and active enzymes that naturally break down tartar biofilm and manage plaque buildup.',
    badge: '100% Organic',
    icon: 'Leaf'
  },
  {
    id: 'probiotics',
    title: '5-Strain Probiotics & Prebiotics',
    sub: '5 Billion Live Microflora CFUs',
    desc: 'Restores healthy intestinal flora, improves nutrient absorption, and keeps digestion smooth and comfortable.',
    badge: 'Digestive Shield',
    icon: 'ShieldCheck'
  },
  {
    id: 'glucosamine',
    title: 'Glucosamine & MSM Complex',
    sub: 'Pure Joint Lubrication',
    desc: 'Protects cartilage structure, supports healthy synovial fluid, and keeps active dogs running freely.',
    badge: 'Mobility Matrix',
    icon: 'Activity'
  },
  {
    id: 'chamomile',
    title: 'L-Theanine & Organic Chamomile',
    sub: 'Botanical Mood Calming',
    desc: 'Gently eases nervous tension during loud noises, fireworks, vet visits, and separation without drowsiness.',
    badge: 'Non-Drowsy',
    icon: 'Sun'
  },
  {
    id: 'biotin',
    title: 'Biotin & Vitamin C Power',
    sub: 'Essential Cellular Nutrients',
    desc: 'Accelerates coat renewal, strengthens fragile claws, and boosts collagen synthesis for healthy paw pads.',
    badge: 'Antioxidant Boost',
    icon: 'Zap'
  }
];

export const QUALITY_PROMISES = [
  {
    title: '100% Powder Format',
    desc: 'No compressed tablets or hard chews with artificial fillers. Just clean powder scoops.',
    icon: 'Sparkles'
  },
  {
    title: 'Zero Sugar & Grain Free',
    desc: 'No wheat, soy, artificial dyes, or added sugars. Only pure functional pet nutrition.',
    icon: 'CheckCircle'
  },
  {
    title: 'Non-GMO & USA Quality',
    desc: 'Manufactured under strict GMP safety standards in FDA-inspected facilities.',
    icon: 'Shield'
  },
  {
    title: 'Vet & Pet Parent Approved',
    desc: 'Formulated with balanced dosing for effortless daily mixing into regular food.',
    icon: 'Award'
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    author: 'Sarah M.',
    pet: 'Luna (Golden Retriever)',
    rating: 5,
    text: 'PETPOP Skin & Coat Powder completely saved Luna’s coat! Within three weeks of mixing a scoop into her morning kibble, her fur became super shiny and her dry scratching stopped completely.',
    productName: 'Skin & Coat Support',
    verified: true,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 2,
    author: 'David K.',
    pet: 'Buster (French Bulldog)',
    rating: 5,
    text: 'Brushing Buster’s teeth was an absolute nightmare. The PETPOP Dental Powder is a life saver! I just sprinkle it on his dinner. His breath is fresh and his vet praised his clean teeth at his checkup.',
    productName: 'Dog Dental Powder',
    verified: true,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 3,
    author: 'Elena R.',
    pet: 'Milo & Oliver (Tabby Cats)',
    rating: 5,
    text: 'Finding a supplement both my picky cats actually enjoy was impossible until PETPOP. The chicken powder mixes so smoothly with wet food, they lick the bowl clean every single day.',
    productName: 'Skin & Coat Support',
    verified: true,
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=200'
  }
];

export const HERO_SLIDES = [
  {
    id: 1,
    title: 'Everyday Wellness for Happier Pets',
    subtitle: 'Simple daily wellness support for dogs and cats, designed to fit easily into your pet\'s everyday routine.',
    bgImage: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=1600',
    tag: 'Daily Pet Care',
    buttonText: 'Shop Products',
    secondaryButtonText: 'Explore PETPOP'
  },
  {
    id: 2,
    title: 'Healthy Skin. Shiny Coat.',
    subtitle: 'Convenient easy-mix powder supplements enriched with Essential Omegas, Biotin, and natural flavors.',
    bgImage: 'https://images.unsplash.com/photo-1534361960057-19889db9621e?auto=format&fit=crop&q=80&w=1600',
    tag: 'Skin & Coat Formula',
    buttonText: 'Shop Skin & Coat',
    secondaryButtonText: 'View Details'
  },
  {
    id: 3,
    title: 'Simple Daily Dental Care',
    subtitle: 'Effortless oral care powder that helps keep your dog\'s teeth clean and breath fresh every single day.',
    bgImage: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&q=80&w=1600',
    tag: 'Oral Care Supplement',
    buttonText: 'Shop Dental Powder',
    secondaryButtonText: 'Learn More'
  }
];

export const TRUST_BENEFITS = [
  {
    id: 'easy-care',
    title: 'EASY DAILY CARE',
    desc: 'Simple products designed for everyday pet routines.',
    iconName: 'Sparkles'
  },
  {
    id: 'pet-focused',
    title: 'PET FOCUSED',
    desc: 'Wellness products created around the needs of dogs and cats.',
    iconName: 'Heart'
  },
  {
    id: 'easy-mix',
    title: 'EASY TO MIX',
    desc: 'Convenient powder formats designed for simple daily use.',
    iconName: 'Mix'
  },
  {
    id: 'for-parents',
    title: 'MADE FOR PET PARENTS',
    desc: 'Simple care without making everyday routines complicated.',
    iconName: 'Smile'
  }
];

export const WHY_PETPOP = [
  {
    title: 'Simple',
    desc: 'Easy-to-use products for everyday routines.'
  },
  {
    title: 'Pet Focused',
    desc: 'Designed around practical daily pet care.'
  },
  {
    title: 'Convenient',
    desc: 'Simple powder formats that fit into everyday routines.'
  },
  {
    title: 'Everyday Wellness',
    desc: 'Easy ways to make pet care part of the daily routine.'
  }
];

export const HOW_IT_WORKS = [
  {
    step: '01',
    title: 'CHOOSE YOUR PRODUCT',
    desc: 'Choose the product that fits your pet\'s daily care routine.'
  },
  {
    step: '02',
    title: 'MIX & SERVE',
    desc: 'Use the product according to the instructions provided on the packaging.'
  },
  {
    step: '03',
    title: 'MAKE IT A ROUTINE',
    desc: 'Keep daily pet care simple and consistent.'
  }
];

export const FAQS = [
  {
    question: 'Who can use PETPOP Skin & Coat Support Powder?',
    answer: 'PETPOP Skin & Coat Support Powder is formulated for both dogs and cats of various sizes and life stages. Please follow the serving instructions provided on the product packaging.'
  },
  {
    question: 'How do I use the Skin & Coat Support Powder?',
    answer: 'Simply sprinkle the measured powder over your pet\'s daily kibble or wet food and mix gently. Please follow the serving instructions provided on the product packaging.'
  },
  {
    question: 'What is PETPOP Dental Powder used for?',
    answer: 'PETPOP Dental Powder is an all-natural daily oral care supplement for dogs designed to support teeth cleaning, tartar and plaque management, and fresh breath.'
  },
  {
    question: 'How often should I use the Dental Powder?',
    answer: 'It is designed for regular daily use with your dog\'s meals. Please follow the serving instructions provided on the product packaging.'
  },
  {
    question: 'Can PETPOP products be used for cats?',
    answer: 'PETPOP Skin & Coat Support Powder is formulated for both dogs and cats. PETPOP Dental Powder is specifically created for dogs. Please check each packaging label for exact guidance.'
  },
  {
    question: 'How should PETPOP products be stored?',
    answer: 'Store in a cool, dry place away from direct sunlight. Ensure the container cap is tightly sealed after each use.'
  }
];

export const PET_CATEGORIES = [
  {
    name: 'Dogs',
    img: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=400',
    count: 'Skin, Coat & Dental Supplements'
  },
  {
    name: 'Cats',
    img: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=400',
    count: 'Skin & Coat Formulas'
  },
  {
    name: 'Daily Powders',
    img: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=400',
    count: 'Easy Mix Format'
  },
  {
    name: 'Oral Care',
    img: 'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&q=80&w=400',
    count: 'Tartar & Plaque Support'
  }
];
