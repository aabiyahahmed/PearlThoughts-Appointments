"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const [userName, setUserName] = useState('Patient');
  const router = useRouter();

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem('registeredUser') || '{}');
    if (savedUser.name) setUserName(savedUser.name);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-50">
      
      {/* SIDEBAR - Collapses on mobile */}
      <aside className="w-full lg:w-64 bg-white border-b lg:border-r border-gray-200 flex flex-col">
        <div className="p-6 flex items-center justify-between lg:justify-start gap-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#4dbcd8] rounded-lg"></div>
            <span className="font-bold text-xl text-gray-800 tracking-tight">HealthPortal</span>
          </div>
          {/* Simple Mobile Menu Toggle could go here */}
        </div>
        
        <nav className="flex lg:flex-col overflow-x-auto lg:overflow-x-visible px-4 pb-4 lg:pb-0 space-x-2 lg:space-x-0 lg:space-y-1">
          <NavItem label="Dashboard" active />
          <NavItem label="Appointments" />
          <NavItem label="Messages" />
          <NavItem label="Profile" />
        </nav>
      </aside>

      {/* MAIN SECTION */}
      <main className="flex-1 flex flex-col">
        
        {/* HEADER */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 lg:px-10">
          <h2 className="font-semibold text-gray-700 hidden md:block">Patient Overview</h2>
          <div className="flex items-center gap-4 ml-auto">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-bold text-gray-900">{userName}</p>
              <p className="text-xs text-gray-500">Premium Member</p>
            </div>
            <div className="w-10 h-10 bg-gray-200 rounded-full border border-gray-300 flex items-center justify-center font-bold text-gray-500">
              {userName[0]}
            </div>
          </div>
        </header>

        {/* CONTENT AREA */}
        <div className="p-6 lg:p-10 max-w-6xl mx-auto w-full">
          
          <div className="mb-8">
            <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">Welcome back, {userName}</h1>
            <p className="text-gray-500">Here is what's happening with your health today.</p>
          </div>

          {/* STATS GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <p className="text-sm font-medium text-gray-400 mb-1">Upcoming Visits</p>
              <p className="text-2xl font-bold text-gray-900">02</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <p className="text-sm font-medium text-gray-400 mb-1">Medical Reports</p>
              <p className="text-2xl font-bold text-gray-900">14</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm sm:col-span-2 lg:col-span-1">
              <p className="text-sm font-medium text-gray-400 mb-1">Health Score</p>
              <p className="text-2xl font-bold text-green-500">Good</p>
            </div>
          </div>

          {/* MAIN CALL TO ACTION */}
          <div className="bg-[#4dbcd8] rounded-3xl p-8 lg:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg shadow-cyan-100/50">
            <div className="max-w-md text-center md:text-left">
              <h3 className="text-2xl font-bold mb-3">Book an Appointment</h3>
              <p className="text-cyan-50 mb-6">Connect with certified doctors for specialized care and consultations.</p>
              <button 
                onClick={() => router.push('/doctors')} // This line triggers the navigation
                className="bg-white cursor-pointer text-[#4dbcd8] px-8 py-3 rounded-xl font-bold hover:bg-gray-50 transition-colors w-full md:w-auto"
                >
                Find a Doctor
              </button>
            </div>
            <div className="text-6xl lg:text-8xl opacity-30 select-none">📅</div>
          </div>

        </div>
      </main>
    </div>
  );
}

// NavItem Component for the Sidebar
function NavItem({ label, active = false }: { label: string, active?: boolean }) {
  return (
    <button className={`
      flex-shrink-0 px-4 py-2 lg:py-3 lg:px-4 rounded-xl font-semibold text-sm transition-all
      ${active 
        ? 'bg-[#f0f9fb] text-[#4dbcd8]' 
        : 'text-gray-500 hover:bg-gray-100 hover:text-gray-700'}
    `}>
      {label}
    </button>
  );
}