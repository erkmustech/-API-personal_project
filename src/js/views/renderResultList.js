import fixEle from "../handler/fixElement.js";
import renderRecipeDet from "./renderRecipeDet.js";

function renderMeals(meals, region) {
  let resultCon = document.querySelector(".results");
  resultCon.innerHTML = "";
  if (region !== "all") {
    meals = meals.filter((meal) => meal.strArea === region);
  }
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

    li.addEventListener("click", () => {
      renderRecipeDet(meal);
      fixEle();
    });
  });
}

export default renderMeals;
