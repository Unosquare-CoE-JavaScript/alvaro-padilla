"use strict";

const swAPI = "https://swapi.dev/api";

const getSWMovies = async () => {
  let movData = await fetch(`${swAPI}/films`).then((res) => res.json());
  let films = [];

  films = movData.results.map((m) => m.title);

  console.log(films);
};

getSWMovies();
