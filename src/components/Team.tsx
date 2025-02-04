
import { Linkedin, Twitter } from 'lucide-react';
import { TeamMember } from '../types';

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
    role: "Partnerships Director",
    bio: "Dorcas Amakobe is a seasoned sports marketing and partnerships expert with over 10 years of experience in the sports industry. She has successfully built strategic partnerships with major sports organizations, driving growth and innovation. Dorcas' expertise lies in identifying market opportunities, negotiating contracts, and managing relationships with key stakeholders. Her experience spans across various sports, including football, basketball, and athletics, making her a valuable asset in the sports industry.",
    image: "/images/WhatsApp Image 2025-02-04 at 11.43.00 AM.jpeg",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/dorcas-amakobe-4a9b804a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BPzBidfghQUWHyNBoUMN55w%3D%3D"
    }
  },
  {
    name: "Nyaboke Omambia",
    role: "Project Lead",
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 px-4 sm:px-0">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative group">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-purple-600 bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-purple-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                <div className="flex space-x-3">
                  {member.socialLinks.linkedin && (
                    <a
                      href={member.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-purple-600 transition-colors"
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
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}