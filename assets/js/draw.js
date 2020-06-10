const getData = (name) => {
  return JSON.parse(localStorage.getItem(name));
};

const drawCharTiles = (coll = "char-collection_0", searchResult = "") => {
  const charContainer = document.querySelector(".sw-main .sw-main__characters");
  charContainer.innerHTML = ``;
  let data = [];
  if(searchResult.length > 0) {
    data = searchResult;
    data.forEach((item) => {
      charContainer.innerHTML += drawCharacterBase(
        item,
        item["coll"],
        0
      );
    })
  } else {
    data = getData(coll);
    data.forEach((item, itemCount) => {
      charContainer.innerHTML += drawCharacterBase(item, coll, 0);
    })
  }
};

drawCharTiles();


const search = (nameKey, myArray) => {
  for (var i = 0; i < myArray.length; i++) {
    if (myArray[i].name === nameKey) {
      return myArray[i];
    }
  }
};

const getChar = (name, coll) => {
  const dataToSearch = getData(coll);
  return search(name, dataToSearch);
};
