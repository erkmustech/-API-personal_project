"use strict";
import searchRecipe from "../handler/searchRecipe.js";
import populateRegion from "../handler/populateRegions.js";
import { COUNTRIES_LIST_API } from "../config.js";

function fetchAreaAPI(url) {
  fetch(COUNTRIES_LIST_API)
    .then((response) => response.json())
    .then((jsonData) => {
      populateRegion(jsonData.meals);
    })
    .catch((error) => {
      console.log(error);
    });
}

let searchTimeOutToken = 0;
window.onload = () => {
  const form = document.querySelector(".search");
  const searchField = document.querySelector(".search_field");
  const resetBtn = document.querySelector(".reset_btn");

  fetchAreaAPI();

  searchField.onkeyup = () => {
    clearTimeout(searchTimeOutToken);
    if (searchField.value.trim().length === 0) {
      return;
    }
    searchTimeOutToken = setTimeout(() => {
      searchRecipe(searchField.value);
    }, 500);
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault();
  });

  resetBtn.addEventListener("click", () => {
    searchField.value = "";
  });
};
