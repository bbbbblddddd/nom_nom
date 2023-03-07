import React from "react";
import { Link } from "react-router-dom";

const BackButton = () => {
  return (
    <Link to="/main/recipes">
      <button className="mx-5 py-10 font-nunito text-xl text-[#EE5D3D] hover:text-[#ed7156] hover:underline">
        Back
      </button>
    </Link>
  );
};

export default BackButton;
