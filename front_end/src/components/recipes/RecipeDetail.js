import { useLocation } from 'react-router-dom';

const RecipeDetail = () => {
  const recipe = useLocation().state;

  return (
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
    </ul>
  );
};

export default RecipeDetail;
