import {
  Flower2, Waves, Ship, Mountain, Wind, Compass, Trophy, Tent, Droplets,
  LayoutDashboard, CreditCard, Share2, CalendarCheck, Globe, Heart, TrendingUp,
  Users, Megaphone, Monitor, Star, Briefcase, UserCircle, Puzzle, Code, FileText,
  Mail, MousePointerClick, PenTool, MessageSquare, Package, CalendarRange,
  Newspaper, Video, BookOpen, Quote, Map, Lightbulb, Presentation,
  type LucideIcon,
} from 'lucide-react';

export interface NavItem {
  label: string;
  desc?: string;
  icon: LucideIcon;
  badge?: string;
}

export interface NavMenu {
  title: string;
  to: string;
  columns: number;
  items: NavItem[];
  cta?: { title: string; text: string };
}

export const builtForItems: NavItem[] = [
  { label: 'Retreats', icon: Flower2, desc: 'Wellness & yoga retreats' },
  { label: 'Surf Camps', icon: Waves, desc: 'Coaching & accommodation' },
  { label: 'Surf Charters', icon: Ship, desc: 'Boat trips & itineraries' },
  { label: 'Mountain Guiding', icon: Mountain, desc: 'Expeditions & tours' },
  { label: 'Kitesurf Camps', icon: Wind, desc: 'Lessons & gear' },
  { label: 'Outdoor Activity Centres', icon: Compass, desc: 'Multi-activity hubs' },
  { label: 'Sport Camps & Clinics', icon: Trophy, desc: 'Training programs' },
  { label: 'Glamping', icon: Tent, desc: 'Unique stays' },
  { label: 'Wave Parks', icon: Droplets, desc: 'Sessions & memberships' },
];

export const platformItems: NavItem[] = [
  { label: 'PMS', icon: LayoutDashboard, desc: 'Property management' },
  { label: 'Payments', icon: CreditCard, desc: 'Secure global payments' },
  { label: 'Channel Manager', icon: Share2, desc: 'Sync every channel' },
  { label: 'Booking Engine', icon: CalendarCheck, desc: 'Direct bookings' },
  { label: 'Distribution Partners', icon: Globe, desc: 'Expand your reach' },
  { label: 'Guest Experience', icon: Heart, desc: 'Delight every guest' },
  { label: 'Revenue Intelligence', icon: TrendingUp, desc: 'Smarter pricing' },
  { label: 'Guest Marketing CRM', icon: Users, desc: 'Know your guests' },
  { label: 'Digital Marketing', icon: Megaphone, desc: 'Fill your calendar' },
  { label: 'Websites', icon: Monitor, desc: 'Beautiful & fast' },
  { label: 'Reputation Management', icon: Star, desc: 'Win more reviews' },
];

export const featureItems: NavItem[] = [
  { label: 'Booking Engine', icon: CalendarCheck },
  { label: 'Backoffice', icon: Briefcase },
  { label: 'Customer Portal', icon: UserCircle },
  { label: 'Payment Form', icon: CreditCard },
  { label: 'Integrations', icon: Puzzle },
  { label: 'API', icon: Code },
  { label: 'Application Form', icon: FileText, badge: 'New' },
  { label: 'Automated Emails', icon: Mail },
  { label: 'Booking Widget', icon: MousePointerClick },
  { label: 'Channel Manager', icon: Share2 },
  { label: 'Digital Waivers', icon: PenTool },
  { label: 'Inquiry Form', icon: MessageSquare },
  { label: 'Package Builder', icon: Package },
  { label: 'Reservation Management', icon: CalendarRange },
];

export const resourceItems: NavItem[] = [
  { label: 'Blog', icon: Newspaper, desc: 'Tips & playbooks' },
  { label: 'Product News', icon: Megaphone, desc: "What's new" },
  { label: 'Product Videos', icon: Video, desc: 'See it in action' },
  { label: 'Knowledge Base', icon: BookOpen, desc: 'Guides & docs' },
  { label: 'Customer Stories', icon: Quote, desc: 'Real results' },
  { label: 'Product Roadmap', icon: Map, desc: "Where we're headed" },
  { label: 'Suggestion Board', icon: Lightbulb, desc: 'Shape the product' },
  { label: 'Webinars', icon: Presentation, desc: 'Live & on-demand' },
];

export const megaMenus: NavMenu[] = [
  {
    title: 'Built for',
    to: '/solutions',
    columns: 3,
    items: builtForItems,
    cta: { title: 'Not sure where you fit?', text: 'Talk to our team →' },
  },
  { title: 'Platform', to: '/platform', columns: 3, items: platformItems },
  { title: 'Features', to: '/platform', columns: 3, items: featureItems },
  { title: 'Resources', to: '/resources', columns: 2, items: resourceItems },
];

// Plain link groups reused by the footer
export const footerContent = [
  'All Resources', 'Articles', 'Ebooks', 'Podcast', 'Videos', 'Webinars', 'Whitepapers & Reports',
];

export const companyLinks = ['About', 'Careers', 'Partners', 'Contact', 'Pricing', 'Status'];
