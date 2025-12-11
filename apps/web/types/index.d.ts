declare interface NavLink {
  name: string;
  href: string;
}

declare interface FilterInputProps {
  className?: string;
  icon: React.ElementType;
  placeholder: string;
  name: string;
  selectOptions?: string[];
  onChange: (value: any) => void;
  value: string;
}

declare interface Heading {
  size: "lg" | "xl";
  className: string;
  badgeTitle?: string;
  badgeTag?: string;
  title: string;
  description: string;
  primaryButton?: string;
  primaryButtonIcon?: boolean;
  secondaryButton?: string;
}

declare interface CompanyLogo {
  id: number;
  logo: any;
  link: string;
}

declare interface KeyFeatureCardData {
  title: string;
  description: string;
  image: any;
  link: string;
}

declare interface CollaborationCardData {
  title: string;
  description: string;
  icon: any;
  link: string;
}

declare interface PricingCardData {
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

declare interface TestimonialCardData {
  name: string;
  role: string;
  avatar: any;
  description: string;
  date: string;
}

declare interface ProfileCardData {
  avatar: any;
  name: string;
  role?: string;
  rating?: number;
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
  slug: string;
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
  features?: string[];
}

declare interface BlogComment {
  title: string;
  review: string;
  rating: number;
  author: {
    name: string;
    role: string;
    avatar: any;
  };
}

declare interface BlogPost {
  slug: string;
  title: string;
  description: string;
  author: Omit<TeamMember, "socials">;
  image: any;
  blog: Blog;
  likes: number;
  comments: BlogComment[];
}
