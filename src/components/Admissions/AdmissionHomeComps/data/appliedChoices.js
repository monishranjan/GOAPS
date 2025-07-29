// src/data/appliedChoices.js

const data = [
  { institute: "NIT Tiruchirappalli", programs: ["CSE", "AI & DS"] },
  { institute: "NIT Surathkal", programs: ["CSE", "AI & DS"] },
  { institute: "NIT Warangal", programs: ["CSE", "AI & DS"] },
  { institute: "IIT Dhanbad", programs: ["CSE", "AI & DS"] },
  { institute: "NIT Rourkela", programs: ["CSE"] },
  { institute: "DTU", programs: ["CSE", "Software Engineering", "IT", "AI & ML", "Data Science"] },
  { institute: "IIT Jammu", programs: ["CSE", "AI & DS"] },
  { institute: "IIT Jodhpur", programs: ["CSE", "AI & DS"] },
  { institute: "NIT Calicut", programs: ["CSE"] },
  { institute: "NIT Jaipur", programs: ["CSE"] },
  { institute: "NIT Silchar", programs: ["CSE"] },
  { institute: "NIT Mizoram", programs: ["CSE"] },
  { institute: "NIT Raipur", programs: ["CSE"] },
];

export const appliedChoices = Array.from({ length: 25 }, (_, idx) => {
  const instituteIdx = idx % data.length;
  const { institute, programs } = data[instituteIdx];
  const program = programs[idx % programs.length];

  const status =
    idx < 4
      ? "Rejected"
      : idx % 5 === 0
      ? "Partially Selected"
      : idx % 3 === 0
      ? "Pending"
      : "Applied";

  return {
    institute,
    program: `M.Tech ${program}`,
    address: `Institute Address ${idx + 1}`,
    pincode: `${560100 + idx}`,
    choiceNumber: idx + 1,
    status,
  };
});
