const UserProfile = ({ profile }) => {
  const faveList = profile.map((recipe, index) => {
    return <li key={index}>{recipe.name}</li>;
  });

  return <ul>{faveList}</ul>;
};

export default UserProfile;
