"use strict";

const wordnikAPI = "http://api.wordnik.com/v4/";
const wordsPath = "words.json/";
const wordPath = "word.json/";
const apiKey = "a49f4u9bn7frz800htur0fgux534ehqc0uek6t7gj45q6pp7e";

let wordObj;

let apiURL = `${wordnikAPI}${wordsPath}randomWord?api_key=${apiKey}`;

fetch(apiURL)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(`The word being retrieved is: ${data.word}`);
    return fetch(
      `${wordnikAPI}${wordPath}${data.word}/definitions?api_key=${apiKey}`
    );
  })
  .then((res) => {
    return res.json();
  })
  .then((def) => {
    console.log(def);
  })
  .catch((err) => {
    console.error(`API call failed. ${err}`);
  });

console.log("Promises are asynchronous");
