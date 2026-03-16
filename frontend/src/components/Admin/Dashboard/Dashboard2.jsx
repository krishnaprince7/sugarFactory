import React from 'react';
import { FiCamera, FiArrowRight } from 'react-icons/fi';
import { MdLocationOn } from 'react-icons/md';
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

// Chart Data matching your screenshot
const chartData = [
  { name: 'Double Gross', total: 12, verified: 8 },
  { name: 'Double Tare', total: 9, verified: 6 },
  { name: 'Human on Seat', total: 15, verified: 11 },
  { name: 'Human on Platform', total: 7, verified: 5 },
  { name: 'Front Wheel', total: 3, verified: 2 },
  { name: 'Vehicle Mismatch', total: 1, verified: 1 },
];

const Dashboard2 = () => {
  // Reusable Wrapper for the 4 main sections to handle hover effects
  const SectionCard = ({ children, title, rightHeader }) => (
    <div className="flex flex-col bg-white border border-gray-200 rounded-xl p-5 shadow-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-900">{title}</h2>
        {rightHeader}
      </div>
      {children}
    </div>
  );

  return (
    <div className="w-full  mt-6">
      
      {/* Grid Layout: 2 Columns (Left is wider) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        <div className="lg:col-span-2 flex flex-col h-full">
          <SectionCard title="Factory Network Status">
            <div className="bg-[#EAF1F8] rounded-xl p-6 relative flex-1 min-h-[435px]">
              
              {/* Factory Grid */}
              <div className="flex flex-wrap gap-4">
                {[
                  { id: 1, name: 'Factory 1', status: 'operational', color: 'bg-blue-800', dot: 'text-green-500' },
                  { id: 2, name: 'Factory 2', status: 'operational', color: 'bg-blue-800', dot: 'text-green-500' },
                  { id: 3, name: 'Factory 3', status: 'alert', color: 'bg-red-500', dot: 'text-orange-500' },
                  { id: 4, name: 'Factory 4', status: 'operational', color: 'bg-blue-800', dot: 'text-green-500' },
                  { id: 5, name: 'Factory 5', status: 'operational', color: 'bg-blue-800', dot: 'text-green-500' },
                ].map((factory) => (
                  <div key={factory.id} className="bg-white rounded-xl shadow-sm w-[110px] h-[110px] flex flex-col items-center justify-center p-2 relative">
                    <div className="relative mb-2">
                      <MdLocationOn className={`w-8 h-8 ${factory.status === 'alert' ? 'text-orange-500' : 'text-green-500'}`} />
                      <div className={`absolute top-0 right-0 w-2.5 h-2.5 rounded-full ${factory.status === 'alert' ? 'bg-orange-500' : 'bg-green-500'} border-2 border-white`} />
                    </div>
                    <span className="text-sm font-semibold text-gray-800">{factory.name}</span>
                    <span className={`text-[10px] font-bold text-white px-2 py-0.5 rounded-full mt-1 ${factory.color} capitalize`}>
                      {factory.status}
                    </span>
                  </div>
                ))}
              </div>

              {/* Legend Bottom Right */}
              <div className="absolute bottom-4 right-4 bg-white rounded-full px-4 py-2 shadow-sm flex items-center gap-4 text-xs font-medium text-gray-600">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-green-500"></span> Operational (20)
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-orange-500"></span> Alert (3)
                </div>
              </div>
            </div>
          </SectionCard>
        </div>

        {/* ================= 2. Recent Alerts ================= */}
        <div className="lg:col-span-1 flex flex-col h-full">
          <SectionCard 
            title="Recent Alerts" 
            rightHeader={<span className="bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-full">Live</span>}
          >
            <div className="flex flex-col gap-3">
              {[
                { title: 'Double Gross', factory: 'Factory 3', time: '2 mins ago', status: 'Under Review', statusBg: 'bg-blue-100 text-blue-700', borderLine: 'bg-yellow-400' },
                { title: 'Human on Platform', factory: 'Factory 12', time: '8 mins ago', status: 'Verified Fraud', statusBg: 'bg-red-500 text-white', borderLine: 'bg-red-500' },
                { title: 'Vehicle Mismatch', factory: 'Factory 7', time: '15 mins ago', status: 'Under Review', statusBg: 'bg-blue-100 text-blue-700', borderLine: 'bg-cyan-400' },
                { title: 'Double Tare', factory: 'Factory 18', time: '23 mins ago', status: 'False Positive', statusBg: 'bg-gray-100 text-gray-600', borderLine: 'bg-blue-200' },
              ].map((alert, i) => (
                <div key={i} className="relative bg-white border border-gray-100 rounded-lg p-3 shadow-sm flex flex-col group hover:border-gray-300 transition-colors cursor-pointer">
                  {/* Left colored accent border */}
                  <div className={`absolute left-0 top-0 bottom-0 w-1 rounded-l-lg ${alert.borderLine}`}></div>
                  
                  <div className="flex justify-between items-start pl-2">
                    <div className="flex items-center gap-2">
                      <FiCamera className="text-blue-700 w-4 h-4" />
                      <span className="text-sm font-semibold text-gray-900">{alert.title}</span>
                    </div>
                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${alert.statusBg}`}>
                      {alert.status}
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-end pl-2 mt-2">
                    <div className="text-xs text-gray-400">
                      <p>{alert.factory}</p>
                      <p>{alert.time}</p>
                    </div>
                    <FiArrowRight className="text-gray-400 group-hover:text-gray-900 transition-colors" />
                  </div>
                </div>
              ))}
              
              <button className="w-full mt-2 py-2 bg-gray-50 border border-gray-200 text-sm font-semibold text-gray-700 rounded-lg hover:bg-gray-100 transition-colors">
                View All Alerts
              </button>
            </div>
          </SectionCard>
        </div>

        {/* ================= 3. Fraud Type Distribution Graph ================= */}
        <div className="lg:col-span-2 flex flex-col h-full">
          <SectionCard title="Fraud Type Distribution (Today)">
            <div className="w-full h-[280px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData} margin={{ top: 20, right: 10, left: -20, bottom: 40 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                  <XAxis 
                    dataKey="name" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fontSize: 11, fill: '#6B7280' }} 
                    angle={-35} 
                    textAnchor="end"
                  />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fontSize: 12, fill: '#6B7280' }}
                    ticks={[0, 4, 8, 12, 16]}
                  />
                  <Tooltip cursor={{fill: '#f3f4f6'}} />
                  <Legend 
                    iconType="square" 
                    wrapperStyle={{ fontSize: '12px', bottom: 0 }}
                  />
                  <Bar dataKey="total" name="Total Detected" fill="#1A4B9C" radius={[2, 2, 0, 0]} barSize={20} />
                  <Bar dataKey="verified" name="Verified Fraud" fill="#EF4444" radius={[2, 2, 0, 0]} barSize={20} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </SectionCard>
        </div>

        {/* ================= 4. Quick Analytics ================= */}
        <div className="lg:col-span-1 flex flex-col h-full">
          <SectionCard title="Quick Analytics">
            <div className="flex flex-col gap-3 mt-2">
              {[
                { label: 'Total Incidents (Month)', value: '1,247', valueColor: 'text-gray-900' },
                { label: 'Peak Detection Hour', value: '14:00', valueColor: 'text-gray-900' },
                { label: 'Top Fraud Type', value: 'Human on Seat', valueColor: 'text-gray-900' },
                { label: 'System Uptime', value: '99.4%', valueColor: 'text-green-600' },
              ].map((stat, i) => (
                <div key={i} className="flex justify-between items-center bg-[#F3F6F9] px-4 py-3.5 rounded-lg">
                  <span className="text-sm font-medium text-gray-600">{stat.label}</span>
                  <span className={`text-base font-bold ${stat.valueColor}`}>{stat.value}</span>
                </div>
              ))}
            </div>
          </SectionCard>
        </div>

      </div>
    </div>
  );
};

export default Dashboard2;