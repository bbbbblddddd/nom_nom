import NavBar from "../NavBar";
import BackButton from "../uiComponents/BackButton";
import ViewButton from "../uiComponents/ViewButton";

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
            <ViewButton recipe={recipe} onRecipeSelected={onRecipeSelected}/>
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
          <ul className="grid grid-cols-2 gap-4">{recipeList}</ul>
          <br />
          <BackButton />
        </div>
      </div>
    </div>
  );
};

export default AllRecipes;
