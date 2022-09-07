var MAINAPP = ((nsp) => {
  "use strict";

  const jsonAPI = "https://jsonplaceholder.typicode.com";

  (async () => {
    try {
      let posts = await fetch(`${jsonAPI}/posts`).then((res) => res.json());
      nsp.posts = posts;
    } catch (e) {
      console.log(`Error getting data ${e}`);
    }
  })();

  return nsp;
})(MAINAPP || {});
