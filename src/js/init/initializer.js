"use strict";
import getIngredients from "../utils/ingredients.js";
// import searchRecipe from "../handler/searchByName.js";
// import fetchRegionApi from "/src/js/utils/helper.js";
// import populateRegion from "../handler/searchByRegion.js";
import { SEARCH_API, SEARCH_BY_REGION_API } from "../config.js";

function searchRecipe(query) {
  const selectedRegion = document.querySelector(".selectByRegion");
  const url = `${SEARCH_API}${query}`;
  fetch(url)
    .then((response) => response.json())
    .then((jsonData) => {
      renderMeals(jsonData.meals, selectedRegion.value);
    })
    .catch((error) => {
      renderMeals([]);
    });
}

//done
function fetchRegionApi(url) {
  fetch(SEARCH_BY_REGION_API)
    .then((response) => response.json())
    .then((jsonData) => {
      populateRegion(jsonData.meals);
    })
    .catch((error) => {
      searchByRegion([]);
    });
}

//done
function populateRegion(regions) {
  const selectList = document.querySelector(".selectByRegion");
  const searchField = document.querySelector(".search_field");
  regions.forEach((region) => {
    const option = document.createElement("option");
    selectList.appendChild(option);
    option.value = region.strArea;
    option.textContent = region.strArea;
  });
  selectList.addEventListener("change", async (e) => {
    if (searchField.value.trim().length === 0) {
      return;
    }
    searchRecipe(searchField.value);
  });
}

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
    recipePic.src = "/src/img/healthy_food.jpeg";
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
      // I am gong to render the ingredients by two lines of table column. But there is bug and it gave me two same value .

      recipeCon.appendChild(ingredientsCon);
    });

    const description = document.createElement("div");
    description.classList = "descriptionContainer";
    description.textContent = meal.strInstructions;
    recipeCon.appendChild(description);
  });
}

async function showMealsByRegion() {
  const selectByRegion = document.querySelector(".selectByRegion");
  console.log("selectByRegion", selectByRegion.value);
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?a=${selectByRegion.value}`
  );
  const data = await res.json();
  console.log(data);
}

let searchTimeOutToken = 0;
window.onload = () => {
  const searchField = document.querySelector(".search_field");
  // const query = searchField.value;
  fetchRegionApi();
  searchField.onkeyup = () => {
    clearTimeout(searchTimeOutToken);
    if (searchField.value.trim().length === 0) {
      return;
    }
    searchRecipe(searchField.value);

    searchTimeOutToken = setTimeout(() => {
      searchRecipe(searchField.value);
    }, 250);
  };
  const searchBtn = document.querySelector(".search_btn");
  searchBtn.addEventListener("click", showMealsByRegion);
};
