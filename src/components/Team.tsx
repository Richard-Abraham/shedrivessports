import { useState } from 'react';
import { Linkedin, Twitter, ArrowRight } from 'lucide-react';
import TeamMemberModal from './TeamMemberModal';
import type { TeamMember } from '../types';

const teamMembers: TeamMember[] = [
  {
    name: "Cynthia Mumbo",
    role: "Founder & CEO",
    bio: "Cynthia is a visionary leader transforming the African sports industry. As the Founder and CEO of Sports Connect Africa, she empowersstakeholders ranging from local organizations to global giants like NBA Africa and FIFA. With extensive experience in sales, marketing, and sports management, Cynthia's influence spans the Kenya Basketball Federation, Hype Sports Innovation, and the National Olympic Committee of Kenya. A pioneer, she is the first African woman to win the prestigious Leaders in Sport Under 40 Award. Cynthia's dedication and strategic expertise make her an impactful change-maker, unlocking Africa's immense sporting potential.",
    image: "/images/WhatsApp Image 2025-01-27 at 3.04.20 PM.jpeg",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/cynthia-mumbo?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BDY64t90TS2CAyZmKW3oMHg%3D%3D"
    }
  },
  {
    name: "Dorcas Amakobe",
    role: "Co-founder She Drives Sports",
    bio: "Dorcas Amakobe is a seasoned sports marketing and partnerships expert with over 10 years of experience in the sports industry. She has successfully built strategic partnerships with major sports organizations, driving growth and innovation. Dorcas' expertise lies in identifying market opportunities, negotiating contracts, and managing relationships with key stakeholders. Her experience spans across various sports, including football, basketball, and athletics, making her a valuable asset in the sports industry.",
    image: "/images/WhatsApp Image 2025-02-04 at 11.43.00 AM.jpeg",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/dorcas-amakobe-4a9b804a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BPzBidfghQUWHyNBoUMN55w%3D%3D"
    }
  },
  {
    name: "Nyaboke Omambia",
    role: "Communications",
    bio: "Nyaboke Omambia is a dynamic communications and events specialist with extensive experience in strategic communications, stakeholder engagement, and event management. She has successfully led communications initiatives across diverse industries, enhancing brand visibility and fostering strong public relations. With expertise in crisis management, media relations, and social media strategy, she has consistently delivered impactful messaging and engagement. Nyaboke has orchestrated high-profile events, including international conferences and government engagements, ensuring seamless execution and positive outcomes. Her background in corporate communications, coupled with strategic planning and business analysis skills, makes her a valuable asset in driving organizational success.",
    image: "/images/IMG_166.JPG",
    socialLinks: {
      linkedin: "http://www.linkedin.com/in/nyabokeomambia"
    }
  },
  {
    name: "Wanjiku Mwenda",
    role: "Project Lead",
    bio: "Wanjiku Mwenda is a sports Media and events specialist with over 10 years of experience in the sports media industry. Currently she's the project lead for the She Drives Sports program. She is a member of the Strategic and performance commission of the National Olympic Committee of Kenya NOC K and a holder of a Masters Degree in sports management. She is also a renowned sports events moderator and had been a media commission member for various editions of World Athletics related events. Previously she worked as a sports senior reporter and anchor at various media houses including K24TV. She also held the position of Organizing secretary for the Sports Journalists association of Kenya between 2018-2023",
    image: "/images/AML07641[2](1) - Shiko.jpg",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/wanjiku-mwenda-01112134?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BXkpmMNuRS9iI%2FiOYMAtwTA%3D%3D"
    }
  }
];

export default function Team() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const truncateBio = (bio: string) => {
    const words = bio.split(' ').slice(0, 15).join(' ');
    return words + (bio.split(' ').length > 15 ? '...' : '');
  };

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Team</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet the passionate individuals driving our mission to transform the landscape
            of women's leadership in sports.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="relative w-full h-[460px] rounded-xl overflow-hidden group"
            >
              {/* Animated blob background */}
              <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-gold-500/30" />
                <div className="blob-purple absolute z-0" />
                <div className="blob-gold absolute z-0" />
              </div>

              {/* Card content */}
              <div className="relative h-full z-10 bg-white/95 backdrop-blur-lg m-1 rounded-lg p-6 flex flex-col">
                <div className="relative mb-4 flex-shrink-0">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-48 object-cover rounded-lg shadow-md group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg" />
                </div>

                <div className="flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-purple-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-4">
                    {truncateBio(member.bio)}
                  </p>
                  
                  <div className="mt-auto">
                    <button 
                      onClick={() => setSelectedMember(member)}
                      className="text-purple-600 hover:text-purple-700 text-sm font-medium flex items-center group/button"
                    >
                      See more info
                      <ArrowRight className="ml-1 h-4 w-4 group-hover/button:translate-x-1 transition-transform" />
                    </button>
                    
                    <div className="mt-3 flex space-x-3">
                      {member.socialLinks.linkedin && (
                        <a
                          href={member.socialLinks.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-purple-600 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Linkedin className="h-5 w-5" />
                        </a>
                      )}
                      {member.socialLinks.twitter && (
                        <a
                          href={member.socialLinks.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-purple-600 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Twitter className="h-5 w-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedMember && (
          <TeamMemberModal
            member={selectedMember}
            onClose={() => setSelectedMember(null)}
          />
        )}
      </div>
    </section>
  );
}