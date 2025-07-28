import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const CounsellingNavbar = () => {
  const [openMenus, setOpenMenus] = useState({});

  const handleMouseEnter = (menuKey) => {
    setOpenMenus((prev) => ({
      ...prev,
      [menuKey]: true,
    }));
  };

  const handleMouseLeave = (menuKey) => {
    setOpenMenus((prev) => ({
      ...prev,
      [menuKey]: false,
    }));
  };

  const menuItemClass = (isOpen) =>
    `flex items-center space-x-1 px-4 py-4   ${
      isOpen ? "bg-[#fbac1b] text-black" : "hover:bg-[#fbac1b] "
    }`;

  const subMenuClass =
    "absolute mt-1 bg-white text-black shadow-md z-10 w-64";

  const subMenuItemClass = "block px-4 py-2 hover:bg-[#fbac1b] text-black";

  return (
    <div className="w-full bg-[#f6f3ee] text-black font-medium text-sm">
      <div className="mx-80">
        <nav className="flex flex-wrap justify-between">
          <a href="/" className="px-4 py-4 hover:bg-[#fbac1b] ">
            Home
          </a>

          <a
            href="https://ccmt.admissions.nic.in/message-form-chairman/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-4 hover:bg-[#fbac1b] "
          >
            Message from Chairman
          </a>

          {/* About Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("about")}
            onMouseLeave={() => handleMouseLeave("about")}
          >
            <button className={menuItemClass(openMenus.about)}>
              <span>About</span>
              <ChevronDown size={14} />
            </button>
            {openMenus.about && (
              <ul className={subMenuClass}>
                <li>
                  <a
                    href="https://ccmt.admissions.nic.in/about-department/"
                    className={subMenuItemClass}
                  >
                    CCMT
                  </a>
                </li>
              </ul>
            )}
          </div>

          {/* Information Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("information")}
            onMouseLeave={() => handleMouseLeave("information")}
          >
            <button className={menuItemClass(openMenus.information)}>
              <span>Information</span>
              <ChevronDown size={14} />
            </button>
            {openMenus.information && (
              <ul className={subMenuClass}>
                <li>
                  <a
                    href="https://ccmt.admissions.nic.in/information-brochure-4/"
                    className={subMenuItemClass}
                  >
                    Information Brochure
                  </a>
                </li>
                <li>
                  <a
                    href="https://ccmt.admissions.nic.in/centrallistforreservedcategories/"
                    className={subMenuItemClass}
                  >
                    Central List for Reserved Categories
                  </a>
                </li>
              </ul>
            )}
          </div>

          <a
            href="https://ccmt.admissions.nic.in/schedule/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-4 hover:bg-[#fbac1b] "
          >
            Schedule
          </a>

          {/* eServices Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("eservices")}
            onMouseLeave={() => handleMouseLeave("eservices")}
          >
            <button className={menuItemClass(openMenus.eservices)}>
              <span>eServices</span>
              <ChevronDown size={14} />
            </button>
            {openMenus.eservices && (
              <ul className={subMenuClass}>
                <li>
                  <a
                    href="https://ccmt.admissions.nic.in/or-cr/"
                    className={subMenuItemClass}
                  >
                    Opening Score-Closing Score
                  </a>
                </li>
                <li>
                  <a
                    href="https://ccmt.admissions.nic.in/institutes/"
                    className={subMenuItemClass}
                  >
                    Participating Institutes
                  </a>
                </li>
                <li>
                  <a
                    href="https://ccmt.admissions.nic.in/seat-matrix/"
                    className={subMenuItemClass}
                  >
                    Seat Matrix
                  </a>
                </li>
              </ul>
            )}
          </div>

          <a
            href="https://ccmt.admissions.nic.in/certificate-formats/"
            className="px-4 py-4 hover:bg-[#fbac1b] "
          >
            Certificate Formats
          </a>

          <a
            href="https://ccmt.amissions.nic.in/notices/"
            className="px-4 py-4 hover:bg-[#fbac1b] "
          >
            Public Notices
          </a>

          {/* Helpdesk Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("helpdesk")}
            onMouseLeave={() => handleMouseLeave("helpdesk")}
          >
            <button className={menuItemClass(openMenus.helpdesk)}>
              <span>Helpdesk</span>
              <ChevronDown size={14} />
            </button>
            {openMenus.helpdesk && (
              <ul className={subMenuClass}>
                <li>
                  <a
                    href="https://ccmt.admissions.nic.in/ccmt-counselling-2021/"
                    className={subMenuItemClass}
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="https://ccmt.admissions.nic.in/institutes/"
                    className={subMenuItemClass}
                  >
                    Participating Institutes
                  </a>
                </li>
              </ul>
            )}
          </div>

          <a
            href="https://ccmt.admissions.nic.in/archive/"
            className="px-4 py-4 hover:bg-[#fbac1b] "
          >
            Archive
          </a>
        </nav>
      </div>
    </div>
  );
};

export default CounsellingNavbar;
