import renderMeals from "./renderResultList";

async function renderMealsByArea(meals, region) {
  if (region !== "all") {
    meals = meals.filter((meal) => meal.strArea === region);
    renderMeals();
  }
}

export default renderMealsByArea;
