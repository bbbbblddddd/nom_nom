import IngredientForm from './IngredientForm';
import IngredientList from './IngredientsList';
import RecipeItem from './RecipeItem';
import StepForm from './StepForm';
import StepsList from './StepsList';
import RecipeForm from './RecipeForm';
import { useState } from 'react';

const CreateRecipe = ({ onRecipeSave }) => {
  const [newRecipe, setNewRecipe] = useState(null);
  const [ingredients, setIngredients] = useState([]);
  const [steps, setSteps] = useState([]);

  const onRecipeCreate = (recipe) => {
    setNewRecipe(recipe);
  };

  const onIngredientCreate = (ingredient) => {
    const copyIngredients = [...ingredients];
    copyIngredients.push(ingredient);
    setIngredients(copyIngredients);
  };

  const onStepCreate = (step) => {
    const copySteps = [...steps];
    copySteps.push(step);
    setSteps(copySteps);
  };

  const handleclick = () => {
    const copyRecipe = { ...newRecipe };
    copyRecipe.ingredients.concat(ingredients);
    copyRecipe.steps.concat(steps);
    onRecipeSave(newRecipe);
  };

  return (
    <>
      <h1>New Recipe</h1>
      <h2>Add recipe details</h2>
      {newRecipe ? (
        <RecipeItem newRecipe={newRecipe} />
      ) : (
        <RecipeForm onRecipeCreate={onRecipeCreate} />
      )}
      <h2>Add an ingredient</h2>
      <IngredientForm onIngredientCreate={onIngredientCreate} />
      <IngredientList ingredients={ingredients} />
      <h2>Add a step</h2>
      <StepForm onStepCreate={onStepCreate} />
      <StepsList steps={steps} />
      <button onClick={handleclick}>Save</button>
    </>
  );
};

export default CreateRecipe;
