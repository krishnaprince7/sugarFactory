import React from 'react';
import { FiSettings, FiCamera, FiActivity } from 'react-icons/fi';

const Cameras = () => {
  // Data array for the cameras list
  const camerasData = [
    { id: 1, name: 'Gross Platform - Cam 1', status: 'active', factory: 'Factory 1', uptime: '99.8%', lastMaintenance: '2 weeks ago' },
    { id: 2, name: 'Gross Platform - Cam 2', status: 'active', factory: 'Factory 1', uptime: '99.5%', lastMaintenance: '3 weeks ago' },
    { id: 3, name: 'Tare Platform - Cam 1', status: 'active', factory: 'Factory 1', uptime: '99.9%', lastMaintenance: '1 week ago' },
    { id: 4, name: 'Gross Platform - Cam 1', status: 'active', factory: 'Factory 2', uptime: '98.7%', lastMaintenance: '4 weeks ago' },
    { id: 5, name: 'Tare Platform - Cam 1', status: 'maintenance', factory: 'Factory 2', uptime: '97.2%', lastMaintenance: 'Today' },
    { id: 6, name: 'Gross Platform - Cam 1', status: 'active', factory: 'Factory 3', uptime: '99.6%', lastMaintenance: '2 weeks ago' },
  ];

  return (
    <div className="flex flex-col w-full bg-white border border-gray-200 shadow-sm rounded-xl p-6">
      
      {/* ================= Header Section ================= */}
      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-6">
        <h2 className="text-xl font-bold text-[#1A2A44]">Camera Configuration & Health</h2>
        
        <button className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors shadow-sm">
          <FiSettings className="w-4 h-4" />
          Bulk Configure
        </button>
      </div>

      {/* ================= Cameras List ================= */}
      <div className="flex flex-col gap-3">
        {camerasData.map((cam) => (
          <div 
            key={cam.id} 
            className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-white border border-gray-200 rounded-lg hover:border-[#1A4B9C] hover:shadow-sm transition-all gap-4 group"
          >
            
            {/* Left Side: Icon & Details */}
            <div className="flex items-start gap-4">
              
              {/* Camera Icon Wrapper */}
              <div className={`p-2.5 rounded-lg mt-0.5 ${
                cam.status === 'active' 
                  ? 'bg-green-50 text-green-600' 
                  : 'bg-orange-50 text-orange-500'
              }`}>
                <FiCamera className="w-5 h-5" />
              </div>

              {/* Details */}
              <div className="flex flex-col gap-1">
                {/* Title and Badge */}
                <div className="flex items-center gap-3">
                  <span className="text-[15px] font-bold text-gray-900">{cam.name}</span>
                  <span className={`px-2.5 py-0.5 text-[11px] font-bold rounded-full capitalize ${
                    cam.status === 'active' 
                      ? 'bg-[#1A4B9C] text-white' 
                      : 'bg-[#E2EAF4] text-[#4A72B2]'
                  }`}>
                    {cam.status}
                  </span>
                </div>

                {/* Factory Name */}
                <span className="text-sm text-gray-500 mb-1">{cam.factory}</span>

                {/* Stats (Uptime & Maintenance) */}
                <div className="flex items-center gap-4 text-xs font-medium text-gray-400">
                  <div className="flex items-center gap-1.5">
                    <FiActivity className="w-3.5 h-3.5 text-green-500" />
                    <span>Uptime: <span className="text-gray-500">{cam.uptime}</span></span>
                  </div>
                  <span>Last maintenance: <span className="text-gray-500">{cam.lastMaintenance}</span></span>
                </div>
              </div>
            </div>

            {/* Right Side: Action Buttons */}
            <div className="flex items-center gap-3 md:ml-auto">
              <button className="px-4 py-1.5 text-sm font-semibold text-gray-700 bg-white border border-gray-200 rounded-md hover:bg-gray-50 transition-colors">
                Configure
              </button>
              <button className="px-4 py-1.5 text-sm font-semibold text-gray-700 bg-white border border-gray-200 rounded-md hover:bg-gray-50 transition-colors">
                Test
              </button>
            </div>

          </div>
        ))}
      </div>

      {/* ================= Camera Health Summary Box ================= */}
      <div className="mt-6 bg-[#F8FAFC] border border-gray-100 rounded-xl p-5">
        <h3 className="text-[15px] font-bold text-gray-800 mb-4">Camera Health Summary</h3>
        
        <div className="flex flex-wrap items-center gap-16 md:gap-32">
          {/* Total Cameras */}
          <div className="flex flex-col gap-1">
            <span className="text-xs font-medium text-gray-500">Total Cameras</span>
            <span className="text-2xl font-bold text-gray-900">184</span>
          </div>

          {/* Active */}
          <div className="flex flex-col gap-1">
            <span className="text-xs font-medium text-gray-500">Active</span>
            <span className="text-2xl font-bold text-green-500">180</span>
          </div>

          {/* Maintenance */}
          <div className="flex flex-col gap-1">
            <span className="text-xs font-medium text-gray-500">Maintenance</span>
            <span className="text-2xl font-bold text-orange-400">4</span>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Cameras;