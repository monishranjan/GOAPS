import React from "react";
import { GoDotFill } from "react-icons/go";

const newsList = [
  {
    title:
      "Important Update on Qualifying Degree Mapping/Corrections - CCMT-2025 & CCMN-2025",
    url: "https://ccmt.admissions.nic.in/document/tentative-seat-vacancy-for-special-rounds-2025/",
  },
];

const PublicNotices = () => {
  return (
    <div className="text-sm">
      <div className="bg-[#f8f8f8] max-w-fit px-5 py-3.5 rounded-t-lg">
        <h2 className="font-semibold text-black">Public Notices</h2>
      </div>
      <ul className="bg-[#f8f8f8] space-y-2 px-5 py-3.5 rounded-b-lg rounded-tr-lg">
        {newsList.map((item, index) => (
          <li key={index} className="flex flex-col">
            <a
              href={item.url}
              className="hover:underline text-left text-sm text-black flex items-center gap-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GoDotFill size={12} />
              {item.title}
            </a>
            <button className="bg-[#fbac1b] text-black text-sm px-3 py-1 mt-3 max-w-fit">
              View More
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PublicNotices;
