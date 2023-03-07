const UserProfile = ({ profile }) => {
  const faveList = profile.recipes.map((recipe, index) => {
    return <li key={index}>{recipe.name}</li>;
  });

  return (
    <>
      <h1>Your current saved recipes:</h1>
      {profile ? <ul>{faveList}</ul> : null}
    </>
  );
};

export default UserProfile;
