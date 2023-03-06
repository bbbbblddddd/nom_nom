const RecipeDetail = ({ recipe }) => {
  const ingredients = recipe.ingredients.map((ingredient) => {
    return <li key={ingredient.id}>{ingredient.name}</li>;
  });

  const steps = recipe.steps.map((step) => {
    return (
      <li key={step.id}>
        {step.stepNum} {step.description}
      </li>
    );
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
        <li>{ingredients}</li>
        <li>{steps}</li>
      </ul>
    </div>
  );
};

export default RecipeDetail;
