import React from 'react';
import { 
  FiClock, 
  FiUser, 
  FiMessageSquare, 
  FiPlay 
} from 'react-icons/fi';

const Incidents = () => {
  // Array to hold the incident data
  const incidentsData = [
    {
      id: 1,
      title: 'Double Gross',
      status: 'under review',
      time: '2024-01-15 14:23:45',
      user: 'Supervisor A',
      vehicle: 'UP 32 AB 1234',
      comments: 2,
    },
    {
      id: 2,
      title: 'Human on Platform',
      status: 'verified fraud',
      time: '2024-01-15 13:45:22',
      user: 'AI Analyst B',
      vehicle: 'UP 32 CD 5678',
      comments: 5,
    },
    {
      id: 3,
      title: 'Vehicle Mismatch',
      status: 'false positive',
      time: '2024-01-15 12:18:09',
      user: 'System Auto-flag', // Default fallback name
      vehicle: 'UP 32 EF 9012',
      comments: 0,
    },
  ];

  // Helper function to set badge colors based on status
  const getBadgeStyle = (status) => {
    switch (status) {
      case 'under review':
        return 'bg-[#EBF2FF] text-[#3662A6]'; // Light blue bg, dark blue text
      case 'verified fraud':
        return 'bg-[#EF4444] text-white'; // Red bg, white text
      case 'false positive':
        return 'bg-white border border-gray-200 text-gray-600'; // Outline style
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <div className="flex flex-col gap-4">
      {incidentsData.map((incident) => (
        <div 
          key={incident.id} 
          className="flex flex-col p-5 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow"
        >
          {/* Top Row: Title & Badge */}
          <div className="flex items-center gap-3 mb-4">
            <h3 className="text-lg font-bold text-gray-900">
              {incident.title}
            </h3>
            <span className={`px-2.5 py-0.5 text-xs font-semibold rounded-full capitalize ${getBadgeStyle(incident.status)}`}>
              {incident.status}
            </span>
          </div>

          {/* Middle Row: Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
            {/* Left Column (Time & User) */}
            <div className="flex flex-col gap-2.5">
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <FiClock className="w-4 h-4" />
                <span>{incident.time}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <FiUser className="w-4 h-4" />
                <span>{incident.user}</span>
              </div>
            </div>

            {/* Right Column (Vehicle & Comments) */}
            <div className="flex flex-col gap-2.5">
              <div className="flex items-center text-sm text-gray-500">
                <span className="font-medium mr-1">Vehicle:</span>
                <span className="text-gray-800 tracking-wide font-mono">{incident.vehicle}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <FiMessageSquare className="w-4 h-4" />
                <span>{incident.comments} comments</span>
              </div>
            </div>
          </div>

          {/* Bottom Row: Action Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <button className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-md hover:bg-gray-50 transition-colors">
              <FiPlay className="w-3.5 h-3.5" />
              View Clip (30s)
            </button>
            <button className="px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-md hover:bg-gray-50 transition-colors">
              Full Timeline
            </button>
            <button className="px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-md hover:bg-gray-50 transition-colors">
              Add Comment
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Incidents;