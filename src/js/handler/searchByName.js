import { SEARCH_API, SEARCH_BY_REGION_API } from "../config.js";
import { query } from "../init/initializer.js";

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
export default searchRecipe(query);
