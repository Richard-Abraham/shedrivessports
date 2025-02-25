import { ArrowRight } from 'lucide-react';
import PageSEO from './PageSEO';

export default function Hero() {
  return (
    <section id="home" className="relative bg-white overflow-hidden">
      <PageSEO 
        title="Home" 
        description="She Drives Sports - Training Africa's Next Sports Leaders. Join our mission to empower women in sports leadership across Africa."
        path="/"
        image="/images/hero-image.jpg"
      />
      <div className="relative bg-gradient-to-br from-primary-900 via-primary-700 to-primary-900 min-h-screen overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600/20 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold-500/20 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-primary-900/60">
          <img
            src="/images/AML06892-min.jpg"
            alt="Women in sports"
            className="w-full h-full object-cover opacity-30 animate-fade-in"
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full py-20 md:py-0">
          <div className="flex flex-col justify-center min-h-screen pt-16">
            <div className="max-w-3xl">
              <h1 className="animate-fade-in-up text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Training Africa's Next
                <span className="text-gold-500 block mt-2 relative">
                  Sports Leaders
                  <svg className="absolute -bottom-2 left-0 w-full h-2 text-gold-500 opacity-70" viewBox="0 0 200 8" preserveAspectRatio="none">
                    <path d="M0,5 C50,0 150,0 200,5" stroke="currentColor" strokeWidth="3" fill="none" />
                  </svg>
                </span>
              </h1>
              <p className="animate-fade-in-up delay-100 text-lg sm:text-xl text-gray-200 max-w-2xl mb-8 leading-relaxed">
                Join our mission to train women in sports leadership. 
                Together, we're fostering integrity, building networks, and transforming the 
                African sports industry.
              </p>
              <div className="animate-fade-in-up delay-200 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <button className="group bg-gold-500 text-white px-6 sm:px-8 py-4 rounded-md hover:bg-gold-600 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:translate-y-[-2px]">
                  Join Our Program
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border-2 border-white text-white px-6 sm:px-8 py-4 rounded-md hover:bg-white/20 transition-all duration-300 backdrop-blur-sm">
                  Become a Mentor
                </button>
              </div>
            </div>
            
            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
              <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center pt-2">
                <div className="w-1 h-3 bg-white/80 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}