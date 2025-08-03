// File: DocumentVerification.jsx

import React, { useState } from "react";

const documentsList = [
  {
    title: "College Result",
    fileName: "college_result.pdf",
  },
  {
    title: "12th Marksheet",
    fileName: "marksheet_12th.pdf",
  },
  {
    title: "Aadhar Card",
    fileName: "aadhar_card.pdf",
  },
  {
    title: "PAN Card",
    fileName: "pan_card.png",
  },
];

export default function DocumentVerification() {
  const [isVerified, setIsVerified] = useState(false);

  const handleView = (fileName) => {
    const url = `/docs/${fileName}`;
    window.open(url, "_blank");
  };

  const handleUpload = (title) => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".pdf,.png,.jpg,.jpeg";
    input.onchange = (e) => {
      const file = e.target.files[0];
      if (file) {
        alert(`Selected file for ${title}: ${file.name}`);
      }
    };
    input.click();
  };

  const handleSendForVerification = () => {
    setIsVerified(true);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">📄 Document Verification</h2>
      <div className="grid gap-4">
        {documentsList.map(({ title, fileName }) => (
          <div
            key={fileName}
            className="border p-4 rounded-md flex justify-between items-center"
          >
            <div>
              <p className="font-medium">{title}</p>
              {isVerified && (
                <p className="text-yellow-600 font-medium mt-1">
                  Status: Processing
                </p>
              )}
            </div>
            <div className="space-x-2">
              <button
                onClick={() => handleView(fileName)}
                className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
              >
                View
              </button>
              {!isVerified && (
                <button
                  onClick={() => handleUpload(title)}
                  className="bg-gray-200 text-gray-800 px-3 py-1 rounded hover:bg-gray-300"
                >
                  Upload
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {!isVerified && (
        <div className="mt-6 text-right">
          <button
            onClick={handleSendForVerification}
            className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700"
          >
            Send for Verification
          </button>
        </div>
      )}
    </div>
  );
}
