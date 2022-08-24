"use strict";

/*-----Start Synchronous Code-----*/
const testSync = function () {
  console.log("Start of Sync code");

  alert("Notice me");

  console.log("End of Sync code");
};
/*-----End Syncronous Code-----*/

/*------Start Asynchronous Code-----*/
const testAsync = function () {
  setTimeout(function () {
    console.log("Start of Async code");

    alert("Notice me");

    console.log("End of Async code");
  }, 1000);
};
/*-----End Asynchronous Code-----*/

const test2 = function () {
  console.log("Now I get the attention");
};

testSync();
//testAsync();
text2();
