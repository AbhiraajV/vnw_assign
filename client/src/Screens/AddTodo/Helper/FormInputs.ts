const formInputs = [
  {
    type: "text",
    header: "What are you upto?",
    placeholder: "Breif text describing what you want to acheive.",
    state: "todoTitle",
  },
  {
    type: "date",
    header: "By when do you want to complete it?",
    placeholder: "Date in DD/MM/YY.",
    state: "Deadline",
  },
  {
    type: "choose",
    header: "Add a Tag",
    choices: ["Personal", "Home", "Office"],
    state: "tag",
  },
];

export default formInputs;
