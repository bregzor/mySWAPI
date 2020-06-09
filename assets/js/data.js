
"use strict";
//FETCHING ALL DATA TO LOCALSTORAGE TO BE USED LATER ON
//Choosed to save everything to LS based on limited data dransfer(people 82)
//Probably better to fetch via each pagination if datastream is bigger.

const allCharacters = [];
const charContainer = document.querySelector(".sw-main .sw-main__characters");
const swapiURL = `http://swapi.dev/api/people/`;
let count = 0;

const initData = (url) => {
  fetch(url)
    .then((data) => data.json())
    .then((page) => {
      const pageURL = page["next"];
      const results = page["results"];
      localStorage.setItem(
        `char-collection_${count++}`,
        JSON.stringify(results)
      );
      initData(pageURL);
    })
    .catch((err) => console.log("Error in pageFetch: " + err));
};

const getData = (name) => {
  return JSON.parse(localStorage.getItem(name));
};

!localStorage.getItem("char-collection_0") ? initData(swapiURL) : console.log("ALREADY IN STORAGE");
