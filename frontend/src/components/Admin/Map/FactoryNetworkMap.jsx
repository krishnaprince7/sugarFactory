import React, { useState } from 'react';
import { Navigation, MapPin, Camera } from 'lucide-react';
import AllFactoriesMap from './AllFactoriesMap';

const FactoryMapComponent = () => {
  // Factory Data
  const factories = [
    { id: 1, name: 'Shahjahanpur Sugar Mill', alerts: 12, status: 'operational' },
    { id: 2, name: 'Bareilly Co-op Mill', alerts: 8, status: 'operational' },
    { id: 3, name: 'Pilibhit Factory', alerts: 18, status: 'operational' },
    { id: 4, name: 'Lakhimpur Mill', alerts: 5, status: 'operational' },
    { id: 5, name: 'Sitapur Sugar Factory', alerts: 9, status: 'operational' },
    { id: 6, name: 'Hardoi Co-op Mill', alerts: 6, status: 'operational' },
    { id: 7, name: 'Lucknow Sugar Mill', alerts: 11, status: 'operational' },
    { id: 8, name: 'Unnao Factory', alerts: 7, status: 'operational' },
    { id: 9, name: 'Rae Bareli Mill', alerts: 10, status: 'operational' },
    { id: 10, name: 'Kanpur Co-op Sugar', alerts: 15, status: 'operational' },
    { id: 11, name: 'Farrukhabad Factory', alerts: 4, status: 'alert' },
    { id: 12, name: 'Etawah Sugar Mill', alerts: 13, status: 'operational' },
    { id: 13, name: 'Mainpuri Co-op', alerts: 8, status: 'operational' },
    { id: 14, name: 'Firozabad Mill', alerts: 6, status: 'operational' },
    { id: 15, name: 'Agra Sugar Factory', alerts: 9, status: 'operational' },
    { id: 16, name: 'Mathura Co-op Mill', alerts: 7, status: 'operational' },
    { id: 17, name: 'Aligarh Factory', alerts: 11, status: 'alert' },
    { id: 18, name: 'Bulandshahr Mill', alerts: 5, status: 'operational' },
    { id: 19, name: 'Moradabad Sugar', alerts: 12, status: 'operational' },
    { id: 20, name: 'Rampur Co-op', alerts: 16, status: 'operational' },
    { id: 21, name: 'Bijnor Factory', alerts: 8, status: 'operational' },
    { id: 22, name: 'Meerut Sugar Mill', alerts: 10, status: 'alert' },
    { id: 23, name: 'Muzaffarnagar Co-op', alerts: 14, status: 'operational' },
  ];

  const [selectedFactory, setSelectedFactory] = useState(null);

  return (
    <>
    <div className="w-full font-sans text-slate-900 bg-white mb-[25px]">
      <div className="w-full">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Factory Network Map</h1>
            <p className="text-sm text-slate-500 mt-1">
              Real-time status of all 23 sugar factories across Uttar Pradesh
            </p>
          </div>
          <button className="flex items-center justify-center gap-2 px-4 py-2 bg-white border border-slate-300 text-slate-700 text-sm font-medium rounded-md hover:bg-slate-50 transition-colors shadow-sm w-full sm:w-auto">
            <Navigation size={16} />
            Recenter Map
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          
          <div className="lg:col-span-3 bg-[#F8FAFC] rounded-xl border border-slate-200 relative min-h-[500px] flex items-center justify-center p-8 overflow-hidden">
            
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-x-12 gap-y-16 w-full max-w-5xl">
              {factories.map((factory) => (
                <div 
                key={factory.id} 
                  className="flex justify-center group cursor-pointer"
                  onClick={() => setSelectedFactory(factory)}
                  title={factory.name}
                >
                  <div className="relative inline-flex transform transition-transform group-hover:scale-110">
                    <MapPin 
                      size={28} 
                      className={factory.status === 'alert' ? 'text-amber-400' : 'text-emerald-500'} 
                    />
                    <div className={`absolute -top-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-white ${factory.status === 'alert' ? 'bg-amber-400' : 'bg-emerald-500'}`} />
                  </div>
                </div>
              ))}
            </div>

            <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm p-3 rounded-lg border border-slate-200 shadow-sm text-xs font-medium text-slate-600 flex flex-col gap-2 z-10">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
                <span>Operational (20)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                <span>Alert (3)</span>
              </div>
              <div className="flex items-center gap-2 text-slate-500 pt-1 border-t border-slate-100 mt-1">
                <Camera size={14} />
                <span>184 Total Cameras</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1 bg-white rounded-xl border border-slate-200 flex flex-col min-h-[300px] lg:min-h-[500px]">
            {selectedFactory ? (
              <div className="p-6 h-full flex flex-col">
                <h3 className="text-lg font-bold text-slate-800 mb-2">{selectedFactory.name}</h3>
                <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-sm font-medium w-fit ${selectedFactory.status === 'alert' ? 'bg-amber-50 text-amber-700 border border-amber-200' : 'bg-emerald-50 text-emerald-700 border border-emerald-200'}`}>
                  {selectedFactory.status === 'alert' ? 'Alert Active' : 'Operational'}
                </div>
                
                <div className="mt-8 flex-1">
                  <div className="bg-slate-50 p-4 rounded-lg border border-slate-100 mb-4">
                    <p className="text-sm text-slate-500 mb-1">Today's Alerts</p>
                    <p className="text-3xl font-bold text-slate-800">{selectedFactory.alerts}</p>
                  </div>
                </div>

                <button className="w-full mt-auto py-2.5 bg-white hover:bg-slate-50 border border-slate-300 rounded-md text-sm font-medium text-slate-700 transition-colors shadow-sm">
                  View Full Dashboard
                </button>
              </div>
            ) : (
              /* Empty State */
              <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center mb-4 border border-slate-100">
                  <MapPin size={32} className="text-slate-400" />
                </div>
                <p className="text-sm text-slate-500 leading-relaxed max-w-[200px]">
                  Select a factory pin on the map to view details
                </p>
              </div>
            )}
          </div>
          
        </div>
      </div>
    </div>

    <AllFactoriesMap/>

                </>
  );
};

export default FactoryMapComponent;