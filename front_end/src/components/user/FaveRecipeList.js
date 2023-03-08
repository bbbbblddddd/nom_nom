import FaveRecipe from "./FaveRecipe";

const FaveRecipeList = ({ profile, onRecipeRemoved }) => {
  const faveList = profile.recipes.map((recipe, index) => {
    return (
      <li key={index}>
        <FaveRecipe recipe={recipe} onRecipeRemoved={onRecipeRemoved} />
      </li>
    );
  });

  return <ul>{faveList}</ul>;
};

export default FaveRecipeList;
