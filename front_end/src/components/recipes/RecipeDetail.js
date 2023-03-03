import { useLocation } from 'react-router-dom';

const RecipeDetail = () => {
  const recipe = useLocation().state;

  return <p>{recipe.name}</p>;
};

export default RecipeDetail;
