import DeleteAccount from "../uiComponents/DeleteAccount";
import FaveRecipe from "../recipes/FaveRecipe";
import NavBar from "../NavBar.js";

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
    <div className="flex h-72 min-h-screen flex-col justify-center bg-food_background5 p-10 text-center">
      <NavBar />
      <div className="mx-auto flex h-full w-4/6 justify-center overflow-scroll rounded-3xl bg-[#fffffff3] px-12">
        <div className="h-40 flex-col justify-center">
          <h1 className="body-font animate__bounceInDown mt-16 flex justify-center pt-10 font-nomnombold text-9xl tracking-tight text-[#EE5D3D] animate__animated">
            dashboard
          </h1>
          <h3 className="mb-2 font-nexabold text-2xl text-[#EE5D3D]">
            Your Favourite Recipes
          </h3>
          {profile ? (
            <ul className="font-nunito text-lg">{faveList}</ul>
          ) : (
            <h3>You have no saved recipes</h3>
          )}
          <br />
          <DeleteAccount
            profileToDelete={profile}
            onDeleteAccount={onDeleteAccount}
          />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
