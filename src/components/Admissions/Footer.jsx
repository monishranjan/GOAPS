import React from "react";

const Footer = () => {
  return (
    <footer className="text-black">
      <div className="bg-[#167d7f] flex flex-wrap items-center justify-center gap-2 text-sm py-4 px-4 text-white">
        {[
          "Terms and Conditions",
          "Hyperlink Policy",
          "Privacy Policy",
          "Copyright Policy",
          "Disclaimer",
        ].map((item, i, arr) => (
          <React.Fragment key={i}>
            <h1 className="hover:cursor-pointer hover:underline">{item}</h1>
            {i < arr.length - 1 && <span>/</span>}
          </React.Fragment>
        ))}
      </div>

      <div className="bg-[#ddffe7] text-center pb-12 pt-4 text-white">
        <div className="text-sm flex flex-col items-center gap-1 text-black font-medium mb-3">
          <p>Content Owned and Maintained by Centralized for M.Tech/M.Arch/M.Plan Admissions</p>
          <p className="">Designed, Developed and Hosted by <span className="text-[#ff0000]">National Informatics Centre</span></p>
          <p className=""><span className="text-[#ff0000]">Ministry of Electronics & Information Technology</span>, Government of India</p>
        </div>

        <div className="flex justify-center items-center gap-6 mt-8 flex-wrap px-4">
          <a
            href="https://s3waas.gov.in/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="S3WAAS - External site"
          >
            <img
              src="https://admissions.nic.in/CCMT/Applicant/Image/ecounselling.png"
              alt="e-Counselling Services"
              className="h-10"
            />
          </a>
          <a
            href="http://www.nic.in/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="NIC - External site"
            className="border-x border-gray-600 px-7"
          >
            <img
              src="https://ccmt.admissions.nic.in/wp-content/themes/sdo-theme/images/Nic_logo.svg"
              alt="NIC"
              className="h-10"
            />
          </a>
          <a
            href="http://www.digitalindia.gov.in/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Digital India - External site"
          >
            <img
              src="https://ccmt.admissions.nic.in/wp-content/themes/sdo-theme/images/Digital-India-white.svg"
              alt="Digital India"
              className="h-10"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
