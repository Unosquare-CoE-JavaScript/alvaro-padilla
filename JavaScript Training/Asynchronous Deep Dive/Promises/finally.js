"use strict";

let asyncFunction = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Async Function fired!");
    }, 2000);
  });
};

asyncFunction()
  .then((msg) => console.log(msg))
  .catch((err) => console.error(err))
  .finally(() => console.log("Async Function has finished."));
