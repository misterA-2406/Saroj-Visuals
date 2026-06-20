export interface Service {
  id: string;
  title: string;
  description: string;
  outcomeHeader: string;
  whoItsFor: string;
  whatsIncluded: string[];
  process: string[];
  priceStart: string;
}

export interface CaseStudy {
  slug: string;
  client: string;
  niche: 'Real Estate' | 'Coaches' | 'YouTubers' | 'Podcasts';
  heroMetric: string;
  heroMetricLabel: string;
  image: string;
  challenge: string;
  approach: string[];
  results: { label: string; value: string }[];
  quote: { text: string; author: string };
  videoUrl?: string; // Optional embedded video link
}

export interface PricingTier {
  id: string;
  name: string;
  price: string;
  priceNote: string;
  description: string;
  features: string[];
  turnaroundTime: string;
  revisions: string;
  isPopular?: boolean;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  videoThumb?: string;
  videoUrl?: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}
