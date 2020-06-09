const drawCharTiles = (coll, searchResult = "") => {
  const charContainer = document.querySelector(".sw-main .sw-main__characters");
  charContainer.innerHTML = ``;
  
  let data = [];
  searchResult.length > 0 
  ? (data = searchResult) 
  : (data = getData(coll));

  data.forEach((item) => {
    charContainer.innerHTML += drawCharacterBase(item, coll);
  });
  
};

//Inits first page
drawCharTiles("char-collection_0");


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
