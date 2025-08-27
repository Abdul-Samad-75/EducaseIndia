import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="w-full max-w-sm bg-white rounded-lg shadow-sm p-6 flex flex-col justify-end h-[90vh]">
        <div className="mb-8 mt-auto">
          <h1 className="text-xl font-semibold text-gray-900 mb-2">
            Welcome to PopX
          </h1>
          <p className="text-sm text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <Link to="/signup">
            <button className="bg-[#7209B7] w-full text-white font-semibold py-3 rounded-md cursor-pointer">
              Create Account
            </button>
          </Link>
          <Link to="/login">
            <button className="bg-[#EDE9FE] text-[#7209B7] font-semibold py-3 rounded-md cursor-pointer w-full">
              Already Registered? Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;