import { useState } from "react";
import { Calendar, Info, ChevronDown } from "lucide-react";

interface Festival {
  id: string;
  name: string;
  date: string;
  month: number;
  description: string;
  significance: string;
  rituals?: string[];
}

const FestivalCalendar = () => {
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());

  const festivals: Festival[] = [
    {
      id: "1",
      name: "Makar Sankranti",
      date: "2025-01-14",
      month: 0,
      description: "Festival marking the transition of the sun into Capricorn zodiac sign",
      significance: "Celebrates the end of winter and beginning of longer days",
      rituals: ["Kite flying", "Sesame and jaggery sweets", "Holy dip in rivers"]
    },
    {
      id: "2",
      name: "Vasant Panchami",
      date: "2025-02-03",
      month: 1,
      description: "Festival dedicated to Goddess Saraswati and welcoming spring",
      significance: "Worship of knowledge, music, arts, and learning",
      rituals: ["Wearing yellow clothes", "Saraswati Puja", "Flying kites"]
    },
    {
      id: "3",
      name: "Maha Shivratri",
      date: "2025-02-26",
      month: 1,
      description: "Great night of Lord Shiva - most sacred night for Shiva devotees",
      significance: "Celebrates the cosmic dance of Shiva and spiritual awakening",
      rituals: ["Night-long vigil", "Shiva Lingam worship", "Fasting", "Chanting Om Namah Shivaya"]
    },
    {
      id: "4",
      name: "Holi",
      date: "2025-03-14",
      month: 2,
      description: "Festival of colors celebrating the victory of good over evil",
      significance: "Marks the arrival of spring and end of winter",
      rituals: ["Playing with colors", "Holika bonfire", "Gujiya sweets"]
    },
    {
      id: "5",
      name: "Ram Navami",
      date: "2025-04-06",
      month: 3,
      description: "Birth anniversary of Lord Rama, seventh avatar of Vishnu",
      significance: "Celebrates dharma, righteousness, and divine virtues",
      rituals: ["Ramayana recitation", "Ram bhajans", "Chariot processions"]
    },
    {
      id: "6",
      name: "Hanuman Jayanti",
      date: "2025-04-13",
      month: 3,
      description: "Birth anniversary of Lord Hanuman, devoted follower of Rama",
      significance: "Celebrates strength, devotion, and courage",
      rituals: ["Hanuman Chalisa recitation", "Visiting Hanuman temples", "Distributing prasad"]
    },
    {
      id: "7",
      name: "Akshaya Tritiya",
      date: "2025-05-02",
      month: 4,
      description: "Highly auspicious day for new beginnings and gold purchases",
      significance: "Day of eternal prosperity and good fortune",
      rituals: ["Buying gold", "Charity", "Starting new ventures"]
    },
    {
      id: "8",
      name: "Buddha Purnima",
      date: "2025-05-12",
      month: 4,
      description: "Birth, enlightenment, and death anniversary of Gautama Buddha",
      significance: "Celebrates wisdom, compassion, and the path to enlightenment",
      rituals: ["Meditation", "Visiting Buddhist temples", "Acts of kindness"]
    },
    {
      id: "9",
      name: "Guru Purnima",
      date: "2025-07-10",
      month: 6,
      description: "Day dedicated to spiritual teachers and gurus",
      significance: "Honors the tradition of guru-disciple relationship",
      rituals: ["Guru worship", "Seeking blessings", "Spiritual study"]
    },
    {
      id: "10",
      name: "Krishna Janmashtami",
      date: "2025-08-16",
      month: 7,
      description: "Birth anniversary of Lord Krishna, eighth avatar of Vishnu",
      significance: "Celebrates divine love, wisdom, and playfulness",
      rituals: ["Midnight celebration", "Dahi Handi", "Krishna bhajans", "Fasting"]
    },
    {
      id: "11",
      name: "Ganesh Chaturthi",
      date: "2025-08-29",
      month: 7,
      description: "Birth celebration of Lord Ganesha, remover of obstacles",
      significance: "Seeks blessings for new beginnings and success",
      rituals: ["Ganesha idol installation", "Modak offerings", "Visarjan ceremony"]
    },
    {
      id: "12",
      name: "Navaratri",
      date: "2025-09-22",
      month: 8,
      description: "Nine nights celebrating Divine Mother in her various forms",
      significance: "Triumph of good over evil and divine feminine power",
      rituals: ["Durga Puja", "Garba dance", "Fasting", "Goddess worship"]
    },
    {
      id: "13",
      name: "Dussehra",
      date: "2025-10-02",
      month: 9,
      description: "Victory of Lord Rama over demon king Ravana",
      significance: "Celebrates the triumph of righteousness over evil",
      rituals: ["Ravana effigy burning", "Ram Lila performances", "Weapon worship"]
    },
    {
      id: "14",
      name: "Karva Chauth",
      date: "2025-10-20",
      month: 9,
      description: "Married women fast for their husbands' long life and prosperity",
      significance: "Celebrates marital bond and devotion",
      rituals: ["Nirjala fast", "Moon sighting", "Karva decoration"]
    },
    {
      id: "15",
      name: "Diwali",
      date: "2025-11-01",
      month: 10,
      description: "Festival of lights celebrating return of Lord Rama to Ayodhya",
      significance: "Victory of light over darkness, knowledge over ignorance",
      rituals: ["Lighting diyas", "Rangoli", "Lakshmi Puja", "Fireworks", "Sweets"]
    },
    {
      id: "16",
      name: "Govardhan Puja",
      date: "2025-11-02",
      month: 10,
      description: "Celebrates Krishna lifting Govardhan mountain to protect villagers",
      significance: "Divine protection and environmental consciousness",
      rituals: ["Annakut offerings", "Govardhan mountain worship", "Food distribution"]
    }
  ];

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const getFilteredFestivals = () => {
    return festivals.filter(festival => festival.month === selectedMonth);
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

  const isUpcoming = (dateString: string) => {
    return new Date(dateString) >= new Date();
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-2 text-gray-800">Hindu Festival Calendar</h2>
        <p className="text-gray-600">Comprehensive guide to major Hindu festivals with dates and significance</p>
      </div>

      {/* Styled Month Selector */}
      <div className="bg-gradient-to-r from-saffron-50 to-blue-50 rounded-xl p-6">
        <div className="flex justify-center">
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-2 text-center">Select Month</label>
            <div className="relative">
              <select
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(parseInt(e.target.value))}
                className="appearance-none bg-white border-2 border-saffron-200 rounded-lg px-4 py-3 pr-10 focus:ring-2 focus:ring-saffron-500 focus:border-saffron-500 transition-all duration-200 shadow-sm hover:shadow-md min-w-[200px] font-medium text-gray-700"
              >
                {months.map((month, index) => (
                  <option key={index} value={index}>{month}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-saffron-600 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      {/* Festivals List */}
      <div>
        <h3 className="text-2xl font-semibold mb-4 text-gray-800">
          {months[selectedMonth]} Festivals
        </h3>
        
        <div className="space-y-4">
          {getFilteredFestivals().map((festival) => (
            <div key={festival.id} className={`border rounded-lg p-6 transition-all ${
              isUpcoming(festival.date) 
                ? 'border-saffron-200 bg-saffron-50 hover:shadow-md' 
                : 'border-gray-200 bg-gray-50'
            }`}>
              <div className="flex items-start justify-between flex-wrap gap-2 mb-4">
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-1">{festival.name}</h4>
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{formatDate(festival.date)}</span>
                    {isUpcoming(festival.date) && (
                      <span className="ml-3 px-2 py-1 bg-saffron-100 text-saffron-800 rounded-full text-xs font-medium">
                        Upcoming
                      </span>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <p className="text-gray-700">{festival.description}</p>
                
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <Info className="w-4 h-4 mr-1 text-blue-600" />
                    <strong className="text-blue-800">Significance:</strong>
                  </div>
                  <p className="text-blue-700">{festival.significance}</p>
                </div>
                
                {festival.rituals && (
                  <div>
                    <strong className="text-gray-800">Traditional Rituals:</strong>
                    <ul className="mt-2 space-y-1">
                      {festival.rituals.map((ritual, index) => (
                        <li key={index} className="text-gray-600 flex items-center">
                          <span className="w-2 h-2 bg-saffron-400 rounded-full mr-2"></span>
                          {ritual}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
          
          {getFilteredFestivals().length === 0 && (
            <div className="text-center py-8 text-gray-500">
              <Calendar className="w-12 h-12 mx-auto mb-3 opacity-50" />
              <p>No major festivals found for {months[selectedMonth]}</p>
            </div>
          )}
        </div>
      </div>

      {/* Quick Overview */}
      <div className="bg-gradient-to-r from-blue-50 to-saffron-50 rounded-xl p-6">
        <h4 className="text-lg font-semibold mb-3 text-gray-800">Festival Calendar Overview</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-saffron-600">
              {festivals.filter(f => isUpcoming(f.date)).length}
            </div>
            <div className="text-sm text-gray-600">Upcoming Festivals</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-blue-600">
              {festivals.length}
            </div>
            <div className="text-sm text-gray-600">Total Festivals</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-green-600">
              {new Set(festivals.map(f => f.month)).size}
            </div>
            <div className="text-sm text-gray-600">Active Months</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-purple-600">
              {festivals.filter(f => f.rituals && f.rituals.length > 0).length}
            </div>
            <div className="text-sm text-gray-600">With Rituals</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FestivalCalendar;
