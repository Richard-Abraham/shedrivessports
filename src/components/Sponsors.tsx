import { Building2 } from 'lucide-react';
import PageSEO from './PageSEO';

const sponsors = [
  {
    name: 'Nike',
    logo: '/MTG_LOGO__1_-removebg-preview.png',
    tier: 'platinum'
  },
  {
    name: 'Adidas',
    logo: '/Sports_Connect_Logo__1_-removebg-preview.png',
    tier: 'platinum'
  }
];

export default function Sponsors() {
  return (
    <section id="sponsors" className="py-20 bg-gray-50">
      <PageSEO 
        title="Our Sponsors" 
        description="Meet the organizations and partners supporting She Drives Sports in our mission to empower women in sports leadership across Africa."
        path="/#sponsors"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Sponsors</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Proud partners supporting women's leadership in sports
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {sponsors.map((sponsor) => (
              <div
                key={sponsor.name}
                className="group relative flex items-center justify-center p-8 grayscale hover:grayscale-0 transition-all duration-300"
              >
                <div className="relative w-full aspect-[3/2] bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                  {/* Fallback icon if image fails to load */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Building2 className="h-8 w-8 text-gray-400" />
                  </div>
                  <img
                    src={sponsor.logo}
                    alt={`${sponsor.name} logo`}
                    className="relative z-10 w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 