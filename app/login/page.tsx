//import Image from "next/image";

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 lg:p-10">
      {/* CONTAINER: 
         - Mobile: Full width, vertical stack
         - Desktop (lg): Two columns, max width 1100px, rounded corners
      */}
      <div className="flex flex-col lg:flex-row w-full max-w-6xl bg-white lg:shadow-2xl lg:rounded-3xl overflow-hidden min-h-[600px]">
        
        {/* LEFT SIDE: Branding/Visual (Hidden on mobile, visible on lg) */}
        <div className="hidden lg:flex lg:w-1/2 bg-[#f0f9fb] items-center justify-center p-12">
          <div className="text-center">
             {/* Large Logo Placeholder */}
            <div className="w-64 h-48 bg-white rounded-3xl flex items-center justify-center mb-8 shadow-sm border border-gray-100 mx-auto">
              <span className="text-2xl font-bold text-gray-800">Your Logo</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Welcome to our platform</h2>
            <p className="text-gray-500 max-w-xs mx-auto">
              Manage your appointments and bookings with ease in one single dashboard.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE: The Login Form */}
        <div className="w-full lg:w-1/2 p-8 md:p-16 flex flex-col justify-center">
          
          {/* Mobile-only Logo (Hidden on Desktop) */}
          <div className="lg:hidden w-32 h-24 bg-gray-100 rounded-2xl flex items-center justify-center mb-10 mx-auto border border-gray-100">
            <span className="text-sm font-bold text-gray-800">Your Logo</span>
          </div>

          <div className="max-w-md mx-auto w-full">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Login</h1>
            <p className="text-gray-400 mb-8">Enter your credentials to access your account</p>

            <form className="space-y-5">
              {/* Input Group */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Mobile / Email
                </label>
                <input
                  type="text"
                  placeholder="login with Mobile or Email"
                  className="w-full p-4 border-2 border-[#637381] rounded-xl focus:outline-none focus:border-[#4dbcd8] transition-colors placeholder:text-gray-300"
                />
              </div>

              {/* Options Row */}
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 cursor-pointer text-gray-500">
                  <input type="checkbox" className="w-4 h-4 rounded border-gray-300 accent-[#4dbcd8]" />
                  Remember Me
                </label>
                <button type="button" className="text-pink-400 font-medium hover:underline">
                  Forgot Password
                </button>
              </div>

              {/* Login Button */}
              <button className="w-full bg-[#4dbcd8] text-white py-4 rounded-xl font-bold text-lg hover:bg-[#3ea9c4] transition-all shadow-md mt-2">
                Login
              </button>
            </form>

            {/* Divider */}
            <div className="relative my-8 flex items-center">
              <div className="flex-grow border-t border-gray-100"></div>
              <span className="flex-shrink mx-4 text-gray-400 text-xs uppercase tracking-wider">Or login With</span>
              <div className="flex-grow border-t border-gray-100"></div>
            </div>

            {/* Google Button */}
            <button className="w-full border border-gray-200 py-3 rounded-xl flex items-center justify-center gap-3 hover:bg-gray-50 transition-colors font-medium text-gray-700 shadow-sm">
              <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="w-5 h-5" />
              Continue with Google
            </button>

            {/* Signup Footer */}
            <p className="mt-10 text-center text-gray-500 text-sm">
              Don't have an account ?{" "}
              <button className="text-[#4dbcd8] font-bold hover:underline">Sign Up</button>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}