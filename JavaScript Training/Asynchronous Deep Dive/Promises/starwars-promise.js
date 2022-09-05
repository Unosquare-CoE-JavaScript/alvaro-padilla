"use strict";

const swAPI = "https://swapi.dev/api/";

const retrieveSWData = (characterNum) => {
  fetch(`${swAPI}people/${characterNum}`)
    .then((res) => res.json())
    .then((chracter) => {
      console.log(chracter);
      return fetch(chracter.homeworld);
    })
    .then((res) => res.json())
    .then((planet) => console.log(planet));
};

let randomNum = Math.floor(Math.random() * 100);
console.log(randomNum);

retrieveSWData(randomNum);
