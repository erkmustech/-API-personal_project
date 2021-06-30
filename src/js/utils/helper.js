import { SEARCH_BY_REGION_API, SEARCH_API } from "../config.js";
import populateRegion from "../views/renderMeals.js";
import searchByRegion from "../handler/searchByRegion.js";

export const fetchApi = async () => {
  const data = await fetch(SEARCH_API);
  return await data.json();
};

export function fetchRegionApi(url) {
  fetch(SEARCH_BY_REGION_API)
    .then((response) => response.json())
    .then((jsonData) => {
      populateRegion(jsonData.meals);
    })
    .catch((error) => {
      searchByRegion([]);
    });
}

export default fetchRegionApi;
