
import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AmavasyanPurnima from "@/components/tools/AmavasyanPurnima";

const AmavasyanPurnimaPage = () => {
  return (
    <>
      <Helmet>
        <title>Amavasya & Purnima Dates 2025 – New Moon Full Moon Calendar | jugaadcore</title>
        <meta name="description" content="Find accurate Amavasya (new moon) and Purnima (full moon) dates for 2025. Hindu lunar calendar with spiritual significance and ritual timings for devotees." />
        <meta name="keywords" content="Amavasya dates 2025, Purnima dates 2025, new moon full moon calendar, Hindu lunar calendar, Mauni Amavasya, Kartik Purnima, spiritual dates" />
        <meta name="author" content="jugaadcore Team" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href="https://jugaadcore.com/amavasya-purnima" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Amavasya & Purnima Dates 2025 – New Moon Full Moon Calendar | jugaadcore" />
        <meta property="og:description" content="Find accurate Amavasya (new moon) and Purnima (full moon) dates for 2025. Hindu lunar calendar with spiritual significance." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://jugaadcore.com/amavasya-purnima" />
        <meta property="og:image" content="https://jugaadcore.com/og-lunar-calendar.jpg" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Amavasya & Purnima Dates 2025 – Hindu Lunar Calendar" />
        <meta name="twitter:description" content="Find accurate Amavasya and Purnima dates for 2025 with spiritual significance and ritual timings." />
        <meta name="twitter:image" content="https://jugaadcore.com/og-lunar-calendar.jpg" />
      </Helmet>

      <div className="min-h-screen spiritual-gradient">
        <Navigation />
      
        <div className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">
                Amavasya & Purnima Dates
              </h1>
              <p className="text-lg text-gray-600">
                Find new moon and full moon dates for spiritual observances
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <AmavasyanPurnima />
            </div>
          </div>
        </div>
        
        <Footer />
      </div>
    </>
  );
};

export default AmavasyanPurnimaPage;
