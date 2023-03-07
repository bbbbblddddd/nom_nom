import NavBar from "../NavBar";
import BackButton from "../uiComponents/BackButton";

const RecipeDetail = ({ recipe }) => {
  const ingredients = recipe.ingredients.map((ingredient) => {
    return <li key={ingredient.id}>{ingredient.name}</li>;
  });

  const steps = recipe.steps.map((step) => {
    return (
      <li key={step.id}>
        {step.stepNum} {step.description}
      </li>
    );
  });

  return (
    <div className="min-h-screen bg-food_background4 bg-cover bg-fixed p-10 text-center">
      <NavBar />
      <div className="align-items-center mx-auto h-5/6 w-5/6 flex-col justify-evenly rounded-3xl bg-[#fffffff3] px-12">
        <h1 className="p-12 font-nexabold text-4xl text-[#EE5D3D]">
          {recipe.name}
        </h1>
        <div className="align-items-center mb-4 flex rounded-lg bg-[#f7c46c9d] p-5">
          <div className="mb-4 w-full">
            <h3 className="font-nexabold text-lg text-[#EE5D3D]">Prep Time:</h3>
            <div className="font-nunito">
              <p>{recipe.prepTime}</p>
            </div>
          </div>
          <div className="mb-4 w-full">
            <h3 className="mb-2 font-nexabold text-lg text-[#EE5D3D]">
              Cook Time:
            </h3>
            <div className="font-nunito">
              <p>{recipe.cookTime}</p>
            </div>
          </div>
          <div className="mb-4 w-full">
            <h3 className="mb-2 font-nexabold text-lg text-[#EE5D3D]">
              Servings:
            </h3>
            <div className="font-nunito">
              <p>{recipe.servings}</p>
            </div>
          </div>
          <div className="mb-4 w-full">
            <h3 className="mb-2 font-nexabold text-lg text-[#EE5D3D]">
              Meal Type:
            </h3>
            <div className="font-nunito">
              <p>{recipe.mealType}</p>
            </div>
          </div>
          <div className="mb-4 w-full">
            <h3 className="mb-2 font-nexabold text-lg text-[#EE5D3D]">
              Extra Equipment:
            </h3>
            <div className="font-nunito">
              <p>{recipe.extraEquip}</p>
            </div>
          </div>
          <div className="mb-4 w-full">
            <h3 className="mb-2 font-nexabold text-lg text-[#EE5D3D]">
              Ingredients:
            </h3>
            <ul className="font-nunito">{ingredients}</ul>
          </div>
        </div>
        <div className="mb-4 flex w-full justify-between text-start">
          <h3 className="px-2 font-nexabold text-lg text-[#EE5D3D]">Steps:</h3>
          <ol className="px-2 font-nunito">{steps}</ol>
          <img
            src={recipe.image_url}
            alt={recipe.name}
            className="h-64 w-64 justify-center rounded-lg"
          />
        </div>
        <BackButton />
      </div>
    </div>
  );
};

export default RecipeDetail;
