// src/data/appliedChoices.js
export const appliedChoices = Array.from({ length: 100 }, (_, idx) => {
  const iitList = [
    "IIT Bombay",
    "IIT Delhi",
    "IIT Kanpur",
    "IIT Madras",
  ];
  const institute = idx < 4 ? iitList[idx] : `NIT Institute ${idx - 3}`;
  const status = idx < 4
    ? "Rejected"
    : idx % 5 === 0
    ? "Partially Selected"
    : idx % 3 === 0
    ? "Pending"
    : "Applied";

  return {
    institute,
    program: "M.Tech Computer Science",
    address: `Institute Address ${idx + 1}`,
    pincode: `${560100 + idx}`,
    choiceNumber: idx + 1,
    status,
  };
});
