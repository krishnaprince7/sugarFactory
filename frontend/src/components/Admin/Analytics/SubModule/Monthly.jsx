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

const monthlyData = [
  { name: 'Jul', incidents: 1150, fraud: 800, valueSaved: 8000000 },
  { name: 'Aug', incidents: 1200, fraud: 850, valueSaved: 8500000 },
  { name: 'Sep', incidents: 1076, fraud: 753, valueSaved: 7500000 },
  { name: 'Oct', incidents: 1350, fraud: 900, valueSaved: 9500000 },
  { name: 'Nov', incidents: 1300, fraud: 880, valueSaved: 9000000 },
  { name: 'Dec', incidents: 1200, fraud: 820, valueSaved: 8500000 },
  { name: 'Jan', incidents: 1250, fraud: 860, valueSaved: 8800000 },
];

const CustomTooltipChart1 = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 rounded-lg shadow-lg border border-slate-200">
        <p className="text-slate-600 text-sm mb-2">{label}</p>
        <p className="text-[#1d4ed8] text-sm mb-1">
          Total Incidents : {payload[0].value}
        </p>
        <p className="text-[#ef4444] text-sm">
          Verified Fraud : {payload[1].value}
        </p>
      </div>
    );
  }
  return null;
};

const CustomTooltipChart2 = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 rounded-lg shadow-lg border border-slate-200">
        <p className="text-slate-600 text-sm mb-2">{label}</p>
        <p className="text-[#16a34a] text-sm">
          Value Saved : ₹{payload[0].value.toLocaleString('en-IN')}
        </p>
      </div>
    );
  }
  return null;
};

const Monthly = () => {
  return (
    <div className="w-full flex flex-col gap-6 animate-in fade-in duration-300">
      
      <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
        <h3 className="text-xl font-bold text-slate-800 mb-8">Monthly Incident & Fraud Trends</h3>
        
        <div className="w-full h-[350px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={monthlyData}
              margin={{ top: 10, right: 10, left: -10, bottom: 0 }}
              barGap={4} 
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
              
              <XAxis 
                dataKey="name" 
                axisLine={true} 
                tickLine={false} 
                tick={{ fill: '#64748b', fontSize: 13 }}
                dy={10} 
              />
              
              <YAxis 
                axisLine={true} 
                tickLine={false} 
                tick={{ fill: '#64748b', fontSize: 13 }}
                ticks={[0, 350, 700, 1050, 1400]} 
              />
              
              <Tooltip 
                content={<CustomTooltipChart1 />} 
                cursor={{ fill: '#e2e8f0', opacity: 0.6 }} 
              />
              
              <Legend 
                verticalAlign="bottom" 
                height={36} 
                iconType="square"
                wrapperStyle={{ paddingTop: '20px' }}
                formatter={(value) => <span className="text-sm font-medium text-slate-600 ml-1 mr-4">{value}</span>}
              />
              
              <Bar 
                dataKey="incidents" 
                name="Total Incidents" 
                fill="#1d4ed8" 
                barSize={80}
                radius={[2, 2, 0, 0]}
                isAnimationActive={true}
                animationDuration={1200}
              />
              
              <Bar 
                dataKey="fraud" 
                name="Verified Fraud" 
                fill="#ef4444" 
                barSize={80}
                radius={[2, 2, 0, 0]}
                isAnimationActive={true}
                animationDuration={1200}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
        <h3 className="text-xl font-bold text-slate-800 mb-8">Estimated Fraud Prevention Value (₹)</h3>
        
        <div className="w-full h-[350px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={monthlyData}
              margin={{ top: 10, right: 10, left: 20, bottom: 0 }} 
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
              
              <XAxis 
                dataKey="name" 
                axisLine={true} 
                tickLine={false} 
                tick={{ fill: '#64748b', fontSize: 13 }}
                dy={10} 
              />
              
              <YAxis 
                axisLine={true} 
                tickLine={false} 
                tick={{ fill: '#64748b', fontSize: 13 }}
                ticks={[0, 2500000, 5000000, 7500000, 10000000]} 
                width={80} 
              />
              
              <Tooltip 
                content={<CustomTooltipChart2 />} 
                cursor={{ fill: '#e2e8f0', opacity: 0.6 }}
              />
              
              <Legend 
                verticalAlign="bottom" 
                height={36} 
                iconType="square"
                wrapperStyle={{ paddingTop: '20px' }}
                formatter={(value) => <span className="text-sm font-medium text-slate-600 ml-1 mr-4">{value}</span>}
              />
              
              <Bar 
                dataKey="valueSaved" 
                name="Value Saved" 
                fill="#16a34a" 
                barSize={150} 
                radius={[2, 2, 0, 0]}
                isAnimationActive={true}
                animationDuration={1200} 
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

    </div>
  );
};

export default Monthly;