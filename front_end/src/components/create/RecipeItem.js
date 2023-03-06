const RecipeItem = ({ newRecipe }) => {
  return (
    <>
      <h3>Name: {newRecipe.name}</h3>
      <img src={newRecipe.image_url} alt={newRecipe.name} width="200rem" />
      <p>Prep Time: {newRecipe.prepTime}</p>
      <p>Cook Time: {newRecipe.cookTime}</p>
      <p>Servings: {newRecipe.servings}</p>
      <p>Meal Type: {newRecipe.mealType}</p>
      <p>Extra equipment: {newRecipe.extraEquip}</p>
    </>
  );
};

export default RecipeItem;
