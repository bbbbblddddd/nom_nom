const RecipeDetail = ({ recipe }) => {
  return (
    <div>
      <ul>
        <li>{recipe.name}</li>
        <li>{recipe.image_url}</li>
        <p>Prep Time:</p>
        <li>{recipe.prepTime} minutes</li>
        <p>Cook Time:</p>
        <li>{recipe.cookTime} minutes</li>
        <p>Servings:</p>
        <li>{recipe.servings}</li>
        <p>Meal Type:</p>
        <li>{recipe.mealType}</li>
        <p>Extra Equipment:</p>
        <li>{recipe.extraEquip}</li>
      </ul>
    </div>
  );
};

export default RecipeDetail;
