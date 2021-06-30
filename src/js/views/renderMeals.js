import getIngredients from "../views/renderIngredients.js";

function renderMeals(meals, region) {
  console.log("meals", meals);
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
      const ingredients = getIngredients(meal);
      const ingredientsCon = document.createElement("div");

      ingredients.forEach((ingredient) => {
        const ingredientsCon = document.createElement("div");

        ingredientsCon.textContent = ingredient;
        recipeCon.appendChild(ingredientsCon);
        ingredients.classList = "ingredientContainer";
        const description = document.createElement("div");
        description.classList = "descriptionContainer";
        const desc = document.createElement("div");
        description.appendChild(desc);
        const a = document.createElement("a");
        const link = document.createTextNode("reference video here!");
        a.appendChild(link);
        a.href = "https://www.youtube.com/watch?v=2sX4fCgg-UI";
        desc.appendChild(a);
        description.textContent = meal.strInstructions;
        recipeCon.appendChild(description);

        // const  = document.createElement("div");
        // for (let i = 0; i < ingredient.length; i++) {
        //   tr.textContent = i;
        //   // td.textContent = ingredient[i];
        //   ingredientsCon.appendChild(tr);
        // }
        // for (let m = 0; m < 2; m++) {
        //   let td = document.createElement("td");
        //   td.textContent = ingredient;
        // }

        // recipeCon.appendChild(ingredientsCon);
        // ingredients.classList = "ingredientContainer";
        // const description = document.createElement("div");
        // description.classList = "descriptionContainer";
        // const desc = document.createElement("div");
        // description.appendChild(desc);
        // const a = document.createElement("a");
        // const link = document.createTextNode("reference video here!");
        // a.appendChild(link);
        // a.href = "https://www.youtube.com/watch?v=2sX4fCgg-UI";
        // desc.appendChild(a);
        // description.textContent = meal.strInstructions;
        // recipeCon.appendChild(description);
      });
    });
  });
}

export default renderMeals;
