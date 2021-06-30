import getIngredients from "../views/renderIngredients.js";

function renderMeals(meals, region) {
  const recipeCon = document.querySelector(".recipeContainer");
  recipeCon.innerHTML = "";
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
    recipePic.src = `${meal.strMealThumb}/preview`;
    li.appendChild(recipePic);

    li.addEventListener("click", () => {
      recipeCon.innerHTML = "";
      const ingredients = getIngredients(meal);
      const ingredientsCon = document.createElement("div");
      recipeCon.appendChild(ingredientsCon);
      ingredientsCon.classList = "ingredientContainer";

      ingredients.forEach((ingredient) => {
        console.log("ingredient", ingredient);
        const ingredientList = document.querySelector(".ingredientList");
        const ingredientItem = document.createElement("li");
        ingredientItem.textContent = ingredient;
        console.log("ingredientItem", ingredientItem);
        ingredientList.appendChild(ingredientItem);
      });

      const description = document.createElement("div");
      description.classList = "descriptionContainer";
      description.textContent = meal.strInstructions;
      recipeCon.appendChild(description);
    });
  });
}

export default renderMeals;
