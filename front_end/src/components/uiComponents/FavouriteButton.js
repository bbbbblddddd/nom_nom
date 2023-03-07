import React from "react";
import { Link } from "react-router-dom";

const FavouriteButton = () => {
  return (
    <Link to="/main/profile">
      <button className="body-font inline-flex rounded-full bg-[#EE5D3D] p-4 font-nexabold text-xl font-bold text-white hover:bg-[#EE5D3D]">
        Add to Favourites
      </button>
    </Link>
  );
};

export default FavouriteButton;