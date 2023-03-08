import React from "react";
import { Link } from "react-router-dom";

const SignUpButton = () => {
  return (
    <Link to="/main/signup">
      <button className="body-font inline-flex font-nunito font-bold text-[#EE5D3D] hover:text-[#fc7152] hover:underline">
        Sign Up
      </button>
    </Link>
  );
};

export default SignUpButton;
