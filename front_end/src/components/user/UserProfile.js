import DeleteAccount from "../uiComponents/DeleteAccount";
import FaveRecipeList from "../recipes/FaveRecipeList";
// import { Link } from "react-router-dom";

const UserProfile = ({ profile, onRecipeRemoved, onDeleteAccount }) => {
  return (
    <>
      <h1>Your current saved recipes:</h1>
      {/* {profile == null ? ( */}
      <FaveRecipeList profile={profile} onRecipeRemoved={onRecipeRemoved} />
      {/* ) : (
        <>
          <h3>Please log in to access all your favourite recipes</h3>
          <Link to="/main/login">Log in</Link>
        </>
      )} */}
      <br />
      <DeleteAccount
        profileToDelete={profile}
        onDeleteAccount={onDeleteAccount}
      />
    </>
  );
};

export default UserProfile;
