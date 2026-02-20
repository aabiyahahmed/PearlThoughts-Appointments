"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LoginPage() {
  const [identifier, setIdentifier] = useState(''); // Email or Mobile
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // 1. Get user data from localStorage
    const savedUser = JSON.parse(localStorage.getItem('registeredUser') || '{}');

    // 2. Simple logic check
    if (identifier === savedUser.email && password === savedUser.password) {
      alert(`Welcome back, ${savedUser.name}!`);
      router.push('/dashboard'); // Change this to your home/dashboard route
    } else {
      alert("Invalid credentials. Try again or Sign Up.");
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 lg:p-10">
      <div className="flex flex-col lg:flex-row w-full max-w-6xl bg-white lg:shadow-2xl lg:rounded-3xl overflow-hidden min-h-[600px]">
        {/* LEFT SIDE Branding - (Keep your existing code here) */}
        <div className="hidden lg:flex lg:w-1/2 bg-[#f0f9fb] items-center justify-center p-12">
            <div className="text-center">
                <div className="w-64 h-48 bg-white rounded-3xl flex items-center justify-center mb-8 shadow-sm border border-gray-100 mx-auto">
                    <span className="text-2xl font-bold text-gray-800">Your Logo</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Welcome to our platform</h2>
                <p className="text-gray-500 max-w-xs mx-auto">Manage your appointments and bookings with ease.</p>
            </div>
        </div>

        {/* RIGHT SIDE Form */}
        <div className="w-full lg:w-1/2 p-8 md:p-16 flex flex-col justify-center">
          <div className="max-w-md mx-auto w-full">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Login</h1>
            <p className="text-gray-400 mb-8">Enter your credentials to access your account</p>

            <form onSubmit={handleLogin} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Mobile / Email</label>
                <input
                  type="text" required
                  placeholder="login with Mobile or Email"
                  className="w-full text-gray-700 p-4 border-2 border-[#637381] rounded-xl focus:outline-none focus:border-[#4dbcd8] transition-colors"
                  onChange={(e) => setIdentifier(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <input
                  type="password" required
                  placeholder="••••••••"
                  className="w-full text-gray-700 p-4 border-2 border-[#637381] rounded-xl focus:outline-none focus:border-[#4dbcd8] transition-colors"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 cursor-pointer text-gray-500">
                  <input type="checkbox" className="w-4 h-4 rounded border-gray-300 accent-[#4dbcd8]" />
                  Remember Me
                </label>
                <button type="button" className="text-pink-400 font-medium hover:underline">Forgot Password</button>
              </div>

              <button type="submit" className="w-full bg-[#4dbcd8] text-white py-4 rounded-xl font-bold text-lg hover:bg-[#3ea9c4] transition-all shadow-md mt-2">
                Login
              </button>
            </form>

            <p className="mt-10 text-center text-gray-500 text-sm">
              Don't have an account?{" "}
              <Link href="/signup" className="text-[#4dbcd8] font-bold hover:underline">Sign Up</Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}