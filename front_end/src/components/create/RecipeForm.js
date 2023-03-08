import { useState } from "react";

const RecipeForm = ({ onRecipeCreate }) => {
  const [stateName, setStateName] = useState("");
  const [stateImg, setStateImg] = useState("");
  const [statePrepTime, setStatePrepTime] = useState("");
  const [stateCookTime, setStateCookTime] = useState("");
  const [stateServings, setStateServings] = useState("");
  const [stateMealType, setStateMealType] = useState("STARTER");
  const [stateExtraEquip, setStateExtraEquip] = useState("");

  const handleName = (event) => {
    setStateName(event.target.value);
  };
  const handleImage = (event) => {
    setStateImg(event.target.value);
  };
  const handlePrepTime = (event) => {
    setStatePrepTime(event.target.value);
  };
  const handleCookTime = (event) => {
    setStateCookTime(event.target.value);
  };
  const handleServings = (event) => {
    setStateServings(event.target.value);
  };
  const handleType = (event) => {
    setStateMealType(event.target.value);
  };
  const handleEquip = (event) => {
    setStateExtraEquip(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const newRecipe = {
      cookTime: statePrepTime,
      extraEquip: stateExtraEquip,
      image_url: stateImg,
      ingredients: [],
      mealType: stateMealType,
      name: stateName,
      prepTime: statePrepTime,
      reviews: [],
      servings: stateServings,
      steps: [],
    };
    onRecipeCreate(newRecipe);
    setStateName("");
    setStateImg("");
    setStatePrepTime("");
    setStateCookTime("");
    setStateServings("");
    setStateMealType("starter");
    setStateExtraEquip("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label className="font-nunito text-xl">Enter a fun recipe name:</label>
        <br />
        <input
          className="rounded-xl bg-[#94c93895] p-2 font-nunito text-xl"
          type="name"
          placeholder="Name"
          onChange={handleName}
          value={stateName}
        />
        <br />
        <br />
        <label className="font-nunito text-xl">
          Select an image for your recipe:
        </label>
        <br />
        <input
          className="rounded-xl bg-[#94c93895] p-2 font-nunito text-xl"
          type="img"
          placeholder="Choose an image"
          onChange={handleImage}
          value={stateImg}
        />
        <br />
        <br />
        <label className="font-nunito text-xl">
          How long will it take to prepare?
        </label>
        <br />
        <input
          className="rounded-xl bg-[#94c93895] p-2 font-nunito text-xl"
          type="prepTime"
          placeholder="e.g. 5 minutes"
          onChange={handlePrepTime}
          value={statePrepTime}
        />
        <br />
        <br />
        <label className="font-nunito text-xl">
          How long will it take to cook?
        </label>
        <br />
        <input
          className="rounded-xl bg-[#94c93895] p-2 font-nunito text-xl"
          type="cookTime"
          placeholder="e.g. 10 minutes"
          onChange={handleCookTime}
          value={stateCookTime}
        />
        <br />
        <br />
        <label className="font-nunito text-xl">
          How many servings will it have?
        </label>
        <br />
        <input
          className="rounded-xl bg-[#94c93895] p-2 font-nunito text-xl"
          type="servings"
          placeholder="Servings"
          onChange={handleServings}
          value={stateServings}
        />
        <br />
        <br />
        <label className="font-nunito text-xl">
          What sort of meal will it be?
        </label>
        <br />
        <select
          className="w-60 rounded-xl bg-[#94c93895] p-2 font-nunito text-gray-400"
          name="mealType"
          id="mealType"
          onChange={handleType}
          value={stateMealType}
        >
          <option value="STARTER">Starter</option>
          <option value="MAIN">Main</option>
          <option value="DESSERT">Dessert</option>
          <option value="SNACK">Snack</option>
        </select>
        <br />
        <br />
        <label className="font-nunito text-xl">
          Will you need any extra equipment?
        </label>
        <br />
        <input
          className="rounded-xl bg-[#94c93895] p-2 font-nunito text-xl"
          type="extraEquip"
          placeholder="e.g. food processor"
          onChange={handleEquip}
          value={stateExtraEquip}
        />
        <br />
        <button
          className="m-6 rounded-full bg-[#3E8B46] p-4 font-nunito text-xl text-white"
          type="submit"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default RecipeForm;
