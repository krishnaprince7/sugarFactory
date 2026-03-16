import React, { useState } from 'react';
import { FiSave } from 'react-icons/fi';
import Users from "./SubModules/Users"
import Alerts from "./SubModules/Alerts"
import Cameras from "./SubModules/Cameras"
import System from "./SubModules/System"

const Setting = () => {
  // State to manage active tab (Default is 'System' as per screenshot)
  const [activeTab, setActiveTab] = useState('users');

  return (
    <div className="w-full max-w-7xl mx-auto">
      
      {/* ================= Header Section ================= */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">System Settings</h1>
        <p className="mt-1 text-sm text-gray-500">
          Configure users, alerts, cameras, and system parameters
        </p>
      </div>

      {/* ================= Tabs Navigation ================= */}
      <div className="flex items-center w-full bg-[#F1F5F9] ">
        <div className="flex w-full md:w-[600px] p-1 space-x-1 bg-[#F1F5F9] rounded-lg">
          
          <button 
            onClick={() => setActiveTab('users')}
            className={`flex-1 py-2 text-sm rounded-md transition-all ${
              activeTab === 'users' 
                ? 'bg-white text-gray-900 font-semibold shadow-sm' 
                : 'text-gray-500 font-semibold hover:text-gray-700'
            }`}
          >
            Users
          </button>
          
          <button 
            onClick={() => setActiveTab('alerts')}
            className={`flex-1 py-2 text-sm rounded-md transition-all ${
              activeTab === 'alerts' 
                ? 'bg-white text-gray-900 font-semibold shadow-sm' 
                : 'text-gray-500 font-semibold hover:text-gray-700'
            }`}
          >
            Alerts
          </button>
          
          <button 
            onClick={() => setActiveTab('cameras')}
            className={`flex-1 py-2 text-sm rounded-md transition-all ${
              activeTab === 'cameras' 
                ? 'bg-white text-gray-900 font-semibold shadow-sm' 
                : 'text-gray-500 font-semibold hover:text-gray-700'
            }`}
          >
            Cameras
          </button>
          
          <button 
            onClick={() => setActiveTab('system')}
            className={`flex-1 py-2 text-sm rounded-md transition-all ${
              activeTab === 'system' 
                ? 'bg-white text-gray-900 font-semibold shadow-sm' 
                : 'text-gray-500 font-semibold hover:text-gray-700'
            }`}
          >
            System
          </button>
          
        </div>
      </div>

      {/* ================= Tab Content Area ================= */}
      <div className="mt-6">
        
        {/* 1. Users Tab Content */}
        {activeTab === 'users' && (
                <Users/>
       
        )}

        {/* 2. Alerts Tab Content */}
        {activeTab === 'alerts' && (
           <Alerts/>
        )}

        {/* 3. Cameras Tab Content */}
        {activeTab === 'cameras' && (
            <Cameras/>
        )}

        {/* 4. System Tab Content (Exact UI from your screenshot) */}
        {activeTab === 'system' && (
            <System/>
        )}

      </div>

    </div>
  );
};

export default Setting;