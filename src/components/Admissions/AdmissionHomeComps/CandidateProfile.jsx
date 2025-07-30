import React from "react";
import { appliedChoices } from "./data/appliedChoices";
import profilePic from "../../../assets/image1.png";

const CandidateProfile = () => {
  // const totalChoices = appliedChoices.length;
  const rejectedCount = appliedChoices.filter(
    (choice) => choice.status === "Rejected"
  ).length;
  const approvedCount = appliedChoices.filter(
    (choice) => choice.status === "Partially Selected"
  ).length;
  const pendingCount = appliedChoices.filter(
    (choice) => choice.status === "Pending"
  ).length;
  // const appliedCount = appliedChoices.filter(
  //   (choice) => choice.status === "Applied"
  // ).length;

  const candidate = {
    name: "Monish Ranjan",
    registrationNumber: "CS25S24004015",
    gender: "Male",
    guardianName: "Kalpana Singh",
    guardianContact: "8651524635",
    dob: "29/11/2000",
    testPaper: "Computer Science and Information Technology (CS)",
    gateScore: 593,
    rank: 4283,
    qualifiedPrograms: 146,
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Candidate Profile</h1>

      <div className="flex flex-col md:flex-row gap-6 mb-8">
        <img
          src={profilePic}
          alt="Candidate"
          className="w-40 h-40 rounded-lg object-cover border"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
          <div>
            <label className="block text-gray-600 font-medium">Full Name</label>
            <div className="border p-2 rounded">{candidate.name}</div>
          </div>
          <div>
            <label className="block text-gray-600 font-medium">Registration No</label>
            <div className="border p-2 rounded">{candidate.registrationNumber}</div>
          </div>
          <div>
            <label className="block text-gray-600 font-medium">Gender</label>
            <div className="border p-2 rounded">{candidate.gender}</div>
          </div>
          <div>
            <label className="block text-gray-600 font-medium">Date of Birth</label>
            <div className="border p-2 rounded">{candidate.dob}</div>
          </div>
          <div>
            <label className="block text-gray-600 font-medium">Parent/Guardian Name</label>
            <div className="border p-2 rounded">{candidate.guardianName}</div>
          </div>
          <div>
            <label className="block text-gray-600 font-medium">Guardian Contact</label>
            <div className="border p-2 rounded">{candidate.guardianContact}</div>
          </div>
          <div className="sm:col-span-2">
            <label className="block text-gray-600 font-medium">Test Paper</label>
            <div className="border p-2 rounded">{candidate.testPaper}</div>
          </div>
          <div>
            <label className="block text-gray-600 font-medium">GATE Score</label>
            <div className="border p-2 rounded">{candidate.gateScore}</div>
          </div>
          <div>
            <label className="block text-gray-600 font-medium">Rank</label>
            <div className="border p-2 rounded">{candidate.rank}</div>
          </div>
          <div className="sm:col-span-2">
            <label className="block text-gray-600 font-medium">Qualified Programs</label>
            <div className="border p-2 rounded">{candidate.qualifiedPrograms}</div>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-4 text-gray-700">Application Summary</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-white">
        <div className="bg-blue-500 p-4 rounded shadow">
          <p className="text-sm">Applied</p>
          <p className="text-xl font-bold">25</p>
        </div>
        <div className="bg-green-500 p-4 rounded shadow">
          <p className="text-sm">Approved</p>
          <p className="text-xl font-bold">{approvedCount}</p>
        </div>
        <div className="bg-red-500 p-4 rounded shadow">
          <p className="text-sm">Rejected</p>
          <p className="text-xl font-bold">{rejectedCount}</p>
        </div>
        <div className="bg-yellow-500 text-black p-4 rounded shadow">
          <p className="text-sm">Pending</p>
          <p className="text-xl font-bold">{pendingCount}</p>
        </div>
      </div>
    </div>
  );
};

export default CandidateProfile;
