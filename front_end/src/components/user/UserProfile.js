/* eslint-disable react/no-unescaped-entities */
import DeleteAccount from "../uiComponents/DeleteAccount";
import FaveRecipeList from "./FaveRecipeList";
import NavBar from "../NavBar";
import LoginButton from "../uiComponents/LoginButton";
import SignUpButton from "../uiComponents/SignUpButton";
import AllRecipesButton from "../uiComponents/AllRecipesButton";

const UserProfile = ({ profile, onRecipeRemoved, onDeleteAccount }) => {
  return (
    <div className="flex h-72 min-h-screen flex-col justify-center bg-food_background5 p-10 text-center">
      <NavBar />
      <div className="mx-auto flex h-full w-4/6 justify-center overflow-scroll rounded-3xl bg-[#fffffff3] px-12">
        <div className="h-40 flex-col justify-center">
          <h1 className="body-font animate__bounceInDown mt-16 flex justify-center pt-10 font-nomnombold text-9xl tracking-tight text-[#EE5D3D] animate__animated">
            dashboard
          </h1>
          <h3 className="mb-2 font-nexabold text-2xl text-[#EE5D3D]">
            Your favourite recipes:
          </h3>
          {Object.keys(profile).length > 0 ? (
            <FaveRecipeList
              profile={profile}
              onRecipeRemoved={onRecipeRemoved}
            />
          ) : (
            <>
              <h3 className="font-nunito text-xl">
                Please log in to access all your favourite recipes
              </h3>
              <br />
              <LoginButton />
              <br />
              <br />
              <p className="body-font flex-col font-nunito">
                Don't have an account?
                <br />
                <SignUpButton />
              </p>
              <br />
            </>
          )}
          <br />
          <h3>Go browse our recipes to add more to your Favourites!</h3>
          <AllRecipesButton />
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
