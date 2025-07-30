
import { Link } from "react-router-dom";
import { Calendar, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 saffron-gradient rounded-full flex items-center justify-center">
                <Calendar className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">JugaadCore</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your spiritual tools rack for Kumbh Mela, festivals, and ritual dates. 
              Connecting devotees with sacred traditions and auspicious timings.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-saffron-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-saffron-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-saffron-400 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/faqs" className="text-gray-400 hover:text-saffron-400 transition-colors">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Tools */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Spiritual Tools</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/kumbh-mela" className="text-gray-400 hover:text-saffron-400 transition-colors">
                  Kumbh Mela Countdown
                </Link>
              </li>
              <li>
                <Link to="/amavasya-purnima" className="text-gray-400 hover:text-saffron-400 transition-colors">
                  Amavasya & Purnima Dates
                </Link>
              </li>
              <li>
                <Link to="/snan-muhurat" className="text-gray-400 hover:text-saffron-400 transition-colors">
                  Snan Muhurat Calendar
                </Link>
              </li>
              <li>
                <Link to="/festival-calendar" className="text-gray-400 hover:text-saffron-400 transition-colors">
                  Hindu Festival Calendar
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-saffron-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/disclaimer" className="text-gray-400 hover:text-saffron-400 transition-colors">
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-saffron-400 transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 JugaadCore. Made with <Heart className="w-4 h-4 inline text-red-400" /> for spiritual seekers.
            </div>
            <div className="text-gray-400 text-sm">
              <span className="flex items-center">
                <span className="mr-2">🕉️</span>
                Har Har Mahadev
                <span className="ml-2">🙏</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
