let asyncFunction = () => {
  return new Promise((resolve) => {
    let grade = Math.floor(Math.random() * 10);
    resolve({ message: "You Passed", grade: grade });
  });
};

let asyncFunction2 = (grade) => {
  return new Promise((resolve) => {
    resolve("You passed with high honors");
  });
};

let promise = asyncFunction();

let promise2 = promise.then((res) => {
  console.log(
    `The response of the promise is: ${res.message} with a ${res.grade}`
  );
  return asyncFunction2(res.grade);
});

promise2.then((res) => {
  console.log(res);
});

console.log("This code is Async");
