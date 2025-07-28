import { React } from "react";
import LeftLogo from "../../assets/logos/counselling1.png";
import RightLogo from "../../assets/logos/counselling2.png";

const CounsellingHeader = () => {
  return (
    <header className="counselling-header mx-80 text-black my-4">
      {/* Top Header */}
      <div className="w-full flex items-center justify-between">
        <img
          src={LeftLogo}
          alt="Logo"
          className="max-w-[12rem] object-contain"
        />
        <div className="text-center leading-12">
          <h2 className="text-lg">
            एम.टेक./एम.आर्किटेक्चर/एम.प्लान में प्रवेश हेतु केंद्रीकृत परामर्श
          </h2>
          <h3 className="text-2xl uppercase font-bold">
            Centralized Counselling for
            <br />
            M.Tech./M.Arch./M.Plan. Admissions
          </h3>
          <h3 className="text-base font-medium">
            Admission and eCounselling Services for Session 2025
          </h3>
        </div>
        <img
          src={RightLogo}
          alt="Logo"
          className="max-w-[5.8rem] object-contain"
        />
      </div>
    </header>
  );
};

export default CounsellingHeader;
