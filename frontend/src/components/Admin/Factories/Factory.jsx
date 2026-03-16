import React, { useState } from 'react';
import { 
  FiActivity, 
  FiDownload, 
  FiAlertTriangle, 
  FiCamera
} from 'react-icons/fi';
import LiveFeed from './SubModules/LiveFeed';
import Incidents from './SubModules/Incidents';
import Analytics from './SubModules/Analytics';

const Factory = () => {
  // State to manage the active tab
  const [activeTab, setActiveTab] = useState('liveFeeds');

  return (
    <div className="w-full">
      
      {/* ================= Header Section ================= */}
      <div className="flex flex-col gap-4 md:flex-row md:items-start justify-between">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-bold text-gray-900">
              Factory 3 - Shahjahanpur
            </h1>
            <span className="flex items-center gap-1.5 px-3 py-1 text-[11px] font-semibold text-white bg-[#1A4B9C] rounded-full">
              <FiActivity className="w-3 h-3" />
              Operational
            </span>
          </div>
          <p className="mt-1 text-sm text-gray-500">
            8 Active Cameras • Last updated: 2 mins ago
          </p>
        </div>

        <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 transition-colors bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 hover:text-gray-900">
          <FiDownload className="w-4 h-4" />
          Export Report
        </button>
      </div>

      {/* ================= Stats Cards ================= */}
      <div className="grid grid-cols-1 gap-4 mt-6 md:grid-cols-4">
        <div className="flex items-center justify-between p-4 bg-white border border-gray-200 shadow-sm rounded-xl">
          <div>
            <p className="mb-1 text-xs font-medium text-gray-500">Today's Alerts</p>
            <p className="text-2xl font-bold text-gray-900">12</p>
          </div>
          <FiAlertTriangle className="w-6 h-6 text-yellow-500" />
        </div>

        <div className="flex items-center justify-between p-4 bg-white border border-gray-200 shadow-sm rounded-xl">
          <div>
            <p className="mb-1 text-xs font-medium text-gray-500">Verified Fraud</p>
            <p className="text-2xl font-bold text-red-500">8</p>
          </div>
          <FiAlertTriangle className="w-6 h-6 text-red-500" />
        </div>

        <div className="flex items-center justify-between p-4 bg-white border border-gray-200 shadow-sm rounded-xl">
          <div>
            <p className="mb-1 text-xs font-medium text-gray-500">False Positives</p>
            <p className="text-2xl font-bold text-green-600">4</p>
          </div>
          <FiAlertTriangle className="w-6 h-6 text-gray-500" />
        </div>

        <div className="flex items-center justify-between p-4 bg-white border border-gray-200 shadow-sm rounded-xl">
          <div>
            <p className="mb-1 text-xs font-medium text-gray-500">Accuracy Rate</p>
            <p className="text-2xl font-bold text-green-600">92.5%</p>
          </div>
          <FiActivity className="w-6 h-6 text-green-600" />
        </div>
      </div>

      {/* ================= Tabs Navigation ================= */}
      <div className="flex items-center mt-6">
        <div className="inline-flex p-1 space-x-1 bg-[#F1F5F9] rounded-lg">
          <button 
            onClick={() => setActiveTab('liveFeeds')}
            className={`flex items-center gap-2 px-4 py-2 text-sm rounded-md transition-all ${
              activeTab === 'liveFeeds' 
                ? 'bg-white text-gray-900 font-semibold shadow-sm' 
                : 'text-gray-500 font-medium hover:text-gray-700'
            }`}
          >
            <FiCamera className="w-4 h-4" />
            Live Feeds
          </button>
          
          <button 
            onClick={() => setActiveTab('incidents')}
            className={`px-4 py-2 text-sm rounded-md transition-all ${
              activeTab === 'incidents' 
                ? 'bg-white text-gray-900 font-semibold shadow-sm' 
                : 'text-gray-500 font-medium hover:text-gray-700'
            }`}
          >
            Incidents
          </button>
          
          <button 
            onClick={() => setActiveTab('analytics')}
            className={`px-4 py-2 text-sm rounded-md transition-all ${
              activeTab === 'analytics' 
                ? 'bg-white text-gray-900 font-semibold shadow-sm' 
                : 'text-gray-500 font-medium hover:text-gray-700'
            }`}
          >
            Analytics
          </button>
        </div>
      </div>

      {/* ================= Tab Content Area ================= */}
      <div className="mt-6    ">
        
        {/* Yahan aap apne components call kar sakte ho */}
        
        {activeTab === 'liveFeeds' && (
          <div>
            {/* <LiveFeedsComponent /> */}
            <LiveFeed/>
          </div>
        )}

        {activeTab === 'incidents' && (
          <div>
            {/* <IncidentsComponent /> */}
            <Incidents/>
          </div>
        )}

        {activeTab === 'analytics' && (
          <div>
            {/* <AnalyticsComponent /> */}
            <Analytics/>
          </div>
        )}

      </div>

    </div>
  );
};

export default Factory;