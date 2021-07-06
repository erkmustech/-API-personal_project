"use strict";
import searchRecipe from "../handler/searchRecipe.js";
import populateRegion from "../handler/populateRegions.js";
import renderMealsByArea from "../views/renderMealsByArea.js";
import { COUNTRIES_LIST_API } from "../config.js";
import clearDOMElement from "../utils/clearDOMElement.js";

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
  const form = document.querySelector(".search");
  const searchField = document.querySelector(".search_field");
  const resetBtn = document.querySelector(".reset_btn");

  fetchAreaAPI();

  searchField.onkeyup = (event) => {
    clearTimeout(searchTimeOutToken);
    if (searchField.value.trim().length === 0) {
      return;
    }
    searchTimeOutToken = setTimeout(() => {
      searchRecipe(searchField.value);
    }, 500);
  };
  form.addEventListener("submit", handleForm);
  resetBtn.addEventListener("click", clearDOMElement);
};

function handleForm(event) {
  event.preventDefault();
}
