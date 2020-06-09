const initSearch = (() => {
  //Pushin all content to array for search
  const searchArr = [];
  for (let i = 0; i < localStorage.length; i++) {
    const item = getData(`char-collection_${i}`);
    for (let i = 0; i < item.length; i++) {
      searchArr.push(item[i]);
    }
  }
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
      const result = getResult(searchArr, input);
      input.length <= 0
        ? drawCharTiles("char-collection_0", "")
        : drawCharTiles("test", result);
    });
})();
