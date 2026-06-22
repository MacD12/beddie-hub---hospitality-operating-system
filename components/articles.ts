export type Block =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'quote'; text: string }
  | { type: 'ul'; items: string[] };

export interface Article {
  slug: string;
  tag: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  content: Block[];
}

export const articles: Article[] = [
  {
    slug: '2026-playbook-fully-booked-seasons',
    tag: 'Guide',
    title: 'The 2026 playbook for fully-booked seasons',
    excerpt: 'A practical framework for filling your calendar — from pricing and packaging to the automations that keep guests coming back.',
    author: 'Maya Rodriguez',
    date: 'Jun 2026',
    readTime: '8 min read',
    content: [
      { type: 'p', text: 'A fully-booked season rarely happens by accident. The operators who run at capacity treat demand as something they shape — through smart pricing, irresistible packaging, and a guest experience that practically markets itself.' },
      { type: 'h2', text: 'Start with the right price, not the lowest' },
      { type: 'p', text: 'Discounting feels productive, but it trains guests to wait for deals and erodes the margin you need to reinvest. Instead, use demand signals — lead time, occupancy, and seasonality — to price dynamically. The goal is the highest rate the market will happily pay, not the lowest rate you can survive.' },
      { type: 'ul', items: ['Set rate floors and ceilings per season', 'Automate price nudges based on pace-to-target', 'Reserve your best inventory for direct bookings'] },
      { type: 'h2', text: 'Package experiences, not nights' },
      { type: 'p', text: 'Guests don\'t book a room — they book a trip. Bundle lessons, gear, meals, and transfers into clear packages. Packages raise average order value, reduce decision fatigue, and make your offer impossible to compare on price alone.' },
      { type: 'quote', text: 'The moment we sold "experiences" instead of "beds", our average booking value jumped and cancellations fell.' },
      { type: 'h2', text: 'Automate the follow-through' },
      { type: 'p', text: 'The difference between a one-time guest and a regular is what happens after checkout. Automated, well-timed emails — a thank-you, a photo gallery, an early-bird offer for next season — turn satisfied guests into your most profitable channel.' },
      { type: 'p', text: 'Put these three levers together and a fully-booked season stops being luck. It becomes a system you can run every year.' },
    ],
  },
  {
    slug: 'azul-surf-house-direct-bookings',
    tag: 'Customer Story',
    title: 'How Azul Surf House grew direct bookings 40%',
    excerpt: 'By shifting demand away from OTAs and onto their own booking engine, one surf camp reclaimed both margin and the guest relationship.',
    author: 'Daniel Okafor',
    date: 'May 2026',
    readTime: '5 min read',
    content: [
      { type: 'p', text: 'Azul Surf House had a great problem: they were busy. The catch was that most of that demand arrived through online travel agencies, taking a double-digit commission and the guest relationship with it.' },
      { type: 'h2', text: 'The shift to direct' },
      { type: 'p', text: 'They moved their booking engine front-and-center on a fast, mobile-first site, added commission-free packages, and let the channel manager keep availability in sync everywhere automatically.' },
      { type: 'ul', items: ['Direct bookings up 40% in two seasons', 'Commission costs cut by more than half', 'Repeat-guest rate climbed to 31%'] },
      { type: 'quote', text: 'We finally own the relationship. When a guest books with us directly, we can wow them from the very first email.' },
      { type: 'h2', text: 'What made the difference' },
      { type: 'p', text: 'It wasn\'t a single feature — it was removing friction at every step. A booking that takes seconds, a confirmation that builds excitement, and a follow-up that earns the next trip.' },
    ],
  },
  {
    slug: 'revenue-intelligence-multi-property',
    tag: 'Webinar',
    title: 'Revenue intelligence for multi-property operators',
    excerpt: 'How groups use unified data to forecast demand, balance inventory, and price with confidence across every location.',
    author: 'Sofia Lindqvist',
    date: 'Apr 2026',
    readTime: 'On demand',
    content: [
      { type: 'p', text: 'Running one property is hard. Running several multiplies the complexity — and the opportunity. The operators who win at scale do it with a single source of truth.' },
      { type: 'h2', text: 'One dashboard, every location' },
      { type: 'p', text: 'When occupancy, revenue, and pace live in one place, patterns emerge: which sites lead demand, where to shift inventory, and when to act before a soft week becomes a soft month.' },
      { type: 'ul', items: ['Forecast demand per site and in aggregate', 'Spot underperformance early', 'Benchmark locations against each other'] },
      { type: 'quote', text: 'We stopped guessing. The data tells us where to push and where to hold — across all six properties at once.' },
      { type: 'p', text: 'Watch the full session on demand to see the exact dashboards and the decisions they drive.' },
    ],
  },
  {
    slug: 'guest-touchpoints-loyalty',
    tag: 'Article',
    title: 'Five guest touchpoints that quietly drive loyalty',
    excerpt: 'Loyalty isn\'t won at checkout — it\'s built in the small, easily-overlooked moments before, during, and after the stay.',
    author: 'Priya Nair',
    date: 'Jun 2026',
    readTime: '6 min read',
    content: [
      { type: 'p', text: 'Guests rarely remember your pricing. They remember how you made them feel at five specific moments — and those moments decide whether they ever come back.' },
      { type: 'h2', text: '1. The confirmation' },
      { type: 'p', text: 'The first email after booking sets the tone. Make it warm, useful, and excited — not a receipt. This is your chance to start the trip before it begins.' },
      { type: 'h2', text: '2. The pre-arrival nudge' },
      { type: 'p', text: 'A timely message with directions, what to pack, and a friendly face reduces anxiety and feels like genuine care.' },
      { type: 'ul', items: ['Arrival window confirmation', 'A single, clear point of contact', 'One small unexpected tip'] },
      { type: 'h2', text: '3–5. Welcome, mid-stay, and goodbye' },
      { type: 'p', text: 'A personal welcome, a light mid-stay check-in, and a heartfelt farewell with an easy way to rebook turn a good stay into a relationship.' },
      { type: 'quote', text: 'People forget what you sold them. They never forget how you made them feel arriving tired at 11pm.' },
    ],
  },
  {
    slug: 'introducing-application-form',
    tag: 'Product News',
    title: 'Introducing the new Application Form',
    excerpt: 'Collect rich applicant details for retreats, courses, and clinics — and turn them into bookings without the back-and-forth.',
    author: 'The Beddie Hub Team',
    date: 'Jun 2026',
    readTime: '3 min read',
    content: [
      { type: 'p', text: 'Some experiences need more than a checkout. Today we\'re launching the Application Form — a flexible way to capture exactly what you need before confirming a guest.' },
      { type: 'h2', text: 'Built for considered bookings' },
      { type: 'p', text: 'Custom questions, conditional logic, and file uploads let you screen applicants for retreats, multi-day courses, and clinics — then convert them to a booking in one click.' },
      { type: 'ul', items: ['Custom fields & conditional questions', 'Review and approve in the backoffice', 'Auto-convert approved applicants to bookings'] },
      { type: 'p', text: 'Available now on Growth and Enterprise plans. Head to your dashboard to build your first form.' },
    ],
  },
  {
    slug: 'commission-free-distribution',
    tag: 'Guide',
    title: 'A simple framework for commission-free distribution',
    excerpt: 'Use OTAs for discovery, then bring guests home to direct. A practical model for keeping reach without giving away margin.',
    author: 'Daniel Okafor',
    date: 'Mar 2026',
    readTime: '7 min read',
    content: [
      { type: 'p', text: 'Online travel agencies are great at one thing: discovery. The mistake is letting them own the relationship forever. Here\'s a framework for using reach without surrendering margin.' },
      { type: 'h2', text: 'Discover, then convert' },
      { type: 'p', text: 'Treat OTAs as the top of your funnel. Once a guest has stayed, every touchpoint should make booking direct the obviously better choice.' },
      { type: 'ul', items: ['Match availability everywhere with a channel manager', 'Make direct the best price and the best experience', 'Capture the email and earn the next booking'] },
      { type: 'quote', text: 'Reach gets them in the door once. Experience is what brings them back commission-free.' },
      { type: 'p', text: 'Over a few seasons, the mix shifts: less paid discovery, more owned demand, and materially better margin.' },
    ],
  },
  {
    slug: 'alpine-peaks-single-platform',
    tag: 'Customer Story',
    title: 'Why Alpine Peaks switched to a single platform',
    excerpt: 'Consolidating six tools into one cut admin time by a third and gave the team a single source of truth across locations.',
    author: 'Sofia Lindqvist',
    date: 'Feb 2026',
    readTime: '5 min read',
    content: [
      { type: 'p', text: 'Alpine Peaks ran on a patchwork: one tool for bookings, another for payments, spreadsheets for everything in between. Every week ended in reconciliation.' },
      { type: 'h2', text: 'One system, one truth' },
      { type: 'p', text: 'Moving onto a single platform meant bookings, payments, and operations finally spoke the same language — across all of their locations.' },
      { type: 'ul', items: ['Admin time down 33%', 'Six tools replaced by one', 'A single dashboard across sites'] },
      { type: 'quote', text: 'We got our evenings back. The numbers just reconcile themselves now.' },
      { type: 'p', text: 'With less time spent wrangling tools, the team refocused on what they do best: guiding unforgettable trips.' },
    ],
  },
];
