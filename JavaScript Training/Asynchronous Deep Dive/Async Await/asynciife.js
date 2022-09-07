"use strict";

const jsonAPI = "https://jsonplaceholder.typicode.com";

(async () => {
  let todos = await fetch(`${jsonAPI}/todos`)
    .then((res) => res.json())
    .catch((e) => console.log(e))
    .finally(() => console.log("Async function is completed."));

  console.log(todos);
})();

console.log("Another coder");
