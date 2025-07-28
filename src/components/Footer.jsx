import React from "react";
import { BiIdCard } from "react-icons/bi";

const usefulLinks = [
  { label: "GATE", href: "https://gate.iitkgp.ac.in/" },
  { label: "CCMN", href: "http://ccmn.admissions.nic.in" },
  {
    label: "CCMT-CCMN-CSAB-DASA Promotions",
    href: "http://couns-promo.mnit.ac.in/",
  },
  {
    label: "Central List of OBC Category",
    href: "http://www.ncbc.nic.in/User_Panel/CentralListStateView.aspx",
  },
  {
    label: "Central List of SC Category",
    href: "https://socialjustice.gov.in/common/76750",
  },
  {
    label: "Central List of ST Category",
    href: "https://tribal.nic.in/downloads/Statistics/NotifiedSTslistsason040823.pdf",
  },
];

const Footer = () => {
  return (
    <div className="text-white text-sm w-full">
      <div className="bg-[#052963] py-8 px-80">
        <div className="">
          <h2 className="text-2xl font-medium mb-3 flex items-center gap-2"><BiIdCard size={32}/>USEFUL LINKS</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-4">
            {usefulLinks.map((link, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-white rounded-full shrink-0"></span>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-white text-lg"
                  aria-label={`${link.label} - External site that opens in a new window`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-[#2a2a2a] flex flex-wrap items-center justify-center gap-2 text-sm py-4 px-4">
        {[
          "Copyright Policy",
          "Privacy Policy",
          "Hyperlink Policy",
          "Terms and Conditions",
          "Help",
          "Contact Us",
        ].map((item, i, arr) => (
          <React.Fragment key={i}>
            <h1 className="hover:cursor-pointer hover:underline">{item}</h1>
            {i < arr.length - 1 && <span>/</span>}
          </React.Fragment>
        ))}
      </div>

      <div className="bg-[#0c0c0c] text-center pb-12 pt-4">
        <div className="text-xs flex flex-col items-center gap-1">
          <p>Content Owned and Managed by CCMT</p>
          <p>
            Last Updated: <strong>Jul 26, 2025</strong>
          </p>
        </div>

        <div className="flex justify-center items-center gap-6 mt-4 flex-wrap px-4">
          <a
            href="https://s3waas.gov.in/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="S3WAAS - External site"
          >
            <img
              src="https://ccmt.admissions.nic.in/wp-content/themes/sdo-theme/images/s3waaslogo.svg"
              alt="S3WAAS"
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
    </div>
  );
};

export default Footer;