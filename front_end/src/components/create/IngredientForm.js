/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";

const IngredientForm = ({ onIngredientCreate }) => {
  const [stateName, setStateName] = useState("");
  const [stateImg, setStateImg] = useState("");
  const [stateFoodType, setStateFoodType] = useState("FRUIT");
  const [stateQuantity, setStateQuantity] = useState("");
  const [stateUnit, setStateUnit] = useState("CUP");

  const handleName = (event) => {
    setStateName(event.target.value);
  };
  const handleImage = (event) => {
    setStateImg(event.target.value);
  };
  const handleType = (event) => {
    setStateFoodType(event.target.value);
  };
  const handleQuantity = (event) => {
    setStateQuantity(event.target.value);
  };
  const handleUnit = (event) => {
    setStateUnit(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const newIngredient = {
      name: stateName,
      imageUrl: stateImg,
      foodType: stateFoodType,
      quantity: stateQuantity,
      unit: stateUnit,
    };
    onIngredientCreate(newIngredient);
    setStateName("");
    setStateImg("");
    setStateFoodType("FRUIT");
    setStateQuantity("");
    setStateUnit("CUP");
  };

  return (
    <>
      <h3 className="pb-5 font-nexabold text-2xl text-gray-700">
        Now, let's add some ingredients...
      </h3>
      <form onSubmit={handleSubmit}>
        <label className="font-nunito text-xl">Enter an ingredient: </label>
        <br />
        <input
          className="rounded-3xl bg-[#94c93895] p-2 font-nunito text-xl"
          type="name"
          placeholder="Name"
          onChange={handleName}
          value={stateName}
        />
        <br />
        <br />
        <label className="font-nunito text-xl">
          Select an image for your ingredient:
        </label>
        <br />
        <input
          className="rounded-3xl bg-[#94c93895] p-2 font-nunito text-xl"
          type="img"
          placeholder="Choose an image"
          onChange={handleImage}
          value={stateImg}
        />
        <br />
        <br />
        <label className="font-nunito text-xl">What type of food is it?</label>
        <br />
        <select
          className="w-60 rounded-3xl bg-[#94c93895] p-2 font-nunito text-gray-400"
          name="foodType"
          id="foodType"
          onChange={handleType}
          value={stateFoodType}
        >
          <option value="FRUIT">Fruit</option>
          <option value="CONDIMENT">Condiment</option>
          <option value="DAIRY">Dairy</option>
          <option value="VEGETABLE">Vegetable</option>
          <option value="MEAT">Meat</option>
          <option value="FISH">Fish</option>
          <option value="HERBS">Herbs</option>
          <option value="GRAINS">Grains</option>
          <option value="LEGUME">Legume</option>
        </select>
        <br />
        <br />
        <label className="font-nunito text-xl">How much will you need?</label>
        <br />
        <input
          className="rounded-3xl bg-[#94c93895] p-2 font-nunito text-xl"
          type="quantity"
          placeholder="Number of"
          onChange={handleQuantity}
          value={stateQuantity}
        />
        <select
          className="w-60 rounded-3xl bg-[#94c93895] p-2 font-nunito text-gray-400"
          name="unit"
          id="unit"
          onChange={handleUnit}
          value={stateUnit}
        >
          <option value="CUP">cup(s)</option>
          <option value="GRAMS">grams</option>
          <option value="TABLESPOON">tablespoon(s)</option>
          <option value="TEASPOON">teaspoon(s)</option>
          <option value="SINGLE">single</option>
          <option value="MILLILITERS">milliliters</option>
        </select>
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

export default IngredientForm;
