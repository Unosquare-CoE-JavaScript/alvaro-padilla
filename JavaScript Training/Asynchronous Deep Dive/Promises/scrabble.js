var MAINAPP = MAINAPP || {};

((nsp) => {
  "use strict";

  const wordnikAPI = "http://api.wordnik.com/v4/";
  const scrabblePath = "word.json/";
  const apiKey = "a49f4u9bn7frz800htur0fgux534ehqc0uek6t7gj45q6pp7e";

  let scrabbleScore = 0;

  const getScrabbleValue = (word) => {
    fetch(`${wordnikAPI + scrabblePath + word}/scrabbleScore?api_key=${apiKey}`)
      .then((res) => res.json())
      .then((score) => {
        console.log(score);
        scrabbleScore = score;
        let resultSpan = document.getElementById("results");
        resultSpan.innerHTML = scrabbleScore;
      })
      .catch((err) => console.log(err));
  };

  document.addEventListener("DOMContentLoaded", (e) => {
    let btn = document.getElementById("submitBtn");
    btn.addEventListener("click", (e) => {
      let word = document.getElementById("word").value;
      console.log(word);
      getScrabbleValue(word);
    });
  });

  nsp.score = score;
})(MAINAPP);
