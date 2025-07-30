
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | jugaadcore</title>
        <meta name="description" content="The page you're looking for doesn't exist. Return to jugaadcore homepage for Hindu spiritual calendar tools and festival information." />
        <meta name="keywords" content="404 error, page not found, jugaadcore, Hindu spiritual tools" />
        <meta name="author" content="jugaadcore Team" />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://jugaadcore.com/404" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="404 - Page Not Found | jugaadcore" />
        <meta property="og:description" content="The page you're looking for doesn't exist. Return to jugaadcore for spiritual calendar tools." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://jugaadcore.com/404" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="404 - Page Not Found | jugaadcore" />
        <meta name="twitter:description" content="Page not found. Return to jugaadcore for Hindu spiritual calendar tools." />
      </Helmet>

      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>
          <a href="/" className="text-blue-500 hover:text-blue-700 underline">
            Return to Home
          </a>
        </div>
      </div>
    </>
  );
};

export default NotFound;
