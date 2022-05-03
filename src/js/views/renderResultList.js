// import fixEle from "../handler/fixElement.js";
import renderRecipeDet from "./renderRecipeDet.js";
import markHandler from "../handler/markHandler.js";

function renderMeals(meals, region) {
  const resultCon = document.querySelector(".results");
  resultCon.innerHTML = "";
  if (region !== "all") {
    meals = meals.filter((meal) => meal.strArea === region);
  }
  const markedRecipe = [];
  meals.forEach((meal) => {
    const li = document.createElement("li");
    resultCon.appendChild(li);

    const liText = document.createElement("div");
    li.appendChild(liText);

    const recipeTitle = document.createElement("h1");
    recipeTitle.textContent = meal.strMeal;
    liText.appendChild(recipeTitle);

    const recipeArea = document.createElement("h2");
    recipeArea.textContent = meal.strArea;
    liText.appendChild(recipeArea);

    const recipePic = document.createElement("img");
    recipePic.classList = "resultListPic";
    recipePic.src = `${meal.strMealThumb}/preview`;
    li.appendChild(recipePic);

    const bookMark = document.createElement("i");
    bookMark.classList = "fas fa-heart";
    bookMark.addEventListener("click", () => {
      if (!bookMark.classList.contains("marked")) {
        bookMark.classList.add("marked");
        markedRecipe.push(meal.strMeal);
      } else {
        bookMark.classList.remove("marked");
        markedRecipe.pop();
      }
    });

    console.log(markedRecipe);
    const recipe_number = document.querySelector(".recipe_number");
    recipe_number.innerHTML = `find ${meals.length} recipe. click the left side
    list and find descriptions here!`;

    li.appendChild(bookMark);

    li.addEventListener("click", () => {
      renderRecipeDet(meal);
      // fixEle();
    });
  });
}

export default renderMeals;
