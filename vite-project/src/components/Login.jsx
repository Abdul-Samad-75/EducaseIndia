import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Login= () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate an API call or login delay
    setTimeout(() => {
      toast.success("User Logged In");
      navigate("/profile");
      setIsLoading(false);
    }, 2000); // 1.5 second delay
  };

  useEffect(() => {
    if (email && password) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [email, password]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-1">
          Sign in to your <br /> PopX account
        </h2>
        <p className="text-sm text-gray-500 mb-6 leading-5">
          Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit,
        </p>

        <form className="space-y-6" onSubmit={handleLogin}>
          {/* Email field */}
          <div className="relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email address"
              className="peer w-full border border-gray-300 rounded-md px-3 pt-5 pb-2 text-sm text-gray-900 focus:border-[#7209B7] focus:outline-none"
            />
            <label
              htmlFor="email"
              className="absolute left-2.5 -top-2.5 bg-white px-1 text-xs text-[#7209B7] font-medium"
            >
              Email Address
            </label>
          </div>

          {/* Password field */}
          <div className="relative">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="peer w-full border border-gray-300 rounded-md px-3 pt-5 pb-2 text-sm text-gray-900 focus:border-[#7209B7] focus:outline-none"
            />
            <label
              htmlFor="password"
              className="absolute left-2.5 -top-2.5 bg-white px-1 text-xs text-[#7209B7] font-medium"
            >
              Password
            </label>
          </div>

          {/* Button */}
          {isLoading ? (
            <button
              type="submit"
              disabled={!isActive}
              className={`w-full py-2 text-white font-semibold rounded-md ${
                isActive
                  ? "bg-purple-500 cursor-pointer"
                  : "bg-gray-300 cursor-not-allowed"
              }`}
            >
              Loading...
            </button>
          ) : (
            <button
              type="submit"
              disabled={!isActive}
              className={`w-full py-2 text-white font-semibold rounded-md ${
                isActive
                  ? "bg-[#7209B7] cursor-pointer"
                  : "bg-gray-300 cursor-not-allowed"
              }`}
            >
              Login
            </button>
          )}
        </form>
      </div>
    </div>
  );
};



export default Login;