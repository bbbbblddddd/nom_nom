const RecipeDetail = ({ recipe }) => {
  console.log('recipe', recipe);
  const ingredients = recipe.ingredients.map((ingredient) => {
    console.log('ingredient', ingredient.name);
    return <li key={ingredient.id}>{ingredient.name}</li>;
  });
  return (
    <div>
      <h1>hello</h1>
      <ul>
        <li>{recipe.name}</li>
        <li>{recipe.image_url}</li>
        <p>Prep Time:</p>
        <li>{recipe.prepTime}</li>
        <p>minutes</p>
        <p>Cook Time:</p>
        <li>{recipe.cookTime}</li>
        <p>minutes</p>
        <p>Servings</p>
        <li>{recipe.servings}</li>
        <p>Meal Type:</p>
        <li>{recipe.mealType}</li>
        <p>Extra Equipment:</p>
        <li>{recipe.extraEquip}</li>
        <p>Ingredients</p>
        {ingredients}
      </ul>
    </div>
  );
};

export default RecipeDetail;
