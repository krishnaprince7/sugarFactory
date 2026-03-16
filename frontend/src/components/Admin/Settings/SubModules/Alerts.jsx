import React, { useState } from 'react';
import { FiSave } from 'react-icons/fi';

const Alerts = () => {
  // State for Alert Rules Configuration
  const [alertRules, setAlertRules] = useState([
    { id: 1, title: 'Double Gross Detection', level: 'high', desc: 'Same tractor-trolley detected twice at Gross platform', enabled: true },
    { id: 2, title: 'Double Tare Detection', level: 'high', desc: 'Same tractor-trolley detected twice at Tare platform', enabled: true },
    { id: 3, title: 'Human on Driving Seat (Gross)', level: 'critical', desc: 'Human detected sitting on driving seat at Gross', enabled: true },
    { id: 4, title: 'Human on Gross Platform', level: 'critical', desc: 'Human detected standing on Gross weighment platform', enabled: true },
    { id: 5, title: 'Front Wheel Crossing (Tare)', level: 'medium', desc: 'Front wheel crosses the designated line at Tare', enabled: true },
    { id: 6, title: 'Gross-Tare Vehicle Mismatch', level: 'high', desc: 'Different vehicles detected between Gross and Tare', enabled: true },
  ]);

  // State for Notification Settings
  const [notifications, setNotifications] = useState([
    { id: 1, title: 'Email Notifications', desc: 'Receive daily email digest of all alerts', enabled: true },
    { id: 2, title: 'Push Notifications', desc: 'Real-time push notifications on mobile app', enabled: true },
    { id: 3, title: 'SMS Alerts', desc: 'Critical alerts via SMS', enabled: false }, // Starts OFF as per screenshot
  ]);

  // Toggle handler for Alert Rules
  const handleAlertToggle = (id) => {
    setAlertRules(prevRules => 
      prevRules.map(rule => rule.id === id ? { ...rule, enabled: !rule.enabled } : rule)
    );
  };

  // Toggle handler for Notifications
  const handleNotificationToggle = (id) => {
    setNotifications(prevNotifs => 
      prevNotifs.map(notif => notif.id === id ? { ...notif, enabled: !notif.enabled } : notif)
    );
  };

  // Helper function for Badge Colors
  const getBadgeStyle = (level) => {
    switch (level) {
      case 'critical':
        return 'bg-pink-100 text-red-500'; // Light pink bg, red text
      case 'high':
        return 'bg-orange-100 text-orange-500'; // Light orange bg, orange text
      case 'medium':
        return 'bg-cyan-100 text-cyan-600'; // Light blue/cyan bg, blue text
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

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
    <div className="flex flex-col gap-6">
      
      {/* ================= 1. Alert Rules Configuration ================= */}
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-6">
          <h2 className="text-xl font-bold text-[#1A2A44]">Alert Rules Configuration</h2>
          <button className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold text-white transition-colors bg-[#1A4B9C] rounded-lg hover:bg-blue-800 shadow-sm">
            <FiSave className="w-4 h-4" />
            Save Changes
          </button>
        </div>

        {/* Alert Rules List */}
        <div className="flex flex-col border border-gray-100 rounded-lg">
          {alertRules.map((rule, index) => (
            <div 
              key={rule.id} 
              className={`flex items-center justify-between p-4 ${index !== alertRules.length - 1 ? 'border-b border-gray-100' : ''}`}
            >
              <div className="flex flex-col gap-1 pr-4">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-semibold text-gray-900">{rule.title}</span>
                  <span className={`px-2 py-0.5 text-[10px] font-bold rounded capitalize ${getBadgeStyle(rule.level)}`}>
                    {rule.level}
                  </span>
                </div>
                <p className="text-xs text-gray-500">{rule.desc}</p>
              </div>
              
              <ToggleSwitch 
                enabled={rule.enabled} 
                onToggle={() => handleAlertToggle(rule.id)} 
              />
            </div>
          ))}
        </div>
      </div>

      {/* ================= 2. Notification Settings ================= */}
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
        
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-xl font-bold text-[#1A2A44]">Notification Settings</h2>
        </div>

        {/* Notifications List */}
        <div className="flex flex-col border border-gray-100 rounded-lg">
          {notifications.map((notif, index) => (
            <div 
              key={notif.id} 
              className={`flex items-center justify-between p-4 ${index !== notifications.length - 1 ? 'border-b border-gray-100' : ''}`}
            >
              <div className="flex flex-col gap-1 pr-4">
                <span className="text-sm font-semibold text-gray-900">{notif.title}</span>
                <p className="text-xs text-gray-500">{notif.desc}</p>
              </div>
              
              <ToggleSwitch 
                enabled={notif.enabled} 
                onToggle={() => handleNotificationToggle(notif.id)} 
              />
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Alerts;