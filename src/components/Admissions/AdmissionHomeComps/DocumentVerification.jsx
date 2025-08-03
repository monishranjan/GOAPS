import { useRef, useState } from "react";

export default function DocumentVerification() {
  const [documents, setDocuments] = useState([
    { name: "College Result", uploaded: true, file: "college_result.pdf", status: null },
    { name: "12th Marksheet", uploaded: false, file: "", status: null },
    { name: "Aadhar Card", uploaded: false, file: "", status: null },
    { name: "PAN Card", uploaded: true, file: "pancard.pdf", status: null },
  ]);
  const [submitted, setSubmitted] = useState(false);

  const fileInputRefs = useRef([]);

  const allUploaded = documents.every((doc) => doc.uploaded);
  const anyRejected = documents.some((doc) => doc.status === "Rejected");

  const handleUploadClick = (index) => {
    if (fileInputRefs.current[index]) {
      fileInputRefs.current[index].click();
    }
  };

  const handleFileChange = (e, index) => {
    const file = e.target.files[0];
    if (file) {
      const updatedDocs = [...documents];
      updatedDocs[index].uploaded = true;
      updatedDocs[index].file = file.name;
      updatedDocs[index].status = null; // Reset status
      setDocuments(updatedDocs);
      setSubmitted(false); // Re-enable submission
    }
  };

  const handleView = (fileName) => {
    const fakeUrl = `https://example.com/documents/${fileName}`;
    window.open(fakeUrl, "_blank");
  };

  const handleSendForVerification = () => {
    // Simulate verification results
    const verifiedDocs = documents.map((doc) => {
      if (!doc.uploaded) return doc;
      // Simulate status randomly
      const status = Math.random() < 0.7 ? "Verified" : (Math.random() < 0.5 ? "Pending" : "Rejected");
      return { ...doc, status };
    });
    setDocuments(verifiedDocs);
    setSubmitted(true);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">View Documents</h2>
      <div className="space-y-4">
        {documents.map((doc, index) => (
          <div
            key={doc.name}
            className="border p-4 rounded-lg flex items-center justify-between"
          >
            <div>
              <p className="font-medium">{doc.name}</p>
              <p className="text-sm text-gray-600">
                {doc.uploaded ? `Uploaded: ${doc.file}` : "Not uploaded"}
              </p>
            </div>

            {submitted ? (
              doc.status === "Verified" ? (
                <span className="text-green-600 font-medium text-sm">✔ Document Verified</span>
              ) : doc.status === "Pending" ? (
                <span className="text-yellow-600 font-medium text-sm">⏳ Pending Review</span>
              ) : (
                <>
                  <input
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    className="hidden"
                    ref={(el) => (fileInputRefs.current[index] = el)}
                    onChange={(e) => handleFileChange(e, index)}
                  />
                  <button
                    onClick={() => handleUploadClick(index)}
                    className="px-3 py-1 text-sm bg-red-600 text-white rounded"
                  >
                    Re-upload
                  </button>
                </>
              )
            ) : doc.uploaded ? (
              <button
                onClick={() => handleView(doc.file)}
                className="text-blue-600 underline text-sm cursor-pointer"
              >
                View
              </button>
            ) : (
              <>
                <input
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png"
                  className="hidden"
                  ref={(el) => (fileInputRefs.current[index] = el)}
                  onChange={(e) => handleFileChange(e, index)}
                />
                <button
                  onClick={() => handleUploadClick(index)}
                  className="px-3 py-1 text-sm bg-blue-600 text-white rounded"
                >
                  Upload
                </button>
              </>
            )}
          </div>
        ))}
      </div>

      <div className="mt-6 text-right">
        {!submitted || anyRejected ? (
          <button
            disabled={!allUploaded}
            onClick={handleSendForVerification}
            className={`px-5 py-2 rounded text-white font-medium ${
              allUploaded ? "bg-green-600 hover:bg-green-700" : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            Send for Verification
          </button>
        ) : (
          <p className="text-green-700 font-semibold">All documents are verified ✅</p>
        )}
      </div>
    </div>
  );
}
