/* eslint-disable no-unused-vars */
import NavBar from "../NavBar";
import BackButton from "../uiComponents/BackButton";
import FavouriteButton from "../uiComponents/FavouriteButton";

const RecipeDetail = ({ recipe, onRecipeFavourited }) => {
  const ingredients = recipe.ingredients.map((ingredient) => {
    return (
      <li key={ingredient.id} className="lowercase">
        <span className="font-bold">{ingredient.name}</span>,{" "}
        {ingredient.quantity} x{" "}
        <span className="lowercase">{ingredient.unit}</span>
      </li>
    );
  });

  const orderedSteps = recipe.steps.sort((s1, s2) => {
    if (s1.stepNum > s2.stepNum) {
      return 1;
    }
    if (s1.stepNum < s2.stepNum) {
      return -1;
    }
    return 0;
  });
  const steps = orderedSteps.map((step) => {
    return (
      <li key={step.id}>
        {step.stepNum}. {step.description}
      </li>
    );
  });
  const handleFavourite = () => {
    onRecipeFavourited(recipe);
    console.log(recipe);
  };

  return (
    <div className="min-h-screen bg-food_background4 bg-cover bg-fixed p-10 text-center">
      <NavBar />
      <div className="align-items-center mx-auto h-5/6 w-10/12 flex-col justify-evenly rounded-3xl bg-[#fffffff3] px-12 pb-8">
        <h1 className="mt-10 pt-20 pb-10 font-nexabold text-6xl text-[#EE5D3D]">
          {recipe.name}
        </h1>
        <div>
          <img
            src={recipe.image_url}
            alt={recipe.name}
            className="float-right mb-2 mr-24 flex h-72 w-72 rounded-lg object-cover"
          />
        </div>
        <div className="mb-4 ml-16 h-72 w-1/2 flex-col justify-center rounded-lg bg-[#fce26e98] p-7 pt-4">
          <h3 className="mb-1 text-left font-nexabold text-xl text-[#EE5D3D]">
            Ingredients:
          </h3>
          <ul className="text-left font-nunito text-lg">{ingredients}</ul>
        </div>
        <div className="align-items-center mb-4 mt-7 flex rounded-lg bg-[#f7c46c9d] p-7 pr-16 text-xl">
          <div className="w-full">
            <h3 className="mb-2 font-nexabold text-lg text-[#EE5D3D]">
              Prep Time:
            </h3>
            <div className="font-nunito">
              <p>{recipe.prepTime} minutes</p>
            </div>
          </div>
          <div className="w-full">
            <h3 className="mb-2 font-nexabold text-lg text-[#EE5D3D]">
              Cook Time:
            </h3>
            <div className="font-nunito">
              <p>{recipe.cookTime} minutes</p>
            </div>
          </div>
          <div className="w-full">
            <h3 className="mb-2 font-nexabold text-lg text-[#EE5D3D]">
              Servings:
            </h3>
            <div className="font-nunito">
              <p>{recipe.servings} servings</p>
            </div>
          </div>
          <div className="w-full">
            <h3 className="mb-2 font-nexabold text-lg text-[#EE5D3D]">
              Meal Type:
            </h3>
            <div className="font-nunito">
              <p className="lowercase">{recipe.mealType}</p>
            </div>
          </div>
          <div className="w-full">
            <h3 className="mb-2 font-nexabold text-lg text-[#EE5D3D]">
              Extra Equipment:
            </h3>
            <div className="font-nunito">
              <p>{recipe.extraEquip}</p>
            </div>
          </div>
        </div>
        <div className="w-full flex-col justify-between text-start">
          <h3 className="px-2 font-nexabold text-lg text-[#EE5D3D]">Steps:</h3>
          <ol className="px-2 font-nunito">{steps}</ol>
        </div>
        <br />
        <FavouriteButton onRecipeFavourited={handleFavourite} />
        <br />
        <BackButton />
      </div>
    </div>
  );
};

export default RecipeDetail;
