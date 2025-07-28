import { FaSitemap } from "react-icons/fa";
import { RiSearchLine } from "react-icons/ri";
import { PiWheelchairDuotone } from "react-icons/pi";

const TopBar = () => {
  return (
    <div className="bg-[#e5e2db] border-b border-gray-200 h-9">
      <div className="mx-80 flex flex-col md:flex-row justify-between items-center">
        {/* Left Side: Gov Branding */}
        <div className="flex">
          {/* भारत सरकार / Government of India */}
          <a
            href="https://india.gov.in/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="भारत सरकार / Government of India - External site that opens in a new window"
            className="flex flex-col items-start hover:underline hover:bg-[#d8d8d8] text-black px-3"
          >
            <span lang="hi" className="font-semibold text-xs">
              भारत सरकार
            </span>
            <span className="font-medium text-xs">Government of India</span>
          </a>

          {/* Divider */}
          <div className="w-px bg-gray-400 my-1" />

          {/* शिक्षा मंत्रालय / Ministry of Education */}
          <a
            href="https://www.education.gov.in/en"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="शिक्षा मंत्रालय / Ministry of Education - External site that opens in a new window"
            className="flex flex-col items-start hover:underline hover:bg-[#d8d8d8] text-black px-3"
          >
            <span lang="hi" className="font-semibold text-xs">
              शिक्षा मंत्रालय
            </span>
            <span className="font-medium text-xs">Ministry of Education</span>
          </a>
        </div>

        {/* Right Side: Utilities */}
        <div className="flex items-center">
          <a
            href="#SkipContent"
            className="text-black uppercase text-xs hover:bg-[#d8d8d8] px-3 border-x border-gray-400 h-9 flex items-center font-medium"
            aria-label="Skip to main content"
            title="Skip to main content"
          >
            Skip to main content
          </a>

          <a
            href="https://ccmt.admissions.nic.in/sitemap/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Sitemap"
            title="Sitemap"
            className="hover:bg-[#d8d8d8] border-r border-gray-400 px-3 h-9 flex items-center text-black"
          >
            <FaSitemap className="w-5 h-5" />
          </a>
          <a
            href="https://ccmt.admissions.nic.in/sitemap/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Sitemap"
            title="Sitemap"
            className="hover:bg-[#d8d8d8] border-r border-gray-400 px-3 h-9 flex items-center text-black"
          >
            <RiSearchLine className="w-5 h-5" />
          </a>
          <a
            href="https://ccmt.admissions.nic.in/sitemap/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Sitemap"
            title="Sitemap"
            className="hover:bg-[#d8d8d8] border-r border-gray-400 px-3 h-9 flex items-center text-black"
          >
            <PiWheelchairDuotone className="w-5 h-5" />
          </a>
          <a
            href="#SkipContent"
            className="text-black uppercase text-xs border-r border-gray-400 hover:bg-[#d8d8d8] px-3 h-9 flex items-center underline"
            aria-label="Skip to main content"
            title="Skip to main content"
          >
            English
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
