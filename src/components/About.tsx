export default function About() {
  return (
    <section id="about" className="py-12 sm:py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">About SheDrives</h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto px-4 sm:px-0">
            Transforming the landscape of sports leadership by empowering women to break barriers
            and achieve their full potential in the sports industry.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 animate-fade-in-up delay-100 order-2 lg:order-1 px-4 sm:px-0">
            <h3 className="text-xl sm:text-2xl font-semibold text-gold-500">Our Mission</h3>
            <p className="text-sm sm:text-base text-gray-300">
              We're dedicated to creating pathways for women in sports leadership through
              comprehensive training, mentorship, and networking opportunities. Our programs
              are designed to bridge the gender gap in sports management and create lasting
              change in the industry.
            </p>
            
            <h3 className="text-xl sm:text-2xl font-semibold text-gold-500 pt-4">Our Vision</h3>
            <p className="text-sm sm:text-base text-gray-300">
              To build a future where women are equally represented in sports leadership
              positions across all levels, from community sports to professional leagues,
              creating a more inclusive and dynamic sports industry.
            </p>
          </div>

          <div className="relative group animate-fade-in-up delay-200 order-1 lg:order-2 px-4 sm:px-0">
            <div className="absolute inset-0 bg-gold-500 rounded-lg transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1544928147-79a2dbc1f389?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Women in sports leadership"
                className="rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/50 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 