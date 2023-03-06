import IngredientForm from './IngredientForm';
import IngredientList from './IngredientsList';
import RecipeItem from './RecipeItem';
import StepForm from './StepForm';
import StepsList from './StepsList';
import RecipeForm from './RecipeForm';
import { useState } from 'react';

const CreateRecipe = ({ onRecipeSave }) => {
  const [newRecipe, setNewRecipe] = useState(null);
  const [stateIngredients, setStateIngredients] = useState([]);
  const [stateSteps, setStateSteps] = useState([]);

  const onRecipeCreate = (recipe) => {
    setNewRecipe(recipe);
  };

  const onIngredientCreate = (ingredient) => {
    const copyIngredients = [...stateIngredients];
    copyIngredients.push(ingredient);
    setStateIngredients(copyIngredients);
  };

  const onStepCreate = (step) => {
    const copySteps = [...stateSteps];
    copySteps.push(step);
    setStateSteps(copySteps);
  };

  const handleclick = () => {
    const copyRecipe = { ...newRecipe };
    const copyIngredients = [...stateIngredients];
    const copySteps = [...stateSteps];
    copyRecipe.ingredients = [...copyIngredients];
    copyRecipe.steps = [...copySteps];
    console.log(copyRecipe.steps);
    onRecipeSave(copyRecipe);
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
      <IngredientList ingredients={stateIngredients} />
      <h2>Add a step</h2>
      <StepForm onStepCreate={onStepCreate} />
      <StepsList steps={stateSteps} />
      <button onClick={handleclick}>Save</button>
    </>
  );
};

export default CreateRecipe;
