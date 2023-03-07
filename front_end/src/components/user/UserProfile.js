import DeleteAccount from "../uiComponents/DeleteAccount";

const UserProfile = ({ profile, onDeleteAccount }) => {
  const faveList = profile.recipes.map((recipe, index) => {
    return <li key={index}>{recipe.name}</li>;
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
