var MAINAPP = ((nsp) => {
  "use strict";

  const urlAPI = "https://jsonplaceholder.typicode.com";

  let getPosts = fetch(`${urlAPI}/posts`).then((res) => res.json());

  let getComments = fetch(`${urlAPI}/comments`).then((res) => res.json());

  let getTodos = fetch(`${urlAPI}/todos`).then((res) => res.json());

  Promise.all([getPosts, getComments, getTodos])
    .then((res) => {
      nsp.posts = res[0];
      nsp.comments = res[1];
      nsp.todos = res[2];
    })
    .catch((err) => console.error(err))
    .finally(() => console.log("All data received"));

  return nsp;
})(MAINAPP || {});
