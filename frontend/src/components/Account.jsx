import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../css/Account.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Account = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="account-page flex flex-col min-h-screen bg-gray-100">
      <Navbar isAccountPage={true} />
      <div className="flex-grow flex items-center justify-center">
        <div className="form-container w-full max-w-md p-8 bg-white rounded-lg shadow-md">
          <div className="form-box">
            {isSignIn ? (
              <div>
                <h2 className="text-2xl font-semibold mb-6 text-black">
                  Sign In
                </h2>
                <form className="pb-8">
                  <div className="input-group mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="name@domain.com"
                      required
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                  <div className="input-group mb-4 relative">
                    <label className="block text-sm font-medium text-gray-700">
                      Password
                    </label>
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      required
                      value={password}
                      onChange={handlePasswordChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                    <span
                      className="password-toggle"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                  </div>
                  <div className="input-group-horizontal mb-6 flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <label className="block text-sm font-medium text-gray-700">
                      Remember me
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    Sign In
                  </button>
                </form>
                <div className="toggle-container mt-6 flex justify-center">
                  <span className="text-gray-700">
                    Don't have an account?{" "}
                    <a
                      onClick={() => setIsSignIn(!isSignIn)}
                      className="text-indigo-600 hover:underline cursor-pointer"
                    >
                      Register
                    </a>
                  </span>
                </div>
              </div>
            ) : (
              <div>
                <h2 className="text-2xl font-semibold mb-6 text-black">
                  Register
                </h2>
                <form className="pb-8">
                  <div className="input-group mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="name@domain.com"
                      required
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                  <div className="input-group mb-4 relative">
                    <label className="block text-sm font-medium text-gray-700">
                      Password
                    </label>
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      required
                      value={password}
                      onChange={handlePasswordChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                    <span
                      className="password-toggle"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                  </div>
                  <div className="input-group mb-6">
                    <label className="block text-sm font-medium text-gray-700">
                      Confirm Password
                    </label>
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      required
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                    <span
                      className="password-toggle"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                  </div>
                  <div className="input-group-horizontal mb-6 flex items-center">
                    <input type="checkbox" required className="mr-2" />
                    <label className="block text-sm font-medium text-gray-700">
                      I accept the terms and conditions
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    Register
                  </button>
                </form>
                <div className="toggle-container mt-6 flex justify-center">
                  <span className="text-gray-700">
                    Already have an account?{" "}
                    <a
                      onClick={() => setIsSignIn(!isSignIn)}
                      className="text-indigo-600 hover:underline cursor-pointer"
                    >
                      Sign In
                    </a>
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Account;
