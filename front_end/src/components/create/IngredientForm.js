import { useState } from 'react';

const IngredientForm = ({ onIngredientCreate }) => {
  const [stateName, setStateName] = useState('');
  const [stateImg, setStateImg] = useState('');
  const [stateFoodType, setStateFoodType] = useState('FRUIT');
  const [stateQuantity, setStateQuantity] = useState('');
  const [stateUnit, setStateUnit] = useState('CUP');

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
      unit: stateUnit
    };
    onIngredientCreate(newIngredient);
    setStateName('');
    setStateImg('');
    setStateFoodType('FRUIT');
    setStateQuantity('');
    setStateUnit('CUP');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="name" placeholder="Name" onChange={handleName} value={stateName} />
        <br />
        <input type="img" placeholder="Image" onChange={handleImage} value={stateImg} />
        <br />
        <select name="foodType" id="foodType" onChange={handleType} value={stateFoodType}>
          <option value="FRUIT">fruit</option>
          <option value="CONDIMENT">condiment</option>
          <option value="DAIRY">dairy</option>
          <option value="VEGETABLE">vegetable</option>
          <option value="MEAT">meat</option>
          <option value="FISH">fish</option>
          <option value="HERBS">herbs</option>
          <option value="GRAINS">grains</option>
          <option value="LEGUME">legume</option>
        </select>
        <br />
        <input
          type="quantity"
          placeholder="Quantity"
          onChange={handleQuantity}
          value={stateQuantity}
        />
        <br />
        <select name="unit" id="unit" onChange={handleUnit} value={stateUnit}>
          <option value="CUP">cup</option>
          <option value="GRAMS">grams</option>
          <option value="TABLESPOON">tablespoon</option>
          <option value="TEASPOON">teaspoon</option>
          <option value="SINGLE">single</option>
          <option value="MILLILITERS">milliliters</option>
        </select>
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default IngredientForm;
