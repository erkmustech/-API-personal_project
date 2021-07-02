"use strict";
import searchRecipe from "../handler/searchRecipe.js";
import populateRegion from "../handler/populateRegions.js";
import renderMealsByArea from "../views/renderMealsByArea.js";
import { COUNTRIES_LIST_API } from "../config.js";

function fetchAreaAPI(url) {
  fetch(COUNTRIES_LIST_API)
    .then((response) => response.json())
    .then((jsonData) => {
      populateRegion(jsonData.meals);
    })
    .catch((error) => {
      renderMealsByArea([]);
    });
}

let searchTimeOutToken = 0;
window.onload = () => {
  const searchField = document.querySelector(".search_field");
  fetchAreaAPI();
  searchField.onkeyup = () => {
    clearTimeout(searchTimeOutToken);
    if (searchField.value.trim().length === 0) {
      return;
    }
    searchTimeOutToken = setTimeout(() => {
      searchRecipe(searchField.value);
    }, 500);
    event.preventDefault();
  };
};

const resetBtn = document.querySelector(".reset_btn");
resetBtn.addEventListener("click", (event) => {
  searchField.innerHTML = "";
});
