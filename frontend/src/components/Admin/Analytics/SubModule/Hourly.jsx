import React from 'react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';

// Data estimated exactly from the curve in your screenshot
const hourlyData = [
  { time: '00:00', incidents: 5 },
  { time: '02:00', incidents: 3 },
  { time: '04:00', incidents: 2 },
  { time: '06:00', incidents: 7 },
  { time: '08:00', incidents: 15 }, // Explicit tooltip data point from image
  { time: '10:00', incidents: 23 },
  { time: '12:00', incidents: 27 },
  { time: '14:00', incidents: 31 }, // Peak
  { time: '16:00', incidents: 26 },
  { time: '18:00', incidents: 18 },
  { time: '20:00', incidents: 11 },
  { time: '22:00', incidents: 7 },
];

// Custom Tooltip exactly matching the image's tooltip style
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white px-3 py-2 rounded-md shadow-md border border-slate-100">
        <p className="text-slate-500 text-xs mb-1">{label}</p>
        <p className="text-[#0ea5e9] text-sm font-medium">
          incidents : {payload[0].value}
        </p>
      </div>
    );
  }
  return null;
};

const Hourly = () => {
  return (
    <div className="w-full bg-white border border-slate-200 rounded-xl p-6 shadow-sm animate-in fade-in duration-300">
      
      {/* Chart Header */}
      <h3 className="text-xl font-bold text-slate-800 mb-8">Hourly Incident Distribution</h3>
      
      {/* Chart Container */}
      <div className="w-full h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={hourlyData}
            margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
          >
            {/* Gradient definition for the area fill */}
            <defs>
              <linearGradient id="colorIncidents" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#22d3ee" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#22d3ee" stopOpacity={0.1}/>
              </linearGradient>
            </defs>
            
            {/* Both vertical and horizontal dotted grid lines as per image */}
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            
            {/* X-Axis for Timestamps */}
            <XAxis 
              dataKey="time" 
              axisLine={true} 
              tickLine={false} 
              tick={{ fill: '#94a3b8', fontSize: 12 }}
              dy={10} 
            />
            
            {/* Y-Axis with exact ticks from image: 0, 8, 16, 24, 32 */}
            <YAxis 
              axisLine={true} 
              tickLine={false} 
              ticks={[0, 8, 16, 24, 32]}
              tick={{ fill: '#94a3b8', fontSize: 12 }}
            />
            
            {/* Custom Tooltip */}
            <Tooltip 
              content={<CustomTooltip />} 
              cursor={{ stroke: '#94a3b8', strokeWidth: 1, strokeDasharray: '3 3' }} 
            />
            
           
            <Area 
              type="monotone" 
              dataKey="incidents" 
              stroke="#0ea5e9" 
              strokeWidth={2}
              fillOpacity={1} 
              fill="url(#colorIncidents)" 
              activeDot={{ r: 5, fill: '#0ea5e9', stroke: '#fff', strokeWidth: 2 }} 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
};

export default Hourly;