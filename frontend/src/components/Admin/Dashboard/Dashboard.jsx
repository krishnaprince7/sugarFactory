import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import { 
  FiActivity, 
  FiEye, 
  FiAlertTriangle, 
  FiTrendingUp, 
  FiDollarSign, 
  FiClock, 
  FiShield 
} from 'react-icons/fi';
import Dashboard2 from './Dashboard2';

const Dashboard = () => {
  const navigate = useNavigate(); 

  const topRowCards = [
    {
      id: 1,
      icon: <FiActivity className="w-5 h-5 text-teal-600" />,
      iconBg: 'bg-teal-50',
      percent: '+0%',
      percentColor: 'text-teal-600',
      value: '23',
      title: 'Active Map',
      desc: 'All systems operational',
      path: '/Map', 
    },
    {
      id: 2,
      icon: <FiEye className="w-5 h-5 text-teal-600" />,
      iconBg: 'bg-teal-50',
      percent: '+2%',
      percentColor: 'text-teal-600',
      value: '184',
      title: 'Live Map',
      desc: '8 cameras per factory',
      path: '/Map', 
    },
    {
      id: 3,
      icon: <FiAlertTriangle className="w-5 h-5 text-orange-500" />,
      iconBg: 'bg-orange-50',
      percent: '+15%',
      percentColor: 'text-orange-500',
      value: '47',
      title: "Today's Factories",
      desc: '23 under review',
      path: '/Factories', 
    },
    {
      id: 4,
      icon: <FiTrendingUp className="w-5 h-5 text-teal-600" />,
      iconBg: 'bg-teal-50',
      percent: '+2.1%',
      percentColor: 'text-teal-600',
      value: '94.2%',
      title: 'Fraud Detection Analytics',
      desc: 'AI accuracy this week',
      path: '/Analytics', 
    },
  ];

  const bottomRowCards = [
    {
      id: 5,
      icon: <FiDollarSign className="w-5 h-5 text-teal-600" />, 
      iconBg: 'bg-teal-50',
      percent: '+₹8.76M',
      percentColor: 'text-teal-600',
      value: '₹87.6M',
      title: 'Fraud Prevented (This Month)',
      desc: 'Estimated value saved',
      path: '/Analytics', 
    },
    {
      id: 6,
      icon: <FiClock className="w-5 h-5 text-blue-500" />,
      iconBg: 'bg-blue-50',
      percent: '-1.3 min',
      percentColor: 'text-teal-600',
      value: '4.2 min',
      title: 'Avg Response Time',
      desc: 'Alert to resolution',
      path: '/Analytics', 
    },
    {
      id: 7,
      icon: <FiShield className="w-5 h-5 text-blue-500" />,
      iconBg: 'bg-blue-50',
      percent: '+2.3%',
      percentColor: 'text-teal-600',
      value: '876',
      title: 'Verified Frauds',
      desc: '70.2% verification rate',
      path: '/Analytics', 
    },
  ];

  
  const StatCard = ({ item }) => (
    <div 
      onClick={() => {
        if (item.path) {
          navigate(item.path);
        }
      }}
      className="flex flex-col p-5 bg-white border border-gray-100 rounded-xl shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] transition-all duration-300 hover:scale-[1.03] hover:shadow-lg cursor-pointer"
    >
      <div className="flex items-start justify-between mb-4">
        <div className={`p-2 rounded-lg ${item.iconBg}`}>
          {item.icon}
        </div>
        <span className={`text-sm font-semibold ${item.percentColor}`}>
          {item.percent}
        </span>
      </div>
      
      {/* Value */}
      <h3 className="mb-1 text-2xl font-bold text-gray-900">
        {item.value}
      </h3>
      
      
      <p className="text-sm font-medium text-gray-600">
        {item.title}
      </p>
      
      
      <p className="mt-1 text-xs text-gray-400">
        {item.desc}
      </p>
    </div>
  );

  return (
    <>
      <div className="w-full ">
        
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">HO Dashboard</h1>
          <p className="mt-1 text-sm text-gray-500">
            AI-Based Cane Weighment Surveillance
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {topRowCards.map((item) => (
            <StatCard key={item.id} item={item} />
          ))}
        </div>

        <div className="grid grid-cols-1 gap-5 mt-5 md:grid-cols-3">
          {bottomRowCards.map((item) => (
            <StatCard key={item.id} item={item} />
          ))}
        </div>

      </div>

      <Dashboard2/>
    </>
  );
};

export default Dashboard;