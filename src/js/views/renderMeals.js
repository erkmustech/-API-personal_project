import getIngredients from "../views/renderIngredients.js";

function renderMeals(meals, region) {
  const recipeCon = document.querySelector(".recipeContainer");
  recipeCon.innerHTML = "";
  let resultCon = document.querySelector(".results");
  resultCon.innerHTML = "";
  if (region) {
    meals = meals.filter((meal) => meal.strArea == region);
  }
  meals.forEach((meal) => {
    const li = document.createElement("li");
    const recipeTitle = document.createElement("h2");
    recipeTitle.textContent = meal.strMeal;
    li.appendChild(recipeTitle);
    resultCon.appendChild(li);

    const recipePic = document.createElement("img");
    recipePic.src = `${meal.strMealThumb}/preview`;
    li.appendChild(recipePic);

    const a = document.createElement("a");
    const link = document.createTextNode("reference video here!");
    a.appendChild(link);
    a.href = "https://www.youtube.com/watch?v=2sX4fCgg-UI";
    li.appendChild(a);

    const ingredients = getIngredients(meal);

    const ingredientsCon = document.createElement("table");
    ingredients.classList = "ingredientContainer";
    ingredients.forEach((ingredient) => {
      const tr = document.createElement("tr");
      for (let i = 0; i < 4; i++) {
        tr.textContent = i;
        ingredientsCon.appendChild(tr);
      }
      for (let m = 0; m < 2; m++) {
        let td = document.createElement("td");
        td.textContent = ingredient;
        tr.appendChild(td);
      }
      recipeCon.appendChild(ingredientsCon);
    });
    const description = document.createElement("div");
    description.classList = "descriptionContainer";
    description.textContent = meal.strInstructions;
    recipeCon.appendChild(description);
  });
}

export default renderMeals;
