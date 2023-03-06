import { Link } from 'react-router-dom';
const ViewButton = ({ recipe, onRecipeSelected }) => {
  const handleClick = () => {
    onRecipeSelected(recipe);
  };

  return (
    <Link to={'/main/recipes/' + recipe.id}>
      <button
        className="inline-flex items-center rounded-lg bg-[#EE5D3D] px-3 py-2 text-center text-sm font-medium text-white hover:bg-[#EE5D3D] focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-[#EE5D3D] dark:hover:bg-[#EE5D3D] dark:focus:ring-blue-800"
        onClick={handleClick}>
        View recipe
      </button>
    </Link>
  );
};

export default ViewButton;
