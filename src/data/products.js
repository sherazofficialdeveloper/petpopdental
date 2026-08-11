// Data for PETPOP Pet Wellness Brand

import skinCoatImg from '/product (1).jpeg';
import dentalImg from '/product (2).jpeg';
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
    id: 'skin-and-coat',
    name: 'PETPOP Skin & Coat Support Powder',
    subtitle: 'Easy-Mix Supplement for Healthy Skin & Shiny Coat',
    description: 'PETPOP Skin & Coat Support Powder for Dogs & Cats, 6.36 oz, Chicken Flavor, Omega 3, 6 & 9 with Biotin & Vitamin C, Easy Mix Supplement for Healthy Skin & Shiny Coat.',
    shortDesc: 'An easy-mix daily supplement designed to support healthy skin and a shiny coat for dogs and cats.',
    price: '$29.99',
    rawPrice: 29.99,
    size: '6.36 oz (180g)',
    flavor: 'Chicken Flavor',
    suitableFor: 'Dogs & Cats',
    rating: '4.9',
    reviewCount: '128',
    image: skinCoatImg,
    badge: 'Best Seller',
    highlights: [
      'For Dogs & Cats',
      'Chicken Flavor',
      'Omega 3, 6 & 9',
      'Biotin & Vitamin C',
      'Easy Mix Powder',
      'Skin & Coat Support'
    ],
    features: [
      'Nourishes dry skin and reduces seasonal itching',
      'Promotes a soft, lustrous and glossy fur coat',
      'Easily mixes with wet or dry daily meals',
      'Delightful natural chicken flavor pets love'
    ],
    usageNote: 'Please follow the serving instructions provided on the product packaging.'
  },
  {
    id: 'dog-dental',
    name: 'PETPOP Dog Dental Powder',
    subtitle: 'Daily Oral Care & Breath Freshener Supplement',
    description: 'Dog Dental Powder for Teeth Cleaning & Breath Freshener, All-Natural Dental Powder for Dogs, Easy Tartar Remover & Plaque Support, Daily Oral Care Supplement.',
    shortDesc: 'Make oral care part of your dog\'s daily routine with an easy-to-use dental powder designed to support tartar, plaque and fresher breath.',
    price: '$27.99',
    rawPrice: 27.99,
    size: '4.23 oz (120g)',
    flavor: 'Natural Mint & Kelp',
    suitableFor: 'Dogs',
    rating: '4.8',
    reviewCount: '94',
    image: dentalImg,
    badge: 'Daily Essential',
    highlights: [
      'Daily Oral Care',
      'Dental Support',
      'Breath Freshening',
      'Tartar Support',
      'Plaque Support',
      'Easy Powder Format'
    ],
    features: [
      'Helps reduce tartar build-up and plaque accumulation',
      'Freshens breath naturally with every daily meal',
      'No toothbrushing struggle required',
      '100% natural powder format for simple daily routine'
    ],
    usageNote: 'Please follow the serving instructions provided on the product packaging.'
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
