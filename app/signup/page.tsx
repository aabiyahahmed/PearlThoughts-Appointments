"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function SignupPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    const user = { name, email, password };
    localStorage.setItem('registeredUser', JSON.stringify(user));
    alert("Account created successfully!");
    router.push('/login');
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 p-4 lg:p-10">
      {/* 1. HEIGHT REDUCED: Changed min-h-[600px] to min-h-[500px] and max-w-6xl to 5xl */}
      <div className="flex flex-col lg:flex-row w-full max-w-5xl bg-white lg:shadow-2xl lg:rounded-3xl overflow-hidden min-h-[500px]">
        
        {/* LEFT SIDE: Branding */}
        <div className="hidden lg:flex lg:w-1/2 bg-[#f0f9fb] items-center justify-center p-8 border-r border-gray-50">
          <div className="text-center">
            {/* 2. LOGO SIZE: Reduced w-64 h-48 to w-48 h-32 */}
            <div className="w-48 h-32 bg-white rounded-3xl flex items-center justify-center mb-6 shadow-sm border border-gray-100 mx-auto">
              <span className="text-xl font-bold text-gray-800">Your Logo</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Join our platform</h2>
            <p className="text-sm text-gray-500 max-w-xs mx-auto">
              Manage your health appointments in one place.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE: Signup Form */}
        {/* 3. PADDING REDUCED: Changed p-16 to p-8 */}
        <div className="w-full lg:w-1/2 p-6 md:p-10 flex flex-col justify-center">
          
          <div className="max-w-sm mx-auto w-full">
            <h1 className="text-2xl font-bold text-gray-900 mb-1">Sign Up</h1>
            <p className="text-sm text-gray-400 mb-6">Create your account to get started</p>

            <form onSubmit={handleSignup} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  type="text" required placeholder="Enter name"
                  className="w-full p-3 border-2 border-[#637381] rounded-xl focus:outline-none focus:border-[#4dbcd8] text-sm text-gray-700"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Mobile / Email</label>
                <input
                  type="text" required placeholder="Enter Mobile/Email"
                  className="w-full p-3 border-2 border-[#637381] rounded-xl focus:outline-none focus:border-[#4dbcd8] text-sm"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Password</label>
                <input
                  type="password" required placeholder="Create password"
                  className="w-full text-gray-700 p-3 border-2 border-[#637381] rounded-xl focus:outline-none focus:border-[#4dbcd8] text-sm"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <button type="submit" className="w-full bg-[#4dbcd8] text-white py-3 rounded-xl font-bold hover:bg-[#3ea9c4] transition-all mt-2">
                Sign Up
              </button>
            </form>

            <div className="relative my-6 flex items-center">
              <div className="flex-grow border-t border-gray-100"></div>
              <span className="flex-shrink mx-4 text-gray-400 text-[10px] uppercase">Or</span>
              <div className="flex-grow border-t border-gray-100"></div>
            </div>

            <button className="w-full border border-gray-200 py-2 rounded-xl flex items-center justify-center gap-3 hover:bg-gray-50 text-sm">
              <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="w-4 h-4" />
              Google
            </button>

            <p className="mt-6 text-center text-gray-500 text-xs">
              Already have an account? <Link href="/login" className="text-[#4dbcd8] font-bold">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}