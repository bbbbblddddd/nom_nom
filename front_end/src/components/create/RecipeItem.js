const RecipeItem = ({ newRecipe }) => {
  return (
    <>
      <h3 className="font-nunito text-4xl font-bold text-[#EE5D3D]">
        {newRecipe.name}
      </h3>
      <br />
      <img
        className="ml-36 rounded-xl"
        src={newRecipe.image_url}
        alt={newRecipe.name}
        width="200rem"
        height="200rem"
      />
      <br />
      <p className="font-nunito text-xl font-bold text-[#EE5D3D]">Prep Time:</p>
      <p className="font-nunito text-xl">{newRecipe.prepTime} mins</p>
      <br />
      <p className="font-nunito text-xl font-bold text-[#EE5D3D]">Cook Time:</p>
      <p className="font-nunito text-xl">{newRecipe.cookTime} mins</p>
      <br />
      <p className="font-nunito text-xl font-bold text-[#EE5D3D]">Servings:</p>
      <p className="font-nunito text-xl">{newRecipe.servings} servings</p>
      <br />
      <p className="font-nunito text-xl font-bold text-[#EE5D3D]">Meal Type:</p>
      <p className="font-nunito text-xl">{newRecipe.mealType}</p>
      <p className="font-nunito text-xl font-bold text-[#EE5D3D]">
        Extra equipment:
      </p>
      <p className="font-nunito text-xl">{newRecipe.extraEquip}</p>
      <br />
      <br />
    </>
  );
};

export default RecipeItem;
