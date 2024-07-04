import React from "react";
import dummyPic from "../../assets/mobilePic.png";

const LoginPage = () => {
  return (
    <div className="h-full bg-white flex flex-col items-center justify-center">
      <main className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between lg:p-12 p-4">
        <div className="lg:w-1/2 w-full px-6">
          <div className="relative">
            <img src={dummyPic} alt="Mobile Ad" className="" />
          </div>
        </div>
        <div className="lg:w-2/5 w-full px-6 mt-12 lg:mt-0">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">
            Login Account
          </h2>
          <form className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <input
                  id="remember_me"
                  name="remember_me"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember_me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  {" "}
                  Remember me{" "}
                </label>
              </div>
              <div className="text-sm">
                <a
                  href="#forgot-password"
                  className="font-medium text-blue-600 hover:text-blue-500"
                >
                  {" "}
                  Forgot Password?{" "}
                </a>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default LoginPage;
