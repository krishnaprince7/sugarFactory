import React, { useState } from 'react';
import { FiSave, FiDownload, FiUpload } from 'react-icons/fi';

const System = () => {
  // Toggle states based on your screenshot
  const [autoReview, setAutoReview] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  // Reusable Custom Toggle Component
  const ToggleSwitch = ({ enabled, onToggle }) => (
    <button
      type="button"
      onClick={onToggle}
      className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
        enabled ? 'bg-[#1A4B9C]' : 'bg-gray-200'
      }`}
    >
      <span
        className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
          enabled ? 'translate-x-5' : 'translate-x-0'
        }`}
      />
    </button>
  );

  return (
    <div className="flex flex-col gap-6 w-full">
      
      {/* ================= 1. General System Configuration ================= */}
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
        
        {/* Header & Save Button */}
        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-6">
          <h2 className="text-xl font-bold text-[#1A2A44]">General System Configuration</h2>
          <button className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold text-white transition-colors bg-[#1A4B9C] rounded-lg hover:bg-blue-800 shadow-sm">
            <FiSave className="w-4 h-4" />
            Save Settings
          </button>
        </div>

        {/* Inputs Section */}
        <div className="flex flex-col gap-5 max-w-3xl">
          
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-gray-800">Session Timeout (minutes)</label>
            <input 
              type="number" 
              defaultValue="30"
              className="w-full p-2.5 text-sm bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-gray-700"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-gray-800">Data Retention Period (days)</label>
            <input 
              type="number" 
              defaultValue="90"
              className="w-full p-2.5 text-sm bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-gray-700"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-gray-800">AI Detection Confidence Threshold (%)</label>
            <input 
              type="number" 
              defaultValue="85"
              className="w-full p-2.5 text-sm bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-gray-700"
            />
          </div>

          {/* Toggles */}
          <div className="flex flex-col gap-3 mt-2">
            
            {/* Automatic Review Toggle */}
            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors">
              <div className="flex flex-col gap-1 pr-4">
                <span className="text-sm font-semibold text-gray-900">Automatic Review</span>
                <span className="text-xs text-gray-500">Auto-mark low-confidence detections as false positive</span>
              </div>
              <ToggleSwitch enabled={autoReview} onToggle={() => setAutoReview(!autoReview)} />
            </div>

            {/* Dark Mode Toggle */}
            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors">
              <div className="flex flex-col gap-1 pr-4">
                <span className="text-sm font-semibold text-gray-900">Dark Mode</span>
                <span className="text-xs text-gray-500">Enable dark theme for all users</span>
              </div>
              <ToggleSwitch enabled={darkMode} onToggle={() => setDarkMode(!darkMode)} />
            </div>

          </div>

        </div>
      </div>

      {/* ================= 2. Data Management ================= */}
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
        <h2 className="text-xl font-bold text-[#1A2A44] mb-6">Data Management</h2>
        
        <div className="flex flex-col gap-4">
          
          {/* Export Row */}
          <div className="flex flex-col sm:flex-row justify-between sm:items-center p-4 border border-gray-200 rounded-lg gap-4">
            <div className="flex flex-col gap-1">
              <span className="text-sm font-semibold text-gray-900">Export System Data</span>
              <span className="text-xs text-gray-500">Download all system data and configurations</span>
            </div>
            <button className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors whitespace-nowrap">
              <FiDownload className="w-4 h-4" />
              Export
            </button>
          </div>

          {/* Import Row */}
          <div className="flex flex-col sm:flex-row justify-between sm:items-center p-4 border border-gray-200 rounded-lg gap-4">
            <div className="flex flex-col gap-1">
              <span className="text-sm font-semibold text-gray-900">Import Configuration</span>
              <span className="text-xs text-gray-500">Import settings from backup file</span>
            </div>
            <button className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors whitespace-nowrap">
              <FiUpload className="w-4 h-4" />
              Import
            </button>
          </div>

          {/* Clear Data Row (Danger Zone) */}
          <div className="flex flex-col sm:flex-row justify-between sm:items-center p-4 border border-red-200 bg-red-50/30 rounded-lg gap-4">
            <div className="flex flex-col gap-1">
              <span className="text-sm font-semibold text-red-500">Clear All Data</span>
              <span className="text-xs text-gray-500">Permanently delete all historical data (irreversible)</span>
            </div>
            <button className="flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-red-500 rounded-lg hover:bg-red-600 transition-colors whitespace-nowrap shadow-sm">
              Clear Data
            </button>
          </div>

        </div>
      </div>

      {/* ================= 3. System Information ================= */}
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 mb-8">
        <h2 className="text-xl font-bold text-[#1A2A44] mb-6">System Information</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          
          <div className="flex flex-col gap-1 p-4 bg-[#F1F5F9] rounded-lg">
            <span className="text-xs font-medium text-gray-500">System Version</span>
            <span className="text-[15px] font-bold text-gray-900">v2.4.1</span>
          </div>

          <div className="flex flex-col gap-1 p-4 bg-[#F1F5F9] rounded-lg">
            <span className="text-xs font-medium text-gray-500">Last Update</span>
            <span className="text-[15px] font-bold text-gray-900">15 Jan 2025</span>
          </div>

          <div className="flex flex-col gap-1 p-4 bg-[#F1F5F9] rounded-lg">
            <span className="text-xs font-medium text-gray-500">AI Model Version</span>
            <span className="text-[15px] font-bold text-gray-900">YOLO v8.2</span>
          </div>

          <div className="flex flex-col gap-1 p-4 bg-[#F1F5F9] rounded-lg">
            <span className="text-xs font-medium text-gray-500">Database Size</span>
            <span className="text-[15px] font-bold text-gray-900">124.5 GB</span>
          </div>

        </div>
      </div>

    </div>
  );
};

export default System;