import { CaseStudy } from '../types';

export const caseStudies: CaseStudy[] = [
  {
    slug: 'the-founder-podcast',
    client: 'The Founder Podcast',
    niche: 'Podcasts',
    heroMetric: '+212%',
    heroMetricLabel: 'Average Watch Time',
    image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=2000&auto=format&fit=crop',
    challenge: 'Despite hosting high-profile guests, average view duration was sitting at 12%. The long-form episodes were too slow, and short-form clips lacked narrative hooks, failing to drive discovery back to the main channel.',
    approach: [
      'Implemented a multi-cam dynamic switching protocol based on pacing data',
      'Applied a signature dark-cinematic color grade to establish a recognizable visual identity',
      'Extracted 15 high-retention shorts per episode using our primary tension-loop methodology',
      'Overhauled the first 60 seconds with an aggressive cold-open hook'
    ],
    results: [
      { label: 'Watch Time Growth', value: '+212%' },
      { label: 'Subscriber Conversion', value: '4x' },
      { label: 'Shorts Views (30 Days)', value: '1.2M' }
    ],
    quote: {
      text: 'Saroj Visuals completely redefined our content. We went from a struggling interview show to a top-100 business podcast in six months purely based on their retention edits.',
      author: 'Host of The Founder Podcast'
    }
  },
  {
    slug: 'coach-alex-growth',
    client: 'Coach Alex',
    niche: 'Coaches',
    heroMetric: '3x',
    heroMetricLabel: 'Lead Conversion Rate',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2000&auto=format&fit=crop',
    challenge: 'Coach Alex had an amazing high-ticket offer but was running low-quality, poorly lit VSLs and ad creatives that attracted unqualified leads and failed to convert traffic.',
    approach: [
      'Rebuilt the VSL with direct-response psychological pacing',
      'Integrated b-roll sequencing to visualize abstract concepts',
      'Cleaned audio and graded footage to match a luxury coaching brand',
      'Created 10 variation ad creatives for precise A/B testing'
    ],
    results: [
      { label: 'Lead Quality Improvement', value: '85%' },
      { label: 'ROAS', value: '4.2x' },
      { label: 'Cost Per Call', value: '-45%' }
    ],
    quote: {
      text: 'My ad spend is finally yielding predictable returns. The VSL variation they delivered has generated more booked calls in 30 days than I had all last year.',
      author: 'Alex M., High-Ticket Consultant'
    }
  },
  {
    slug: 'modern-wealth',
    client: 'Modern Wealth',
    niche: 'YouTubers',
    heroMetric: '4.1M',
    heroMetricLabel: 'Views in 60 Days',
    image: 'https://images.unsplash.com/photo-1551818255-e6e10975bc17?q=80&w=2000&auto=format&fit=crop',
    challenge: 'A growing personal finance channel plateaued at 20K subscribers. The content was highly educational but dry, leading to flat retention curves and zero algorithmic pushes.',
    approach: [
      'Introduced motion-graphics heavy visualizations for complex financial concepts',
      'Increased cut frequency by 40% without losing narrative coherence',
      'Script and storyboard consulting to pre-optimize for edit',
      'Developed a custom sound design profile for recurring motifs'
    ],
    results: [
      { label: 'New Subscribers', value: '140K' },
      { label: 'Average CTR', value: '9.4%' },
      { label: 'Revenue Growth', value: '310%' }
    ],
    quote: {
      text: 'I used to spend 20 hours a week editing. Now I just drop footage in a folder, and magic comes back. My channel exploded once I handed the reins to Saroj Visuals.',
      author: 'Creator, Modern Wealth'
    }
  }
];
