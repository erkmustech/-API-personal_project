"use strict";
import getIngredients from "../views/renderIngredients.js";
import searchRecipe from "../handler/searchRecipe.js";
import populateRegion from "../handler/populateRegions.js";
import renderMeals from "../views/renderMeals.js";
import showMealsByRegion from "../views/showMealsByRegion.js";
import { SEARCH_API, SEARCH_BY_REGION_API } from "../config.js";

function fetchRegionApi(url) {
  fetch(SEARCH_BY_REGION_API)
    .then((response) => response.json())
    .then((jsonData) => {
      populateRegion(jsonData.meals);
    })
    .catch((error) => {
      showMealsByRegion([]);
    });
}

let searchTimeOutToken = 0;
window.onload = () => {
  const searchField = document.querySelector(".search_field");
  const resetBtn = document.querySelector(".reset_btn");
  resetBtn.addEventListener("click", onload);
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
};
