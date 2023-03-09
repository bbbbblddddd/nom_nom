/* eslint-disable react/no-unescaped-entities */
import IngredientForm from "./IngredientForm";
import IngredientList from "./IngredientsList";
import RecipeItem from "./RecipeItem";
import StepForm from "./StepForm";
import StepsList from "./StepsList";
import RecipeForm from "./RecipeForm";
import NavBar from "../NavBar";
import { useState } from "react";
import GreenBackButton from "../uiComponents/GreenBackButton";

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
    <div className="flex h-72 min-h-screen flex-col justify-center bg-food_background2 p-10 text-center">
      <NavBar />
      <div className="mx-auto flex h-full w-4/6 justify-center overflow-scroll rounded-3xl bg-[#fffffff3] px-12">
        <div className="h-40 flex-col justify-center">
          <h1 className="body-font animate__bounceInDown mt-16 flex justify-center py-5 font-nomnombold text-7xl tracking-tight text-[#3E8B46] animate__animated">
            create a recipe
          </h1>
          <h3 className="pb-5 font-nexabold text-2xl text-gray-700">
            Let's create our own new recipe!
          </h3>
          {newRecipe ? (
            <RecipeItem newRecipe={newRecipe} />
          ) : (
            <RecipeForm onRecipeCreate={onRecipeCreate} />
          )}
          <IngredientForm onIngredientCreate={onIngredientCreate} />
          <IngredientList ingredients={stateIngredients} />
          <h2 className="pb-5 font-nexabold text-2xl text-gray-700">
            Let's explain how to make it!
          </h2>
          <StepForm onStepCreate={onStepCreate} />
          <StepsList steps={stateSteps} />
          <h2 className="pb-5 font-nexabold text-2xl text-gray-700">
            All done creating your new recipe?
          </h2>
          <button
            className="group relative px-6 py-3 font-nunito text-xl text-white"
            onClick={handleclick}
          >
            <span className="absolute inset-0 h-full w-full translate-x-0 -skew-x-12 transform bg-[#3E8B46] transition-all duration-300 ease-out group-hover:skew-x-12 group-hover:bg-[#94c938df]"></span>
            <span className="absolute inset-0 h-full w-full skew-x-12 transform bg-[#3E8B46] transition-all duration-300 ease-out group-hover:-skew-x-12 group-hover:bg-[#94c938df]"></span>
            <span className="absolute bottom-0 left-0 hidden h-20 w-10 -translate-x-8 translate-y-10 -rotate-12 transform bg-[#3E8B46] transition-all duration-100 ease-out"></span>
            <span className="absolute bottom-0 right-0 hidden h-20 w-10 translate-x-10 translate-y-8 -rotate-12 transform bg-[#307036] transition-all duration-100 ease-out"></span>
            <span className="relative">Save Recipe</span>
          </button>
          <br />
          <GreenBackButton />
        </div>
      </div>
    </div>
  );
};

export default CreateRecipe;
