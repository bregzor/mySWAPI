const getData = (name) => {
  return JSON.parse(localStorage.getItem(name));
};

const drawCharTiles = (coll = "char-collection_0", searchResult = "") => {
  const charContainer = document.querySelector(".sw-main .sw-main__characters");
  charContainer.innerHTML = ``;
  let data = [];
  if (searchResult.length > 0) {
    data = searchResult;
    data.forEach((item) => {
      charContainer.innerHTML += drawCharacterBase(item, item["coll"], 0);
    });
  } else {
    data = getData(coll);
    data.forEach((item, itemCount) => {
      charContainer.innerHTML += drawCharacterBase(item, coll, 0);
    });
  }
};

drawCharTiles();

//Return character in collection
const getChar = (name, coll) => {
  const dataToSearch = getData(coll);
  for (var i = 0; i < dataToSearch.length; i++) {
    if (dataToSearch[i].name === name) {
      return dataToSearch[i];
    }
  }
};
