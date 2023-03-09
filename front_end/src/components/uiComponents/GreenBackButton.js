import React from "react";
import { Link } from "react-router-dom";

const GreenBackButton = () => {
  return (
    <Link to="/main/recipes">
      <button className="mx-5 py-3 font-nunito text-xl text-[#3E8B46] hover:text-[#94c938df] hover:underline">
        Back
      </button>
    </Link>
  );
};

export default GreenBackButton;
