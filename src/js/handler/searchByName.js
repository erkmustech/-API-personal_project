import { SEARCH_API, SEARCH_BY_REGION_API } from "../config.js";

function searchShow(query) {
  const selectedRegion = document.querySelector(".selectByRegion");
  const url = `${SEARCH_API}${query}`;
  fetch(url)
    .then((response) => response.json())
    .then((jsonData) => {
      showMeals(jsonData.meals, selectedRegion.value);
    })
    .catch((error) => {
      showMeals([]);
    });
}

export default searchShow(query);
