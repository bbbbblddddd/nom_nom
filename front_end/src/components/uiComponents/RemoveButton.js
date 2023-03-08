const RemoveButton = ({ recipe, onRecipeRemoved }) => {
  const handleRemove = () => {
    onRecipeRemoved(recipe);
  };

  return (
    <button
      className="btn btn-secondary rounded-full bg-red-500 p-2"
      onClick={handleRemove}
    >
      Remove
    </button>
  );
};

export default RemoveButton;
