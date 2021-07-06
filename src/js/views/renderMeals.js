import { ING_PIC_URL } from "../config.js";
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

      const imgCon = document.createElement("div");
      const mealName = document.createElement("h1");
      mealName.classList = "mealName";
      mealName.textContent = meal.strMeal;
      imgCon.appendChild(mealName);
      imgCon.classList = "img-con";
      const recipePicBig = document.createElement("img");
      recipePicBig.classList = "recipePic_Big";
      recipePicBig.src = `${meal.strMealThumb}/preview`;
      imgCon.appendChild(recipePicBig);
      recipeCon.appendChild(imgCon);

      const ingredientsCon = document.createElement("div");
      recipeCon.appendChild(ingredientsCon);
      ingredientsCon.classList = "ingredientContainer";
      const ingTitle = document.createElement("h3");
      ingTitle.textContent = "INGREDIENTS";
      recipeCon.appendChild(ingTitle);
      recipePicBig.src = `${meal.strMealThumb}/preview`;
      imgCon.appendChild(recipePicBig);

      ingredients.forEach((ingredient) => {
        const ingredientItem = document.createElement("table");
        const tr = document.createElement("tr");
        const td = document.createElement("td");
        ingredientItem.appendChild(tr);
        ingredientItem.appendChild(td);
        const ingTbl = ingredient.split(":");
        const nameOfIng = ingTbl[0];
        const quaOfIng = ingTbl[1];
        tr.textContent = nameOfIng;
        td.textContent = quaOfIng;
        ingredientsCon.appendChild(ingredientItem);
        const ingPic = document.createElement("img");
        ingPic.classList = "ing-pic";
        ingPic.src = `${ING_PIC_URL}/${nameOfIng}-Small.png`;
        ingredientItem.appendChild(ingPic);
      });

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

// ingredients.forEach((ingredient) => {
//   const ingredientItem = document.createElement("p");
//   ingredientItem.textContent = ingredient;
//   ingList.appendChild(ingredientItem);
//   ingredientsCon.appendChild(ingList);
// });
