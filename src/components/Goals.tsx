import { Target, Users, Shield, Network } from 'lucide-react';
import PageSEO from './PageSEO';

const goals = [
  {
    icon: Target,
    title: "Leadership Development",
    description: "Train 80 women in sports leadership skills over the next 3 years, equipping them with knowledge and confidence."
  },
  {
    icon: Shield,
    title: "Ethical Leadership",
    description: "Foster a culture of integrity and ethical leadership in African sports through comprehensive training."
  },
  {
    icon: Users,
    title: "Industry Partnerships",
    description: "Facilitate at least 5 partnerships annually between program graduates and sports organizations."
  },
  {
    icon: Network,
    title: "Network Building",
    description: "Cultivate a strong alumni network providing ongoing support and mentorship opportunities across Africa."
  }
];

export default function Goals() {
  return (
    <section id="goals" className="py-20 bg-white">
      <PageSEO 
        title="Our Goals" 
        description="Learn about the strategic goals of She Drives Sports in transforming women's leadership in African sports through education, mentorship, and advocacy."
        path="/#goals"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Goals</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Transforming the African sports industry through clear objectives and measurable impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {goals.map((goal) => (
            <div key={goal.title} className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <goal.icon className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">{goal.title}</h3>
              <p className="text-gray-600 text-center">{goal.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 