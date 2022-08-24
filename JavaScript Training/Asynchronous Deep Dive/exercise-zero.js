"use strict";

const students = [
  {
    name: "Mary",
    score: 90,
    school: "East",
  },
  {
    name: "James",
    score: 100,
    school: "East",
  },
  {
    name: "Steve",
    score: 40,
    school: "East",
  },
  {
    name: "Gave",
    score: 90,
    school: "West",
  },
  {
    name: "Rachel",
    score: 85,
    school: "East",
  },
  {
    name: "Rochelle",
    score: 95,
    school: "West",
  },
  {
    name: "Lynette",
    score: 75,
    school: "East",
  },
];

let processStudents = function (data, callback) {
  for (let i = 0; i < data.length; i++) {
    if (data[i].school.toLowerCase() === "east") {
      if (typeof callback === "function") {
        callback(data[i]);
      }
    }
  }
};

console.log("Before determineTotal");

let determineTotal = function () {
  let total = 0;
  let count = 0;

  processStudents(students, (res) => {
    total = total + res.score;
    count++;
  });
  console.log(`Total score: ${total} - Total count: ${count}`);
};

setTimeout(determineTotal, 0);

console.log("End of code");
