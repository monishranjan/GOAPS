import React from "react";
import LeftLogo from "../../assets/logos/counselling1.png";

const Header = () => {
  return (
    <div className="flex flex-wrap items-center justify-between py-4 px-4 border-b border-gray-300">
      {/* Left Logo */}
      <div className="w-full sm:w-2/12 flex justify-start">
        <img
          src={LeftLogo}
          alt="logo"
          className="h-16 object-contain"z
        />
      </div>

      {/* Header Text */}
      <div className="w-full sm:w-7/12 text-center">
        <h1 className="text-xl sm:text-2xl font-semibold">
          Centralized Counselling for M.Tech/M.Arch/M.Plan Admissions
        </h1>
        <h3 className="text-base sm:text-xl text-black mt-1">
          CCMT Counselling 2025
        </h3>
      </div>

      {/* Right Logo */}
      <div className="w-full sm:w-3/12 flex justify-end">
        <img
          src="https://admissions.nic.in/CCMT/Applicant/Image/e-counsellig-logo2020.png"
          alt="e-counselling"
          className="h-16 object-contain"
        />
      </div>
    </div>
  );
};

export default Header;
