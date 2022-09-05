"use strict";

const jsonURL = "https://jsonplaceholder.typicode.com";

let userPosts;

const getPostByUser = async (userId) => {
  let allPosts = await fetch(`${jsonURL}/posts`).then((res) => res.json());

  let filteredPost = allPosts.filter((p) => p.userId === userId);

  return filteredPost;
};

getPostByUser(1).then((posts) => (userPosts = posts));
