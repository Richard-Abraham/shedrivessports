import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-primary-900 via-primary-700 to-primary-900 min-h-screen">
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-primary-900/50">
        <img
          src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="Women in sports"
          className="w-full h-full object-cover opacity-30 animate-fade-in"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full py-20 md:py-0">
        <div className="flex flex-col justify-center min-h-screen pt-16">
          <h1 className="animate-fade-in-up text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-6">
            Training Africa's Next
            <span className="text-gold-500 block mt-2">Sports Leaders</span>
          </h1>
          <p className="animate-fade-in-up delay-100 text-lg sm:text-xl text-gray-200 max-w-2xl mb-8">
            Join our mission to train  women in sports leadership . 
            Together, we're fostering integrity, building networks, and transforming the 
            African sports industry.
          </p>
          <div className="animate-fade-in-up delay-200 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button className="group bg-gold-500 text-white px-6 sm:px-8 py-4 rounded-md hover:bg-gold-600 transition-all duration-300 flex items-center justify-center">
              Join Our Program
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border-2 border-white text-white px-6 sm:px-8 py-4 rounded-md hover:bg-white/10 transition-all duration-300">
              Become a Mentor
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}