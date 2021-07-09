import { SEARCH_API } from "../config.js";
import renderMeals from "../views/renderResultList.js";

function searchRecipe(query) {
  console.log("query", query);
  const selectedRegion = document.querySelector(".selectByRegion");
  const url = `${SEARCH_API}${query}`;
  fetch(url)
    .then((response) => response.json())
    .then((jsonData) => {
      renderMeals(jsonData.meals, selectedRegion.value);
    })
    .catch((error) => {
      console.log("error", error);
      renderMeals([]);
    });
}
export default searchRecipe;
