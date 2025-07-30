import { useState } from "react";
import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Mail, MessageCircle, Send, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you soon.",
    });
    
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <Helmet>
        <title>Contact JugaadCore – Get Help with Spiritual Calendar Tools</title>
        <meta name="description" content="Contact JugaadCore for support with Hindu festival dates, Kumbh Mela information, or spiritual calendar queries. We're here to help devotees worldwide." />
        <meta name="keywords" content="Contact JugaadCore, spiritual calendar support, Hindu festival help, Kumbh Mela queries, religious date assistance, customer support" />
        <meta name="author" content="JugaadCore Team" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href="https://jugaadcore.com/contact" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Contact JugaadCore – Get Help with Spiritual Calendar Tools" />
        <meta property="og:description" content="Contact JugaadCore for support with Hindu festival dates, Kumbh Mela information, or spiritual calendar queries." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://jugaadcore.com/contact" />
        <meta property="og:image" content="https://jugaadcore.com/og-contact.jpg" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact JugaadCore – Spiritual Calendar Support" />
        <meta name="twitter:description" content="Get help with Hindu festival dates, Kumbh Mela information, and spiritual calendar queries." />
        <meta name="twitter:image" content="https://jugaadcore.com/og-contact.jpg" />
      </Helmet>

      <div className="min-h-screen spiritual-gradient">
        <Navigation />
      
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            Contact <span className="bg-gradient-to-r from-saffron-600 to-saffron-500 bg-clip-text text-transparent">Us</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div className="spiritual-card rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Send us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-saffron-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-saffron-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-saffron-500 focus:border-transparent"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="feedback">Feedback</option>
                    <option value="bug-report">Bug Report</option>
                    <option value="feature-request">Feature Request</option>
                    <option value="calendar-correction">Calendar Date Correction</option>
                    <option value="collaboration">Collaboration</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-saffron-500 focus:border-transparent resize-none"
                    placeholder="Please share your message, feedback, or question..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-saffron-500 to-saffron-600 text-white py-3 px-6 rounded-lg hover:from-saffron-600 hover:to-saffron-700 transition-all duration-200 font-medium shadow-md hover:shadow-lg flex items-center justify-center"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              
              {/* Contact Details */}
              <div className="spiritual-card rounded-xl p-8">
                <h3 className="text-xl font-semibold mb-6 text-gray-800">Get in Touch</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-10 h-10 saffron-gradient rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Email</h4>
                      <p className="text-gray-600">contact@jugaadcore.com</p>
                      <p className="text-sm text-gray-500">We typically respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 saffron-gradient rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <MessageCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Support</h4>
                      <p className="text-gray-600">Available for spiritual calendar queries</p>
                      <p className="text-sm text-gray-500">Monday to Friday, 9 AM to 6 PM IST</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 saffron-gradient rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Based in</h4>
                      <p className="text-gray-600">India</p>
                      <p className="text-sm text-gray-500">Serving devotees worldwide</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="spiritual-card rounded-xl p-8">
                <h3 className="text-xl font-semibold mb-6 text-gray-800">Frequently Asked Questions</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">How accurate are the dates?</h4>
                    <p className="text-sm text-gray-600">
                      All dates are calculated using traditional Hindu calendar methods and cross-verified with multiple authentic sources.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Can I suggest new features?</h4>
                    <p className="text-sm text-gray-600">
                      Absolutely! We welcome suggestions for new tools and features that serve the spiritual community.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Is this service free?</h4>
                    <p className="text-sm text-gray-600">
                      Yes, all our spiritual tools are provided free of charge as a service to the devotee community.
                    </p>
                  </div>
                </div>
              </div>

              {/* Spiritual Message */}
              <div className="bg-gradient-to-r from-blue-50 to-saffron-50 rounded-xl p-6 text-center">
                <div className="text-3xl mb-3">🕉️</div>
                <p className="text-gray-700 italic">
                  "Sarve bhavantu sukhinah, sarve santu niramayah"
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  May all beings be happy and healthy
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
    </>
  );
};

export default Contact;
