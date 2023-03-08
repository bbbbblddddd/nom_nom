import RemoveButton from "../uiComponents/RemoveButton";

const FaveRecipe = ({ recipe, onRecipeRemoved }) => {
  return (
    <>
      <p>{recipe.name}</p>
      <RemoveButton recipe={recipe} onRecipeRemoved={onRecipeRemoved} />
    </>
  );
};

export default FaveRecipe;
