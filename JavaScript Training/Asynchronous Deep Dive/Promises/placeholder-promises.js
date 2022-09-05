"use strict";

const placeholderURL = "https://jsonplaceholder.typicode.com/";

fetch(`${placeholderURL}todos/`)
  .then((res) => res.json())
  .then((placeholder) => console.log(placeholder));

let todo = {
  completed: false,
  userId: 1,
  title: "Complete Learning Path",
};

fetch(`${placeholderURL}todos/`, {
  method: "POST",
  headers: {
    "Content-type": "application/json",
  },
  body: JSON.stringify(todo),
})
  .then((res) => res.json())
  .then((todo) => console.log(todo))
  .catch((err) => console.err(`POST Method failed. ${err}`));
