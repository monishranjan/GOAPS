const data = [
  {
    institute: "VNIT Nagpur",
    programs: [
      { name: "CSE", status: "Rejected" },
      { name: "Data Science", status: "Approved" },
      { name: "Artificial Intelligence", status: "Approved" },
    ],
  },
  {
    institute: "NIT Surathkal",
    programs: [
      { name: "CSE", status: "Rejected" },
      { name: "Software Engineering", status: "Rejected" },
      { name: "AI & ML", status: "Rejected" },
    ],
  },
  {
    institute: "NIT Warangal",
    programs: [
      { name: "CSE", status: "Rejected" },
      { name: "Data Science", status: "Rejected" },
      { name: "Cybersecurity", status: "Approved" },
    ],
  },
  {
    institute: "IIT Dhanbad",
    programs: [
      { name: "CSE", status: "Rejected" },
      { name: "Artificial Intelligence", status: "Rejected" },
      { name: "Information Security", status: "Rejected" },
    ],
  },
  {
    institute: "NIT Rourkela",
    programs: [
      { name: "CSE", status: "Rejected" },
      { name: "Artificial Intelligence", status: "Rejected" },
      { name: "Data Science", status: "Rejected" },
      { name: "Data Analytics", status: "Approved" },
    ],
  },
  {
    institute: "NIT Silchar",
    programs: [
      { name: "CSE", status: "Rejected" },
      { name: "AI & ML", status: "Approved" },
      { name: "Data Science", status: "Rejected" },
      { name: "Data Analytics", status: "Rejected" },
    ],
  },
  {
    institute: "DTU",
    programs: [
      { name: "Software Engineering", status: "Rejected" },
      { name: "Information Technology", status: "Approved" },
      { name: "CSE", status: "Rejected" },
      { name: "AI & ML", status: "Rejected" },
    ],
  },
  {
    institute: "IIT Jammu",
    programs: [
      { name: "CSE", status: "Rejected" },
      { name: "Cybersecurity", status: "Rejected" },
      { name: "AI & Data Science", status: "Rejected" },
    ],
  },
  {
    institute: "IIT Jodhpur",
    programs: [
      { name: "CSE", status: "Rejected" },
      { name: "Artificial Intelligence", status: "Rejected" },
      { name: "Software Engineering", status: "Rejected" },
    ],
  },
  {
    institute: "NIT Meghalaya",
    programs: [
      { name: "Data Science", status: "Rejected" },
      { name: "CSE", status: "Rejected" },
    ],
  },
  {
    institute: "NIT Agartala",
    programs: [
      { name: "CSE", status: "Rejected" },
      { name: "Artificial Intelligence", status: "Rejected" },
    ],
  },
  {
    institute: "State Government Engineering College Bhopal",
    programs: [
      { name: "Information Technology", status: "Rejected" },
      { name: "CSE", status: "Rejected" },
    ],
  },
];

// Generate applied choices from the above data
export const appliedChoices = [];

let choiceNumber = 1;

data.forEach(({ institute, programs }) => {
  programs.forEach(({ name, status }) => {
    appliedChoices.push({
      institute,
      program: `M.Tech ${name}`,
      address: `Institute Address ${choiceNumber}`,
      pincode: `${560100 + choiceNumber}`,
      choiceNumber,
      status,
    });

    choiceNumber++;
  });
});
