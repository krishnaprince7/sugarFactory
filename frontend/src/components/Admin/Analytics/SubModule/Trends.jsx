import React from 'react';
import { FiCalendar, FiDownload, FiTrendingUp, FiTrendingDown } from 'react-icons/fi';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Data mimicking the visual trends from image_3.png and the tooltip point from image_4.png
const data = [
  { date: 'Jan 1', total: 44, verified: 31, falseP: 12 },
  { date: 'Jan 5', total: 50, verified: 36, falseP: 13 },
  { date: 'Jan 10', total: 48, verified: 35, falseP: 13 }, // Tooltip point from image_4.png
  { date: 'Jan 15', total: 60, verified: 43, falseP: 17 },
  { date: 'Jan 20', total: 54, verified: 40, falseP: 14 },
  { date: 'Jan 25', total: 57, verified: 42, falseP: 15 },
  { date: 'Jan 30', total: 46, verified: 33, falseP: 13 },
];

const StatCard = ({ title, value, subtitle, trend, IconColor, IconClass }) => {
  const Icon = IconClass;
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-blue-600 mb-2">{title}</p>
        <p className="text-4xl font-bold text-gray-900 mb-1">{value}</p>
        <p className={`text-sm ${trend.startsWith('+') ? 'text-green-500' : 'text-red-500'} ${trend.includes('rate') ? 'text-red-500' : trend.includes('total') ? 'text-yellow-500' : ''}`}>{subtitle}</p>
      </div>
      <div className={`p-3 rounded-full ${IconColor} text-white`}>
        <Icon size={24} />
      </div>
    </div>
  );
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip bg-white p-4 rounded-lg border border-gray-200 shadow-xl">
        <p className="label text-gray-900 font-bold mb-2">{`${label}`}</p>
        <p className="text-blue-600 font-medium">{`Total Incidents : ${payload[0].value}`}</p>
        <p className="text-red-600 font-medium">{`Verified Fraud : ${payload[1].value}`}</p>
        <p className="text-yellow-500 font-medium">{`False Positive : ${payload[2].value}`}</p>
      </div>
    );
  }
  return null;
};

const TrendsPage = () => {
  const tabs = ["Trends", "Factories", "Hourly", "Accuracy", "Monthly"];
  const activeTab = "Trends";

  return (
    <div className="w-full">
  

      <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
        <h2 className="text-2xl font-semibold text-gray-900 mb-10">Detection Trends (Last 30 Days)</h2>
        <div style={{ width: '100%', height: 400 }}>
          <ResponsiveContainer>
            <LineChart
              data={data}
              margin={{ top: 20, right: 30, left: 20, bottom: 30 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
              <XAxis
                dataKey="date"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 14, fill: '#6B7280' }}
                interval={0} 
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 14, fill: '#6B7280' }}
                ticks={[0, 20, 40, 60, 80]}
              />
              <Tooltip
                content={<CustomTooltip />}
                cursor={{ stroke: '#2563EB', strokeWidth: 1, strokeDasharray: '3 3' }}
              />
              <Legend
                wrapperStyle={{ paddingTop: 30 }}
                iconType="rect"
                iconSize={14}
                formatter={(value) => <span className="text-sm text-gray-600">{value}</span>}
              />
              {/* Lines matching the colors from image_4.png legend */}
              <Line
                name="Total Incidents"
                type="monotone"
                dataKey="total"
                stroke="#2563EB" // Blue line
                strokeWidth={2}
                dot={{ stroke: '#2563EB', strokeWidth: 2, r: 4, fill: 'white' }}
                activeDot={{ stroke: '#2563EB', strokeWidth: 2, r: 6, fill: 'white' }}
              />
              <Line
                name="Verified Fraud"
                type="monotone"
                dataKey="verified"
                stroke="#EF4444" // Red line
                strokeWidth={2}
                dot={{ stroke: '#EF4444', strokeWidth: 2, r: 4, fill: 'white' }}
                activeDot={{ stroke: '#EF4444', strokeWidth: 2, r: 6, fill: 'white' }}
              />
              <Line
                name="False Positive"
                type="monotone"
                dataKey="falseP"
                stroke="#F59E0B" // Yellow/Orange line
                strokeWidth={2}
                dot={{ stroke: '#F59E0B', strokeWidth: 2, r: 4, fill: 'white' }}
                activeDot={{ stroke: '#F59E0B', strokeWidth: 2, r: 6, fill: 'white' }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default TrendsPage;