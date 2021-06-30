// function populateRegion(regions) {
//   const selectList = document.querySelector(".selectByRegion");
//   const searchField = document.querySelector(".search_field");
//   regions.forEach((region) => {
//     const option = document.createElement("option");
//     selectList.appendChild(option);
//     option.value = region.strArea;
//     option.textContent = region.strArea;
//   });
//   selectList.addEventListener("change", async (e) => {
//     if (searchField.value.trim().length === 0) {
//       return;
//     }
//     searchRecipe(searchField.value);
//   });
// }

// export default populateRegion();
