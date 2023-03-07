import IngredientItem from "./IngredientItem";

const IngredientList = ({ ingredients }) => {
  const ingredientNodes = ingredients.map((ingredient, index) => {
    return (
      <li key={index}>
        <IngredientItem ingredient={ingredient} />
      </li>
    );
  });

  return <ul>{ingredientNodes}</ul>;
};

export default IngredientList;
