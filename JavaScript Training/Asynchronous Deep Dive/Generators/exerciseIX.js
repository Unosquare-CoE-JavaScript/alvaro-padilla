"use strict";

const randomGen = function* (num) {
  while (true) {
    yield Math.floor(Math.random() * num) + 1;
  }
};

let rg = randomGen(100);
