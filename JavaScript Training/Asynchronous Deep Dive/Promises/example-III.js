"use strict";

const swAPI = "https://swapi.dev/api/";

const swPlanets = (movieNum) => {
  fetch(`${swAPI}films/${movieNum}`)
    .then((res) => res.json())
    .then((movie) => {
      console.log(`Movie Name: ${movie.title}`);
      movie.planets.forEach((p) =>
        fetch(p)
          .then((res) => res.json())
          .then((planet) => {
            console.log(planet.name);
          })
      );
    })
    .catch((err) => console.log(err));
};

randomNum = Math.floor(Math.random() * 7);

swPlanets(randomNum);
