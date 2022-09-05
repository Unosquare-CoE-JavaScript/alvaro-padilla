"use strict";

let promise = new Promise(resolve, (reject) => {
  setTimeout(() => {
    resolve("Done");
  }, 4000);
});

promise.then((res) => console.log(res));

console.log("This code is async");

let timeOut = (time) => {
  return new Promise((resolve, reject) => {
    if (typeof time !== "number") {
      reject("Time is not a number");
    } else {
      setTimeout(resolve, time);
    }
  });
};

timeOut(2000)
  .then(() => {
    console.log("Timeout was completed");
  })
  .catch((error) => {
    console.error(error);
  });
