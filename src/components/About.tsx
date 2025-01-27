export default function About() {
  return (
    <section id="about" className="py-12 sm:py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">About SheDrives</h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto px-4 sm:px-0">
            A groundbreaking program co-created by Moving The Goalposts (MTG) and Sports Connect Africa (SCA), 
            rewriting the sports code for women's leadership in Africa.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 animate-fade-in-up delay-100 order-2 lg:order-1 px-4 sm:px-0">
            <h3 className="text-xl sm:text-2xl font-semibold text-gold-500">Our Mission</h3>
            <p className="text-sm sm:text-base text-gray-300">
              To empower aspiring female leaders in African sports by providing them with 
              the necessary skills, knowledge, and network to thrive in the industry. We foster 
              integrity, inclusivity, and a culture of change, equipping participants to become 
              architects of a more equitable sporting landscape in Africa.
            </p>
            
            <h3 className="text-xl sm:text-2xl font-semibold text-gold-500 pt-4">The Challenge</h3>
            <p className="text-sm sm:text-base text-gray-300">
              While women's contributions as athletes are undeniable, leadership positions within 
              sports organizations remain largely male-dominated. This lack of diversity hinders 
              progress towards gender equality and a thriving sports environment. Through our program, 
              we're working to change this narrative.
            </p>
          </div>

          <div className="relative group animate-fade-in-up delay-200 order-1 lg:order-2 px-4 sm:px-0">
            <div className="absolute inset-0 bg-gold-500 rounded-lg transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
            <div className="relative">
              <img
                src="/images/AML07117[1](1)-min.jpg"
                alt="Confident African woman leader"
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