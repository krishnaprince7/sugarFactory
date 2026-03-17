import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';

const factoryData = [
  { name: 'F1', incidents: 65, accuracy: 92 },
  { name: 'F2', incidents: 48, accuracy: 95 },
  { name: 'F3', incidents: 81, accuracy: 88 },
  { name: 'F4', incidents: 40, accuracy: 96 },
  { name: 'F5', incidents: 73, accuracy: 90 },
  { name: 'F6', incidents: 55, accuracy: 94 },
  { name: 'F7', incidents: 68, accuracy: 91 },
  { name: 'F8', incidents: 38, accuracy: 97 },
];

const FactoriesPage = () => {
  return (
    <div className="w-full bg-white border border-slate-200 rounded-xl p-6 shadow-sm animate-in fade-in duration-300">
      
      <h3 className="text-xl font-bold text-slate-800 mb-8">Factory Performance Comparison</h3>
      
      <div className="w-full h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={factoryData}
            margin={{ top: 10, right: 10, left: -20, bottom: 20 }}
            barGap={0} 
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
            
            <XAxis 
              dataKey="name" 
              axisLine={true} 
              tickLine={false} 
              tick={{ fill: '#94a3b8', fontSize: 13 }}
              dy={10}
            />
            
            <YAxis 
              yAxisId="left" 
              orientation="left" 
              stroke="#1d4ed8" 
              axisLine={{ strokeWidth: 1.5 }} 
              tickLine={false}
              ticks={[0, 25, 50, 75, 100]}
              tick={{ fill: '#94a3b8', fontSize: 12 }}
            />
            
            <YAxis 
              yAxisId="right" 
              orientation="right" 
              stroke="#16a34a" 
              axisLine={{ strokeWidth: 1.5 }} 
              tickLine={false}
              ticks={[0, 25, 50, 75, 100]}
              tick={{ fill: '#94a3b8', fontSize: 12 }}
            />
            
            <Tooltip 
              cursor={{ fill: 'rgba(0,0,0,0.04)' }} 
              contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
            />
            
            <Legend 
              verticalAlign="bottom" 
              height={36} 
              iconType="square"
              wrapperStyle={{ paddingTop: '20px' }}
              formatter={(value) => <span className="text-sm font-medium text-slate-600 ml-1 mr-4">{value}</span>} // Custom formatter for style
            />
            
            <Bar 
              yAxisId="left" 
              dataKey="incidents" 
              name="Total Incidents" 
              fill="#1d4ed8" 
              radius={[2, 2, 0, 0]} 
              barSize={55} 
            />
            
            <Bar 
              yAxisId="right" 
              dataKey="accuracy" 
              name="Accuracy %" 
              fill="#16a34a" 
              radius={[2, 2, 0, 0]} 
              barSize={55} 
            />
            
          </BarChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
};

export default FactoriesPage;