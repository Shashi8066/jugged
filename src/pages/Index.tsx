
import { Calendar, Clock, Home, Info, Contact } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ToolCard from "@/components/ToolCard";
import Footer from "@/components/Footer";

const Index = () => {
  const tools = [
    {
      id: "kumbh",
      title: "Kumbh Mela Countdown",
      description: "Track upcoming Kumbh Melas with countdown timer and historical timeline",
      icon: Clock,
      href: "/kumbh-mela"
    },
    {
      id: "amavasya-purnima", 
      title: "Amavasya & Purnima Dates",
      description: "Find new moon and full moon dates for spiritual observances",
      icon: Calendar,
      href: "/amavasya-purnima"
    },
    {
      id: "snan",
      title: "Snan Muhurat Calendar",
      description: "Important Snan dates including Shahi Snan and Magh Snan timings",
      icon: Calendar,
      href: "/snan-muhurat"
    },
    {
      id: "festivals",
      title: "Hindu Festival Calendar",
      description: "Comprehensive calendar of major Hindu festivals with descriptions",
      icon: Calendar,
      href: "/festival-calendar"
    }
  ];

  return (
    <>
      <Helmet>
        <title>jugaadcore – Kumbh Mela, Hindu Festivals & Spiritual Calendar Tools</title>
        <meta name="description" content="Track Kumbh Mela dates, Amavasya & Purnima calendar, Hindu festivals, and Snan Muhurat timings. Free spiritual tools for devotees worldwide." />
        <meta name="keywords" content="Kumbh Mela countdown, Hindu festivals, Amavasya Purnima dates, Snan Muhurat, spiritual calendar, Hindu traditions, Prayag, religious dates" />
        <meta name="author" content="jugaadcore Team" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href="https://jugaadcore.com/" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="jugaadcore – Kumbh Mela, Hindu Festivals & Spiritual Calendar Tools" />
        <meta property="og:description" content="Track Kumbh Mela dates, Amavasya & Purnima calendar, Hindu festivals, and Snan Muhurat timings. Free spiritual tools for devotees worldwide." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://jugaadcore.com/" />
        <meta property="og:image" content="https://jugaadcore.com/og-image.jpg" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@jugaadcore" />
        <meta name="twitter:title" content="jugaadcore – Kumbh Mela, Hindu Festivals & Spiritual Calendar Tools" />
        <meta name="twitter:description" content="Track Kumbh Mela dates, Amavasya & Purnima calendar, Hindu festivals, and Snan Muhurat timings. Free spiritual tools for devotees worldwide." />
        <meta name="twitter:image" content="https://jugaadcore.com/og-image.jpg" />
      </Helmet>

      <div className="min-h-screen spiritual-gradient">
        <Navigation />
      <Hero />
      
      {/* Tools Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Spiritual Tools & Resources
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tools.map((tool) => (
              <ToolCard
                key={tool.id}
                title={tool.title}
                description={tool.description}
                icon={tool.icon}
                href={tool.href}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white bg-opacity-60">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">
            Why Choose jugaadcore?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="w-16 h-16 saffron-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Accurate Timing</h3>
              <p className="text-gray-600">
                Precise calculations for all auspicious dates and spiritual events
              </p>
            </div>
            
            <div className="p-6">
              <div className="w-16 h-16 saffron-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Complete Calendar</h3>
              <p className="text-gray-600">
                Comprehensive listing of Hindu festivals and important dates
              </p>
            </div>
            
            <div className="p-6">
              <div className="w-16 h-16 saffron-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Easy Access</h3>
              <p className="text-gray-600">
                Simple, clean interface accessible from any device
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

export default Index;
