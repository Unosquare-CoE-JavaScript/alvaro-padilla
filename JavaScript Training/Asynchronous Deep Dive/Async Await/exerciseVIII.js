var MAINAPP = ((nsp) => {
  "use strict";

  const jsonAPI = "https://jsonplaceholder.typicode.com";

  let post = fetch(`${jsonAPI}/posts`).then((res) => res.json());
  let comments = fetch(`${jsonAPI}/comments`).then((res) => res.json());
  let todos = fetch(`${jsonAPI}/todos`).then((res) => res.json());

  (async () => {
    try {
      await Promise.all([post, comments, todos]).then((res) => {
        console.log(res);
        nsp.posts = res[0];
        nsp.comments = res[1];
        nsp.todos = res[2];
        console.log("Data retrieved");
      });
    } catch (e) {
      console.error(`Error getting data: ${e}`);
    }
  })();

  console.log("Code...");

  return nsp;
})(MAINAPP || {});
