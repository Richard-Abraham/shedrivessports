import { Users2, UserPlus, Heart } from 'lucide-react';
import PageSEO from './PageSEO';

export default function GetInvolved() {
  return (
    <section id="get-involved" className="py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900">
      <PageSEO 
        title="Get Involved" 
        description="Join our mission to empower women in sports leadership across Africa. Discover how you can contribute through donations, partnerships, or volunteering."
        path="/#get-involved"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-gold-500 font-semibold tracking-wider uppercase text-sm">Join Us</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">Get Involved</h2>
          <div className="w-20 h-1.5 bg-gold-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Join our mission to transform the sports industry by creating more
            opportunities for women in leadership roles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center border border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white/15">
            <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <Users2 className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Join as Participant</h3>
            <p className="text-gray-200 mb-6">
              Take the first step towards your leadership journey in sports management.
            </p>
            <button className="bg-gold-500 text-white px-6 py-3 rounded-md hover:bg-gold-600 transition-colors w-full shadow-md hover:shadow-lg">
              Apply Now
            </button>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center border border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white/15">
            <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <UserPlus className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Become a Mentor</h3>
            <p className="text-gray-200 mb-6">
              Share your expertise and help shape the next generation of sports leaders.
            </p>
            <button className="bg-gold-500 text-white px-6 py-3 rounded-md hover:bg-gold-600 transition-colors w-full shadow-md hover:shadow-lg">
              Join as Mentor
            </button>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center border border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white/15">
            <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <Heart className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Support Our Mission</h3>
            <p className="text-gray-200 mb-6">
              Help us create more opportunities through donations and partnerships.
            </p>
            <button className="bg-gold-500 text-white px-6 py-3 rounded-md hover:bg-gold-600 transition-colors w-full shadow-md hover:shadow-lg">
              Donate Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 