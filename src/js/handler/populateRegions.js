import searchRecipe from "../handler/searchRecipe.js";

function populateRegion(regions) {
  const selectList = document.querySelector(".selectByRegion");
  const searchField = document.querySelector(".search_field");
  const selectedOption = document.createElement("option");
  selectList.appendChild(selectedOption);
  selectedOption.textContent = "all region";
  selectedOption.value = "all";
  selectedOption.setAttribute("selected", true);
  regions.forEach((region) => {
    const option = document.createElement("option");
    selectList.appendChild(option);
    option.value = region.strArea;
    option.textContent = region.strArea;
  });
  selectList.addEventListener("change", async (e) => {
    if (searchField.value.trim().length === 0) {
      return;
    }
    searchRecipe(searchField.value);
  });
}
export default populateRegion;
