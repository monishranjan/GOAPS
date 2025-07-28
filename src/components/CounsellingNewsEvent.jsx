import React from "react";
import { GoDotFill } from "react-icons/go";

const newsList = [
  {
    title: "Tentative Seat Vacancy for Special Rounds 2025",
    url: "https://ccmt.admissions.nic.in/document/tentative-seat-vacancy-for-special-rounds-2025/",
    date: "Updated on 07:46 PM of 11th July, 2025",
  },
  {
    title: "Schedule 2025",
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
              className="hover:underline text-left text-sm text-black flex items-center gap-2"
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
