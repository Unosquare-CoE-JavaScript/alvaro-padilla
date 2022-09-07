"use strict";

const jsonAPI = "https://jsonplaceholder.typicode.com";

let todoObj = {
  completed: false,
  userId: 1,
  title: "Learn promises",
};

const submitTodo = async (todo) => {
  let submission = await fetch(`${jsonAPI}/todos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  })
    .then((res) => res.json())
    .catch((e) => console.error(e))
    .finally(() => console.log("Async code is completed"));
  console.log(submission);
};

submitTodo(todoObj);
console.log("Block code");
