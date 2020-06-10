const initSearch = (() => {
 
  //Pushin all content to array for search
  const searchArr = [];
  for (let i = 0; i < localStorage.length; i++) {
    const cName = `char-collection_${i}`;
    const item = getData(cName);
    for (let j = 0; j < item.length; j++) {
      item[j]["coll"] = cName;
      searchArr.push(item[j]);
    }
  }
  console.log(searchArr);
  //Returns result by using array method filter
  const getResult = (arr, value) => {
    result = arr.filter((input) => input["name"].toString().toLowerCase().includes(value.toLowerCase()));
    result.length <= 0 ? console.log("empty") : console.log("true");
    return result;
  };

  //Applying listener, getting result
  document
    .querySelector("input[name='search']")
    .addEventListener("input", (event) => {
      const input = event.target.value;
      input.length <= 0
        ? drawCharTiles("char-collection_0", "")
        : drawCharTiles(``, getResult(searchArr, input));
    });
})();

