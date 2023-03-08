import React from "react";
import { Link } from "react-router-dom";

const AllRecipesButton = () => {
  return (
    <Link to="/main/recipes">
      <button className="mx-5 py-3 font-nunito text-xl text-[#EE5D3D] hover:text-[#ed7156] hover:underline">
        View Recipes
      </button>
    </Link>
  );
};

export default AllRecipesButton;
