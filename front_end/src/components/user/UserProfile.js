import FaveRecipe from "../recipes/FaveRecipe";

const UserProfile = ({ profile, onRecipeRemoved }) => {
  const faveList = profile.recipes.map((recipe, index) => {
    return (
      <li key={index}>
        <FaveRecipe recipe={recipe} profile = {profile} onRecipeRemoved= {onRecipeRemoved} />
      </li>
    );
  });

  return (
    <>
      <h1>Your current saved recipes:</h1>
      {profile ? <ul>{faveList}</ul> : null}
    </>
  );
};

export default UserProfile;
