const RecipeDetail = ({ recipe }) => {
  const ingredients = recipe.ingredients.map((ingredient) => {
    return (
      <li key={ingredient.id}>
        {ingredient.name} {ingredient.quantity} {ingredient.unit}
      </li>
    );
  });

  const steps = recipe.steps.map((step) => {
    return (
      <li key={step.id}>
        {step.stepNum}. {step.description}
      </li>
    );
  });
  return (
    <div>
      <h1>{recipe.name}</h1>
      <h3>{recipe.mealType}</h3>
      <img src={recipe.image_url} />
      <p>Prep Time: {recipe.prepTime} minutes</p>
      <p>Cook Time: {recipe.cookTime} minutes</p>
      <p>Servings: {recipe.servings}</p>
      <p>Extra Equipment: {recipe.extraEquip}</p>
      <br />
      <h3>Ingredients:</h3>
      <ul>{ingredients}</ul>
      <br />
      <h3>Steps:</h3>
      <ul>{steps}</ul>
    </div>
  );
};

export default RecipeDetail;
