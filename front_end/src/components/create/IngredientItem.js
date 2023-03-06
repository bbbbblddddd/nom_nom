const IngredientItem = ({ ingredient }) => {
  return (
    <>
      <h3>{ingredient.name}</h3>
      <p>
        {ingredient.quantity} {ingredient.unit}
      </p>
    </>
  );
};

export default IngredientItem;
