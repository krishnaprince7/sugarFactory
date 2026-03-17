import React from "react";

const Analytics = () => {
  const weeklyData = [
    { day: "Monday", alerts: 8, accuracy: 92 },
    { day: "Tuesday", alerts: 12, accuracy: 88 },
    { day: "Wednesday", alerts: 10, accuracy: 91 },
    { day: "Thursday", alerts: 15, accuracy: 85 },
    { day: "Friday", alerts: 11, accuracy: 90 },
  ];

  const detectionTypes = [
    { name: "Double Gross", percent: 28, color: "bg-blue-800" },
    { name: "Human on Seat", percent: 35, color: "bg-[#06B6D4]" },
    { name: "Double Tare", percent: 22, color: "bg-green-600" },
    { name: "Vehicle Mismatch", percent: 10, color: "bg-yellow-500" },
    { name: "Front Wheel Cross", percent: 5, color: "bg-red-500" },
  ];

  const monthlyStats = [
    { label: "Total Weighments", value: "24,567", valueColor: "text-gray-900" },
    { label: "Suspicious Cases", value: "342", valueColor: "text-orange-500" },
    { label: "Confirmed Fraud", value: "245", valueColor: "text-red-500" },
    { label: "Value Protected", value: "₹2.8M", valueColor: "text-green-600" },
  ];

  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
          <h2 className="text-xl font-bold text-[#1A2A44] mb-5">
            Weekly Performance
          </h2>

          <div className="flex flex-col gap-3">
            {weeklyData.map((data, index) => (
              <div
                key={index}
                className="flex justify-between items-center bg-[#EBF2F8] px-4 py-3 rounded-lg"
              >
                <span className="text-sm font-medium text-gray-700">
                  {data.day}
                </span>
                <span className="text-sm text-gray-900">
                  <span className="font-bold">{data.alerts}</span> alerts •{" "}
                  <span className="font-bold">{data.accuracy}%</span> accuracy
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
          <h2 className="text-xl font-bold text-[#1A2A44] mb-5">
            Top Detection Types
          </h2>

          <div className="flex flex-col gap-5">
            {detectionTypes.map((item, index) => (
              <div key={index}>
                <div className="flex justify-between items-center mb-1.5">
                  <span className="text-sm font-medium text-gray-700">
                    {item.name}
                  </span>
                  <span className="text-sm font-bold text-gray-900">
                    {item.percent}%
                  </span>
                </div>

                <div className="w-full bg-[#E5E7EB] h-2 rounded-full overflow-hidden">
                  <div
                    className={`${item.color} h-full rounded-full`}
                    style={{ width: `${item.percent}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm mb-8">
        <h2 className="text-xl font-bold text-[#1A2A44] mb-5">
          Monthly Summary Report
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {monthlyStats.map((stat, index) => (
            <div
              key={index}
              className="bg-[#EBF2F8] p-5 rounded-xl flex flex-col justify-center"
            >
              <p className="text-sm font-medium text-gray-500 mb-1">
                {stat.label}
              </p>
              <p className={`text-3xl font-bold ${stat.valueColor}`}>
                {stat.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Analytics;
