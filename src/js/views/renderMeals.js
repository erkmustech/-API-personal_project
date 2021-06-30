import getIngredients from "../views/renderIngredients.js";

function renderMeals(meals, region) {
  const recipeCon = document.querySelector(".recipeContainer");
  // recipeCon.innerHTML = "";
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
      recipeCon.innerHTML = "";
      const ingredients = getIngredients(meal);
      const ingredientsCon = document.createElement("div");

      recipeCon.appendChild(ingredientsCon);
      ingredientsCon.classList = "ingredientContainer";

      const ingList = document.createElement("div");
      const ingTitle = document.createElement("h3");
      ingTitle.textContent = "INGREDIENTS";
      ingList.appendChild(ingTitle);
      const mealImg = document.createElement("div");
      ingredientsCon.appendChild(ingList);
      ingredientsCon.appendChild(mealImg);

      ingredients.forEach((ingredient) => {
        const ingredientItem = document.createElement("p");
        ingredientItem.textContent = ingredient;
        ingList.appendChild(ingredientItem);
        ingredientsCon.appendChild(ingList);
      });

      const recipePicBig = document.createElement("img");
      // ingredientsCon.appendChild(recipePicBig);
      recipePicBig.classList = "recipePic_Big";
      recipePicBig.src = `${meal.strMealThumb}/preview`;
      mealImg.appendChild(recipePicBig);
      ingredientsCon.appendChild(mealImg);

      const description = document.createElement("div");
      const descTitle = document.createElement("h3");
      descTitle.textContent = "DESCRIPTION";
      description.appendChild(descTitle);
      const desText = document.createElement("div");
      description.appendChild(desText);
      desText.textContent = meal.strInstructions;
      description.classList = "descriptionContainer";
      ingredientsCon.classList = "ingredientContainer";
      recipeCon.appendChild(ingredientsCon);
      recipeCon.appendChild(description);
    });
  });
}

export default renderMeals;
