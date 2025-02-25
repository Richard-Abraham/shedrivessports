import { Helmet } from 'react-helmet-async';

interface StructuredDataProps {
  type: 'Organization' | 'WebSite' | 'WebPage' | 'Article' | 'Event' | 'Person' | 'BreadcrumbList';
  data: Record<string, any>;
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': type,
    ...data,
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
}

// Example usage for organization data
export function OrganizationStructuredData() {
  const orgData = {
    name: 'She Drives Sports',
    url: 'https://shedrives.sports',
    logo: 'https://shedrives.sports/Original__1_-removebg-preview.png',
    sameAs: [
      'https://www.facebook.com/shedrives.sports',
      'https://www.instagram.com/shedrives.sports',
      'https://twitter.com/shedrives_sports',
      'https://www.linkedin.com/company/shedrives-sports'
    ],
    description: 'Training Africa\'s Next Sports Leaders. Join our mission to train women in sports leadership.',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'Kenya',
      addressLocality: 'Nairobi'
    }
  };

  return <StructuredData type="Organization" data={orgData} />;
}

// Example usage for website data
export function WebsiteStructuredData() {
  const websiteData = {
    name: 'She Drives Sports',
    url: 'https://shedrives.sports',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://shedrives.sports/search?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  };

  return <StructuredData type="WebSite" data={websiteData} />;
} 