import { Link } from "react-router-dom";
import { ArrowLeft, ChevronDown } from "lucide-react";
import { Helmet } from "react-helmet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQs = () => {
  const faqs = [
    {
      id: "kumbh-mela",
      question: "What is Kumbh Mela and how often does it occur?",
      answer: "Kumbh Mela is one of the world's largest peaceful religious gatherings, held at four sacred locations in India: Prayagraj (Allahabad), Haridwar, Nashik, and Ujjain. It occurs every 12 years at each location, rotating among these four cities. The Maha Kumbh Mela, held only in Prayagraj every 144 years, is considered the most sacred. During these festivals, millions of pilgrims gather to take holy baths in sacred rivers for spiritual purification and liberation from sins."
    },
    {
      id: "amavasya-purnima",
      question: "What is the difference between Amavasya and Purnima?",
      answer: "Amavasya (new moon) and Purnima (full moon) are two significant lunar phases in Hindu tradition. Amavasya occurs when the moon is completely dark and is considered ideal for ancestor worship (Pitru Paksha), fasting, and introspective spiritual practices. Purnima happens when the moon is completely illuminated and is considered highly auspicious for prayers, charity, meditation, and spiritual ceremonies. Many Hindu festivals are celebrated on these lunar dates, making them important for planning religious observances."
    },
    {
      id: "snan-muhurat",
      question: "How are Snan Muhurat dates determined?",
      answer: "Snan Muhurat dates are determined based on ancient Vedic astronomy and Hindu calendar calculations. These sacred bathing times are calculated considering planetary positions, lunar phases, solar transitions, and traditional astronomical observations. The most auspicious Snan dates include Makar Sankranti, Mauni Amavasya, Vasant Panchami, and other significant festivals. Our Snan Muhurat tool provides these dates along with optimal timing windows when spiritual benefits are believed to be maximized."
    },
    {
      id: "festival-dates",
      question: "Why do Hindu festivals fall on different dates each year?",
      answer: "Hindu festivals follow the lunar calendar (Panchang) rather than the solar Gregorian calendar used internationally. The lunar year is approximately 11 days shorter than the solar year, causing festival dates to shift annually when viewed through the Gregorian calendar. Additionally, Hindu festivals are determined by specific lunar phases, planetary positions, and astronomical calculations that vary each year. This is why festivals like Diwali, Holi, and Janmashtami appear on different dates each year in the modern calendar."
    },
    {
      id: "planning-rituals",
      question: "Can I use jugaadcore tools for planning rituals and temple visits?",
      answer: "Absolutely! jugaadcore is designed to help you plan spiritual activities effectively. Our tools provide accurate dates for festivals, Amavasya/Purnima, and Snan Muhurat timings that can help you schedule temple visits, religious ceremonies, and personal spiritual practices. You can use our Kumbh Mela countdown to plan pilgrimage trips and our festival calendar to prepare for upcoming celebrations. However, for specific ritual timings and regional variations, we recommend consulting with local priests or spiritual advisors."
    },
    {
      id: "accuracy-reliability",
      question: "Is the information on JugaadCore accurate and reliable?",
      answer: "JugaadCore provides information based on traditional Hindu calendar calculations and widely accepted astronomical data. While we strive for accuracy, dates and timings can vary slightly based on regional practices, local traditions, and different Panchang calculations. We recommend using our information as a general reference and consulting with local religious authorities, priests, or traditional calendars for precise ritual timings and region-specific observances. Always verify important dates through multiple reliable sources."
    },
    {
      id: "registration-required",
      question: "Do I need to sign up or register to use JugaadCore?",
      answer: "No registration is required to use JugaadCore! All our spiritual tools including the Kumbh Mela countdown, Amavasya/Purnima date finder, Snan Muhurat calendar, and Hindu festival calendar are completely free and accessible without creating an account. Simply visit our website and start exploring the tools immediately. We believe spiritual knowledge should be freely accessible to everyone seeking to connect with Hindu traditions and plan their religious observances."
    }
  ];

  return (
    <>
      <Helmet>
        <title>FAQs – Common Questions About Hindu Festivals & Spiritual Calendar | JugaadCore</title>
        <meta name="description" content="Get answers to frequently asked questions about Kumbh Mela, Amavasya Purnima dates, Hindu festivals, and spiritual calendar tools on JugaadCore." />
        <meta name="keywords" content="JugaadCore FAQ, Hindu festival questions, Kumbh Mela FAQ, Amavasya Purnima questions, spiritual calendar help, religious date queries" />
        <meta name="author" content="JugaadCore Team" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href="https://jugaadcore.com/faqs" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="FAQs – Common Questions About Hindu Festivals & Spiritual Calendar | JugaadCore" />
        <meta property="og:description" content="Get answers to frequently asked questions about Hindu festivals, Kumbh Mela, and spiritual calendar tools." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://jugaadcore.com/faqs" />
        <meta property="og:image" content="https://jugaadcore.com/og-faqs.jpg" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="FAQs – Hindu Festivals & Spiritual Calendar Questions" />
        <meta name="twitter:description" content="Common questions about Kumbh Mela, Hindu festivals, and spiritual calendar tools answered." />
        <meta name="twitter:image" content="https://jugaadcore.com/og-faqs.jpg" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-blue-50">
        {/* SEO Meta Tags */}
        <div className="max-w-4xl mx-auto px-4 py-8">
          {/* Header */}
          <div className="text-center mb-8">
            <Link 
              to="/" 
              className="inline-flex items-center text-saffron-600 hover:text-saffron-700 mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about Hindu spiritual practices, festivals, and ritual timings
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={faq.id} value={faq.id} className="border-b border-gray-200 last:border-b-0">
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <h3 className="text-lg font-semibold text-gray-800 pr-4">
                      {faq.question}
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                    
                    {/* Add internal links for specific FAQs */}
                    {faq.id === "kumbh-mela" && (
                      <div className="mt-4 p-3 bg-saffron-50 rounded-lg">
                        <p className="text-sm text-saffron-700">
                          💡 <strong>Tip:</strong> Use our <Link to="/" className="underline hover:text-saffron-800">Kumbh Mela Countdown Tool</Link> to track upcoming Kumbh Mela dates and locations.
                        </p>
                      </div>
                    )}
                    
                    {faq.id === "amavasya-purnima" && (
                      <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                        <p className="text-sm text-blue-700">
                          🌙 <strong>Explore:</strong> Check our <Link to="/" className="underline hover:text-blue-800">Amavasya & Purnima Date Finder</Link> for monthly lunar calendar dates.
                        </p>
                      </div>
                    )}
                    
                    {faq.id === "snan-muhurat" && (
                      <div className="mt-4 p-3 bg-green-50 rounded-lg">
                        <p className="text-sm text-green-700">
                          🛁 <strong>Plan Ahead:</strong> Visit our <Link to="/" className="underline hover:text-green-800">Snan Muhurat Calendar</Link> for sacred bathing dates and timings.
                        </p>
                      </div>
                    )}
                    
                    {faq.id === "festival-dates" && (
                      <div className="mt-4 p-3 bg-purple-50 rounded-lg">
                        <p className="text-sm text-purple-700">
                          🎉 <strong>Stay Updated:</strong> Browse our <Link to="/" className="underline hover:text-purple-800">Hindu Festival Calendar</Link> for comprehensive festival information.
                        </p>
                      </div>
                    )}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Additional Information */}
          <div className="bg-gradient-to-r from-saffron-50 to-blue-50 rounded-xl p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Need More Information?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-800 mb-2">For Technical Support:</h4>
                <p className="text-gray-600 text-sm mb-3">
                  If you're experiencing technical issues with our tools or website, please visit our contact page.
                </p>
                <Link 
                  to="/contact" 
                  className="inline-flex items-center text-saffron-600 hover:text-saffron-700 text-sm font-medium"
                >
                  Contact Support →
                </Link>
              </div>
                <div>
                <h4 className="font-medium text-gray-800 mb-2">About JugaadCore:</h4>
                <p className="text-gray-600 text-sm mb-3">
                  Learn more about our mission to provide accessible spiritual tools and resources.
                </p>
                <Link 
                  to="/about" 
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium"
                >
                  About Us →
                </Link>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Ready to Explore Our Spiritual Tools?</h3>
              <p className="text-gray-600 mb-6">
                Discover Kumbh Mela dates, festival calendars, and sacred timings with our comprehensive spiritual dashboard.
              </p>
              <Link 
                to="/" 
                className="inline-flex items-center bg-gradient-to-r from-saffron-500 to-saffron-600 text-white px-8 py-3 rounded-lg hover:from-saffron-600 hover:to-saffron-700 transition-all duration-200 font-medium shadow-md hover:shadow-lg"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQs;
