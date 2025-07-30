
import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SnanMuhurat from "@/components/tools/SnanMuhurat";

const SnanMuhuratPage = () => {
  return (
    <>
      <Helmet>
        <title>Snan Muhurat 2025 – Shahi Snan Dates & Sacred Bath Timings | jugaadcore</title>
        <meta name="description" content="Get accurate Snan Muhurat dates for 2025 including Shahi Snan, Magh Snan timings. Sacred bathing dates for Kumbh Mela and spiritual purification rituals." />
        <meta name="keywords" content="Snan Muhurat 2025, Shahi Snan dates, Magh Snan timings, sacred bath dates, Kumbh Snan, spiritual bathing, holy dip timings, Triveni Sangam" />
        <meta name="author" content="jugaadcore Team" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href="https://jugaadcore.com/snan-muhurat" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Snan Muhurat 2025 – Shahi Snan Dates & Sacred Bath Timings | jugaadcore" />
        <meta property="og:description" content="Get accurate Snan Muhurat dates for 2025 including Shahi Snan, Magh Snan timings for spiritual purification." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://jugaadcore.com/snan-muhurat" />
        <meta property="og:image" content="https://jugaadcore.com/og-snan-muhurat.jpg" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Snan Muhurat 2025 – Shahi Snan Dates & Sacred Bath Timings" />
        <meta name="twitter:description" content="Get accurate Snan Muhurat dates for 2025 including Shahi Snan and Magh Snan timings." />
        <meta name="twitter:image" content="https://jugaadcore.com/og-snan-muhurat.jpg" />
      </Helmet>

      <div className="min-h-screen spiritual-gradient">
        <Navigation />
        
        <div className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">
                Snan Muhurat Calendar
              </h1>
              <p className="text-lg text-gray-600">
                Important Snan dates including Shahi Snan and Magh Snan timings
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <SnanMuhurat />
            </div>
          </div>
        </div>
        
        <Footer />
      </div>
    </>
  );
};

export default SnanMuhuratPage;
