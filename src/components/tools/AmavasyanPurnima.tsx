
import { useState } from "react";
import { Calendar, ChevronDown } from "lucide-react";

interface LunarEvent {
  date: string;
  type: "Amavasya" | "Purnima";
  name: string;
  significance?: string;
}

const AmavasyanPurnima = () => {
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  // Sample data - in a real app, this would be calculated or fetched
  const lunarEvents: LunarEvent[] = [
    { date: "2024-12-01", type: "Amavasya", name: "Kartik Amavasya", significance: "Deepawali Amavasya" },
    { date: "2024-12-15", type: "Purnima", name: "Kartik Purnima", significance: "Dev Deepawali" },
    { date: "2024-12-30", type: "Amavasya", name: "Margashirsha Amavasya" },
    { date: "2025-01-13", type: "Purnima", name: "Paush Purnima", significance: "Shakambhari Purnima" },
    { date: "2025-01-29", type: "Amavasya", name: "Mauni Amavasya", significance: "Most auspicious for Kumbh Snan" },
    { date: "2025-02-12", type: "Purnima", name: "Magha Purnima", significance: "Vasant Panchami week" },
    { date: "2025-02-28", type: "Amavasya", name: "Phalguna Amavasya" },
    { date: "2025-03-14", type: "Purnima", name: "Holi Purnima", significance: "Festival of Colors" },
    { date: "2025-03-29", type: "Amavasya", name: "Chaitra Amavasya" },
    { date: "2025-04-13", type: "Purnima", name: "Hanuman Jayanti Purnima" },
    { date: "2025-04-28", type: "Amavasya", name: "Vaishakha Amavasya" },
    { date: "2025-05-12", type: "Purnima", name: "Buddha Purnima", significance: "Lord Buddha's birth" }
  ];

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const getFilteredEvents = () => {
    return lunarEvents.filter(event => {
      const eventDate = new Date(event.date);
      return eventDate.getMonth() === selectedMonth && eventDate.getFullYear() === selectedYear;
    });
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', { 
      weekday: 'long',
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-2 text-gray-800">Amavasya & Purnima Dates</h2>
        <p className="text-gray-600">Sacred new moon and full moon dates for spiritual observances</p>
      </div>

      {/* Styled Date Selector */}
      <div className="bg-gradient-to-r from-saffron-50 to-blue-50 rounded-xl p-6">
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-2">Month</label>
            <div className="relative">
              <select
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(parseInt(e.target.value))}
                className="appearance-none bg-white border-2 border-saffron-200 rounded-lg px-4 py-3 pr-10 focus:ring-2 focus:ring-saffron-500 focus:border-saffron-500 transition-all duration-200 shadow-sm hover:shadow-md min-w-[180px] font-medium text-gray-700"
              >
                {months.map((month, index) => (
                  <option key={index} value={index}>{month}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-saffron-600 pointer-events-none" />
            </div>
          </div>
          
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-2">Year</label>
            <div className="relative">
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(parseInt(e.target.value))}
                className="appearance-none bg-white border-2 border-saffron-200 rounded-lg px-4 py-3 pr-10 focus:ring-2 focus:ring-saffron-500 focus:border-saffron-500 transition-all duration-200 shadow-sm hover:shadow-md min-w-[140px] font-medium text-gray-700"
              >
                {Array.from({ length: 7 }, (_, i) => new Date().getFullYear() - 1 + i).map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-saffron-600 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      {/* Events List */}
      <div>
        <h3 className="text-xl font-semibold mb-4 text-gray-800">
          {months[selectedMonth]} {selectedYear} - Lunar Events
        </h3>
        
        <div className="space-y-3">
          {getFilteredEvents().map((event, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <Calendar className="w-4 h-4 mr-2 text-saffron-600" />
                    <span className="font-medium text-gray-800">{event.name}</span>
                    <span className={`ml-3 px-2 py-1 rounded-full text-xs font-medium ${
                      event.type === "Amavasya" 
                        ? "bg-gray-100 text-gray-800" 
                        : "bg-yellow-100 text-yellow-800"
                    }`}>
                      {event.type}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-1">
                    {formatDate(event.date)}
                  </p>
                  
                  {event.significance && (
                    <p className="text-saffron-700 text-sm italic">
                      {event.significance}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
          
          {getFilteredEvents().length === 0 && (
            <div className="text-center py-8 text-gray-500">
              <Calendar className="w-12 h-12 mx-auto mb-3 opacity-50" />
              <p>No lunar events found for {months[selectedMonth]} {selectedYear}</p>
            </div>
          )}
        </div>
      </div>

      {/* Information Section */}
      <div className="bg-blue-50 rounded-xl p-6">
        <h4 className="text-lg font-semibold mb-3 text-gray-800">About Amavasya & Purnima</h4>
        <div className="space-y-2 text-gray-700">
          <p><strong>Amavasya (New Moon):</strong> Sacred day for ancestor worship, fasting, and spiritual practices. Ideal for introspection and new beginnings.</p>
          <p><strong>Purnima (Full Moon):</strong> Auspicious day for prayers, charity, and spiritual ceremonies. Enhanced meditation and spiritual energy.</p>
        </div>
      </div>
    </div>
  );
};

export default AmavasyanPurnima;
