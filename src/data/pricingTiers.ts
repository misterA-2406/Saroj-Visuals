import { PricingTier } from '../types';

export const pricingTiers: PricingTier[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: '$1,500',
    priceNote: 'per month',
    description: 'For growing creators who need to eliminate the editing bottleneck and maintain a consistent schedule.',
    features: [
      'Up to 4 long-form videos',
      'Basic color correction',
      'Standard sound mixing',
      '1 round of revisions per video',
      'Email support'
    ],
    turnaroundTime: '5-7 business days',
    revisions: '1 round per video'
  },
  {
    id: 'growth',
    name: 'Growth Engine',
    price: '$3,200',
    priceNote: 'per month',
    description: 'The complete system. We handle your long-form and extract the exact shorts you need to grow on TikTok and IG.',
    features: [
      'Up to 4 long-form videos',
      '12 repurposed Shorts/Reels',
      'Cinematic color grading',
      'Advanced motion graphics',
      'Dedicated Slack channel',
      'Priority delivery'
    ],
    turnaroundTime: '72hr priority turnaround',
    revisions: 'Unlimited during active week',
    isPopular: true
  },
  {
    id: 'scale',
    name: 'Enterprise Scale',
    price: 'Custom',
    priceNote: 'tailored build',
    description: 'For multi-show networks, large agencies, and high-volume personal brands requiring a full post-production team.',
    features: [
      'Unlimited editing volume',
      'Full Podcast to Content Engine',
      'Custom visual identity system',
      'Weekly strategy calls',
      '24/7 dedicated editor team',
      'Raw footage management'
    ],
    turnaroundTime: '48hr or custom',
    revisions: 'Unlimited'
  }
];
