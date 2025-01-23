export interface NavItem {
  title: string;
  href: string;
}

export interface ImpactStory {
  title: string;
  description: string;
  image: string;
  author: string;
  role: string;
}

export interface Program {
  title: string;
  description: string;
  icon: string;
  benefits: string[];
  details: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  address: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  socialLinks: {
    linkedin?: string;
    twitter?: string;
  };
}