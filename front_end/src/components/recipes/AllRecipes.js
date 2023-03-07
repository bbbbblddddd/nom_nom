/* eslint-disable react/no-unescaped-entities */
import NavBar from "../NavBar";
import ViewButton from "../uiComponents/ViewButton";
import CreateButton from "../uiComponents/CreateButton";

const AllRecipes = ({ allRecipes, onRecipeSelected }) => {
  const recipeList = allRecipes.map((recipe, index) => {
    return (
      <li key={index}>
        <div className="max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-100 dark:bg-white">
          <img
            className="rounded-t-lg"
            src={recipe.image_url}
            alt={recipe.name}
          />
          <div className="p-5">
            <h4 className="mb-2 font-nexabold text-2xl tracking-tight text-gray-700 dark:text-gray-700">
              {recipe.name}
            </h4>
            <ViewButton recipe={recipe} onRecipeSelected={onRecipeSelected} />
          </div>
        </div>
      </li>
    );
  });

  return (
    <div className="flex h-72 min-h-screen flex-col justify-center bg-food_background3 bg-cover bg-fixed p-10 text-center">
      <NavBar />
      <div className="mx-auto flex min-h-full w-4/5 justify-center overflow-auto rounded-3xl bg-[#fffffff3] px-12">
        <div className="h-40 flex-col justify-center pb-10">
          <h1 className="body-font animate__bounceInDown my-16 flex justify-center font-nomnombold text-9xl tracking-tight text-[#EE5D3D] animate__animated">
            recipes
          </h1>
          <p className="body-font font-nunito text-[22px] text-[#EE5D3D]">
            Are you ready to stir up some kitchen magic? Get your favorite
            grown-up and let's put on our aprons! With these delicious recipes
            to choose from, we're going to cook up a storm and make our taste
            buds sing! So come on, let's get started and have some tasty fun!
          </p>
          <br />
          <p className="body-font font-nunito text-[22px] text-[#EE5D3D]">
            Feeling even more creative?
          </p>
          <div className="flex justify-center">
            <p className="body-font pr-2 font-nunito text-[22px] text-[#EE5D3D]">
              Why not
            </p>
            <CreateButton />
          </div>
          <br />
          <ul className="grid grid-cols-2 gap-4">{recipeList}</ul>
        </div>
      </div>
    </div>
  );
};

export default AllRecipes;
