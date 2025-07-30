
import { Calendar, Clock, MapPin, ChevronDown } from "lucide-react";
import { useState } from "react";

interface SnanDate {
  id: string;
  name: string;
  date: string;
  time: string;
  type: "Shahi Snan" | "Magh Snan" | "Amavasya Snan" | "Purnima Snan";
  location: string;
  significance: string;
  description: string;
}

const SnanMuhurat = () => {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  const snanDatesAllYears: Record<number, SnanDate[]> = {
    2024: [
      {
        id: "2024-1",
        name: "Kartik Purnima Snan",
        date: "2024-11-15",
        time: "05:30 AM - 11:30 AM",
        type: "Purnima Snan",
        location: "Various Sacred Rivers",
        significance: "Dev Deepawali celebrations",
        description: "Sacred bath on the full moon of Kartik month with enhanced spiritual benefits"
      },
      {
        id: "2024-2",
        name: "Kartik Amavasya Snan",
        date: "2024-11-01",
        time: "06:00 AM - 10:00 AM",
        type: "Amavasya Snan",
        location: "Ganga, Yamuna, Godavari",
        significance: "Deepawali Amavasya",
        description: "New moon bath for removing negative energies and ancestral blessings"
      }
    ],
    2025: [
      {
        id: "2025-1",
        name: "Makar Sankranti Snan",
        date: "2025-01-14",
        time: "06:00 AM - 12:00 PM",
        type: "Shahi Snan",
        location: "Triveni Sangam, Prayagraj",
        significance: "First Shahi Snan of Kumbh Mela 2025",
        description: "The most auspicious bathing day marking the beginning of the sacred period"
      },
      {
        id: "2025-2", 
        name: "Mauni Amavasya Snan",
        date: "2025-01-29",
        time: "04:00 AM - 10:00 AM",
        type: "Shahi Snan",
        location: "Triveni Sangam, Prayagraj",
        significance: "Second Shahi Snan - most powerful cleansing day",
        description: "The holiest bathing day when silence and spiritual discipline bring maximum merit"
      },
      {
        id: "2025-3",
        name: "Vasant Panchami Snan",
        date: "2025-02-03",
        time: "06:30 AM - 12:30 PM",
        type: "Shahi Snan",
        location: "Triveni Sangam, Prayagraj",
        significance: "Third Shahi Snan welcoming spring",
        description: "Sacred bath marking the arrival of spring and worship of Goddess Saraswati"
      },
      {
        id: "2025-4",
        name: "Maghi Purnima Snan",
        date: "2025-02-12",
        time: "05:30 AM - 11:30 AM",
        type: "Shahi Snan",
        location: "Triveni Sangam, Prayagraj",
        significance: "Fourth Shahi Snan on full moon",
        description: "Full moon bath with enhanced spiritual benefits and lunar energy"
      },
      {
        id: "2025-5",
        name: "Maha Shivratri Snan",
        date: "2025-02-26",
        time: "All day - Special midnight timing",
        type: "Shahi Snan",
        location: "Triveni Sangam, Prayagraj",
        significance: "Final Shahi Snan dedicated to Lord Shiva",
        description: "The concluding royal bath honoring Lord Shiva with special midnight ceremonies"
      },
      {
        id: "2025-6",
        name: "Daily Magh Snan",
        date: "2025-01-14 to 2025-02-12",
        time: "05:00 AM - 09:00 AM",
        type: "Magh Snan",
        location: "Various Ghats, Prayagraj",
        significance: "Daily ritual baths during Magh month",
        description: "Daily sacred baths throughout the month of Magh for continuous purification"
      }
    ],
    2026: [
      {
        id: "2026-1",
        name: "Makar Sankranti Snan",
        date: "2026-01-14",
        time: "06:00 AM - 12:00 PM",
        type: "Purnima Snan",
        location: "Haridwar, Rishikesh",
        significance: "Annual Makar Sankranti celebrations",
        description: "Sacred bath marking the sun's northward journey and end of winter"
      },
      {
        id: "2026-2",
        name: "Maha Shivratri Snan",
        date: "2026-03-17",
        time: "All day - Special midnight timing",
        type: "Amavasya Snan",
        location: "Haridwar, Varanasi",
        significance: "Great night of Lord Shiva",
        description: "Sacred bath dedicated to Lord Shiva with night-long spiritual practices"
      },
      {
        id: "2026-3",
        name: "Kartik Purnima Snan",
        date: "2026-11-04",
        time: "05:30 AM - 11:30 AM",
        type: "Purnima Snan",
        location: "Pushkar, Varanasi",
        significance: "Dev Deepawali and Kartik Purnima",
        description: "Sacred full moon bath with lighting of lamps and spiritual celebrations"
      }
    ]
  };

  const getSnanDates = () => {
    return snanDatesAllYears[selectedYear] || [];
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Shahi Snan":
        return "bg-saffron-100 text-saffron-800";
      case "Magh Snan":
        return "bg-blue-100 text-blue-800";
      case "Amavasya Snan":
        return "bg-gray-100 text-gray-800";
      case "Purnima Snan":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const formatDate = (dateString: string) => {
    if (dateString.includes(" to ")) {
      const [start, end] = dateString.split(" to ");
      const startDate = new Date(start);
      const endDate = new Date(end);
      return `${startDate.toLocaleDateString('en-IN')} to ${endDate.toLocaleDateString('en-IN')}`;
    }
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', { 
      weekday: 'long',
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const isUpcoming = (dateString: string) => {
    if (dateString.includes(" to ")) {
      const [start] = dateString.split(" to ");
      return new Date(start) >= new Date();
    }
    return new Date(dateString) >= new Date();
  };

  const snanDates = getSnanDates();
  const upcomingSnan = snanDates.filter(snan => isUpcoming(snan.date));

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-2 text-gray-800">Snan Muhurat Calendar</h2>
        <p className="text-gray-600">Sacred bathing dates and auspicious timings</p>
      </div>

      {/* Year Selector */}
      <div className="bg-gradient-to-r from-saffron-50 to-blue-50 rounded-xl p-6">
        <div className="flex justify-center">
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-2 text-center">Select Year</label>
            <div className="relative">
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(parseInt(e.target.value))}
                className="appearance-none bg-white border-2 border-saffron-200 rounded-lg px-4 py-3 pr-10 focus:ring-2 focus:ring-saffron-500 focus:border-saffron-500 transition-all duration-200 shadow-sm hover:shadow-md min-w-[140px] font-medium text-gray-700"
              >
                {Object.keys(snanDatesAllYears).map(year => (
                  <option key={year} value={parseInt(year)}>{year}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-saffron-600 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Snan Dates */}
      {upcomingSnan.length > 0 && (
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Upcoming Snan Dates</h3>
          <div className="space-y-4">
            {upcomingSnan.map((snan) => (
              <div key={snan.id} className="border-l-4 border-saffron-500 bg-gradient-to-r from-saffron-50 to-white rounded-lg p-6 shadow-md">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center flex-wrap gap-2 mb-3">
                      <h4 className="text-xl font-semibold text-gray-800">{snan.name}</h4>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(snan.type)}`}>
                        {snan.type}
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div className="flex items-center text-gray-600">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span className="text-sm">{formatDate(snan.date)}</span>
                      </div>
                      
                      <div className="flex items-center text-gray-600">
                        <Clock className="w-4 h-4 mr-2" />
                        <span className="text-sm">{snan.time}</span>
                      </div>
                      
                      <div className="flex items-center text-gray-600">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span className="text-sm">{snan.location}</span>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <p className="text-saffron-700 font-medium">{snan.significance}</p>
                      <p className="text-gray-600">{snan.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* All Snan Dates */}
      <div>
        <h3 className="text-2xl font-semibold mb-4 text-gray-800">{selectedYear} Snan Calendar</h3>
        <div className="space-y-3">
          {snanDates.map((snan) => (
            <div key={snan.id} className={`border rounded-lg p-4 transition-all ${
              isUpcoming(snan.date) 
                ? 'border-saffron-200 bg-saffron-50 hover:shadow-md' 
                : 'border-gray-200 bg-gray-50 opacity-75'
            }`}>
              <div className="flex items-start justify-between flex-wrap gap-2">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center flex-wrap gap-2 mb-2">
                    <h4 className="text-lg font-medium text-gray-800">{snan.name}</h4>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(snan.type)}`}>
                      {snan.type}
                    </span>
                  </div>
                  
                  <div className="text-sm text-gray-600 mb-1">
                    {formatDate(snan.date)} • {snan.time}
                  </div>
                  
                  <p className="text-sm text-gray-700">{snan.significance}</p>
                </div>
              </div>
            </div>
          ))}
          
          {snanDates.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              <Calendar className="w-12 h-12 mx-auto mb-3 opacity-50" />
              <p>No Snan dates available for {selectedYear}</p>
            </div>
          )}
        </div>
      </div>

      {/* Information Section */}
      <div className="bg-blue-50 rounded-xl p-6">
        <h4 className="text-lg font-semibold mb-3 text-gray-800">About Snan Muhurat</h4>
        <div className="space-y-3 text-gray-700">
          <div>
            <strong>Shahi Snan:</strong> Royal baths on the most auspicious days when taking a dip in sacred waters provides maximum spiritual merit and liberation from sins.
          </div>
          <div>
            <strong>Magh Snan:</strong> Daily ritual baths during the sacred month of Magh (January-February) for continuous purification and spiritual growth.
          </div>
          <div>
            <strong>Best Timings:</strong> Early morning hours (Brahma Muhurat) are most beneficial for sacred baths when spiritual energy is at its peak.
          </div>
        </div>
      </div>
    </div>
  );
};

export default SnanMuhurat;
