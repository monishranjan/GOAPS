import React, { useState, useEffect } from "react";
import { appliedChoices as dummyData } from "./data/appliedChoices";

import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const AppliedChoices = () => {
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState([]);
  const displayList = filtered.length ? filtered : dummyData;

  const [selectedInstitute, setSelectedInstitute] = useState("All Institutes");
  const [selectedProgram, setSelectedProgram] = useState("All Programs");


  const uniqueInstitutes = [...new Set(dummyData.map(item => item.institute))];
  const uniquePrograms = [...new Set(dummyData.map(item => item.program))];

  useEffect(() => {
    const term = search.toLowerCase();

    const results = dummyData.filter(item => {
      const matchesText =
        item.institute.toLowerCase().includes(term) ||
        item.program.toLowerCase().includes(term) ||
        item.address.toLowerCase().includes(term) ||
        item.pincode.includes(term);

      const matchesInstitute =
        selectedInstitute === "All Institutes" || item.institute === selectedInstitute;

      const matchesProgram =
        selectedProgram === "All Programs" || item.program === selectedProgram;

      return matchesText && matchesInstitute && matchesProgram;
    });

    setFiltered(results);
  }, [search, selectedInstitute, selectedProgram]);


  const handleSearch = () => {
    const term = search.toLowerCase();

    const results = dummyData.filter(item => {
      const matchesText =
        item.institute.toLowerCase().includes(term) ||
        item.program.toLowerCase().includes(term) ||
        item.address.toLowerCase().includes(term) ||
        item.pincode.includes(term);

      const matchesInstitute =
        selectedInstitute === "All Institutes" || item.institute === selectedInstitute;

      const matchesProgram =
        selectedProgram === "All Programs" || item.program === selectedProgram;

      return matchesText && matchesInstitute && matchesProgram;
    });

    setFiltered(results);
  };


  const clearFilters = () => {
    setSearch("");
    setSelectedInstitute("All Institutes");
    setSelectedProgram("All Programs");
    setFiltered([]);
  };


  const handlePrint = () => {
    const doc = new jsPDF();

    doc.text("Applied Choices", 14, 15);

    autoTable(doc, {
      startY: 20,
      head: [["Sr. No", "Institute Name", "Program", "Choice #", "Status"]],
      body: displayList.map((item, idx) => [
        idx + 1,
        item.institute,
        item.program,
        item.choiceNumber,
        item.status,
      ]),
    });

    doc.save("applied-choices.pdf");
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col h-full max-h-[calc(100vh-200px)]">
        {/* Filters */}
        <div className="space-y-4 shrink-0">
          <div className="flex gap-4 flex-wrap">
            <select
              className="border px-3 py-2 rounded text-sm"
              value={selectedInstitute}
              onChange={(e) => setSelectedInstitute(e.target.value)}
            >
              <option>All Institutes</option>
              {uniqueInstitutes.map((inst, index) => (
                <option key={index} value={inst}>{inst}</option>
              ))}
            </select>

            <select
              className="border px-3 py-2 rounded text-sm"
              value={selectedProgram}
              onChange={(e) => setSelectedProgram(e.target.value)}
            >
              <option>All Programs</option>
              {uniquePrograms.map((prog, index) => (
                <option key={index} value={prog}>{prog}</option>
              ))}
            </select>

          </div>


          <div className="flex items-center gap-2 w-full">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Search by institute/program/address/pincode..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full border px-4 py-2 rounded text-sm"
              />
              <button
                onClick={handleSearch}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#052963] text-white px-2 py-1 rounded text-sm"
              >
                Search
              </button>
            </div>
            <button
              onClick={clearFilters}
              className="bg-red-500 text-white px-3 py-2 rounded text-sm"
            >
              Clear Filters
            </button>
          </div>

          <button
            onClick={handlePrint}
            className="bg-green-600 text-white px-4 py-2 rounded text-sm hover:cursor-pointer"
          >
            Print List of Applied Choices
          </button>
        </div>

        {/* Scrollable Table */}
        <div className="overflow-y-auto mt-4 grow">
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border rounded text-sm">
              <thead className="bg-[#052963] text-white sticky top-0 z-10">
                <tr>
                  <th className="px-4 py-2">Sr. No</th>
                  <th className="px-4 py-2">Institute Name</th>
                  <th className="px-4 py-2">Program</th>
                  <th className="px-4 py-2">Choice #</th>
                  <th className="px-4 py-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {displayList.map((item, idx) => (
                  <tr key={idx} className="border-t">
                    <td className="px-4 py-2">{idx + 1}</td>
                    <td className="px-4 py-2">{item.institute}</td>
                    <td className="px-4 py-2">{item.program}</td>
                    <td className="px-4 py-2">{item.choiceNumber}</td>
                    <td className="px-4 py-2">
                      <span
                        className={`px-2 py-1 rounded font-medium text-xs ${item.status === "Confirmed"
                          ? "bg-green-100 text-green-700"
                          : item.status === "Pending"
                            ? "bg-yellow-100 text-yellow-700"
                            : item.status === "Rejected"
                              ? "bg-red-100 text-red-700"
                              : "bg-gray-100 text-gray-700"
                          }`}
                      >
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

    </div>
  );
};

export default AppliedChoices;
