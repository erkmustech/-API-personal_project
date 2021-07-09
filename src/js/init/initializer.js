"use strict";

import fetchAreaAPI from "../handler/getAreaAPI.js";
import searchRecipe from "../handler/searchRecipe.js";

let searchTimeOutToken = 0;
window.onload = () => {
  const form = document.querySelector(".search");
  const searchField = document.querySelector(".search_field");
  const resetBtn = document.querySelector(".reset_btn");
  const recipeCon = document.querySelector(".recipeContainer");

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
    recipeCon.innerHTML = "";
  });
};
