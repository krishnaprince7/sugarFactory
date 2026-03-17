import React, { useState } from 'react';
import { Calendar, Download, TrendingUp, TrendingDown, Factory, Clock, Target, CalendarDays } from 'lucide-react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';
import Trends from './SubModule/Trends';
import Factories from './SubModule/Factories';
import Hourly from  './SubModule/Hourly'
import Accuracy from './SubModule/Accuracy';
import Monthly from './SubModule/Monthly';


const trendData = [
  { name: 'Week 1', total: 45, verified: 32, falsePos: 12 },
  { name: 'Week 2', total: 52, verified: 38, falsePos: 14 },
  { name: 'Week 3', total: 48, verified: 35, falsePos: 13 },
  { name: 'Week 4', total: 60, verified: 44, falsePos: 18 },
  { name: 'Week 5', total: 55, verified: 40, falsePos: 14 },
  { name: 'Week 6', total: 58, verified: 42, falsePos: 15 },
  { name: 'Week 7', total: 47, verified: 34, falsePos: 11 },
];

const Analytics = () => {
  const [activeTab, setActiveTab] = useState('Trends');

  const tabs = ['Trends', 'Factories', 'Hourly', 'Accuracy', 'Monthly'];

  return (
    <div className="w-full">
      
      
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Analytics & Reports</h1>
          <p className="text-sm text-slate-500 mt-1">
            Comprehensive fraud detection analytics across all factories
          </p>
        </div>
        
        <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
          <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-white border border-slate-300 text-slate-700 text-sm font-medium rounded-md hover:bg-slate-50 transition-colors shadow-sm">
            <Calendar size={16} className="text-slate-500" />
            Date Range
          </button>
          <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-white border border-slate-300 text-slate-700 text-sm font-medium rounded-md hover:bg-slate-50 transition-colors shadow-sm">
            <Download size={16} className="text-slate-500" />
            Export All
          </button>
        </div>
      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between mb-2">
            <p className="text-[13px] font-medium text-slate-500">Total Incidents</p>
            <TrendingUp size={16} className="text-emerald-500" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-slate-800">1,247</h3>
            <p className="text-xs text-emerald-500 mt-1 font-medium">+12.5% from last month</p>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between mb-2">
            <p className="text-[13px] font-medium text-slate-500">Verified Fraud</p>
            <TrendingUp size={16} className="text-red-500" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-slate-800">876</h3>
            <p className="text-xs text-red-500 mt-1 font-medium">70.2% verification rate</p>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between mb-2">
            <p className="text-[13px] font-medium text-slate-500">False Positives</p>
            <TrendingUp size={16} className="text-amber-500" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-slate-800">371</h3>
            <p className="text-xs text-amber-500 mt-1 font-medium">29.8% of total</p>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between mb-2">
            <p className="text-[13px] font-medium text-slate-500">Avg Response Time</p>
            <TrendingDown size={16} className="text-emerald-500" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-slate-800">4.2 min</h3>
            <p className="text-xs text-emerald-500 mt-1 font-medium">-1.3 min improvement</p>
          </div>
        </div>
      </div>

     
      <div className="flex bg-slate-100/80 p-1.5 rounded-lg w-fit overflow-x-auto max-w-full no-scrollbar mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2 text-sm font-medium rounded-md whitespace-nowrap transition-all duration-200 ${
              activeTab === tab
                ? 'bg-white text-slate-800 shadow-sm'
                : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      
      
      
      {activeTab === 'Trends' && (
       <Trends/>
      )}

      
      {activeTab === 'Factories' && (
      <Factories/>
      )}

     
      {activeTab === 'Hourly' && (
       <Hourly/>
      )}

      
      {activeTab === 'Accuracy' && (
       <Accuracy/>
      )}

      
      {activeTab === 'Monthly' && (
       <Monthly/>
      )}
      
    </div>
  );
};

export default Analytics;