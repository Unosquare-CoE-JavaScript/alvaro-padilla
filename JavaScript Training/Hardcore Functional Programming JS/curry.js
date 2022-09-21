"use strict";

const add = (x, y) => x + y;

const toPair =
  (f) =>
  ([x, y]) =>
    f(x, y);

const result = toPair(add)([5, 2]);

console.log(result);

const curry = (f) => (x) => (y) => f(x, y);

const curriedAdd = curry(add);

const increment = curriedAdd(1);

const resultCurry = increment(2);

console.log(resultCurry);
