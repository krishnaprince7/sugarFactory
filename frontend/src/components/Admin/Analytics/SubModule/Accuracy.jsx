import React from 'react';
import { 
  PieChart, 
  Pie, 
  Cell, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';

// Data exactly matching your screenshot
const verificationData = [
  { name: 'Verified Fraud', value: 70 },
  { name: 'False Positive', value: 30 },
];

const fraudTypeData = [
  { name: 'Double Gross', value: 28 },
  { name: 'Double Tare', value: 22 },
  { name: 'Human on Seat', value: 36 },
  { name: 'Human on Platform', value: 11 },
  { name: 'Front Wheel Cross', value: 3 },
  { name: 'Vehicle Mismatch', value: 1 },
];

// Colors mapped to exactly match the image
const COLORS_VERIFICATION = ['#ef4444', '#f59e0b']; // Red, Yellow/Orange
const COLORS_FRAUD_TYPE = ['#1d4ed8', '#0ea5e9', '#22c55e', '#f59e0b', '#ef4444', '#06b6d4']; // Blue, Light Blue, Green, Orange, Red, Teal

// Custom Label for Pie Charts to show text outside the slices with matching colors
const renderCustomizedLabel = (props) => {
  const { cx, cy, midAngle, outerRadius, fill, payload, value } = props;
  const RADIAN = Math.PI / 180;
  // Push the text slightly outside the pie
  const radius = outerRadius + 20; 
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text 
      x={x} 
      y={y} 
      fill={fill} // Text color matches the slice color
      textAnchor={x > cx ? 'start' : 'end'} 
      dominantBaseline="central" 
      fontSize={12}
      fontWeight={500}
    >
      {`${payload.name} ${value}%`}
    </text>
  );
};

const Accuracy = () => {
  return (
    <div className="w-full bg-slate-50/50 animate-in fade-in duration-300">
      
      {/* 2-Column Grid for the Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Card 1: Verification Status */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm flex flex-col min-h-[400px]">
          <h3 className="text-lg font-bold text-slate-800 mb-6">Verification Status</h3>
          <div className="flex-1 w-full h-full min-h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={verificationData}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  labelLine={false} // Hiding default line to use our clean custom label
                  label={renderCustomizedLabel}
                  isAnimationActive={true} // Animation Enable kiya gaya hai
                  animationDuration={1200} // Ghumne ki speed (1.2 seconds)
                  animationBegin={100}
                >
                  {verificationData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS_VERIFICATION[index % COLORS_VERIFICATION.length]} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  formatter={(value) => `${value}%`}
                />
                <Legend 
                  verticalAlign="bottom" 
                  height={36} 
                  iconType="square"
                  wrapperStyle={{ paddingTop: '20px', fontSize: '13px', color: '#64748b' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Card 2: Fraud Type Breakdown */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm flex flex-col min-h-[400px]">
          <h3 className="text-lg font-bold text-slate-800 mb-6">Fraud Type Breakdown</h3>
          <div className="flex-1 w-full h-full min-h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={fraudTypeData}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  labelLine={false}
                  label={renderCustomizedLabel}
                  isAnimationActive={true} // Animation Enable kiya gaya hai
                  animationDuration={1500} // Ghumne ki speed (1.5 seconds)
                  animationBegin={200}
                >
                  {fraudTypeData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS_FRAUD_TYPE[index % COLORS_FRAUD_TYPE.length]} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  formatter={(value) => `${value}%`}
                />
                <Legend 
                  verticalAlign="bottom" 
                  height={48} 
                  iconType="square"
                  wrapperStyle={{ paddingTop: '20px', fontSize: '12px', color: '#64748b' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Accuracy;