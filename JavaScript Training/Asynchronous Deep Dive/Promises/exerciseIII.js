// "use strict";

// const massiveProcess = (num) => {
//     let result = 0;
//     for(let i = num ** 7; i >= 0; i--){
//         result += Math.atan(i) * Math.tan(i);
//     }
//     return result;
// };

// let amt = massiveProcess(10);

// console.log(`The number is ${amt}`);

// console.log(5 * 5 + 100);

const massProcess = (num) => {
  return new Promise((resolve, reject) => {
    if (typeof num !== "number") {
      reject("Not a number");
    } else {
      let result = 0;
      for (let i = num ** 7; i >= 0; i--) {
        result += Math.atan(i) * Math.tan(i);
      }
      resolve(result);
    }
  });
};

massProcess(10)
  .then((res) => {
    console.log(`The result is ${res}`);
  })
  .catch((err) => console.log(err));

console.log(5 * 5 + 100);
