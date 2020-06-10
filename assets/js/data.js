"use strict";

//Returns parsed data
const getData = (name) => {
  return JSON.parse(localStorage.getItem(name));
};

//Return character in collection from parsed data
const getChar = (value, coll) => {
  const dataToSearch = getData(coll);
  for (let i = 0; i < dataToSearch.length; i++) {
    if (dataToSearch[i].name === value) {
      return dataToSearch[i];
    }
  }
};

//Fetching all data to localstorage
//Choosed to save everything to ls based on limited data dransfer(people 82)
//Probably better to fetch via each pagination if datastream is bigger.
const charContainer = document.querySelector(".sw-main .sw-main__characters");
const swapiURL = `http://swapi.dev/api/people/`;
let charCollection = ``;
let fetchCount = 0;
const initData = (url) => {
  if (url != null) {
    fetch(url)
      .then((data) => data.json())
      .then((page) => {
        const pageURL = page["next"];
        const results = page["results"];
        charCollection = `char-collection_${fetchCount++}`;
        localStorage.setItem(charCollection, JSON.stringify(results));
        if(charCollection.includes("8")) {
          drawCharTiles();
          swLoader(false);
        }
        initData(pageURL);
      })
      .catch((err) => console.log("Error in pageFetch: " + err));
  }
};

!localStorage.getItem("char-collection_0")
  ? initData(swapiURL)
  : console.log("item exists");
