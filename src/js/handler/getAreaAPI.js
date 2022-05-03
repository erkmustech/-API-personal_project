import { COUNTRIES_LIST_API } from "../config.js";
import populateRegion from "../handler/populateRegions.js";

function fetchAreaAPI() {
  fetch(COUNTRIES_LIST_API)
    .then((response) => response.json())
    .then((jsonData) => {
      populateRegion(jsonData.meals);
    })
    .catch((error) => {
      console.log(error);
    });
}

export default fetchAreaAPI;
