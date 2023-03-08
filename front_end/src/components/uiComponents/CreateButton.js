import React from "react";
import { Link } from "react-router-dom";

const CreateButton = () => {
  return (
    <Link to="/main/create">
      <button className="body-font font-nunito text-[22px] font-bold text-[#EE5D3D] hover:text-[#ed7156] hover:underline">
        create your own recipe?
      </button>
    </Link>
  );
};

export default CreateButton;
