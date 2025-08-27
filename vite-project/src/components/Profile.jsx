import React from "react";
import { CameraIcon } from "@heroicons/react/24/solid";
const Profile = () => {
  return (
    <div className="min-h-screen bg-[#fafafa] flex items-center justify-center px-4">
      <div className="w-full max-w-sm bg-white border border-gray-300 shadow-sm flex flex-col min-h-[90vh]">
        {/* Header */}
        <div className="border-b border-gray-200 px-6 py-4">
          <h2 className="text-gray-800 font-medium text-base">
            Account Settings
          </h2>
        </div>

        {/* Profile Info */}
        <div className="px-6 pt-4">
          <div className="flex items-start gap-4">
            {/* Avatar with camera icon */}
            <div className="relative w-14 h-14 shrink-0">
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="Profile"
                className="w-14 h-14 object-cover rounded-full"
              />
              <div className="absolute bottom-0 right-0 bg-purple-600 rounded-full p-1 shadow">
                <CameraIcon className="w-4 h-4 text-white" />
              </div>
            </div>

            {/* Name and Email */}
            <div>
              <h3 className="text-gray-900 font-semibold text-sm">Marry Doe</h3>
              <p className="text-sm text-gray-500">Marry@Gmail.Com</p>
            </div>
          </div>

          {/* Text */}
          <p className="mt-4 text-sm text-gray-600 border-b border-dashed pb-4">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
            Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
            Erat, Sed Diam
          </p>
        </div>

        {/* Spacer for height */}
        <div className="flex-grow  border-t border-dashed border-gray-400"></div>
        <div className="border border-gray-200 mb-10"></div>
      </div>
    </div>
  );
};

export default Profile;