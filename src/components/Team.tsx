
import { Linkedin, Twitter } from 'lucide-react';
import { TeamMember } from '../types';

const teamMembers: TeamMember[] = [
  {
    name: "Sarah Johnson",
    role: "Founder & CEO",
    bio: "Former professional athlete turned sports executive with 15+ years of experience in transforming sports organizations. Pioneer in creating inclusive leadership programs.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    socialLinks: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com"
    }
  },
  {
    name: "Maria Rodriguez",
    role: "Program Director",
    bio: "Sports management expert with a passion for developing leadership programs. Has mentored over 200 women in their journey to sports leadership positions.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    socialLinks: {
      linkedin: "https://linkedin.com"
    }
  },
  {
    name: "Dr. Emily Chen",
    role: "Head of Research & Development",
    bio: "PhD in Sports Psychology with expertise in leadership development. Leading research initiatives on women's advancement in sports management.",
    image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    socialLinks: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com"
    }
  },
  {
    name: "Alexandra Foster",
    role: "Partnerships Director",
    bio: "Former sports marketing executive bringing 10+ years of experience in building strategic partnerships with major sports organizations.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    socialLinks: {
      linkedin: "https://linkedin.com"
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