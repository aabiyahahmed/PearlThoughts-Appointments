"use client";
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function DoctorListPage() {
  const router = useRouter();
  
  // Mock Data for Doctors
  const DOCTORS = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialty: "Cardiologist",
      exp: "12 Years",
      qual: "MD, DM (Cardiology)",
      fees: "$50"
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialty: "Dermatologist",
      exp: "8 Years",
      qual: "MBBS, MD",
      fees: "$40"
    },
    {
      id: 3,
      name: "Dr. Alisha Verma",
      specialty: "Pediatrician",
      exp: "10 Years",
      qual: "MD (Pediatrics)",
      fees: "$35"
    },
    {
      id: 4,
      name: "Dr. Robert Smith",
      specialty: "Orthopedic",
      exp: "15 Years",
      qual: "MS, M.Ch (Ortho)",
      fees: "$60"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* HEADER */}
      <header className="bg-white border-b border-gray-200 p-6 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto flex items-center gap-4">
          <Link href="/dashboard" className="text-gray-400 hover:text-gray-600 transition-colors">
            ← Back
          </Link>
          <h1 className="text-xl font-bold text-gray-800">Available Doctors</h1>
        </div>
      </header>

      {/* SEARCH/FILTER BAR (Visual only for now) */}
      <div className="p-6 max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl border border-gray-200 p-2 flex items-center shadow-sm">
          <input 
            type="text" 
            placeholder="Search by specialty or doctor name..." 
            className="flex-1 p-3 outline-none text-sm text-gray-700"
          />
          <button className="bg-[#4dbcd8] cursor-pointer  text-white px-6 py-2 rounded-xl font-bold text-sm">
            Search
          </button>
        </div>
      </div>

      {/* DOCTORS LIST */}
      <main className="px-6 max-w-4xl mx-auto space-y-4">
        {DOCTORS.map((doc) => (
          <div key={doc.id} className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm flex flex-col sm:flex-row items-center gap-6 hover:border-[#4dbcd8] transition-colors group">
            
            {/* Generic User Icon */}
            <div className="w-20 h-20 bg-gray-100 rounded-2xl flex items-center justify-center text-gray-400 text-3xl shrink-0 group-hover:bg-[#f0f9fb] group-hover:text-[#4dbcd8] transition-colors">
              👤
            </div>

            {/* Doctor Details */}
            <div className="flex-1 text-center sm:text-left">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-1">
                <h3 className="text-lg font-bold text-gray-900">{doc.name}</h3>
                <span className="hidden sm:block text-gray-300">|</span>
                <span className="text-sm font-semibold text-[#4dbcd8] bg-[#f0f9fb] px-2 py-0.5 rounded-md">
                  {doc.specialty}
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-1">
                <span className="font-semibold">Exp:</span> {doc.exp}
              </p>
              <p className="text-xs text-gray-400">
                <span className="font-semibold text-gray-500">Qualifications:</span> {doc.qual}
              </p>
            </div>

            {/* Action Section */}
            <div className="w-full sm:w-auto text-center sm:text-right border-t sm:border-t-0 sm:border-l border-gray-100 pt-4 sm:pt-0 sm:pl-6">
              <p className="text-lg font-bold text-gray-900 mb-2">{doc.fees}</p>
              {/* Added onClick to navigate to the dynamic ID page */}
              <button 
                onClick={() => router.push(`/doctors/${doc.id}`)}
                className="w-full cursor-pointer bg-[#4dbcd8] text-white px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-[#3ea9c4] transition-all shadow-md shadow-cyan-100"
              >
                Book Visit
              </button>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}