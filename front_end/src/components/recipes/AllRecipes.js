import NavBar from '../NavBar';
import ViewButton from '../uiComponents/ViewButton';

const AllRecipes = ({ allRecipes, onRecipeSelected }) => {
  const recipeList = allRecipes.map((recipe, index) => {
    return (
      <li key={index}>
        <div className="max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-100 dark:bg-white">
          <img className="rounded-t-lg" src={recipe.image} alt={recipe.name} />
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {recipe.name}
            </h5>
            <ViewButton recipe={recipe} onRecipeSelected={onRecipeSelected} />
          </div>
        </div>
      </li>
    );
  });

  return (
    <div className="flex h-72 min-h-screen flex-col justify-center bg-food_background3 bg-cover bg-fixed p-10 text-center">
      <NavBar />
      <div className="mx-auto flex h-5/6 w-4/6 justify-center rounded-3xl bg-[#fffffff3] px-12">
        <div className="h-40 flex-col justify-center">
          <h1 className="body-font animate__bounceInDown my-16 flex justify-center font-nomnombold text-9xl tracking-tight text-[#EE5D3D] animate__animated">
            recipes
          </h1>
          <ul className="grid grid-cols-2 gap-4">{recipeList}</ul>
          <br />
          <a
            href="/"
            className="body-font inline-flex font-nunito text-[#EE5D3D] hover:text-[#ed7156] hover:underline">
            Back
          </a>
          {/* {selectedRecipe && <RecipeDetail recipe={selectedRecipe} />} */}
        </div>
      </div>
    </div>
  );
};

export default AllRecipes;
