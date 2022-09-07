"use strict";

function* genTest() {
  let x = 0;
  console.log("Start");
  x++;
  yield console.log(x);
  x++;
  console.log(x);
  x++;
  console.log("End");

  return x;
}

let gen = genTest();

const test = function* () {
  yield 10;
  yield 20;
  yield 30;
};

let it = test();

console.log("Code...");
