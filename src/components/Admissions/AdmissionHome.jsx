import React, { useState } from 'react';
import Header from './Header';
import Navbar from './Navbar';
import { FaCircleCheck } from 'react-icons/fa6';

import AppliedChoice from './AdmissionHomeComps/AppliedChoices';
import CandidateProfiles from './AdmissionHomeComps/CandidateProfile';

// Dummy Components (Replace these with your actual components)
const CandidateProfile = () => <CandidateProfiles />;
const AvailableChoices = () => <div>Available Choices Component</div>;
const AppliedChoices = () => <AppliedChoice />;
const ChoiceFilling = () => <div>Choice Filling Component</div>;
const ChoiceLocking = () => <div>Choice Locking Component</div>;
const Dashboard = () => <div>Dashboard Component (Default)</div>;

const AdmissionHome = () => {
  const [activeSection, setActiveSection] = useState('CandidateProfile');

  const navItemClass = (section) =>
    activeSection === section
      ? 'bg-blue-100 text-blue-800 font-semibold cursor-pointer'
      : 'hover:bg-blue-50 cursor-pointer';

  const disabledClass = 'text-gray-400 cursor-not-allowed opacity-50';

  // Set enable/disable logic per requirement
  const isEnabled = (section) => section === 'CandidateProfile' || section === 'AppliedChoices';


  const renderComponent = () => {
    switch (activeSection) {
      case 'CandidateProfile':
        return <CandidateProfile />;
      case 'AvailableChoices':
        return <AvailableChoices />;
      case 'AppliedChoices':
        return <AppliedChoices />;
      case 'ChoiceFilling':
        return <ChoiceFilling />;
      case 'ChoiceLocking':
        return <ChoiceLocking />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <Navbar />
      <main className="w-full p-10 flex gap-10">
        {/* LEFT SIDE */}
        <div className="w-3/12 space-y-5">
          {/* Available Services */}
          <div className="bg-white border rounded shadow">
            <h2 className="bg-blue-100 text-blue-800 text-base font-semibold px-4 py-2 rounded-t">
              Available Services
            </h2>
            <ul className="text-sm">
              {[
                { label: 'Candidate Profile', key: 'CandidateProfile' },
                { label: 'Available Choices', key: 'AvailableChoices' },
                { label: 'Choice Filling', key: 'ChoiceFilling' },
                { label: 'Applied Choices', key: 'AppliedChoices' },
                { label: 'Choice Locking', key: 'ChoiceLocking' },
              ].map(({ label, key }) => (
                <li
                  key={key}
                  onClick={() => isEnabled(key) && setActiveSection(key)}
                  className={`px-4 py-2 border-b last:border-b-0 ${isEnabled(key) ? navItemClass(key) : disabledClass
                    }`}
                >
                  {label}
                </li>
              ))}
            </ul>
          </div>

          {/* Documents */}
          <div className="bg-white border rounded shadow">
            <h2 className="bg-blue-100 text-blue-800 text-base font-semibold px-4 py-2 rounded-t">
              Documents
            </h2>
            <ul className="text-sm">
              <li className={`px-4 py-2 ${disabledClass}`}>
                View/Download Letters
              </li>
            </ul>
          </div>

          {/* Verification Status */}
          <div className="bg-white border rounded shadow">
            <h2 className="bg-blue-100 text-blue-800 text-base font-semibold px-4 py-2 rounded-t">
              Verification Status
            </h2>
            <ul className="text-sm px-4 py-2 space-y-2">
              <li className="flex items-center gap-2 text-green-600">
                <FaCircleCheck /> <span>Mobile Number Verified</span>
              </li>
              <li className="flex items-center gap-2 text-green-600">
                <FaCircleCheck /> <span>Email Verified</span>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="bg-white border rounded shadow">
            <h2 className="bg-blue-100 text-blue-800 text-base font-semibold px-4 py-2 rounded-t">
              Contact Us
            </h2>
            <div className="text-sm text-gray-700 px-4 py-2 space-y-1">
              <p>📧 ccmt2025helpdesk@svnit.ac.in</p>
              <p>📍 SVNIT, Surat</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-9/12 bg-white border rounded shadow p-5 max-h-screen overflow-y-auto">
          {renderComponent()}
        </div>
      </main>
    </div>
  );
};

export default AdmissionHome;
