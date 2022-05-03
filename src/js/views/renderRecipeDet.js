import getIngredients from "./renderIngredients.js";
import { ING_PIC_URL } from "../config.js";

function renderRecipeDet(meal) {
  const recipeCon = document.querySelector(".recipeContainer");
  recipeCon.innerHTML = "";
  const ingredients = getIngredients(meal);

  const description = document.createElement("div");
  const descTitle = document.createElement("h3");
  descTitle.textContent = "DESCRIPTION";
  description.appendChild(descTitle);
  const desText = document.createElement("div");
  description.appendChild(desText);
  desText.textContent = meal.strInstructions;
  description.classList = "descriptionContainer";

  const imgCon = document.createElement("div");
  // const mealName = document.createElement("h1");
  // mealName.classList = "mealName";
  // mealName.textContent = meal.strMeal;
  // imgCon.appendChild(mealName);
  imgCon.classList = "img-con";
  const recipePicBig = document.createElement("img");
  recipePicBig.classList = "recipePic_Big";
  recipePicBig.src = `${meal.strMealThumb}/preview`;
  imgCon.appendChild(recipePicBig);

  const ingredientsCon = document.createElement("div");
  recipeCon.appendChild(ingredientsCon);
  ingredientsCon.classList = "ingredientContainer";
  const ingTitle = document.createElement("h3");
  ingTitle.textContent = "INGREDIENTS";
  recipePicBig.src = `${meal.strMealThumb}/preview`;
  imgCon.appendChild(recipePicBig);

  recipeCon.appendChild(imgCon);
  recipeCon.appendChild(description);
  ingredientsCon.classList = "ingredientContainer";
  recipeCon.appendChild(ingTitle);
  recipeCon.appendChild(ingredientsCon);

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
}

export default renderRecipeDet;
