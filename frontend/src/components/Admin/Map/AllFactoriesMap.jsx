import React, { useState } from 'react';

const AllFactoriesMap = () => {
  // Setting default selected ID to 5 (Sitapur Sugar Factory) to match your screenshot
  const [selectedId, setSelectedId] = useState(5);

  const factories = [
    { id: 1, name: 'Shahjahanpur Sugar Mill', location: 'Shahjahanpur', alerts: 12, status: 'operational' },
    { id: 2, name: 'Bareilly Co-op Mill', location: 'Bareilly', alerts: 8, status: 'operational' },
    { id: 3, name: 'Pilibhit Factory', location: 'Pilibhit', alerts: 18, status: 'alert' },
    { id: 4, name: 'Lakhimpur Mill', location: 'Lakhimpur', alerts: 5, status: 'operational' },
    { id: 5, name: 'Sitapur Sugar Factory', location: 'Sitapur', alerts: 9, status: 'operational' },
    { id: 6, name: 'Hardoi Co-op Mill', location: 'Hardoi', alerts: 6, status: 'operational' },
    { id: 7, name: 'Lucknow Sugar Mill', location: 'Lucknow', alerts: 11, status: 'operational' },
    { id: 8, name: 'Unnao Factory', location: 'Unnao', alerts: 7, status: 'operational' },
    { id: 9, name: 'Rae Bareli Mill', location: 'Rae Bareli', alerts: 10, status: 'operational' },
    { id: 10, name: 'Kanpur Co-op Sugar', location: 'Kanpur', alerts: 15, status: 'alert' },
    { id: 11, name: 'Farrukhabad Factory', location: 'Farrukhabad', alerts: 4, status: 'operational' },
    { id: 12, name: 'Etawah Sugar Mill', location: 'Etawah', alerts: 13, status: 'operational' },
    { id: 13, name: 'Mainpuri Co-op', location: 'Mainpuri', alerts: 8, status: 'operational' },
    { id: 14, name: 'Firozabad Mill', location: 'Firozabad', alerts: 6, status: 'operational' },
    { id: 15, name: 'Agra Sugar Factory', location: 'Agra', alerts: 9, status: 'operational' },
    { id: 16, name: 'Mathura Co-op Mill', location: 'Mathura', alerts: 7, status: 'operational' },
    { id: 17, name: 'Aligarh Factory', location: 'Aligarh', alerts: 11, status: 'operational' },
    { id: 18, name: 'Bulandshahr Mill', location: 'Bulandshahr', alerts: 5, status: 'operational' },
    { id: 19, name: 'Moradabad Sugar', location: 'Moradabad', alerts: 12, status: 'operational' },
    { id: 20, name: 'Rampur Co-op', location: 'Rampur', alerts: 16, status: 'alert' },
    { id: 21, name: 'Bijnor Factory', location: 'Bijnor', alerts: 8, status: 'operational' },
    { id: 22, name: 'Meerut Sugar Mill', location: 'Meerut', alerts: 10, status: 'operational' },
    { id: 23, name: 'Muzaffarnagar Co-op', location: 'Muzaffarnagar', alerts: 14, status: 'operational' },
  ];

  return (
    <div className="w-full font-sans text-slate-900 bg-white">
      {/* Container matching the card background */}
      <div className="w-full bg-white border border-slate-200 rounded-xl p-4 sm:p-6 lg:p-8 shadow-sm">
        
        {/* Header */}
        <h2 className="text-xl font-bold text-slate-800 mb-6">All Factories</h2>
        
        {/* Grid Layout (1 col mobile, 2 col tablet, 3 col desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          
          {factories.map((factory) => (
            <div 
              key={factory.id}
              onClick={() => setSelectedId(factory.id)}
              className={`flex items-center justify-between p-4 rounded-lg cursor-pointer transition-all duration-200 border ${
                selectedId === factory.id 
                  ? 'border-blue-600 shadow-sm ring-1 ring-blue-600/20' 
                  : 'border-slate-200 hover:border-slate-300 hover:shadow-sm'
              }`}
            >
              {/* Left Side: Text Info */}
              <div className="flex flex-col gap-1">
                <h3 className="text-sm font-semibold text-slate-800">
                  {factory.name}
                </h3>
                <p className="text-xs text-slate-500">
                  {factory.location} &bull; {factory.alerts} alerts
                </p>
              </div>

              {/* Right Side: Status Badge */}
              <div>
                {factory.status === 'alert' ? (
                  <span className="inline-flex px-3 py-1 bg-red-500 text-white text-[11px] font-medium rounded-full lowercase tracking-wide">
                    alert
                  </span>
                ) : (
                  <span className="inline-flex px-3 py-1 bg-white border border-slate-200 text-slate-600 text-[11px] font-medium rounded-full lowercase tracking-wide">
                    operational
                  </span>
                )}
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default AllFactoriesMap;