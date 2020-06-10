let count = 0;

//Draws each collection from localstorage based on arrow step count
const paginate = (direction) => {
  const current = `char-collection_${count}`;
  const next = `char-collection_${count + 1}`;
  count >= 0 && count <= 7
    ? direction === "right"
      ? drawCharTiles(next)
      : drawCharTiles(current)
    : (count = 1);
};

document.querySelector(".sw-main").addEventListener("click", () => {

  //Calls paginate function based on which arrow clicked
  const arrow = event.target.className;
  if (arrow.includes("left")) {
    count -= 1;
    paginate("left");
  } else if (arrow.includes("right")) {
    count += 1;
    paginate("right");
  }
  //Sets state
  displayArrows();

  //Draws character profile
  let target = event.target;
  if (target.className.includes("__characters__item") || target.localName === "h3") {

    if(target.localName === "h3") {
      target = target.parentElement;
    }
    
    const coll = target.dataset.coll;
    const name = target.textContent.trim();
    const char = getChar(name, coll);
    target.innerHTML = drawCharacterProfile(char);
    target.querySelector(".sw-main__characters__item-inner").classList.add("item-fadeIn");
    target.classList.add("item-grow");
    target.innerHTML += drawCloseBtn();
  }
});

//Closes character profile
const closeCharTile = (e) => {
  e.target.parentElement.classList.remove("item-grow");
  e.target.previousElementSibling.remove();
  e.target.remove();
};

//Determines if arrow should be shown
const displayArrows = () => {
  const leftArrow = document.querySelector(".fa-arrow-circle-left");
  const rightArrow = document.querySelector(".fa-arrow-circle-right");
  count == 0
    ? (leftArrow.style.visibility = "hidden")
    : (leftArrow.style.visibility = "visible");
  count >= 7
    ? (rightArrow.style.visibility = "hidden")
    : (rightArrow.style.visibility = "visible");
};

//INIT ARROW STATE
displayArrows();
