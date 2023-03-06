import { useState } from 'react';

const RecipeForm = ({ onRecipeCreate }) => {
  const [stateName, setStateName] = useState('');
  const [stateImg, setStateImg] = useState('');
  const [statePrepTime, setStatePrepTime] = useState('');
  const [stateCookTime, setStateCookTime] = useState('');
  const [stateServings, setStateServings] = useState('');
  const [stateMealType, setStateMealType] = useState('STARTER');
  const [stateExtraEquip, setStateExtraEquip] = useState('');

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
      name: stateName,
      imageUrl: stateImg,
      prepTime: statePrepTime,
      cookTime: statePrepTime,
      servings: stateServings,
      mealType: stateMealType,
      extraEquip: stateExtraEquip,
      ingredients: [],
      steps: []
    };
    onRecipeCreate(newRecipe);
    setStateName('');
    setStateImg('');
    setStatePrepTime('');
    setStateCookTime('');
    setStateServings('');
    setStateMealType('starter');
    setStateExtraEquip('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="name" placeholder="Name" onChange={handleName} value={stateName} />
        <br />
        <input type="img" placeholder="Image" onChange={handleImage} value={stateImg} />
        <br />
        <input
          type="prepTime"
          placeholder="Preparation Time (mins)"
          onChange={handlePrepTime}
          value={statePrepTime}
        />
        <br />
        <input
          type="cookTime"
          placeholder="Cooking Time (mins)"
          onChange={handleCookTime}
          value={stateCookTime}
        />
        <br />
        <input
          type="servings"
          placeholder="Servings"
          onChange={handleServings}
          value={stateServings}
        />
        <br />
        <select name="mealType" id="mealType" onChange={handleType} value={stateMealType}>
          <option value="STARTER">starter</option>
          <option value="MAIN">main</option>
          <option value="DESSERT">dessert</option>
          <option value="SNACK">snack</option>
        </select>
        <br />
        <input
          type="extraEquip"
          placeholder="Extra Equipment:"
          onChange={handleEquip}
          value={stateExtraEquip}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default RecipeForm;
