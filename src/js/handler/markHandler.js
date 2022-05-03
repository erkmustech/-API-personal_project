const markedRecipe = [];
function markHandler(e) {
  const bookMark = document.querySelector(".fa-heart");
  if (!bookMark.classList.contains("marked")) {
    bookMark.classList.add("marked");
    markedRecipe.push(e);
    console.log("markedRecipe", markedRecipe);
    console.log("this item marked and add to list");
  } else {
    bookMark.classList.remove("marked");
    console.log("item was unmarked");
    markedRecipe.pop(e);
  }
}

export default markHandler;
