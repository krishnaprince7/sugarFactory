import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { 
  BarChart, 
  Home, 
  Factory, 
  Map, 
  BarChart2, 
  Settings, 
  Bell,
  Menu, // Hamburger icon ke liye
  X     // Close icon ke liye
} from 'lucide-react';

const Header = () => {
  // Mobile menu ka state handle karne ke liye
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Desktop and Mobile dono ke nav links ka styling
  const navLinkClasses = ({ isActive }) => 
    `flex items-center gap-3 px-4 py-3 md:py-2 rounded-md transition-colors font-medium ${
      isActive 
        ? 'text-white bg-blue-700' 
        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50' 
    }`;

  // Menu band karne ka function (jab link par click ho jaye)
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <header className="flex items-center justify-between px-4 md:px-6 py-3 bg-white border-b border-gray-200">
        
        {/* Left: Hamburger (Mobile), Logo, Title & Desktop Nav */}
        <div className="flex items-center gap-4 md:gap-8">
          
          {/* Hamburger Icon (Only visible on mobile) */}
          <button 
            className="p-2 -ml-2 text-gray-600 rounded-md md:hidden hover:bg-gray-100"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>

          {/* Logo and Title */}
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-8 h-8 bg-blue-800 rounded-md">
              <BarChart className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-bold tracking-wide text-gray-900">
           
              CANE AI 
            </span>
          </div>

          {/* Navigation Menu (Hidden on Mobile, Visible on md screens and up) */}
          <nav className="hidden md:flex items-center gap-2 md:gap-4 text-sm">
            <NavLink to="/dashboard" className={navLinkClasses}><Home className="w-4 h-4" /> Dashboard</NavLink>
            <NavLink to="/factories" className={navLinkClasses}><Factory className="w-4 h-4" /> Factories</NavLink>
            <NavLink to="/map" className={navLinkClasses}><Map className="w-4 h-4" /> Map View</NavLink>
            <NavLink to="/analytics" className={navLinkClasses}><BarChart2 className="w-4 h-4" /> Analytics</NavLink>
            <NavLink to="/settings" className={navLinkClasses}><Settings className="w-4 h-4" /> Settings</NavLink>
          </nav>
        </div>

        {/* Right: Notifications and Profile */}
        <div className="flex items-center gap-3 md:gap-5">
          {/* Notification Bell */}
          <button className="relative p-2 text-gray-500 transition-colors border border-gray-200 rounded-full hover:bg-gray-50">
            <Bell className="w-5 h-5" />
            <span className="absolute top-0 right-0 flex items-center justify-center w-[18px] h-[18px] text-[10px] font-bold text-white bg-red-500 border-2 border-white rounded-full">
              3
            </span>
          </button>
          
          {/* User Profile */}
          <button className="flex items-center justify-center w-9 h-9 text-sm font-bold text-white bg-blue-800 rounded-full hover:bg-blue-900 transition-colors">
            HO
          </button>
        </div>
      </header>

      {/* ============================== */}
      {/* MOBILE SIDEBAR MENU COMPONENTS */}
      {/* ============================== */}

      {/* 1. Black Overlay Background */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/50 md:hidden transition-opacity"
          onClick={closeMenu}
        />
      )}

      {/* 2. Side Drawer */}
      <div 
        className={`fixed top-0 left-0 h-full w-64 bg-white z-50 transform transition-transform duration-300 ease-in-out md:hidden shadow-2xl flex flex-col ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <span className="text-lg font-bold tracking-wide text-gray-900">Menu</span>
          <button 
            className="p-2 text-gray-500 rounded-md hover:bg-gray-100"
            onClick={closeMenu}
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Drawer Nav Links */}
        <nav className="flex flex-col gap-2 p-4 text-base overflow-y-auto">
          <NavLink to="/dashboard" onClick={closeMenu} className={navLinkClasses}><Home className="w-5 h-5" /> Dashboard</NavLink>
          <NavLink to="/factories" onClick={closeMenu} className={navLinkClasses}><Factory className="w-5 h-5" /> Factories</NavLink>
          <NavLink to="/map" onClick={closeMenu} className={navLinkClasses}><Map className="w-5 h-5" /> Map View</NavLink>
          <NavLink to="/analytics" onClick={closeMenu} className={navLinkClasses}><BarChart2 className="w-5 h-5" /> Analytics</NavLink>
          <NavLink to="/settings" onClick={closeMenu} className={navLinkClasses}><Settings className="w-5 h-5" /> Settings</NavLink>
        </nav>
      </div>
    </>
  );
};

export default Header;