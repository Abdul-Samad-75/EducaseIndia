import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [inputData, setInputData] = useState({
    fullname: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    agencyType: "yes", // default value from radio buttons
  });

  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const handleRegister = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate an API call or login delay
    setTimeout(() => {
      toast.success("User Created");
      navigate("/login");
      setIsLoading(false);
    }, 2000); // 1.5 second delay
  };
  // Enable button only if required fields are filled
  useEffect(() => {
    const { fullname, phone, email, password, company } = inputData;
    if (fullname && phone && email && password && company) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [inputData]);

  // Handler for text inputs
  const handleChange = (e) => {
    const { id, value } = e.target;
    setInputData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  // Handler for radio buttons
  const handleAgencyChange = (e) => {
    setInputData((prev) => ({
      ...prev,
      agencyType: e.target.value,
    }));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-900 mb-1">
          Create your
        </h2>
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          PopX account
        </h2>

        <form className="space-y-5" onSubmit={handleRegister}>
          {/* Input Fields */}
          {[
            { id: "fullname", label: "Full Name", required: true },
            { id: "phone", label: "Phone number", required: true },
            { id: "email", label: "Email address", required: true },
            {
              id: "password",
              label: "Password",
              required: true,
              type: "password",
            },
            { id: "company", label: "Company name", required: false },
          ].map(({ id, label, required, type = "text" }) => (
            <div key={id} className="relative">
              <input
                type={type}
                id={id}
                value={inputData[id]}
                onChange={handleChange}
                placeholder=" "
                className="peer w-full border border-gray-300 rounded-md px-3 pt-5 pb-2 text-sm text-gray-900 focus:border-[#7209B7] focus:outline-none"
                required={required}
              />
              <label
                htmlFor={id}
                className="absolute left-2.5 -top-2.5 bg-white px-1 text-xs text-[#7209B7] font-medium"
              >
                {label}
                {required && <span className="text-[#7209B7] ml-0.5">*</span>}
              </label>
            </div>
          ))}

          {/* Radio Field */}
          <div>
            <p className="text-sm text-gray-700 font-medium mb-2">
              Are you an Agency?<span className="text-[#7209B7] ml-0.5">*</span>
            </p>
            <div className="flex gap-4 items-center">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="agency"
                  value="yes"
                  className="accent-[#7209B7] w-4 h-4"
                  checked={inputData.agencyType === "yes"}
                  onChange={handleAgencyChange}
                />
                <span className="text-sm text-gray-800">Yes</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="agency"
                  value="no"
                  className="accent-[#7209B7] w-4 h-4"
                  checked={inputData.agencyType === "no"}
                  onChange={handleAgencyChange}
                />
                <span className="text-sm text-gray-800">No</span>
              </label>
            </div>
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
              Create Account
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default SignUp
