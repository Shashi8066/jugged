
import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import KumbhMelaCounter from "@/components/tools/KumbhMelaCounter";

const KumbhMela = () => {
  return (
    <>
      <Helmet>
        <title>Kumbh Mela Countdown 2025 – Prayagraj Maha Kumbh Dates | jugaadcore</title>
        <meta name="description" content="Live countdown to Kumbh Mela 2025 in Prayagraj. Track upcoming Kumbh Mela dates, locations, and historical timeline. Complete guide to the world's largest spiritual gathering." />
        <meta name="keywords" content="Kumbh Mela 2025, Prayagraj Kumbh, Maha Kumbh Mela, Ardh Kumbh, Kumbh dates, spiritual gathering, Triveni Sangam, Haridwar Kumbh" />
        <meta name="author" content="jugaadcore Team" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href="https://jugaadcore.com/kumbh-mela" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Kumbh Mela Countdown 2025 – Prayagraj Maha Kumbh Dates | jugaadcore" />
        <meta property="og:description" content="Live countdown to Kumbh Mela 2025 in Prayagraj. Track upcoming Kumbh Mela dates, locations, and historical timeline." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://jugaadcore.com/kumbh-mela" />
        <meta property="og:image" content="https://jugaadcore.com/og-kumbh-mela.jpg" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kumbh Mela Countdown 2025 – Prayagraj Maha Kumbh Dates" />
        <meta name="twitter:description" content="Live countdown to Kumbh Mela 2025 in Prayagraj. Track upcoming Kumbh Mela dates and locations." />
        <meta name="twitter:image" content="https://jugaadcore.com/og-kumbh-mela.jpg" />
      </Helmet>

      <div className="min-h-screen spiritual-gradient">
        <Navigation />
      
      <div className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Kumbh Mela Countdown
            </h1>
            <p className="text-lg text-gray-600">
              Track upcoming Kumbh Melas with countdown timer and historical timeline
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6">
            <KumbhMelaCounter />
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
    </>
  );
};

export default KumbhMela;
