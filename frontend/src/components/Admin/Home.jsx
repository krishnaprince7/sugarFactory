import React from 'react';
import { Shield, Factory, Eye, TrendingUp, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col items-center justify-center p-6 font-sans relative">
      
      {/* Top Badge */}
      <div className="flex items-center gap-2 bg-[#EEF2FF] border border-[#E0E7FF] text-[#4F46E5] px-4 py-1.5 rounded-full font-medium text-sm mb-8 shadow-sm">
        <Shield className="w-4 h-4" />
        <span>AI-Powered Surveillance System</span>
      </div>

      {/* Main Heading */}
      <div className="text-center max-w-4xl mx-auto mb-6">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-[#111827] leading-[1.1]">
          Cane Weighment <br />
          <span className="text-[#0052CC] mt-2 block">Anti-Fraud Portal</span>
        </h1>
      </div>

      {/* Subtitle */}
      <p className="text-[#6B7280] text-lg md:text-xl text-center max-w-2xl mb-12">
        Real-time monitoring and AI-based fraud detection across 23 cooperative sugar factories in Uttar Pradesh
      </p>

      {/* Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl mb-12">
        
        {/* Card 1 */}
        <div className="bg-white rounded-2xl p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300">
          <div className="mb-5 text-[#0052CC]">
            <Factory strokeWidth={1.5} className="w-10 h-10" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">23 Factories</h3>
          <p className="text-gray-500 font-medium">Complete network coverage</p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-2xl p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300">
          <div className="mb-5 text-[#06B6D4]">
            <Eye strokeWidth={1.5} className="w-10 h-10" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">184 Cameras</h3>
          <p className="text-gray-500 font-medium">24/7 live monitoring</p>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-2xl p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300">
          <div className="mb-5 text-[#10B981]">
            <TrendingUp strokeWidth={1.5} className="w-10 h-10" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">94% Accuracy</h3>
          <p className="text-gray-500 font-medium">AI fraud detection</p>
        </div>

      </div>

      {/* CTA Button */}
      <button
      onClick={()=>{
        navigate("/dashboard")
      }}
       className="flex items-center gap-2 bg-[#0052CC] hover:bg-[#0043A8] text-white px-8 py-3.5 rounded-lg font-semibold text-base transition-colors duration-200 shadow-md">
        Enter Dashboard
        <ArrowRight className="w-4 h-4" />
      </button>

      {/* Redirect Text */}
      <p className="text-gray-400 text-sm mt-4 font-medium">
        Redirecting to dashboard automatically...
      </p>

    </div>
  );
}

export default Home;