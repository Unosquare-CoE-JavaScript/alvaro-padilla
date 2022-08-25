"use strict";

let logCall = function () {
  console.log("logCall was called back.");
};

setTimeout(logCall, 3000); //logCall is a Callback function

setTimeout(function () {
  console.log("Anonymous function called back");
}, 2000);

setTimeout(() => {
  console.log("Anynymous arrow function called back");
}, 1000);

document.addEventListener("DOMContentLoaded", (e) => {
  let btn = document.getElementById("btn1");

  btn.addEventListener("click", (event) => {
    console.log("The button was clicked");
    console.log(event);
  });
});
