import { Users, Award, BookOpen, Network } from 'lucide-react';
import { Program } from '../types';
import { useState } from 'react';

const programs: Program[] = [
  {
    title: 'Leadership Development',
    description: 'Comprehensive training program focusing on sports management and leadership skills.',
    icon: 'Users',
    benefits: ['Personal mentorship', 'Leadership workshops', 'Networking events'],
    details: 'Our flagship leadership program combines hands-on experience with theoretical knowledge. Participants engage in real-world projects, attend executive seminars, and develop crucial management skills specific to the sports industry.'
  },
  {
    title: 'Mentorship Program',
    description: 'Connect with experienced professionals in the sports industry.',
    icon: 'Award',
    benefits: ['One-on-one guidance', 'Career planning', 'Industry insights'],
    details: 'Get paired with successful leaders in sports management who provide personalized guidance. Our mentors share their experiences, help navigate career challenges, and provide valuable industry connections.'
  },
  {
    title: 'Skills Workshop',
    description: 'Practical training sessions in various aspects of sports management.',
    icon: 'BookOpen',
    benefits: ['Hands-on experience', 'Expert-led sessions', 'Certificate programs'],
    details: 'Interactive workshops covering essential skills in sports management, from financial planning to event organization. Each workshop is led by industry experts and includes practical exercises and real-world case studies.'
  },
  {
    title: 'Network Building',
    description: 'Access to a growing network of sports professionals and organizations.',
    icon: 'Network',
    benefits: ['Industry connections', 'Job opportunities', 'Partnership possibilities'],
    details: 'Join our extensive network of sports industry professionals. Participate in exclusive networking events, access job boards, and connect with organizations looking for emerging female leaders.'
  }
];

const IconMap = {
  Users,
  Award,
  BookOpen,
  Network
};

export default function Programs() {
  const [activeProgram, setActiveProgram] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleProgramClick = (index: number) => {
    setIsAnimating(true);
    setTimeout(() => {
      setActiveProgram(activeProgram === index ? null : index);
      setIsAnimating(false);
    }, 200);
  };

  return (
    <section id="programs" className="py-20 bg-gradient-to-br from-white to-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Programs</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive programs designed to empower women in sports leadership roles
            through education, mentorship, and networking.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {programs.map((program, index) => {
            const Icon = IconMap[program.icon as keyof typeof IconMap];
            const isActive = activeProgram === index;

            return (
              <div
                key={program.title}
                onClick={() => handleProgramClick(index)}
                className={`
                  group bg-white p-6 rounded-lg shadow-lg transition-all duration-300 
                  ${isAnimating ? 'scale-95' : 'scale-100'}
                  ${isActive ? 'ring-2 ring-gold-500 shadow-2xl' : 'hover:shadow-xl hover:-translate-y-1 cursor-pointer'}
                  border border-gray-100
                `}
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 group-hover:bg-gold-100 rounded-full w-12 h-12 flex items-center justify-center transition-colors duration-300 flex-shrink-0">
                    <Icon className="h-6 w-6 text-primary-600 group-hover:text-gold-600 transition-colors duration-300" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary-600 transition-colors duration-300">
                      {program.title}
                    </h3>
                    <p className="text-gray-600 mt-2">{program.description}</p>
                  </div>
                </div>

                <div className={`mt-6 transition-all duration-300 overflow-hidden ${isActive ? 'max-h-96' : 'max-h-0'}`}>
                  <div className="border-t border-gray-100 pt-4">
                    <p className="text-gray-600 mb-4">{program.details}</p>
                    <h4 className="font-semibold text-primary-600 mb-2">Key Benefits:</h4>
                    <ul className="space-y-2">
                      {program.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-center text-sm text-gray-600">
                          <span className="w-1.5 h-1.5 bg-gold-500 rounded-full mr-2"></span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}