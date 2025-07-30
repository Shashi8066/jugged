
import { LucideIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ToolCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
}

const ToolCard = ({ title, description, icon: Icon, href }: ToolCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(href);
  };

  return (
    <div className="spiritual-card rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer border border-saffron-100">
      <div className="w-12 h-12 saffron-gradient rounded-lg flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-white" />
      </div>
      
      <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
      
      <button
        onClick={handleClick}
        className="w-full bg-gradient-to-r from-saffron-500 to-saffron-600 text-white py-2 px-4 rounded-lg hover:from-saffron-600 hover:to-saffron-700 transition-all duration-200 font-medium shadow-md hover:shadow-lg"
      >
        Open Tool
      </button>
    </div>
  );
};

export default ToolCard;
