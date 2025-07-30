

import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FestivalCalendar from "@/components/tools/FestivalCalendar";

const FestivalCalendarPage = () => {
  return (
    <>
      <Helmet>
        <title>Hindu Festival Calendar 2025 – Complete Festival Dates & Significance | jugaadcore</title>
        <meta name="description" content="Complete Hindu festival calendar for 2025 with dates, significance, and rituals. Track Diwali, Holi, Navratri, Janmashtami and all major Hindu festivals." />
        <meta name="keywords" content="Hindu festival calendar 2025, festival dates, Diwali date, Holi date, Navratri dates, Janmashtami, Hindu festivals, religious calendar, spiritual festivals" />
        <meta name="author" content="jugaadcore Team" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href="https://jugaadcore.com/festival-calendar" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Hindu Festival Calendar 2025 – Complete Festival Dates & Significance | jugaadcore" />
        <meta property="og:description" content="Complete Hindu festival calendar for 2025 with dates, significance, and rituals for all major festivals." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://jugaadcore.com/festival-calendar" />
        <meta property="og:image" content="https://jugaadcore.com/og-festival-calendar.jpg" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hindu Festival Calendar 2025 – Complete Festival Dates" />
        <meta name="twitter:description" content="Complete Hindu festival calendar for 2025 with dates, significance, and rituals." />
        <meta name="twitter:image" content="https://jugaadcore.com/og-festival-calendar.jpg" />
      </Helmet>

      <div className="min-h-screen spiritual-gradient">
        <Navigation />
        
        <div className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">
                Hindu Festival Calendar
              </h1>
              <p className="text-lg text-gray-600">
                Comprehensive calendar of major Hindu festivals with descriptions
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <FestivalCalendar />
            </div>
          </div>
        </div>
        
        <Footer />
      </div>
    </>
  );
};

export default FestivalCalendarPage;
