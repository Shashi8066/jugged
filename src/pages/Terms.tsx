
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <>
      <Helmet>
        <title>Terms and Conditions – jugaadcore Spiritual Tools Usage Agreement</title>
        <meta name="description" content="Read jugaadcore's terms and conditions for using Hindu spiritual calendar tools, Kumbh Mela information, and festival date calculators responsibly." />
        <meta name="keywords" content="jugaadcore terms conditions, spiritual tools terms, Hindu calendar usage agreement, Kumbh Mela terms, religious tools disclaimer" />
        <meta name="author" content="jugaadcore Team" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href="https://jugaadcore.com/terms" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Terms and Conditions – jugaadcore Spiritual Tools Usage Agreement" />
        <meta property="og:description" content="Read jugaadcore's terms and conditions for using Hindu spiritual calendar tools, Kumbh Mela information, and festival date calculators responsibly." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://jugaadcore.com/terms" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Terms and Conditions – jugaadcore Spiritual Tools Usage Agreement" />
        <meta name="twitter:description" content="Read jugaadcore's terms and conditions for using Hindu spiritual calendar tools responsibly." />
      </Helmet>

      <div className="min-h-screen spiritual-gradient">
        <Navigation />
        
        <div className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">
                Terms and Conditions
              </h1>
              <p className="text-lg text-gray-600">
                Usage Agreement for jugaadcore Spiritual Tools
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="prose max-w-none">
                <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
                <p className="mb-4">
                  By accessing and using jugaadcore's spiritual tools and services, you accept and agree to be bound by the terms and provision of this agreement.
                </p>

                <h2 className="text-2xl font-semibold mb-4">2. Use of Services</h2>
                <p className="mb-4">
                  Our spiritual tools including Kumbh Mela countdown, festival calendars, and ritual timing calculators are provided for informational and spiritual guidance purposes only.
                </p>

                <h2 className="text-2xl font-semibold mb-4">3. Accuracy Disclaimer</h2>
                <p className="mb-4">
                  While we strive to provide accurate dates and timings, we recommend consulting with local priests or spiritual authorities for important religious ceremonies.
                </p>

                <h2 className="text-2xl font-semibold mb-4">4. Intellectual Property</h2>
                <p className="mb-4">
                  All content on jugaadcore is protected by copyright and other intellectual property laws. Users may not reproduce or distribute content without permission.
                </p>

                <h2 className="text-2xl font-semibold mb-4">5. Limitation of Liability</h2>
                <p className="mb-4">
                  jugaadcore shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use of our services.
                </p>

                <h2 className="text-2xl font-semibold mb-4">6. Contact Information</h2>
                <p className="mb-4">
                  For questions about these terms, please <Link to="/contact" className="text-saffron-600 hover:text-saffron-800">contact us</Link>.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <Footer />
      </div>
    </>
  );
};

export default Terms;
