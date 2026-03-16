import React from 'react';
import { FiEdit2, FiTrash2, FiUserPlus } from 'react-icons/fi';

const Users = () => {
  // Array holding the dummy user data
  const usersData = [
    {
      id: 1,
      name: 'Admin User',
      status: 'active',
      role: 'Admin',
      email: 'admin@caneai.gov.in',
      lastLogin: '2 hours ago',
    },
    {
      id: 2,
      name: 'Supervisor A',
      status: 'active',
      role: 'Factory Supervisor',
      email: 'supervisor.a@caneai.gov.in',
      lastLogin: '5 mins ago',
    },
    {
      id: 3,
      name: 'Supervisor B',
      status: 'active',
      role: 'Factory Supervisor',
      email: 'supervisor.b@caneai.gov.in',
      lastLogin: '1 hour ago',
    },
    {
      id: 4,
      name: 'AI Analyst 1',
      status: 'active',
      role: 'AI Analyst',
      email: 'analyst1@caneai.gov.in',
      lastLogin: '30 mins ago',
    },
  ];

  return (
    <div className="p-6 bg-white border border-gray-200 shadow-sm rounded-xl">
      
      {/* ================= Header ================= */}
      <div className="flex flex-col gap-4 mb-6 sm:flex-row sm:items-center justify-between">
        <h2 className="text-xl font-bold text-gray-900">User Management</h2>
        
        <button className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold text-white transition-colors bg-[#1A4B9C] rounded-lg hover:bg-blue-800 shadow-sm">
          <FiUserPlus className="w-4 h-4" />
          Add User
        </button>
      </div>

      {/* ================= Users List ================= */}
      <div className="flex flex-col gap-4">
        {usersData.map((user) => (
          <div 
            key={user.id} 
            className="flex flex-col gap-4 p-5 bg-white border border-gray-100 rounded-lg shadow-sm sm:flex-row sm:items-center sm:justify-between hover:border-gray-300 transition-colors"
          >
            
            {/* Left Side: User Details */}
            <div className="flex flex-col gap-1.5">
              
              {/* Name & Badges */}
              <div className="flex items-center gap-3">
                <span className="text-base font-bold text-gray-900">{user.name}</span>
                <span className="px-2.5 py-0.5 text-[11px] font-bold text-white bg-[#1A4B9C] rounded-full">
                  {user.status}
                </span>
                <span className="px-2.5 py-0.5 text-[11px] font-semibold text-gray-600 bg-white border border-gray-200 rounded-full">
                  {user.role}
                </span>
              </div>
              
              {/* Email */}
              <span className="text-sm font-medium text-gray-500">
                {user.email}
              </span>
              
              {/* Last Login */}
              <span className="text-xs text-gray-400">
                Last login: {user.lastLogin}
              </span>
            </div>

            {/* Right Side: Action Buttons */}
            <div className="flex items-center gap-2">
              <button className="p-2 text-gray-500 transition-colors bg-white border border-gray-200 rounded-md hover:bg-gray-50 hover:text-gray-800">
                <FiEdit2 className="w-4 h-4" />
              </button>
              <button className="p-2 text-gray-500 transition-colors bg-white border border-gray-200 rounded-md hover:bg-red-50 hover:text-red-500 hover:border-red-200">
                <FiTrash2 className="w-4 h-4" />
              </button>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};

export default Users;