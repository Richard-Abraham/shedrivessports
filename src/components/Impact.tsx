
import { ImpactStory } from '../types';

const stories: ImpactStory[] = [
  {
    title: "Breaking Barriers in Football",
    description: "From assistant coach to head coach of a professional team in just 3 years.",
    image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author: "Jennifer Smith",
    role: "Head Coach"
  },
  {
    title: "Leading from the Front",
    description: "Transformed a struggling sports organization into a profitable enterprise.",
    image: "/images/AML06924.jpg",
    author: "Michelle Wong",
    role: "Athletic Director"
  },
  {
    title: "Innovation in Sports Management",
    description: "Implemented new technologies that revolutionized team operations.",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author: "Patricia Martinez",
    role: "Operations Manager"
  }
];

export default function Impact() {
  return (
    <section id="impact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Impact Stories</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real stories from women who have transformed their careers and made lasting
            impacts in the sports industry through our programs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story) => (
            <div key={story.title} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img
                src={story.image}
                alt={story.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {story.title}
                </h3>
                <p className="text-gray-600 mb-4">{story.description}</p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">{story.author}</p>
                  <p className="text-sm text-purple-600">{story.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}