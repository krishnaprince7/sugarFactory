import React from "react";
import { FiVideo, FiWifi } from "react-icons/fi";

const LiveFeed = () => {
  const cameras = [
    {
      id: 1,
      name: "Gross Platform - Cam 1",
      location: "North Entry",
      status: "active",
    },
    {
      id: 2,
      name: "Gross Platform - Cam 2",
      location: "South Entry",
      status: "active",
    },
    {
      id: 3,
      name: "Tare Platform - Cam 1",
      location: "North Entry",
      status: "active",
    },
    {
      id: 4,
      name: "Tare Platform - Cam 2",
      location: "South Entry",
      status: "active",
    },
    {
      id: 5,
      name: "Gross Platform - Cam 3",
      location: "Overhead",
      status: "active",
    },
    {
      id: 6,
      name: "Tare Platform - Cam 3",
      location: "Overhead",
      status: "maintenance",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {cameras.map((cam) => (
        <div
          key={cam.id}
          className="relative flex flex-col p-4 bg-[#F0F6FA] border border-gray-200 rounded-xl h-64 shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-2 text-sm font-semibold text-gray-800">
              <FiVideo className="w-4 h-4 text-[#1A4B9C]" />
              {cam.name}
            </div>

            <div
              className={`flex items-center gap-1.5 px-3 py-1 text-[11px] font-bold rounded-full capitalize ${
                cam.status === "active"
                  ? "bg-[#1A4B9C] text-white"
                  : "bg-[#E2EAF4] text-[#4A72B2]"
              }`}
            >
              <FiWifi className="w-3 h-3" />
              {cam.status}
            </div>
          </div>

          {cam.status === "active" && (
            <div className="absolute top-[60px] right-4 w-1.5 h-1.5 bg-red-500 rounded-full"></div>
          )}

          <div className="flex flex-col items-center justify-center flex-1 mt-2 text-[#7F92A8]">
            <FiVideo className="w-12 h-12 mb-3 opacity-60" strokeWidth={1.5} />
            <p className="text-[13px] font-medium">Live Feed</p>
            <p className="text-[13px] font-medium">{cam.location}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LiveFeed;
