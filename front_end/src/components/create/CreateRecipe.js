import IngredientForm from './IngredientForm';
import IngredientList from './IngredientsList';
import RecipeItem from './RecipeItem';
import StepForm from './StepForm';
import StepsList from './StepsList';
import RecipeForm from './RecipeForm';
import { useState } from 'react';

const CreateRecipe = ({ onRecipeSave }) => {
  const [newRecipe, setNewRecipe] = useState(null);

  const onRecipeCreate = (recipe) => {
    setNewRecipe(recipe);
  };

  const handleclick = () => {
    onRecipeSave(newRecipe);
  };

  return (
    <>
      {newRecipe ? (
        <RecipeItem newRecipe={newRecipe} />
      ) : (
        <RecipeForm onRecipeCreate={onRecipeCreate} />
      )}
      <IngredientForm />
      <IngredientList />
      <StepForm />
      <StepsList />
      <button onClick={handleclick}>Save</button>
    </>
  );
};

export default CreateRecipe;
