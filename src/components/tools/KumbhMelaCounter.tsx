
import { useState, useEffect } from "react";
import { Calendar, Clock, MapPin } from "lucide-react";

interface KumbhMela {
  id: string;
  name: string;
  location: string;
  date: Date;
  type: string;
  description: string;
  completed?: boolean;
}

const KumbhMelaCounter = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  const kumbhMelas: KumbhMela[] = [
    {
      id: "1",
      name: "Maha Kumbh Mela",
      location: "Prayagraj (Allahabad)",
      date: new Date("2025-01-13"),
      type: "Maha Kumbh",
      description: "The greatest spiritual gathering held every 12 years"
    },
    {
      id: "2", 
      name: "Ardh Kumbh Mela",
      location: "Prayagraj (Allahabad)",
      date: new Date("2031-01-20"),
      type: "Ardh Kumbh",
      description: "Half Kumbh held every 6 years"
    },
    {
      id: "3",
      name: "Kumbh Mela",
      location: "Haridwar",
      date: new Date("2028-04-01"),
      type: "Purna Kumbh",
      description: "Complete Kumbh Mela at the sacred Har Ki Pauri"
    },
    {
      id: "4",
      name: "Simhastha Kumbh",
      location: "Ujjain",
      date: new Date("2028-05-15"),
      type: "Simhastha",
      description: "Sacred gathering when Jupiter is in Leo"
    }
  ];

  const nextKumbh = kumbhMelas
    .filter(kumbh => kumbh.date > new Date())
    .sort((a, b) => a.date.getTime() - b.date.getTime())[0];

  useEffect(() => {
    if (!nextKumbh) return;

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = nextKumbh.date.getTime() - now;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [nextKumbh]);

  if (!nextKumbh) {
    return (
      <div className="text-center py-8">
        <h2 className="text-2xl font-bold mb-4">No upcoming Kumbh Mela</h2>
        <p>Please check back later for updates.</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-2 text-gray-800">Kumbh Mela Countdown</h2>
        <p className="text-gray-600">Track the next sacred gathering</p>
      </div>

      {/* Countdown Timer */}
      <div className="bg-gradient-to-r from-saffron-50 to-blue-50 rounded-xl p-8 text-center">
        <h3 className="text-2xl font-bold mb-2 text-gray-800">{nextKumbh.name}</h3>
        <div className="flex items-center justify-center text-gray-600 mb-4">
          <MapPin className="w-4 h-4 mr-1" />
          <span>{nextKumbh.location}</span>
        </div>
        
        <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
          {[
            { label: "Days", value: timeLeft.days },
            { label: "Hours", value: timeLeft.hours },
            { label: "Minutes", value: timeLeft.minutes },
            { label: "Seconds", value: timeLeft.seconds }
          ].map((item) => (
            <div key={item.label} className="bg-white rounded-lg p-4 shadow-md">
              <div className="text-2xl font-bold text-saffron-600">{item.value}</div>
              <div className="text-sm text-gray-600">{item.label}</div>
            </div>
          ))}
        </div>
        
        <p className="mt-4 text-gray-700">{nextKumbh.description}</p>
      </div>

      {/* Timeline of Kumbh Melas */}
      <div>
        <h3 className="text-2xl font-semibold mb-6 text-gray-800">Upcoming Kumbh Melas</h3>
        <div className="space-y-4">
          {kumbhMelas
            .filter(kumbh => kumbh.date > new Date())
            .sort((a, b) => a.date.getTime() - b.date.getTime())
            .map((kumbh) => (
              <div key={kumbh.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-800">{kumbh.name}</h4>
                    <div className="flex items-center text-gray-600 mt-1">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span className="mr-4">{kumbh.location}</span>
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{kumbh.date.toLocaleDateString('en-IN', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}</span>
                    </div>
                    <p className="text-gray-600 mt-2">{kumbh.description}</p>
                  </div>
                  <span className="bg-saffron-100 text-saffron-800 px-3 py-1 rounded-full text-sm font-medium">
                    {kumbh.type}
                  </span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default KumbhMelaCounter;
