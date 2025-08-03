import React from "react";
import { GoDotFill } from "react-icons/go";

const newsList = [
  {
    title: "Seat Allotment Result has been Declared",
    url: "/admissions",
    date: "Updated on 09:46 PM of 2nd August, 2025",
  },
  {
    title: "Announcement",
    url: "https://ccmt.admissions.nic.in/document/schedule-2025/",
    date: "Updated on 05:12 PM of 15th May, 2025",
  },
  {
    title: "Information Brochure",
    url: "https://ccmt.admissions.nic.in/document/information-brochure-5/",
    date: "Updated on 09:35 AM of 14th May, 2025",
  },
];

const NewsEvents = () => {
  return (
    <div className="text-sm">
      <div className="bg-[#f8f8f8] max-w-fit px-5 py-3.5 rounded-t-lg">
        <h2 className="font-semibold text-black">
          NEWS & EVENTS
        </h2>
      </div>
      <ul className="bg-[#f8f8f8] space-y-2 px-5 py-3.5 rounded-b-lg rounded-tr-lg">
        {newsList.map((item, index) => (
          <li key={index} className="flex flex-col">
            <a
              href={item.url}
              className="text-left text-sm text-black flex items-center gap-2 cursor-default"
              target="_blank"
              rel="noopener noreferrer"
            ><GoDotFill size={9}/>
              {item.title}
            </a>
            <span className="text-[#989898] text-xs mt-0.5 italic text-right">{item.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsEvents;
