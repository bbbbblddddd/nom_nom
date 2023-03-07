import RemoveButton from "../uiComponents/RemoveButton";

const FaveRecipe = ({ recipe, onRecipeRemoved, profile }) => {
  return (
    <>
      <p>{recipe.name}</p>
      <RemoveButton
        recipe={recipe}
        onRecipeRemoved={onRecipeRemoved}
        profile={profile}
      />
    </>
  );
};

export default FaveRecipe;
