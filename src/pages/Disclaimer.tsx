
import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { AlertTriangle, Info, Calendar, BookOpen } from "lucide-react";

const Disclaimer = () => {
  return (
    <>
      <Helmet>
        <title>Disclaimer – JugaadCore Spiritual Calendar & Festival Date Accuracy</title>
        <meta name="description" content="Important disclaimer about JugaadCore's spiritual tools accuracy. Verify dates with local authorities for religious ceremonies and ritual planning." />
        <meta name="keywords" content="JugaadCore disclaimer, spiritual calendar accuracy, Hindu festival date disclaimer, Kumbh Mela date accuracy, religious tool limitations" />
        <meta name="author" content="JugaadCore Team" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href="https://jugaadcore.com/disclaimer" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Disclaimer – JugaadCore Spiritual Calendar & Festival Date Accuracy" />
        <meta property="og:description" content="Important disclaimer about JugaadCore's spiritual tools accuracy and usage limitations." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://jugaadcore.com/disclaimer" />
        <meta property="og:image" content="https://jugaadcore.com/og-disclaimer.jpg" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Disclaimer – JugaadCore Calendar Accuracy Notice" />
        <meta name="twitter:description" content="Important information about spiritual calendar accuracy and usage limitations." />
        <meta name="twitter:image" content="https://jugaadcore.com/og-disclaimer.jpg" />
      </Helmet>

      <div className="min-h-screen spiritual-gradient">
        <Navigation />
        
        {/* Hero Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              <span className="bg-gradient-to-r from-saffron-600 to-saffron-500 bg-clip-text text-transparent">Disclaimer</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Important information about the use of our spiritual tools and calendar services.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="spiritual-card rounded-xl p-8 space-y-8">
              
              {/* Important Notice */}
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
                <div className="flex items-start">
                  <AlertTriangle className="w-6 h-6 text-yellow-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-yellow-800 mb-2">Important Notice</h3>
                    <p className="text-yellow-700">
                      The information provided on JugaadCore is for general reference and educational purposes only. 
                      While we strive for accuracy, dates and timings should be verified with local religious authorities 
                      or official sources for important spiritual observances.
                    </p>
                  </div>
                </div>
              </div>

              {/* General Information */}
              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-800 flex items-center">
                  <Info className="w-6 h-6 mr-2 text-saffron-600" />
                  General Information
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  JugaadCore provides spiritual tools and calendar information based on traditional Hindu calculations 
                  and widely accepted sources. However, this website and its content are provided "as is" without any 
                  representations or warranties, express or implied. We make no representations or warranties in relation 
                  to the accuracy, completeness, or suitability of the information provided.
                </p>
              </div>

              {/* Calendar Accuracy */}
              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-800 flex items-center">
                  <Calendar className="w-6 h-6 mr-2 text-saffron-600" />
                  Calendar and Date Accuracy
                </h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-800">Source of Information</h3>
                    <p className="text-gray-700">
                      Our calendar dates are calculated using traditional Hindu calendar methods and cross-referenced 
                      with multiple authentic sources. However, regional variations may exist, and local customs may 
                      follow different timing conventions.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-800">Regional Variations</h3>
                    <p className="text-gray-700">
                      Festival dates and auspicious timings may vary by region, local traditions, and different 
                      calendar systems (Amanta vs. Purnimanta). We recommend consulting local religious authorities 
                      for region-specific dates and customs.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-800">Official Sources</h3>
                    <p className="text-gray-700">
                      For official government dates, temple timings, and formal religious observances, please consult 
                      official government notifications, temple authorities, or established religious institutions in your area.
                    </p>
                  </div>
                </div>
              </div>

              {/* Spiritual Guidance */}
              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-800 flex items-center">
                  <BookOpen className="w-6 h-6 mr-2 text-saffron-600" />
                  Spiritual and Religious Guidance
                </h2>
                
                <div className="space-y-4">
                  <p className="text-gray-700">
                    JugaadCore provides informational content about Hindu festivals, rituals, and traditions for 
                    educational purposes. This information should not be considered as:
                  </p>
                  
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Professional religious or spiritual advice</li>
                    <li>Substitute for guidance from qualified religious teachers or gurus</li>
                    <li>Official interpretation of religious texts or traditions</li>
                    <li>Comprehensive guide to religious practices</li>
                  </ul>

                  <p className="text-gray-700">
                    For detailed spiritual guidance, interpretation of religious practices, or specific ritual 
                    instructions, please consult qualified religious teachers, local temples, or established 
                    spiritual institutions.
                  </p>
                </div>
              </div>

              {/* Limitation of Liability */}
              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Limitation of Liability</h2>
                
                <div className="space-y-4">
                  <p className="text-gray-700">
                    JugaadCore and its creators will not be liable for any loss, damage, or inconvenience arising 
                    from the use of information provided on this website, including but not limited to:
                  </p>
                  
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Inaccurate date calculations or missed observances</li>
                    <li>Regional variations in festival dates or customs</li>
                    <li>Changes in official dates or timings</li>
                    <li>Technical issues or website unavailability</li>
                    <li>Misinterpretation of religious or cultural information</li>
                  </ul>
                </div>
              </div>

              {/* Third-Party Content */}
              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Third-Party Content and Links</h2>
                <p className="text-gray-700 leading-relaxed">
                  Our website may contain links to third-party websites or reference third-party content. We are not 
                  responsible for the accuracy, content, or practices of these external sites. The inclusion of any 
                  link does not imply endorsement by JugaadCore.
                </p>
              </div>

              {/* Technical Limitations */}
              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Technical Limitations</h2>
                
                <div className="space-y-4">
                  <p className="text-gray-700">
                    While we strive to maintain accurate and up-to-date information, please be aware of these 
                    technical limitations:
                  </p>
                  
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Calculations are based on computational algorithms and may have inherent limitations</li>
                    <li>Time zone differences may affect date accuracy for your specific location</li>
                    <li>Website content may not always reflect the most recent updates or corrections</li>
                    <li>Server downtime or technical issues may temporarily affect access to information</li>
                  </ul>
                </div>
              </div>

              {/* User Responsibility */}
              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-800">User Responsibility</h2>
                <p className="text-gray-700 leading-relaxed">
                  By using JugaadCore, you acknowledge that you are responsible for verifying the accuracy of any 
                  information before making important decisions based on it. We encourage users to cross-reference 
                  our information with multiple sources and consult local religious authorities when needed.
                </p>
              </div>

              {/* Updates and Changes */}
              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Updates and Changes</h2>
                <p className="text-gray-700 leading-relaxed">
                  We reserve the right to update, modify, or discontinue any part of our service without prior notice. 
                  This disclaimer may also be updated periodically to reflect changes in our practices or legal requirements.
                </p>
              </div>

              {/* Contact for Corrections */}
              <div className="bg-gradient-to-r from-blue-50 to-saffron-50 rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Report Inaccuracies</h2>
                <p className="text-gray-700 mb-4">
                  If you notice any inaccuracies in our calendar dates or content, please help us improve by 
                  reporting them to us:
                </p>
                <ul className="text-gray-700 space-y-1">
                  <li>Email: corrections@jugaadcore.com</li>
                  <li>Contact form: <a href="/contact" className="text-saffron-600 hover:text-saffron-700">Contact Us</a></li>
                </ul>
                <p className="text-gray-600 text-sm mt-4">
                  We appreciate community feedback to help maintain the accuracy and usefulness of our spiritual tools.
                </p>
              </div>

              {/* Acceptance */}
              <div className="border-t border-gray-200 pt-6">
                <p className="text-gray-700 leading-relaxed">
                  By using JugaadCore and its services, you acknowledge that you have read, understood, and agree 
                  to be bound by this disclaimer. If you do not agree with any part of this disclaimer, please 
                  discontinue use of our website.
                </p>
                <p className="text-gray-600 text-sm mt-4">
                  Last updated: December 17, 2024
                </p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Disclaimer;
