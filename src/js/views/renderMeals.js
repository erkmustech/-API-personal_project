// function renderMeals((jsonData.meals), region) {
//   const recipeCon = document.querySelector(".recipeContainer");
//   recipeCon.innerHTML = "";

//   let resultCon = document.querySelector(".results");
//   resultCon.innerHTML = "";

//   if (region) {
//     meals = meals.filter((meal) => meal.strArea == region);
//   }
//   console.log(meals);
//   meals.forEach((meal) => {
//     const li = document.createElement("li");
//     const recipeTitle = document.createElement("h2");
//     recipeTitle.textContent = meal.strMeal;
//     li.appendChild(recipeTitle);
//     resultCon.appendChild(li);

//     const recipePic = document.createElement("img");
//     recipePic.src = "/src/img/healthy_food.jpeg";
//     li.appendChild(recipePic);

//     const a = document.createElement("a");
//     const link = document.createTextNode("reference video here!");
//     a.appendChild(link);
//     a.href = "https://www.youtube.com/watch?v=2sX4fCgg-UI";
//     li.appendChild(a);

//     const ingredients = getIngredients(meal);

//     const ingredientsCon = document.createElement("div");
//     ingredients.forEach((ingredient) => {
//       const ingredientItem = document.createElement("p");
//       ingredientItem.textContent = ingredient;
//       ingredientsCon.appendChild(ingredientItem);
//       recipeCon.appendChild(ingredientsCon);
//     });

//     const description = document.createElement("div");
//     description.textContent = meal.strInstructions;
//     recipeCon.appendChild(description);
//   });
// }

// export default renderMeals(jsonData.meals, region);
