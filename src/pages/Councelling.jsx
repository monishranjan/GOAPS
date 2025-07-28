import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const dummyApplications = [
  {
    college: "IIT Bombay",
    course: "M.Tech Computer Science",
    status: "Rejected",
  },
  {
    college: "IIT Delhi",
    course: "M.Tech Data Science",
    status: "Pending",
  },
  {
    college: "NIT Trichy",
    course: "M.Tech VLSI Design",
    status: "Applied",
  },
  {
    college: "NIT Warangal",
    course: "M.Tech AI",
    status: "Apply for Round Two",
  },
];

const getStatusColor = (status) => {
  switch (status.toLowerCase()) {
    case "rejected":
      return "bg-red-100 text-red-800";
    case "pending":
      return "bg-yellow-100 text-yellow-800";
    case "applied":
      return "bg-green-100 text-green-800";
    case "apply for round two":
      return "bg-blue-100 text-blue-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

const Counselling = () => {
  const navigate = useNavigate();
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    // Simulate fetching from API
    setApplications(dummyApplications);
  }, []);

  return (
    <div className="min-h-screen bg-white px-10 py-8">
      <h1 className="text-3xl font-bold text-[#1e280c] mb-6">
        WHCounselling Status
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {applications.map((app, index) => (
          <div
            key={index}
            className="border border-gray-300 p-6 rounded-xl shadow-sm hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold mb-2">{app.college}</h2>
            <p className="text-lg text-gray-700 mb-4">
              Course: <strong>{app.course}</strong>
            </p>
            <span
              className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                app.status
              )}`}
            >
              {app.status}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <button
          onClick={() => navigate("/home")}
          className="bg-[#2c3a13] text-white px-6 py-3 rounded hover:bg-[#3b4c1a] transition"
        >
          Back to Dashboard
        </button>
      </div>
    </div>
  );
};

export default Counselling;
