import React from 'react';
import { Link } from 'react-router-dom';

const AdmissionsNavbar = () => {
  return (
    <nav className="bg-[#052963] py-4 px-8">
      <div className="flex justify-between items-center text-sm">
        <div className="text-white font-medium">Home</div>
        <ul className="flex space-x-8">
          <li>
            <a
              href="/admissions"
              className="text-white hover:underline"
            >
              Change Password
            </a>
          </li>
          <li>
            <a
              href="/admissions"
              className="text-white bg-[#00163a] px-4 py-2 rounded-md"
            >
              Logout
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default AdmissionsNavbar;