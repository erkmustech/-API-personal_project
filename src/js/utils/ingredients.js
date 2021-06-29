function getIngredients(meal) {
  const ingredients = Object.entries(meal).filter(
    ([key, value]) => key.startsWith("strIngredient") && value
  );
  const measures = Object.entries(meal).filter(
    ([key, value]) => key.startsWith("strMeasure") && value != ""
  );
  const ingredientsList = [];
  for (let i = 0; i < ingredients.length; i++) {
    if (ingredients.indexOf(i) == measures.indexOf(i)) {
      ingredientsList.push(ingredients[i][1] + ": " + measures[i][1]);
    }
  }
  return ingredientsList;
}

export default getIngredients;
