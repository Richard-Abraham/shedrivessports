import { Users2, UserPlus, Heart } from 'lucide-react';

export default function GetInvolved() {
  return (
    <section id="get-involved" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Get Involved</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join our mission to transform the sports industry by creating more
            opportunities for women in leadership roles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-purple-50 rounded-lg p-8 text-center">
            <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <Users2 className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Join as Participant</h3>
            <p className="text-gray-600 mb-6">
              Take the first step towards your leadership journey in sports management.
            </p>
            <button className="bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700 transition-colors w-full">
              Apply Now
            </button>
          </div>

          <div className="bg-purple-50 rounded-lg p-8 text-center">
            <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <UserPlus className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Become a Mentor</h3>
            <p className="text-gray-600 mb-6">
              Share your expertise and help shape the next generation of sports leaders.
            </p>
            <button className="bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700 transition-colors w-full">
              Join as Mentor
            </button>
          </div>

          <div className="bg-purple-50 rounded-lg p-8 text-center">
            <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <Heart className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Support Our Mission</h3>
            <p className="text-gray-600 mb-6">
              Help us create more opportunities through donations and partnerships.
            </p>
            <button className="bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700 transition-colors w-full">
              Donate Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}