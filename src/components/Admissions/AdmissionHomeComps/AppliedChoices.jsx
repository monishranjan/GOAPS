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
  const [selectedStatus, setSelectedStatus] = useState("All Statuses");

  const uniqueInstitutes = [...new Set(dummyData.map(item => item.institute))];
  const uniquePrograms = [...new Set(dummyData.map(item => item.program))];
  const statusOptions = [
    "All Statuses",
    ...Array.from(new Set(dummyData.map((item) => item.status))),
  ];

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

      const matchesStatus =
        selectedStatus === "All Statuses" || item.status === selectedStatus;

      return matchesText && matchesInstitute && matchesProgram && matchesStatus;
    });

    setFiltered(results);
  }, [search, selectedInstitute, selectedProgram, selectedStatus]);

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
    setSelectedStatus("All Statuses");
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

  // Badge styling based on status
  const getStatusBadge = (status) => {
    switch (status) {
      case "Approved":
        return "bg-green-100 text-green-700";
      case "Rejected":
        return "bg-red-100 text-red-700";
      case "Applied":
        return "bg-yellow-100 text-yellow-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
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

            <select
              className="border px-3 py-2 rounded text-sm"
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
            >
              {statusOptions.map((status, index) => (
                <option key={index} value={status}>{status}</option>
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
            <table className="min-w-full bg-white border rounded text-sm table-fixed">
              <thead className="bg-[#052963] text-white sticky top-0 z-10">
                <tr>
                  <th className="px-4 py-2 w-16 text-left">Sr. No</th>
                  <th className="px-4 py-2 w-1/4 text-left">Institute Name</th>
                  <th className="px-4 py-2 w-1/4 text-left">Program</th>
                  <th className="px-4 py-2 w-20 text-left">Choice #</th>
                  <th className="px-4 py-2 w-28 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                {displayList.map((item, idx) => (
                  <tr key={idx} className="border-t">
                    <td className="px-4 py-2 text-left">{idx + 1}</td>
                    <td className="px-4 py-2 text-left">{item.institute}</td>
                    <td className="px-4 py-2 text-left">{item.program}</td>
                    <td className="px-4 py-2 text-left">{item.choiceNumber}</td>
                    <td className="px-4 py-2 text-left">
                      <span
                        className={`px-2 py-1 rounded font-medium text-xs ${getStatusBadge(item.status)}`}
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
