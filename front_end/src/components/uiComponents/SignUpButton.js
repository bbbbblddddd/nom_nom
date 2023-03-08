import React from "react";
import { Link } from "react-router-dom";

const SignUpButton = () => {
  return (
    <Link to="/main/signup">
      <button className="body-font inline-flex font-nunito text-lg font-bold text-[#EE5D3D] hover:text-[#f37a3e] hover:underline">
        Sign Up
      </button>
    </Link>
  );
};

export default SignUpButton;
