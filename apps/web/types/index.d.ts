declare interface NavLink {
  name: string;
  href: string;
}

declare interface CompanyLogo {
  id: number;
  logo: any;
}

declare interface KeyFeatureCard {
  title: string;
  description: string;
  image: any;
  link: string;
}

declare interface CollaborationCard {
  title: string;
  description: string;
  icon: any;
  link: string;
}

declare interface PricingCard {
  plan: string;
  description: string;
  price: string;
  slug: string;
  benefits: string[];
}

declare interface FAQItem {
  title: string;
  description: string;
}

declare interface TestimonialCard {
  name: string;
  role: string;
  avatar: any;
  description: string;
  date: string;
}

declare interface FooterNavLink {
  label: string;
  href: string;
}

declare interface FooterLinkSection {
  title: string;
  links: FooterNavLink[];
}

declare interface AboutCompanyCard {
  title: string;
  description: string;
  icon: any;
}

declare interface CompanyStatistic {
  metric: string;
  title: string;
  description: string;
}

declare interface SocialLink {
  platform: string;
  url: string;
}

declare interface TeamMember {
  name: string;
  role: string;
  avatar: any;
  socials: SocialLink[];
}

declare interface Job {
  title: string;
  department: string;
  experience: string;
  type: string;
  location: string;
  jobDescription: string;
  responsibilities: string[];
}

declare interface Blog {
  content: string;
}

declare interface BlogPost {
  title: string;
  description: string;
  author: Omit<TeamMember, 'socials'>;
  image: any;
  blog: Blog;
  likes: number;
  comments: number;
}
