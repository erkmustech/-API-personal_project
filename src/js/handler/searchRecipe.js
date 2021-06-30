import { SEARCH_API } from "../config.js";
import renderMeals from "../views/renderMeals.js";

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
export default searchRecipe;
