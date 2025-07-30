
import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Shield, Eye, Cookie, Database } from "lucide-react";

const Privacy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy – JugaadCore Data Protection & User Privacy</title>
        <meta name="description" content="Read JugaadCore's privacy policy to understand how we protect your data while providing Hindu spiritual calendar tools and festival information." />
        <meta name="keywords" content="JugaadCore privacy policy, data protection, user privacy, spiritual tools privacy, Hindu calendar privacy, personal information" />
        <meta name="author" content="JugaadCore Team" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href="https://jugaadcore.com/privacy" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Privacy Policy – JugaadCore Data Protection & User Privacy" />
        <meta property="og:description" content="Read JugaadCore's privacy policy to understand how we protect your data while providing spiritual tools." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://jugaadcore.com/privacy" />
        <meta property="og:image" content="https://jugaadcore.com/og-privacy.jpg" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Privacy Policy – JugaadCore Data Protection" />
        <meta name="twitter:description" content="Understand how JugaadCore protects your data while providing spiritual calendar tools." />
        <meta name="twitter:image" content="https://jugaadcore.com/og-privacy.jpg" />
      </Helmet>

      <div className="min-h-screen spiritual-gradient">
        {/* Hero Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Privacy <span className="bg-gradient-to-r from-saffron-600 to-saffron-500 bg-clip-text text-transparent">Policy</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Your privacy is sacred to us. Learn how we protect and respect your personal information.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="spiritual-card rounded-xl p-8 space-y-8">
              
              {/* Last Updated */}
              <div className="text-center border-b border-gray-200 pb-6">
                <p className="text-gray-600">Last updated: December 17, 2024</p>
              </div>

              {/* Introduction */}
              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-800 flex items-center">
                  <Shield className="w-6 h-6 mr-2 text-saffron-600" />
                  Introduction
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  JugaadCore ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy 
                  explains how we collect, use, and safeguard your information when you use our spiritual tools 
                  and calendar services at jugaadcore.com ("Service").
                </p>
              </div>

              {/* Information We Collect */}
              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-800 flex items-center">
                  <Database className="w-6 h-6 mr-2 text-saffron-600" />
                  Information We Collect
                </h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-800">Information You Provide</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Contact information when you reach out to us (name, email address)</li>
                      <li>Feedback and messages you send through our contact forms</li>
                      <li>Any other information you voluntarily provide</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-800">Information Automatically Collected</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Device information (browser type, operating system)</li>
                      <li>Usage data (pages visited, time spent on site)</li>
                      <li>IP address and general location information</li>
                      <li>Cookies and similar tracking technologies</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* How We Use Information */}
              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-800 flex items-center">
                  <Eye className="w-6 h-6 mr-2 text-saffron-600" />
                  How We Use Your Information
                </h2>
                
                <p className="text-gray-700 mb-4">We use the collected information for:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Providing and maintaining our spiritual tools and calendar services</li>
                  <li>Responding to your inquiries and support requests</li>
                  <li>Improving our website and user experience</li>
                  <li>Analyzing usage patterns to enhance our services</li>
                  <li>Complying with legal obligations</li>
                  <li>Displaying relevant advertisements (Google AdSense)</li>
                </ul>
              </div>

              {/* Cookies and Tracking */}
              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-800 flex items-center">
                  <Cookie className="w-6 h-6 mr-2 text-saffron-600" />
                  Cookies and Tracking Technologies
                </h2>
                
                <div className="space-y-4">
                  <p className="text-gray-700">
                    We use cookies and similar tracking technologies to enhance your experience:
                  </p>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-800">Essential Cookies</h3>
                    <p className="text-gray-700">Required for basic website functionality and security.</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-800">Analytics Cookies</h3>
                    <p className="text-gray-700">Help us understand how visitors use our website to improve our services.</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-800">Advertising Cookies</h3>
                    <p className="text-gray-700">Used by Google AdSense to display relevant advertisements and measure ad performance.</p>
                  </div>

                  <p className="text-gray-700">
                    You can control cookies through your browser settings, but disabling certain cookies may affect website functionality.
                  </p>
                </div>
              </div>

              {/* Third-Party Services */}
              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Third-Party Services</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-800">Google AdSense</h3>
                    <p className="text-gray-700">
                      We use Google AdSense to display advertisements. Google may use cookies to serve ads based on 
                      your visits to our site and other sites on the Internet. You can opt out of personalized 
                      advertising by visiting Google's Ads Settings.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-800">Analytics Services</h3>
                    <p className="text-gray-700">
                      We may use analytics services to understand user behavior and improve our website. 
                      These services may collect and process data according to their own privacy policies.
                    </p>
                  </div>
                </div>
              </div>

              {/* Data Protection */}
              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Data Protection and Security</h2>
                <p className="text-gray-700 leading-relaxed">
                  We implement appropriate technical and organizational measures to protect your personal information 
                  against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission 
                  over the Internet or electronic storage is 100% secure.
                </p>
              </div>

              {/* Data Retention */}
              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Data Retention</h2>
                <p className="text-gray-700 leading-relaxed">
                  We retain personal information only as long as necessary to fulfill the purposes outlined in this 
                  Privacy Policy, unless a longer retention period is required or permitted by law.
                </p>
              </div>

              {/* Your Rights */}
              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Your Rights</h2>
                <p className="text-gray-700 mb-4">You have the right to:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate or incomplete information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Object to processing of your personal information</li>
                  <li>Request data portability</li>
                </ul>
              </div>

              {/* Children's Privacy */}
              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Children's Privacy</h2>
                <p className="text-gray-700 leading-relaxed">
                  Our Service is not intended for children under 13 years of age. We do not knowingly collect 
                  personal information from children under 13. If you become aware that a child has provided us 
                  with personal information, please contact us immediately.
                </p>
              </div>

              {/* Changes to Policy */}
              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Changes to This Privacy Policy</h2>
                <p className="text-gray-700 leading-relaxed">
                  We may update our Privacy Policy from time to time. We will notify you of any changes by 
                  posting the new Privacy Policy on this page and updating the "Last updated" date. You are 
                  advised to review this Privacy Policy periodically for any changes.
                </p>
              </div>

              {/* Contact Information */}
              <div className="bg-gradient-to-r from-blue-50 to-saffron-50 rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Contact Us</h2>
                <p className="text-gray-700 mb-4">
                  If you have any questions about this Privacy Policy, please contact us:
                </p>
                <ul className="text-gray-700 space-y-1">
                  <li>Email: privacy@jugaadcore.com</li>
                  <li>Website: <a href="/" className="text-saffron-600 hover:text-saffron-700">jugaadcore.com</a></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Privacy;
