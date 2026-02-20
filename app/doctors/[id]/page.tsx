"use client";
import { useRouter, useParams } from 'next/navigation';

const DOCTORS_DATA = [
  { 
    id: 1, 
    name: "Dr. Sarah Johnson", 
    specialty: "Cardiologist", 
    qual: "MD, DM (Cardiology)",
    about: "15+ years of experience in cardiology, including non-invasive and interventional procedures.",
    patients: "5,000+",
    exp: "12",
    rating: "4.8",
    reviews: "4,942"
  },
  { 
    id: 2, 
    name: "Dr. Michael Chen", 
    specialty: "Dermatologist", 
    qual: "MBBS, MD",
    about: "Specialist in clinical and cosmetic dermatology with a focus on skin cancer prevention.",
    patients: "3,200+",
    exp: "8",
    rating: "4.7",
    reviews: "2,150"
  },
  { 
    id: 3, 
    name: "Dr. Alisha Verma", 
    specialty: "Pediatrician", 
    qual: "MD (Pediatrics)",
    about: "Dedicated to child health and development with over a decade of experience in pediatric care.",
    patients: "4,500+",
    exp: "10",
    rating: "4.9",
    reviews: "3,800"
  },
  { 
    id: 4, 
    name: "Dr. Robert Smith", 
    specialty: "Orthopedic", 
    qual: "MS, M.Ch (Ortho)",
    about: "Expert in joint replacement and sports medicine with extensive surgical experience.",
    patients: "6,100+",
    exp: "15",
    rating: "4.6",
    reviews: "5,200"
  }
];

export default function DoctorProfile() {
  const router = useRouter();
  const params = useParams();
  
  const docId = Number(params.id);
  const doctor = DOCTORS_DATA.find(d => d.id === docId) || DOCTORS_DATA[0];

  return (
    <div className="min-h-screen bg-white pb-24">
      {/* HEADER SECTION */}
      <div className="bg-[#4dbcd8] h-44 rounded-b-[40px] p-6 text-white relative">
        <div className="max-w-4xl mx-auto flex items-center gap-4">
          <button 
            onClick={() => router.back()} 
            className="text-xl p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            ←
          </button>
          <h1 className="text-lg font-medium">Book Appointment</h1>
        </div>

        {/* PROFILE CARD */}
        <div className="absolute top-24 left-6 right-6 max-w-2xl mx-auto">
          <div className="bg-white rounded-3xl p-5 shadow-lg border border-gray-200 flex items-center gap-5">
            <div className="flex-1">
              <h2 className="text-xl text-gray-900">{doctor.name}</h2>
              <p className="text-sm text-gray-500">{doctor.specialty}</p>
              <p className="text-xs text-[#4dbcd8] mt-1 uppercase tracking-wide">{doctor.qual}</p>
            </div>
            <div className="w-20 h-20 bg-gray-100 rounded-2xl border border-gray-200 flex items-center justify-center text-gray-400 shrink-0">
              User Icon
            </div>
          </div>
        </div>
      </div>

      {/* STATS SECTION */}
      <div className="mt-20 px-6 max-w-4xl mx-auto grid grid-cols-4 gap-4">
        <StatItem value={doctor.patients} label="patients" />
        <StatItem value={doctor.exp + "+"} label="years exp." />
        <StatItem value={doctor.rating} label="rating" />
        <StatItem value={doctor.reviews} label="reviews" />
      </div>

      {/* DETAILS SECTION */}
      <div className="mt-10 px-6 max-w-4xl mx-auto space-y-8">
        <div>
          <h3 className="text-lg text-gray-900 border-b border-gray-100 pb-2 mb-3">About Doctor</h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            {doctor.about}
          </p>
        </div>

        <div>
          <h3 className="text-lg text-gray-900 mb-4">Service & Specialization</h3>
          <div className="flex justify-between items-center border-b border-gray-100 pb-3 mb-3">
            <span className="text-sm text-gray-500">Service</span>
            <span className="text-sm text-gray-800">General Consultation</span>
          </div>
          <div className="flex justify-between items-center border-b border-gray-100 pb-3">
            <span className="text-sm text-gray-500">Specialization</span>
            <span className="text-sm text-gray-800">{doctor.specialty}</span>
          </div>
        </div>

        <div>
          <h3 className="text-lg text-gray-900 mb-4">Availability</h3>
          <div className="flex justify-between items-center bg-gray-50 p-4 rounded-2xl border border-gray-200">
            <span className="text-sm text-gray-800">Monday to Friday</span>
            <span className="text-sm text-[#4dbcd8]">10 AM To 5 PM</span>
          </div>
        </div>
      </div>

      {/* FOOTER BUTTON */}
      <div className="fixed bottom-0 left-0 right-0 p-6 bg-white border-t border-gray-100">
        <button className="w-full max-w-4xl mx-auto block bg-[#4dbcd8] text-white py-4 rounded-2xl text-lg hover:bg-[#3ea9c4] transition-all">
          Book appointment
        </button>
      </div>
    </div>
  );
}

function StatItem({ value, label }: { value: string, label: string }) {
  return (
    <div className="text-center">
      
      <p className="text-sm text-[#4dbcd8]">{value}</p>
      <p className="text-[10px] text-gray-500 uppercase tracking-tight">{label}</p>
    </div>
  );
}