import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Calendar, Heart, Users, Target } from "lucide-react";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About JugaadCore – Our Mission to Preserve Hindu Spiritual Traditions</title>
        <meta name="description" content="Learn about JugaadCore's mission to provide accurate spiritual tools for Hindu festivals, Kumbh Mela dates, and sacred calendar information to devotees worldwide." />
        <meta name="keywords" content="About JugaadCore, Hindu spiritual tools, digital spiritual platform, Kumbh Mela information, Hindu traditions, spiritual calendar mission" />
        <meta name="author" content="JugaadCore Team" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href="https://jugaadcore.com/about" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="About JugaadCore – Our Mission to Preserve Hindu Spiritual Traditions" />
        <meta property="og:description" content="Learn about JugaadCore's mission to provide accurate spiritual tools for Hindu festivals and sacred calendar information." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://jugaadcore.com/about" />
        <meta property="og:image" content="https://jugaadcore.com/og-about.jpg" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About JugaadCore – Hindu Spiritual Tools Platform" />
        <meta name="twitter:description" content="Learn about our mission to preserve Hindu spiritual traditions through digital tools." />
        <meta name="twitter:image" content="https://jugaadcore.com/og-about.jpg" />
      </Helmet>

      <div className="min-h-screen spiritual-gradient">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            About <span className="bg-gradient-to-r from-saffron-600 to-saffron-500 bg-clip-text text-transparent">JugaadCore</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Dedicated to preserving and sharing the sacred traditions of Hindu culture through accessible digital tools.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 bg-white bg-opacity-60">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Mission</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                JugaadCore serves as a digital bridge connecting modern devotees with ancient spiritual wisdom. 
                We provide accurate, accessible tools for tracking sacred dates, festival timings, and 
                auspicious moments that have guided Hindu traditions for millennia.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Our platform ensures that the sanctity of spiritual observances remains intact while 
                making them easily accessible to devotees worldwide, regardless of their location or 
                technological proficiency.
              </p>
            </div>
            <div className="spiritual-card rounded-xl p-8">
              <div className="text-center">
                <div className="w-16 h-16 saffron-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Our Purpose</h3>
                <p className="text-gray-600">
                  To make spiritual knowledge accessible, accurate, and meaningful for every devotee's journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">What We Offer</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <div className="w-16 h-16 saffron-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Kumbh Mela Tracking</h3>
              <p className="text-gray-600 text-sm">
                Complete countdown and historical information for all Kumbh Mela events across sacred locations.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 saffron-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">🌙</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Lunar Calendar</h3>
              <p className="text-gray-600 text-sm">
                Accurate Amavasya and Purnima dates for spiritual observances and ritual planning.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 saffron-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">🛁</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Snan Timings</h3>
              <p className="text-gray-600 text-sm">
                Sacred bathing dates and auspicious timings for maximum spiritual benefit.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 saffron-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">🎉</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Festival Guide</h3>
              <p className="text-gray-600 text-sm">
                Comprehensive festival calendar with dates, significance, and traditional practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 bg-white bg-opacity-60">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Devotion</h3>
              <p className="text-gray-600">
                Every tool is created with deep respect for Hindu traditions and spiritual significance.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Accuracy</h3>
              <p className="text-gray-600">
                We ensure all dates and timings are calculated with precision and verified through authentic sources.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Accessibility</h3>
              <p className="text-gray-600">
                Making spiritual wisdom accessible to devotees across the globe, regardless of location or device.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Our Commitment</h2>
          <div className="spiritual-card rounded-xl p-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              JugaadCore is maintained by a team of devoted practitioners and technology enthusiasts 
              who understand the importance of preserving and sharing our sacred traditions. We are 
              committed to providing accurate, reliable, and spiritually meaningful tools that honor 
              the depth and beauty of Hindu culture.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our work is guided by the principle of seva (selfless service) and the belief that 
              technology should serve to strengthen, not replace, our connection to the divine and 
              to each other.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
    </>
  );
};

export default About;
