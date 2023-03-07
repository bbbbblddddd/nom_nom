import DeleteAccount from "../uiComponents/DeleteAccount";
import FaveRecipe from "../recipes/FaveRecipe";

const UserProfile = ({ profile, onRecipeRemoved, onDeleteAccount }) => {
  const faveList = profile.recipes.map((recipe, index) => {
    return (
      <li key={index}>
        <FaveRecipe
          recipe={recipe}
          profile={profile}
          onRecipeRemoved={onRecipeRemoved}
        />
      </li>
    );
  });

  return (
    <>
      <h1>Your current saved recipes:</h1>
      {profile ? <ul>{faveList}</ul> : <h3>You have no saved recipes</h3>}
      <DeleteAccount
        profileToDelete={profile}
        onDeleteAccount={onDeleteAccount}
      />
    </>
  );
};

export default UserProfile;
