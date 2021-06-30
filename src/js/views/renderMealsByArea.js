async function renderMealsByArea() {
  const selectByRegion = document.querySelector(".selectByRegion");
  const res = await fetch(`${SEARCH_API}${searchField.value}`);
  const data = await res.json();
  console.log("data", data);
}

export default renderMealsByArea;
