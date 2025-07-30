
const Hero = () => {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-saffron-200 rounded-full opacity-20 animate-pulse-gentle"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-spiritual-blue rounded-full opacity-20 animate-pulse-gentle" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-saffron-100 to-blue-100 rounded-full opacity-10"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-800 animate-fade-in">
          <span className="bg-gradient-to-r from-saffron-600 to-saffron-500 bg-clip-text text-transparent">
            JugaadCore
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-700 mb-8 animate-fade-in font-medium" style={{ animationDelay: '0.2s' }}>
          Your Spiritual Tools Rack for Kumbh Mela, Festivals & Ritual Dates
        </p>
        
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto animate-fade-in leading-relaxed" style={{ animationDelay: '0.4s' }}>
          Discover auspicious dates, track sacred events, and stay connected with Hindu traditions through our comprehensive spiritual dashboard.
        </p>

        {/* Sacred symbols decoration */}
        <div className="flex justify-center items-center space-x-8 text-saffron-400 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="text-3xl">🕉️</div>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-saffron-300 to-transparent"></div>
          <div className="text-2xl">🪔</div>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-saffron-300 to-transparent"></div>
          <div className="text-3xl">🕉️</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
