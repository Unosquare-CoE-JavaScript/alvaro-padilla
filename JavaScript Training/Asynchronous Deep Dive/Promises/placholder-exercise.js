var MAINAPP = ((nsp) => {
  "use strict";

  const urlAPI = "https://jsonplaceholder.typicode.com";

  fetch(`${urlAPI}/posts`)
    .then((res) => res.json())
    .then((p) => (nsp.posts = p))
    .catch((error) => console.log(`Error getting posts: ${error}`));

  fetch(`${urlAPI}/comments`)
    .then((res) => res.json())
    .then((c) => (nsp.comments = c))
    .catch((error) => console.log(`Error getting comments: ${error}`));

  fetch(`${urlAPI}/todos`)
    .then((res) => res.json())
    .then((t) => (nsp.todos = t))
    .catch((error) => console.log(`Error getting todos: ${error}`));

  return nsp;
})(MAINAPP || {});
