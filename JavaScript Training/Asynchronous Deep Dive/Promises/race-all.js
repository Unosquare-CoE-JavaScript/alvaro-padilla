"use strict";

let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Done");
  }, 4000);
});

p1.then(
  (res) => console.log(res),
  (err) => console.error(err)
);

let firstName = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Alvaro");
    }, 5000);
  });
};

let lastName = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Padilla");
    }, 1000);
  });
};

let middleName = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("E.");
    }, 8000);
  });
};

Promise.all([firstName(), lastName(), middleName()]).then((res) => {
  console.log(`The resutl is: ${res[0] + " " + res[2] + " " + res[1]}`);
});

Promise.race([firstName(), lastName(), middleName()]).then((res) => {
  console.log(res);
});

console.log("Async Code");
