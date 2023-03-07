const RemoveButton = ({ recipe, onRecipeRemoved }) => {
  const handleRemove = () => {
    onRecipeRemoved(recipe);
  };

  return (
    <button className="btn btn-secondary bg-red-500" onClick={handleRemove}>
      Remove
    </button>
  );
};

export default RemoveButton;
